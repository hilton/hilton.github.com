---
title: Modelling multitudes
description: Measuring, counting and naming different kinds of quantities
layout: hh
tags: data DDD
image: roller-coaster.jpg
---

![](roller-coaster.jpg)

[Ilnur Kalimullin](https://unsplash.com/photos/BZh-WSt9doE){:.photocredit}

Databases typically only support one kind of number, typically with options for how much data to store.
A more mathematical perspective includes 
[three kinds of number](modelling-numeric-values#kinds):
cardinal, ordinal, and nominal numbers.

This article focuses on
[cardinal numbers](https://en.wikipedia.org/wiki/Cardinal_numeral),
which represent quantities.
More than one kind of quantity, in fact.

## Quantities and precision

Theme park roller coaster rides have a fixed number of seats, which makes it important to count the number of people getting on each ride.
You cannot divide this whole number (integer) quantity, because for the purposes of whether a seat is occupied, you don’t model half a person.
Measuring each person’s height, on the other hand, uses a different kind of number.
When setting a minimum height for a roller coaster, you choose the required measurement precision: to the nearest centimetre, rather than metre or millimetre.

To model a count of people and someone’s height, you use cardinal numbers that represent two kinds of 
[quantities](https://en.wikipedia.org/wiki/Quantity):

1. [multitudes](https://en.wikipedia.org/wiki/Counting) - e.g. _42 children_ - measure discrete quantities
2. [magnitudes](https://en.wikipedia.org/wiki/Magnitude_(mathematics)) - e.g. _at least 1.30 metres tall_ - measure continuous quantities

Multitudes _count_ the number of items in a collection, while magnitudes _measure_ a size.
In modelling, the difference in precision matters.

## Naming multitudes

We tend to take it for granted that we name magnitudes, with terms such as _height_ or _width_, instead of calling them all _metres_.
However, we often get lazy and name magnitudes like _people_, using the plural of _person_, rather than naming the specific group.
Instead, you might name them _riders_, _insufficiently tall children_, and _staff_.

English has a quirky set of 
[collective nouns](https://en.wikipedia.org/wiki/Collective_noun)
for naming multitudes, especially
[animals](https://en.wikipedia.org/wiki/List_of_animal_names#Generic_terms).
Given a collection of _sheep_, instead of getting upset about not calling the collection _sheep_ (plural), you can instead call it a _flock_.
However, while these
[terms of venery](https://en.wikipedia.org/wiki/Collective_noun#Terms_of_venery)
have a long tradition and occasional poetry, they don’t often apply to software domain modelling.

If your domain concept doesn’t have a collective noun, making one up doesn’t make you as clever or funny as you think it does.
(Although a _squabble_ of _children too short to ride the roller coaster_ seems appropriate.)
You might get away with such hubris as a tenured newspaper columnist, but in domain-driven design, you can better discover the collective nouns that people in your domain actually use.

## Domain collective nouns

Animals aside, English does have collective nouns for more categories than you might expect, or commonly use.
For example, the following terms naturally belong to their domain languages.

| Category | Collective noun | Members |
| --- |  --- | --- |
| people | a **cast** of | actors |
| people | a **board** of | directors |
| people | a **choir** of | singers |
| things | an **outfit** of | clothes |
| things | a **bouquet** of | flowers |
| things | a **fleet** of | vehicles |
| activities | a **pipeline** of | sales opportunities |
| activities | a **schedule** of | conference presentations |
| activities | a **festival** of | concerts |
| information | a **calendar** of | appointments |
| information | a **menu** of | dishes |
| information | a **directory** of | addresses |
| products | a **range** of | computers |
| products | a **collection** of | designer clothes |
| goods | an **inventory** of  | warehouse stock items |
| goods | a **basket** of  | purchases |
| transactions | a **ledger** of | payments |

Exposure to databases, data formats and programming languages tends to narrow your approach to modelling numbers and collections.
Your domain models don’t need to share those constraints.
