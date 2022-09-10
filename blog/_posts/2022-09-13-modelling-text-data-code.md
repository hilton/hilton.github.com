---
title: Modelling text as data and code
description: Getting your formats mixed up
layout: hh
tags: data design DDD
image: infographics.jpg
---

![](infographics.jpg)

[UX Indonesia](https://unsplash.com/photos/8mikJ83LmSQ){:.photocredit}

{:.series}
1. [Modelling text as writing](modelling-text-writing)
2. [Modelling text as symbols](modelling-text-symbols)
3. Modelling text as data and code
4. Mixing kinds of text

Recently on Twitter, Hillel Wayne 
[complained about mixing up four kinds of text](https://twitter.com/hillelogram/status/1515772367213150209):
writing, symbols, data, and code.
Software developers typically model all of these things as _text_,
but also have different ways of identifying them, and mix them together in different ways.

This article follows continues on from
[writing](modelling-text-writing) and [symbols](modelling-text-symbols),
and explores what goes wrong with data and code.

## Data

In this context, _data_ refers to structured computer-readable formats, such as spreadsheets, binary rich text files, or text-based data formats like CSV and JSON.
Data’s structure makes it computer readable, by software that knows what to expect.

But sometimes data doesn’t _load_.
This happens when a missing or imprecise specification results in incompatible variations between what some software produces, and what other software understands.
We mitigate these problems by standardising the data formats.

Sometimes people design data formats in advance, without knowing whether software will use them successfully, as with [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics),
until [Adobe SVG Viewer](https://adobe.fandom.com/wiki/Adobe_SVG_Viewer) took up the challenge.
More often, a standard only appears after years or decades of incompatibility, as with 
[RFC 4180-compliant CSV](csv-rfc-4180).

In practice, some standards remain imperfect, if not actually missing, so software also applies a second mitigation - 
[Postel’s law](https://en.wikipedia.org/wiki/Robustness_principle),
from RFC 761 _Transmission Control Protocol_ (TCP), section 
[2.10. Robustness Principle](https://datatracker.ietf.org/doc/html/rfc761#section-2.10):

> TCP implementations should follow a general principle of robustness:
> be conservative in what you do, be liberal in what you accept from others.

Meanwhile, we usually handle code differently.

## Code

Text as code, which Wayne calls _languages_, also a models a kind of structured data according to a specification, with the critical difference that it _does something_.
Computers _execute_ code.
In practice, we don’t think about modelling text as code much, because we usually store code in files, or at least pretend that we do.

In practice, if you do store code in a database, don’t forget to also make its language explicit.
In general, when you store or transmit both data and code, use a standard type identifier.

Like natural language codes that identify [writing language](modelling-text-writing#language), you can use standard codes to identify data formats and code languages.
On the Internet, you use a [MIME type](https://en.wikipedia.org/wiki/MIME)
to identify examples like `application/json` (data), `text/javascript` (code), and `text/html` (markup).
This also make better type identifiers in databases than invented codes or flags that indicate whether text values contain HTML, say. 


## Mixing data and code

We usually keep data and code separate.
The [Lisp programming language](https://en.wikipedia.org/wiki/Lisp_(programming_language)#Self-evaluating_forms_and_quoting)
provides a notable exception:
Lisp programs can treat Lisp code as data, rather than text that it would have to parse.
This hasn’t caught on in more modern languages.

At the other end of the popularity scale, we find HTML, the most popular markup language.
[Markup languages](https://en.wikipedia.org/wiki/Markup_language) live on the boundary between kinds of text.
Depending on how you look at it, markup either embeds data in prose, or embeds prose in code.

In general, in software development, you should avoid mixing the four different kinds of text together by embedding one in another.
Embedding writing or symbols in data and code works, but only up to a point, leading to content management systems to keep them separate.
Meanwhile, embedding one kind of data or code in other kind of data or code may have seemed like a good idea at the time, but ends badly.
