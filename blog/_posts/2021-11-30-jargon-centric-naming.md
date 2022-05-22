---
title: Jargon-centric naming 
description: Restricting names to controlled vocabularies
layout: hh
tags: naming DDD
image: flags.jpg
---

![](flags.jpg)

[freestocks](https://unsplash.com/photos/jUSu0686zDM){:.photocredit}

[Naming’s famous difficulty](why-naming-things-is-hard) got me thinking about the vocabulary we use when we name things in software.
I’ve previously argued that you can [get better at naming things](how-to-get-better-at-naming)
by increasing your English vocabulary, so you can choose names with richer and more precise meanings.
However, maximising the English vocabulary you use favours native speakers who read books, who already have a larger vocabulary, and using a larger vocabulary costs non-native speakers more effort.
Vocabulary you don’t normally use looks like any other jargon you haven’t learned yet.

Most kinds of names should 
[use two to four words](/presentations/naming-guidelines#limit-name-word-count),
rather than trying to find the perfect naming using a single word.
Perhaps the number of combinations of three or four words means that you don’t actually need to start with a large vocabulary for naming.

## Domain vocabularies

If you build accounting software, for example, perhaps the size of your accounting glossary matters more than your English thesaurus.
An alternative approach to naming things might focus on a controlled vocabulary of domain language, rather than the size of the general English vocabulary.
After all, each subject matter domains brings its own list of jargon: domain-driven design’s
[ubiquitous language](https://martinfowler.com/bliki/UbiquitousLanguage.html).

Using domain jargon only helps if everyone knows what it means, which is why a
[living glossary](living-glossary) helps people without subject matter expertise, such as software developers.
Ideally, someone else writes your glossary for you, 
which is what happens when you limit jargon to things that have Wikipedia pages.
You have to document the rest.

## Controlled languages

[Basic English](https://en.wikipedia.org/wiki/Basic_English), restricts the English language to 850 core words, plus derived words formed from a small list of rules, such as for adjectives, adverbs, and compound nouns.
[Controlled languages](https://en.wikipedia.org/wiki/Controlled_natural_language)
like Basic English simplify the language with restricted grammar and vocabulary.

The restricted word list would make it impossible to accurately write about a particular subject domain.
Wikipedia explains the response from Charles Kay Ogden, creator of Basic English:

> Ogden prescribed that any student should learn an additional 150-word list for everyday work in some particular field,
> by adding a list of 100 words particularly useful in a general field (e.g., science, verse, business, etc.),
> along with a 50-word list from a more specialised subset of that general field

The result would combine Basic English with a controlled domain vocabulary, per bounded context.
Unfortunately, I can’t predict how well this will work out for naming things.

## Limited verbs

[Basic English’s restricted verb list](http://ogden.basic-english.org/verbs.html)
probably makes it unsuitable for naming things, in practice.
Basic English includes the following words, plus their conjugations:

{:.big style="max-width:38em" title="Basic English verb list"}
> come, get, give, go, keep, let, make, put, seem, take; be, do, have; say, see, send; may, will

After all, this list reminds me of conventional bad naming, which appears to use _get_ and _Manager_ for as many verbs and nouns, respectively, as possible.
