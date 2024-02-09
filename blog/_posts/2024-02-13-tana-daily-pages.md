---
title: Date-based information architecture
description: How Tana daily pages use ‘today’ as a sensible default
layout: hh
tags: product design
image: sunrise.jpg
---

![](sunrise.jpg)

[Philipp Reiner](https://unsplash.com/photos/qPJ6eRAMmCM){:.photocredit}

{:.series}
1. Tana daily pages ←
2. Linear projects ←

Knowledge workers organise information badly.
We obsess over tools like Apple Notes and 
[Notion](intranet-ten-word-wiki) for our personal and team knowledge bases,
but at least we organise them a little.

## The librarian problem

Old-fashioned corporate knowledge management failed,
partly because implementation teams expected people to play librarian,
helpfully describing and categorising information to make it findable.
In practice, people do no such thing.

People don’t _file_ new documents; they create them in some default location:
messy operating system _desktops_ and Google Drive folders.
Meanwhile, corporate knowledge bases devolve into one _miscellaneous_ location per department or team.

## Convenience wins

Convenience beats quality, in knowledge management, and everywhere else.
Fortunately, software product design has risen to this challenge:

* [tagging](https://en.wikipedia.org/wiki/Folksonomy) replaced static hierarchical taxonomies
* Google search got everyone used to a single search field
* YouTube replaced television schedules with searching millions of videos.

[Designing for laziness](https://medium.com/the-happy-startup-school/design-for-laziness-de8ad84a19a2):
makes the right thing to do the _easiest_ thing to do.
This also works for team-based knowledge bases.

## Tana outlines and nodes

[Tana](https://tana.inc) gives teams a new kind of Notion-like knowledge base.
It goes beyond Notion’s pages and databases, by decomposing all content into 
[node hierarchies](https://tana.inc/docs/nodes-and-references), such as bullet list items.

{: style="width:440px; border:1px solid #eee"}
![A nested list in Tana’s outline editor](tana/outline.webp)￼

Given this kind of [outline editor](https://tana.inc/docs/outline-editor),
your colleagues risk ending up with a single giant outline, with no top-level organisation.
Fortunately Tana designs for laziness.

## Tana daily pages

Selecting  _Today_ at the top of the sidebar navigates to the default page for new content.
Cleverly, each day gets a new [daily page](https://tana.inc/docs/daily-page):

![The default ‘today’ page for 24 January](tana/today.webp)
￼

You start fresh each day, and can reorganise this content, but _you don’t have to_.
New content has a
[sensible default](https://www.useronboard.com/onboarding-ux-patterns/sensible-defaults/)
location, so you can browse by day, week, month or year.

![A week-based view of several daily pages, with dynamic titles](tana/week.webp)
￼

This works because Tana nodes blur the distinction between pages and paragraphs, making this navigation more flexible.

## Quick add

Tana further supports laziness with a pop-up for adding content to today’s daily page.
[Quick add](https://tana.inc/docs/sidebar#quick-add)
can create new content from anywhere, without first having to plan its structure.

![Tana’s Quick Add pop-up, for adding content to today’s page](tana/quick-add.webp)
￼

Note how [Tana tags](https://tana.inc/docs/supertags)
help you make sense of the nodes on the resulting day page:
the **#task** tag means _this node represents a task_.

## Date-based organisation

Journals, photo albums and blog posts have always used dates for default naming, stable categorisation, and standard aggregations.
Dates can replace other kinds of titles too: 
someone I know rejected email subject lines for years, instead writing _Tuesday_, say.

Date categorisation remains stable: a photo’s _date taken_ never changes.
This makes dates a good way to file paperwork, so you never have to reorganise your files because one category grew more than expected, or a new category emerged.

{: style="width:800px; margin-bottom:1em"}
![Rows with dates in an Apple Numbers spreadsheet, grouped by week](tana/apple-numbers.webp)

Dates also have standard aggregations: week, month and year.
[Apple Numbers](https://en.wikipedia.org/wiki/Numbers_(spreadsheet)) (above)
uses this for convenient spreadsheet row grouping, by calendar week, for example.

## Personal notes

Personally, I use manual date-based organisation in a simpler tools.
In [Apple Notes](https://en.wikipedia.org/wiki/Notes_(Apple)),
I have a single _Journal_ note and add the date as a new heading at the top of the note every day.

<p style="margin-bottom:0"><img src="tana/apple-notes.webp" alt="A journal in Apple Notes, with a heading for a date"></p>
Notes rewards this small personal discipline with fast local search, and iPhone synchronisation.
That’s enough for my personal knowledge base, but I’d love to use Tana with a larger team.
