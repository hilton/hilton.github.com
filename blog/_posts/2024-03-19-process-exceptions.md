---
title: Don’t model every possible process exception
description: When not to automate delivery process edge cases
layout: hh
tags: process
image: detour-sign.jpg
---

![](detour-sign.jpg)

[Ussama Azam](https://unsplash.com/photos/kMb4qE_zj3Q){:.photocredit}

When developers start discussing your [zero-bug policy](zero-bug-policy),
they tend to get sidetracked by a long decision process discussion.
They want to fully-understand how the team will decide whether to fix a bug or delete the bug report, in a variety of scenarios.
But internal business processes for working with members of your own team don’t need the same level of precision as writing business process automation code.

## Decision logic

Programming involves describing how logic applies to information, in fine detail.
To automate decisions, you have to specify exactly which conditions lead to which decision, accounting for every possible scenario.
Developers naturally apply this - their usual approach - to other kinds of decision-making.

A zero-bug policy, aims to simplify software maintenance, which means simplifying its decision logic to: _just fix the bug_.
Adopting this approach requires less work on defining the usual kind of complex process, and more effort on figuring out what would make one unnecessary.

For example, software defect management (bug backlog wrangling) typically includes prioritisation: deciding which
[corrective maintenance](https://en.wikipedia.org/wiki/Corrective_maintenance)
(bug fixing) to do first.
In contrast, zero-bug policies aim to make prioritisation irrelevant by having at most one open bug to consider at a time.

## Edge cases

Software developers spend a lot o effort identifying
[edge cases](https://en.wikipedia.org/wiki/Edge_case).
Every scenario you didn’t consider will lead to bugs, sooner or later,
and the more obscure the scenario, the more surprising how soon it happens and how much disruption it causes.

{:.big style="max-width:30em"}
> A good programmer looks both ways before crossing a one-way street.

Now return to your zero-bug policy discussion, which has now moved on to, say,
whether you would fix or ignore a serious bug caused by a third-party defect that a planned upgrade will probably resolve.
These discussions routinely digress into scenarios that no-one expects to happen more than once a year, and which you’d discuss in any case if they did.

When you have hundreds or thousands of open bugs, you naturally analyse and classify them, so you know things like which ones depend on third-party upgrades.
By contrast, with a successful zero-bug policy, and no big bug backlog, you only ever have a conversation about one bug at a time.

## Process gaps

Software developers typically aim to automate as much as possible,
whether or not that make this goal explicit.
In business software, this means [automating business processes](process-centric-design),
and handling a lot of process variation.
If you haven’t _finished_, bugs or missing features lead to gaps in what the software automates,
and the software’s model cannot complete the process.

To many programmers’ surprise, the real-world business process may only experience minor delay when this happens,
because a telephone call or text message typically fills a process gap.
Software teams should therefore 
[figure out which automation actually saves time](https://xkcd.com/1205/)
(because [some doesn’t](https://xkcd.com/1319/)).

## Process exceptions

From a software perspective, process exceptions that occur too infrequently may not justify automation.
And some exceptions occur too infrequently to even justify modelling how to handle them, in advance, like those zero-bug policy scenarios that may never happen.
Instead, you should ignore some potential process exceptions until they actually occur,
just like how you should ignore some known bugs until they actually impact a customer.
