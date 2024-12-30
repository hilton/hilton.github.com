---
title: Retool review
description: an app builder with better developer experience
layout: hh
tags: product review
image: retool/edit-project.png
---

{:.series}
1. [Appsmith](appsmith-review)
2. [Superblocks](superblocks-review)
3. Retool ←
4. JavaScript code

<!-- 615 -->

This mini-review series continues with [Retool](https://www.superblocks.com),
a much-imitated low-code application builder.
As before, I built some project management [information pages](information-pages),
using [The Star Wars API](https://swapi.dev).

## Example application

The _Projects_ page uses the usual multi-featured table component, shown here with most of its features hidden.
The default rendering uses a label pill style for the small set of _director_ values,
and I liked being able to render the titles as links, instead making the whole row clickable.

{:.screenshot}
[![The ‘Projects’ page – a table of projects](retool/preview-projects.webp)](retool/preview-projects.webp)

Each title link opens the corresponding detail page, which shows text (left) and a list of related _roles_ (right),
with a relatively compact layout:

{:.screenshot}
[![The ‘Project’ details page – text and a list of project roles](retool/preview-project.webp)](retool/preview-project.webp)

Each role links to a second details page, with only a title and properties list:

{:.screenshot}
[![The ‘Project role’ details page – a properties table](retool/preview-role.webp)](retool/preview-role.webp)

These screenshots show the free plan’s _preview_;
[publishing a release](https://docs.retool.com/apps/guides/app-management/releases-history)
requires a paid plan.
So far, this looks the same as the output from competing tools;
Retool shines when you build the app.

## Projects table

Retool offers the same kind of builder functionality as
[Appsmith](appsmith-review) and [Superblocks](superblocks-review),
but with a better user experience.
I found it easier and faster to navigate the user interface, and build this first page,
whose table component references a data source I added as an HTTP/JSON API call:

{:.screenshot}
[![](retool/edit-projects.webp)](retool/edit-projects.webp)

I found some room for improvement here.

* The _title_ column’s _Link_ format still uses an _on click_ event handler, instead of a simpler HTML hyperlink.
* I guessed what _Additional scope_ option (top) left might do, but I couldn’t find any documentation, and then didn’t get it to work according to my guess.
* While I liked the _API request_ view (not shown), I would have found HTTP format more concise and readable than a JSON document.

However, these details matter less to me than the ease of adding an HTTP API and writing a JavaScript transformation function to make the API’s JSON response suitable for the table.

## Details pages

Retool does a good job of supporting a detail page’s required `id` URL parameter.

{:.screenshot}
[![](retool/edit-project.webp)](retool/edit-project.webp)

Unfortunately, Retool supports query string parameters, but not path parameters,
so this page has the URL path `app/project?id=1` instead of the Superblocks version’s `app/project/1`.
I also found it inconvenient to have to manually add the `id=1` query string parameter to the URL,
to make the data preview work, each time I opened a details page in the builder.

Like other tools, Retool lacks an HTML list component; this _Roles_ list uses a repeating card component.
At least I could remove the card padding, to reduce the list’s vertical spacing.
Fortunately, Retool made up for this over-engineered layout on the _Role_ details page:

{:.screenshot}
[![](retool/edit-role.webp)](retool/edit-role.webp)

I like this properties table’s unfussy layout,
and its choice between labels _left of_ or _above_ the property values.
I also liked the option to format numbers as text, and add units to the _Mapped value_ (right).

## Developer experience

_Built for developers_, on Retool’s web site, translates to the builder UI calling API calls and JavaScript _code_,
which low-code platforms typically avoid mentioning.
This developer focus also emerges in details,
such as the where the previous screenshot uses the word _string_ (developer jargon) for a _text_ format.

Retool’s polished design and developer experience won me over, despite a few design choices.
I found it well-suited for back-end/API developers who want to build internal tools.
