---
title: Project-free product development
description: You don’t hate Jira, you hate project management
layout: hh
tags: product
image: work-harder.jpg
---

![](work-harder.jpg)

[Jordan Whitfield](https://unsplash.com/photos/sm3Ub_IJKQg){:.photocredit}

{:.series}
1. [Units of work](units-of-work)
2. [Simplify product work](simplify-product-work)
3. [Simplify development work](simplify-development-work)
4. [Product development tools](product-tools)
5. [Universal product tools](universal-tools)
6. Project-free development ←

[Jira](https://en.wikipedia.org/wiki/Jira_(software))
has been tracking its own features, enhancements and bugs for over twenty years.
In fact, one of the more famous Jira issues had its twentieth birthday last month:
[JRA-1397 Assign issues to multiple users or a group](https://jira.atlassian.com/browse/JRASERVER-1397).
Despite its impressive thirteen duplicate issues, JRA-1397 has resolution _Won’t fix_, as explained in the description:

> By design JIRA can only have 1 assignee at a time to a given issue.

[A comment from Atlassian](https://jira.atlassian.com/browse/JRASERVER-1397?focusedCommentId=152281&page=com.atlassian.jira.plugin.system.issuetabpanels%3Acomment-tabpanel#comment-152281)
links to a missing page
([archive.org](https://web.archive.org/web/20101017192727/http://confluence.atlassian.com/display/JIRACOM/Setup+Multiple+and+Group+Assignees+In+JIRA))
with an additional clue:

> JIRA is designed so that issues must be assigned to a single individual to prevent tasks from ‘falling through the cracks’.

This focus on properly assigning all work, and the resulting single assignee assumption, makes complete sense in the right context: project management.

## Resource allocation

Despite many changes over two decades, Jira remains a project management tool.
I first used Jira in late 2004 when I moved from a large (20 000 employees) project-based IT consultancy to a small one (12 employees).
I loved Jira immediately, because I’d already experienced the pain of project work without a similar tool for years.
After that, I came to rely on Jira for software development projects as I took on project management in addition to development work.

Project management, especially on fixed-price projects with ~~ridiculous~~ ambitious schedules, pay a lot of attention to _resources_ (also known as _people_) and days’ effort.
At my first job, starting a project involved writing a _work-breakdown structure_ that listed every project task, and estimating how long each task would take one developer.

Jira was built to track these work items (Jira issues), so you could assign them to developers, and track their completion status.
Project managers who had time could even pre-assign the whole work breakdown to developers, and use Jira to track the remaining work _per-developer_.
(But not me; I still spent 80-90 per cent of my week on development.)

## Project management assumptions

This kind of software project management resource allocation makes many simplifying assumptions.
One such assumption assigns each project task to a single responsible person, ignoring all kinds of collaboration, beyond perhaps assuming 80 per cent _resource availability_.

Allowing multiple assignees per issue would break Jira’s project reporting, and the reports would no longer reflect reality.
Not the actual reality of how team members work, including pair programming, say.
It would break the alternate reality that simplistic project management models.

## From projects to products

Friction with Jira goes beyond pair programming: software development organisations increasingly reject project management itself.
Allan Kelly explains the case against a project-based approach to software development in his book
[Project Myopia](project-myopia-review).
It turns out that applying agile software development methods to software projects doesn’t work well, and that actual agility requires a different kind of management.

Perhaps we could have worked this out twenty years ago, but at the time a _project management_ framework became the most popular way to adopt agile methods:
[Scrum](https://en.wikipedia.org/wiki/Scrum_(software_development)).
Today, however, software product development can discard project management, including tools like Jira, and apply agile software development methods in a different context.

In my case, I worked on my last software _project_ in 2014, and have worked in a _product management_ context since then.
So maybe you don’t need a better Jira, you need product management.
