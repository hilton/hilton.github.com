---
title: Adopt two technology generations
description: Avoiding software architecture stagnation or a free-for-all
layout: hh
tags: architecture
image: film-sd-card.jpg
---

![](film-sd-card.jpg)

[César Abner Martínez Aguilar](https://unsplash.com/photos/FYtHgvVzaeA){:.photocredit}

The European Commission’s recent post about
[🔌 One charger to rule them all](https://www.linkedin.com/posts/european-commission_eucommoncharger-digitaleu-activity-7080069904988561408-Ubb4)
has people losing their minds, in the comments.
Many complain that [legislating USB-C chargers for electronic devices](https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/radio-equipment-directive-red/one-common-charging-solution-all_en)
will ‘freeze innovation’.
Similar discussions also happen in another kind of fast-moving technology ecosystem: software architecture and tooling.

## ‘Best practice’ stagnation

Version control systems, like other collaboration tools, only work well when everyone uses the same one, so it makes more sense to pick one that let everyone use their favourite tool.
Companies also tend to standardise on tools like laptops, to minimise the skills and effort that supporting them require.
However, calling these choices ‘best practice’ or ‘best in class’ relfects masks, and leads to technology stagnation.

## The ‘best tool’ free-for-all

At the other extreme, teams justify team-specific choices to use ‘the best tool for the job’ without considering the impact on the rest of the organisation, or the long-term consequences.
On sotware development teams, available skills often determine the best choice between equally good technologies,
but a technology selection free-for-all may lead to overfitting to the current team’s skills.
Future team changes introduce support gaps, and the team finds itself with too many technologies that no-one understands.

## Current plus next generation

I used to work in a small software development organisation where we discovered shiny new technology options daily, but lacked the capacity to properly support much variety on customer projects.
This constraint led to a moderate policy, that avoided the extremes of technology lock in and technology chaos.

Twenty years ago, our software development projects used
[CVS](https://en.wikipedia.org/wiki/Concurrent_Versions_System)
for source code version control.
However, CVS’ age and limitations prompted new projects’ teams to adopt
[Subversion](https://en.wikipedia.org/wiki/Apache_Subversion) instead.

At this point, we had the current (CVS) plus the next generation (Subversion).
We managed this by maintaining expertise in both tools, and had enough people to support team members joining their first Subversion-based development project.

## Previous plus current generation

A few years later, we arrived at a critical point.
Two developers became interested in using
[Git](https://en.wikipedia.org/wiki/Git)
instead of Subversion, had evaluated it, and wanted to use it for new projects.
Proceeding as before would have led to a free-for all, but we also wanted to adopt new technology.

At this point, we had the previous (CVS) plus the current generation (Subversion).
We agreed to adopt the next generation (Git), but only after no CVS-based projects remained.
We migrated CVS projects to Subversion, which shifted us to new current and next generations, Subversion and Git, respectively.

We did the same thing over a longer timescale with programming languages, migrating first from Perl to Java, and a decade later from Java to Scala.
We migrated the last Perl project directly to Scala.

## Technology migration

Use the two-generations policy for controlled technology migration:

1. learn to migrate to new technologies
2. don’t adopt every new technology
3. finish the migrations you start, at least before the next cycle.

When you set standards, also plan for future technologies.
For example, as the European Commission stipulates in
[Directive (EU) 2022/2380](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2022.315.01.0030.01.ENG&toc=OJ%3AL%3A2022%3A315%3ATOC)
on device chargers:

> It is also necessary to provide the basis for adaptation to any future scientific and technological progress or market developments, which will be continuously monitored by the Commission.

Apparently, the Commission thought about this for longer than the social media commenters who think standards freeze innovation.