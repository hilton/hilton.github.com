---
title: Zero-bug policy success
description: what we learned from fixing the last open bug
layout: hh
tags: agile
image: butterfly.jpg
---

![](butterfly.jpg)

[Kyle Glenn](https://unsplash.com/photos/hwl01nLxtA8){:.photocredit}

{:.series}
1. [Zero-bug policy](zero-bug-policy)
2. [Zero-bug scenarios](zero-bug-scenarios)
3. [Fix It Now or Delete It](fix-it-now-or-delete-it)
4. [Zero-bug policy adoption](zero-bug-adoption)
5. Zero-bug policy success ←
6. Zero-bug policy questions

Last year, we [adopted a zero-bug policy](zero-bug-adoption).
On 28 August 2024, we celebrated Zero-Bug Day.
After fixing 166 bugs in five months,
we had an empty _Bugs_ column on our development board for the first time.
Then we found out what a working [zero-bug policy](zero-bug policy) really feels like.

## Abandoned bugs

[Fix It Now or Delete It!](fix-it-now-or-delete-it)
gives a lot of emphasis to deleting bug reports, as if you might do that as often as fixing the bug.
In practice, we discovered that we hardly ever did this.
In the period that we fixed 166 bugs, we abandoned twelve (six per cent).

## Bug discussion

Rather than delete bug reports, we sometimes didn’t write them.
Not to avoid acknowledging bugs, but because an informal process doesn’t have to start with a bug report.

Our `#bugs` Slack channel adopted a [reaction emoji language](reaction-emoji) to indicate status:

* 👀 – looking into it
* 🎫 – bug report (‘ticket’) created and written
* ✅ – bug fixed in production
* ❎ – nothing to fix here

We use the Slack channel the way some teams use a bug tracker for _reports_ or _observations_
whose investigation might not result in a bug report.
You can’t use a Slack channel to track many tasks in parallel,
but we kept up with bug reports as they emerged.

## Case-by-case bugs

By regularly returning to zero open bugs, we could handle each new bug report case-by-case.
Instead of defining criteria for bugs, or even defining what makes a bug,
we prioritised what felt broken.

With zero open bugs, you can afford generosity when deciding what deserves fixing.
Meanwhile, it sometimes feels fairer to call something a user experience issue,
and prioritise it somewhere in the [short backlog](backlog-shrinkage).

## No bug tracker

When combined with a short backlog, you can manage 0–3 open bugs without a bug tracker.
A [Notion database](https://www.notion.com/help/intro-to-databases) or 
[GitHub project](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
gives you the board view, and space to write a bug report,
based on a [five-part template](bug-observed).

{:.screenshot}
![Orange Jacket Guy Meme: Using a bug tracker / Not tracking bugs](bug-tracker.webp)

You don’t need Jira, not because you can use a better tool,
but because you can reach a better situation.

## The bug

Instead of tracking bugs, we either have zero open bugs,
or we talk about the most recently-reported open bug.
This saves time, compared to working out which bug someone means.
Only having one bug to talk about doesn’t mean a shorter meeting;
it means not needing one, and starting work to fix the bug sooner.

## Fewer bugs

Regularly reaching zero open bugs coincides with increasing system reliability,
and reduced time-to-fix.
It doesn’t stop us introducing new bugs during development,
but deploying a fix within an hour or two reduces their impact.

As a next step, we don’t only want fewer (or zero) bugs.
We want fewer _new_ bugs.

## The next challenge

For our next challenge we have the opportunity to reduce the number of bugs reported,
by avoiding miscommunication between team members.
Missing shared understanding between product manager, designer and developer causes surprises and rework.

Taking inspiration from [Fix It Now or Delete It!](fix-it-now-or-delete-it),
we can surely do better than introducing more process that blocks deployment,
such as an old-fashioned _acceptance_ sign-off.
Instead, we will seek ways to reduce barriers to having a well-timed conversation.
