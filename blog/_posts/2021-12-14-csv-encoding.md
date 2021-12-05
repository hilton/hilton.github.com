---
title: CSV character encoding
description: Comma-separated values (CSV) with the wrong characters
layout: hh
tags: data
image: metal-concert.jpg
---

![Heavy metal concert](metal-concert.jpg)

[Filip Andrejevic](https://unsplash.com/photos/QmX5lw8StoQ){:.photocredit}

As well as [confusing delimiters](csv-delimiters),
CSV files have other problems that make them a pain to work with.
They keep using the wrong [character encoding](https://en.wikipedia.org/wiki/Character_encoding), for one.

## Accidental metal to nerd conversion

CSV can cause problems when you use it to share data that includes, say,
[metal umlauts](https://en.wikipedia.org/wiki/Metal_umlaut):

| Name | Type | Diacritic score |
| --- | --- | --- |
| Blue Öyster Cult | rock band | 1 |
| Queensrÿche | heavy metal band | 1 |
| Motörhead | rock band | 1 |
| The Accüsed | thrash band | 1 |
| Mötley Crüe | heavy metal band | 2 |
| This Is Spın̈al Tap | film | 1 |
| Möngöl Hörde | hardcore punk band | 3 |
| G̈r̈oẗus̈ | industrial rock band | 4 |
| Brütal Legend | video game | 1 |
| Häagen-Dazs | dessert | 1 |

You save this as CSV, send it to someone else, and they get garbled names:

| Name | Type | Diacritic score |
| --- | --- | --- |
| Blue √ñyster Cult | rock band | 1 |
| Queensr√øche | heavy metal band | 1 |
| Mot√∂rhead | rock band | 1 |
| The Acc√ºsed | thrash band | 1 |
| M√∂tley Cr√ºe | heavy metal band | 2 |
| This Is Spƒ±nÃàal Tap | film | 1 |
| M√∂ng√∂l H√∂rde | hardcore punk band | 3 |
| GÃàrÃào·∫óusÃà | industrial rock band | 4 |
| Br√ºtal Legend | video game | 1 |
| H√§agen-Dazs | dessert | 1 |

The square root signs look more _maths nerd_ than _metal_, so you have a problem.
Specifically, you probably have Microsoft Excel, because opening the same CSV in Apple Numbers or Google Sheets _just works_.

## Wrong default encoding

The example above results from saving the first table as CSV with 
[Unicode UTF-8](https://en.wikipedia.org/wiki/UTF-8) encoding,
and then assuming [Macintosh](https://en.wikipedia.org/wiki/Mac_OS_Roman) 
encoding when loading it.
On Windows, `Motörhead` might become `MotÃ¶rhead` instead.

Using the wrong default encoding causes these encoding issues, which appear in software that uses default encodings from the last century for historical reasons.
In theory, [Unicode](https://en.wikipedia.org/wiki/Unicode) 
solves this problem by removing the need for different character encodings for different languages, so everyone can always use the same encoding.
But the twenty years since Unicode’s introduction don’t appear to have given us enough time to switch to only saving CSV files with Unicode (UTF-8) encoding, and interpreting text files as UTF-8 by default.

## No explicit encoding

CSV encoding issues illustrate a specific example of a broader problem, explained by Dyan Beattie in his conference presentation,
[There’s no such thing as plain text](https://dylanbeattie.net/speaking/#no-such-thing-as-plain-text)
([slides](https://www.slideshare.net/fwdays/theres-no-such-thing-as-plain-text-dylan-beattie),
[video](https://www.youtube.com/watch?v=oYd2KkuZLbE)).
The notion of a _plain text file_ relies on assumptions about people’s locations, languages, and cultures.

Instead of making assumptions, we might prefer to make our choices _explicit_.
But in the same way that CSV doesn’t make its [delimiter dialect](csv-delimiters)
explicit, a CSV file cannot declare its character encoding either.

Software developers have technical solutions to these problems, of course, but encoding problems persist in practice.
Meanwhile, you can deal with broken CSV encoding by asking the person who sent you a broken file to save it as UTF-8 and try loading it again.
