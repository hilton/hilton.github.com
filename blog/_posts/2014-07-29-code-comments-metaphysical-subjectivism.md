---
title: Code comments and metaphysical subjectivism
description: The philosophy of software maintenance and the objective meaning of legacy code
tags: programming comments maintenance
layout: hh
---

Software maintenance - someone else’s legacy code - is enough to make anyone turn philosophical. Especially when there aren’t any comments on the code. Code without comments is a kind of alternate reality without any interpretation, which always leads to the same questions… _Why are we here? What does it mean?_

In this essay:

1. [Beautiful legacy code](#beautiful-legacy-code)
2. [Making changes to legacy code](#making-changes-to-legacy-code)
3. [Code and metaphysical subjectivism](#code-and-metaphysical-subjectivism)
4. [Code comments and objectivism](#code-comments-and-objectivism)
5. [An objective solution](#an-objective-solution)


## Beautiful legacy code

We’ve all been there: reading someone else’s code and then noticing two things. First, the code is beautifully written. Second, there aren’t any comments at all. I’ve seen this several times in successful open source projects with a very small number of contributors to the core code. For some software, there is clearly a vision, just no explanation.

From a software maintenance perspective, the problem is not in trying to understand what the code does, because when you read good code you can just see that. No, the problem is working out why. This is where the philosophising creeps in, with an impish voice in your head saying, ‘because it’s supposed to’. Given perfect code, this is okay, because software maintenance requires the humility to work with superior code. Until you have to change it, that is.

## Making changes to legacy code

The difficulty with making changes to aforementioned legacy code is the need to understand how it fits together, which ultimately means understanding what every line of code is for, once you know which bit to look at. At a certain point, you’re going to wonder things like ‘why does it do that?’ and ‘is it really supposed to do that?’ - the beginning of suspicion that there are bugs. Which there always are, in legacy code.

One way of thinking about this legacy code is that it’s implementing some (probably lost or undocumented) set of business requirements - a kind of objective reality that the code interprets. If you only have code, then all you have is one implementation - one interpretation, or a kind of perception of that reality. One way of thinking about this legacy code is as a struggle between understanding your perception - what you understand when you read the code - and the reality - the underlying business requirements.

## Code and metaphysical subjectivism

In philosophy, metaphysical subjectivism is the idea that _there is no objective reality_, only perception. As [Wikipedia](http://en.wikipedia.org/wiki/Subjectivism#Metaphysical_subjectivism) puts it:

> Metaphysical subjectivism is the theory that reality is what we perceive to be real, and that there is no underlying true reality that exists independently of perception.

If you start thinking about code this way, then you’ve probably been doing software maintenance for too long. This would be the view that the code cannot be understood on any (requirements-based) objective level, and only through what it currently does. That would be bad, because there would no longer be any concept of a bug, just the need to continuously make improvements to the code, and we can’t have that can we?

## Code comments and objectivism

The alternative is to capture the code’s corresponding objective reality. In this industry, there used to be the idea that you could do this by producing and binding documents with names like _Functional Requirements Specification_ and putting them on the shelf in the room where the software maintenance team works. This is a nice idea, but unfortunately does not work.

I have a more elegant theory: a few comments in the code are enough to pin down the code’s objective reality, so software maintainers don’t wander down the garden path of metaphysical subjectivism. Instead of attempting to document the software at the top level, or trying to explain every line of code, adding ‘documentation comments’ at the subroutine (method or function) level is enough to explain the code.

## An objective solution

Documentation comments can be short, one or perhaps two sentences at most. These comments can be short, because it is unnecessary to explain what beautiful (legacy) code _does_. Instead, documentation comments need only answer the more metaphysical questions of _why the software exists_ and _what it is for_.

This solution does require some effort, and some creative thinking, but only within fixed limits. After all, for an object-oriented language such as Java or Scala, this solution can be phrased as a simple coding standard:

> Write a one-sentence documentation comment, for every class and method, that says why the code exists and what it is for.

This is a small (development effort) price to pay for avoiding the horror of metaphysical subjectivism, especially if you exempt ‘views’ - code that only returns data without conditional logic or modifications to data. Besides, it’s also a good check to whether you - as a developer - understand the code you’re writing. If it isn’t _easy_ to write these one-sentence documentation comments, then you have bigger problems than worrying about the extra typing.
