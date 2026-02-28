---
title: Continuously improve user experience
description: meaningfully finishing software features
layout: hh
tags: product design
---

[Choosing software quality](software-quality) means _finishing_ the features you add,
instead of stopping working on them as soon as they work.
Unfinished features _work_, to some degree, but not for everyone.
They don’t all have a good [user experience](https://en.wikipedia.org/wiki/User_experience) (UX).

## The feature fallacy

Just because you _really want_ to measure something easily, doesn’t mean you can.
Programmers have understood for decades that an increasing number of 
[lines of code](https://en.wikipedia.org/wiki/Source_lines_of_code) doesn’t measure progress,
let alone success.

Similarly, despite naive software project managers’ wishful thinking,
an increasing number of features doesn’t measure product development progress.
Features don’t count unless people successfully use them.

## Good UX design

UX design goes beyond designing how a feature will work, and handing over to developers.
Good design includes a feedback loop.

Design includes evaluation, such as user testing and reviewing behavioural analytics,
to learn how well a design performs.
This work identifies barriers and friction that iterative design can resolve.

By doing this work, designers build experience about what makes different designs successful in different contexts.
Good designers use this experience to shortcut feedback cycles,
by anticipating both user experience friction and its solutions.
You have to start from somewhere, and starting from _good design_ gives you a head start.

## Incremental units of work

Development teams commonly track development tasks,
with _types_ such as _feature_, _improvement_ and _bug_.
This creates the illusion that setting a _feature_ task’s state to _done_ 
means that the team has completed work on a feature.
However, the [feature lifecycle](feature-lifecycle) includes _released_ and _retired_, but not _done_.

This _feature_ task type doesn’t match your customer’s mental model of a feature.
Developers’ _feature_ tasks correspond to smaller [units of work](units-of-work):
_development tasks_ and _user stories_.
The _feature_ type really means _feature introduction_.

What your customers calls a _feature_ requires larger scale work.
Crucially, this work starts with a _feature_ task that introduces a new feature,
and starts its feature lifecycle, but continues with a series of UX improvements and bug fixes.

## Stop starting and start finishing

Too much  _feature introduction_ work and not enough _UX improvement_ work has consequences.
Sometimes, a team completes a task that introduces a new feature without following up with the UX improvements that make the feature successful.

Starting too many new features makes the software worse,
by increasing feature complexity without improving the user experience.
In the worst case, a software product only has a large number of half-implemented features.

## Start once, finish twice

Ideally, you finish working on a feature in two different ways.
First, continue improving an existing feature until it achieves its intended business outcomes.
At the same time, continue improving its UX until it reaches the level of quality you choose for your product.

Deciding how much UX improvement work to do contributes to more broadly
[deciding software quality](software-quality).
Only when you stop starting new features can you start _finishing_ new features,
in terms of business outcome and product quality.
