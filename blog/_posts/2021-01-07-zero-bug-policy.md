---
title: Implement a zero-bug policy
description: How to manage bugs during software product development
layout: hh
tags: software product
---

One point in the twenty year-old 
[Joel Test](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/)
stands out:

> 5. Do you fix bugs before writing new code?

Spolsky refers to a tragically common problem:
software development teams fix some bugs, but not others, and end up tracking hundreds of open bugs.
This wastes time, and does not deliver value.

I recommend reading the whole article, or at least the explanation of question 5.
Spolsky explains that a team with a large number of open bugs has a worse problem than the time wasted managing that list:
an unknown amount of liability for future work.
Software development schedules have no meaning with open bugs.
Fixing bugs first creates predictability.

Alternatively, save yourself some time by skipping both Spolsky’s article and this one, and immediately implement 
[Yassal Sundman](https://twitter.com/yassalsundman)’s bug management system:
[Fix It Now or Delete It!](https://www.fixitnowordeleteit.com).

## Adopt a zero-bug policy

Each time someone reports a bug, either put it at the top of the backlog and fix it before any new feature development, or stop current work and fix it immediately, in case of a critical issue.
Otherwise, close the bug report and don’t fix the bug.
Anything less, and you encourage incomplete work and double-handling.

If this feels like a radical reprioritisation, then you may need to spend more time using your own software and talking to customers, to understand how they feel.
Product development teams typically underestimate the impact of known bugs, and the negative sentiment caused by giving everything else you do higher priority.

A zero-bug policy also has an unexpected consequence for how you start following it:
you have to close or delete all reports of bugs that you don’t want to fix right now, before continuing with other work.
If this shocks you, consider that this won’t result in fixing fewer bugs.

## Decide which bugs to fix

Introducing a zero-bug does not mean working on every bug report:
product managers have to decide what to reject.
Otherwise, you’ll spend time fixing issues that don’t affect customers, instead of doing something more important.
[Yassal Sundman](https://twitter.com/yassalsundman) 
goes into more detail about deleting new and old bug reports in
[Stop Managing Bugs, Start Focusing on Quality!](https://blog.crisp.se/2018/02/05/yassalsundman/stop-managing-bugs-start-focusing-on-quality).
Yassal has also published ‘The Definitive Bug Management System’ at https://www.fixitnowordeleteit.com

Some bug reports really describe potential improvements to existing functionality, or even new features.
[Sam Hatoum](https://twitter.com/sam_hatoum) 
explains when the product manager must reclassify bugs as _improvements_ or _new features_ in
[Zero-Bug Software Development](https://medium.com/qualityfaster/the-zero-bug-policy-b0bd987be684).

Deciding which customer feedback to classify as bugs shouldn’t require any discussion.
If product managers and software developers don’t agree on what to call a bug, that may indicate other problems that you need to address.

## Continue discovering bugs

You would have to thoroughly fail to understand software development to think a zero bug policy means that the software will never have bugs.
Instead of getting upset by the _zero-bug_ name, or confusing it with 
[zero defects](https://en.wikipedia.org/wiki/Zero_Defects) in industrial production,
consider _zero bugs_ as an achievable objective.
Call it the _zero bugs objective_ if it makes you feel better.

Although you will always discover bugs and receive bug reports, you will have zero _known bugs_ for some or even most of the time.
If a zero bugs policy does not continually reduce the number of open bugs, then it has served another purpose by uncovering other issues, such as ineffective testing or unmaintainable software whose bugs take a long time to fix.

## Increase development speed

It turns out that a zero-bug policy doesn’t only improve software quality.
If you don’t waste time managing bugs and having meetings about unpredictable development schedules, you end up with more time for product development.
[Jan Peratt](https://twitter.com/JanPeratt) 
explains how ‘fixing bugs continuously increases long-term velocity’ in
[How a zero-bug policy doubled our development velocity](https://www.linkedin.com/pulse/how-zero-bug-policy-doubled-our-development-velocity-jan-peratt).
