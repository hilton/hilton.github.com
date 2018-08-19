---
title: Three causes of unmaintainable code
description: Why programmers are lazy and too clever for their own good
layout: hh
tags: code maintenance
---

[![A factory - where real maintenance happens](factory4.jpg)](https://unsplash.com/photos/PxIU9VT4R6I)

<a style="background-color:#ccc;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/photos/PxIU9VT4R6I" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Crystal Kwok"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Crystal Kwok</span></a>

Programmers will tell you that they have pride in their work.
Some of us go as far as calling it a [craft](https://en.wikipedia.org/wiki/Software_craftsmanship).
The same programmers will tell you that other peoples’ code is unmaintainable and not to be trusted.
Something is wrong here.

It turns out that conflicting software development goals can cause unmaintainable code.
Programmers don’t _object_ to maintainable code, but want other things more.

## Programmer laziness

We’re lazy programmers.
I’m talking about _constructive laziness_ - the good kind of lazy, that leads a programmer to write code automate a task that they’re too ‘lazy’ to do manually.
The catch is that programmers tend to enjoy coding enough to forget that the automation started as a means to an end, and end up spending more time on avoiding the task that they’re too lazy to do than the task would haven taken to do manually.

<blockquote class="big solid-one" style="max-width:34em">
<p>An hour’s coding often saves several minutes of boring repetitive work.</p>
</blockquote>

Programmers want work to be _interesting_ and use _constructive laziness_ to avoid boring work, rather than to save time.
We assume we’ll save time.
Sometimes we’re wrong.
That’s why XKCD produced a handy chart: [How long can you work on making a routine task more efficient before you’re spending more time than you save?](https://xkcd.com/1205/)

Programmer laziness causes unmaintainable code when it results in code that we don’t need.
If you write code to avoid boredom, you probably shouldn’t try to maintain it as well.

## Too clever for our own good

Faced with a routine _manual_ task, _constructive laziness_ encourages programmers to turn it into a coding task.
Faced with a routine _coding_ task, [programmer hubris](http://wiki.c2.com/?LazinessImpatienceHubris) encourages ‘fixing’ the task to make it more interesting.
Unfortunately, this tends to make the resulting code more ‘interesting’ too.

<blockquote class="big solid-two" style="max-width:40em">
<p>Irregular verbs:
<br>I ‘come up with a clever workaround’
<br>You ‘made some intriguing design choices’
<br>They ‘create unmaintainable legacy code’</p>
<p>- <a href="https://twitter.com/DRMacIver/status/781496659989688321">David R. MacIver - @DRMacIver</a></p>
</blockquote>

Programmers want work to be _interesting_ and tend to solve problems in ways that make the solution more fun to build at the cost of it being much less fun to maintain.
We’re too clever for our own good.

## Early adopter culture

Functional programmers are especially prone to being too clever.
I don’t mean that functional programmers are more intelligent than other programmers.
The problem is that functional programming is more fun than most of the business problems that professional programmers are paid to solve, which makes it distracting.

<blockquote class="big solid-three" style="max-width:44em">
<p>I love functional programming. It takes smart people who would otherwise be competing with me and turns them into unemployable crazies.</p>
<p>- <a href="https://twitter.com/wm/status/7206700352">William Morgan - @wm</a></p>
</blockquote>

Sometimes programmers get fixated on understanding and applying a new technology, instead of finishing their work.
The good news is that functional programming, or some other new technology, may give you a higher quality result in less time.
The bad news is that you’re likely to inflict the joy of learning and experimentation that you got from building the solution on everyone who maintains this solution, whatever their interests.

<blockquote class="big solid-one" style="max-width:41em">
<p>If you don't give software engineers explicit time for professional development, your production apps will become their test bed.</p>
<p>- <a href="https://twitter.com/jasonkjackson/status/766670762870579200">Jason K Jackson - @jasonkjackson</a></p>
</blockquote>

This is the flaw in the age-old management fantasy that companies can replace formal training and [slack](http://www.systemsguild.com/Slackpage.html) (as in spare time) with ‘learning on the job’, a.k.a. _no training_.
This causes unmaintainable code that was written as practice code, complete with the usual beginner mistakes.

## Conflicting goals

While you (or your manager) may hope that programmers’ top priorities are to write maintainable software that you need, while avoiding unnecessary effort, programmers’ actual priorities are more like:

1. Avoid boredom
1. Avoid manual (i.e. non-coding) tasks
1. Exercise technical mastery in coding

_Writing maintainable code_ is, of course, way down the list.
Still, it could worse: [writing documentation](../presentations/documentation) is even lower.

_For more help with the causes of unmaintainable code and how to address them, [contact Peter Hilton](../contact) for training in [How to write maintainable code](../training/maintainable-code)._
