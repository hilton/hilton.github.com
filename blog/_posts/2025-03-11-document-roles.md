---
title: Substitute ingredients by role
description: cookbook disappointment and the recipe RACI matrix
layout: hh
tags: documentation cooking
css: "td {text-align:center} td:first-child {text-align:left}"
image: ingredient-groups.png
---

![](ingredients.webp)

[qi bin](https://unsplash.com/photos/IIzny_Qgw-g){:.photocredit}

{:.series}
1. [Failure & recovery](document-failure)
2. [Specific techniques](document-techniques)
3. [Substitutions](document-substitutions)
4. Roles ←
5. [Small tasks](document-small-tasks)
6. Quantities

Software documentation has too much abstraction.
Cookbooks don’t have enough.
Software developers 
[can’t help adding gratuitous abstraction](https://en.wikipedia.org/wiki/Fundamental_theorem_of_software_engineering),
while cookbook authors systematically avoid explaining their work.

Instead of documenting recipe design, cookbooks only describe the final ingredients and method.
Perhaps they want to make it look easy,
and pretend that the author found each recipe in a flash of inspiration,
while reminiscing about the childhood trip to Tuscany that they wasted a page of recipe space on.

## Ingredient groups

[Egg fried rice ingredient groups](document-substitutions#substitutions)
show which ingredients you can substitute for other ingredients in the same group.
It turns out that each group has a purpose:

1. **flavour** – ginger, garlic, shallot, spring onion (white part), onion
2. **protein** – egg, pork (ham, bacon or roast pork), prawns, chicken
3. **nutrition** – peas, sweetcorn, carrot
4. **flavour** – MSG, salt, soy sauce
5. **flavour** – spring onion (green part), unsweetened chilli sauce, sesame oil, crispy chilli oil
6. **carbohydrates** – rice

Listing ingredients by **flavour**, **protein**, **nutrition** and **carbohydrates**
lacks sophistication, but already adds two insights to cooking the recipe.
First, these groups add structure that gives you a more abstract way to describe the recipe:
rice with mixed protein and vegetables, with layers of flavour.

Second, you can use the groups to judge potential substitutes for standard ingredients you either lack or don’t want.
Only after I realised this could I see courgette as a legitimate stir-fry vegetable,
and think of trying diced courgette in egg fried rice.
(The texture and flavour don’t work as well as peas and carrots, though.)

## Functional overlap

The above groups don’t tell the full story: the meat and vegetables also have **flavour**,
and the vegetables also have **texture**.
Similarly, the vegetables add **sweetness** that a sour chilli sauce balances,
in a way that sweet chilli sauce and sweet crispy chilli oil don’t.

![Egg fried rice ingredients’ functional groups](ingredient-groups.png)

This diagram shows a slightly more sophisticated view at this level of abstraction.
Each ingredient may have a primary _purpose_, but also has multiple _consequences_.

## Roles

An ingredient performs multiple functions in a recipe, as do employees in an organisation.
Like employees, ingredients have multiple _roles_.
A recipe [RACI matrix](https://en.wikipedia.org/wiki/Responsibility_assignment_matrix)
visualises this correctly:

| Ingredients | Protein | Carbohydrates | Nutrition | Flavour | Texture |
| ----------- | ------- | ------------- | --------- | ------- | ------- |
| ginger, garlic, shallot |  |  | C | **R** |  |
| egg, meat, seafood | **R** |  | C | C | C |
| peas, sweetcorn, carrot |  | C | **R** | C | **R** |
| MSG, chilli sauce, sesame oil |  |  |  | C |  |
| spring onion (green part) |  |  | C | C | C |
| rice | C | **R** |  |  | C |

In a recipe RACI matrix, **R** still means _responsible_ (for completing the task).
**C** means _contributes_ (to completing the task), instead of _consulted_.
Every role has one group of responsible ingredients; ingredients contribute to multiple roles.

Cookbooks teach roles badly, rarely explaining an ingredient’s purpose.
If you do substitute with ingredients that can achieve the same unwritten purpose,
it looks more like intuition than applying the RACI matrix.
Substituting by role doesn’t mean improvising.

## Software documentation

Software developers write terrible documentation, if at all.
Understanding how it works doesn’t mean wanting to explain how they understand it, or acknowledge that other people don’t.

Abstractions make complex topics teachable, and learnable.
Experts have internalised the abstractions and can’t team them unless they slow down and make the critical abstractions explicit.
Perhaps recipes make good technical documentation practice after all.
