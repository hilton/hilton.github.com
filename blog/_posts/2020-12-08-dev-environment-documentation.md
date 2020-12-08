---
title: Development environment documentation
description: Essential software product documentation for the development team
layout: hh
tags: product documentation
image: sign-this-way.jpg
---

![Sign giving directions](sign-this-way.jpg)

<a class="unsplash" href="https://unsplash.com/photos/6gQjPGx1uQw" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Jamie Templeton</span></a>

A software development team needs ‘development environment set-up guide’ documentation.
A good team keeps it short.

## Write a development environment set-up guide 

Whatever software development method you use, a product development team needs a written guide to setting up a development environment for a new team member.
A new team member needs step-by-step instructions for getting the source code, running tests, building the application, and running the application on a new workstation. 

You can explain anything verbally, without documentation, but in practice no-one memorises every detail: 
URLs, file paths, customisable settings and the like.
Writing these details down makes life easier.

Ideally, you minimise the required set-up by automating the development environment, and the build in particular.
However, even if you do this, you still need to know how to get the source code and run that build, as well as perform other tasks.
Besides, you probably didn’t actually automate _everything_. 

## Write documentation for new team members 

In theory, a development team might not need any documentation: they know how to build and release software, and plan development using user stories.
Of course, in theory the team never changes either. 

In practice, team members will come and go.
A short-term project may start and finish with the same team, but software tends to get extended, and someone else will have to pick-up maintenance or further development later on.
Alternatively, during long-term product development, if each developer stays on the team for a year you’ll end up with a team member rotation every couple of months.

Changing the development team disrupts development: time spent on handover, and differences between developers, breaks velocity calculations.
As well as reducing productivity, this makes estimates less reliable and reduces predictability.
To some degree, you can address this with documentation. 

## Save time and spread team rotation cost

You get two benefits from writing documentation for new team members to use during their first weeks on the team:

1. save time - it takes less time to write development environment documentation than to figure it out 
2. spread the cost of team member changes - reduce the impact on existing team members. 

Documenting a development environment requires less skill than, say, capturing product requirements in writing, so this doesn’t take long.
Figuring it out without documentation takes a lot longer. 

Without documentation, not only does a new team member takes longer to get up and running: 
an existing team member has to spend time helping them.
Team members can write documentation in slack time on previous sprints. 

## Put it in the README

However little documentation software developers tell you they need for themselves, they at least need a
[README](https://en.wikipedia.org/wiki/README) to bootstrap new team members’ knowledge.
Include development environment documentation in that README.
