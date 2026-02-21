---
title: Software quality is a decision
description: casual software and software products worth paying for
layout: hh
tags: product
---

Software, like all creative media, has become easier to produce over the years.
As a result, its consumers experience a broader range of quality that they did in earlier generations,
when the only kind of software you used came shrink-wrapped in a box:
the kind of software built by big teams in big companies.
Instead, today, people who wouldn’t have written software in the past, now write software casually.

## Casual writing

In the book [Because Internet](https://gretchenmcculloch.com/book/),
linguist Gretchen McCulloch explores how the Internet changed the English language.
Languages have always evolved, but the Internet introduced something new: instant messaging.

Instant messaging introduced a kind of casual writing that didn’t previously exist.
It introduced a written form of what people previously only used in informal spoken language,
compared to relatively formal written language.
Crucially for the linguists, chat message archives gave them a way to study this usage.

Instant messaging’s casual language has its place, but you wouldn’t want to read a book written like that.
Especially if you paid for it.
Apart from the difficulty of following a chat’s unstructured stream of consciousness,
casual writing for your friends and family uses all of the idioms and other linguistic shortcuts that you know they understand.
The general public wouldn’t stand a chance.

## Causal software

Programmers _hack together_ (rather than _write_) one-off scripts that do a specific job,
but won’t make sense elsewhere, or later, or to someone else.
The same applies to most spreadsheets, and other disposable programs.
Casual software, like casual writing, works for its small audience, but not for the general public.

We call the alternative to casual software not _formal software_, but _software products_,
which somebody pays for.
For casual software, you don’t necessarily care about how much time and tokens it cost,
let alone [whether you saved more time than you spent](https://xkcd.com/1205/).

Paid software, by contrast, tends to cost enough to require a business case,
which shifts the focus to the value a paying customer gets, compared to the alternative.
This changes the meaning of _software quality_ from _good enough_ to _worth paying for_.

## Low-quality software

Casually-written software remains low-quality for many reasons.
In many cases, software teams choose low quality, deliberately or otherwise, in four ways:

1. **declaring victory early** – declaring features ‘done’ before finding _and fixing_ the inevitable bugs
2. **half-baked solutions** – delivering features that only ‘work’ if you put up with a poor user experience
3. **getting ahead of themselves** – delivering software that hides technical and cognitive debt
4. **solving the wrong problem** – building features that don’t solve actual customer problems.

Each of these problems corresponds to work in a particular software development discipline
that goes beyond merely producing the initial code:

1. **quality assurance** – includes finding, describing and [fixing those bugs](zero-bug-policy)
2. **UX design** – includes improving features until everyone who needs them can use them
3. **software architecture** – includes reducing complexity in the software model
4. **product management** – includes managing demand risk, and building what people need.

Casual software doesn’t need these disciplines’ efforts, but the kind of software that people pay for _does_.
The kind of software product that sustains a business also pays people to do this work,
with the shared goal of not merely producing software products, but producing _good software products_.
