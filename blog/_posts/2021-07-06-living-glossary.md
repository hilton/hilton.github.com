---
title: Living glossaries and data dictionaries
description: Reflections on ‘Living Documentation’, by @cyriux
layout: hh
tags: documentation book
image: living-documentation.jpg
---

![Living Documentation - book cover](living-documentation.jpg)

The book [Living Documentation](https://www.pearson.com/us/higher-education/program/Martraire-Living-Documentation-Continuous-Knowledge-Sharing-by-Design/PGM1724668.html),
by [Cyrille Martraire](http://cyrille.martraire.com/about/)
explores the concept of _living documentation_.
Chapter 6 introduces _living glossaries_ as well as two other examples of living documentation.

## Identifying core concepts

The core recommendation for a living glossary, like examples from previous chapters, requires extracting knowledge from the software:

> Extract the glossary of the ubiquitous language from the source code. (p159)

_Ubquitous language_ refers to the subject-matter terminology whose importance
[Domain-Driven Design](https://martinfowler.com/bliki/DomainDrivenDesign.html) popularised.
This trend created a mainstream software development practice of using problem domain terminology in code, so that when the code refers to an _order_, say, this means precisely what it means when domain experts use the word _order_.

This approach implies that developers will define domain vocabulary in code comments.
So while the idea makes sense, it won’t always work in practice.
One does not suggest that programmers should write comments _lightly_.

## Optimising for writers

The wisdom of Martraire’s approach lies in optimising for the writers.
Over the years, my personal software development context has changed several times, and I have changed perspective along several dimensions:

| My past context | My present/future context |
| --- | --- |
| Organisation focus | Customer focus |
| Professional services | Product development |
| Developer-only teams | Cross-functional teams with product managers and designers |
| One small development team | Multiple collaborating product teams |
| Developers write, maybe | Technical writers write |

While Martraire’s approach would have suited my past context, I now work with non-coding writers who cannot easily edit prose embedded in code.
Meanwhile, product designers and other non-coders use terminology before coders do, in feature briefs and design mock-ups.
In this context, optimising for writers means something else.

## Glossary-first development

I currently use a collaboratively-maintained domain glossary, which represents a single source of truth for various artefacts, such as content marketing and source code.
This takes the form of a Notion database, whose entries we tag with 
[bounded contexts](https://martinfowler.com/bliki/BoundedContext.html)
that indicate their ownership.

We limited our glossary’s scope to _terms the user interface uses_, for maintainability.
This user-interface centric approach aligns well with customer focus.
Unless we broaden this scope to content marketing, the software still uses all of the terms.

We could therefore build a reconciliation mechanism to identify missing glossary entries.
The software build could use the Notion API to create blank glossary entries for undefined core concepts used in the code.
That would notify the glossary maintainers (product managers) that a term needs defining.

## Data dictionary documentation

We used to call the domain glossary a _data dictionary_ - part of a system’s data model documentation.
Terminology and development methods have changed since then; the value of capturing this kind of knowledge has not.

Meanwhile, modern API documentation often fails to explain what the data means.
The Spotify [Web API Object Model](https://developer.spotify.com/documentation/web-api/reference/#objects-index)
offers an atypical counterexample, documenting its jargon such as _danceability_:

> Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.

In this product API context, you no longer need to extract documentation from the code; the glossary already exists as part of the product.
The ultimate fusion of developer experience, user experience and domain language elevates the glossary to _product component_ status.
