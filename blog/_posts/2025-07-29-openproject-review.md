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
[![A project’s work packages – opportunities and tasks](openproject/work-packages.webp)](openproject/work-packages.webp)

Each work package has a type, e.g. _task_ or _opportunity_, a rich text description, various metadata, and
[relations](https://www.openproject.org/docs/user-guide/work-packages/work-package-relations-hierarchies/)
with other work packages:

{:.screenshot}
[![A work package, representing a product improvement opportunity](openproject/work-package.webp)](openproject/work-package.webp)

As well as links to other work packages, the sidebar shows an activity feed, attached files, notification _watchers_, and linked meetings.
For software projects,
[GitHub integration](https://www.openproject.org/docs/system-admin-guide/integrations/github-integration/)
or [GitLab integration](https://www.openproject.org/docs/system-admin-guide/integrations/gitlab-integration/)
lists related pull requests or merge requests, respectively.


## Roadmap

I don’t do classic project management, so I tried using OpenProject as product management platform.
I replaced Gantt charts and backlogs with a lean roadmap and a basic Kanban board.
The roadmap uses a
[basic board](https://www.openproject.org/docs/user-guide/agile-boards/#basic-board-community-edition),
which shows work packages that you select and position manually:

{:.screenshot}
[![Using a basic board for a now/next/later roadmap](openproject/board-roadmap.webp)](openproject/board-roadmap.webp)

The board works well enough, although I don’t particularly like the visual and UX design.


## Development

A conventional
[status board](https://www.openproject.org/docs/user-guide/agile-boards/#status-board)
supports development, whose columns linked to three statuses: _Confirmed_, _In progress_, and _Developed_.

{:.screenshot}
[![Using a status board for software development tasks](openproject/board-tasks.webp)](openproject/board-tasks.webp)
￼

I liked showing fewer statuses on the board, to match a simplified development process.

## Project activity

As a product manager, I rely on automated updates to avoid having to interrupt developers,
especially for work package status changes.
OpenProject provides
[notifications](https://www.openproject.org/docs/user-guide/notifications/)
via email notifications, in-app, and
[Slack](https://www.openproject.org/docs/system-admin-guide/integrations/#slack),
and also shows a project activity feed:

{:.screenshot}
[![A project’s activity feed](openproject/activity.webp)](openproject/activity.webp)
￼

Together, these capabilities help [make the work visible](management-information).

## Simplification

Using OpenProject for [simplified product work](simplify-product-work) tested its flexibility.
Fortunately, I found many places to reduce complexity.

I added a simplified _opportunity_ work package type to the global configuration,
and removed the date/time/cost attributes from existing types.
I also simplified the
[work package statuses](https://www.openproject.org/docs/system-admin-guide/manage-work-packages/work-package-status/)
and their
[workflow transitions](https://www.openproject.org/docs/system-admin-guide/manage-work-packages/work-package-workflows/).

{:.screenshot}
[![Editing work package types in the administration section](openproject/administration-types.webp)](openproject/administration-types.webp)
￼

In _Project settings_, I disabled unused
[modules](https://www.openproject.org/docs/user-guide/#overview-of-modules-in-openproject):
backlogs, budgets, calendars, documents, forums, Gantt charts, news, team planners, time and costs

{:.screenshot}
[![Configuring which modules a project uses](openproject/project-settings-modules.webp)](openproject/project-settings-modules.webp)
￼

I like how this modular approach allows me to hide complexity.
For work packages, I also like that I can customise the data model by replacing default fields with custom fields.

## Other modules

OpenProject lacks a product feedback database module, but the
[meetings](https://www.openproject.org/docs/user-guide/meetings/)
module would help plan and manage customer interviews,
with links to related opportunities.

The [wiki](https://www.openproject.org/docs/user-guide/wiki/) module supports project-level documentation.
Unfortunately, an _Edit_ button and a small text editor box now feels old-fashioned,
compared to something like [Nuclino](nuclino-review), [Anytype](anytype-review), or Notion.

Depending on your situation, the
[project news](https://www.openproject.org/docs/user-guide/news/) and
[calendar](https://www.openproject.org/docs/user-guide/calendar/) and
[forums](https://www.openproject.org/docs/user-guide/forums/) modules might help support feature rollout.
However, I didn’t test these.

## Conclusion

OpenProject works, but deserves a less messy user-interface design, and smoother user experience.
However, URL-addressable pages place it ahead of many products,
with URL paths like `/projects/bookshelf/work_packages/42/activity`, and short links like `/wp/42`.

OpenProject would suit a large organisation with many projects,
but would have to carefully plan how much project configuration variation to support.
Meanwhile, for simplified product management, OpenProject would work, but I’d prefer a simpler tool.
