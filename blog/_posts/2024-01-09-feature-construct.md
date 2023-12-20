---
title: ‘Feature’ is a construct
description: Why features would make product development easier, but don’t exist
layout: hh
tags: product
image: construction.jpg
---

![](construction.jpg)

[Di](https://unsplash.com/photos/F1MlxlEpaOk){:.photocredit}

{:.series}
1. [Feature lifecycle](feature-lifecycle)
2. [Feature release](feature-release)
3. [Feature rollout](feature-rollout)
4. [Feature trackers](feature-tracker)
5. [Feature analytics](feature-analytics)
6. Feature as construct ←

Features don’t exist.
Product managers focus on the business _outcomes_,
and developers focus on well-tested code changes.
Everyone mentions features from time to time, but never precisely.

We imagine product features, 
but can’t say whether a product has ten or 100.
Instead, we construct them on the fly, for the length of a conversation.
They don’t really exist.

## Documented features

Software user guides don’t document _features_.
Technical writers use
[task-based documentation](https://www.konpetans010.com/untitled/)
to explain how you can do what you want to do, using whatever features the software provides.

In practice, the following don’t match each other:

1. what people want to do
2. what the documentation explains how to do
3. what the software can actually do.

If features _did_ exist, though, 
you could map them to user needs, user tasks, and task documentation.
Then you could ask, _which features don’t have any documentation?_

## Released features

Software releases don’t add features: they incrementally update the whole product.
These updates vary in complexity, updating different parts of the product in parallel,
without regard to anyone’s idea of feature boundaries.

If features did exist, we might find it easier to write release notes,
because we’d already know which features the release updated.
But features don’t exist, only _bug fixes and performance improvements_.

## Exclusive features

Features don’t exist for everyone, because we hide them behind
[feature toggles](https://en.wikipedia.org/wiki/Feature_toggle).
The toggle seems to define the feature you can hide, but only temporarily.
When we commit to the hidden functionally, 
and remove these feature toggles,
their contents melt into the surrounding functionality.

If features did exist, we’d know which SaaS customers had which toggles enabled,
and which features no longer have a toggle.
In practice, product managers drown in feature toggle chaos that obfuscates feature boundaries.

## Broken features

Customers occasionally that _something doesn’t work_.
Precisely identifying which ‘something’ broke would help resolve the issue,
but you can’t just select from a list of all features.
Because features don’t exist.

If they did, you could list currently-broken features, 
and prioritise [corrective maintenance](https://en.wikipedia.org/wiki/Corrective_maintenance)
based on the importance of the tasks they support.
In practice, you might as well use a [zero bug policy](zero-bug-policy)
to know what the list contains by knowing that it contains nothing.

## Unreliable features

Features don’t exist, so a single recurring bug makes the whole product unreliable.
But frequent bug reports often turn out to have functionality in common,
like how leaks in an old house tend to return in the same places.

If features did exist,
we might know about the unreliable ones that cause the most support requests.
This might help us choose between replacing the whole roof, or only the gutter.

## Unused features

Features don’t exist, so even if you know that people use your product,
you don’t know which parts they use.
Meanwhile, the software accumulates millions of log messages per day,
but doesn't have millions of features.

If features existed, software analytics would identify their activation, adoption, an abandonment.
Product managers could ask about the last 30 days’ most popular features,
and the ones nobody used.

## Abstract construct

Features don’t exist.
But we can’t make sense of complex software products based on their more concrete technical artefacts.
Instead, we have no choice but to construct the abstractions we call _features_.
Unfortunately, we do so half-heartedly.