---
title: Why developers write bad API documentation
description: Coding habits that hinder technical writing
layout: hh
tags: product API documentation
image: book-burning.jpg
---

<img src="book-burning.jpg" alt="A book on fire">

<a class="unsplash" href="https://unsplash.com/photos/enkfvvZkKv0" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Fred Kearney</span></a>

<!--
1. Solving the wrong problem
2. Writing docs like code
3. Maintenance cost denial
4. Introducing non-requirements
-->

Developers might write good documentation. Or not.
[The API documentation usability problem](api-docs-usability) 
explained the risk that, among other problems, 
[developers write the wrong documentation](api-docs-usability#developers).
Writing code most of the time encourages habits that work against technical writing.
Some developers can write, and some of them even like it, but they need to be aware of and overcome these habits before they can stop writing bad API documentation.

## Solving the wrong problem

It shouldn’t surprise anyone when a developer with a documentation problem writes code instead.
However plausible their argument for why that particular documentation needs a new custom-built content management system (CMS), the number of existing CMS products should make you think twice.
It gets worse than the CMS problem, though, when coding avoids writing documentation more subtly.

[The OpenAPI Specification](https://www.openapis.org)
describes detailed machine-readable HTTP API descriptions.
Developers can potentially use OpenAPI to produce API documentation, but only if they write the ‘words and spaces’ (in `description` fields) instead of only writing code to generate OpenAPI documents from API implementation code.

To resist the temptation to write code, many developers focus on the writing by reducing tooling to the minimum, and writing [Markdown](https://en.wikipedia.org/wiki/Markdown) files.
This helps getting distracted by writing code, but a developer can still write prose with the same kind of structure as code.

## Writing docs like writing code

When I started writing technical documentation, as a developer, I (eventually) discovered that writing documentation the same way I wrote code resulted in… mediocre documentation.
Two assumptions in particular translate badly from coding to technical writing.

First, code has complex network structure, and strongly resists linearity, while readability depends on the experience of reading each section from start to finish.
Developers who write documentation they way the write code litter paragraphs with forward references that make the text hard to read.
Good technical writing minimises forward references, prefers explaining things as they arise, and splits reference documentation into independent sections.

Second, developers write documentation that avoids repetition.
Repeating yourself in code causes problems, while any kind of teaching actually requires it.
Repetition in documentation makes it more effective.
Telling the reader something a second time, in a different way, makes it easier for them to understand.

## Maintenance cost denial

Despite what developers might want to believe, API documentation does not have any of the following requirements:

* generated from the code
* automatically updated
* zero maintenance cost.

Documentation that maintains itself sounds good, if you don’t want to do it, as would code that writes itself.
Good luck with that!
Documentation requires maintenance, just like software itself, but minimising maintenance cost won’t make your documentation more effective.

You can’t generate documentation.
You can generate formatting and layout, but you still have to write the content, and you can’t express all of the content you need in code.
