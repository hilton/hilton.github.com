---
title: "B2B SaaS review: Cycle"
description: A first look at a tool for integrated product discovery
layout: hh
tags: product software
image: cycle/feedback.png
css: "article img { border: 1px solid #ddd; } article a:hover img { box-shadow: 0 0 6px 2px #428bca; }"
---

{:.series}
1. [Delibr](delibr-views)
2. [Qatalog](qatalog-review)
3. [Collato](collato-review)
3. Cycle ←

[Cycle](https://www.cycle.app)
provides a product discovery tool, for the product development
[units of work](units-of-work) upstream from coding.
It covers customer feedback, and discovery documentation for the resulting objectives, themes and initiatives.

## Product feedback

Cycle - and indeed the _product development cycle_ itself - starts with customer feedback that arrives manually and via integrations.
You view this in an inbox view, with grouping and filtering.

![The product feedback inbox, listing feedback by status](cycle/inbox.webp)

You can then assign, tag and link feedback, and later mark it as _processed_.
Even given a large volume of feedback, this might be enough structure for you to reach _product inbox zero_.

![Linking customer feedback to an initiative](cycle/feedback.webp)

Selected feedback text links to product development initiatives via _insights_.
These insights identify common customer problems and product opportunities that initiatives may address.

I like how Cycle handles product feedback, and its elegant unfussy design.
Cycle builds on this core functionality and gets more interesting when you move to discovery.

## Discovery documentation

Initiatives document higher-level product discovery over a longer period, perhaps months.
Cycle maintains a hierarchy to support this: initiatives → insights → feedback.
You can document these initiatives in rich-text documents, the same way you might in Notion or a wiki, to describe the result of discovery and design work.
￼
[![The document editor, with a linked insight](cycle/document.webp)](cycle/document.webp)

I love how the right-hand sidebar makes linked product feedback insights more explicit than when you keep them and design documents in separate tools.
Of course, this relies on everyone involved having access to these documents and views.

## Initiatives board

A Kanban-style board organises initiatives, with configurable and collapsible columns.

![The initiatives board view](cycle/board.webp)

You can filter the board by the same properties as the feedback inbox, as well as by document type.
You can also choose a list view:

![Initiatives board/list configuration, with filters and grouping](cycle/list.webp)

I like how you can drag to select multiple documents, to edit multiple properties, copy their links or delete them.
I also like the similarity with how you configure feedback views, although I would prefer unified views.

## Configuration

Cycle’s offers considerable flexibility, in two key areas.
First, you can configure its _document type_ hierarchy, to explicitly identify whichever 
[units of work](units-of-work) you use.
Tou can configure each document type’s list of workflow statuses and document properties.

[![Document types configuration page](cycle/doc-type.webp)](cycle/doc-type.webp)

Second, you can change the terms Cycle uses to name document types, statuses and properties, to match how you work.
Companies can’t resist inventing their own jargon, and we don’t need yet another product company to publish their ‘correct’ definitions of _initiatives_, _themes_, _objectives_ and _epics_.

## Integrated product discovery

Product managers who get product feedback from multiple sources need a tool like Cycle to keep track of it all.
Cycle does this, with two clear differences in scope to other
[product development productivity tools](product-tools).

Cycle focuses on product feedback and discovery, and doesn’t overly concern itself with publishing roadmaps, or managing development tasks.
Cycle integrates with rather than replaces GitHub Issues and Linear, for example.
This keeps the tool simpler than the integrated product management tools that try to do everything, at the cost of increased complexity (and price).
Cycle does, however, include a product discovery documentation editor, which makes it more than only a feedback tool.

Each product tool chooses a different scope.
I like the coherence of _feedback plus discovery_, even though I would generally prefer to
[simplify the product management work](simplify-product-work) and use as few tools as possible.
