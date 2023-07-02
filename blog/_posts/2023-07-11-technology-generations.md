---
title: Adopt two technology generations
description: Avoiding software architecture stagnation or a free-for-all
layout: hh
tags: architecture
---

The European Commission’s recent post about
[🔌 One charger to rule them all](https://www.linkedin.com/posts/european-commission_eucommoncharger-digitaleu-activity-7080069904988561408-Ubb4)
seems to have led to people losing their minds, in the comments.
A common complaint seems to that [legislating USB-C chargers](https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/radio-equipment-directive-red/one-common-charging-solution-all_en)
for electronic devices will ‘freeze innovation’.
The same discussion happens in another fast-moving technology ecosystem: software architecture.


## ‘Best practice’ stagnation

Version control systems, and other collaboration tools, only work well in an organisation if everyone uses the same one.
Companies also tend to standardise on things like laptops, to minimise the skills and effort that support require.

Organisations looking for these kinds of benefits sometimes justify mandating a technology by calling it ‘best practice’.
However, avoiding decision-making effort also prevents benefiting from new technology.

## The ‘best tool’ free-for-all

In the other extreme, teams justify local choices to use ‘the best tool for the job’ without considering organisation-scope or long-term consequences.
In software architecture, available skills often determine the best choice between equally good technologies.
However, a technology selection free-for-all may lead to overfitting for the current team’s skills, leading to future support headaches.

## Current plus next generation

I used to work in a small software development organisation where we discovered shiny new technology options daily, but lacked the capacity to properly support much variety on customer projects.
This constraint led to a moderate policy, that avoided the extremes of technology lock in and technology chaos.

Twenty years ago, software development projects used
[CVS]()
for source code version control.
However, CVS’ age and limitations prompted new projects’ teams to adopt
[Subversion]()
instead.

At this point, we had the current (CVS) plus the next generation (Subversion).
Using two tools on different projects worked okay, and team members had no difficulty learning the new tool when they started working on a Subversion-based development project.

## Previous plus current generation

A few years later, we got to a critical decision point.
Two developers had become interested in using
[git]()
for source code version control  established that it met our needs, and wanted to use it for their new development projects.
Proceeding as before would have led to a free-for all, but we also wanted to be able to adopt new technology.

At this point, we had the previous (CVS) plus the current generation (Subversion).
We agreed that we would adopt the next generation (git), but only after no current projects still the previous generation.

We migrated projects to the current generation, and had the option for the final migrations to target the next generation.
This shifted us to new current (Subversion) and next generations (git).

## Technology migration

This approach has several consequences.
Sustainable architecture requires that you:

1. learn to migrate to new technologies
2. don’t try to adopt every new technology
3. finish the migrations you start, at least before the next cycle.

Briefly put, adopt new technologies by all means, but plan for new technology.
As the European Commission stipulates in
[Directive (EU) 2022/2380](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2022.315.01.0030.01.ENG&toc=OJ%3AL%3A2022%3A315%3ATOC):

> It is also necessary to provide the basis for adaptation to any future scientific and technological progress or market developments, which will be continuously monitored by the Commission.

Unsurprisingly, the legislation’s authors seem to have thought about this for longer than social media commenters.
