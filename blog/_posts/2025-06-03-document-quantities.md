---
title: Document precise quantities
description: the coleslaw problem – why coleslaw recipes suck
layout: hh
tags: documentation cooking
image: coleslaw.jpg
---

![Coleslaw mixed into a salmon rice bowl with spring onions](coleslaw.jpg)

<span>Peter Hilton</span>{:.photocredit}

{:.series}
1. [Failure & recovery](document-failure)
2. [Specific techniques](document-techniques)
3. [Substitutions](document-substitutions)
4. [Roles](document-roles)
5. [Small tasks](document-small-tasks)
6. Quantities ←
7. [Variants](document-variants)
8. [Trade-offs](document-trade-offs)

[Coleslaw](https://en.wikipedia.org/wiki/Coleslaw) presents an opportunity and a challenge.
You can make it easily at home, using cheap fresh ingredients,
and get a better cheaper result than pre-made coleslaw.
However, even a _small_ cabbage yields more coleslaw than you can eat in a day,
and you deserve freshly-made salad, even if you don’t cook for six people.
To resolve this challenge, first learn to balance the ingredients.

## Balancing ingredients

A [typical British coleslaw recipe](https://www.bbcgoodfood.com/recipes/classic-homemade-coleslaw)
has four ingredients:

1. carrot
2. cabbage
3. onion
4. mayonnaise (or a fancier dressing).

To prepare the coleslaw, you finely chop or grate the ingredients (except for the mayonnaise),
and mix them.
You don’t cook a salad, so this has more in common with mixing a cocktail than most kinds of cooking.
And like a cocktail, you have to get the proportions right, to balance the ingredients’ flavours.

If you already knew this, you only need one thing from a coleslaw recipe:
the proportions.
Coleslaw recipes: you have one job!

## The coleslaw problem

Our [typical British coleslaw recipe](https://www.bbcgoodfood.com/recipes/classic-homemade-coleslaw)
lists the main ingredients (excluding dressing) like this:

> 1 small white cabbage or ½ large  
> 4 carrots  
> 1 large red onion

Unfortunately, the [International System of Units](https://en.wikipedia.org/wiki/International_System_of_Units)
doesn’t include _small cabbage_, _carrot_, or _large onion_.
This matters, because vegetable sizes vary by a factor of two (or more) in practice.
For example, how many small (round) cabbages can I get out of this pointed white cabbage?

![A pointed white cabbage](cabbage.webp)

Which one of these counts as _1 carrot_?

![Five carrots of various sizes](carrot-sizes.webp)

_The coleslaw problem_ therefore boils down to this:

{:.big style="max-width:35em"}
> Coleslaw recipes suck,
> so you end up with too much carrot,
> in too much coleslaw

To solve this, the recipe writer and the recipe consumer (the cook) require additional hardware.

## The coleslaw solution

The obvious solution to the coleslaw problem introduces measurements.
To make **one portion of coleslaw**, mix the following ingredients:

* 30g cabbage, shredded
* 10g carrot, grated
* 5g onion, finely chopped
* 15g mayonnaise

These measurements set baseline proportions, which you can of course change.
A fancier ingredient list would specify acceptable ranges for carrot, onion and dressing quantities,
for 30 grams of cabbage.
They also set a baseline portion size that helps prevent spending a week trying to use up half a kilo of coleslaw.
Conveniently, coleslaw preparation scales down to a single portion, so it works even if you don’t need to feed a family of six.

## Precise documentation

The coleslaw _recipe_ problem illustrates several technical documentation failures,
which take the form of three implicit lies:

1. ‘you’ll find it easy’ (if you already know how to do this)
2. ‘the proportions don’t matter’ (they do matter)
3. ‘I use whatever I have’ (I judge the proportions by eye, having done this before)

Exact quantities may seem overly precise,
but a representative starting point has more value than indicating how much room for flexibility the instructions have.
Exploring that flexibility will happen anyway.

Cookbook recipes generally provide poor examples of technical writing problems,
but in this case coleslaw’s simplicity emphasises the lesson.
Even something this basic requires precision, at least to start with,
to remove guesswork from your first attempt.
