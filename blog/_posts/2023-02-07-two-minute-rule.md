---
title: The two-minute product manager
description: Hyper-availability and reducing median time to respond
layout: hh
tags: product
image: timer.jpg
---

![](timer.jpg)

[Manik Roy](https://unsplash.com/photos/92vbv8ARIkk){:.photocredit}

Allen Holub recommends a
[two-minute rule](https://twitter.com/allenholub/status/984840408260751360)
for software product owners (PO) - also discussed on the 
[One Knight in Product podcast](https://www.oneknightinproduct.com/allen-holub/):

> POs are required to answer any question that comes up during development within 2 minutes.
> This takes precedence over all meetings, etc.,
> and the PO must be available electronically if not physically.

This made me wonder what a product manager would have to do to consistently answer product development team members’ questions within two minutes.
But that comes after identifying the availability problem’s impact.

## Scrum and the unavailable product owner

Back in the days of Scrum projects, I sometimes joked that we should plastify the _Product owner unavailable_ card on the Scrum board’s _impediments_ section, so it would last longer.
These projects had issues.

Scrum projects for internal line-of-business applications often end up with a product owner who experiences the role as a distraction or irritation.
Scrum’s product owner role demands a lot from a single person, possibly unrealistically so, while many organisations give it to someone who _doesn’t have time for it_, literally and figuratively.

Developers who don’t have immediate access to their product owner soon become blocked.
Ideally, they could just talk to the customer(s) and their users.
They usually can’t, though, and the product owner spends most of their time in unrelated meetings.

## Product management availability

From a development team’s perspective, no amount of product manager access seems extravagant.
Even having the product manager join team/ensemble programming sessions has more value than you might expect.
Product managers and developers must replace handovers with _continuous collaboration_,
or accept much slower progress and higher development costs.

In practice, developers make constant product design decisions.
Without low-friction ways to check in with both product manager and product designer, the implementation will gradually diverge from the product’s vision and design, leading to expensive rework or lower quality.

## Hyper-refinement

With no product owner available, some teams fall into the trap of trying to refine their backlog so thoroughly in advance that no questions remain during development.
In the worst example I ever experienced, a business analyst became ‘deputy product-owner’ and proceeded to write a detailed specification for six months’ worth of user stories, to be approved by a product owner that no-one saw any more.
The same team also got a _project_ manager.

This hyper-refinement doesn’t work, of course.
Or rather, we call the most effective version of it _waterfall development_.

## The two-minute rule

Holub’s two-minute rule has implications.
First, you’ll have to make explicit which activities take priority to unblocking development.
In pull-based flow-based development, I would expect a short list.

Second, you need mitigations for anything that does take priority, such as conversations with customers.
Therefore, start with the _weak two-minute rule_:

> Answer questions within two minutes, _except for during customer conversations_.

Then reduce the exceptions’ impact.
Include designers and developers in customer meetings, so they can continue the conversation while the product manager types a quick answer questions that interrupt.
Avoiding meetings longer than 30 minutes may also help achieve a _median time-to-respond_ less than two minutes.
