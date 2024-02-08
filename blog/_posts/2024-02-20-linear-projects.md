---
title: Linear teams and projects
description: Bridging project management tools and product management
layout: hh
tags: product design
css: "article img {width:640px; border: 1px solid #ddd}"
image: bridge.jpg
---

![](bridge.jpg)

[Lance Asper](https://unsplash.com/photos/tx3YTxZn6RA){:.photocredit}

[Jira](https://www.atlassian.com/software/jira)
has become the definitive software project management tool over the last twenty years.
It organises and visualises development teams’ projects and tasks,
and has embraced agile project management, and Scrum teams.

Software development methods have moved on,
and _project_ management has given way to _product_ management,
especially in software startups.
Project management tools’ rigidity causes friction, for teams in these companies.

## Modern tooling

![Linear’s ‘My Issues’ list view](linear/issues.webp)

[Linear](https://linear.app/) offers a modern alternative to Jira,
which it superficially resembles.
Like Jira, Linear organises [issues](https://linear.app/docs/conceptual-model#issues), 
with hyphen-separated alphanumeric identifiers, in lists and on boards.
However, when you actually use Linear, you discover its focus on quality:

* **simplicity** - no need to employ full-time ‘administrators’ for configuration
* **performance** - snappy user interface and fast navigation transitions
* **usability**, e.g. extensive keyboard control for expert users.

It turns out that Linear also supports flexible product development better than project management tools.

## Stable projects

I started software development in an environment without stable teams:
a consultancy that formed teams to start projects, and disbanded teams when projects (customer contracts) ended.
In this context, projects provide the top-level organisation, just like a 
[Jira project](https://support.atlassian.com/jira-software-cloud/docs/what-is-a-jira-software-project/):

> A project is simply a collection of issues (stories, bugs, tasks, etc).
> You would typically use a project to represent the development work for a product, project, or service in Jira Software.

Organisations that prefer the benefits of stable teams, that work on a series of projects,
don’t align with this model.

## Stable teams

![Linear’s ‘Teams’ list](linear/teams.webp)


Linear organises work around [teams](https://linear.app/docs/conceptual-model#teams):

> Teams typically represent groups of people who work together frequently, though in some cases you may choose to structure teams as parts of a product.

Like Jira projects, Linear teams have members and no end date.
Equivalently, but more technically, Jira issues belong to projects, while Linear issues belong to teams.

In one sense, this different doesn’t matter: once you’ve used a tool like this for long enough,
the terms only mean what they mean in the tool.
For example, if you use either tool daily for a year, the word _issue_ loses its regular English meaning (as a synonym of _problem_), leaving only _a thing in the tool_.
However, this does mean that in Linear, _project_ can mean something else.

## Short-lived projects

As a product manager, I was initially surprised to see a modern tool like Linear using _projects_ to manage work,
because project management has different goals to product management.
In project management, success means delivering on-time and within budget (typically for a single customer),
while product management defines success in a different business context, focused on solving (multiple customers’) problems.

![Project planning within a team](linear/projects.webp)


It turns out that [Linear projects](https://linear.app/docs/conceptual-model#projects)
typically manage smaller chunks of work than what project managers apply themselves to:

> Projects group issues towards a specific, time-bound deliverable, like launching a new feature.

This more closely matches product delivery work on short- and medium-term goals,
with the only difference that product managers might call them _features_ or _objectives_.
Unlike [Jira epics](https://www.atlassian.com/agile/project-management/epics),
Linear projects can span multiple teams, which you need for cross-functional work.

![Projects on a roadmap](linear/roadmap.webp)


This means you can build a problem-based roadmap from multiple teams’ projects, 
and use them for planning.
This gets you pretty close to a now/next/later roadmap.

## Product delivery

Despite its smooth migration path from Jira,
Linear works more like a modern product management tool like
[Kitemaker](kitemaker-review) than a project management tool.
