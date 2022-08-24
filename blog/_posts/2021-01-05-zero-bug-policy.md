---
title: Implement a zero-bug policy
description: How to manage bugs during software product development
layout: hh
tags: software product
image: lizard.jpg
---

![](lizard.jpg)

<a class="unsplash" href="https://unsplash.com/photos/GCNngfLRCKU" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Katie Blackmore</span></a>

Product development teams typically don’t use their own software enough to understand their customers’ experience,
and underestimate how much their customers hate bugs.
Meanwhile, many software development teams fix some bugs, but not others, and end up tracking hundreds of open bugs.
This wastes time, and does not deliver value.

The [Joel Test](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/)
addressed this twenty years ago with this question:

> {:start="5"}
> 5. Do you fix bugs before writing new code?

Spolsky explains that a team with a large number of open bugs has a worse problem than the time wasted managing that list:
unknown liability for future work.
Software development schedules have no meaning with open bugs.
Fixing bugs first creates predictability.

Alternatively, save yourself some time by skipping both Spolsky’s article and this one, and immediately implement 
[Yassal Sundman](https://twitter.com/yassalsundman)’s bug management system:
[Fix It Now or Delete It!](https://www.fixitnowordeleteit.com)

{:#adopt}
## Adopt a zero-bug policy

Fixing bugs before you write new code means adopting a zero-bug policy:

1. When you discover a bug, fix it before other product development work, by default.
2. If fixing the bug delivers little value, discard the bug report instead.
3. Don’t keep low-priority bugs unfixed for ‘later’.

Anything else encourages releasing unfinished work and success theatre.
Keeping bugs for ‘later’ also leads to double-handling, such as (repeatedly) reprioritising to _even lower_, rescheduling to _even later_, and reproducing buggy behaviour.

A zero-bug policy has an unexpected consequence at the start:
you have to discard all bug reports that you won’t resolve before resuming other work.
If this sounds extreme, consider that it won’t result in fixing fewer bugs.

{:#decide}
## Decide what to fix

Introducing a zero-bug policy does not mean fixing every bug:
product managers have to decide what to ignore.
Otherwise, you’ll incur the opportunity cost of fixing issues that don’t affect customers.
Meanwhile, some bug reports describe improvements to existing functionality, or missing features.

Further reading:

* [Stop Managing Bugs, Start Focusing on Quality!](https://blog.crisp.se/2018/02/05/yassalsundman/stop-managing-bugs-start-focusing-on-quality) and 
[The Definitive Bug Management System](https://www.fixitnowordeleteit.com),
by [Yassal Sundman](https://twitter.com/yassalsundman), advocate deleting bug reports.
* [Zero-Bug Software Development](https://medium.com/qualityfaster/the-zero-bug-policy-b0bd987be684),
by [Sam Hatoum](https://twitter.com/sam_hatoum),
discusses reclassifying bugs as _improvements_ or _new features_.

Choosing what to classify as a bug shouldn’t require discussion.
If product managers and developers don’t agree on what to call a bug, you probably need to address other problems.

{:#bugs}
## Continue discovering bugs

People who expect a zero bug policy to mean software that never has bugs clearly don’t understand software development.
Don’t get upset by the _zero-bug_ name, or confuse it with 
[zero defects](https://en.wikipedia.org/wiki/Zero_Defects) in industrial production;
consider _zero bugs_ as an achievable objective.
Call it the _zero bugs objective_ if you like.

You will continue to discover bugs, but you can have zero _known bugs_ most of the time.
If you don’t regularly achieve bug inbox zero, you have other problems, such as ineffective testing or unmaintainable code that slows down bug fixing.

{:#speed}
## Increase development speed

Zero-bug policies don’t only improve software quality.
Avoiding managing bugs and having meetings about unpredictable development schedules gives you more time for product development.

Further reading:

* [How a zero-bug policy doubled our development velocity](https://www.linkedin.com/pulse/how-zero-bug-policy-doubled-our-development-velocity-jan-peratt),
by [Jan Peratt](https://twitter.com/JanPeratt),
explains how ‘fixing bugs continuously increases long-term velocity’.
