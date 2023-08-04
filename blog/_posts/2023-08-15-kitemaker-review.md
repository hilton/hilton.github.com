---
title: "B2B SaaS review: Kitemaker"
description: Integrated product management instead of better project management
layout: hh
tags: product software
image: kitemaker/board.webp
css: "article p:has(img) { margin:15px 0; } article img { border: 1px solid #ddd; } article a:hover img { box-shadow: 0 0 6px 2px #428bca; }"
---

{:.series}
1. [Delibr](delibr-views)
2. [Qatalog](qatalog-review)
3. [Collato](collato-review)
3. [Cycle](cycle-review)
4. Kitemaker ←
5. Orbit

[Kitemaker](https://kitemaker.co/) describes itself in its
[product documentation](https://guide.kitemaker.co/about) as:

> A modern take on product development based on best-practices that replaces your issue trackers and project management tools.

As with other [universal product development tools](universal-tools),
this means expanding scope to support a cross-functional product development team; not only developers, designers or product managers in isolation.
It also means simplification: a less complex tool than legacy project management tools, despite this increased scope.

## Work items

Kitemaker structures content around _work items_, each of which gets its own 
[Notion](intranet-ten-word-wiki)-style page, comments, activity feed, and version history.
Task lists with checkboxes allow one work item to contain multiple implementation tasks.

[![A work item page, showing project objective headings, and the work item’s activity feed](kitemaker/work-item.webp)](kitemaker/work-item.webp)

The neutral term _work item_ carefully avoids assuming that a software development team only works on _tickets_, _bugs_, or _issues_.
Instead, you can use labels to categorise work.

[![User story work item cards on a Kanban-style board](kitemaker/board.webp)](kitemaker/board.webp)

You can also indicate impact and effort, and dependencies between work items, which appear on a separate
[dependency graph](https://guide.kitemaker.co/overview/dependencies-and-dependency-graph) view.

Labels don’t support typed key-value metadata, so you can’t use this to create a board or table of customers, filtered by their manager, for example.
That makes Kitemaker’s  board and list views less flexible than Notion databases, which allow multiple custom views with saved filters.
But this results in a simpler user experience than more generic tools.

## Themes

Work items can belong to themes on a roadmap view - another board view:

[![Roadmap objectives on a Kanban-style board](kitemaker/roadmap.webp)](kitemaker/roadmap.webp)

You can use this for planning higher-level [units of work](units-of-work) than user stories and epics.
For example, this _Get books to read_ roadmap objective links to short-term _work items_, listed bottom-left:

[![A development theme work item’s page, showing a list of linked work items](kitemaker/theme.webp)](kitemaker/theme.webp)

Kitemaker’s approach means you can [simplify product work organisation](simplify-product-work)
to themes and user stories.

## Product feedback

Despite Kitemaker’s relative simplicity, its scope includes product discovery work.
You can use the _Feedback_ section to track customer-specific product feedback.

[![A list of product feedback items, with customers’ company logos, and showing the selected item’s text](kitemaker/feedback.webp)](kitemaker/feedback.webp)

You can link a feedback item to a customer, assign _owners_ to process it, labels to categorise it, and then link it to work items that address it.
As in other tools, you can select text content to link to a word item, for when a customer meeting write-up or an email covers more than topic.

## Version control integration

[GitHub and GitLab integration](https://guide.kitemaker.co/integrations-overview/github-and-gitlab)
makes it possible to [simplify development work organisation](simplify-development-work),
by linking user stories directly to commits.
This means you don’t have to use a separate issue tracker or even pull/merge requests if you don’t need them.
Instead, Kitemaker includes commits in the corresponding work item’s activity feed.

[![A user story work item’s page, showing its activities feed including linked GitHub project commits](kitemaker/activities-github.webp)](kitemaker/activities-github.webp)

This brings a welcome change from tools that sync their epics or user stories and Jira, forcing you to use a more complicated tool _in addition_, so that developers can track tasks that link to code changes.
Version control integration makes Kitemaker the first strong challenger to GitHub Projects for years, which in turn was the first strong alternative to Jira in 2016.

Developers will also appreciate the total keyboard control.
And dark mode, obviously.

## Integrated product management

Kitemaker promises integrated product management instead of better project management, and delivers through simplicity and flexibility, and a great user experience.
Despite insufficient breadth to replace a general-purpose intranet collaboration tool,
like Notion or [Qatalog](qatalog-review), a product development team might do nearly all their work in Kitemaker,
using it as a [universal product development tool](universal-tools).
