---
title: Modelling text as symbols
description: Obscure problems when displaying symbols
layout: hh
tags: data design DDD
image: letters.jpg
---

![](letters.jpg)

[Towfiqu barbhuiya](https://unsplash.com/photos/5u6bz2tYhX8){:.photocredit}

{:.series}
1. [Modelling text as writing](modelling-text-writing)
2. Modelling text as symbols
3. [Modelling text as data and code](modelling-text-data-code)
4. [Mixing kinds of text](mixing-text)

[Modelling text as writing](modelling-text-writing) explores the modelling one of the
[four kinds of text Hillel Wayne tweeted about](https://twitter.com/hillelogram/status/1515772367213150209):
writing, symbols, data, and code.

This article continues on from [writing](modelling-text-writing) with
[symbols](https://twitter.com/hillelogram/status/1515772368614010881),
such as bank account numbers, post codes and currency codes.
As with modelling writing, modelling symbols offers new opportunities for bad user experience and bugs.

## Data models

Symbols such as bank account numbers, tend to prove straightforward to model,
as long as you model them as [text rather than numbers](non-numeric-numbers).
Ideally, someone else will have specified the model for you.

Some identifiers are named by a public standard, such as
[ISO 639-2](https://en.wikipedia.org/wiki/ISO_639-2) two-letter language codes, like `en` for English.
Others, such as your electricity company’s _customer number_ might have only undocumented software implementations.

## Symbolic bugs

Without standardisation, or at least documentation, you risk new software introducing new symbols that existing implementations won’t accept.
Documentation can particularly help by showing examples that highlight differences, and avoid mix-ups with variations, such as Wikipedia’s list of
[IBAN examples](https://en.wikipedia.org/wiki/International_Bank_Account_Number#Structure),
which illustrates the country codes and country-specific lengths.

However, symbols’ inflexibility can lead to problems when you enter or display their values in a user interface.
Bank account numbers, for example, invite several kinds of user experience bugs.
Note that IBAN adds complexity here by using separate formats for storage/transmission (without spaces) and display (with a space after every four characters).

## Case transformations

Symbols’ case matters.
You can introduce bugs by converting the text to upper case for displaying a heading, for example.
CSS that transforms text to uppercase could cause indirect problems, such as someone transcribing an incorrect value, and trying to use it elsewhere.

The case-insensitive IBAN display format generally uses upper-case letters, e.g. `GB98 MIDL 0700 9312 3456 78`, although software should allow user input in lower case for a better user experience.
In this way, user input also transforms case.


## Line breaks

Software should display most symbols without line breaks, to aid readability and transcription.
While software generally stores and transmits IBANs without spaces, the display format adds spaces, to aid readability.
To prevent line breaks, use [non-breaking spaces](https://en.wikipedia.org/wiki/Non-breaking_space)
in a value like `GB98 MIDL 0700 9312 3456 78`.

💡 _Tip: on macOS, Option-Space types a non-breaking space._

Text display contexts with automatic hyphenation could potentially insert hyphens that look like part of the symbol.
I’ve never seen this in practice, though.

## Fonts

Symbols generally lack writing’s redundancy, making individual characters more significant.
Displaying symbols using certain typefaces may introduce ambiguous characters in symbols that don’t deliberately avoid potentially ambiguous pairs, such as `1` and `l`.

User interface text can use more sophistication than source code, here, and only use monospace fonts when needed.
[Ugly code](ugly-code) resembles typewriter output and uses fixed-width text everywhere, not just for symbols.

## Localisation

Like many symbols, IBANs avoid character set issues by restricting characters to ten digits and 26 letters, A-Z.
In turn, this means that software should not localise the symbol itself, unlike language-specific writing.
In this context, software should treat symbols more like numbers, and other data.

## Addressing display issues

To address symbol display issues, software can follow the IBAN example of separating storage and display formats.
User interfaces might even go further by offering affordances that reduce the need for transcribing values, such as automatically showing a copy-to-clipboard button.
