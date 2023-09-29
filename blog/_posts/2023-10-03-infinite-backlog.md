---
title: The infinite backlog problem
description: Software development teams’ self-excavated pit
layout: hh
tags: product
image: traffic-jam.jpg
---

![](traffic-jam.jpg)

[Hanny Naibaho](https://unsplash.com/photos/rYHgsOUGvlk){:.photocredit}

{:.series}
1. Infinite backlog problem ←
2. Backlog abstraction layer

Software development teams typically use a backlog to manage upcoming work.
The backlog typically breaks this [work into units](units-of-work), such as user stories.
They use the backlog to:

* make their work visible
* prioritise upcoming work
* check that work is _ready for development_
* pull development tasks from a shared queue.

Modern software development methods and tools enable these management tasks without needing a micromanager to do them.
Teams that reduce planning waste this way can speed up development work…
until other stakeholders hijack the backlog.

## The great backlog hijack

In any software development organisation, various stakeholders want developers to build things - the sales team, customer support, and every executive team member.
Everyone ‘knows’ that adding a missing feature will help them achieve their goals,
from winning the next sale to fixing a problem that customers complain about.
And in the absence of other options, these feature requests go on the development backlog.

When internal stakeholders add feature requests to the development backlog,
it grows faster than the development team completes or removes work.
And you might think that the impossibility of building every feature would make people stop adding to the backlog,
but instead it gets political, and the most important stakeholders dominate.
They don’t care how big the backlog becomes, as long as their requests sit on top.

## The backlog delusion

Calling feature ideas a _backlog_ tricks people into thinking that the team has to build them all, somehow.
After all, the word _backlog_ literally means _a collection of work that needs doing_.

Even if the development team could build every feature that someone wanted, a tragedy of the commons would emerge:
a good software product becomes an incomprehensible unusable mess if you add too many features, let alone every possible feature.

Meanwhile, the development team has finite capacity, 
and software development [looks really slow](development-time) to everyone else.
So even though the backlog does not actually (mathematically) have infinite length, it quickly becomes long enough that progress towards completion becomes imperceptible.

## Backlog waste

Big backlogs create waste, and developer tooling doesn’t help.
Teams manage thousands of vapourware _features_ and _improvements_ because they can.
Next, the endless backlog demands endless _refinement meetings_ to discuss work the team will never even start, because otherwise work on the backlog feels unclear.
You don’t get anything _ready for development_ for free, though.

{:.big style="max-width:30em"}
> When someone takes a bunch of very old Jira tickets and resurrects them into the current sprint.
Jirassic Park.  
> \- [Ólafur Waage](https://twitter.com/olafurw/status/1534806625583865856)

Managing and talking about 90 per cent (or worse) of the backlog has no value, and wastes time.
Meanwhile, tooling to manage the backlog’s increasing complexity keeps getting more expensive, both to buy and to operate.

## The nuclear option

From an agile software development perspective, you should just delete the whole backlog.
However, agile software development didn’t hijack the backlog: other people did.
If you really delete the backlog, you may quickly discover which feature requests’ stakeholders have more political influence than you,
as well as whether you have enough to keep your job.

However, thinking about deleting the backlog can help you figure out how to get there, by reflecting on what it would take to actually get away with it.
In practice, you need another way for those stakeholders to get what they need.
