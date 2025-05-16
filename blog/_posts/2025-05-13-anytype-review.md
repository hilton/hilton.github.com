---
title: Anytype review
description: a European Notion alternative with types
layout: hh
tags: product review
image: anytype/page.png
---

{:.series}
1. Anytype review ←
2. [Anytype architecture](anytype-local-first)

Exploring European alternatives to office software revealed a new product from Germany.
[Anytype](https://anytype.io/)’s public beta combines desktop and mobile user interfaces that resemble Notion,
but with some new ideas and a promising user experience.

## Editing pages

Editing pages in Anytype looks a lot like editing them in Notion, with various block (paragraph) types,
and even includes the optional banner image and page emoji.
However, Anytype immediately _feels_ different, because of how fast and responsive it feels.

{:.screenshot}
![An Anytype page, with navigation and properties sidebars](anytype/page.webp)
￼

All Anytype pages have _properties_, such as a _Creation date_ or a _Tag_, which live in a sidebar.
You can also choose which ones to include in the page header,
and can insert a property name and value as a block anywhere in the page, using an insertion menu:

{:.screenshot}
![Inserting a property value as a block](anytype/insert.webp)
￼

Having properties on every page removes Notion’s distinction between pages and database entries.
This simplifies Anytype’s content model, in a way, but makes it less obvious how to organise pages.

## Organising pages

In Anytype, a _collection_ works the same way as a Notion database, either inline in a page, or standalone.
You add or move pages to the collection, and define views with sorting and filtering.

{:.screenshot}
![A collection’s board view](anytype/board.webp)
￼

As well as this board view, you can choose a table, list, gallery, calendar, or a graph:

{:.screenshot}
![A collection’s graph view](anytype/graph.webp)
￼

Unfortunately, the graph view only supports automatic layout.
You can drag the nodes (pages) around, but the view doesn’t preserve their positions,
so you can’t use it for something like an opportunity solution tree.

## Search

Full-text search works surprisingly well, compared to most software these days.
For example, search results actually show the matched text within a page:

{:.screenshot}
![Search results, showing matching page content text](anytype/search.webp)
￼

Perhaps more importantly, search feels fast.
After all, user-interface responsiveness remains a timeless user experience challenge.

So far, Anytype feels like Notion, but fast.
Things get more interesting when you go one level deeper.


## Organising information

The properties you want on each page depends on the kind of page, so that similar pages share the same properties.
Anytype’s key feature – included in its name – gives each page a _type_ that has a name and a set of properties.
The default types include _page_, which has basic properties, such as _creation date_ and _tags_.
The _Task_ type adds task-specific properties, such as _assignee_ and _due date_.

You can of course define your own types, so that roadmap _opportunities_, for example,
have statuses (_now, next, later_) that correspond to columns on a roadmap board view (above).

{:.screenshot}
![Editing a custom page type for project opportunities](anytype/type.webp)
￼

While a _type_ defines the data, each type can include multiple _templates_ that provide default content for new pages,
just like Notion database templates.

{:.screenshot}
![A template for the ‘opportunity’ type, including default headings](anytype/template.webp)
￼

Intriguingly, although an Anytype collection resembles a Notion database, an Anytype collection can mix types.
This, and the ability to insert views that query objects, by type or property, give you a lot of flexibility in how you organise information.

As with Notion, it probably takes a while to explore how you can use this flexibility.
Meanwhile, you can start simply, with only _pages_, and add custom properties, types and queries later.

## A new model

I like Anytype’s content model and user experience enough to want to try it out with a team.
Then its modern local-first architecture and on-device encryption will become interesting.
