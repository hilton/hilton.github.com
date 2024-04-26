---
title: Don’t conflate difficulty with effort
description: How to have better conversations with developers
layout: hh
tags: product management
image: harvesters.jpg
---

![](harvesters.jpg)

[James Baltz](https://unsplash.com/photos/_pBBkarmFTs){:.photocredit}

Developers easily succumb to [nerd-sniping](https://xkcd.com/356/),
just as much as physicists and mathematicians do.
For example, some manager might ask,
‘how hard would it be to make our app work in Japanese?’
A developer then thinks through the possible _technical_ issues,
not find any, and rate the difficulty as _easy_.
They regret this later.

## The nerd snipe

Previously-unsolved problems entrap developer brains, which derive satisfaction from finding and implementing solutions.
Difficult problems feature some combination of:

* a hard-to-understand problem
* an unknown hard-to-find solution
* a hard-to-understand solution.

Developers enjoy resolving these issues,
either by reducing the problem to a previously-solved problem, or finding a new solution.
This usually means figuring out how to make something work for the first time, 
plus figuring out how to make it work _well_ (satisfying 
[non-functional requirements](http://en.wikipedia.org/wiki/Non-functional_requirement).
Discovering a _known solution_ turns a difficult problem into an easy one.

When someone asks ‘how hard… ?’, the insinuation of difficulty manipulates the developer into responding.
Meanwhile, enough applications have a Japanese localisation for developers to consider it a solved problem,
and to assume they they would find the implementation easy.
Unfortunately, the developer has missed the _actual_ question.

## The substitution

Someone asking a developer about Japanese localisation doesn’t really care _how hard_ developers will find it.
Instead, they want to know how long it will take.
They substitute ’how hard’ for ‘how long’.

It doesn’t really matter whether the manager has made this substitution unconsciously or deliberately.
Either way leads to the same unfortunate consequences.

## The consequences

Substituting difficulty for effort derails the discussion and, worse, 
potentially delays it to the point of unmet expectations,
when it becomes clear that the work will take longer than wishful thinking would suggest.
An easy task can still take a long time to complete.

In practice, even easy tasks include complexity - practical details that all need attention.
Implementing a Japanese localisation requires more than translating text, using Unicode everywhere, and supporting local date, number, name and address formats.

* Japanese yen currency values use whole numbers, so you need to change any code that assumes values have two decimal places.
* Unlike web browsers, your PDF report generator doesn’t do automatic font substitution, so you need a font that includes both Latin and Japanese characters.

These and other issues don’t present any great difficulty,
but do make the work take longer than expected.
People expect easy work to take little time,
while developers take questions literally,
and haven’t all learned to ask their own clarifying questions.

## The response

Developers inevitably get used to these kinds of problems.
When they lack the power to insist on a more reasonable conversation,
they may resort to passive-aggressive responses.
Bear this in mind, the next time a developer responds,
‘Japanese localisation? Not hard at all, but still complex; it will take me a year.’
