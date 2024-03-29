---
title: Why developers write bad API documentation
description: Coding habits that hinder technical writing
layout: hh
tags: product API documentation
image: book-burning.jpg
---

![](book-burning.jpg)

[Fred Kearney](https://unsplash.com/photos/enkfvvZkKv0){:.photocredit}

{:.series}
1. [Documentation usability](api-docs-usability)
2. Bad API documentation ←
3. [Deconstructed HTTP API docs](deconstructed-api-documentation)
4. [API documentation mistakes](api-documentation-mistakes)

<!--
1. Solving the wrong problem
2. Writing docs like code
3. Maintenance cost denial
4. Introducing non-requirements
-->

Developers might write good documentation. Or not.
[The API documentation usability problem](api-docs-usability) 
includes the risk that, among other problems, 
[developers write the wrong documentation](api-docs-usability#developers).
Writing code most of the time encourages habits that work against technical writing.
Some developers can write, and some of them even like it, but they need to become aware of and overcome these habits before they can stop writing bad API documentation.

## Solving the wrong problem

It shouldn’t surprise anyone when a developer with a documentation problem prefers to write code instead.
But however plausible their argument for why that particular documentation needs a new custom-built content management system (CMS), the number of existing CMS products should make you think twice.
It gets worse than the CMS problem, though, with subtler documentation-avoidance coding.

[The OpenAPI Specification](https://www.openapis.org)
describes detailed machine-readable HTTP API descriptions.
Developers can potentially use OpenAPI to produce API documentation, but only if they write the ‘words and spaces’ (in `description` fields) instead of _only_ writing code to 
[generate OpenAPI documents from API implementation code](https://nrkbeta.no/2019/08/26/on-architecture-fifth-post-how-i-got-programming-to-an-interface-wrong/).

To resist the temptation to write code, many developers focus on the writing by reducing tooling to the minimum, 
and writing documentation in [Markdown](https://en.wikipedia.org/wiki/Markdown) files.
This helps avoid coding distractions, but doesn’t stop a developer writing prose with the same kind of structure as code.

## Writing docs like writing code

When I started writing technical documentation, as a developer, it took me some time to learn that writing documentation the same way I wrote code resulted in… mediocre documentation.
Two assumptions in particular translate badly from coding to technical writing.

First, code has complex networked structure, and strongly resists linearity.
Documentation readability differs, and depends on how smoothly the reader can read each section from start to finish, without having to stop, re-read paragraphs, or jump to other sections.

Developers who write documentation they way the write code litter paragraphs with forward references that make the text hard to read.
Good technical writing minimises forward references, and prefers explaining things as they arise.
Documentation types do vary: tutorials need a linear structure, while reference documentation needs independent sections that you can look up (and then read start-to-finish).

Second, developers initially write documentation that avoids repetition.
Repeating yourself in code causes problems, while all kinds of teaching actually requires that repetition.
Repetition in documentation makes it more effective.
Telling the reader something a second time, in a different way, makes it easier for them to understand.

## Maintenance cost denial

Despite what developers might want to believe, API documentation does not have any of the following requirements:

* generated from the code
* automatically updated
* zero maintenance cost.

Documentation that maintains itself sounds great, if you don’t want to do it, as would code that writes itself.
Good luck with that!
Documentation requires maintenance, like software itself, but minimising maintenance cost won’t make your documentation more effective.

In the end, you can’t generate documentation from code.
You can generate formatting and layout, and infer some structure, but you still have to write the content.
You can’t express all of the content you need in code, and you can’t write good documentation the way you write code.
You should probably hire a technical writer instead.
