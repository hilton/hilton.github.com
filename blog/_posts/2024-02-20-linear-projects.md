---
title: Linear teams and projects
description: Bridging project management tools and product management
layout: hh
tags: product design
css: "article p:has(img) { margin:15px 0; } body.writing article img { border: 1px solid #ddd; max-width:calc(100% - 3px) } article a:hover img { box-shadow: 0 0 6px 2px #428bca; }"
image: bridge.jpg
---

![](bridge.jpg)

[Lance Asper](https://unsplash.com/photos/tx3YTxZn6RA){:.photocredit}

{:.series}
1. [Tana daily pages](tana-daily-pages)
2. Linear projects ←

[Jira](https://www.atlassian.com/software/jira)
has become the definitive software project management tool during the last twenty years.
It organises and visualises development teams’ projects and tasks,
and embraced agile project management, and Scrum teams.

Software development methods have now moved on, and 
[_project_ management has given way](project-myopia-review) to _product_ management in many teams,
and in software startups in particular.
Project management tools’ rigidity causes friction for these teams.

## Modern tooling

[![Linear’s ‘My Issues’ list view](linear/issues.webp)](linear/issues.webp)

[Linear](https://linear.app/) (screenshot) offers a modern alternative to Jira.
Linear superficially resembles Jira, organising
[issues](https://linear.app/docs/conceptual-model#issues) 
with hyphen-separated alphanumeric identifiers like **BK-11**, into lists and boards.
However, when you actually use Linear, you discover a new quality focus:

* **simplicity** - no need to employ full-time ‘administrators’ for configuration
* **performance** - snappy user interface and fast navigation transitions
* **usability** - e.g. extensive keyboard control for expert users.

It turns out that Linear also supports flexible product development better than legacy project management tools.

## Stable projects

I started software development in an environment without stable teams:
a consultancy that formed teams to start projects, and disbanded teams when projects (customer contracts) ended.
In this context, **projects** provide the top-level organisation, just like a 
[Jira project](https://support.atlassian.com/jira-software-cloud/docs/what-is-a-jira-software-project/):

> A project is simply a collection of issues (stories, bugs, tasks, etc).
> You would typically use a project to represent the development work for a product, project, or service in Jira Software.

Organisations that prefer the benefits of stable teams, who work on a series of projects,
don’t align with this model.

## Stable teams

Linear organises work around [teams](https://linear.app/docs/conceptual-model#teams):

> Teams typically represent groups of people who work together frequently, though in some cases you may choose to structure teams as parts of a product.

Like Jira projects, Linear teams have members and no end date.
Equivalently, Jira issues belong to projects, while Linear issues belong to teams.

[![Linear’s ‘Teams’ list](linear/teams.webp)](linear/teams.webp)

Differences between ‘projects’ and ‘teams’ don’t really matter,
and the word _issue_ quickly loses its regular English meaning (as a synonym of _problem_).
Once you’ve used a tool like this for long enough, the terms only mean what they mean in the tool.
However, this does mean that in Linear, _project_ can mean something else.

## Short-lived projects

I was initially surprised to see Linear using _projects_ to manage work, given its initial focus on _product_ start-ups,
In project management, success means delivering on-time and within budget (typically for a single customer),
while product management defines success in terms of solving (multiple) customers’ problems.

[![Project planning within a team](linear/projects.webp)](linear/projects.webp)

It turns out that [Linear projects](https://linear.app/docs/conceptual-model#projects)
typically manage smaller chunks of work than the kind that needs a project manager:

> Projects group issues towards a specific, time-bound deliverable, like launching a new feature.

This more closely matches product delivery work on short- and medium-term goals,
with the only difference that product managers might call them _initiatives_, _features_ or _objectives_.
And unlike [Jira epics](https://www.atlassian.com/agile/project-management/epics),
Linear projects can span multiple cross-functional teams.

[![Projects on a roadmap](linear/roadmap.webp)](linear/roadmap.webp)

This means you can build a problem-based roadmap from multiple teams’ projects, 
and use them for planning.
This gets you close to a now/next/later roadmap.

## Flexible product delivery

Linear offers a smooth migration path from Jira, both for your data, and conceptually.
Despite this, Linear works more like other modern product management tools,
such as [Kitemaker](kitemaker-review) than a project management tool.
And with these new tools, teams have fewer excuses for not exploring
[new product development methods](extreme-product).
