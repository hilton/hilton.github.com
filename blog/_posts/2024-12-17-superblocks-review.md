---
title: "Low-code builder review: Superblocks"
description: an app builder that works for information pages
layout: hh
tags: product review
image: superblocks/edit-project.png
---

{:.series}
1. [Appsmith](appsmith-review)
2. Superblocks ←
3. [Retool](retool-review)
4. [JavaScript code](information-pages-code)

This mini-review of [Superblocks](https://www.superblocks.com), a low-code application builder,
takes the same approach as for [Appsmith](appsmith-review).
I built some project management [information pages](information-pages),
using [The Star Wars API](https://swapi.dev).

## Example application

The _Projects_ page shows a single
[table component](https://docs.superblocks.com/applications/components-library/table/),
which provides functionality for sorting, filtering (search), column moving/resizing, and data export.
I didn’t use its pagination, inline editing, conditional formatting, server-side pagination, or saved filters.

{:.screenshot}
[![The ‘Projects’ page – a table of projects](superblocks/deployed-projects.webp)](superblocks/deployed-projects.webp)

Clicking a table row opens a project details page, showing text (left) and a paginated list (right):

{:.screenshot}
[![The ‘Project’ details page – text and a list of project roles](superblocks/deployed-project.webp)](superblocks/deployed-project.webp)

Each list item links to a _project role_ details page – a simple properties table:

{:.screenshot}
[![The ‘Project role’ details page – a properties table](superblocks/deployed-role.webp)](superblocks/deployed-role.webp)

These pages use a default look-and-feel that I didn’t customise.
For internal tools that don’t need to align with a brand design,
using this kind of utilitarian look saves design and implementation effort.

## Projects table

To build the projects page, I first added the _films API_, which fetches data when the page loads.
I then referenced the `films_api` in the table component’s _Data_ configuration (far right).
_Run API_ populates the table, after which I configured the displayed columns.

{:.screenshot}
[![Configuring the projects table](superblocks/edit-projects.webp)](superblocks/edit-projects.webp)

Superblocks does a good job of integrating the API set-up with the UI component configuration,
with the live preview, and auto-complete in the _Data_ configuration’s JavaScript expression.

To configure navigation to the project details page, I created a _Project_ page,
and defined its _route_ (URL path template) as `/project/:id`.
Then I could configure the projects table’s _onRowClicked_ event to _Navigate to /project/:id_,
passing the clicked row’s value for the `id` route parameter.

## Details pages

The _project_ details page has a text block (left), and a
[grid component](https://docs.superblocks.com/applications/components-library/grid) (selected, right).

{:.screenshot}
[![Configuring a grid component’s data with a JavaScript expression](superblocks/edit-project.webp)](superblocks/edit-project.webp)

I liked page layout: adding _sections_ to the page, adding _columns_ to sections,
and choosing to arrange their contents horizontally or vertically.
Component sizes can depend on their content, their parent layout container, or the page.
I prefer this to other tools’ absolute positions and dimensions.

I also liked the low-code ability to add a complex JavaScript expression in the grid component’s
_Data_ configuration, to transform the API data to what the component needs.
I especially liked the option to open the narrow sidebar field (right) in a larger editor panel (bottom).

I did find the grid component overkill, though: I would have preferred a plain HTML list.
At least it was straightforward to configure a
[link component](https://docs.superblocks.com/applications/components-library/link)
to link role names to the _role details page_:

{:.screenshot}
[![Configuring a value in a properties table](superblocks/edit-role.webp)](superblocks/edit-role.webp)

This page uses layout containers and
[text components](https://docs.superblocks.com/applications/components-library/text)
that would have taken time to add individually.
Instead, I selected a _properties table_ from a catalogue of
[UI templates](https://docs.superblocks.com/applications/ui-templates).

I liked how the _Navigation_ sidebar (left) makes it easy to select the layout containers and components.
If you name them properly.

## Information pages

Superblocks has the core capabilities for building [information pages](information-pages):

1. [integration](https://docs.superblocks.com/integrations/overview) with external data sources
2. [table](https://docs.superblocks.com/applications/components-library/table/) and [grid](https://docs.superblocks.com/applications/components-library/grid) components for browsing data
3. [URL templates](https://docs.superblocks.com/applications/multi-page/routes#dynamic-routes), a.k.a. _route parameters_, for links to row-specific details pages
4. [forms](https://docs.superblocks.com/applications/components-library/form), for editing data

Beyond that, additional features add flexibility to what you can build, or save time.
They also enable more use cases, but never all of them.

Low-code tools save time, until you hit a fundamental limitation that blocks what you want to build.
But that doesn’t matter: they don’t exist to replace traditional coding;
they reduce the number of use cases that require it.
And that no longer includes information pages.
