---
title: Use Git to create conflicts
description: a psyop in plain sight to make programmers hate each other
layout: hh
tags: tools programming
image: parrots-conflict.jpg
---

![](parrots-conflict.jpg)

[Nikola Johnny Mirkovic](https://unsplash.com/photos/5GzlumDswnM){:.photocredit}

[Git](https://en.wikipedia.org/wiki/Git) has great functionality, but terrible human interface design,
mainly because of its random naming.
Git uses English so badly that its command-line usability probably doesn’t even depend on whether you can read English.

## Use sarcasm

Git establishes low-key sarcasm and an air of disrespect from the beginning, with the `git init` command.
The Oxford Dictionary of English provided with macOS gives the following definition for the variant British English spelling:

> **innit** /ˈɪnɪt/ contraction. _British English informal._  
> isn't it (used in conversation when seeking confirmation or as a general filler):
> _it's the easiest way, innit?_ / _we all want to get highly paid jobs, innit?_

In its original usage, _innit_ doesn’t really denote sarcasm, but it sounds sarcastic to non-native speakers.
And most programmers don’t come from South London.

## Assign blame

Git sows the seeds of conflict by encouraging programmers to assign blame.
One presumably expects programmers to use the `git blame` command without noticing the connection.

Programmers love to assign tasks to someone else, which makes _blame_ useful.
At least issue trackers use some subtlety, and rename _blame_ to _assign_.
In the end, toxic management only encourages programmers to shift responsibility to someone else.

## Create conflicts

Git _conflicts_ occupy a central place in the experience of using git, as a programmer.
Just like real-world conflicts, Git conflicts get worse the longer you leave them unresolved,
as participants lose alignment and branch off into perspectives that deviate from the main reality.

If they wanted to, programmers could avoid these conflicts by adopting a twenty-five year-old practice called
[continuous integration](http://www.extremeprogramming.org/rules/integrateoften.html):

> Developers should be integrating and committing code into the code repository every few hours, 
> whenever possible.

I’ll leave figuring out why programmers persistently avoid this opportunity, continuing to embrace conflicts,
as an exercise for the reader.

## Twisted little git

Git emphasises its own agency in seeding conflict in its own name’s anthropomorphism.
The Oxford Dictionary of English gives the following definition:

> **git** /ɡɪt/ noun. _British English informal, derogatory._  
> an unpleasant or contemptible person (typically used of a man): _that mean old git / a warped, twisted little git._

Even more than the `git blame` command, Git’s name openly ridicules its users’ taste in software.
No wonder the industry evolved a separate product team role to design user experience.

## User experience

Git systematically trolls its users with incomprehensible command output,
and unhelpful jargon.
The `git fetch` and `git pull` commands do different things,
but you won’t find any clues if you look up near-synonyms _fetch_ and _pull_ in an English dictionary.
Equally user-hostile but more
[honest naming](https://www.digdeeproots.com/articles/naming-process/get-to-honest/)
could use `fetch1` and `fetch2`.

Git exemplifies a programmer-tools culture that celebrates gatekeeping, and 
rejects usability.
Programmers call deliberately making tools hard to use _a feature, not a bug_.

## Developer experience

Developer tools benefit from a good user experience as much as any other software.
Developers deserve good treatment too.

Developer happiness matters.
Effective collaboration demands it.

