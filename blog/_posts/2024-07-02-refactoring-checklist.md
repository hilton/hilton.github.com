---
title: Refactoring checklist
description: Ten practical tips for reducing technical debt
layout: hh
tags: product development
css: article table {width:42em}
image: refactoring-checklist.png
---

![](boxes.jpg)

[Chuttersnap](https://unsplash.com/photos/7eQlPra81zQ){:.photocredit}

If you’ve analysed [refactoring opportunities](technical-debt-goals),
and find yourself spoilt for choice, use this checklist to help yourself decide where to start.

| Instead of this | Do this |
| --------------- | ------- |
| Refactoring code you don’t understand | First establish what the code does, and why |
| Improving everything | Improve in-use code |
| Tidying up later, after all product improvement | Clean up before you start work on it |
| Saving up related clean-up to do together | Clean up as you go |
| Improving stable code | Improve recently-modified code |
| Adding tests after refactoring | Add tests before refactoring |
| Mixing refactoring with functional changes | Use separate version control system commits |
| Ignoring test failures | Start and end with passing tests |
| Letting refactoring scope expand | Abandon refactorings whose scope grows |
| Letting scope expand as you find dependencies | Start where there are no dependencies |

## Understand first

Attempts to clean up code you don’t understand may unintentionally make it worse,
as in the German neologism _Verschlimbesserung_ - a ‘disimprovement’.
Therefore establish what the code does, and why, so you can use the rest of this checklist.

## Improve in-use code

Don’t bother with unused code.
Instead, delete unused code before you try to improve anything;
remove fake complexity instead of managing it.

## Clean up before starting

In a restaurant kitchen, you always start a shift with a clean kitchen.
Similarly, don’t delay tidying up code until ‘later’.
Instead, clean your ‘area’ before you start, to make changes easier to make.
And if you _really_ like the kitchen metaphor, start tasks with
[mise en place](https://buttondown.email/hillelwayne/archive/software-mise-en-place/).

## Clean as you go

During a migration, clean up the old implementation as you go.
One big clean up at the end may sound simpler,
but you’ll forget what you can delete, and put it off indefinitely.
Instead, do one step at a time, to avoid a mess that the team lacks confidence to delete.

## Improve recently-modified code

Refactoring makes code easier to maintain.
You don’t get this benefit from refactoring stable code that you won’t later modify.
Therefore, avoid wasted effort by focusing on reducing the cost of change,
and refactoring where you get the most benefit.

## Add tests beforehand

Don’t add automated tests as a refactoring afterthought.
In his book, [Working Effectively With Legacy Code](https://archive.org/details/working-effectively-with-legacy-code),
Michael Feathers introduced the idea of writing _characterisation tests_,
establish current behaviour and make refactoring safe.

## Separate commits

Don’t mix refactoring with functional changes, so you can revert failed (buggy) refactoring.
After all, not changing functionality defines refactoring.
Instead, isolate refactoring in separate version control system commits.

## Start and end with passing tests

Don’t ignore test failures, because you need unit tests to establish that refactoring didn’t change functionality.
Therefore, to avoid bugs due to accidental functional changes,
ensure that tests pass both before and after a refactoring commit.

## Abandon early

Don’t let a refactoring’s scope expand unexpectedly, when you learn something or see new opportunity.
Resist the natural tendency to keep digging, and start again with a smaller scope, 
instead of having to abandon a larger amount of work later on.
Therefore, keep each refactoring small and safe, and deliver improvements sooner.

## Minimise dependencies

Don’t let dependencies suck you into a big refactoring.
Instead, find code with no dependencies and start there.
[The Mikado method](https://mikadomethod.info/)
does this by discovering and mapping dependencies, until you find the dependency tree’s leaves, 
which you can refactor in small independent steps.