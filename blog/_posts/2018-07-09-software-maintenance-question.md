---
title: Software maintenance’s terrible question
description: The big question that teams don’t ask about software products
layout: hh
tags: code maintenance
image: http://hilton.org.uk/blog/factory2.jpg
---

[![A factory - where real maintenance happens](factory2.jpg)](https://unsplash.com/photos/NGsBU5d-qxQ)

<a style="background-color:#ccc;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/photos/NGsBU5d-qxQ" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Crystal Kwok"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Crystal Kwok</span></a>

If you’re developing software, you might think you don’t have a [code maintenance problem](code-maintenance-problem).
If you think that the development team and business stakeholders’ plans are aligned, here’s a question to ask in your next meeting together.

<blockquote class="big">
<p>How long are we going to maintain this software for?</p>
</blockquote>

This question might cause a stunned silence.
You may need to repeat it several times, in different ways, so everyone in the room understands what you mean.

* How long are we planning to sell or use this software for?
* After how many years do we plan to decommission this product?
* How will we eventually determine that it’s time to abandon this software?
* When do we need this product’s replacement to be ready?

These are tough questions, especially in the context of a profitable software product.
As a development team, you need to figure out how to ask this question in the context of the kind of software you’re developing.
Developers may be used to the idea that nothing lasts for long in software, but your business stakeholders may have a different answer.

## We’re going to keep selling this forever

When you’re selling a software product, the most natural response from a business perspective is that you’re going to maintain the software indefinitely.
After all, a business rarely plans end dates for product revenue streams.

Questions about software lifetime can also surprise people when you’re developing custom business software.
Software tends to be expensive, and custom business software is _very_ expensive, so it’s natural for its sponsors to expect it to _last_.

Perhaps the business stakeholders don’t really need the software to last forever, and just haven’t included software lifetime in their business plans.
Either way, as a development team, you need to know whether ‘forever’ means _forever_, and whether you need to have an urgent conversation about the implications.

## Forever is a very long time, and very expensive

While some kinds of software seem to come and go daily, _successful_ business software tends to stay in production for 5-10 years.
Business software that lasted less than five years probably failed to live up to its business case and justify its development cost.
Commercial software products may be different, but we generally expect them to last for five years.

In the first five years, development teams often ignore the software maintenance problem.
In the second five years, if the product is still alive, code maintainability becomes a problem that you cannot ignore.
At best, a development team can tough it out until finally giving up, but it’s more likely that the descent into legacy code hell will take your choices away from you within ten years.
Beyond that, special measures are required.

Keeping software maintainable for longer than ten years is a hard problem, that requires more than the occasional Friday afternoon refactoring.
It won’t even be enough to write clean code.
Instead, the team has to learn how to write _maintainable code_ that a development team can understand and dare to change long after its original authors have left.
This requires a lot of additional work that the development team needs to learn how to do, and that the business sponsors need to decide to pay for.

## Planned software retirement

The alternative to being a hostage to unmaintainable legacy code, continually increasing maintenance costs, or both, is planned retirement.
When he was CIO of the Estonian Government, [Taavi Kotka](https://www.youtube.com/watch?v=9d2PpZoc9w8) pushed a policy that no IT system run in production for more than thirteen years.

Limiting system lifetime to thirteen years meant planning a replacement project to start after ten years, and completing it in three years.
This was a tall order for the forward-thinking and relatively small Estonian goverment, and would be unfeasible for most large business organisations to achieve for all IT systems.

The difficulty of planned retirement and the cost of long-term maintenance are why software product lifetime is a difficult question, both from business and technical perspectives.
In practice, neither path is easy to accept, which is why its better to have this conversation early in the software lifecycle, rather than later.
Talking about this before development starts wouldn’t be too soon.

_When you need help talking about software maintenance, [contact Peter Hilton](../contact) for training in [How to write maintainable code](../training/maintainable-code)._
