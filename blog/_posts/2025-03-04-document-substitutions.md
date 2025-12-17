---
title: Document acceptable substitutions
description: cookbook disappointment and alternative ingredients
layout: hh
tags: documentation cooking
image: fried-rice.jpg
---

![](fried-rice.jpg)

<span>Peter Hilton</span>{:.photocredit}

{:.series}
1. [Failure & recovery](document-failure)
2. [Specific techniques](document-techniques)
3. Substitutions ←
4. [Roles](document-roles)
5. [Small tasks](document-small-tasks)
6. [Quantities](document-quantities)
7. [Variants](document-variants)
8. [Trade-offs](document-trade-offs)

Cookbooks annoy me by only including one recipe for each dish, instead of _all of them_.
And despite various attempts at the definitive Wikipedia for recipes, none of them have pulled it off,
although [wikiHow](https://www.wikihow.com/Make-Egg-Fried-Rice) comes close.

{:#tmtowtdi}
## Tim Toady

Years ago, as a junior programmer,
I discovered that programming languages usually embrace a specific idiom and style.
I also learned that embracing these constraints,
whether they arose accidentally, historically or by design, reduces friction.

The [Perl](https://en.wikipedia.org/wiki/Perl) programming language, however, chooses friction.
Its community slogan that _there’s more than one way to do it_,
abbreviated as [TMTOWTDI](https://en.wikipedia.org/wiki/Perl#Philosophy) (pronounced _Tim Toady_),
challenged me to accept the kind of variation in code style that I wouldn’t even notice in, say,
cooking.

{:#rice}
## Egg fried rice

I often cook egg fried rice for lunch, while working from home (photos, above).
In ten minutes, I can cook tasty hot (and spicy) food with a flexible choice of vegetables.
I also like that it works both with and without meat.

Around the time I first encountered Perl, I wrote
[my first egg fried rice recipe](https://hilton.org.uk/rrrr).
It included prawns, chicken, ham, egg, peas, sweetcorn, spring onion, vegetable oil, and MSG.
In the recipe, which I rarely cooked exactly the same way twice, I quipped that:

> All of the ingredients are optional, except for the rice.

But I didn’t get that quite right.
What you can leave out depends on what you’ve already got.

{:#substitutions}
## Substitutions

When I cook egg fried rice, I aim to have at least one ingredient in each of five groups:

1. **ginger, garlic, shallot**, spring onion (white part), onion
2. **egg, pork (ham, bacon or roast pork)**, prawns, chicken
3. **peas, sweetcorn**, carrot
4. **MSG**, salt, soy sauce
5. **spring onion (green part), unsweetened chilli sauce**, sesame oil, crispy chilli oil

I prefer the **highlighted** ingredients, and only use the others as substitutes for whatever I’ve run out of.
For example, [Uncle Roger](https://www.youtube.com/@mrnigelng) calls shallots _better version of onion_.
Similarly, I prefer the lower-salt taste of MSG (historically avoided by white people due to decades-old
[racist myths](https://www.inverse.com/science/the-racist-history-of-msg)).

Egg fried rice improves if you use as much of groups 2 and 3 as possible.
This differs to most dishes, which become less interesting if you add more ingredients,
and [Long Island Iced Tea](https://en.wikipedia.org/wiki/Long_Island_iced_tea)’s
exception to the corresponding rule of thumb of 3–4 cocktail ingredients.

{:#cookbooks}
## Cookbooks

Cookbooks systematically over-specify recipes, by failing to indicate how much freedom you have to change quantities or substitute ingredients.
Perhaps we shouldn’t expect recipes to document more than one specific version of a dish –
a snapshot among variations.

Too many cookbooks place the writer’s personal taste and situation above the reader’s.
Telling me to use [galangal](https://en.wikipedia.org/wiki/Galangal)
instead of fresh ginger doesn’t help me much if I don’t know where to buy it.
Sorry, Uncle Roger.

{:#documentation}
## Software documentation

Mature software typically has some flexibility about where and how you use it.
With the first version, you have to set it up in a certain way, on a certain platform.
Later versions give customers more choice, so that more customers can choose it.

Technical documentation benefits from the same improvement, over time.
The first version inevitably over-specifies, but as with the Perl and fried rice,
the option to choose between _more than one way_ lets you use the ingredients you have to hand.
And tastes vary.
