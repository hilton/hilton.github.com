---
title: Write code with meaning
description: What connects 3 of the 97 Things Every Java Programmer Should Know
layout: hh
tags: programming
image: 97-things-java.jpg
---

{:.series}
1. [Boolean values](refactor-boolean-enumeration)
2. [Naming things](get-better-at-naming)
3. [Documentation comments](documentation-comments)
4. Write code with meaning ←

<a class="cover" style="width:auto" href="http://shop.oreilly.com/product/0636920048824.do" title="97 Things Every Java Programmer Should Know">
<img src="97-things-java.webp" alt="book cover" style="width:150px"></a>

In 2020, I contributed three articles to the programming advice book
[97 Things Every Java Programmer Should Know](http://shop.oreilly.com/product/0636920048824.do):

1. [Refactor Boolean values to enumerations](refactor-boolean-enumeration)
2. [Get better at naming things](get-better-at-naming)
3. [Write one-sentence documentation comments](documentation-comments)

As standalone articles, they don’t mention what ties them together:
all three address the same topic, but for different experience levels.

## Hardware focus

When I first started working as a programmer, my older colleagues had experience in a style of coding that had become a professional niche.
They knew how to code for the computer,
focusing on how to optimise runtime performance for the memory hardware, for example.

Data structures such as bit flags let you write code that organises computer memory.
I felt lucky to have avoided low-level systems programming, and never needed to use C professionally.
After all, who has time for pointers?
Instead, I learned different idioms for web application programming, in languages like Perl and Java that have their own particular styles, even though you can use them in more than one way.

## Language focus

‘[Refactor Boolean values to enumerations](refactor-boolean-enumeration)’
describes replacing Boolean fields in Java code with enumerations.
Boolean properties belong to programming that optimises data structures to fit neatly in physical memory, while enumerated types make code easier to read and maintain.

Junior programmers start by focusing on learning to use language features in idiomatic style.
Sure, you can write C code in any language, but you shouldn’t.
Instead, using enumerations properly helps you write code that uses Java language features to organise meaning. 
Enumerations also have the advantage of having more things to name, so you can practice getting better at that.

## Domain focus

‘[Get better at naming things](get-better-at-naming)’
gives examples of better naming, which goes beyond language conventions.
Good naming uses better vocabulary to evoke more precise meanings,
saying what a class does instead of calling it a _Manager_, for example.

Experienced programmers combine better writing with _domain vocabulary_,
to introduce even more precise jargon.
Getting better at naming lets you write code that uses domain language to enhance meaning.

## Business focus

‘[Write one-sentence documentation comments](documentation-comments)’ takes these ideas further.
With practice, you can learn to stop writing 
[bad comments](7-ways-to-write-bad-comments) that duplicate code,
and start writing [good comments](3-kinds-of-good-comments) -
sentences that step outside the programming language’s constraints, to communicate
[what the code cannot say](https://kevlinhenney.medium.com/comment-only-what-the-code-cannot-say-dfdb7b8595ac).

Advanced programmers use code comments to explain business context,
such as why the code exists and who needs this feature.
By writing down the code’s business value, you build the understanding you need to work with stakeholders outside the development team.

## Code with meaning

A single idea ties the three articles together: good code has _meaning_, expressed on several levels.
Without meaning, you only have machine instructions, disconnected from the world.

In practice, you should write code with meaning so that other people can understand and maintain it.
And if your code doesn’t mean anything, then even comments can’t help.
