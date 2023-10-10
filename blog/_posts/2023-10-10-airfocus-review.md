---
title: "B2B SaaS review: Airfocus"
description: Flexible end-to-end product management
layout: hh
tags: product review
css: "article p:has(img) { margin:15px 0; } article img { border: 1px solid #ddd; } article a:hover img { box-shadow: 0 0 6px 2px #428bca; }"
image: airfocus/oppportunity-table.png
---

{:.series}
1. [Delibr](delibr-views)
2. [Qatalog](qatalog-review)
3. [Collato](collato-review)
3. [Cycle](cycle-review)
4. [Kitemaker](kitemaker-review)
5. [Orbit](orbit-review)
6. Airfocus ←

[Airfocus](https://airfocus.com) offers a platform for end-to-end product management work.
Unlike [Orbit](orbit-review)’s simple and focused experience,
Airfocus chooses flexibility, and offers product teams the same kind of data model configuration as
[Qatalog](qatalog-review), and the same kind of flexible hierarchy as
[Cycle](cycle-review).
This first look explores Airfocus’ main features.

## Product feedback

Starting with a _Feedback_ template gives you a workspace that manages product feedback.
This default [Inbox view](https://help.airfocus.com/en/articles/5550713-insights-app#h_79096043b4) 
shows a list of incoming feedback:

[![Product feedback inbox view](airfocus/feedback-inbox.webp)](airfocus/feedback-inbox.webp)

Each workspace manages a different kind of [unit of work](units-of-work), in this case _feedback_.
I love how you choose from
[a list of item types](https://help.airfocus.com/en/articles/5826904-setting-up-item-types) for each workspace,
instead of calling everything an _issue_ and have to use additional labels to indicate what that really means.

As well as the _Inbox_, this workspace template provides _By status_ and _Closed feedback_ views.
In each workspace, you can configure several
[different types of views](https://help.airfocus.com/en/articles/2788569-getting-started-with-views)
with different default filters.

As in other products, you can link each item of feedback to opportunities, via _Insights_.
Each insight links the feedback to an _opportunity_ item in another workspace.

## Opportunities

When you identify candidate opportunities as part of discovery work, you can use Airfocus to collect them in a list or hierarchy.
Each item type in Airfocus has its own set of fields, to which you can add custom fields.
For example, you can use a _status_ field to set an opportunity’s column on a board view, to make it a now/next/later roadmap.

[![Opportunity roadmap board view](airfocus/oppportunity-board.webp)](airfocus/oppportunity-board.webp)

This board view’s swim lanes and colour coding show _objective_ and _status_ fields.
You can also configure the view to show other field valueson each card, such as assignee avatars or labels.

[![Opportunities table view](airfocus/oppportunity-table.webp)](airfocus/oppportunity-table.webp)

This table shows the same opportunities in a table view, using the same objectives swim lanes and status colour coding as the board view.
As well as those and other _Display options_, you can search, sort and filter views on the fly.

The right-hand sidebar shows the selected opportunity, which you can also open in the centre of the viewport:

[![Opportunity details view](airfocus/oppportunity-details.webp)](airfocus/oppportunity-details.webp)

Unfortunately, you don’t get a full-page documentation editor, just a small _description_ field.
Note the _Child features_, which link this opportunity to items in the next workspace.

## Feature rollout

Having avoided dates on roadmaps, you might still want dates to plan feature rollout, as shown on the feature workspace’s timeline view:

[![Feature rollout timeline view](airfocus/feature-timeline.webp)](airfocus/feature-timeline.webp)

I added custom fields to this workspace, including _documentation_ (link), _marketing relevant_ (yes/no) and _rollout scope_ (limited/full).
Now I have a feature rollout plan for a customer success team, separate from the roadmap,
which links features to _Parent opportunities_:

[![Feature details view](airfocus/feature-details.webp)](airfocus/feature-details.webp)

I like how separate workspaces make it straightforward to configure permissions and share relevant information with different teams.

## Other capabilities

I also configured a workspace for developers’ work - user stories and bugs, but I probably woudn’t use it in practice.
Airfocus doesn’t integrate with source code version control, which developers find more important than linking their tasks to product managers’ roadmaps.

Airfocus does plenty more than this first look describes:
I didn’t try portals, prioritisation scores ([which I don’t like much](product-arithmetic)),
data import, integrations, extension apps, or the new objectives app.

Overall, I find Airfocus’ user interface straightforward and usable, and the best model I’ve seen so far for a flexible product management data model.
By comparison, Jira’s _issues_ and 
[ProductBoard’s features](productboard-product-backlog-review) don’t look good at all.
