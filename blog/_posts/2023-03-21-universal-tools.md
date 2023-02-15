---
title: Universal product development tools
description: Simpler more accessible tools to manage product development
layout: hh
tags: product
image: swiss-army-knives.jpg
---

![](swiss-army-knives.jpg)

[Paul Felberbauer](https://unsplash.com/photos/tM16SjCYy84){:.photocredit}

{:.series}
1. [Units of work](units-of-work)
2. [Simplify product work](simplify-product-work)
3. [Simplify development work](simplify-development-work)
4. [Product development tools](product-tools)
5. Universal product tools ←

<!-- -> 602 words -->

[Product development productivity tools](product-tools), such as 
[GitHub](https://en.wikipedia.org/wiki/GitHub) and
[Jira](https://en.wikipedia.org/wiki/Jira_(software))
typically span 1-3 levels in the [units of work](units-of-work) hierarchy:

{:.big style="max-width:38em; padding:0.8em 1em 0.1em 1em"}
> theme → objective → user story → task → commit

This leads product development teams to use several tools to manage this work, for different parts of the work and audiences.
Non-technical stakeholders need more general-purpose tools than the most popular programmer-centric tools.
After all, according to the old IT joke, _there are two kinds of software… Word and Excel_.

## Simplified project management

In 2011, while established bug trackers continued adding complexity,
[Trello](https://en.wikipedia.org/wiki/Trello) launched simplified product management.
More than swapping a task/issue list for a Kanban board, Trello took a step from task/assignee-based project management towards a flow system.

Significantly, a _card_ on a Trello board didn’t care whether it represented an long-term objective, a user story, or a small task.
This meant that you could use a Trello board to manage different units of work equally well, and use multiple boards for different timescales:
one for a twelve-month roadmap and another for week-long product increment.

By releasing its boards from any particular process, Trello allowed teams to decide for themselves what coloured card labels _mean_, for example, and how to use each board.
This resembles the flexibility that comes from making every field on a form optional, avoiding the bad data that comes from forcing people to enter _unknown_ or other garbage data.

Simplification and a higher standard of user experience than usual in business software resulted in more joy and better collaboration.
No wonder the 
[Atlassian acquired](https://www.atlassian.com/company/news/press-releases/atlassian-to-acquire-trello-to-expand-teamwork-platform0)
the best new thing in product development since Jira.

## Enriched documents

While Trello offered a simpler alternative to Jira and other project management tools, it didn’t displace
Atlassian’s
[Confluence](https://en.wikipedia.org/wiki/Confluence_(software)), or other wikis.
More recently, a different tool did for documents what Trello did for tasks, adding structured data, custom fields and various views including Kanban boards:
[Notion](https://en.wikipedia.org/wiki/Notion_(productivity_software)), released in 2016.
Notion introduced native functionality for the structured data that Confluence only made possible via awkward plugins and macros.

Like Trello, Notion gave business users generic functionality with excellent user experience, resulting in a powerful popular collaboration tool.
This makes Notion a _good enough_ generic alternative to the dedicated product management tools, for most of the units of work hierarchy:

{:.big.solid-two style="max-width:38em; padding:0.8em 1em 0.1em 1em"}
> product → roadmap → theme → epic → user story

With this style of general-purpose tool that mixes structured and unstructured data and documents, you can more easily give all stakeholders access to product development artefacts all levels.
Wel, all levels except code: you still need dedicated source code version control, but only programmers need to see this level.

## New directions

Today, five years after the
[Notion 2.0 release on ProductHunt](https://www.producthunt.com/products/notion#notion-2-0),
newer companies are discovering new directions for product teams’ productivity tools.

* [Delibr](https://www.delibr.com/) enhances a Notion-style combination of documents, metadata and views with functionality for product management, such as decision-tracking and opportunity solution trees
* [Collato](https://collato.com/) enhances a Miro/Mural-style canvas with cards that represent documents from existing tools, such as Google Docs

Meanwhile, perhaps someone somewhere plans to launch a general-purpose tool that spans all types of units of work _including_ source code, and offers better user experiences and collaboration than
[Git](https://en.wikipedia.org/wiki/Git).
