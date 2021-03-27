---
title: Flow charts and pseudocode
description: Why non-executable process models don’t work
layout: hh
tags: NoCode
image: flow-chart.jpg
---

![A flow chart](flow-chart.jpg)

<a class="unsplash" href="https://unsplash.com/photos/elHKkgom1VU" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Sigmund</span></a>

Traditional programmers sometimes use 
[pseudocode](https://en.wikipedia.org/wiki/Pseudocode) to collaborate.
Pseudocode looks like code but works like a sketch that illustrates a rough idea without worrying about details, or using precise or standard syntax.
Crucially, pseudocode communicates something to other people, but remains meaningless to computers.

‘Normal’ code differs in that computers _can_ interpret it, as well as people. 
The art of programming lies in part in satisfying these two audiences at the same time.

## Flow charts

Business people sometimes draw box-and-arrow diagrams to collaborate, perhaps to discuss a business process, or document one for other people to follow.
They might sketch informal whiteboard or napkin diagrams drawings that literally only use boxes and arrows, without precisely defining their meaning.
And some of them draw flow charts or process diagrams whose symbols have precise definitions.

As collaborative sketches with varying degrees of precision, flow charts have a lot in common with pseudocode.
But business flow charts and pseudocode have one big difference.

## Execution

Business people can’t generally ‘execute’ their models.
Instead, they treat them as diagrams and use them for visual communication, to share ideas with other people.
Meanwhile, it turns out that programmers don’t actually use pseudocode much, because even though computers execute ‘normal’ code, you can only maintain code that other people can understand.

Business people miss out by using diagrams that you can’t ‘run’.
However much value you get from talking about something, the _proof of the pudding is in the eating_.
That proverb uses the older meaning of _proof_ to mean _test_ (as does _the exception proves the rule_), and running diagrams and code delivers the most immediate value from testing.

## Testing

When we test things, we sometimes primarily want to find out what they do, so we can figure out what we want.
In theory, testing verifies ‘correctness’, but only if you define that correctness.
Most of the time, we find it easier to observe how something behaves and then decide whether it looks right.

Programmers focus on making feedback loops shorter and iterating, to find out more and faster.
In programming, testing starts with checking small steps.
Business people with diagrams miss out on this opportunity for early testing and rapid feedback.

## No-code

Business people who want to test their models benefit from a no-code platform that actually does something with those models.
No-code platforms let you execute a workflow whose forms and text turn your abstract model into a real experience.
This changes everything by elevating a service _design_ into an actual digital service that you can _use_, instead of merely admiring.

The value that execution brings to service design lies in how a concrete preview tends to highlight mistakes the model hides.
You can see problems more clearly when you experience an actual service.
Meanwhile, a model that no-one uses won’t work, in the same way that pseudocode doesn’t.
