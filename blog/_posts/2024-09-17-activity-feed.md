---
title: Build a team activity feed
description: use tool integration to automate working out loud
layout: hh
tags: remote collaboration
image: mailboxes.jpg
---

![](mailboxes.jpg)

[Philippe Murray-Pietsch](https://unsplash.com/photos/xiqCrk6LvTg){:.photocredit}

{:.series}
1. [Management information](management-information)
2. [Working out loud](work-out-loud)
3. [Collaboration opportunities](collaboration-opportunities)
4. Activity feeds ←
5. [Activity feed design](activity-feed-design)
6. Information pages

Teams that make their work visible find it easier to collaborate,
without needing micromanagement to resolve missing
[management information](management-information).
However, [working out loud](work-out-loud) requires discipline and effort,
and [collaboration tools don’t help](collaboration-opportunities).
Instead, you can build your own solution.

## Goal and activity focus

Teams evolve different rituals for connecting with each other.
[Stand-up meetings](https://en.wikipedia.org/wiki/Stand-up_meeting)
emerged as a reaction to the cost and waste of long weekly status meetings,
and succeeded well enough to themselves become the costly alternative.
Meanwhile, more casual teams meet each morning at the coffee machine (or equivalent),
and ask about people they don’t see there.

Working remote makes it especially relevant to ask _Where can I find everyone?_
In office-based work, we sometimes mistake this for a question about _actual location_,
but that doesn’t really matter.

Instead, you need to know whether other team members will work on the same thing as you today,
and whether you should work together.
You need to discover where their focus lies, and check in on their short-term goals.

## Collaboration tool activity feeds

Sometimes, you don’t need to see people, because you can see their _work_.
Sometimes, [collaboration tools make other people’s work visible](collaboration-opportunities).
This works on a team when:

1. everyone uses a single collaboration tool
2. content in the tool represents interesting [units of work](units-of-work)
3. the tool has an activity feed that shows this work.

Outside some narrowly-focused teams, the work spans several tools that lack this visibility.
To compensate, the team has to [work out loud](work-out-loud).
Fortunately, you can automate that.

## Build an activity feed

When your tools don’t give you a team activity feed, you can build one.
This typically requires three things:

1. a team-based message channel where everyone already works out loud
2. integration with other tools that automatically post activity in that channel
3. a way to separate a potentially high-volume of tool activity from conversations.

[Slack](https://en.wikipedia.org/wiki/Slack_(software))
provides many teams with a popular solution to all three ingredients.
For example, team chat in `#blue-team`,
and built-in Slack integration other tools that post in `#blue-team-activity`.

In practice, using a tool’s API to integrate with the Slack API doesn’t solve the integration.
API integration raises a significant barrier, and few teams will have skills and infrastructure,
and want to spend the time for a collaboration problem.

## Case management

When it works, a team activity feed creates a kind of
[digital twin](https://en.wikipedia.org/wiki/Digital_twin) of team activity.
This works especially well when integrated with tool workflows and business processes
that have recognisable statuses and milestones.

[Case management](https://en.wikipedia.org/wiki/Advanced_case_management)
makes this explicit, by modelling the unit of work as a _case_, such as:

* an insurance claim, or other customer support request
* a hospital visit, holiday, or other literal journey
* a legal/court case.

When you assign each case to a person, a list of who has achieved which milestone becomes an activity feed.
Even if you skip the business process modelling and case management approach,
you can still use these ideas to plan and structure a team activity feed.

For example, the [software feature lifecycle](feature-lifecycle)
corresponds to a software product development workflow.
You can use these lifecycle stages, for example,
to identify which team activities to include in the feed.
