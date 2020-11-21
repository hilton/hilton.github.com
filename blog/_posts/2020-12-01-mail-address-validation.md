---
title: Validate email addresses to level 4
description: First person to say ‘regex’ loses
layout: hh
tags: software design
image: message-bottle.jpg
css: 'article { counter-reset: h2counter; } article h2:before { content: counter(h2counter) ".\0000a0"; counter-increment: h2counter; }'
---

<img src="message-bottle.jpg" alt="A message in a bottle">

<a class="unsplash" href="https://unsplash.com/photos/ag2X3zpvPKk" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Andrew Measham</span></a>

Every time you add an email address field to a product, you wonder _how can we tell if the user entered the right email address?_
This calls for more than basic address format validation, and even trying to do that turns out worse than you expected.

You haven’t validated a mail address unless you’ve sent mail to it, and confirmed that the right person got it.
This validation has four levels.

## Check against the SMTP standard

When people enter a mail address, check that the address complies with the Internet email ([SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)) standard.
This helps catch obvious errors, such as entering a telephone number instead of a mail address.
Unfortunately, the [various standards](https://en.wikipedia.org/wiki/Email_address#Standards_documents) allow a 
[wide variety of characters and formats](https://en.wikipedia.org/wiki/Email_address#Examples).

This variety makes it difficult to correctly check a mail address against the standard without rejecting valid addresses, which frustrates people who would otherwise use your software.
The complexity means that an individual developer who implements this check will most likely get it wrong.

Using someone else’s implementation requires choosing carefully.
Online searches tend to find other people’s broken implementations, especially simplified 
[regular expression](https://en.wikipedia.org/wiki/Regular_expression) (regex) ‘solutions’ that look less scary than the example at the bottom of
[Dragons.java](https://github.com/bbottema/email-rfc2822-validator/blob/master/src/main/java/org/hazlewood/connor/bottema/emailaddress/Dragons.java).

## Choose which domains to exclude

In most cases, your software asks for a mail address because you want to send mail there.
Even if you only want to check for obvious mistakes, you won’t want to accept everything that looks like a valid mail address.

You can’t send mail to the domains reserved for documentation examples and testing:

* `.test` `.example` `.invalid` `.localhost` top-level domains
* `example.com` `example.net` `example.org` second-level domains

You also can’t mail local addresses on someone else’s server, such as `peter@localhost`.
Ideally, the way you check addresses against the standard offers the option to disallow local addresses and example domains
(unlike Java’s [InternetAddress.validate()](https://docs.oracle.com/javaee/7/api/javax/mail/internet/InternetAddress.html#validate--) method).

Third, you can’t send mail to an unregistered domain, or one with no mail servers.
You can exclude these to check for typos, and warn someone entering a mail address to ‘double check’ their input.
Note: this requires network queries, which might affect system performance, although you can cache the (DNS lookup) results.

Domains don’t always register mail exchange (MX) records that list their mail servers, so don’t assume that a domain without them cannot receive mail.
A domain _can_ announce ([RFC 7505](https://tools.ietf.org/html/rfc7505)) that it does not accept mail, which might help.

## Check if the address exists

SMTP defines a way to ask a mail server to confirm an address, but security measures dictate disabling it.
To check that an address exists, in practice, you have to send mail there and confirm receipt, typically by asking the recipient to open a URL that contains a unique token.

## Check if the address belongs to the right person

Just because someone receives your verification mail, doesn’t mean the _right_ person did.
Implement a final check that blocks people from using your product until you have confirmed that _they_ received the mail you sent them.
Otherwise, they will use your service without correcting the mistake, like the Peter Hilton in another country whose telephone bill I receive every month.
