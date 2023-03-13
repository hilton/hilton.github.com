---
title: "B2B SaaS review: Collato"
description: A first look at a simpler way to collaborate on documents
layout: hh
tags: product software
image: collato/canvas.png
css: "img { border: 1px solid #ddd; } a:hover img { box-shadow: 0 0 6px 2px #428bca; }"
---

Collato is like the macOS Finder desktop, but for your Google Docs.
And your Confluence Pages, Jira issues, Figma designs, and Miro boards.
Its new take on document and collaboration workspaces combines familiar elements from other tools, to make something new and interesting, combining a canvas/board view with documents and links.

## Workspace

The main view shows a Collato _workspace_ as an infinite canvas, much like Miro and Mural.
Rather than stickies and manually drawn connectors, the canvas shows document titles, and lines that represent hyperlinks between documents.

[![Cards on the canvas view](collato/canvas.webp)](collato/canvas.webp)

I love how this addresses a problem I’ve had with Google Docs and other tools:
not having a way to organise what I’m working on, so I can browse it instead of having to always search.
I like organising content visually sometimes, especially when I haven’t come up with good titles yet.
When I can remember _where_ I left something on the canvas, I can browse by _location_ instead.
Just like on the desktop.

## Document

Collato has its down documents, which open in a familiar editable document view, but with additional metadata, comments and a generated summary on the right.

[![A card, open in docuemnt view](collato/document.webp)](collato/document.webp)

Metadata includes both standard properties (tags, status, date, assignee) and custom properties (e.g. _persona_ in this screenshot).
Tools with this kind of structured data tend to support custom views that make it less necessary to organise everything manually (e.g. in Notion) than in tools where you have to create your own content hierarchy (e.g. Confluence).
However, Collato doesn’t have that kind of custom view yet.

## Integration

Collato integrates with Google Docs, Confluence, Jira, Figma, and Miro, so you can use Collato to collect their ‘documents’ in a virtual workspace.
Use the toolbar button to open a document browser, and select one to add.

![Browsing Google Drive](collato/google-drive.webp)

Much of Collato’s value comes from providing a shared space for the different kinds of documents you work with.
I like how this approach makes them first-class content types within Collato.

## Search

Collato searches across all of the content in a workspace, included external documents such as Google Docs.

![Searching content](collato/search.webp)

This federated search tackles the common problem of having content in multiple SaaS tools, with no way to search across sources, in the same way that the canvas view lets you browse them.

## Organisation

Collato lets you have multiple independent workspaces, so you do’t have to organise all of your documents on the same canvas.

![Browsing workspaces](collato/workspaces.webp)

For example, each workspace might represent a different high-level
[unit of work](units-of-work), such as a quarterly product development objective.
The workspace contents would be the lower-level units of work: individual key results, experiments and features.

## Simpler collaboration

Different workspaces, which might include the same external documents, could provide different views of the same content.
That would make Collato an alternative search/browse interface for Google Docs, or any of the other integrated tools.

However, Collato’s built-in documents already provide a lightweight alternative to Google Docs and Confluence.
Looking to the future, I most look forward to finding out whether Collato gains the ability to use document properties to define views.
For some teams, user-defined views like [Delibr’s](delibr-views#view), could make Collato a simpler alternative to Jira as well.
