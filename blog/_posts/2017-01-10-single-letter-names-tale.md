---
title: Single-letter names - a cautionary tale
description: Phillip Relf’s story of two lazy array index names
layout: hh
tags: naming programming
---

While reviewing [Achieving Software Quality through Source Code Readability](relf-2004-source-code-readability), I corresponded with [Phillip Relf](https://au.linkedin.com/in/phillip-relf), the paper’s author.
This article discusses single-letter identifier names and introduces his story about the colleague who got stuck with the classics `i` and `j`.

<blockquote class="big" style="max-width:35em">
<p>‘it takes a professional software engineer a good decade to realise that good identifier naming is important’</p>
<p>- Phillip Relf</p>
</blockquote>

## Short Identifier Name - a dangerous guideline

In an email, I asked him about one of the naming guidelines that he evaluated in his paper. the _Short Identifier Name_ one.
This guideline suggests avoiding:

> an identifier name shorter than eight characters,  
> excluding: `i`, `j`, `k`. `l`, `m`, `n`, `t`, `x`, `y` or `z`

I wrote that I was somewhat shocked by the idea of allowing `i`, `j`, `k`. `l`, `m`, `n`, `t`, `x`, `y` or `z`.
In practice, I personally find it completely reasonable (in Java and Scala) to reject all single-letter names, with no exceptions.

In a recent [Scala conference presentation](https://skillsmatter.com/skillscasts/9104-how-to-write-maintainable-scala-code#video)’s section on naming (14:30 - 21:30), I recommended that you ‘don’t use for loops with an index called `i` - it’s Scala, not C; you don’t need loop indices \[to iterate over collections\]’ (16:44).
After all, in Java and Scala (at least) these days, using any of those traditional single-letter names is sufficiently odd that it’s worth writing out ‘index’, say, in full and adding a second word to properly identify it.

When it comes to naming guidelines, I’d prefer to separate the guidelines for single letters and abbreviations from those about length.
These guidelines, in particular, are likely to vary between programming languages.
The [official Go documentation](https://golang.org/doc/effective_go.html#names), for example, explicitly promotes short names and abbreviations.

## Problems with single-letter names

I understand the idea that identifiers like `x`, `y`, `dx` and `dy` are reasonable, since that is how mathematics is written, for example.
The idea is that these abbreviations are well-defined or well-known within a particular context.
However, in practice (i.e. when maintaining a code base for 5-10 years) there is often no obvious way to delineate that context (the ‘[bounded context](https://martinfowler.com/bliki/BoundedContext.html)’ in Domain-Driven Design) or to define those abbreviations in order to make them well-known or well-defined.

In written mathematics, identifiers are typically only used after earlier introduction, either in prose or via symbolic definitions.
I don’t generally see this in source code.
It would certainly be overly optimistic to expect professional programmers to use comments for this.

## A cautionary tale about single-letter names

Phillip Relf responded to my mail, to clarify his view on single-letter names.
His anecdote

> I’m not sure if I made it clear in the 2004 paper that the 21 identifier naming heuristics were extracted from various papers that purported to claim that this practice will improve readability.
> The subject of some of my experiments with the university students and ‘experts’ were to test these assertions with a questionnaire but more importantly to test the assertions in both maintenance and development exercises.
>
> As a professional software engineer, let me state clearly that I do not accept the use of single letter identifier names (with the possible exception of `x`, `y` & `z` when used to represent three-space and single letter identifier names when used to code mathematical algorithms but only when the symbol’s meaning cannot be readily communicated in a few words).
>
> I had one graduate software engineer who wrote some code of the form: `Array_Name[ i, j ]` – they did use some other name for the array but the important part was the array indexing.
> They had a bug in the code, which they said they could not find over the last two days (they were doing other stuff too).
> I looked at the code and noticed immediately what the issue was.
> I then instructed them to use meaningful identifier name and this would allow them to see the issue.
> They complained (which I suppose supports your comment about ‘renaming is hard’).
>
> A week had expired and they still had not found their bug.
> At this time, I was getting a bit peeved and told them that I would stand behind them until they replaced the identifier names.
> Eventually I got them to tell me what each identifier was doing and I helped them come up with a more meaningful name.
> But again, they complained that there was no need to rename the identifiers.
>
> I explained, yet again, that they apparently could not see the bug without renaming as it was obvious to me, just looking at the code.
> With much annoyance, I finally got them to agree and I got them to change the code identifier names individually, explaining what the code was doing on each change.
>
> Eventually they came to the `Array_Name[ i, j ]` reference and it was obvious to them that they should have written `Array_Name[ j, i ]`.
>
> I was fascinated that a graduate software engineer could not see the bug and disappointed that they had no interest to use meaningful identifier names.
> In our current education system, it takes a professional software engineer a good decade to realise that good identifier naming is important to code readability.

He’s right. It takes ten years.
