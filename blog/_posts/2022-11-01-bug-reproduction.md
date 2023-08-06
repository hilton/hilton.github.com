---
title: List reproduction steps in bug reports
description: How to make bugs reproducible so they get fixed
layout: hh
tags: product maintenance
image: bug-green-caterpillar.jpg
---

![](bug-green-caterpillar.jpg)

[Bankim Desai](https://unsplash.com/photos/FEnD-sxHcWk){:.photocredit}

{:.series}
1. [Observed behaviour](bug-observed)
2. [Expected behaviour](bug-expected)
3. Reproduction steps ←
4. [Context & environment](bug-environment)
5. [Workaround](bug-workaround)

This article explains what you have to do to make a bug you report _reproducible_.
If you can’t reproduce a bug, you leave it to the support team to do so.
If they don’t reproduce the bug, because they can’t figure out how, or don’t have time to do so, the bug won’t get fixed.
When you submit a bug report, doing it properly increases your chances of getting it fixed.

## Confirmation

Support teams don’t usually call a bug report’s initial status _hearsay_, in their bug tracking systems, but they might as well.
Before anyone starts work on fixing a bug, it has to have its first confirmation, which means getting dressed up in instructions for reproducing the buggy behaviour.

Reproduction steps, provided they work, speed up the support team’s confirmation.
But they represent more than just a ceremony.
Reproduction steps claim that anyone can reproduce the bug.
And their content may include other clues - a suggestion that the bug appears in particular web browser, perhaps.

## User-interface instructions

Bad reproduction steps only work when you have to perform additional steps that the instructions don’t mention, or when you need special knowledge to know how to perform those steps _properly_.
However much a support team knows how to use a product, they can’t always guess what a bug submitter actually did.

Good reproduction steps _work_.
Usable reproduction steps have clear instructions that anyone can follow, and make them explicit enough to reliably lead to the same result each time.
This means describing every keypress and mouse click, and literally quoting all user-interface text and user input.

This example describes the intention, but without describing how or including data:

> 😢 Change the title

This improvement makes the text explicit (in case the bug affects long titles), as well as the mouse click (in case the bug only affects the _Save_ button):

> 😀 Click the title, enter _List reproduction steps in bug reports_, and click _Save_.

Until you know what causes the bug, you don’t know whether _where_ you type  matters more _what_ you type.
A final improvement improves usability by adding explicit navigation, and putting it at the start of the instruction to make it easier to follow:

> 😁 On the Article details dialogue box, click the title, enter _List reproduction steps in bug reports_, and click _Save_.

When each numbered step uses this style, it takes longer to write, but becomes far more effective.

## Minimal instructions

Reproduction step details can mislead, by including redundant steps and irrelevant data.
Perhaps none of the following steps affect whether the bug manifests, after all:

> 1. Add 100 pages of text to the document
> 2. Change the text colour to shocking pink
> 3. Hold your breath for 30 seconds
> 4. Step away from the computer and do a little dance

Good reproduction steps help, and having fewer steps further speeds up investigation.
When you create a bug report, fewer steps mean less to write.

In practice, you might not find the minimal reproduction steps unless you can guess what causes the bug.
But the closer you get, the more bonus points you win, and the faster the product team will fix the bug.
