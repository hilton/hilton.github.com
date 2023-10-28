---
title: Feature release
description: Feature lifecycle steps that precede release
layout: hh
tags: product
image: ship.jpg
---

![](ducklings.jpg)

[Charles Jackson](https://unsplash.com/photos/PxSGxglfCbA){:.photocredit}

{:.series}
1. [Feature lifecycle](feature-lifecycle)
2. Feature release ←
3. Feature rollout

Product managers [don’t talk about much features](feature-lifecycle#avoidance), 
but a _feature_ remains a useful abstraction for product work outputs.
Even though we ultimately seek _outcomes_, these outputs connect to our work in many ways.
For example, the [feature lifecycle](feature-lifecycle) starts with the following steps:

1. **Design**
2. **Implementation**
3. **Documentation**
4. **Release** (planning)
5. **Marketing** (preparation)
6. **Support** (preparation)

The steps you care about might vary from product to product, but the pattern remains.
This article explores the feature lifecycle steps that precede the _release_ milestone.

## Design

Designers, collaborating in a product trio, design solutions and create new features.
While designers may be happy designing anonymous features on a canvas, product managers need to connect them to their upstream and downstream work, and talk about them.
Product managers care about many aspects of these potential solutions to customer needs,
starting with the features’ _names_.

## Implementation

Developers also talk about features during design, and their potential implementation work.
Developers might only loosely relate features to user stories, but they need to be more precise to use feature toggles.

[Feature toggles](https://en.wikipedia.org/wiki/Feature_toggle)
enable controlled customer rollout, independently of releases, using a unique identifier for each feature that the team can enable or disable.
Developers also like emoji, as a rule, which makes them useful feature name abbreviations.

## Documentation

Product documentation supports user tasks, instead of listing and documenting individual features.
Product documentation may also include price lists, though, which include contractually-agreed feature lists in some countries.

Documentation changes when features change, which make feature releases relevant for authoring and maintaining documentation.
Besides, customers can’t use features they can’t learn about, in general, and so technical writers say
[‘docs or it didn’t happen’](https://www.writethedocs.org/videos/portland/2019/lessons-learned-in-a-year-of-docs-driven-development-jessica-parsons/).

## Release

Feature release requires preparation: customer-facing teams need time to learn enough about the feature to market or support it, as soon as customers can access it.
This starts with release notes that introduce features to customers, and may extend to blog posts and in-app announcements.
Beyond that, marketing teams write content marketing, on top of the product documentation .

A major feature requires more announcements, across more channels, and with more detail.
Sales and marketing will want visuals, such as screenshots, and a story about the feature’s expected benefits to customers.
A product manager will often have already identified these benefits during discovery, when documenting the corresponding product opportunity.

## Marketing

Most marketing activities happen _after_ a feature’s release, assuming that you don’t market
[vapourware](startup-ideas-are-cheap).
However, marketing campaigns require substantial preparation before release day, to create content and plan publication and events.

Planned launch events, require commitments to have the feature ready on the day,
so delaying a marketing release may incur both financial costs and reputation damage.
Fortunately, any release significant enough to justify a marketing launch also justifies a limited release programme that iterates the feature with selected early access customers before committing to a full rollout.

## Support

Similarly, some support activities precede a feature’s release.
The support team needs to understand the new feature, and ideally learn how to use it before the first customer support request.

Support teams impose a different kind of deadline: unlike marketing, delaying a release doesn’t affect them much, but releasing a feature _earlier_ than expected may catch them out.
Feature flags help, of course, but don’t substitute for coordinating with customer support to help them prepare.
