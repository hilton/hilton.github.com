---
title: Write comments before refactoring code
description: overcoming the self-documenting code delusion
layout: hh
tags: programming naming maintenance
---

Programmers resort to all sorts of excuses to avoid writing comments in code.
I sympathise; becoming a programmer requires so much specialism
that coders not _also_ enjoying writing prose shouldn’t surprise anyone.
But despite that, programmers still make comment-avoidance excuses.

Developers don’t have to do everything, though.
On a cross-functional team, they can get away with all kinds of specialisation,
and sharing work with team mates whose skills sets differ often works out well.
But not with comments that explain what the code itself cannot.

## The self-documenting code delusion

The most popular no-comments excuse, unsurprisingly, focuses on the code.
It starts with the idea that better code makes comments unnecessary.
Indeed, [some comments compensate for bad code](7-ways-to-write-bad-comments),
and improving the code to make it _self-documenting_ would make those comments unnecessary.

Deluded programmers incorrectly conclude that since they can write self-documenting code,
their code therefore does not require comments.
Even if they could write self-documenting code, they invariably haven’t actually done so yet.
And for most professional programmers,
refactoring _all_ of the code would mean failing to prioritise properly, and will never happen.

## The unnecessary comments fallacy

When you dig into the self-documenting code delusion, it only gets worse.
Even though better code can make some comments obsolete, that only works for
[bad comments](7-ways-to-write-bad-comments), not the good ones.

[Good comments](3-kinds-of-good-comments)
acknowledge programming languages’ expressive limits.
Most crucially, code cannot explain its own value or why it even exists.
You can’t even swear in most programming languages
(although Perl syntax can resemble comic book expletives).

Instead, as Kevlin Henney wrote,
[comment only what the code cannot say](https://medium.com/@kevlinhenney/comment-only-what-the-code-cannot-say-dfdb7b8595ac).
This means adopting techniques like
[writing one-sentence documentation comments](documentation-comments).

## Starting from honest self-awareness

The first step to overcoming the self-documenting code delusion requires honesty.
First, acknowledge the code’s current state, without blame,
and accept that even if self-documenting code does exist, you have normal code.
The kind that needs comments.

Second, programmers must acknowledge that they lack the justification, the time,
and possibly even the skill to transform the entire codebase into self-documenting code.
Developers with big egos fail to make this step.

## The renaming struggle

Writing self-documenting code faces another challenge.
Self-documenting code, if it even exists, must have good naming.
[Naming’s famous difficulty](why-naming-things-is-hard)
means that you have now _reduced_ (in the mathematical sense)
the avoiding-comments problem to a harder problem: naming things.

Refactoring to self-documenting code must have higher difficulty than writing it,
because _renaming_ has higher difficulty than naming.
After all, renaming includes both naming things
and the more human challenge of getting other people to agree on change.

## The comment-deletion reward

Despite the difficulty of writing comments in addition to writing code,
and the many trials of writing in English, great rewards await intrepid coders who do.
First, while you work towards self-documenting code, business success,
and other varieties of computer-aided glory, you can have _maintainable code_.
This makes the aforementioned glory more likely, and makes getting there less unpleasant.

Finally, and perhaps best of all, you get to delete the comments.
Each time you improve some code, perhaps because you now have time to refactor,
or because you’ve grown as a programmer and can now write better code,
you can reward yourself with deleting newly-unnecessary comments.
