---
title: The cookbook variant problem
description: why recipe forks and remixes don’t satisfy
layout: hh
tags: documentation cooking
---


{:.series}
1. [Failure & recovery](document-failure)
2. [Specific techniques](document-techniques)
3. [Substitutions](document-substitutions)
4. [Roles](document-roles)
5. [Small tasks](document-small-tasks)
6. [Quantities](document-quantities)
7. Variants ←

I’ve heard it said that [pesto](https://en.wikipedia.org/wiki/Pesto) has as many variations as there are families in Genoa. 
Cookbooks typically describe one specific version of each dish,
without [documenting acceptable substitutions](document-substitutions),
such as replacing the pesto’s basil with parsley, or other variations.

The **cookbook variant problem** causes cookbook proliferation,
because their authors can only publish recipe variations in entirely new cookbooks.
Then they neither provide sources for the recipes they started from, nor summarise their changes.

## Recipe variants

In my 1995 edition of the
[Good Housekeeping Cookbook](https://archive.org/details/goodhousekeeping0000unse_v2u2),
the _oven scones_ recipe comes with _variations_.
Few cookbooks do this.
For example:

> If plain flour and baking powder are used instead of self raising flour,
> allow 15 ml baking powder to 225 g flour and sift them together twice before using.

The _everyday fruit scones_ variation _adds_ ingredients instead of substituting:

> Add 50 g currants, sultanas, seedless raisins or chopped dates
> (or a mixture of fruit) to the dry ingredients in the basic recipe.

In the Standard Cookbook Model, each recipe lists _ingredients_ and preparation steps (the _method_).
In simple cases, such as scones, ingredient variations don’t the method.
But in general, changing ingredients changes the method.

## Cookbook variants

You might think that nobody needs (more) cheeseburger recipes,
but if you want a _Classic Luke’s Diner Cheeseburger_, then you need a copy of
[Gilmore Girls: The Official Cookbook](https://insighteditions.com/products/gilmore-girls-the-official-cookbook).
Publishers use any excuse to publish a new cookbook, even for standard recipes.

Consumers need more cookbooks like they need more television channels.
According to an industry source, people only cook one recipe, on average, from each cookbook they have.
Meanwhile, poor-quality advertising-laden cookbook web sites don’t help.

[BBC Food](https://www.bbc.co.uk/food/) stands out from other recipe web sites,
partly because as well as searching by recipe, you can search by _dish_.
You can browse [scone recipes](https://www.bbc.co.uk/food/search?dishes=scone),
and choose from dozens of variants.
This approach replaces each recipe with a collection of alternatives that can grow over time.

## Fine-grained variants

Suppose you want to add grated cheddar to a basic scone recipe, to make cheese scones;
you need to adjust the amount of sugar and salt.
Similarly, suppose you want to use gluten free flour;
then you need to add xanthan gum or some other binder, to keep the dough together.

Current recipe web sites may provide multiple scone recipes,
but don’t give you a way to publish a variant based on changing one ingredient or method step,
and cascading required changes to the rest of the recipe.
Instead, related recipes have no ingredient-level relations.

## Software documentation variants

Software documentation also has variants, such as platform variants in tutorials.
In the Apple support article
_[Take a screenshot on iPhone](https://support.apple.com/en-gb/guide/iphone/iphc872c0115/ios)_,
you can browse variants for both operating system (iOS) version and hardware configurations
(Touch ID vs Face ID, or iPhone model).

Instead of browsing parallel pages, HTTP API reference documentation often _embeds_ HTTP client variants.
For example, the [Tally API documentation](https://developers.tally.so/api-reference/endpoint/forms/list)
includes a sample HTTP request sidebar on each HTTP resource page:

![An API sample request, with an HTTP client selector](tally/docs-api-request-example.webp)

You can use a selector to switch between HTTP clients – cURL, Python, JavaScript, etc.
Imagine a similar interaction with a recipe’s ingredients list!

Cookbooks, software documentation, and other technical writing, all support variants poorly.
Solving the cookbook variant problem could elevate them all.
