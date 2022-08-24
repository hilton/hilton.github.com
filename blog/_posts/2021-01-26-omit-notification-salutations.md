---
title: Omit salutations in automated notifications
description: Don’t waste time on fake greetings
layout: hh
tags: software design
image: hello-beautiful.jpg
---

![](hello-beautiful.jpg)

<a class="unsplash" href="https://unsplash.com/photos/jbroe3pOt8M" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Ian Schneider</span></a>

<!--
1. Software tries to be cute, familiar and human
2. ‘Have a nice day!’ sounds fake but works
3. Beware the Uncanny valley
4. Internationalisation costs hard work
5. Save time
-->

*[I18N]: internationalisation, which has eighteen letters between the first and last

The shift to web-based software introduced us all to email notifications.
Meanwhile, as we shift personal communication from email to other messaging platforms, hand-typed email becomes rarer.
We’ve ended up with email inboxes full of email from software.

Email notifications often start with some [salutation](https://en.wikipedia.org/wiki/Salutation),
such as ‘Hi Peter’, ‘Hello’ or ‘Dear Customer’.
These automated greetings vary in formality and cuteness, but share the pretence that a human wrote them.
Consider leaving out these greetings, because they probably don’t work, look weird, don’t internationalise, and waste readers’ time.

## Fake friendliness

At best, automated greetings’ fake friendliness does no harm.
Given the 
[scientific suggestion that smiling makes you a little bit happier](https://psyarxiv.com/svjru/),
perhaps writing software that writes like a friendly human has some kind of positive effect on your customers as well.

I remember when the first local McDonald’s opened, as a child growing up in the South of England.
Our first encounter with scripted customer service greatly amused us,
because we’d never heard a real person use the American English phrase _Have a nice day!_ before.

This impersonal approach has a benefit.
Compared to a real person having a bad day, it takes less effort to interact with someone role-playing a customer service robot.
I’d rather get _Have a nice day!_ and a fake smile than your genuine bad mood, especially when I’ve had a bad day so far myself.

## Uncanny valley

Another risk with automated greetings lies in the [uncanny valley](https://en.wikipedia.org/wiki/Uncanny_valley).
We don’t mind reading email notifications that software wrote, as long as it remains clearly robotic.
But when software that tries too hard and fails, it receives the
[eye-rolling](https://en.wikipedia.org/wiki/Eye-rolling) and ridicule that famously led to the 
[downfall of Clippy](https://en.wikipedia.org/wiki/Office_Assistant#Criticism_and_parodies).

## I18N #FAIL

Even when sticking to English, the conventional way to greet me in writing varies from country to country.
Examples include:

* Hi Peter - United States, the Netherlands
* Mr Hilton - United Kingdom, France
* Dear Mr Peter - Thailand

Appropriate greetings vary around the world, so unless you go to a lot of effort to localise salutations for different countries, whichever one you choose will either look stupid or rude in most places.
Greetings also vary within a country, in different contexts, so getting this right may cost more than you can afford.

## Notification usability

Every day, a document management system sends me email to notify me that someone has edited a document that I follow.
I do not need these notifications to greet me.
Instead, I want to do two things as quickly as possible:

1. Recognise the email as a document edit notification
2. See what text the edit changed

I might also want to read more information, such as a time stamp, or open a link.
None of this should require me to read an English sentence.

Frequent notifications that provide structured information don’t need greetings.
Leaving out fluff such as greetings and presenting the notification information in a table, or other regular structure, saves time.

## Omit salutations

While friendly greetings for things like newsletters no-doubt serve a purpose, and establish a conversational tone, greetings do not belong in informational notifications.
Simplify your SaaS email notifications and skip the greetings.
