---
title: Comments are the introduction
description: three ways to introduce code
tags: programming comments maintenance
layout: hh
image: introduction.jpg
---

![](introduction.jpg)

[earlynovelsdatabase](https://www.flickr.com/photos/97741188@N04/14486379561/){:.photocredit}
[CC BY 2.0](https://creativecommons.org/licenses/by/2.0/){:.license}

I’ve learned something from writing about [good comments](3-kinds-of-good-comments), [bad comments](7-ways-to-write-bad-comments), and [how to write them](how-to-comment-code). Not only are code comments hard to write, so is writing about writing comments. Here’s yet another way about thinking about comments in code.

The most substantial comments in object-oriented application code are the classes’ and methods’ block comments. You can think of these as the introduction to the class and method bodies - the main content of the code.

## Writing an introduction to a document

Fiction is more about the journey than the conclusion, so it doesn’t matter if it takes you half a novel to realise what it’s really about. That’s called ‘suspense’. Non-fiction, on the other hand, is different.

Any piece of non-fiction requires an introduction to set the context, and tell the reader what to expect. This is especially necessary when the document threatens to be too long, complex and technical. Writing a software specification without a good introduction is nothing short of workplace harassment.

A good way to write an introduction, which works for all kinds of documents from specifications to commercial proposals, is to split it into three sections.

1. Purpose
2. Scope
3. Summary

_Purpose_ is a statement of what the document is for. This answers the most basic question about the context: why did the author go to the effort of writing it?

_Scope_ concerns both which topics are covered - how much breadth and detail - and which audiences the document is intended for. This answers the question: who is it for and how much are we telling them?

_Summary_ is the short version of the whole thing: what are we telling them?

As for code comments, a document introduction isn’t a metaphor, it’s the same thing. Code that has anything in common with a long boring document may benefit from an introduction.

## The purpose of code

When you approach code, it is also necessary to understand its purpose, scope and summary. Sometimes the purpose is obvious from the function or class name, but not always. Sometimes you can see what it’s for by how it’s used within the same code base, but not always. Explicitly stating what the code is for is the first candidate for a [good comment](3-kinds-of-good-comments).

## The scope of code

Similarly, questions of scope may justify a code comment. In the context of code, ‘scope’ is about its expected usage: who the code is for and how much you can expect from it. Good comments also include [pre-conditions, restrictions and limitations](https://hilton.org.uk/blog/3-kinds-of-good-comments).

## The summary of code

Perhaps a summary of code is the least popular suggestion for a comment, because of the risk of unnecessary duplication. The idea is that if you think that the code needs an explanation, then you should rewrite the code, rather than add a comment. This isn’t the whole story, though.

If someone hands you a book, you can’t always work out what it’s about from the title, and you’re unlikely to be impressed by some telling you, ‘it’s clearly written so all you have to do is read it to find out what it’s about’. Code can be like that too: however well-written, reading the code is going to take longer than starting with a one-sentence summary, if there is one.

In object-oriented code, classes are especially likely to need an introduction. Imagine the variation between _Customer_ classes in different code bases. Some code needs a summary to capture its essence, to save the reader’s time.

Note that there is a special case for domain model classes that model a real-world concept that already has an external definition. For example, a shipping system’s _Incoterm_ class needs a comment, for new team members who don’t already know what an Incoterm is, but the explanation doesn’t need anything more than a link to Wikipedia:

> An [Incoterm](http://en.wikipedia.org/wiki/Incoterms) for a shipment.

Handily, there are lots of [obscure things with Wikipedia pages](https://hilton.org.uk/blog/today-i-learned).
