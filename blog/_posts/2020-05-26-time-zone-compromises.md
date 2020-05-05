---
title: "Time zone compromises"
description: Winning against time zones by not actually fighting
layout: hh
tags: product
image: calendar-advanced-options-2x.png
---

Time zones live in a deep rabbit hole that none of us want to (or should) go all the way down.
Product designers who do discover so much complexity that no software ever completely _solves_ them.
Instead, we choose which compromises to make.
Indeed, total support for time zones would be one kind of compromise:
a product that’s too complex for all but specialists.

## Design decisions and feature toggles

Apple’s macOS [Calendar](https://en.wikipedia.org/wiki/Calendar_(Apple)) 
application supports and acknowledges time zone support as an _advanced_ capability that should be turned off by default.
This demonstrates the technical using the word ‘advanced’ to scare off all but the most foolhardy users.

<img src="calendar-advanced-options.png" srcset="calendar-advanced-options-2x.png 2x" alt="macOS Calendar advanced preferences">

Historically, a difference between Apple and Microsoft software has been the number of application _preferences_ (Apple) a.k.a. _options_ or _settings_ (Microsoft).
Microsoft Word famously introduced so many tabs on the options dialogue that they had to add more rows of tabs.

![Microsoft Word options dialogue box](microsoft-word-options.png)

Meanwhile, Apple software tends towards the view that every application preference represents a failure to make a design decision, and instead leave it up to the user.
While the preference for whether to ‘open events in separate windows’ only affects one detail of the user experience, whether to use time zones concerns a high-level product capability.

## Shipping industry convention

The global shipping industry tends to make a different compromise, which can be made to work: all times are local times, so when UPS says a package was delivered at 9 am in San Francisco, they mean 09:00 PST.
International commercial shipping started thousands of years ago, while international time zones came into use in the late nineteenth century, so perhaps shipping stuck with the legacy system.

Using local time has the advantage that you can ignore time zones most of the time, but does mean that all times must be specified with a location.
You need to specify locations anyway to ship things there, so you might not expect that to be a problem.
However, it starts to get complex when you try to precisely define _location_.

## Abolishing time zones

People who fight time zone complexity and lose sometimes wonder whether we really need them.
After all, the world has changed a lot since the nineteenth century, and globalisation goes with 24-hour operations in many areas.
In [James Gleick’s New York Times opinion piece](https://www.nytimes.com/2016/11/06/opinion/sunday/time-to-dump-time-zones.html) about why time zones’ time is up, he makes the same point:

> The human relationship with time changed substantially with the arrival of modernity - 
> trains and telegraphs and wristwatches all around - 
> and we can see it changing yet again in our globally networked era.
> We should synchronize our watches for real.

However, I can’t help that as a science historian, Gleick intended to propose a thought experiment, rather than _actually abolishing time zones._ 
And if you do start liking the idea, you should probably also read this:
[So You Want To Abolish Time Zones](https://qntm.org/abolish).