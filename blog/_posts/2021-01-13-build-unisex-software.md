---
title: Build unisex software
description: Don’t ask people to tell you their gender
layout: hh
tags: DDD UX
image: toy-flow-chart-2x.png
css: ".img{text-align:center}"
---

Sometimes, it takes well-aimed humour to pierce a persistent bubble.
This [handy flow chart](http://www.blog.kristenmyers.com/toys-a-guide/) by
[Kristen Myers](https://twitter.com/kristen_myers) 
neatly ridicules gendered toys for children along with, once you’ve learned to see it,
so many other unnecessarily gendered things.

<p class="img"><img src="toy-flow-chart.png" srcset="toy-flow-chart-2x.png 2x" alt="How to tell if a toy is for boys or girls: a guide"></p>

[Kristen Myers](http://www.blog.kristenmyers.com/toys-a-guide/){:.photocredit}

This also applies to business software.
Unfortunately, some software products and services still behave as if they need to know their customers’ genders.

## Don’t ask people to disclose their gender

When you build a registration form or user profile page, don’t include a _gender_ field.
Few services need to know someone’s gender to operate, so default to building unisex software and proving the same services to people of all genders.

If you think you do need to ask for gender, or other personal information, clearly state what you will use it for.
Your gender-specific marketing strategy, in particular, doesn’t present the winning argument you think it does.
Instead, it makes you complicit in [pink taxation](https://en.wikipedia.org/wiki/Pink_tax).

And if you ask for gender anyway, first research how to do this properly.
Hint: you need to provide more than two options, and you need to talk to legal about the 
[GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation).

## Don’t require gendered personal titles

While business software doesn’t usually ask for gender these days, many forms ask people to select personal titles from gendered options, including _Mr_ and _Mrs_.
Why? Usually only to construct greetings in email notifications and marketing spam.

You need a much better reason than email salutations to ask people for their gender, even indirectly via titles.
Instead of asking someone for their personal title, ask how they want you to greet them.
Offer suggestions:

* Hi Peter
* You look nice today!
* Dear highly-esteemed most honourable customer
* [wotcha](https://dictionary.cambridge.org/dictionary/english/wotcha)!
* 👋

Meanwhile, people expect different levels of formality from friends, colleagues, customers and service providers, even within countries.
Greetings vary between countries, between communities in the same country, and also between contexts.
Letting people choose gives you a better way to internationalise greetings than attempting fine-grained localisation, even if you did bother trying.

Alternatively, just [skip salutations in email from non-humans](omit-notification-salutations).
Personally, I’d rather have bug-free software and better performance than fake politeness.

## Ask only for what you actually need

In general, only ask for personal data that you need.
Don’t collect more data than you need, such as titles when you want to construct a greeting, and don’t collect personal data in case you need it later.
This follows from two principles:

1. [data minimisation](https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/principles/data-minimisation/)
2. YAGNI ([you aren’t gonna need it](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it))

These principles help you recognise that when you construct a greeting from someone’s gender, or vice versa, you assume things about people and local cultures that you shouldn’t.

In general, a derived value results from combining some data with faulty assumptions.
Data is an asset. Personal data is a liability.
