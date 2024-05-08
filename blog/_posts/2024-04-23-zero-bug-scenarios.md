---
title: Zero-bug policy scenarios
description: How to handle common situations
layout: hh
tags: product
image: pesticide.jpg
---

![](pesticide.jpg)

[MUS LIHAT](https://unsplash.com/photos/ZOKLwSOyeUQ){:.photocredit}

{:.series}
1. [Zero-bug policy](zero-bug-policy)
2. Zero-bug scenarios ←

When you discuss introducing a [zero-bug policy](zero-bug-policy),
[don’t dwell on the edge cases](process-exceptions).
Developers score points with increasingly unlikely scenarios, which you sometimes need, 
but not for this conversation.
Instead, discuss bug reports case-by-case until you reach a new normal.
Meanwhile, it helps to share a vision for a successful zero-bug policy.

## No open bugs

Start by describing the policy’s desired outcome: fixing bugs over prioritisation.
With zero open bugs, a new bug report becomes the next task for the team;
the only known bug becomes the most important one.

The more often you have no open bugs when you receive a new bug report,
the more successful the policy.
The hard part lies in getting to the point where bug reports arrive infrequently,
and the team fixes reported bugs quickly.

## The team didn’t fix the bug quickly

Sometimes the team cannot fix a bug quickly,
according to their idea of _quick_.
As product manager, you can tell the team that whenever you notice that a bug fix has already taken _a while_ (which you don’t define),
you’ll have a conversation with the developer to review what they’ve learned so far.

1. Have they understood and [reproduced the bug](bug-reproduction)?
2. Do you agree on the bug’s impact (on customers)?
3. Do they know how to fix the bug?
4. Does the system’s code or architecture make the bug easy to fix?

Depending on the answers, you might now decide to ignore the bug.
In general, you won’t learn anything from asking how long it will take to fix the bug,
even if you answer emphatically _yes_ to the above questions.
Instead, consider impact first.

## The bug doesn’t affect customers

Even if a bug doesn’t affect customers, trying to fix it gives you an opportunity to learn something,
and improve the system.
However, if a developer can’t fix the bug quickly, you will exhaust these opportunities long before.
Instead, you record what you’ve learned, and then close the bug report.

## The fix requires more longer

If the bug does affect customers, or poses unacceptable risk, you’ll need to continue trying to fix it.
A known bug might pose a low-key risk, such as the product manager knowing that telling a customer about it would embarrass them.
Some bugs represent scarier risks, such as the likelihood of a conversation with a compliance team.

## Multiple open bugs

The situation starts to feel more complex with you have more than one open bug.
As a product manager, you now need to prioritise.
In the context of a zero-bug policy, this might mean ignoring newly-reported bugs with a lower impact than whatever bug fix you have in progress.
In general, you can always deprioritise a bug report by deleting it.

## Critical bug

A critical bug gives you another easy decision that doesn’t require any policy complexity.
When _critical_ means something like _more than one customer cannot complete an important task_,
you obviously stop current work to talk about it, and decide what to do.

In practice, this probably means putting other work on hold while the team resolves the issue.
But you don’t have to speculate about this: just promise to have a conversation.
