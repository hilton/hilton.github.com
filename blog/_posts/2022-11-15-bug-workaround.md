---
title: Identify workarounds in bug reports
description: Bug reports for knowledge-centred over achievers
layout: hh
tags: software
image: bug-bee.jpg
---

![](bug-bee.jpg)

[susannsusann.de](https://unsplash.com/photos/yquLRy9fgP0){:.photocredit}

{:.series}
1. [Observed behaviour](bug-observed)
2. [Expected behaviour](bug-expected)
3. [Reproduction steps](bug-reproduction)
4. [Context & environment](bug-environment)
5. Workaround

A great bug report describes [observed](bug-observed) and [expected](bug-expected)
behaviour, [reproduction](bug-reproduction) steps, and additional [context](bug-environment).
When you go beyond this, and describe workarounds, you start to blur the line between bug reports and
[Knowledge-Centered Service](https://en.wikipedia.org/wiki/Knowledge-centered_support).

A Knowledge-Centered Service customer support practice builds a knowledge base of solutions as part of resolving support requests, so that existing solutions can resolve future support requests.
Ideally, customers would discover and use workarounds for known bugs before even creating support requests.

A workaround description mitigates a bug’s impact, by describing way to avoid the broken functionality.
Meanwhile, this description serves an additional purpose: it spells out what you have to do instead of using the software as designed.

## Mitigate impact

A bug’s workaround has the same format as its reproduction steps - a sequence of steps to perform -
except that it gives you an outcome closer to what you want.
A workaround may even achieve the desired behaviour, as in the following example.

> **Reproduction**:
> 
> 1. In the document body, select a heading’s text.
> 2. On the toolbar, click the Italic text icon.
> 
> **Expected**: the text style (not previously italic) changes to italic.
> 
> **Observed**: all characters in the document change to 🔥 emoji.
> 
> **Workaround**:
> 
> 1. In the document body, select a heading’s text.
> 2. Type Command-I, to italicise the selected text.

This complete mitigation works because the same feature has an alternative user interface.
Some workarounds use more ingenious tactics.

> **Reproduction**:
> 
> 1. In the CV, select the text _FORTRAN_.
> 2. On the context menu, select _Exclude from search results_
> 
> **Expected**: searches for _FORTRAN_ don’t find Peter’s IT consultancy internal CV
> 
> **Observed**: Peter still ended up on a second FORTRAN project (as a junior developer)
> 
> **Workaround**:
> 
> 1. In the CV, insert a space between each letter of the word _FORTRAN_
> 2. Select the letters _F O R T R A N_
> 3. Reduce the character spacing until the text _FORTRAN_ has the same appearance as it did without the spaces between letters.
> 4. Never work on FORTRAN code again.

In reality, Microsoft Word never had an _Exclude from search results_ option.
The rest really happened.

## Make impact explicit

Explicit workaround steps make a bug’s impact more explicit.
The presence of a workaround usually indicates lower impact, because it means that you can still use the software, at least in the case of a complete mitigation.

When a workaround doesn’t completely compensate for a bug, its result describes a higher impact than a bug with a complete mitigation.
The bigger the compromise, the bigger the impact.

The workaround steps also illustrate any additional work needed to get a result.
Sometimes a bug’s impact lies in the inconvenience of the workaround, even if it achieves the desired end result.
And sometimes you end up with a workaround that you didn’t write in good faith.

## Workaround humour

{:.big style="max-width:28em"}
> Save money on doorbell batteries by popping to the door every two minutes to see if anyone is there.

A satirical workaround emphasises a bug’s negative impact by describing a deliberately ridiculous workaround.
The resulting [benign violation](https://humorresearchlab.com/benign-violation-theory/)
may even make the support team laugh, which can’t help but score points.
After all, most bug reports contain hardly any jokes at all.
