---
title: Feature rollout
description: Feature lifecycle steps that follow release
layout: hh
tags: product
---

![](ship.jpg)

[Venti Views](https://unsplash.com/photos/1cqIcrWFQBI){:.photocredit}

*[B2B]: business-to-business - refers to software for companies, as opposed to B2C (business-to-customer) consumer software

{:.series}
1. [Feature lifecycle](feature-lifecycle)
2. [Feature release](feature-release)
3. Feature rollout ←

Despite product managers’ [feature avoidance](feature-lifecycle#avoidance), 
_feature_ remains a useful abstraction for product outputs.
The [feature lifecycle](feature-lifecycle) starts with [pre release](feature-release)
work, followed by post-release activities:

1. **Marketing**
2. **Activation**
3. **Feedback**
4. **Support**
5. **Retirement**

This article explores these feature lifecycle steps that follow the _release_ milestone.

## Marketing

After releasing a new feature, marketing teams typically announce the feature across various channels, such as their web site and social media.
Product managers typically have little involvement in post-release announcements, even if they helped prepare content before the release.

For major features, however, post-release marketing events may include product managers.
At webinars and conferences, they can present a story about the feature’s benefits.
Ideally, this includes a case study from a pre-release customer.
Released features may also generate white papers, which B2B marketing teams like to use to generate leads.

## Activation/rollout

Releasing a feature doesn’t guarantee that customers will use it, and complex or experimental features may require incremental rollout.
This spreads a feature release across weeks or months, overlapping with other feature rollouts, so product managers need to track each feature’s rollout plan and status.

Incremental rollout requires coordination with customer service teams.
It also includes tracking feedback from early-access customers.

## Feedback

Product managers track feedback on released features, together with product metrics, to assess the features’ success.
Feedback starts with customer support requests, but may also include surveys or in-app feedback that target specific recently-released features.

In practice, product managers might not find linking feedback to existing features convenient or worthwhile.
For products with large numbers of users, they will more likely do this with analytics that track feature usage.

## Support

All support requests provide feedback, in a way, but bugs differ by requiring a _resolution_.
Ideally, product managers can link bug reports to specific features, to help prioritise follow-on work.
This likely requires additional work, because most bug reports will not initially identify the buggy feature.

Product organisations that fail to attribute support requests to product features may miss the opportunity to systematically discover which features increase support costs.
Fortunately, they can also probably just ask anyone in customer support for the top ten.

## Retirement

Feature retirement, also called _sunsetting_, may require as much planning and management as adding a new feature.
In B2B, it may even require longer timescales, so that customers plan to change how they work.

Retirement revisits all of the previous steps, to manage the change in product capability.
It essentially via a new _negative feature_ that removes an existing feature.

## End-to-end feature management

Having never used a tool to track the entire feature lifecycle, I don’t know how much this would enable product operations.
For example, we might analyse feature performance measures, such as:

* adoption (daily active users)
* error rates
* support requests
* released improvements

My experience of managing the middle of the feature rollout process with a generic database (Notion) does suggest two opportunities:

1. consistently track features through their whole lifecycle, to enable performance analysis
2. provide a feature lifecycle model to guide product managers.

Perhaps end-to-end feature management will become the next big thing in product management tooling, that provides clarity to the chaos we usually experience.
