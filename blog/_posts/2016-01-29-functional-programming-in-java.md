---
title: "Book review: Functional Programming in Java"
description: by Pierre-Yves Saumont - FP unencumbered by libraries, standard or otherwise
tags: programming book
layout: hh
---

<a class="cover" href="https://www.manning.com/books/functional-programming-in-java?a_aid=playscala"><img src="functional-programming-in-java.jpg" alt="Functional Programming in Java"></a>

_[Functional Programming in Java](https://www.manning.com/books/functional-programming-in-java?a_aid=playscala)_, by Pierre-Yves Saumont, is a new programming book that is currently available via the Manning Early Access Program (MEAP).
This is a review of MEAP version 8, which includes draft versions of the first seven out of fifteen chapters.

A draft version of the first half of this kind of book is generally enough to understand the book’s focus, and the quality of the writing, but does not always clearly indicate how much the final book will have benefited from editing and polishing.
Similarly, a half-complete MEAP only gives you some idea about the final book’s level.

## Level and focus

The final version might also reduce the book’s scope and detail level.
The author would probably prefer to write an advanced book, that captures as much of their knowledge as possible.
Meanwhile, the publisher is likely to (wisely) insist on more explanation that will make the book accessible to a larger audience.

These questions of ‘level’ are critical for a book about functional programming, like this one, because there are so many possible approaches to explaining the topic, and just as many potential audiences.
Any book about functional programming in Java has to choose between several distinct audiences.
These are:

1. Java programmers who want to learn about functional programming in general
2. Java programmers who want to learn how best to use Java 8’s language features and SDK for functional programming
3. People used to functional programming in another language, such as Haskell, Scala or JavaScript, who want to find out if functional programming in Java is any good.
4. Java programmers who want to learn about functional programming before switching to another functional programming language.

_Functional Programming in Java_ is clearly intended for the first group, and not the second - there are other books for them.
This focus is the book’s greatest strength.
However, this book makes concessions to the third group, probably unintentionally, which make the book harder to follow.

## Focus

_Functional Programming in Java_ takes a refreshing approach to teaching Java programmers about functional programming.
Instead of describing the latest JDK libraries, this book uses only the language features in Java 8 to develop a basic functional programming library from scratch.

This book’s low-level approach that will appeal to many programmers, who remain suspicious of other people’s libraries and want to understand how things really work.
Most of the book consists of a series of programming exercises to implement commonly-used functional types and operators, in a series of small steps.
This has perhaps the best chance of teaching some highly abstract concepts in a way that the reader will fully understand and remember.

The part I appreciated most, because I hadn’t seen one before, was the demonstration of how to replace stack-based recursion with heap-based recursion.
Chapter 4 - _Recursion, corecursion, and memoization_ - explains this well, and also includes one of the book’s better jokes:

> No book talking about recursive functions can avoid the Fibonacci series function. Although it’s totally useless to most of us, it’s ubiquitous and fun.

This example stands out, because it’s perhaps the only place where an example uses a fake _text book_ problem. This is also where I first started thinking about the book’s functional library tutorial approach. These explanations suffer from a problem of explanation and motivation, which leads to what I like least about the book.

## Criticism: legacy functional programming

While reading _Functional Programming in Java_, after the first few chapters, I started to miss realistic examples.
When I returned to a chapter after a break, and re-read a code listing, I often found myself wondering about the code’s _purpose_.
More generally, without examples to motivate the book’s topics, I kept thinking _So what and why do I care?_

Finding good examples is hard, of course, which is perhaps why examples are part of the difference between a good book and an excellent book.
I hope later MEAP versions address this.

The question of the motivation for the code in the book raises another issue, related to functional programming in other languages.
Throughout the book, the exercises and code listings develop implementations of functional types with operations like `compose`, `head`, `tail`, `fold`, `map`, `cons`, `lift` and `flatMap`.
Readers who have used other functional programming languages may well find these names familiar, but I find it hard to believe that’s the intended audience.
Java developers with no functional programming experience would be better served by a consistent set of names than by names with a variety of origins, from other domains, such as parts of mathematics.

Alternatively, it would be okay to introduce traditional functional programming jargon if it were accompanied by an explanation of the context in which it makes sense.
Instead of declaring that ‘this function is called `cons`, without any explanation, I would prefer to read either an explanation about where the name comes from (presumably from LISP, whose practitioners prefer very short names) or just the name `construct`, which is probably what it abbreviates.

Naming is hard. Naming is an especially thorny problem in functional programming, because there is a tension between the need for good names, the value of adopting traditional names and the the difficulty of naming abstract concepts in the first place.
This issue is especially present in the case of this book, because Java’s traditional naming style is wildly different to what languages like Haskell use. 
After all, mathematicians’ needs aren’t the same as, say, professional programmers’.

Meanwhile, _Functional Programming in Java_ seems to try to avoid the issue, which makes the book’s harder to follow. It would be much more fun if the author took a stand for one approach to naming or another.

## Conclusion

The main strength of _Functional Programming in Java_ is that its structure and focus makes it far more broadly applicable than a book like [Functional Reactive Programming](functional-reactive-programming), which teaches a more specific programming style.
This means that a Java programmer would probably find it most useful to read _Functional Programming in Java_ first, followed by other books that use functional programming in a particular way.

Java programmers who are using or thinking about using Java 8 should read this book, especially if they haven’t read any books about functional programming yet.
Other books tend to suffer from mixing the content about functional programming with some other topic, library or programming style.
