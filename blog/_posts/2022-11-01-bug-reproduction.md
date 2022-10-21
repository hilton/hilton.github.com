---
title: List reproduction steps in bug reports
description: How to make bugs reproducible so they get fixed
layout: hh
tags: software
image: bug-green-caterpillar.jpg
---

![](bug-green-caterpillar.jpg)

[Bankim Desai](https://unsplash.com/photos/FEnD-sxHcWk){:.photocredit}

This article explains what you have to do to make a bug you report _reproducible_.

## Confirmation

Until a support team can reproduce the bug, a report is just hearsay.
They probably won't _explicitly_ have a _hearsay_ status in their bug tracking system, but they’ll have one implicitly.
Before anyone fixes a bug, it must attain _confirmed_ status.

Reproduction steps, provided they work, speed up the support team’s confirmation.
But they do more than that.
Reproduction steps’ presence claims that anyone can reproduce the bug.
And their content may include other clues - a particular web browser, for example.

## User-interface instructions

Bad reproduction steps only work when you have to perform steps the instructions don't mention, or when you need special knowledge to know how to perform those steps.
However much a support team knows how to use a product, they can't necessarily guess what a bug submitter actually did.

Good reproduction steps _work_.
Usable reproduction steps have clear instructions that anyone can follow, and make them explicit enough to reliably lead to the same result each time.
This means describing every keypress and mouse click, and literally quoting all user-interface text and user input.

This example describes the intention, but without describing how or including data:

> Change the title

This improvement makes the text explicit (in case the bug affects long titles), as well as the mouse click (in case the bug only affects the _Save_ button):

> Click the title, enter _List reproduction steps in bug reports_, and click _Save_.

Until you know what causes the bug, you don't know what matters more - _where_ you type vs _what_ you type, say.
A final improvement improves usability by adding explicit navigation, and putting it at the start of the instruction:

> On the Article details dialogue box, click the title, enter _List reproduction steps in bug reports_, and click _Save_.

When each numbered step uses this style, it takes a little longer to type, but becomes far more effective.

## Minimal instructions

Reproduction step details can mislead, by including redundant steps and irrelevant data.
Perhaps none of the following steps affect whether the bug manifests:

> 1. Add 100 pages of text to the document
> 2. Change the text colour to shocking pink
> 3. Hold your breath for 30 seconds
> 4. Step away from the computer and do a little dance

Good reproduction steps help, and having fewer steps speeds up investigation even more.
When you create a bug report, it also gives you less to type.

In practice, you usually can’t find the minimal reproduction steps unless you can guess exactly what causes the bug.
But the closer you get, the more bonus points you win, and the faster the product team will fix the bug.
