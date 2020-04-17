---
title: "Naming products isn’t the problem"
description: Why product backlog item naming matters
layout: hh
tags: product
image: grey-cubes.jpg
---

[![Grey concrete cubes](grey-cubes.jpg)](https://unsplash.com/photos/TAVKURx-xLw)

<a class="unsplash" href="https://unsplash.com/photos/TAVKURx-xLw" rel="noopener noreferrer" title="Photo by Christian Fregnan"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Christian Fregnan</span></a>

<!--
1. Naming products is famously hard, but not a product person’s biggest naming problem.
2. Marketing and UX content writers might name things customers see, but product people choose first.
3. Naming everything in between matters.
4. Use the product backlog and roadmap to establish naming.
5. Name either capabilities _or_ features
6. Good naming needs to be descriptive, consistent, right-level, domain language.
-->

Companies find it famously hard to name their products.
Fortunately, product people don’t name products often.
However, content marketing and user-interface text include plenty of product-related names, which have to come from somewhere.

For example, enterprise software sometimes lets you define your own data structures.
Salesforce has built-in _business objects_, to which you can add your own _custom object types_.
Unfortunately, other products use different names; these are more or less equivalent:

* business objects
* custom objects
* complex objects
* object types
* record types
* complex types

A product contains many names like these - concepts and capabilities, jargon and features.
Product people have a big influence on naming _within_ their products, because they get to choose first.
Product concept and capability naming starts in the product backlog.

## Product backlog naming

Product capabilities appear in the product backlog, where their product manager blesses and names them.
Meanwhile, the same things arise in sales’ conversations with customers, and in product marketing analysis of competing products.
Unfortunately, different people use different names for the same thing.

If you decide to add _custom objects_ to your product, you can do without friction caused by sales calling the capability _business objects_ because it sounds good, while customers are used their legacy system having _record types_, and software developers insist that the correct (technical) name is _complex types_.
While you can’t (and shouldn’t) completely avoid a concept having different names in different contexts, as with scientific names versus colloquial names, everything goes more smoothly when everyone consistently uses the name you want customers to use.

Product backlog items use a mixture of existing concepts and new concepts, which also have names.
Naming product backlog items comes with great responsibility, because names stick.
Even bad names.

## Capabilities or features - not both

Good product backlog naming requires consistency.
In particular, product backlog items must name the same kind of things as each other.
One of these doesn’t fit in with the others:

1. Configure business objects
2. Export business object data
3. Table view for editing multiple business objects

While the first two items describe capabilities that you could implement in various ways, the third describes a specific software feature.
Rephrasing the feature as part of a capability, such as _Manage business object data_ will also normalise the abstraction level.

Alternatively, you might maintain a feature-based product backlog, and either group them into capabilities in a two-level backlog, or only use outcomes and capabilities in a [multi-level product roadmap](product-roadmap-dimensions-levels).

## Good product capability naming

Good naming goes beyond using a consistent abstraction level.
Good product backlog item names:

1. consistently name either capabilities _or_ features
2. use a descriptive phrase that summarises the capability, instead of code names
3. use subject matter domain language, rather than made-up jargon
4. consistently use the same terms, instead of using synonyms
5. contain few words so that people don’t invent abbreviations.

Good names exhibit _consistency_ and _explanation_, and don’t come easily.
But good names have great value: they form the basis for effective concise communication.
