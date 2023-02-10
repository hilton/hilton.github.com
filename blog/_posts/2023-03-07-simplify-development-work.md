---
title: Simplify development work organisation
description: Reducing chaos by consolidating different levels of units of work
layout: hh
tags: product
image: one-nesting-doll.jpg
---

![](one-nesting-doll.jpg)

[Blake Weyland](https://unsplash.com/photos/9hhOVsf1lpU){:.photocredit}

{:.series}
1. [Units of work](units-of-work)
2. [Simplify product work](simplify-product-work)
3. Simplify development work ←

Product development teams typically organise their work into different levels of granularity with different
[units of work](units-of-work).
On timescales from days to minutes, these include:

1. **user story** - a new or updated software product capability
2. **development task** - a change to the software
3. **pull request** - a set of commits combined into a batch of proposed code changes
4. **code commit** - a source code version control history entry

While you might not find as many opportunities to simplify these levels of work as with
[product work organisation](simplify-product-work),
you probably don’t need all four.

## User stories & features

Features, often described by user stories, represent moving from planning to delivery.
They bring the product trio of product manager, designer and developer together to deliver a product improvement.
This occupies the centre of the [units of work](units-of-work) hierarchy, in the sense that at a small enough scale, you don’t need any of the other levels.

Even if you don’t eliminate user stories, you can simplify by making them smaller.
The smaller a user story’s scope, the less detail you’ll need to write down, and the more you can focus on incrementally building a design that targets the higher level objective.
Smaller stories also reduce temptation to split them into separate tasks.

## Development tasks

Separate explicit development tasks in a user story smell like compromise.
Developers want to map out steps in their technical implementation, but they could do that at the user story level.
Developers also want to assign work to more than one person, which some user story tools still don’t allow.

Not only are development tasks probably unnecessary, replacing them with (smaller) user stories has a more important benefit.
Completed development tasks feel like progress, while only completed user stories correspond to working software.
When every user story has several related tasks, the tasks pollute work tracking with fake progress.

## Pull requests

A [pull request](https://martinfowler.com/bliki/PullRequest.html)
(in GitHub, a.k.a. _merge request_ in GitLab), 
proposes a set of code changes from one developer, typically as part of work on a user story.
Structurally, this overlaps with development tasks so much that you probably don’t need both.

Developers use pull requests to coordinate
[pre-integration code review](https://martinfowler.com/articles/branching-patterns.html#reviewed-commits).
Code reviews deserve a separate process step in some situations, but they don’t have to correspond to a level in the unit of work hierarchy.
Consider eliminating pull requests in favour of
[trunk-based development](https://martinfowler.com/articles/branching-patterns.html#continuous-integration)
(previously known as _continuous integration_), with asynchronous (non-blocking) code reviews.

## Code commits

Don’t mess with commits.

Source code [version control tools](https://en.wikipedia.org/wiki/Version_control)
have remained a stable part of the software development process for fifty years.
Despite tool variations, from decade to decade, a _code commit_ remains the fundamental unit of software development work.

Some developers emphasise commits, as units of work, by documenting them in _commit messages_ that describe code changes.
This probably only happens when commits record the primary unit of work, and the team doesn’t use user stories.

## Two levels

These simplifications reduce the number of levels to two:

1. **user story** → **user story**
2. **development task** → **user story**
3. **pull request** → **user story**
4. **code commit** → **code commit**

Simplify your development work organisation to **user stories** and **commits**.
