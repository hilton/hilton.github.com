---
title: Stop talking about ‘technical debt’
description: Prioritise and work towards specific goals instead
layout: hh
tags: product management
published: false
---

Most of the writing about [technical debt](https://martinfowler.com/bliki/TechnicalDebt.html)
focuses on defining it, and arguing about the financial metaphor’s suitability.
Personally, I prefer the
[restaurant kitchen metaphor](https://x.com/mfeathers/status/1324800481600811008), 
and calling it [technical _dirt_](https://x.com/sleepyfox/status/1344982026487812097).
Most of the _rest_ of the writing aims to help you persuade your boss that you should actually spend time preventing and reducing technical debt.

None of this helps you decide where to start when you’ve decided to tackle technical debt,
and face an overwhelming amount and variety of it.
Fortunately, you can make this easier.

## The boy scout rule

Before you start to reduce technical debt, you need to stop making it worse.
Make a team agreement to adopt
[the boy scout rule](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_08),
and each time you make a product change, leave the technical implementation tidier than it was before.

The boy scout rule has limits, though, as does relegating work on technical debt to Friday afternoons.
It won’t modernise code you never change, for example.
While developer productivity benefits most from improvements to the parts of a system they need to work on,
some problems affect otherwise stable system components.

The boy scout rule also only delivers incremental improvements.
It won’t introduce a more scalable architecture for background tasks, for example.
To talk about significant work to reduce technical debt,
you need to stop talking about all of it at once.

## Specific goals

When you only talk about ‘technical debt’ as a whole,
you don’t have a way to talk about which part of it to prioritise.
That of course makes sense if you don’t ever actually get to work on it at all,
and only ever talk about the relative priorities of technical debt and other kind of product work.

Instead of labelling development tasks like _Refactor checkout logic_ as _tech debt reduction_,
group them into higher level goals, such as _Reliable customer payments_.
Instead of describing the work, describe the outcome.
Now you can [prioritise and focus](manage-technical-debt#focus) on a specific goal.

Specific goals also make more sense to non-technical stakeholders than the phrase _technical debt_.
This makes it easier to communicate the value of reducing technical debt,
and helps resolve arguments about whether you should spend time on it.
Instead of only working on technical debt on Fridays, now your product manager can plan it alongside work towards other goals.
