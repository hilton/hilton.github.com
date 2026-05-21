---
title: Code coverage matters until it doesn’t
description: calculating a minimum standard while building trust
excerpt:     calculating a minimum standard while building trust
layout: hh
tags: programming quality
image: post-it-notes.jpg
---

![](post-it-notes.jpg)

[Michael Arrighi](https://www.flickr.com/photos/arrighi/8562416557){:.photocredit}
[CC BY-NC-SA 2.0](https://creativecommons.org/licenses/by-nc-sa/2.0/){:.license}

Software development teams like to automate all sorts of things, including measuring their automated software tests.
Deciding whether they have ‘enough’ automated tests proves complicated, unlike concluding that they don’t have enough, yet.

## Calculating code coverage

[Code coverage](https://en.wikipedia.org/wiki/Code_coverage) calculates the percentage of lines of code that automated tests execute.
This percentage reveals how much code the tests _don’t cover_, and which therefore remains untested.
However, it doesn’t tell you anything about the tests’ effectiveness, so _covered_ doesn’t necessarily mean _properly tested._

The value of calculating code coverage therefore depends on the situation: the team, the software, and the organisational context.
For example, when I asked staff engineer [Phil Giese](https://philgiese.com/) if he cares about code coverage, he told me:

> Yes, I care that there are tests and that the code is covered.
> I don’t care enough to actually check the number.

Decide whether calculating code coverage will tell you anything you don’t know, and whether it will affect any decisions you make.

## Measure in the middle

Two scenarios don’t benefit from calculating code coverage:

1. no test coverage
2. enough test coverage.

It matters in the space between _none_ and _enough_.
[Juke](https://www.linkedin.com/in/juke/), an engineering leader, told me that some teams need to measure coverage:

> with inexperienced people, you need something to measure progress,
> and in larger companies that need some common code standard, across multiple teams

Measure code coverage when you have a reasonable expectation that you don’t have enough, and you plan to change that.

## Enough code coverage

Teams that increase code coverage, by implementing missing tests, benefit from making their progress visible, but only up to a point.
Christian Wiggert, a staff engineer, told me that:

> It’s a hard metric to get right without annoying people.

Phil has also thought about what he considers _enough_ code coverage:

> I figured that it’s a bit more than half, so there’s a decent chance that you have some of the critical paths covered.

Treat 50 per cent coverage as a minimum, and less than 50 per cent coverage as a call to action.
When you have solved that problem – not enough coverage – start thinking about the problem more broadly.

## Good code coverage

Beyond minimum code coverage, teams have several options for improving software testing, such as the following.

* Set a quality gate that prevents code changes from reducing overall code coverage below 50 per cent.
* Set a higher minimum coverage for new code, such as 80 per cent coverage.
* Add code coverage calculations, such as [branch coverage](https://en.wikipedia.org/wiki/Code_coverage#Basic_coverage_criteria).
* Don’t require 100 per cent coverage, except for unusual situations, such as safety-critical code.

Juke added that teams need to ‘actually check if the test is good’.
For example, they could improve coding standards and code review for automated tests’ effectiveness.
Christian wants to automate that, with a ‘review bot that reviews tests, and finds missing cases’.

Meanwhile, engineering leader [Carlton McFarlane](https://bigsee.ilicmcfarlane.io/) would like to have:

> coverage metrics alongside other code quality metrics, e.g. cyclomatic complexity,
> to see whether code with lower coverage is more complicated

In the end, we all agree that beyond a minimum standard, engineering leaders want to improve team practices to the point where they can trust the team to write good tests, and to write enough of them.
Sometimes the best improvement to a measurement makes it obsolete.