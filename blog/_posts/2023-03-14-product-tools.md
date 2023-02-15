---
title: Product development productivity tools
description: Tooling for different product development units of work
layout: hh
tags: product
image: tools.jpg
---

![](tools.jpg)

[Jennifer C.](https://www.flickr.com/photos/29638108@N06/7718086616){:.photocredit}
[CC BY 2.0](https://creativecommons.org/licenses/by/2.0/){:.license}

{:.series}
1. [Units of work](units-of-work)
2. [Simplify product work](simplify-product-work)
3. [Simplify development work](simplify-development-work)
4. Product development tools ←

Software product development work includes [units of work](units-of-work)
at different scales, from long-term objectives, to individual code changes.
For example:

{:.big style="max-width:38em; padding:0.8em 1em 0.1em 1em"}
> theme → objective → user story → task → commit

A product team that collaborates on this work hierarchy typically represents these units of work in their productivity tools.

## Level-specific tools

Basic tools manage work at one level, such as, source code version control systems like
[Git](https://en.wikipedia.org/wiki/Git) that only manage code commits.
Similarly, bug trackers manage _bugs_ (a.k.a. _issues_), but not strategic objectives.

These tools focus on one level in the above hierarchy, capturing data on a specific unit of work, such as a bug’s _reporter_.
Some tools add workflows to support a related process, such as support request resolution.

However, these data and process features either reduce flexibility to use different processes and data, or increase complexity if you can customise them.
And even if you can customise them, they remain unsuitable for high-level objectives.
Ultimately, the team requires multiple tools.

## Tool integrations

[Jira](https://en.wikipedia.org/wiki/Jira_(software))
started life as a bug tracker to manage software _issues_ and defeat
[BugZilla](https://en.wikipedia.org/wiki/Bugzilla).
Early on, version control integration listed commits related to each issue, allowing developers to navigate between bug reports and bug fix code changes.
In general, product development productivity tools benefit from integration with the more detailed units of work at the level below, and ideally integration in both directions.

However, these integrations between units of work at different levels often have a poor user experience (UX).
Relying on this integration approach also increase costs, when managing each new level means paying for another tool.

## Expanded scope

Tools for one unit of work may later expand to cover others, reducing the need for integrations and additional tools.
Many Jira enhancements expanded its scope, including:

* higher-level issue types - [user stories, epics and themes](https://www.atlassian.com/agile/project-management/epics-stories-themes)
* subtasks that add another level below existing tasks
* agile _boards_ for managing epics and user stories.

However, despite their value, these enhancements made Jira complex and harder to use, diluting its core value as a better issue tracker.

## Hiding Git

[GitHub](https://en.wikipedia.org/wiki/GitHub) took a different approach,
with a source code version control user interface to hide Git’s appalling UX.
_Pull requests_ (code review tasks) and a simpler issue tracker for user stories and development tasks expand its scope to higher levels.
[GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
later added boards that work for higher-level objectives.

GitHub provided simpler functionality and better collaboration,
integrated with the core functionality for managing code changes.
While that avoided Jira’s complexity, GitHub remains a tool for developers,
unsuitable for organisation-wide use by stakeholders outside product development teams.

## Product management tools

More recent product management support higher-level units of work.
[ProdPad](https://www.prodpad.com) and [Productboard](https://www.productboard.com)
manage product development objectives, and related work to produce product roadmaps and process customer feedback.
They span a broad hierarchy that roughly corresponds to:

{:.big.solid-two style="max-width:38em; padding:0.8em 1em 0.1em 1em"}
> product → roadmap → theme → epic → user story

These tools integrate with developers’ tools by synchronising user stories - the overlap between
[product management](simplify-product-work) and [development](simplify-development-work).

## Divided work

Separate tools for product management and development, with per-user pricing, can end up with half the company having access to each tool, and only product managers using both.
That makes you wonder what it would take to use a single more general-purpose tool.
