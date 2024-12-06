---
title: Superblocks review
description: an app builder that works for information pages
layout: hh
tags: product review
css: "article p:has(img) { margin:15px 0; } body.writing article img { border: 1px solid #ddd; max-width:calc(100% - 3px) } article a:hover img { box-shadow: 0 0 6px 2px #428bca; }"
---

<!-- 655 -->

For this mini-review of [Superblocks](https://www.superblocks.com), a low-code application builder,
I took the same approach as for [Appsmith](appsmith-review).
I started building some project management [information pages](information-pages),
using [The Star Wars API](https://swapi.dev).

## Example application

The _Projects_ page shows a single
[table component](https://docs.superblocks.com/applications/components-library/table/),
which provides functionality for sorting, filtering (search), column moving/resizing, and data export.
I didn’t use its pagination, inline editing, conditional formatting, server-side pagination, or saved filters.

[![The ‘Projects’ page – a table of projects](superblocks/deployed-projects.webp)](superblocks/deployed-projects.webp)

Clicking a table row opens the project details page, showing text (left) and a paginated list (right):

[![The ‘Project’ details page – text and a list of project roles](superblocks/deployed-project.webp)](superblocks/deployed-project.webp)

Each list item links to a _project role_ details page – a simple properties table:

[![The ‘Project role’ details page – a properties table](superblocks/deployed-role.webp)](superblocks/deployed-role.webp)

These pages use a default look-and-feel that I didn’t customise.
For internal tools that don’t need to align with a brand design,
using this kind of utilitarian look saves design and implementation effort.

## Projects table

To build the projects page, I first added the _films API_, which fetches data when the page loads.
I then referenced the `films_api` in the table component’s _Data_ configuration (far right).
_Run API_ populates the table, after which I configured the displayed columns.

[![Configuring the projects table](superblocks/edit-projects.webp)](superblocks/edit-projects.webp)

Superblocks does a good job of integrating the API set-up with the UI component configuration,
with the live preview, and auto-complete in the _Data_ configuration’s JavaScript expression.

To configure navigation to the project details page, I created a _Project_ page,
and defined its _route_ (URL path template) as `/project/:id`.
Then I could configure the projects table’s _onRowClicked_ event to _Navigate to /project/:id_,
passing the clicked row’s value for the `id` route parameter.

## Details pages

The _project_ details page has a text block (left), and a
[grid component](https://docs.superblocks.com/applications/components-library/grid) (right).

[![Configuring a grid component’s data with a JavaScript expression](superblocks/edit-project.webp)](superblocks/edit-project.webp)

I liked the page layout, defined adding _sections_ to the page, choosing whether to layout their contents horizontally or vertically.
Within those containers, as well as fixed sizes, component sizes can depend on their content, 
their parent layout container, or the page.

I also liked the low-code ability to add a complex JavaScript expression in the grid component’s
_Data_ configuration, to transform the API data to what the component needs.
I especially liked the option to open the narrow sidebar field (right) in a larger editor panel (bottom).

I did find the grid component overkill, though: I would have preferred a plain HTML list.
At least it was straightforward to configure a
[link component](https://docs.superblocks.com/applications/components-library/link)
to link role names to the _role details page_:

[![Configuring a value in a properties table](superblocks/edit-role.webp)](superblocks/edit-role.webp)

This page uses layout containers and
[text components](https://docs.superblocks.com/applications/components-library/text)
that would have taken time to add individually.
Instead, I selected a _properties table_ from a catalogue of
[UI templates](https://docs.superblocks.com/applications/ui-templates).

I liked how the _Navigation_ sidebar (left) makes it easy to select the layout containers and components,
provided that you name them properly.

## Page routes

