---
title: "B2B SaaS review: Airfocus"
description: Flexible end-to-end product management
layout: hh
tags: product review
css: "article p:has(img) { margin:15px 0; } article img { border: 1px solid #ddd; } article a:hover img { box-shadow: 0 0 6px 2px #428bca; }"
---

[Airfocus](https://airfocus.com) offers a platform for end-to-end product management work.
While [Orbit](orbit-review), for example, provides a simple and focused experience,
Airfocus chooses flexibility instead, and offers product teams the kind of data model configuration that
[Qatalog](qatalog-review) has.
This first look at the product explores the main features.

## Product feedback

In Airfocus, each workspace manages one kind of [unit of work](units-of-work), generically called an _item_. 
Starting with a _Feedback_ template, gives you a workspace that manages _feedback_ items.
I love how you choose from
[a list of item types](https://help.airfocus.com/en/articles/5826904-setting-up-item-types) for each workspace,
instead of calling everything an _issue_ and using additional labels to indicate what that really means.

[![Product feedback inbox view](airfocus/feedback-inbox.webp)](airfocus/feedback-inbox.webp)

In each workspace, you configure
[different types of views](https://help.airfocus.com/en/articles/2788569-getting-started-with-views), such as this 
[Inbox view](https://help.airfocus.com/en/articles/5550713-insights-app#h_79096043b4) for incoming feedback.
You can sort and filter views, or define multiple views with different default filters.

As in other products, you can link each item of feedback to opportunities, via _Insights_.
Each insight links the feedback to an opportunity item in another workspace.

## Opportunities

When you identify candidate opportunities as part of discovery work, you can use Airfocus to collect them in a list or hierarchy.
Each item type in Airfocus has its own set of fields, to which you can add custom fields.
For example, you can use a status field to set an opportunity’s position on a board view, that becomes a now/next/later roadmap.

[![Opportunity roadmap board view](airfocus/oppportunity-board.webp)](airfocus/oppportunity-board.webp)

Opportunities have _objective_ and _status_ fields, used here for the board view’s swim lanes and colour coding.
Views also give you a lot of flexibility to configure which fields they show, in addition to their title and colour coding.
For example, you could also show assignee avatars and labels on each card on the board.

[![Opportunities table view](airfocus/oppportunity-table.webp)](airfocus/oppportunity-table.webp)

This table shows the same opportunities in a table view, using the same objectives swim lanes and status colour coding as the board view.
The right-hand sidebar shows the selected opportunity, which you can also open in the centre of the viewport (although not full-screen).

[![Opportunity details view](airfocus/oppportunity-details.webp)](airfocus/oppportunity-details.webp)

Unfortunately, you don’t get a full-page editor for documentation, just the small rich text text _description_ field.
However, you do get the ability to configure workspaces to link together in a hierarchy, as in this example where each opportunity can have child _features_.

## Feature rollout

While product management sometimes feels like the art of avoiding dates on roadmaps, you might want dates to plan feature rollout.
I configured my features workspace with some additional fields, such as _documentation_ (link), _marketing relevant_ (yes/no) and _rollout scope_ (limited or full rollout).
This gives me the following release plan timeline view.

[![Feature rollout timeline view](airfocus/feature-timeline.webp)](airfocus/feature-timeline.webp)

Each feature now has a completely different set of data to the opportunities, relevant for a different audience, while linking each feature to its parent opportunity:

[![Feature details view](airfocus/feature-details.webp)](airfocus/feature-details.webp)

Now I have a feature rollout plan I can keep separate from the strategic roadmap, and share with a customer success team.
I like how the separate workspaces make it straightforward to configure permissions and share different information with different people.

## Other capabilities

I also configured a workspace for developers’ work, e.g. features’ user stories and bugs.
However, Airfocus doesn’t integrate with source code via version control, which developers find more important than linking to product managers’ feature rollout plans and product roadmaps.

Airfocus has a lot more to play with than this first look has room for, meanwhile.
I didn’t look at portals, prioritisation scores, [which I don’t like much](product-arithmetic),
data import, integrations, extension apps, or the beta objectives app.

Overall, I find Airfocus’ user interface straightforward and usable, and the best model I’ve seen so far for a flexible product management data model.
By comparison, it just looks bad that Jira only has _issues_ and 
[ProductBoard only has features](productboard-product-backlog-review).
