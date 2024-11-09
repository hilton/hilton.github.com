---
title: The 3 phases of public API development
description: unpacking the API product lifecycle
layout: hh
tags: API product
image: moon-phases.jpg
---

![](moon-phases.jpg)

[Jordan](https://unsplash.com/photos/N953mNxAh-w){:.photocredit}

<!-- 482 - 582 words -->

A product’s public API essentially has two development phases:

1. Improve everything!
2. Change nothing!

All software has a tension between these two goals, but public APIs have it more.
Development teams typically have less API design experience and expertise than for other kinds of software design,
such as user-interface design, and depend more on feedback and iterative development.

Meanwhile, APIs incur much higher costs of change for their users, compared to user interfaces.
User-interface changes may slow someone down, but they will typically figure out how to navigation the change and proceed, without too much delay.
Developers who use your API, by comparison, write API client code that API changes break.

## Phase 1: feedback and improvement

In a public API’s first development phase, third-party developers use the API for the first time.
They typically uncovers bugs and [usability issues](api-docs-usability),
also known as _developer experience_ (DX) issues.
In particular, [poor quality or missing API documentation](api-documentation-mistakes)
leads to a bad developer experience.

In a successful first phase, you collect feedback from early API users,
and iterate the API to improve it.
Improvement means reducing the number of support requests,
and how long it takes for developers to use the API successfully
([time to value](https://en.wikipedia.org/wiki/Time_to_value)).

You should aim to make enough improvements in phase 1 to launch a good API product.
If you make improvements too slowly,
gradual adoption will eventually bring enough customers to force a mediocre API into phase 2. 

## Phase 2: first stable version

In  phase 2, you support your first stable [API version](http-api-versioning) 
without making breaking changes.
In this phase, you can continue to make minor usability improvements,
especially documentation improvements.
But you can’t make changes that break customers existing implementations.

In the second phase, you pay the price of earlier design choices that you now can’t change.
Product companies that opportunistically make an internal back-end API available to customers
skip straight to this phase, but without the previous phase’s improvements.
In doing so, they discover [the cost of a free API](no-free-api): high support costs, and unhappy users.

A successful second phase generates enough API adoption to make it a business success.
This occasionally, but not often, makes a third phase possible.

## Phase 3: a new API (version)

The next phase implements improvements on the previous version, including breaking changes.
You shouldn’t expect existing customers to use this new version:
at best, _some_ of them will migrate within a year, but you shouldn’t expect to remove an API version any time soon.
Instead, reduced support effort for _new customers_ justifies the new version

In theory, the third phase corresponds to a major new version,
with breaking changes that improve on the previous version’s design.
These improvements will make developers who use the new API more successful.

However, you need to believe that more customers will adopt the API in the future than currently use it,
to justify this development effort.
Perhaps that explains why so many APIs introduce versioning, and then never release a new version.
Most public APIs remain forever at version 1.
