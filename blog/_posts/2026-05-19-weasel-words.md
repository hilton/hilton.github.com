---
title: Domain-specific weasel words
description: bad naming habits for product people, coders, and scientists
excerpt:     bad naming habits for product people, coders, and scientists
layout: hh
tags: product
image: library-reference.jpg
---

![](library-reference.jpg)
[Monjur Hasan](https://unsplash.com/photos/IZyAtxoPX98){:.photocredit}

Every subject matter domain has its own
[weasel words](https://en.wikipedia.org/wiki/Weasel_word),
that people use to avoid having to say what they actually mean.
In some cases, a generic term becomes so acceptable that practitioners invent _frameworks_ to
push back against systematic vagueness.

## Product design

Only two kinds of people talk about _users_: software vendors and drug-dealers.
In the case of software, it might have made sense to talk about a _user_ in the context of pre-Internet single user software.
However, when modern business software caters for diverse people, in different job roles,
treating them all as a single group of _users_ works against addressing their different needs.

User experience designers use a **framework** of user types:
[personas](https://en.wikipedia.org/wiki/Persona_(user_experience)).
Each persona has a name and description, which sometimes become detailed enough to make defining personas a whole project.

Rich Mironov argues for a simpler approach:
[Let’s Abandon Customers and Users](https://www.mironov.com/abandon/)
advises product people to use domain-specific terms, such as _shopper_ or _doctor_,
instead of _customer_ or _user_.

> Let’s set up a Venmo tip jar, and fine ourselves $5 for every story that starts
> ‘As a user…’ or ‘As a customer…’

He doesn’t literally mean that product teams should have a _swear jar_, though.
That would make his advice a _framework_.

## Object-oriented programming

Programmers face a similar issue when they call a software component a _manager_.
Ideally, they would name each component in a consistent and meaningful way,
such as with a noun-phrase that describes its responsibilities.
In practice, lazier naming combines _manager_ with a broad topic, such as _authorisation_,
to get a vague name like `AuthorisationManager`.

I used to tell developers not to use the weasel word _manager_ in my presentation on
[how to name things](/presentations/naming),
and would get a reliable laugh when I pointed out the vagueness of a name like `AuthorisationManager` by saying:

> After all, who even knows what a manager does?

Domain-driven design practitioners use a **framework** of names:
[bounded contexts](https://martinfowler.com/bliki/BoundedContext.html).
Each bounded context uses domain-specific language to define its own model,
which in turn provides better jargon for naming software components.

## Scientific research

Outside software development, the authors of scientific papers have their own weasel words,
such as when they use the phrase ‘The literature says…’ to introduce a claim.
A field’s body of literature may indeed universally support the claim,
but this phrase may equally mean that the author read a similar claim in a single unpublished and unreviewed pre-print.

Scientific publishing uses a **framework** when referring to earlier work:
[citation](https://en.wikipedia.org/wiki/Scientific_citation).
These citations refer to specific published work, typically peer-reviewed journal articles.
A phrase like _the literature says_ should cite a
[systematic review](https://en.wikipedia.org/wiki/Systematic_review)
that consolidates results from earlier work – collectively, _the literature_.

## Example-first explanations

A common thread ties these examples from product design, programming, and scientific research.
People understand explanations better when concrete examples should precede abstraction.
