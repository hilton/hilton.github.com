---
title: Simplify product work organisation
description: Reducing chaos by consolidating different levels of units of work
layout: hh
tags: product
image: two-nesting-dolls.jpg
---

![](two-nesting-dolls.jpg)

[Blake Weyland](https://unsplash.com/photos/9hhOVsf1lpU){:.photocredit}

{:.series}
1. [Units of work](units-of-work)
2. Simplify product work ←
3. [Simplify development work](simplify-development-work)
4. [Product development tools](product-tools)
5. [Universal product tools](universal-tools)

Product development teams typically organise their work into different levels of granularity with different
[units of work](units-of-work).
On timescales from years to weeks, these include:

1. **initiative** - a long-term grouping of related work
2. **theme** - maybe a group of initiatives, or vice versa
3. **objective** - a high-level product development goal
4. **key result** - a success criterion for an objective
5. **epic** - a large user story that requires splitting.

Five nested levels of planning organisation would either prove unmanageable, or generate ridiculous levels of product management bureaucracy.
Instead, simplify to one or two.

## Goals & objectives

Recent trends in product planning and roadmapping, such as
[objectives and key results](agile-okrs-review) (OKRs),
[now/next/later roadmaps](https://www.prodpad.com/blog/the-birth-of-the-modern-roadmap/), and
[GIST planning](https://itamargilad.medium.com/why-i-stopped-using-product-roadmaps-and-switched-to-gist-planning-3b7f54e271d1),
organise long-term work into _goals_ or _objectives_, rather than product features.

Within a product development team, you can usually just use objectives as the top level of how you organise your work.
Only when you need to align work across several product teams do you benefit from grouping these objectives into long-term _themes_ or _initiatives_.

## Initiatives & themes

Stop defining the terms _theme_ and _initiative_ separately.
Pick one.
You don’t need two competing top-level groupings, and even if you declare that _theme_ and _initiative_ don’t mean the same thing, no-one will remember the difference, preventing the very alignment themes (I picked one!) should create.

Use themes to align objectives across multiple teams, by grouping related objectives.
You need consistent colour coding or emoji prefixes more than you need theme names.
Themes need good names and descriptions, like everything else, but the actual grouping matters more.
Having said that, connecting these themes to company strategy objectives can add clarity.

## Key results

Key results, when working with OKRs, initially look like a level in this unit of work hierarchy, because objectives have key results.
However, it doesn’t make sense to think of key results as units of work themselves, because they represent independent success criteria for their objectives rather than separate work.
In theory, a single new product feature could potentially result in achieving an objective, as indicated by satisfying all of its key results.

Instead, key results are part of their objective‘s definition, defining _success_.
Like a high-level _definition of done_, these outcomes don’t structure the work, they evaluate the results.

## Epics

Unlike objectives and key results, the term _epic_ comes from working with 
[user stories](https://en.wikipedia.org/wiki/User_story).
An _epic_ refers to a large user story rather than a set of user stories, in the sense that it describes a product feature too big to deliver in a single release (_product increment_ in Scrum).

Epics that describe product _features_, rather than goals or objectives, introduce the danger of using an epic backlog as a
[feature/idea-based roadmap](https://www.prodpad.com/blog/prioritize-problems-not-product-ideas/).
Therefore, use objectives instead of epics.
Only write user stories for objectives you start working on, and make them small enough to not need epics as well.
This forces you to keep lists of feature ideas out of your planning process, and in your product feedback process where they belong.

## Two levels

Applying these simplifications reduces the number of levels to two:

1. **initiative** → **theme**
2. **theme** → **theme**
3. **objective** → **objective**
4. **key result** → **objective**
5. **epic** → **objective**

Simplify your product work organisation to **objectives** and **themes**.