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

The core recommendation behind a living glossary, like examples from previous chapters, requires extracting knowledge from a software system’s source code:

> Extract the glossary of the ubiquitous language from the source code. (p159)

_Ubquitous language_ refers to the subject-matter terminology whose importance
[Domain-Driven Design](https://martinfowler.com/bliki/DomainDrivenDesign.html) popularised.
This trend has created a mainstream software development practice of using problem domain terminology in code, so that when the code refers to an _order_, say, this means precisely what it means when domain experts use the word _order_.

This approach implies that developers will write definitions of domain vocabulary in code comments.
So while the idea makes sense, it won’t always work in practice.
Unless joking, one does not suggest that programmers should be writing comments _lightly_.

## Optimising for writers

The wisdom of Martraire’s approach lies in optimising for the writers.

During the last ten years, my personal software development context has changed several times, and I have learned that software development varies on several dimensions:

| My past context | My present/future context |
| --- | --- |
| Organisation focus | Customer focus |
| Professional services | Product development |
| Developer-only teams | Cross-functional teams with product managers and designers |
| One small development team | Multiple collaborating product teams |
| Developers write, maybe | Technical writers write |

While Martraire’s approach would have suited my past context perfectly, I increasingly work in a context where not all writers can easily edit the code.
When non-coders use terminology before coders do, in feature briefs and design mock-ups, optimising for writers means something else.

## Glossary-first development

My current approach to a domain glossary has resulted in a collaboratively-maintained domain glossary that itself represents a single source of truth for artefacts that use those terms but come later, such as content marketing and source code.
My current experiment takes the form of a Notion database, whose entries are tagged with 
[bounded contexts](https://martinfowler.com/bliki/BoundedContext.html)
that indicate their ownership.

I don’t yet have (but could potentially build) a reconciliation mechanism to identify missing glossary entries.
If the code marked core concepts with an annotation, the build could presumably use the Notion API to create a blank entry for missing glossary entries.
That would, in turn, notify the glossary maintainers (product managers) that a term needs defining.

Another factor potentially makes my current externalised approach necessary:
the code does not use all of the domain terms that we use when talking about the product.
However, that likely crosses the line of achievable maintainability, so I have limited our currently glossary’s scope to _terms the user interface uses_.
This user-interface centric approach aligns well with customer focus, which contrasts with a historical alternative.

## Data dictionary documentation

Historically, we used to call the domain glossary a _data dictionary_,
which we wrote as part of a system’s data model documentation in a _functional requirements specification_.
While terminology and software development methods have changed over the last twenty years, this value of capturing this kind of knowledge has not.

Meanwhile, many contemporary APIs have documentation that fails to describe what their data means.
The Spotify Web API offers an atypical counter example, by documenting its
[Web API Object Model](https://developer.spotify.com/documentation/web-api/reference/#objects-index) that explains jargon such as _danceability_:

> Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.
