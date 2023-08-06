---
title: Use a money data type
description: Why your software should handle money amounts separately from other numbers
layout: hh
tags: data DDD
image: currency.jpg
---

![](currency.jpg)

[Jason Leung](https://unsplash.com/photos/SAYzxuS1O3M){:.photocredit}

Businesses use a variety of technologies to build automation solutions: programming languages, databases, spreadsheets, and automation platforms.
Most of these technologies allow builders to specify _data types_ for data they process, at least to separate numbers from text.
Some handle dates separately as well.
However, these technologies rarely have built-in separation for money amounts, leaving builders to make do with basic numeric types.

## Currencies

If your software represents a money amount using a number, and nothing else, the amount has in implicit currency.
I call this approach _asking for trouble_ because sooner or later someone will neglect to assume the correct currency.
Instead, make the currency explicit.

Money amounts have currencies in the same way that 
[measurements have units](https://en.wikipedia.org/wiki/Unit_of_measurement).
Represent a money amount as a pair of two values: the _amount_ and the _currency_.
For the later, using a standard [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) 
three-letter currency code, such as `EUR` (Euro), prevents ambiguity.

## Fixed-precision

While your exact age varies from second to second, you’d probably state it as a whole number of years.
And [irrational numbers](https://en.wikipedia.org/wiki/Irrational_number),
such as π, require an infinite number of decimal places to express their exact value.
Currency amounts lie between these extremes, and have fixed decimal precision.

Software must use
[fixed-precision numbers](https://en.wikipedia.org/wiki/Fixed-point_arithmetic)
for currency amounts, with some caveats.
First, the number of decimal places depends on the currency:
Euro amounts use two decimal places, Japanese yen do not have a fractional part, and a handful of currencies use three decimal places.
Secondly, some scenarios have a (legal) requirement to use more decimal places for calculations.
For example, currency conversions typically use exchange rates with six decimal places.

## Rounding

When you calculate with fixed-precision amounts, you also need to round the results of calculations, e.g. to the nearest Euro cent.
Unfortunately, you have to choose between
[many possible rounding rules](https://en.wikipedia.org/wiki/Rounding#Rounding_to_integer),
including exotic variants such as _bankers’ rounding_ which
[Wikipedia describes](https://en.wikipedia.org/wiki/Rounding#Round_half_to_even) as:

> A tie-breaking rule without positive/negative bias _and_ without bias toward/away from zero is **round half to even**.
> By this convention, if the fractional part of _x_ is 0.5, then _y_ is the even integer nearest to _x_.
> Thus, for example, +23.5 becomes +24, as does +24.5; however, −23.5 becomes −24, as does −24.5.

Wikipedia also gives the name _Dutch rounding_ for _round half to even_.
Meanwhile, on Dutch tax returns, the Dutch tax office requires that you round all amounts to whole Euro, and allows you to round up or down in your own favour.

## Value-specific formatting

Money amounts also require special formatting in different contexts.
While you may store money amounts with three-letter currency codes, people are more used to currency symbols for many currencies.
So you display _EUR 42_ as _€42_.
Except that in some countries, you’d display _42€_ instead.

As well as regional formats, spreadsheet users may also use some kind of _account format_ that aligns currency symbols vertically, in a column of amounts, or displays negative values in parentheses.

## Money data types

Money amounts have enough of their own complications that software should treat them differently from how it treats other numbers.
Software that processes money amounts should use specific money data types.
