---
title: Product feature analytics
description: Integrating a functional model with feature-level analytics
layout: hh
tags: product
image: cockpit.jpg
---

![](cockpit.jpg)

[Andrés Dallimonti](https://unsplash.com/photos/kjqTlMHLci4){:.photocredit}

{:.series}
1. [Feature lifecycle](feature-lifecycle)
2. [Feature release](feature-release)
3. [Feature rollout](feature-rollout)
4. [Feature trackers](feature-tracker)
5. Feature analytics ←

A [feature tracker](feature-tracker)
would help well-organised product managers keep track of their product’s features.
However, feature lifecycle visibility alone wouldn’t answer the following questions.

1. How many weekly active users does each recently-released feature have?
2. Which high-maintenance features dominate customer support effort?
3. Which obsolete features’ declining usage justifies sunsetting them?

Existing analytics tools can answer these questions, but not in the context of a product’s features,
sometimes called its [functional model](https://en.wikipedia.org/wiki/Function_model).
A feature tracker would become more interesting with live product usage data driving a feature health visibility dashboard.

## Adoption

Just because a feature doesn’t have any bugs doesn’t mean anyone uses it.
Once you have released a feature, you can start testing adoption, to discover whether the feature has the expected value.

In practice, measuring feature adoption means answering questions, such as the following.

1. Has anyone used this feature?
2. What proportion of users have?
3. Which segments?
4. Did they succeed with the feature?
5. What errors did they get?
6. Did they use the feature again?
7. How often?

Metrics introduce complexity: as the joke goes, _monthly active users_ depends on what you mean by _month_, _active_ and _user_.
But despite this, infrastructure to capture and publish feature adoption metrics could make it more feasible to do so.
And technically, this would probably only require API calls or logging, as with existing analytics tools.

Imagine a feature adoption dashboard where you could see the most and least popular features, and compare their adoption timelines relative to their start dates.
This kind of thing could even provide visibility of how releases affect supposedly unrelated features.

## Failure demand

When feature usage drops, or fails to appear, you need to notice and figure out why.
First, you check if the feature works, because if it doesn’t, you don’t need to look anywhere else.
Ideally, you’d know about feature breakage before the usage reduction it causes.

Imagine a feature health dashboard that shows you which features have current issues, 
and which cause the most [failure demand](https://beyondcommandandcontrol.com/failure-demand/).
When combined with historical usage data, this might provide missing visibility of which functionality to prioritise improving.

A feature-level product status page sounds over-engineered, but should inevitably result from integrating
[functional model](https://en.wikipedia.org/wiki/Function_model) (i.e. a feature list)
with error logging and helpdesk systems.
Again, perhaps more software categories deserve to have one.


## Sunset

Analytics also support the end of the feature lifecycle, when they provide evidence to support sunsetting an obsolete feature.
You need data to separate:

1. new features that have not yet achieved adoption
2. popular features whose usage dropped unexpectedly
4. popular features whose usage has slowly declined.

You won’t notice declining usage if your metrics focus on new features, instead of monitoring all features.
Perhaps feature usage visibility would make it easier for product managers to complexity by removing features.

Imagine a feature abandonment dashboard that recommends which feature to phase out next.
When combined with historical data on support requests, this might even include effort reduction estimates.

## Integrated feature management

A basic [feature tracker](feature-tracker) might have a limited audience, in highly-organised environments.
But an integrated feature tracker that can overlay feature metrics on those features’ histories and lifecycles might help product managers solve more valuable problems.
After all, to leverage increasing volumes of product data, we need new ways to contextualise it.