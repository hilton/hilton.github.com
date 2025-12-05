---
title: "Low-code builder review: Appsmith"
description: a builder for dashboards, but not information pages
layout: hh
tags: product review
image: appsmith/project-ui.png
---

{:.series}
1. Appsmith ←
2. [Superblocks](superblocks-review)
3. [Retool](retool-review)
4. [JavaScript code](information-pages-code)

Web-based [information pages](information-pages), no longer require custom software development.
Instead, low-code _app builders_ provide tools for connecting user-interface components to existing data sources.
This especially fits for internal tools that don’t need a custom look and feel.

For this review, I started building a project management application using 
[Appsmith](https://www.appsmith.com/)’s low-code builder and
[The Star Wars API](https://swapi.dev).

## Example application

I started my example with a ‘projects’ table, which shows the default look and feel.

{:.screenshot}
[![The ‘Projects’ page – a table of projects](appsmith/deployed-projects.webp)](appsmith/deployed-projects.webp)

This page also shows what I like most about Appsmith: its
[data table](https://medium.com/design-with-figma/the-ultimate-guide-to-designing-data-tables-7db29713a85a)
component.
It defaults to client-side search, filter and pagination, and you can configure these to work server side.

Each _View project_ button opens a project _details page_, showing text (left) and a list (right).
The list widget has a fixed size, and built-in pagination.

{:.screenshot}
[![The ‘Project’ details page – text and a list of project roles](appsmith/deployed-project.webp)](appsmith/deployed-project.webp)

Clicking a list item opens another details page, showing the selected _project role_:

{:.screenshot}
[![The ‘Project role’ details page – a properties table](appsmith/deployed-role.webp)](appsmith/deployed-role.webp)

## Projects table

To build the projects page, I first added the _films_ API to its _queries_:

{:.screenshot}
[![Configuring the API that provides projects data](appsmith/projects-queries.webp)](appsmith/projects-queries.webp)

Next, I configured a table widget’s _Table data_ to use the films API:

{:.screenshot}
[![Configuring the projects table widget](appsmith/projects-ui.webp)](appsmith/projects-ui.webp)

I like the UI editor’s live data preview, and the _Table data_ data source reference auto-complete.

{:.screenshot}
[![Configuring the ‘View project’ button widget](appsmith/projects-ui-action.webp)](appsmith/projects-ui-action.webp)

For the page navigation, 
it turned out that you can only configure a _Navigate to_ action on a button widget.
**Appsmith doesn’t support internal hyperlinks in the text or table widgets!**

The _View project_ button’s _onClick_ action uses the API’s `url` property as a unique project identifier,
formatted by a `SWAPI` helper object that I added to the page’s JS panel.
I liked this low-code option to add a few lines of JavaScript to transform the API response,
instead of having to change the API to suit Appsmith.

## Details pages

The _project_ details page has a layout container for text (left),
and a list widget with two text widgets per item (right).

{:.screenshot}
[![User-interface widgets on the project details page](appsmith/project-ui.png)](appsmith/project-ui.png)

I found the list widget over-engineered.
Each list item gives you a layout container, but you can’t render a plain HTML list.

The _role_ details page also uses absolutely-positioned text labels,
in the absence of a _properties table_ widget.

{:.screenshot}
[![Text widgets on the project role details page](appsmith/role-ui.webp)](appsmith/role-ui.webp)

On both details pages, I didn’t like having to size widgets by eye.
They use absolute positions and dimensions,
but you can’t edit those numbers to make the adjacent widgets the same width.
You also don’t have a page grid that helps you make tidy layouts.

You also can’t reduce the built-in padding between widgets.
On the details pages, I couldn’t make the list items and properties use any less vertical space.

## URL denial

{:.info}
🚀 Update: as of November 2025, Appsmith supports 
[static app URLs](https://docs.appsmith.com/build-apps/how-to-guides/configure-static-app-urls).

These screen shots don’t show the biggest horror: Appsmith’s URLs.
The pages above have URLs like:

	https://app.appsmith.com/app/star-wars-projects/projects-6745N0p7fjKzl5aKXQeZt3mS
	https://app.appsmith.com/app/star-wars-projects/project-67456pctiVb3i189YawCLH3s?id=films%2F1%2F
	https://app.appsmith.com/app/star-wars-projects/role-6745cpT5yzyHcwhDBMimUNby?id=people%2F1%2F

You cannot remove the UUID, which makes page URLs unique across Appsmith tenants,
so you can’t use [information page URLs](information-page-urls) like
`https://app.appsmith.com/app/star-wars/project/4`, with your own identifiers.

Meanwhile, my application doesn’t even work properly.
Stateful navigation via UI widgets works, but the browser _Back_ button doesn’t.
Apparently, I could use application global state to fix that,
but tells me that Appsmith doesn’t want to support this use case.

Appsmith targets dashboard-style single-page applications,
where details open in a modal dialogue box, and that don’t use hyperlinks.
To build [information pages](information-pages), I’ll have to look elsewhere.
