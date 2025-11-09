---
title: Feature intelligence
description: a thought experiment about feature lifecycle visibility
layout: hh
tags: product
image: cat-shop.jpg
---

![](cat-shop.jpg)

[Jeremy Mowery](https://unsplash.com/photos/WA00ShDnupM){:.photocredit}

Some recent reflections about [feature flags](https://en.wikipedia.org/wiki/Feature_toggle)
have led me to the following question.

> What if you left the feature flags in the code?

Let’s take a step back, and consider what that means and why you might want to do that.

## Feature flags

Suppose you manage a web shop, and want to experiment with showing a
[bodega cat](https://en.wikipedia.org/wiki/Bodega_cat) photo on the checkout page,
with a _like_ button for cat appreciation.
You introduce a `checkout-cat` feature flag,
and use a feature flag tool to show that to certain users, or on Fridays, or whatever.

In pseudo-code, this would result in something like the following, where the feature flag configuration determines whether `checkoutCat` has the value `true` or `false`:

```python
if (checkoutCat):
   showRandomBodegaCat()
else:
   showBoringMessage()
```

Suppose you later discover that bodega cat pics increase sales, and decide to always show them.
Then you can tidy up the code, leaving only:

```python
showRandomBodegaCat()
```

When you don’t get around to tidying up like this, we call that _feature flag debt_,
because you retain the `showBoringMessage` code that you no longer use,
as well as the conditional logic that implements the feature flag.
On the other hand, now your feature flag system no longer knows about Checkout Cat.

## Feature use

Suppose you had used a `checkout-cat-like` feature flag to control rollout for the
Checkout Cat’s _like_ button.
This would give you visibility of which users could see it, but not when they use it.
If you also wanted to keep track of when people use the _like_ button,
you might find it useful to track `checkout-cat-like` feature _usage_.

[OpenFeature](https://openfeature.dev) defines an open standardised feature flagging API,
that you can use with supported feature flag ‘provider’ back ends.
OpenFeature includes a [tracking API](https://openfeature.dev/specification/sections/tracking/)
to explicitly track events.

Replacing feature flags with feature usage tracking events somewhat resembles leaving the feature flags in the code.
However, this API doesn’t target tracking feature usage,
and names events rather than features,
so your tooling won’t automatically associate tracking events with existing feature flags.

## Feature intelligence

Feature flags could remain after rollout, in a slightly different form,
to track more of the [feature lifecycle](feature-lifecycle):
feature usage, and feature-level feedback submissions.
This would generate rich information about how people use a software product,
down to the feature level.

Tooling for exploring a product’s features would provide a new kind of _feature intelligence_.
This tooling would let feature owners explore their features’ lifecycle status,
usage, and feedback, for example to run product experiments.
However, this would only work for features that have tracking in the application code.

## Feature coverage

Feature intelligence would depend on _feature coverage_ –
the percentage of product features that feature intelligence ‘knows about’. 
Feature coverage would then resemble test coverage –
how much of the code has automated testing.

For product teams that maintain a feature-level product hierarchy,
full feature coverage with usage tracking would change this from static documentation to realtime feature management.
In the end, though, this level of detail doesn’t necessarily matter.
It all depends on whether you work in a world where
[features don’t exist](feature-construct).
