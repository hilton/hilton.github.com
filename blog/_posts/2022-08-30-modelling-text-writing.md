---
title: Modelling text as writing
description: Software design problems with the simplest of four kinds of text
layout: hh
tags: data design DDD
image: writing.jpg
css: "body.writing article p.right {width:225px;float:right;margin:0 0 1em 1em}"
---

![](writing.jpg)

[Wulan Sari](https://unsplash.com/photos/mHjvJqvj1XE){:.photocredit}

{:.series}
1. Modelling text as writing
2. [Modelling text as symbols](modelling-text-symbols)
3. [Modelling text as data and code](modelling-text-data-code)
4. Mixing kinds of text

Data modelling unfairly restricts us to modelling some values as text (strings).
[Hillel Wayne explains](https://twitter.com/hillelogram/status/1515772367213150209):

> The problem with strings is they represent too many things. 
> They’re the lingua franca of arbitrary data that all systems can read and write, 
> and that means we use them in many distinct ways that can be confused with each other.

Wayne lists four kinds of text: _writing_, _symbols_, _data_ and _languages_.
Ideally, you wouldn’t have to care about different kinds of text, but each kind turns out to have its own potential for bad software user experience and bugs.

{:#writing}
## Writing

English prose doesn’t have the kind of structure that makes it easy for computers to understand it, so we call anything that can parse this _AI_.
Treating written text as an opaque value reduces it to an unstructured sequence of characters, which software handles relatively easily.
However, text in [natural languages](https://en.wikipedia.org/wiki/Natural_language),
or _actual languages_ if you like to separate them from _programming_ languages, still causes problems.

One problem with writing arises from not knowing its potential length.
While this [blog’s article word limit](article-word-limit) makes lengths predictable, both novels and
[people’s names](respect-personal-names) vary widely in length, over at least a factor of ten.
And while modelling a text value’s length as _unlimited_ doesn’t pose a conceptual problem, it complicates software implementations.

When you fail to model text lengths properly in advance, your software will probably break visibly, and you can fix it.
That assumes, of course, that you _can_ change your data model to remove length limits, and that you actually find out, rather than silently losing customers whose content your software rejects.
In practice, you can mitigate these risks during data modelling, unlike the next problem, which you may try ignore at first.

{:#language}
## Languages

{:.right}
￼![Front page of the 3 February 2009 edition of the Luxemburger Wort newspaper, with articles in both German and French](luxemburger-wort.png)

These days, many software categories require multiple language support.
Software applications therefore need to make a text value’s _language_ explicit, for two reasons.
First, most people don’t understand most languages, which means that multi-lingual software should support language preferences, to identify which text a reader can understand.
Second, even fewer people understand pairs of languages, so software generally avoids mixing content languages on the same page.
Note: Luxembourg newspaper [Luxemburger Wort](https://www.wort.lu/), used to provide an exception, with German and French articles on the front page (right).

Software generally standardises language and region identification by using 
[language tags](https://en.wikipedia.org/wiki/Language_localisation#Language_tags_and_codes),
such as `en-GB` for British English.
These tags use an [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) two-letter language code,
combined with an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
Apparently, the regional language lists in
[ISO 639-2](https://en.wikipedia.org/wiki/ISO_639-2) (487 languages) and
[ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) (8279 languages -
[source](https://iso639-3.sil.org/code_tables/download_tables)) never caught on.

Of course, content localisation only works if you model content languages in advance, and tag all content with its language.
If you don’t, and fail to notice that you now have content in multiple languages, you have a data quality problem:
lots of _unknown language_ text.
At least you can use an ISO 639-2 code for that: `und` (undetermined).

{:#other}
## Other (technical) problems

Text length and language issues already make text hard enough for software to get right.
You had better hope that your software doesn’t also have technical design problems caused by character encoding issues and embedding one kind of text in another.
