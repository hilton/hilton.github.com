---
title: Modelling numeric values
description: More than just size and precision
layout: hh
tags: DDD
image: numbers.jpg
---

![](numbers.jpg)

[Kai Gradert](https://unsplash.com/photos/kspmyZjGwBU){:.photocredit}

As a child, growing up before the web, I loved joke books and telling jokes.
I undoubtedly annoyed family members, with my endless supply of jokes like this:

> Q: What’s brown and sticky?
>
> A: A stick.

As a result, my older sister may well have responded with the following:

{:.big}
> Act your age, not your shoe size!

The admonishment uses the same kind of hook as the children’s joke:
an incongruity, based on the category difference between ages and
[UK shoe sizes](https://en.wikipedia.org/wiki/Shoe_size#United_Kingdom).
However, what makes jokes work tends to break software, where mixing value categories leads to bugs.
When a web shop mixes up product code, price and sales ranking values, things get awkward, fast.

In software design, modelling data can make these categories explicit, which enables the software to prevent mixing them up.
Performing arithmetic with shoe sizes, or comparing them to ages, probably indicates an error that will manifest as bugs.

{:#precision}
## Precision

Computers like to classify numbers by their size and precision, because together they determine the required storage space.
Some programming languages, in turn, also classify numbers by their precision (integer or floating point) or size (number of bytes required to store the largest value).

These implementation details don’t usually help much with domain modelling, beyond the need to choose a data type that supports large enough numbers, or enough decimal places.
From a modelling perspective, you have more interesting classification options.

{:#kinds}
## Kinds of number

{:.big style="max-width:24em"}
> Unfortunately, you have dialled an imaginary number.
> Please rotate your telephone 90 degrees and try again.

If you haven’t studied mathematics, you might not have come across the following three technical terms for straightforward distinctions that we don’t normally think about.

1. [cardinal numbers](https://en.wikipedia.org/wiki/Cardinal_numeral) count things and represent quantities
2. [ordinal numbers](https://en.wikipedia.org/wiki/Ordinal_numeral) identify a position in a sequence - _first, second, third_, etc
3. [nominal numbers](https://en.wikipedia.org/wiki/Nominal_number) uniquely identity items, typically in some collection, e.g. house numbers

Of the three (cardinal) terms in this list, term three (nominal), appears third (ordinal).
Each of these numbers answers _three_ to a different question.

{:#types}
## Separating data types

With a bank account number (nominal), arithmetic doesn’t work:
the difference between two bank account numbers doesn’t mean anything useful.
But with an age (cardinal), you can do arithmetic such as calculating the number of years to retirement (also cardinal).
Ordinal numbers have some arithmetic, but not much: the difference between two rankings makes more sense than the sum of two rankings.

You can use these differences to avoid accidentally mixing data:
categorise a number in a domain model as nominal or cardinal, but not both.
By making this explicit, you could choose which kinds of operations to apply.
Similarly, you can also sub-categorise cardinal numbers by their 
[units of measure](https://en.wikipedia.org/wiki/Units_of_measure),
which helps you avoid comparing ages (years) with shoe sizes (length).

{:#ux}
## User experience

Having read about numeric value categories, you shouldn’t have to actually think about this kind of thing when you use software.
Perhaps modelling numeric values by category represents an opportunity to improve user experience in some software categories, such as a spreadsheet where you can compare numbers or perform arithmetic on them.
Software with numeric functions or formulas shouldn’t encourage you to use all of them on all of the numbers.
