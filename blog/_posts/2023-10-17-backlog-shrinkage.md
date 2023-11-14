---
title: The incredible shrinking backlog
description: Why you don’t need such a big backlog
layout: hh
tags: product delivery
image: minature-people.jpg
---

![](minature-people.jpg)

[Etactics Inc](https://unsplash.com/photos/MC8TXw4UWPI){:.photocredit}

{:.series}
1. [Infinite backlog problem](infinite-backlog)
2. Incredible shrinking backlog ←
3. [Backlog abstraction layer](backlog-abstraction-layer)

In the past, software development teams had shockingly long backlogs, and planned tasks for months or years ahead.
Today, development teams still have longer backlogs than they need.
They should think harder about how small they can get.

## The whole project

When I worked on waterfall software development projects in the late 1990s,
the backlog contained _the whole project_.
Before starting coding, we’d complete project planning, functional design, and technical design - all in nice long Word documents.
Planning included detailed _work breakdown structures_ that listed the whole 6-12 month project’s development tasks, and arranged them into unmaintainable Gantt charts.

25 year-old waterfall projects might sound like a 
[straw man](https://en.wikipedia.org/wiki/Straw_man),
but ten years after the last one of those, I still saw Scrum projects creating a ‘complete’ backlog for similar amounts of work.
Ironically, these were probably worse than the 1990s projects’ detailed project plans at identifying future development work.

Either way, creating a backlog for a whole project remains a bad idea,
along with [software projects](project-free) in general.
Despite that, I suspect that whole-project backlogs still exist.

## The next sprint

[Plain old Scrum](https://scrumguides.org/scrum-guide.html) describes a
[product backlog](https://scrumguides.org/scrum-guide.html#product-backlog) artefact
without mentioning its length:

> The Product Backlog is an emergent, ordered list of what is needed to improve the product.
> It is the single source of work undertaken by the Scrum Team.

As a _development backlog_, a Scrum product backlog need only contain enough refined backlog items for the next sprint, in time for its sprint planning meeting.
The rest of the product backlog might consist of large unrefined items that would each take the team weeks or months to complete.
Unless the product owner has gone missing, the team only needs to refine those into smaller items in time for the next sprint.

In practice, teams tend to interpret Scrum’s description of product backlog refinement as ‘an ongoing activity’ to mean that they should attempt to refine _the whole backlog_.
No wonder those refinement meetings last for hours.

## The next release

During Scrum’s glory years (2005-2015?), most Scrum teams settled on two-week sprints.
Since then, teams tend to talk about
[Kanban](https://en.wikipedia.org/wiki/Kanban_(development)),
stop using _sprints_, and release once or twice a week.
And in the last five years, marked by the book [Accelerate](https://en.wikipedia.org/wiki/Accelerate_(book)),
software development teams have continued to release more often.

Many teams have now abandoned fixed release planning cycles and adopted
[continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery), 
with multiple daily releases.
This has changed what it means to have enough backlog items _for the next release_.

## Product manager absence duration

A [two-minute product manager](two-minute-rule) hardly needs to maintain a backlog at all:
each time a developer completed some work in progress, they can immediately pair with product manager to create the next in-progress item.
From this perspective, the backlog only exists as a buffer to ensure that designers and developers always have a next task to work on.

The necessary backlog size probably depends on things like preparation effort, team throughput, and how long people go on holiday or disappear into back-to-back meetings for.
However, in one hour, a product manager can probably add enough backlog items to keep a development team busy for weeks, if not months.
In practice, only _product manager absence duration matters_, because software development takes longer than everything else.
