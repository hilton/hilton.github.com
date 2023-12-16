---
title: QA collaboration for product managers
description: Software quality from a broader product perspective
layout: hh
tags: product QA
image: test-tubes.jpg
---

![](test-tubes.jpg)

[Testalize.me](https://unsplash.com/photos/KWb_41kG0GE){:.photocredit}

*[QA]: (quality assurance) - colloquial term for software testing, not necessary standards-based
*[UX]: user experience - software design that considers how people interact with software

Software developers approach [software testing](https://en.wikipedia.org/wiki/Software_testing) (QA)
with a focus on removing software bugs from product releases.
From this perspective, preventing and fixing bugs aims to increase development speed, by reducing work on support requests and fixing bugs
([failure demand](https://beyondcommandandcontrol.com/failure-demand/)).

QA people take a broader view of testing’s purpose and scope.
For example, Janet Gregory describes how testing activities appear throughout the development lifecycle,
in what she calls
[holistic testing](https://janetgregory.ca/testing-from-a-holistic-point-of-view/).

A broader concept of testing starts before coding, and extends beyond software releases to include customers.
This expanded testing scope aligns with end-to-end product management.

## Developer-centric testing limits

Developer-centric testing delivers a lot of value, because automated testing increases test coverage, and reduces bugs.
However, developers’ tendency to reframe problems as _coding problems_, including testing, limits testing scope rather than expanding it.
And you can’t automate every kind of test.

Automated tests, and by extension developers themselves, may include testing for some
[non-functional requirements](http://en.wikipedia.org/wiki/Non-functional_requirement),
such as **performance**, but exclude others, such as **usability**.
Designers resolve this by expanding testing to include user testing.
Similarly, an even broader testing scope involves product management.

## Feature success testing

For product managers, ‘testing’ a feature means finding out whether it achieves [feature success](feature-lifecycle).
In [product growth](https://bootcamp.uxdesign.cc/activation-adoption-engagement-how-they-drive-product-growth-cf2409a58b98)
terms, successful features achieve:

1. **activation** - customers start using the feature
2. **adoption** - customers regularly use the feature
3. **engagement** - customers get value from the feature. 

Just because a feature doesn’t have any bugs, doesn’t make it _done_.
Perhaps nobody knows the feature exists, or can’t figure out how to use it.
And sometimes, no-one needed or wanted it  in the first place.

## Bugs break product experiments

Product managers sometimes call their feature tests _feature experiments_,
because they want to release a feature (or feature improvement) to test a hypothesis.
Customers can’t start to use a feature that doesn’t work, so you have to 
[fix the bugs first](zero-bug-policy).

Feature success testing _starts_ with a software release, but does require a bug-free release.
This means that product managers and QA people have two reasons to collaborate

1. Feature bugs invalidate feature experiments.
2. QA people want to engage in holistic testing, from discovery to engagement.

Product managers already have a good way to systematically work with designers.
It also works with QA people.

## The other product trio

Product-QA collaboration should include a tech lead, to avoid doing things the hard way when automation and technical design could help:

1. **product manager**
2. **tech lead**
3. **QA engineer**

The resulting QA product trio mirrors the more conventional 
[UX product trio](https://www.producttalk.org/2021/05/product-trio/) that includes a designer, during discovery:

1. **product manager**
2. **tech lead**
3. **UX designer**

This collaboration can start with choosing pre-release acceptance criteria.
If a product manager, QA specialist and developer talk about acceptance criteria when the developer starts work on a user story, you enable a more agile approach than ‘refining’ the story days or weeks earlier.

The QA product trio can also design post-release tests and metrics.
Product managers can benefit here from both developer insights on how to collect data and  QA insights on what to do with it.

## Dedicated QA roles

Some product development teams have a dedicated QA role, while some leave QA responsibilities to developers.
Both work, but a dedicated QA role makes a product manager’s job easier, by providing a focus for QA collaboration.
