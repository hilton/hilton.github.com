---
title: Fear of renaming
description: Why renaming is harder than naming
tags: programming
layout: hh
---

<blockquote class="big solid-one" style="max-width: 57em; font-size: 0.85em">
<p><em>I must not fear.</em>
<br>Fear is the mind-killer.
<br>Fear is the little-death that brings total obliteration.
<br>I will face my fear.
<br>I will permit it to pass over me and through me.
<br>And when it has gone past I will turn the inner eye to see its path.
<br>Where the fear has gone there will be nothing.
<br>Only I will remain.</p>
<p style="text-align:right">The litany against fear - <em>Dune</em>, Frank Herbert</p></blockquote>

Programmers agree that [naming is hard](http://martinfowler.com/bliki/TwoHardThings.html). The only thing harder than naming is _renaming_, because it includes naming, plus other hard things. Renaming leads to fear of:

1. change
2. breaking things
3. talking to people
4. time spent not programming
5. revising understanding.

You can deal with these fears by understanding them better. Then you won’t need [the litany](http://en.wikipedia.org/wiki/Bene_Gesserit#Litany_against_fear).


## Renaming is change

Status quo has its own inertia, even in code. The difficulty of change is easy to underestimate, even at the small scale of a single variable name. This simply means accepting that renaming requires a non-trivial effort.

No-one plans for code to become legacy code, but it happens. When you become shy of changing code, the next thing to happen is that you realise that you are now maintaining legacy code. You may fear change, but you should fear legacy code more.


## Change can break things

The next fear of renaming is that you will break the code. This is perhaps understandable, but not reasonable. If renaming breaks the code then you need better tools. You probably already have them.

The first tool you have for renaming is [refactoring](http://refactoring.com): first [the book](http://martinfowler.com/books/refactoring.html), then automated refactoring in your integrated development environments. The good news is that this refactoring tends to be safe and easy.


## Renaming requires a conversation

Naming is somewhat subjective, once you get beyond code conventions you can agree on. This means that you are probably going to have to talk about renaming with other team members, more than you would have to for other code changes.

If you work in a non-confrontational team, then renaming can lead to fear of disagreement. If you understand this then you can learn to disagree (and learn and then agree) without confrontation.

Note that in the context of a software project, renaming something isn’t a big deal so if you can’t handle this then you have bigger problems than your code.


## Renaming takes time

A more practical consideration is the equally reasonable fear of wasting time in discussion. It takes time to have a conversation, or even just to explain something.

Talking about renaming doesn’t have to take a _long_ time, but probably takes longer than the refactoring itself. This will make you feel uncomfortable if your sense of productivity sees all non-coding activities as waste.

As with the fear of breaking code, this is an understandable but unreasonable fear. Programmers on software development teams are generally in no danger of spending too much time talking to each other about what they are doing. It is more likely that talking about renaming creates an opportunity for other important conversations about the code that are missing.


## Renaming changes understanding

The scariest part of renaming is when you choose a new name because you realise that the previous understanding was wrong, or at least not as good as it could be. The most important kind of renaming is not when you find a better word for the same thing, but when you realise that the old name doesn’t mean exactly the same thing as the concept it represented.

This time, the conversation about renaming is not just to explain the change in the code: now you have to discuss the change in your understanding of the domain, or your model. This is perhaps the heart of domain-driven design.


## Facing fear of renaming

Facing the natural fear of renaming will help you to prevent your code from becoming legacy code that no-one understands. You only need to remember a few things.

1. Recognise the value in improving naming and domain model understanding.
2. Refactor your code.
3. Talk to each other.
4. Be courageous.

After all, coming up with a name in the first place is hard enough.
