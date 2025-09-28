---
title: Zero-bug policy questions
description: clarifications from conversations from this year
layout: hh
tags: agile
image: lizard.jpg
---

![](lizard.jpg)

[Katie Blackmore](https://unsplash.com/photos/GCNngfLRCKU){:.photocredit}

{:.series}
1. [Zero-bug policy](zero-bug-policy)
2. [Zero-bug scenarios](zero-bug-scenarios)
3. [Fix It Now or Delete It](fix-it-now-or-delete-it)
4. [Zero-bug policy adoption](zero-bug-adoption)
5. [Zero-bug policy success](zero-bug-success)
6. Zero-bug policy questions ←

This year, I’ve talked about [implementing a zero-bug policy](zero-bug-policy)
in a series of [conference presentations](/presentations/zero-bug).
I primarily aimed to establish the existence of [zero-bug policy success](zero-bug-success),
but I also wanted to start conversations about why more software teams don’t do this.

Conversations include questions.
Questions matter: they help you talk to your colleagues about why you can’t adopt a zero-bug policy for your product,
and whether that can change.

## How did we define bugs vs other kinds of change?

We didn’t.
We didn’t need a written definition of _a bug_, because we evaluated one bug at a time.
We only needed to decide whether to fix _this bug_.

Definitions give you abstractions that you can use to talk about bugs, _in general_,
as opposed to specific bugs.
That kind of behaviour leads to meetings and distracting prioritisation games.

## Why did we have so many bugs to fix?

Our story started in an early-stage consumer retail startup,
a few months after the web shop’s public launch.
During this stage, the team addressed online shopping edge cases,
and resolving product gaps as they appeared.

Software quality processes hadn’t yet matured,
nor had the team worked on software reliability yet.
In fact, this situation created the motivation to adopt a zero-bug policy in the first place.

## What if we’d started with hundreds of open bugs?

We started with sixteen open bug reports.
If we’d had hundreds, like many development teams, we probably couldn’t have faced fixing them all.
We’d have had to consider the _nuclear option_. 

As a thought experiment, consider what would happen if you decided to **delete your backlog**.

1. Would you get fired?
2. Would the product face operational problems?
3. Would the team lose anything valuable?

I hope not. And if not, then why not go ahead and do it?


## How do we prioritise for business stakeholders?

As this team’s product manager, I owned prioritisation.
Fortunately, the other business stakeholders never wanted to discuss bug prioritisation,
preferring to discuss product strategy.

If we had discussed prioritisation, I’d have talked about business outcomes.
In practice, we prioritised things like web site traffic, customer satisfaction, and average order value.

## Did we refactor, and improve testing, while fixing?

Fixing all bugs took _months_, because the team fixed quality issues _properly_.
For example, they greatly increased unit test and integration test coverage,
and improved code reviews.

Fixed bugs stayed fixed, except for a series of intermittent web shop checkout failures.
The team eventually identified the root cause, and redesigned the checkout to prevent failures.

## Did we worry about slipping back into many bugs?

The [zero-bug policy success](zero-bug-success) phase,
with 0–2 open bugs on any given day, sometimes this seemed too good to last.
But we gained confidence for each month we didn’t see a resurgence.

As well as better testing, we avoided risky big releases,
decoupling deployments from releases with feature flags.
New bug reports became less serious, less frequent, and easier to fix.

## Might deleting related bugs reports have become a big problem?

Didn’t happen.
In the first twelve months, we only deleted 9% of bug reports, most of which duplicated other reports.

Rarely deleting bug reports makes deleting related reports unlikely.
Even if we did, we’d still address each bug report case-by-case,
and decide to fix it sooner rather than later anyway.
