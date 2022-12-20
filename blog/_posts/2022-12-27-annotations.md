---
title: Documentation annotation styles
description: How to annotate technical writing examples for readability
layout: hh
tags: API documentation
css: "article img {width:640px}"
image: detour-sign.jpg
---

![](detour-sign.jpg)

[Ussama Azam](https://unsplash.com/photos/kMb4qE_zj3Q){:.photocredit}

{:.series}
1. [Explanation order](explanation-order)
2. [Backwards API docs](api-docs-backwards)
3. Annotation styles
4. API docs annotations
5. Annotations in HTML

Technical documentation includes different kinds of content, such as definitions, explanations and examples.
Readers often find examples easiest to follow, while writers struggle to include them, and end up with
[backwards documentation](api-docs-backwards).
Examples can also provide explanations, via annotations the reader to drill down into.

In technical writing, including additional detail that you could inline, in parentheses for example,
interrupts the main content and reduces readability.
Instead, an [annotation](https://en.wikipedia.org/wiki/Annotation) provides additional text, 
linked from the main content.
Technical documentation uses a variety of annotation styles.

_Note: in the following examples, you may ignore the [Pirate Ipsum](https://pirateipsum.me) placeholder text._

{:#footnote}
## Footnote style

Print publishing traditionally uses [footnotes](https://en.wikipedia.org/wiki/Note_(typography))
for annotations, typically with a superscript digit or other symbol that the annotation itself repeats.

![Footnote style - a superscript annotation number](api/footnote.webp)

Numbered annotations simplify layout, especially with the _endnote_ style that collects annotations at the end of a section.
However, the **1** in this example has no intrinsic meaning, often rendering the footnote or endnote meaningless without the context it annotates.

{:#definition}
## Definition style

A definition style that highlights and repeats the annotated text improves on footnotes by making the annotation easier to read in isolation.

![Definition style - a highlighted term, repeated in the annotation](api/definition.webp)

This style relies on visual design to indicate the annotation, perhaps by varying highlight colours, or using layout that aligns the annotation with its source.
But this alignment makes automatic layout more difficult when one location has two annotations, which cannot occupy the same margin position.

{:#table}
## Table style

Generated documentation layouts typically replace positional annotations with a table of terms and their annotations, as in a table of definitions.
API documentation tends to favour this approach, perhaps due to programmers’ container fetish, that makes them like putting things in boxes, including more boxes.

![Table style - a table definitions before an example](api/tables.webp)

This style moves the table of definitions away from the content they annotate, often off-screen in electronic documentation, making it harder for the reader to navigate.
Similarly, print publishing sometimes includes a glossary at the start of a book, that the reader has to keep flipping back to.
Or worse: a glossary at the end of a book that you don’t discover until after you have struggled through a book full of 
[abbreviations](abbreviation) and other jargon.

Making the reader hunt for definitions violates a technical writing heuristic: _don’t make the reader fast-forward and rewind_.
This alludes to cinema, where you don’t expect the audience to have to fast-forward and rewind the film to understand the plot.

{:#direct}
## Direct annotation style

While tables compromise automatic layouts, more advanced textbook layouts make annotations more visually explicit.
Lines or arrows that connect text to annotations mimic the way we naturally use pen and paper, and physical whiteboards.

![Annotation style - a highlighted term, visually annotated](api/annotation.webp)

In technical documentation, [Kathy Sierra](https://en.wikipedia.org/wiki/Kathy_Sierra)
used this to great effect in O’Reilly’s successful
[Head First](https://en.wikipedia.org/wiki/Head_First_(book_series)) technical book series.
[The Head First Formula](https://web.archive.org/web/20180219200945/http://www.headfirstlabs.com/readme.php)
explains its practice of directly annotating illustrations:

> putting words within the pictures they describe (as opposed to somewhere else in the page,
> like a caption or in the body text) causes your brain to try to makes sense of how the words and picture relate

The science behind this approach, and its success in practice, suggest that we miss out when we don’t apply it to other kinds of technical writing, such as API documentation.
