---
title: "Book review: Functional Reactive Programming"
description: by Stephen Blackheath and Anthony Jones - Intelligent, clear and witty
tags: programming book
layout: hh
---

<a class="pull-right" href="http://www.manning.com/blackheath/" style="margin-left:1em"><img src="functional-reactive-programming.jpg" alt="Functional Reactive Programming"> </a>

For this review of [_Functional Reactive Programming_](http://www.manning.com/blackheath/) (FRP), I read MEAP (pre-publication early access) version 8, which includes 12 out of 15 planned chapters. It was a good read and the more-important first half of the book seems to be complete.

Update: MEAP version 9 is now available, which includes all 15 chapters (but no appendices).

# Important & intelligent

Possibly the most important question about a technical book is also the most subjective: does its topic matter? _FRP_ (the book) is indeed important because FRP (the topic) is a new programming style that builds on the well-established practice of functional programming as well as the more recent trend for ’reactive programming’. This book describes a specific intersection of the two. 

FRP is about a declarative approach to coding program logic, as opposed to mixing functional programming idioms with an imperative or object-oriented style. This is something of a paradigm shift if that's what you're used to, which is the central value of this book's explanations.

The FRP programming style is carefully and intelligently presented. Fortunately,  this book avoids the hyperbole and hard sell that so many introductions to a new software development approach lazily use. Instead the authors are careful to note limitations and disadvantages alongside benefits, and to compare related approaches, such as actor-based programming with Akka, when appropriate. 

# Clearly explained

_FRP_ is a case study in how to write a technical tutorial, because of how consistently and successfully it avoids the common pitfalls of technical writing. Each section starts with concrete examples that strike a careful balance between being short enough to swallow and large enough to include realistic complexity. 

More importantly, the authors give the reader a chance to fully understand a single example before introducing more abstract concepts. Near the start of the book, there’s a self-conscious note about this that hints at the books multiple layers:

> When my co-author says ‘more generally’ he is invariably trying to trick you into learning functional programming. Don’t fall for it. You can ignore these parts and focus on the examples.

This kind of humour turns out to be a regular feature of the book, whose clarity is matched by its wit.

# Witty

The writing style is fluent and easy to read, which I liked a lot because this makes the explanations easy to follow without getting stuck on a section that you have to re-read several times. What I like even more is that there are so many great jokes in the prose.

This is certainly the funniest technical book I’ve read for a while, and that's a good thing because it makes the content more human. In fact, this book is my new favourite counter-argument to the silly notion that technical writing shouldn’t contain humour, and that tedious prose is somehow a necessary evil.

The humour is less present in the second half of the book, but that is reasonable because the later chapters are less of a tutorial and more like reference material. Reference documentation humour is no doubt harder than tutorial humour.

# Criticism

There’s not much to criticise about this book, mostly because it has such a clear focus on a specific style of programming, and delivers exactly what you want: lots of code samples that illustrate and explain the style.

The only potentially negative point is that the book’s code examples use the authors’ own FRP library, which is introduced without any way to tell whether this is a good or bad thing. Chances are, this isn’t an issue, and the authors address this as well as they can by noting that all FRP libraries resemble each other, and by devoting a chapter to alternative JavaScript-based FRP libraries.

What’s really missing is that the authors don't say whether there are any alternative FRP libraries for Java. Moreover, as a Scala programmer, all the talk of functional programming and immutable data structures makes me wonder what the options are in Scala. I hope a future MEAP version addresses this, likely in the planned ‘Comparison of FRP systems’ appendix, but I suspect that what's really needed is for someone else to port Sodium to Scala and write a new book called _FRP in Scala_.

# Recommendation

I recommend this book to all programmers, provided they are comfortable with Java code examples, because its ideas represent a fundamentally different approach to coding to the usual imperative and object oriented approaches. Furthermore, FRP is a fascinating application of functional programming to practical application development.
