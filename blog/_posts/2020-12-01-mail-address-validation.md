---
title: Validate email addresses to level 4
description: First person to say ‘regex’ loses
layout: hh
tags: software design
---

Every time you add an email address field to a product, you need to wonder _how can we tell if the user entered the right email address?_
Basic address format validation isn’t enough, and even trying to do that turns out worse than you expected.

You haven’t really validated a mail address unless you’ve sent mail to it, and confirmed that the right person got it.
This article breaks that down into four levels.

## Level 1: check against the SMTP standard

When people enter a mail address, check that the address complies with the Internet email ([SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)) standard.
This helps catch obvious errors, such as entering a telephone number instead of a mail address.
Unfortunately, the [various standards](https://en.wikipedia.org/wiki/Email_address#Standards_documents) allow a 
[wide variety of characters and formats](https://en.wikipedia.org/wiki/Email_address#Examples).

This variety makes it difficult to correct check a mail address against the standard without rejecting valid mail addresses, which frustrates people who would otherwise use your software.
This complexity means that an individual developer who implements this check will most likely get it wrong.

Using someone else’s implementation requires choosing carefully.
Many online searches lead to other people’s broken implementations, especially simplified ‘solutions’ such as regular expressions that are shorter than the example at the bottom of
[Dragons.java](https://github.com/bbottema/email-rfc2822-validator/blob/master/src/main/java/org/hazlewood/connor/bottema/emailaddress/Dragons.java).

## Level 2: choose which domains to exclude

Despite only wanting to check for obvious mistakes, you still might not want to accept everything that looks like a valid mail address.
In most cases, your software asks for a mail address because you want to send mail to that address.
For the next level of validation, consider excluding mail addresses that you can’t send mail to: local addresses, domains not configured to receive mail, and example domains.

You definitely can’t send mail to domains that the standards reserve for documentation examples and testing:

* top-level domains - `.test` `.example` `.invalid` `.localhost`
* second-level domains - `example.com` `example.net` `example.org`

You also can’t send mail to local addresses on someone else’s server, such as `peter@localhost`.
Ideally, whatever tools you use to check mail addresses against the standard give you the option to disallow local address and example/testing domains.

Third, you can’t send mail to an unregistered domain, or one with no mail servers.
Consider excluding these to check for typos in user input, and so you can warn someone entering a mail address to ‘double check’ their input.
This requires network queries, which might affect system performance, although you can cache the results.

Domains don’t always register mail exchange (MX) records that list their mail servers, so you can’t assume that a domain without them cannot receive mail.
However, a domain can explicitly announce 
([RFC 7505](https://tools.ietf.org/html/rfc7505)) that it does not accept mail, which might help.

## Level 3: check if the address exists

While the SMTP standard includes a way to ask a mail server if it can delivery mail to a given address, standard security measures generally dictate disabling it.
In practice, you can only check that an address exists by sending mail to that address and confirming receipt, typically by asking the recipient to open a URL that contains a unique token for the check.

## Level 4: check if the address belongs to the right person

Just because someone receives your verification email, doesn’t mean the _right_ person did.
