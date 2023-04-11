---
title: "B2B SaaS review: Qatalog"
description: A first look at a new way to organise everything
layout: hh
tags: product software
image: qatalog/fields.png
css: "img { border: 1px solid #ddd; } a:hover img { box-shadow: 0 0 6px 2px #428bca; }"
---

{:.series}
1. [Delibr](delibr-views)
2. Qatalog ←
3. [Collato](collato-review)
3. [Cycle](cycle-review)

[Qatalog](https://qatalog.com) offers an out-of-the box business intranet for everyone who finds Notion too unstructured.
Qatalog combines data and documents with features such as task management, discussion threads and integrations.
Two capabilities stand out: federated search and built-in workflow.

## Data models

Qatalog organises everything within top-level structured data _modules_, such as _products_ and _clients_.
Configuration starts by selecting an initial set of these modules, according to your business, and adding preconfigured modules.

[![Configuring a module](qatalog/fields.webp)](qatalog/fields.webp)

You can also configure your own modules (entities), by defining the fields (data model), connections (relations) with other modules, and the generic product features the module can use.
Predefined modules save time during initial configuration, and save starting with a blank page.

Qatalog’s predefined modules offer a more significant impact than avoiding the 
[blank slate problem](https://signalvnoise.com/archives/000375.php).
Instead of starting with _pages_, blank or otherwise, Qatalog modules establish defined _data models_ instead of blank pages as the starting point for an organisation’s knowledge.

## Entries and pages

The top level of a product _ideas_ module works a bit like a Notion database, with a choice of a views, and saved filters, such as this card view:

![Browsing module entries](qatalog/browse.webp)

Unlike Notion, in which each of these _entries_ is also a page, Qatalog entries have fields, but themselves _contain_ other kinds of content, such as pages.
Each of these entries has its own home page, where you can add child pages, tasks and discussion threads, etc.

![Viewing a module entry](qatalog/entry.webp)

Entries also have person/team assignments, tags, and an activity feed.
Editing a page feels familiar, more like Notion, with a variety of paragraph types and internal links:

[![Editing a page](qatalog/page.webp)](qatalog/page.webp)

Qatalog’s module structure scales to manage high content volumes better than teams usually manage, with document-based tools.
Existing tools generally requires teams to define their own structure, which inevitably ends up inconsistent between different entities, especially across teams.

While this may mean sacrificing some flexibility, it reduces the need for the librarian teams always lack.
Many tools capture organisational knowledge; Qatalog’s value proposition lies in actually _organising_ it.

## Federated search

Qatalog combines internal search results with results from external sources.
Given the lack of [federated search](https://en.wikipedia.org/wiki/Federated_search)
in competing products, this could become Qatalog’s killer feature.

![Viewing search results](qatalog/search-results.webp)

It actually works, although you only get basic search functionality.
You don’t get detailed search results, showing the matched text, for example.

## Workflows

Qatalog joins a growing number of B2B SaaS products that provide built-in workflow capabilities, as an alternative to general-purpose workflow automation products.

![Viewing a workflow](qatalog/workflow.webp)

You can only add simple workflows, with a single path and no conditions, which avoids unmanageable complexity.
Built-in workflow templates also make it easier to get started with workflows.
Meanwhile, integrations can perform external actions, such as creating a Trello card or posting a Slack message.

## Tasks and other features

Most of the time, you only need conventional task management, rather than generalised workflow.
In Qatalog, you can combine the two by using workflows to create tasks, without full case management.
Tasks have various properties, and appear on lists and boards:

[![Viewing tasks](qatalog/tasks.webp)](qatalog/tasks.webp)

Each entry’s home page can also have a measurement widget to display progress against some metric, or a timeline.

## Knowledge Ops

While enterprises no longer have 
[knowledge management](https://en.wikipedia.org/wiki/Knowledge_management)
teams, the challenges they addressed remain.
Modern productivity tools enable _knowledge operations_ (knowledge ops) by adding structured data capabilities to traditional document hierarchies.
Qatalog this further, by _automating_ it.