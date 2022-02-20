---
title: Use a currency-specific number of decimals
description: Why a money amount isn’t just a number
layout: hh
tags: software data design
image: yen-prices.jpg
css: "body.writing blockquote.big p {font-size:4em; margin-bottom:0.2em; text-align:center}"
---

![Prices in Japanese Yen](yen-prices.jpg)

[François Brémont](https://unsplash.com/photos/ByaAsohfE3M){:.photocredit}

All software changes, business software more than most, as its customers, market and business model change.
And despite best efforts to design for flexibility, some changes cost more time or introduce more risk than others.

For example, you lose flexibility when you can’t predict the future and have to make assumptions that don’t survive changes in the business environment.
Correcting an assumption that pervades your product requires changing the software in many places, which becomes expensive.
This article explores an example of that kind of assumption.

## Japanese support

Imagine working for a business software vendor that gradually expands into new geographic markets.
Everyone ‘knows’ that a new country may require supporting a new language in the product, which means paying a translation agency to translate the user-interface text.
Having already done this for half a dozen other languages, everyone expects similar initial costs, ongoing maintenance costs, and not much else.

When the sales organisation commits to launching in Japan before the product organisation has a chance to do some discovery work, some details don’t emerge in time.
Instead, you might focus on the obviously-different Japanese language and script,
and forget that Japan differs from other countries more than you might expect, especially compared to Europe or the US.

No matter how well you think you have _internationalised_ your product, you shouldn’t expect adding support for another country to consist only of adding the language translations.
In practice, you should expect each new country to introduce an internationalisation issue that you didn’t have to deal with for any of the previous countries and regions.
For example, when adding Japanese support, you’ll have a problem if the product assumes that currencies always have _cents_.

## Currency decimals

Euro and US Dollar currency amounts both have _cents_ - two decimal places.
However, it turns out that along with 16 other currencies,
[Japanese Yen](https://en.wikipedia.org/wiki/Japanese_yen) 
amounts have no decimal (fractional) part.
Japanese Yen uses whole numbers.

{:.big}
> ¥42    €0.32

In general, different [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
currencies have a different number of decimal places: 0, 2, 3, or 4.
If your European or American business software handles currency amounts, 
you can’t enter the Japanese market unless the number of decimal places depends on the currency.

To correctly calculate, store and display currency amounts, you need to make the currency explicit and use the currency’s number of decimal places.
You might get away with ignoring this issue for a while, by assuming that all money amounts use the same currency, but probably not for long.
In practice, you should make the currency explicit when working with money amounts, in the same that you should make the units explicit when working with any kind of physical quantities or measurements.

## Technical implementation

In business software, the varying number of decimal places has important implications for arithmetic with currency amounts, which has important rounding rules.
Consider using a third-party software library for currency handling rather than building it.
Currency bugs have higher business risk than the average bug.

Some development platforms do the work for you, and provide built-in currency support.
On the Java platform, for example, a
[Currency](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Currency.html)
has a _default fraction digits_ property, as well as its name and ISO 4217 code.
