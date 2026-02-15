---
title: Normalise search query characters
description: searching for Türkiye
layout: hh
tags: data DDD
image: istanbul-maidens-tower.jpg
---

![](istanbul-maidens-tower.jpg)

[Meriç Dağlı](https://unsplash.com/photos/Srp8pIro8BA){:.photocredit}

In the age of international shipping, country select lists litter delivery address forms webwide.
Country selection prompts various awkward user-experience design questions,
such as how to sort a list of names alphabetically without getting it wrong,
whether to accept text input or require selecting from a list of 100+ countries,
and [which countries belong in the list anyway?](country-lists).

People get frustrated when they cannot find a country that they know for sure exists,
typically because they live there.
And you can’t expect them to type the exact official name.

## Ignoring diacritics

For example, suppose you have a country list that lets you type to search list items.
If you type `ivory`, you’ll find **Ivory Coast**, provided that the search does case-insensitive comparison.
However, a French speaker using an English keyboard layout might type `cote`,
expecting to find **Côte d’Ivoire**.

Searching a country list for `cote` won’t work if the search compares text exactly, because of the diacritic (accent) on `ô`,
which makes it a different character to `o`.
Therefore, this kind of search must perform diacritic-insensitive comparison,
by translating accented letters in both the search query and country name to letters without accents.

Note that [Unicode normalisation](https://en.wikipedia.org/wiki/Unicode_equivalence#Normalization)
refers to something else, namely resolving different ways to represent the `ô`.
However, if you first normalise text to a decomposed form (NFD or NFKD),
which separates _combining marks_ such as accents into separate code points,
you can then remove the accent characters to leave characters without accents.

## Name changes

Searching for Türkiye has the same problem: if you type `turk` into the search field,
you only find **Türkiye** if the `u` matches the country name’s `ü`.
However, as often happens with real-world names, it gets worse.

In 2022, [the United Nations agreed to the Turkish government’s request to use the country name _Türkiye_ in English](https://www.trtworld.com/article/12788040).
As a result, your English-language country name list should include **Türkiye** instead of **Turkey**.
However, people who didn’t get the memo may still type `turkey` into your search field,
and have what you might call _poor user experience_.

Countries don’t often change their names, or disappear from official lists, but it does happen.
Update your search so that `turkey` matches **Türkiye**,
along with other commonly-used unofficial names, such as _UK_ and _USA_.
When it does, your search functionality requires special cases.
Handle name changes by adding aliases, so that an old name resolves to a new one.

## Search interface complexity

Search interfaces hide a lot of this kind of complexity, which you don’t notice when it works.
Unfortunately, this invisibility makes it hard to recognise the problem when simplistic search doesn’t handle these cases.

Meanwhile, people still want to receive their delivery, and so they give up on the bad search and scroll a long list to find it.
With luck, you at least managed to correctly sort it, alphabetically.
