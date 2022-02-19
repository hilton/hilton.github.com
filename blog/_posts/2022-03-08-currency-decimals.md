---
title: Use a currency-specific number of decimals
description: Why a money amount isn’t just a number
layout: hh
tags: software data design
image: yen-prices.jpg
---

![Prices in Japanese Yen](yen-prices.jpg)

[François Brémont](https://unsplash.com/photos/ByaAsohfE3M){:.photocredit}

While some kinds of software product can reach a relatively stable state, business software changes to keep up with customer, market and business model changes.
Flexible software has more value than software you cannot change cheaply - quickly and reliably.
Business software especially.

You can lose flexibility when you can’t predict the future, and instead make assumptions that don’t survive changes in the business environment.
When an assumption pervades your product, correcting it requires changing the software in many places, often at high cost and risk.
This article explores one of those assumptions.

## Japanese support

Imagine working for a business software vendor that gradually expands into new geographic markets.
Everyone knows that a new country may require supporting a new language in the product, which means paying a translation agency to translate the user-interface text.
Having already done this for half a dozen other languages, everyone expects similar initial costs, ongoing maintenance costs, not much else, and no surprises.

In general, a business software vendor with local go-to-market teams expands into new geographies more slowly than global consumer software expands its user base.
A sales-led organisation therefore moves into a new geography one or two countries at a time, and inevitably focuses more on the commercial implications than the engineering implications.

So what can go wrong when the sales organisation commits to launching in Japan without asking the product organisation to do some discovery work?
From a software perspective, it’s easy to focus on the obviously different Japanese language and script,
but there’s more to Japanese support than that.
Japan differs from other countries in more ways than you might expect, especially compared to Europe or the US.

You might suppose that you have completely _internationalised_ your product, and that you won’t have to make any structural changes to _localise_ it for an additional country.
In practice, you should expect each new country to face a new internationalisation issue that you didn’t have to deal with for any of the previous languages.
When it comes to adding Japanese support, you’ll have a problem if engineering assumed that currencies always have _cents_.

## Currency decimals

Euro and US Dollar currency amounts both have _cents_ - two decimal places.
However, it turns out that along with 16 other currencies,
[Japanese Yen](https://en.wikipedia.org/wiki/Japanese_yen) 
amounts have no decimal (fractional) part.
Japanese Yen uses whole numbers.

In general, different [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
currencies have a different number of decimal places: 0, 2, 3, or 4.
If your European or American business software handles currency amounts, 
you can’t enter the Japanese market unless the number of decimal places depends on the currency.

## Technical implementation

In business software, the varying number of decimal places has important implications for arithmetic with currency amounts, which has important rounding rules.
This may be a good enough reason to use a third-party software library for currency handling rather than implementing it yourself, because currency bugs tend to have higher business risk than the average bug.

Some development platforms do the work for you, and provide built-in support for currencies.
On the Java platform, for example, a
[Currency](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Currency.html)
has a _default fraction digits_ property, as well as its name and ISO 4217 code.
