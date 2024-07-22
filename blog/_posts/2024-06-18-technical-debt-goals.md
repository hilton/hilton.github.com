---
title: Stop talking about ‘technical debt’
description: Prioritise and work towards specific goals instead
layout: hh
tags: product management
image: cleaning-tools.jpg
---

![](cleaning-tools.jpg)

[Photos of Korea](https://unsplash.com/photos/BVrJBcmn0EU){:.photocredit}

{:.series}
1. [Manage technical debt](manage-technical-debt)
2. Prioritise goals ←
3. [Refactoring checklist](refactoring-checklist)

Most of the writing about [technical debt](https://martinfowler.com/bliki/TechnicalDebt.html)
focuses on defining it, and arguing about the financial metaphor’s suitability.
Personally, I prefer the
[restaurant kitchen metaphor](https://x.com/mfeathers/status/1324800481600811008), 
and calling it [technical _dirt_](https://x.com/sleepyfox/status/1344982026487812097).
Most of the _rest_ of the writing aims to help you persuade your boss that you should actually spend time preventing and reducing technical debt.

None of this helps you decide where to start when you’ve decided to tackle technical debt,
but face an overwhelming amount and variety of it.
Fortunately, you can make this easier.

## The boy scout rule

Before you start to reduce technical debt, stop making it worse.
Make a team agreement to adopt
[the boy scout rule](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_08),
and each time you make a product change, leave the technical implementation tidier than you found it.

The boy scout rule has limits, though, as does relegating work on technical debt to Friday afternoons.
It won’t modernise code you never change, for example.
While developer productivity benefits most from improvements to the parts of a system they need to work on anyway,
some problems affect otherwise stable system components.

The boy scout rule also only delivers incremental improvements.
It won’t introduce a more scalable background task execution architecture, for example.
To talk about significant work to reduce technical debt,
you need to stop talking about _all of it_ at the same time.

## Specific goals

When you only talk about ‘technical debt’ as a whole,
you don’t have a way to talk about which part to prioritise.
That of course makes sense if you don’t ever actually get to work on it at all,
and only ever talk about not actually addressing any technical debt.

Instead of labelling development tasks like _Refactor checkout logic_ as _tech debt reduction_,
group them into higher level goals, such as _Reliable customer payments_.
Instead of describing the work, describe the outcome.
Then you can [prioritise and focus](manage-technical-debt#focus) on a specific goal.

Specific goals also make more sense to non-technical stakeholders than the phrase _technical debt_.
This makes it easier to communicate the value of reducing technical debt,
and helps resolve arguments about whether you should spend time on it.
Instead of only working on technical debt on Fridays, now your product manager can plan it alongside work towards other goals.

## Roadmap

A collection of goals like _Reliable customer payments_ gives you high-level options for what to work on.
And when you list them in order of priority, you get an outcome-based roadmap.
If probably already have one of those for other product work,
you might want to merge them.

You can include technical debt reduction goals in a product roadmap by picking a technical debt goal for every third goal, say. 
Starting with a fixed proportion like this gives you a regular balance that you can adjust, 
every few months, until you find what works.

Finally, recategorise work on technical debt as work to _manage complexity_.
It sounds more like ongoing software maintenance,
and better reflects what causes the problem it solves:
the irresistible urge to make products more complex.