---
title: Write better code
description: Learning how to become a better coder
layout: hh
tags: programming
image: remove-code.png
---

![Two people working together](collaboration.jpg)

<a class="unsplash" href="https://unsplash.com/photos/IgUR1iX0mqM" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>heylagostechie</span></a>

_This article summarises part of a presentation I gave in 2017, after twenty years as a professional software developer._

You can learn a lot about coding if you 
[read technical books](read-technical-books), 
[talk about technical books](talk-technical-books) and
[talk about programming](talk-programming).
But you can also learn to become a better coder by writing better code.

One approach to learning how to write better code starts with specific software maintenance tactics.
These three activities result in better code:

1. remove code - don’t maintain what you don’t need
2. refactor code - continually improve code as you raise your standards
3. improve coding style - adopt a sense of good taste.

First, learn how: read about them, talk about them, and practice.
Then learn how to do them _systematically_.
Then do them _more_, by broadening their scope.

## Remove code

How many reasons to remove code can you discover?
Start with these three reverse caption competitions: choose your meme!

{:.big.solid-one style="max-width:41em"}
> Friends don’t let friends maintain dead code!

{:.big.solid-two style="max-width:38em"}
> Go and delete it… [you ain’t gonna need it](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)!

{:.big.solid-three style="max-width:27em"}
> Domain knowledge is an asset; code is a liability!


<!-- 1. Friends don’t let friends maintain dead code (or commented-out code, or unnecessary code)!
2. Go and delete it… [you ain’t gonna need it](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) (YAGNI)!
3. Domain knowledge is an asset; code is a liability! -->

As a related skill, learn to use static analysis tools to hunt dead code, and practice thinking about class-level dependencies.
And don’t forget to celebrate every 100 lines you remove.

## Refactor code that smells

Dead code may have the worst code smell, but other code smells lurk in every codebase.
Read the books and blogs that teach you about different code smells, and practice finding them with other coders.
Pair programming and other kinds of code review give you plenty of opportunities to do this collaboratively.
When you find code smells, actually fix them.

Get good at refactoring.
Always focus on making refactorings as safe as possible, starting with unit tests that fail as soon as you do something unsafe, and reverting those changes.
If you focus on safety, and do it a lot, you’ll end up with _speed_, in the coding version of the maxim _slow is smooth, and smooth is fast_.

## Improve coding style

As well as identifying problematic code, you can also stop writing it in the first place.
To do this, agree a team coding style and apply it as strictly as possible.
In practice, _as strictly as possible_ starts with non-negotiable automatic formatting, ideally as you type.

The cognitive load of reading messy code slows you down; total consistency fixes that.
But coding style concerns much more than formatting.
Go beyond code formatting and experiment with naming, paradigm, and other conventions.
Reflect on techniques that work by asking, ‘what if we did this _everywhere_?’
Then update the team coding standard, refactor, and repeat.

## Discover the difficulty

These three techniques represent obvious advice that you can easily apply, in the same way that you might find running or cooking _easy_.
The challenge lies less in starting than in continuous improvement, and in dealing with situations such as more legacy code than you can ever read, let alone refactor.
Learning to become a better coder by writing better code ultimately means embracing the idea that you can always get better, and having the discipline to keep on learning how.
