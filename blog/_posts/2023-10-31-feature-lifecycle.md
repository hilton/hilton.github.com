---
title: Feature lifecycle management
description: How existing product development tools neglect features
layout: hh
tags: product
image: eggs.jpg
---

![](eggs.jpg)

[Shubham Dhage](https://unsplash.com/photos/qgo7Tt_NWD0){:.photocredit}

{:.series}
1. Feature lifecycle ←
2. [Feature release](feature-release)
3. [Feature rollout](feature-rollout)
4. Feature trackers
5. Feature analytics

As product management tools mature, they sometimes expand into designers’ or developers’ work.
Covering additional [types of unit of work](units-of-work),
makes these tools more useful and [more universal](universal-tools),
albeit at the cost of increased complexity.
Product management tools could also expand in a different dimension.

{:#avoidance}
## Feature-avoidance

Product managers often avoid talking about _features_, in favour of objectives-based planning, and outcome-based now/next/later roadmaps.
However, even when product managers don’t get involved in feature delivery,
they still must enable product marketing to talk about features, and enable customers to successfully use them.
In practice, features connect many product management activities.

Meanwhile, development teams sometimes don’t talk about features either.
Designers craft interactions and developers decompose user stories, as they work towards specific key results.
While the software they design and build certainly has _functionality_, the development team doesn’t necessarily identify specific features.
Despite this, features exist, and touch many product processes.

{:#lifecycle}
## Feature lifecycle

Each product feature, sometimes more generically called a _capability_, has its own lifecycle, from conception to decommissioning:

1. **Design** creates, names and discusses new features, some of which progress to implementation.
2. **Implementation** adds features to the product, possibly not yet for customer use.
3. **Documentation** describes features, even when structured around user tasks.
4. **Releases** typically include release notes that name (ideally all)
   new, improved and fixed features, introducing them to customers.
5. **Marketing** publicises features, sometimes via blog posts and in-app announcements
   (for major features), further informing customers about them.
6. **Activation/rollout** uses feature toggles to make features available to customers
   (for major features).
7. **Feedback** may include targeted surveys to evaluate new features,
   or in-app feedback for specific features.
8. **Support** includes bug reports and 
   [Knowledge-Centered Service](https://en.wikipedia.org/wiki/Knowledge-centered_support), 
   which (eventually) refer to specific features.
9. **Retirement** (sunsetting) revisits all of the previous steps to remove instead of adding a feature.

A feature lifecycle describes a kind of enduring identity for features - what developers call an _entity_.
In practice, features have a weak kind of identity, with inconsistent naming and no explicit identification across lifecycle phases.
Similarly, features manifest weakly in product management tooling.

{:#tooling}
## Feature management tooling

Managing the whole feature lifecycle requires a long list of tools, even after excluding designers’ and developers’ primary tools.
Features appear in:

1. release planning timelines, e.g. [Airfocus](airfocus-review)
2. feature toggles, e.g. [Unleash](https://www.getunleash.io)
3. feature documentation, e.g. [Read the Docs](https://about.readthedocs.com)
4. release notes (change log), e.g. [LaunchNotes](https://www.launchnotes.com)
5. customer research/feedback, e.g. [ProdPad](https://www.prodpad.com/), [Orbit](orbit-review), [Jimo](https://www.linkedin.com/company/usejimo/)
6. usage analytics, e.g. [Heap](https://www.heap.io/), [Amplitude](https://amplitude.com)
7. issue trackers, e.g. [Linear](https://linear.app/)

I haven’t seen any tools specifically for feature _retirement_, but in practice you’ll need to use most of the above tools _again_ to justify, plan and execute feature removal.
These topics also apply to APIs, which require slightly different tooling, e.g. for access control and usage-based pricing.

It turns out that the product feature lifecycle results in a bigger tooling explosion than the many levels of
[product management work](simplify-product-work) and [development work](simplify-development-work).
However, the above tools lack a way to share a single list of features between them, leaving it up to product managers to consistently manage features across all lifecycle phases and tools.
Good luck with that.
