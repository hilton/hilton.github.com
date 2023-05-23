---
title: Team collaboration commoditisation
description: No-code automation platform Next Matter’s built-in feedback and tasks
layout: hh
tags: NoCode product
css: "article img { border: 1px solid #ddd; } article a:hover img { box-shadow: 0 0 6px 2px #428bca; }"
image: next-matter/builder-note.png
---

[No-code workflow commoditisation](workflow-commoditisation)
has seen various business software provide basic built-in no-code workflow capabilities,
potentially reducing the need for a dedicated workflow platform.
This opportunity to combine tools works both ways.

[Next Matter](https://www.nextmatter.com) automates operations team processes,
with a rich set of no-code automation capabilities.
Unlike other similar no-code automation platforms, it also provides collaboration capabilities for planning and keeping track of building work.
While building and testing automated processes, builders can gather and respond to feedback within the platform.
This _team collaboration commoditisation_ potentially reduces the need for a separate task/issue management tool.

## Collecting feedback

Instead of using a separate tool to provide feedback on deployed processes, end users can share feedback in
[action instance conversations](https://help.nextmatter.com/docs/learn-next-matter-as-process-participant#conversations).

[![Instance conversation screenshot, showing a question marked as ‘completed’](next-matter/conversation.webp)](next-matter/conversation.webp)

Conversations in Next Matter offer fewer capabilities than the kind of bug tracker that software developers use.
At the same time, they benefit from their built-in reference to a specific process instance, which provides context that would require manual entry in an external bug tracker.

## Building

In the same way that end users can give feedback when running processes, instead of using a separate tool, builder team members can use 
[builder notes](https://help.nextmatter.com/docs/add-notes-to-process)
to report issues with processes during their development.
Builders can mark builder notes as ‘completed’, in the same way as they mark conversation comments complete, like tasks in an issue tracker.

[![Builder note screenshot, showing a reply to ‘must have’ feedback](next-matter/builder-note.webp)](next-matter/builder-note.webp)

Team members can assign process-level tasks and issues to each other, and can also add builder notes to specific process steps.
Compared to how you would use a separate issue tracker, this avoids the difficulty of referring unambiguously to a specific part of a process in a development task or bug report.

## Tracking cases

As in other workflow platforms, task/case management functionality allows teams to track process execution.
This doesn’t have anything to do with roadmaps, or collaboration on building tasks, but does feature a Kanban-style board view.
The [stages board](https://help.nextmatter.com/docs/learn-next-matter-as-process-participant#stages-board)
shows a column for each of _stage_ defined in the process.

[![Stages board screenshot, showing instances at the ‘Ordering’ and ‘Delivery’ stages](next-matter/stages-board.webp)](next-matter/stages-board.webp)

Conceptually, these stages resemble process milestones modelled as
[BPMN intermediate events](https://www.signavio.com/post/process-milestones/).
However, while process comments (builder notes) mirror process instance comments  (conversations),
Next Matter doesn’t yet have a process build status board that mirrors this process _execution_ status.

## Planning

Despite the lack of a now/next/later roadmap view in Next Matter, you can plan processes’ _go-live_ dates.
The dashboard’s _Roadmap_ section then uses these dates to count and list processes with upcoming release dates.

[![Dashboard screenshot, showing a roadmap summary](next-matter/dashboard.webp)](next-matter/dashboard.webp)

The full roadmap view shows more detail about planned process deployments, with dates, statuses, and outstanding builder notes.
By focusing on information specific to building process automation in Next Matter, this avoids both the complexity of general purpose issue trackers, and the need to customise fields.

[![Roadmap screenshot](next-matter/roadmap.webp)](next-matter/roadmap.webp)

The option to create and [tag processes](https://help.nextmatter.com/docs/use-tags-for-better-filtering)
before actually building them, presumably allows teams to collaborate on explicit process planning, without necessarily using a separate planning tool.
After all, process automation generally improves visibility of what people work on, and this can also include process automation work itself.

## Consequences

Business software with built-in workflow offers simpler and fewer capabilities than a dedicated automation platform, but benefits from being able to offer a less abstract user experience.
Similarly, Next Matter offers simple planning and task management capabilities, compared to a dedicated project management tool, but also doesn’t require a general purpose tool’s complexity.
