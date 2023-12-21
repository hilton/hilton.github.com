---
title: Product documentation-capability alignment
description: Fun with product capabilities and Venn diagrams
layout: hh
tags: product
image: blurred-lights.jpg
---

![](blurred-lights.jpg)

[Jason Leung](https://unsplash.com/photos/4yY3Zk-fljs){:.photocredit}

When you think about product documentation as part of the product,
you might suppose that they should have the same scope.
In practice, a product’s capabilities and its documentation typically don’t match neatly.
You can see this by looking at the differences.

## Capabilities-docs alignment

To compare capabilities, consider the features that a product might have.
You can illustrate this with a [Venn diagram](https://en.wikipedia.org/wiki/Venn_diagram)
of the set of possible [features](feature-construct).
This diagram separates two feature subsets: **product capabilities** and **product documentation**.

![Venn diagram of ‘Product capabilities’ and ‘Product documentation’](capabilities-docs.png)

If the product documentation and product capabilities matched,
we would only have **documented features** (the intersection of the two sets).
In practice, we also have to deal with **undocumented features** and **unnecessary documentation**
(the difference of the two sets).

## Undocumented features

Not documenting every feature in a product has pros and cons.
When everyone can successfully use a feature without documentation,
you can reduce documentation effort and documentation complexity by skipping it.
You can also move some aspects of feature documentation into the application’s user interface,
such as how desktop application menu items make features findable.

However, the [curse of knowledge](https://en.wikipedia.org/wiki/Curse_of_knowledge)
makes you wrong about what makes a feature obvious enough to not need documentation.
Furthermore, you can’t easily prove that inherently usable features exist (for _everyone_),
especially since that assumes that everyone can find the feature in the first place.
You should have _some_ undocumented features, but fewer than you think.

## Feature gaps

The subset labelled **unnecessary documentation** contains features the product doesn’t have.
This might result from common support requests that ask about a missing feature,
resolved by documentation that explicitly states that the product doesn’t have the feature,
or to explain why it doesn’t need it.
Some feature gaps require explanation.

Products deliberately omit features, 
either due to the product’s chosen scope or because an alternative feature serves the same purpose.
Some feature gaps represent missing features that the product possibly _should_ have,
but the diagram doesn’t separate these features from what the product doesn’t need.
To see this, we need to expose another important feature subset.

## Customer needs alignment

Product management starts with **customer needs**,
which exist independently of any particular product and its documentation.
We can extend the diagram to identify these features that customers will actually use,
and see that instead of merely **documented features**, we want **_useful_ documented features**.

![Venn diagram of ‘Customer needs’, ‘Product capabilities’ and ‘Product documentation’](capabilities-docs-needs.png)

This extended diagram separates **documented feature gaps** from truly **unnecessary documentation**.
These features, which may belong to competing products’ capabilities, may represent product improvement opportunities.

Improving a product doesn’t necessarily mean adding features, though.
Indeed, adding **customer needs** to the diagram reveals something more subtle.

## Unnecessary features

Products inevitably include **unnecessary product features**, documented or otherwise.
Some features should never have become part of the product,
such as those that never matched a customer need.
Sometimes customer needs change, leaving legacy features behind.

Unnecessary feature documentation only has negative value.
Fortunately, you can remove this documentation more easily than the unnecessary features,
which someone inevitably uses.

## Product alignment

In some ways, all of product management involves _alignment_.
Not because you can fully align everything and everybody, if you try hard enough,
but because the blurred reality doesn’t align so neatly.
The Venn diagrams never collapse into a single circle,
and interesting subtleties lie in the set differences.
