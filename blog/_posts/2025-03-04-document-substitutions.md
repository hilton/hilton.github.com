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

Annoyingly, cookbooks tend to only include one recipe for each dish, instead of _all of them_.
And unfortunately, despite various attempts to produce the definitive Wikipedia for recipes,
none of them seem to have pulled it off yet.
[wikiHow](https://www.wikihow.com/Make-Egg-Fried-Rice) comes close, though,
and they also seem to have heard of Tim Toady.

## Tim Toady

Years ago, as a junior programmer, I approached new technologies on a quest to find the correct way to use each one.
Each new programming language, in particular, seemed to embrace a certain idiom and style.
Embracing these constraints, whether they arose accidentally, historically or by design, seemed like the right thing to do.

Programming in [Perl](https://en.wikipedia.org/wiki/Perl) 
introduced me to its explicit guideline that _there’s more than one way to do it_.
This community slogan, abbreviated as TMTOWTDI (pronounced _Tim Toady_),
challenged me to accept the kind of variation in code style that I wouldn’t even notice in, say,
cooking.

## Egg fried rice

I often cook egg fried rice for lunch, since I work from home (photos, above).
In ten minutes, I can cook tasty hot (and spicy) food with fresh vegetables.
I also like that it gives me the flexibility to choose specific ingredients, 
and that it works both with and without meat.

Around the time I first encountered Perl, I published
[my first egg fried rice recipe](https://hilton.org.uk/rrrr).
My recipe included prawns, chicken, ham, egg, peas, sweetcorn, spring onion, vegetable oil, and MSG.
In the recipe, which I rarely cooked exactly the same way twice, I quipped that:

> All of the ingredients are optional, except for the rice.

But I didn’t get that quite right.
What you can leave out depends on what you’ve already got.

## Substitutions

When I cook egg fried rice, I aim to have at least one ingredient in each of five groups:

1. **ginger, garlic, shallot**, spring onion (white part), onion
2. **egg, pork (ham, bacon or roast pork)**, prawns, chicken
3. **peas, sweetcorn**, carrot
4. **MSG**, salt, soy sauce
5. **spring onion (green part part), unsweetened chilli sauce**, sesame oil, crispy chilli oil

After the **highlighted** preferred ingredients, I use the others as substitutes,
when I’ve run out of something.
For example, [Uncle Roger](https://www.youtube.com/@mrnigelng) calls shallots _better version of onion_.
Similarly, I prefer the lower-salt taste of MSG
(historically avoided by white people due to decades-old
[racist myths](https://www.inverse.com/science/the-racist-history-of-msg)).

Surprisingly, egg fried rice improves if you use as many of the ingredients from groups 2 and 3 as possible,
unlike the other groups.
Egg fried rice tests the usual rule that adding ingredients makes a recipe less interesting,
like [Long Island Iced Tea](https://en.wikipedia.org/wiki/Long_Island_iced_tea)’s
exception to the rule of thumb not to put more than three or four ingredients in a cocktail (excluding ice).

## Cookbooks

Cookbooks systematically over-specify recipes, by failing to indicate how much freedom you have to change quantities or substitute ingredients.
Perhaps we shouldn’t expect recipes to document more than one specific version of a dish –
a snapshot among variations.

Too many cookbooks place the writer’s personal taste and situation above the reader’s.
Telling me to use [galangal](https://en.wikipedia.org/wiki/Galangal)
instead of fresh ginger doesn’t help me much if I don’t know where to buy it.
Sorry, Uncle Roger.

## Software documentation

Mature software typically has some flexibility about where and how you use it.
With the first version, you have to set it up in a certain way, on a certain platform.
Later versions give customers more choice, so that more customers can choose it.

Technical documentation benefits from the same improvement, over time.
The first version inevitably over-specifies prerequisites, and how to get something done.
But as with the Perl and fried rice,
the option choose between _more than one way_ lets you use the ingredients you have to hand.
And tastes vary.
