---
title: Extensive technical documentation
description: An asset management software maintenance project story from 1997
layout: hh
tags: maintenance documentation
image: manhole.jpg
---

<!--
1. 1997, working for a large IT consultancy in Cambridge, 12 months' maintenance.
2. Original project delivered large waterfall development on-time and on-budget.
3. Proprietary technology: FRAMME, MicroStation, Oracle DB and Windows NT 3.51.
4. Bound A4 volumes of functional and technical specifications on the shelf.
5. We didn't use the documentation much: a backup.
6. Quality management system: group code review on paper, much paperwork.
7. A week investigating the off-by-one printing error: 49 manholes in 500×1000 m.
8. This success cost a spectacular amount of money: €20 million + €1.5 million/year.
-->

![A manhole cover](manhole.jpg)]

In 1997, while working for a large IT consultancy in England, I moved to 
[Cambridge](https://en.wikipedia.org/wiki/Cambridge) for a new client-site assignment.
I did a twelve-month rotation on a software maintenance team: third-line maintenance and support of a custom-built asset management system delivered two-years earlier.

## Proprietary technology

The set-up still impresses me, in a way.
The original team - and remember that this happened during the nineties - delivered a large waterfall development project on-time and on-budget.
The system had a complex architecture, and it took me months to understand, hence the twelve-month commitment.

The system consisted entirely of proprietary technology: Intergraph FRAMME, 
[MicroStation](https://en.wikipedia.org/wiki/MicroStation), Oracle database and 
[Windows NT 3.51](https://en.wikipedia.org/wiki/Windows_NT_3.51).
The code included two product-specific programming languages that no-one has heard of, 
[one based on C](http://www.la-solutions.co.uk/content/V8/MDL/MdlDevelopmentEnvironment.htm).
(MicroStation didn’t add C++ support until 2001, four years later.)

## System documentation and group code review

The system documentation impressed me the most.
Bound A4 volumes of functional and technical specifications occupied about half a metre of the shelf above my desk.
This documentation looked so perfect that no-one updated it in the two years since initial delivery.
As a result, we didn’t use the documentation much.
We didn’t need to either, because careful project management preserved system knowledge within the team.

The project also adopted a zealous approach to the company’s ISO 9001-certified quality management system.
We reviewed all changes to production code, on paper, in a weekly code review meeting.
The whole team of five attended, and prepared by reviewing submissions in advance, which we would then discuss in the meeting.

We didn’t update the system specifications, but we did generate plenty of paperwork, such as code review records.
This approach worked: the long-term adaptive maintenance planning made it possible to upgrade system components, and the careful corrective maintenance made bugs a rare occurrence.

## Bug fixing

I remember spending more than a week tracking down one bug in particular.
The system could print detailed large scale asset location maps, on a big plotter, except someone had reported that printing a certain map failed.

I hadn’t worked on the printing code before.
Now that I think about it, I would have read the module specification, from the appropriate technical specification volume on the shelf above my desk.
After all, as newest member of the team, I didn’t want to ask my colleagues vague questions like _how does printing work?_

I found and fixed the bug in the end.
I eventually discovered an off-by-one error in the code that calculated whether the list of assets printed next to the map required a second page.
In practice, this meant that you couldn’t print the map of a 500 × 1000 metre rectangular area of the East of England if it contained exactly 49 manholes.

## The catch

This project development and software maintenance success cost a spectacular amount of money, by today’s standards.
Adjusted for inflation, I estimate that the original development cost around €20 million, and that the development team cost about €1.5 million per year.

That mades this the best case scenario for, and the last time I actually saw, ‘extensive technical documentation’ and a generous software maintenance budget.
