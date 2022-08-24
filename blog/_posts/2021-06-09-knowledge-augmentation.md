---
title: Knowledge augmentation and technical writing
description: Reflections on ‘Living Documentation’, by @cyriux
layout: hh
tags: documentation book
image: living-documentation.jpg
---

![Living Documentation - book cover](living-documentation.jpg)

{:.series}
1. [Principles of documentation](martraire-documentation-principles)
2. [Principles of living documentation](living-documentation-principles)
3. [Knowledge exploitation](knowledge-exploitation)
4. Knowledge augmentation
5. [Curation and storytelling](curation-storytelling)
6. [Glossaries and data dictionaries](living-glossary)

The book [Living Documentation](https://www.pearson.com/us/higher-education/program/Martraire-Living-Documentation-Continuous-Knowledge-Sharing-by-Design/PGM1724668.html),
by [Cyrille Martraire](http://cyrille.martraire.com/about/)
explores the concept of _living documentation_.
Chapter four introduces the topic of knowledge augmentation.

## More than code

The chapter opens with a statement that you will either find difficult to hear or obvious, depending on your perspective:

> Most programming languages have no predefined way to declare the key decisions, to record the rationale, and to explain the choice made against the considered alternatives.
> Programming languages can never tell everything. (p95)

You need more than code.
I wish I had a whole book to read about working with this limitation in programming languages’ expressive power, but I’ll settle for this chapter.

You have to augment the code to share knowledge about your software. 
But programmers like to imagine that they can generate the documentation their software needs from its code, but to understand a system you have to ask questions that the code cannot answer.
I like to start with questions about _why?_

## More than comments

Explaining _why_ code exists appears first on my list of [3 kinds of good comments](3-kinds-of-good-comments).
Comments can answer such classic software design questions as _what were we thinking?_
However, Martraire doesn’t explore conventional comments:

> It’s possible to add knowledge as code comments. But comments lack structure… (p96)

This seems disingenuous, like saying that _documentation lacks structure_.
Like all documentation, comments lack structure when badly written, but also allow as much structure as any other kind of writing.
Meanwhile, Martraire aims heads in a different direction:

> Augment your programming language so that the code can tell the full story, in a structured way. (p96)

This chapter turns out to cover structured data that enriches normal writing.
Content plus metadata, rather than only prose and headings.

## Annotated content

The bulk of the chapter describes enriching code with structured documentation, using code annotations.
These effective tag code with metadata, which can also include prose, to identify design choices such design patterns and core domain concepts.

This approach to annotated documentation content reminds me of
[topic-based authoring](https://en.wikipedia.org/wiki/Topic-based_authoring),
a standard approach in the technical writing community.
This approach enables content reuse by structuring writing into independent _topics_.
The
[Darwin Information Typing Architecture](https://en.wikipedia.org/wiki/Darwin_Information_Typing_Architecture) (DITA)
provides a standard model for written information, classifying each topic as a _task, concept, reference, glossary entry,_ or _troubleshooting_.

## Technical writing

I like the idea of using code annotations to use structured data for documentation, especially since you can include prose in annotation `documentation` fields, as supported by technologies like 
[XML Schema](https://en.wikipedia.org/wiki/XML_Schema_(W3C))
and relational database attribute descriptions.
Except that people generally didn’t actually lose those.
A code annotation can support a one-sentence description, but cannot provide a decent writing environment and won’t be accessible to non-programmer writers.
That matters, because relying on programmers to write documentation tends not to end well.

You don’t need to write code to annotate content with structured data, fortunately.
[Notion](https://en.wikipedia.org/wiki/Notion_(productivity_software)),  for example,
uses page annotations (typed properties) to enable functionality that wikis lacked, and which I first used with a 
[Confluence](https://en.wikipedia.org/wiki/Confluence_(software))
metadata plug-in.

It turns out that _knowledge augmentation_ gives a more descriptive outcome-focused name to what we usually call _technical writing_.
The challenge lies in combining these two separate worlds of technical writing and software development.
