---
title: Don’t measure duration in months
description: avoiding real-world messiness in software design
excerpt:     avoiding real-world messiness in software design
layout: hh
tags: DDD
image: moon.jpg
---

![](moon.jpg){:.photo}

[Gabriel Castles](https://unsplash.com/photos/bJffhA2jOt4){:.photocredit}

I once heard, or maybe read, a product analytics joke.
It goes like this:

> **Manager:** How many monthly active users do we have?
>
> **Analyst:** Well, that depends on what you mean by _monthly_, _active_ and _user_.

Apparently, like product management, product analytics doesn’t have any good jokes,
and relies on dark observational humour.
But as with other educational jokes, this one signals an underlying lesson.

## The month problem

Months have different lengths.
Now that I think about it, this strikes me as an unusual situation for a unit of measure.
In a way, I blame
[Pope Gregory XIII](https://en.wikipedia.org/wiki/Pope_Gregory_XIII) for not making a better job of his eponymous
[Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar).
Perhaps he considered the
[Julian calendar’s months](https://en.wikipedia.org/wiki/Julian_calendar#Table_of_months) _good enough_.
Or maybe he did what he could, with what he had to work with.

Instead of blaming a particular calendar,
we can attribute irregular month lengths to a botched solar system design:
Earth has a solar year of 365.2422 days.
A better designed solar year’s duration would equal a whole number of solar days,
with generous factorisation, such as 360 days
(albeit at the potential cost of an Earth orbit that doesn’t support human life).

## Monthly active users

In the product analytics world, measuring
[monthly active users](https://en.wikipedia.org/wiki/Monthly_active_users)
means choosing a fixed duration.
Some software companies standardise the _analytics month_ as 30 days.
This lets you measure every day, using a moving window of the last 30 days’ data.
30 days roughly corresponds to a calendar month, which makes it easier to interpret the data.

30-day months don’t work so well for business software.
If people use your B2B SaaS at work, Monday to Friday, you probably have lower use at weekends.
This makes _last 30 days_ metrics volatile, as the number of weekend days varies.
To solve this, use the _last 28 days_ instead,
at the cost of adopting a February-sized analytics month.

## Longer periods

Longer periods smooth out volatile data.
Helpfully, calendar quarters vary less than months:

| Calendar quarter | Days  |
| ---------------- | ----- |
| Q1               | 90–91 |
| Q2               | 91    |
| Q3               | 92    |
| Q4               | 92    |

These lengths still vary by 1–2 per cent,
so beware of attempting to compare quarterly numbers with more precision than that.
Therefore, specify longer periods as a number of days or weeks.
And at this point, I feel almost grateful that 52 weeks adds up to only a day or two short of a whole calendar year.

In practice, we avoid thinking about this too much, for longer periods,
and tend to use round numbers of days: 30, 90 or 180 days, for example.
These feel more comfortable than 4, 13 or 26 weeks.
Either way, the next time someone on a software development specifies something for _half a year_,
gently suggest picking a specific number of days.

## Domain language

It turns out that many of the terms we use don’t have a _precise_ natural definition.
Instead, on the dark side of domain-driven design,
we find domain language that remains stubbornly undefinable.
When this happens, you should _judo the problem_ if you can,
by avoiding problematic domain language in favour of well-behaved jargon.
