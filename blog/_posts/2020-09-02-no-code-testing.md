---
title: No-code and no testing environments
description: Testing no-code automation presents a hard problem
layout: hh
tags: NoCode
image: coffee-tasting.jpg
---

![Testing/tasting coffee](coffee-tasting.jpg)

<a class="unsplash" href="https://unsplash.com/photos/i22gbC3gFm4" rel="noopener noreferrer" title="Photo by Battlecreek Coffee Roasters"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Battlecreek Coffee Roasters</span></a>

When I talk to people about no-code automation tools, they sometimes complain that they don’t get a ‘test environment’.
They want to automate something, and then make changes that they can test to make sure they didn’t break the automation.

Some automation tools provide a sandbox where you can try changes that don’t affect what other people see.
Without a test environment, you end up doing what software developers call ‘testing in production’ (typically accompanied by nervous laughter):
testing a new version by forcing it on everyone.

## Test environments as social construct

Few no-code tools have any kind of testing environment.
[Atlassian Jira](https://www.atlassian.com/software/jira) doesn’t give you a way to test its workflows, for example, despite its origins as a developer-focused tool that launched back in 2002.
[Software testing](https://en.wikipedia.org/wiki/Software_testing), 
meanwhile, dates from decades earlier.

In the past, software testing approaches never actually had tool support for test environments.
Instead, software testers created conventions for manual testing, building procedures around running separate software installations, and using version control to keep track.
‘Test environments’ only existed by convention, until the recent shift towards 
[test automation](https://en.wikipedia.org/wiki/Test_automation), 
[continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery),
and the accompanying tool support.
Meanwhile, modern test environments still rely on old-fashioned file-based version control.

## Legacy version control

Version control tools’ user experience has changed little during recent decades, and remains appallingly bad.
Tellingly, the creator of [git](https://en.wikipedia.org/wiki/Git), 
the current dominant version control tool among programmers, famously doesn’t care about user experience, and even named it after the
[British English slang word for that kind of person](https://en.wiktionary.org/wiki/git#Noun).

Conventional software testing tools illustrate the idea that
[no-code tools must innovate in user experience](https://hilton.org.uk/blog/no-code-innovation).
Meanwhile, no-code version control also shows us that a usable alternative may look different.

## Cutting edge version control

Event-based multi-user version control probably represents the current state of the art in no-code version control.
[Google Sheets](https://en.wikipedia.org/wiki/Google_Sheets),
for example, uses neither files nor explicitly saved versions.
Incidentally, the automatically-created versions may represent a more significant version management innovation than not using files, by dodging a version naming problem as well as the difficulty of teaching people to adopt a new manual versioning habit.

Even an automatic version history typically doesn’t give you more than the option to compare versions and roll back to earlier versions.
This doesn’t give you a test environment, though.
That would still require a way to create and test a _draft version_ that other people can’t see.

## Test versions

No-code tools that have the ability to create and test artefacts in isolation remain rare,
and possibly limited to enterprise software that has ‘achieved’ no-code testing by using traditional approaches at the cost of traditional (high) levels of complexity and (low) usability.
(That trade-off may provide the best definition of _enterprise software_ yet.)

This doesn’t mean that no-code tools will never get auditable version-controlled ‘releases’, but we don’t yet have a common model for how that would work.
At best, individual vendors will innovate by adding this functionality, at the cost of designing from scratch and providing features that their users have never seen before.
