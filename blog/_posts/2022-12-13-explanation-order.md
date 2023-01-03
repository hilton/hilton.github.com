---
title: Correct technical explanation order
description: Why most writing explains things in the wrong order
layout: hh
tags: writing
image: books-non-fiction.jpg
---

![](books-non-fiction.jpg)

[Karim Ghantous](https://unsplash.com/photos/JHTlgIpNyQA){:.photocredit}

{:.series}
1. Explanation order ←
2. [Backwards API docs](api-docs-backwards)
3. [Annotation styles](annotations)
4. [API docs annotations](api-docs-annotations)
5. Annotations in HTML

Technical writing, like other specialist skills, uses some straightforward and learnable techniques that only become obvious after you’ve heard (or read) about them.
This article explains one such technique, that you can use in writing as well as other forms of explanation, such as giving presentations.

Once you know how to do this right, you will see it done wrong all the time.
_Sorry Not Sorry._

## Concrete problem

Imagine you’ve decided to write a blog post to explain yet another prioritisation framework to product managers (or yet another JavaScript framework to developers).
Bad habits will tempt you to start by defining the jargon you’ll use, and explain a fundamental concept or two.
Before you even finish this part, the reader has either clicked _Back_ or fallen asleep, because they didn't relate this material to anything they care about.

If you really hate your readers, you’ll have started with a history of product management.
Conference presentations suffer from the Historical Context Trap even more than writing, where it has a worse impact, because the audience can’t click a button to escape.
They might have comfortable seats to sleep in, though.

## Specific solution

When you start with an abstract story about product management prioritisation that sounds like all of the others, you fail to answer the reader’s first question: _so what, and why do I care?_
You can solve this by pinpointing the reader’s problem with their current prioritisation approach, and why they need the new framework your explanation will introduce.

Once you have established that the product person reading your article will benefit from learning about yet another prioritisation framework, you can give them an example of it in action that will make them want to learn more.
Then, can you teach them to understand and use it.

## General solution

In general, start by identifying with the reader’s problem so you can use that shared context to teach them something new.
Use the following order for your explanation.

1. **Concrete problem** - start with a problem the reader will recognise.
2. **Specific solution** - solve a concrete problem the reader cares about
3. **General solution** - build on the reader’s new understanding
4. **Concepts** - explain the general solution, so the reader can apply it to concrete problems

This sometimes means exactly reversing the existing paragraph order.

## Concepts and why it works

I blame school education and academic style for the wrong-ordering problem.
School curricula train us not to question or justify the relevance of the problems they set, perhaps due to their original purpose as busywork to train a new generation of industrial revolution factory workers in punctuality and obedience.
Academia's excuse, meanwhile, remains a mystery.

Most content in technical documentation appears backwards: definitions and high-level concepts first, and concrete examples last.
Readers learn concepts more easily from examples, so they should appear first.

[Writing docs like writing code](developers-bad-documentation#writing-docs-like-writing-code) explains that good technical writing minimises forward references, explaining concepts as they arise.
Programmers in particular get this wrong, perhaps because of programming languages that force definitions-first ordering.

And if you must, discuss any historical context at the end.
For better or for worse, no-one cares.
