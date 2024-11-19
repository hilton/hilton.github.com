---
title: Use correct Unicode characters
description: avoiding ASCII art in modern text
layout: hh
tags: typography
image: letters.jpg
---

![](letters.jpg)

[Towfiqu barbhuiya](https://unsplash.com/photos/5u6bz2tYhX8){:.photocredit}

In the English-speaking world, the ASCII era lives on,
and we still use computers as if they still had typewriters’ limited character sets.
As a result, we use modern technology to commit crimes against typography,
and use a kind of accidental 
[ASCII art](https://en.wikipedia.org/wiki/ASCII_art) in our daily writing.

[Unicode](https://en.wikipedia.org/wiki/Unicode) solved this problem over twenty years ago.
Use the following examples to start adding twentieth-century sophistication to what you write.

## Punctuation

The correct punctuation has more elegant typography, and adds a touch of class.
Not using it makes ugly in the same way as typewriter-style fixed-width typefaces.

Use [U+2018 LEFT SINGLE QUOTATION MARK](https://unicode-explorer.com/c/2018) and
[U+2019 RIGHT SINGLE QUOTATION MARK](https://unicode-explorer.com/c/2019)
instead of straight quotation marks, e.g. **that so-called ‘blog’**.

Use [U+201C LEFT DOUBLE QUOTATION MARK](https://unicode-explorer.com/c/201C) and
[U+201D RIGHT DOUBLE QUOTATION MARK](https://unicode-explorer.com/c/201D)
instead of straight quotation marks, e.g. **“I told you so”**.

Use [U+2019 RIGHT SINGLE QUOTATION MARK](https://unicode-explorer.com/c/2019)
as an apostrophe, instead of a straight quotation mark, e.g. **Peter’s blog**.

Use [U+2026 HORIZONTAL ELLIPSIS](https://unicode-explorer.com/c/2026)
instead of three full stop characters, to get the correct horizontal spacing,
e.g. **And then the murders began…**

## Spaces

Special-purpose space characters help improve legibility by keeping characters together,
on the same line of text, and separate from other words.

Use [U+00A0 NO-BREAK SPACE](https://unicode-explorer.com/c/00A0)
in expressions that include a space, such as arithmetic, e.g. **2 + 3 = 5**,
so the expression doesn’t split over a line break.

Use [U+202F NARROW NO-BREAK SPACE](https://unicode-explorer.com/c/202F)
between a number and its unit, e.g. **100 m**
([Wikipedia](https://en.wikipedia.org/wiki/Non-breaking_space#Width_variation)).

Also use [U+202F NARROW NO-BREAK SPACE](https://unicode-explorer.com/c/202F)
to group thousands, as an alternative to using a comma, or no grouping, e.g. **1 000 000**.

## Arithmetic

Most mathematical symbols rarely escape textbooks and other kinds of specialist technical writing.
However, the basic arithmetic symbols appear more often.

Use [U+00D7 MULTIPLICATION SIGN](https://unicode-explorer.com/c/00D7)
instead of a lower-case ‘x’, e.g. **2 × 3**.

Use [U+00F7 DIVISION SIGN](https://unicode-explorer.com/c/00F7)
instead of a forward slash, e.g. **6 ÷ 2**.

Use [U+2212 MINUS SIGN](https://unicode-explorer.com/c/2212)
to align arithmetic vertically, e.g.

> 1 + 2  
> **1 − 2** (minus sign)  
> 1 - 2 (hyphen)

Use [U+2260 NOT EQUAL TO](https://unicode-explorer.com/c/2260)
instead of the ugly `!=` used by programming languages, e.g. **2 ≠ 3**.

## Mac text input

On macOS, enable _Smart Quotes_ (via Edit / Substitutions), so you don’t have to manually type the correct quotation marks.
Use the _Option_ modifier key to type several more, which you can reveal using the
[keyboard viewer](https://support.apple.com/en-gb/guide/mac-help/mchlp1015/mac).

| Name | Character | Shortcut |
| ---- | --------- | -------- | 
| LEFT SINGLE QUOTATION MARK | ‘ | Option-] |
| RIGHT SINGLE QUOTATION MARK | ’ | Shift-Option-] |
| NO-BREAK SPACE |   | Option-Space |
| HORIZONTAL ELLIPSIS | … | Option-; |
| DIVISION SIGN | ÷ | Option-/ |
| NOT EQUAL TO | ≠ | Option-= |

For the rest, either use
[emoji and symbols](https://support.apple.com/en-gb/guide/mac-help/mchlp1560/mac) 
pop-up to search for them, or set up text replacements so you can type them:

| Replace | With |
| ------- | ---- |
| ** | × |
| -- | − |

On Windows and Linux, you can simply memorise the Unicode code point hexadecimal values, e.g. `U+2212` for the minus sign, and type a multi-step keyboard shortcut that includes it.

## Allowed characters (technical note)

Too many people who build software unnecessarily cripple it by not accepting all (or enough) Unicode characters.
Software text input should accept nearly everything, with few exceptions.

Support all [Unicode scalar values](https://unicode.org/glossary/#unicode_scalar_value), except 
[C0 and C1 control codes](https://en.wikipedia.org/wiki/C0_and_C1_control_codes)
in category **Cc**.
Depending on your use case, you may want to exclude
[additional categories](https://x.com/FakeUnicode/status/1323901764857286657), such as
[Co (private use)](https://x.com/cigix22/status/1323918410888155137).
