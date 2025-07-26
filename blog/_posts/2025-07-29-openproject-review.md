---
title: "B2B SaaS review: OpenProject"
description: a modular European Jira alternative
layout: hh
tags: product review
image: openproject/board-roadmap.png
---

[OpenProject](https://www.openproject.org/) offers a
[European alternative](https://european-alternatives.eu/) to
[Jira](https://www.atlassian.com/jira), and other project management tools.
I hadn’t heard of OpenProject before, so discovering a highly-configurable mature tool surprised me.

## Project management

OpenProject adopts a classic project management focus on tasks, assignees and date-based project planning.
OpenProject doesn’t specifically target software development projects, and includes
[building information modelling](https://en.wikipedia.org/wiki/Building_information_modeling)
support, for the construction industry.

In this approach, a project has a hierarchical
[work breakdown structure](https://en.wikipedia.org/wiki/Work_breakdown_structure)
that consists of various types of
[work package](https://en.wikipedia.org/wiki/Work_breakdown_structure#Work_package).
I like how you can choose how much complexity the hierarchy has,
by designing your own work package types, corresponding to different [units of work](units-of-work).

{:.screenshot}
![A project’s work packages – opportunities and tasks](openproject/work-packages.webp)

Each work package has a type, e.g. _task_ or _opportunity_, a rich text description, various metadata, and
[relations](https://www.openproject.org/docs/user-guide/work-packages/work-package-relations-hierarchies/)
with other work packages:

{:.screenshot}
![A work package, representing a product improvement opportunity](openproject/work-package.webp)

As well as links to other work packages, the sidebar shows an activity feed, attached files, notification _watchers_, and linked meetings.
For software projects,
[GitHub integration](https://www.openproject.org/docs/system-admin-guide/integrations/github-integration/)
or [GitLab integration](https://www.openproject.org/docs/system-admin-guide/integrations/gitlab-integration/)
lists related pull requests or merge requests, respectively.


## Roadmap

As a software product manager, classic project management doesn’t interest me much,
so I tried using OpenProject the way I would use a modern product management platform.
To do this, a lean roadmap and a small Kanban board replace Gantt charts and backlogs.

First, I used the [boards module](https://www.openproject.org/docs/user-guide/agile-boards/)
for a now/next/later roadmap, instead of configuring a project lifecycle, or using work package _version_ attributes.
Instead, the [basic board](https://www.openproject.org/docs/user-guide/agile-boards/#basic-board-community-edition)
shows a work packages that you select and position manually:

{:.screenshot}
![Using a basic board for a now/next/later roadmap](openproject/board-roadmap.webp)

The board works well enough, although I don’t particularly like the visual and UX design.


## Development

For development work, I created a more conventional
[status board](https://www.openproject.org/docs/user-guide/agile-boards/#status-board),
whose columns link to showing three selected statuses: _Confirmed_, _In progress_, and _Developed_.

{:.screenshot}
![Using a status board for software development tasks](openproject/board-tasks.webp)

I liked choosing which statuses to show on the board, instead of all of them,
as this simplifies the development proces.

## Project activity

As a product manager, I rely on automated updates to avoid having to interrupt developers,
especially for work package status changes.
OpenProject provides
[notifications](https://www.openproject.org/docs/user-guide/notifications/)
via email notifications, in-app, and also shows a project activity feed:

{:.screenshot}
![A project’s activity feed](openproject/activity.webp)

Also, a community-built
[Slack integration](https://www.openproject.org/docs/system-admin-guide/integrations/#slack)
also pushes work package updates to a Slack channel.
Together, these capabilities help [make the work visible](management-information).

## Simplification

Using OpenProject for [simplified product work](simplify-product-work)
tested the flexibility of OpenProject’s configuration.
Fortunately, both the global administration configuration and project settings allowed me to reduce complexity.

First, I added a simplified _opportunity_ work package type to the global configuration,
and removed the date/time/cost attributes from the _opportunity_ and _task_ types.
I also simplified the
[work package status configuration](https://www.openproject.org/docs/system-admin-guide/manage-work-packages/work-package-status/)
and edited the
[work package workflow configuration](https://www.openproject.org/docs/system-admin-guide/manage-work-packages/work-package-workflows/)
to allow transitions between all statuses.

{:.screenshot}
![Editing work package types in the administration section](openproject/administration-types.webp)

Then, in _Project settings_, I disabled unused
[modules](https://www.openproject.org/docs/user-guide/#overview-of-modules-in-openproject):
backlogs, budgets, calendars, documents, forums, Gantt charts, news, team planners, time and costs

{:.screenshot}
![Configuring which modules a project uses](openproject/project-settings-modules.webp)

I like how this modular approach allows me to hide the complexity of functionality I don’t need.
Similarly, at the work package level, I like that I can remove default fields and add custom fields to customise the data model.

## Other modules

While OpenProject doesn’t offer a product feedback database module, the
[meetings](https://www.openproject.org/docs/user-guide/meetings/)
module offers a way to plan and manage customer interviews,
with links to related opportunities (work packages).

The [wiki](https://www.openproject.org/docs/user-guide/wiki/) module supports project-level documentation.
Unfortunately, an _Edit_ button and a small text editor box now feels old-fashioned,
compared to something like [Nuclino](nuclino-review), [Anytype](anytype-review), or Notion.

Depending on your situation, the
[project news](https://www.openproject.org/docs/user-guide/news/) and
[calendar](https://www.openproject.org/docs/user-guide/calendar/) and
[forums](https://www.openproject.org/docs/user-guide/forums/) modules might help support feature rollout.
However, I didn’t test these.

## Conclusion

Having suffered too many single-page apps, I appreciate having URL-addressable work packages,
with a URL path like `/projects/bookshelf/work_packages/42/activity`,
plus a corresponding short link `/wp/42`.
I’d like to see a less messy user-interface design, though, and smoother user experience.

OpenProject would certainly suit a large organisation that manages many projects,
but would have to carefully plan how much project configuration variation to support.
Meanwhile, for my simplified product management use case, OpenProject would work,
but I’d prefer to have a simpler tool.
