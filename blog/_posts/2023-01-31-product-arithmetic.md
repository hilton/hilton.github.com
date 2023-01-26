---
title: Arithmetic for product managers
description: Why weighted prioritisation scores don’t add up
layout: hh
tags: product prioritisation
css: "body.writing blockquote { border-left:none; background-color:#FCF9F1;} body.writing blockquote.big { max-width:30em; background-color: #334D5C;} article td, article th { text-align:center; width:1em; }"
image: bubbles.jpg
---

![](calculator.jpg)

[Towfiqu Barbhuiya](https://unsplash.com/photos/xkArbdUcUeE){:.photocredit}

Product managers don’t typically spend much time doing sums, and leave formulas to the finance team.
But prioritisation frameworks sometimes tempt product managers to wield calculations, in search of numbers and other answers.

## Weighted scoring

The [RICE score](https://www.prodpad.com/blog/which-prioritization-model-is-best/#rice)
combines four factors for evaluating product opportunities:

> score = (reach × impact × confidence) ÷ effort

In theory, you know all four factors on the right, and use them to calculate a single score.
In practice, you don’t have good data and instead make assumptions
(on top of the assumption that you measure all four factors on the same scale).

## Made-up numbers

In [Product Roadmap Best Practice – 6 things to avoid!](https://www.prodpad.com/blog/product-roadmap-best-practice-things-to-avoid/),
Janna Bastow warns against _prioritizing at the idea level_, and about the result of those assumptions:

{:.big}
> When you center your own ideas and then prioritize them,
> you’re basically taking an assumption and multiplying it by another assumption!

_Making assumptions_ sounds a lot like _making things up_,
and if you made up one or more of _reach, impact, confidence_ and _effort_, 
RICE gives you a made-up prioritisation score.
One number looks much like another, but provenance matters.

## Discovering effort

_Effort_ causes especial problems, in software development, because you generally can’t know how much of it you will need.
And while you might _estimate_ or (better) _forecast_ effort, that costs yet more effort that further complicates the calculation. 

The more accurately you want to predict effort, the more effort the prediction costs, all the way to the limit where the cheapest way to find out involves doing the actual work, and finding out the hard way.
Doing rather than estimating the work - a product management power move - gets in the way of using a prioritisation framework to decide what to work on.

## Numeric precision

We make assumptions and estimate (guess) numbers all the time in business.
Scientists, on the other hand, call that _fabricating data_ and don’t approve.
Scientists also pay attention to technical details, such as numeric precision.

By multiplying factors, RICE multiplies uncertainty, so even if you could reasonably call prioritisation a science, a RICE score still only has the same precision as the least precise factor.
No-one ever said, ‘I have estimated _reach_ to three significant figures’.
In software product development, you might as well limit precision to t-shirt sizes.

## T-shirt size arithmetic

T-shirt sizes keep estimates honest, avoiding the appearance of precision you don’t have.
Instead of numbers, use _small_, _medium_ and _large_ (S, M, L).
It even looks like you could do arithmetic by multiplying these values in the RICE formula.
But if you write out the multiplication table, you discover a problem.

|    ×    |  S  |  M  |  L  |
| ------- | --- | --- | --- |
|  **S**  |  S  |  S  |  ?  |
|  **M**  |  S  |  M  |  L  |
|  **L**  |  ?  |  L  |  L  |

What RICE prioritisation do you get from a large reach and a small impact?
You can think of medium (M) as neutral - multiplying by it doesn’t change the score:

> S × M = S
>
> L × M = L

However, combining a large factor with a small one (S × L) gives an unknown result.
When you multiply a large number by a small fraction, do you get a large number or a small one?
It depends.
Numeric calculations may reassure stakeholders, but using dodgy arithmetic to justify product decisions should terrify product managers.
