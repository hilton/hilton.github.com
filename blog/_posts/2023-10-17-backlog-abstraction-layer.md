---
title: The backlog abstraction layer
description: A developer perspective on taming infinite backlogs
layout: hh
tags: product
image: leaves.jpg
---

![](leaves.jpg)

[Hasan Almasi](https://unsplash.com/photos/SpCrTUG2nu8){:.photocredit}

{:.series}
1. [Infinite backlog problem](infinite-backlog)
2. [Incredible shrinking backlog](backlog-shrinkage)
3. Backlog abstraction layer ←

[The infinite backlog problem](infinite-backlog)
describes how ‘stakeholders’ pollute software development teams’ backlogs with feature requests, and the waste that causes.
Development teams need small backlogs.

## Just enough backlog

Developers only need items on the backlog _just in time_:
in theory, they only need one item to start next, which the product manager then immediately replaces with the next thing to work on after that.
In an ideal world, with a [two-minute product manager](two-minute-rule),
developers wouldn’t need a backlog at all.
In practice, teams need to queue up some work in advance.

Scrum teams who use two-week sprints end up with at least the next sprint on their backlog.
If they switch to more frequent releases, they could reduce the backlog to a week’s work.

Teams that also avoid large development teams can reduce the backlog even further.
A week’s work for 4-6 developers leaves so few backlog items that you can use really simple tools, and have much shorter meetings.

The small backlog solution requires two things:

1. [continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery), or at least weekly releases
2. another way to manage feature requests.

Modern software development covers continuous delivery, but redirecting feature requests requires something else.
It requires product management.

## Product feedback databases

Product managers routinely collect product feedback from various internal and customer sources.
This feedback firehose would drown development teams if they tried to consume it directly, so product managers consolidate this feedback into something more useful than a stream of feature requests.

First, you reframe feature requests as _feedback_.
When a customer says they want a feature, they don’t necessarily actually need it, but they did just give you feedback that they need _something_.

A feedback database captures this raw feedback, ideally including direct customer quotes, for classification and analysis.
Instead of using this feedback database as a development backlog, product managers use it as supporting evidence for product prioritisation decisions.

## Feature wish hierarchies

Next, consolidate customer feedback into a list of unique feature requests, showing how many customers requested each feature.
However, these feature wish lists quickly become longer than my product management books wish list, 
and like the difference between blog posts and books, some features would require significantly more time and effort than others.

To cope with its size, the wish list becomes a feature _wish hierarchy_, for example grouping requests for different kinds of data exports into a more abstract _data export_ feature.
Organising every feature request into a huge feature hierarchy gets you a horrific preview of a huge monster product with every possible feature.

Please don’t build Godzilla software.
Instead, you can further analyse feature requests, discover patterns, and create a more valuable abstraction.
And then you add another layer of abstraction.

## Abstract problem space

After grouping various features into _data export features in general_,
you can recite the standard product management inquiry: _what problem do you want to solve?_
This reframes the abstract feature as an [opportunity](product-documents#opportunity):
_sharing data with other people_ or _using multiple software tools_, for example,
or however else your customers talk about their corresponding problems, frustrations and needs.

Ironically, programmers love both tree structures and 
[extra levels of abstraction](https://en.wikipedia.org/wiki/Fundamental_theorem_of_software_engineering),
so you won’t find it difficult to explain replacing the development backlog with a _hiearchical problem space abstraction layer_,
even if you normally call it something else.
