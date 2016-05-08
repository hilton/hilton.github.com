---
title: Constructive laziness
description: Creative productivity for programmers
tags: programming documentation
layout: hh
image: http://hilton.org.uk/blog/laziness.jpg
---

![Plain old laziness](laziness.jpg)

Productivity patterns give catchy names to productivity hacks and other habits, good and bad: like [design patterns](https://en.wikipedia.org/wiki/Design_pattern) but for productivity. For programmers, constructive laziness trumps all other productivity patterns by turning productivity problems into coding problems.


# Understanding constructive laziness

To begin to understand constructive laziness, you need an explanation that fits in a Tweet. My friend Denis wrote my favourite example:

> Constructive Laziness: being lazy about doing, not lazy about thinking.
> Ingenuity is born from constructive laziness.
> 
> [@DenisHowlett](https://twitter.com/DenisHowlett)

Denis means that programmers who tackle the prospect of doing real work _by thinking about it_ often figure out a way to automate the solution by writing code. Another way to think about constructive laziness starts by considering the end rather than the method. Ten years ago, Eric Raymond wrote:

> ‘While I don't claim to be a great programmer, I try to imitate one. An important trait of the great ones is constructive laziness. They know that you get an A not for eﬀort but for results, and that it’s almost always easier to start from a good partial solution than from nothing at all.’
> 
> [The Cathedral and the Bazaar](http://www.catb.org/~esr/writings/cathedral-bazaar/), Eric Raymond, 1997

However, the earliest reference I’ve read didn’t use the name ‘constructive laziness’ and, like Denis’ tweet above, talks about the method. 

> ‘Laziness sounds like the vice of the same name, but there’s a diﬀerence. The vice is about the avoidance of immediate work. The virtue is about the avoidance of future work.’ 
> 
> [Programming Perl](https://en.wikipedia.org/wiki/Programming_Perl), 1991

In fact, ‘work avoidance’ sums it up pretty well. Of course, all three writers also code so we should change that to ‘work avoidance by coding’. We also need to figure out what that means in practice.


# Applying constructive laziness

To apply constructive laziness to your work, you find opportunities to replace non-coding problems with coding problems, in order to increase the proportion of your time you spend writing code.
Ideally, you also save time by doing so, although this will not _necessarily_ happen.
The following examples show that this applies to more than one kind of problem or solution.

* *Automated testing* - replacing the usually tedious job of manually testing software with the more interesting task of writing test code.
* *Data maintenance scripts* - because when you have to do something big like a database migration for a software release, have more chance of achieving the _Right First Time_ management fantasy if you cheat by automating the migration so you can run it lots of times in order to improve it enough for it to be right when you run it the ‘first time’.
* *Notifications* - so you can save time on collecting information by writing code that sends you information as soon as it’s available
* *Software rewrites* - predicated on the (invariably erroneous) notion that rewriting (and testing and debugging) a system will require less effort than understanding legacy code.
* *DevOps* - the whole discipline of coding your way out of sysadmin problems.

The following joke sums up the value of notifications:

> Save money on doorbell batteries by removing them and simply popping to the door every two minutes to see if anyone is there.
> 
> [@VizComic](https://twitter.com/VizComic)

Apparently, you can even apply constructive laziness to language design:

> types are for lazy programmers who get sick of finding the same damn errors by hand again and again
> 
> [LazinessImpatienceHubris](http://c2.com/cgi/wiki?LazinessImpatienceHubris), c2 wiki


# Not writing code

If you consider it more important to do less work than to replace work with programming, the constructive laziness may lead you to avoid writing code and instead use someone else’s. In polite conversation, we call this _software re-use_. Other times, we call it _dependency hell_ and go off on rants about package managers.

At the time of writing, the [left-pad controversy](http://blog.christoffer.me/no-we-havent-forgotten-how-to-code-javascript-just-needs-to-become-a-better-language/) has recently unleashed a discussion about whether the constructive lazy programmer should minimise dependencies and write their own code, as much as possible, or prefer to re-use other people’s code.

This dilemma teaches us that the right way to apply constructive laziness depends on the economics of the situation you’re in.


# Not explaining code

Using constructive laziness to replace work with programming can lead to a situation where you have more code to write than you have time for. In some cases, this leads to programmers working together in teams, which in turn leads to a new problem.

When you work with other programmers, they never seem to understand your code. Instead they ruin your day (and your productivity) by asking questions and asking you to explain your code. Not only are these explanations time-consuming, but the usual tactic of avoiding undesirable work by writing more code only seems to make the problem worse.

When time spent explaining your code starts to get in the way of having enough time to write code, you are going to have to take constructive laziness to the next level. Instead of only writing code, you are going to have to write _documentation_ as well.


Photo: [Warren R.M. Stuart](https://www.flickr.com/photos/wza/15999720424) / CC [BY 2.0](https://creativecommons.org/licenses/by/2.0/)
