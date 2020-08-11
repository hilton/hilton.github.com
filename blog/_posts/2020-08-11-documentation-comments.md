---
title: Write one-sentence documentation comments
description: "From ‘97 Things Every Java Programmer Should Know’"
layout: hh
tags: programming
image: 97-things-java.jpg
css: ".blog .content a img { width:150px; float:right; margin:0 0 1em 1em; }"
---

<a href="http://shop.oreilly.com/product/0636920048824.do" title="97 Things Every Java Programmer Should Know">
<img src="97-things-java.jpg" alt="book cover"></a>

> ‘A common fallacy is to assume authors of incomprehensible code will somehow be able to express themselves lucidly and clearly in comments’ - Kevlin Henney

You’re probably either writing too many comments in your code, or none at all. _Too many_ generally means _too many to maintain_, which risk becoming dangerously inaccurate comments that you’re better off deleting. _Too many_ is also likely to mean that they’re badly written and unimproved, because it’s hard to write ‘lucidly and clearly’. _None at all_ means relying on perfect naming, code structure, and tests; which is even harder than it sounds.

We’ve all seen a lot of code whose authors didn’t write any comments at all, either to save time, because they didn’t want to, or because they thought their code was self-documenting. Sometimes code really is that well-written: the first thousand lines of a new project, the hobby project written in artisanal hand-crafted code, and maybe the mature well-maintained library project whose narrow focus keeps the codebase small.

Large applications are different, especially enterprise business applications. Comments are a problem when you’re maintaining 100,000 lines of code that other people wrote, and are still adding to. That code isn’t all going to be perfect, and needs some explanation. The hard question is _how much_ explanation: how many comments?

The answer to commenting large application codebases is to write one-sentence documentation comments, as follows.

1. Write the best code you can.
2. Write a one-sentence documentation comment for every public class and method/function.
3. Refactor the code.
4. Delete unnecessary comments.
5. Rewrite bad comments (because all good writing requires _rewriting_)
6. Only add detail where absolutely necessary.

This approach helps you discover which comments are necessary, either because the code cannot explain things like why it exists, or because you haven’t had time to refactor it yet. You find out when you write the one-sentence comment: If a good comment takes several minutes to write, then it’s necessary, and will save you and other readers time in the future.

If you wrote a good comment as fast as you can type, then you identified ‘obvious’ code that doesn’t need the comment, which you must immediately delete. The trick is that this discovery requires actually writing the comment, however obvious you _think_ the code is, and especially if you wrote it yourself. Do not skip this step!

You always need a minimum number of comments that [Comment only what the code cannot say](https://medium.com/@kevlinhenney/comment-only-what-the-code-cannot-say-dfdb7b8595ac), answering the _why_ questions that you can’t answer in code. Limiting these to one sentence per public interface makes the writing, code review, and maintenance effort realistic, and lets you focus on quality and brevity.

Don’t write more than one sentence unless you really have to. There might be more _why_ questions, unusual complexity, or obscure domain language jargon to explain, especially abbreviations. Delegate where you can: Problem domains often have Wikipedia pages you can link to.

Comments are amazingly useful, if they’re good, mainly because we spend more time reading code than writing it. Comments are also the only feature common to all general programming languages. When programming, use the best language for the job. Sometimes, it’s English.

_This article by Peter Hilton first appeared in 
[97 Things Every Java Programmer Should Know](http://shop.oreilly.com/product/0636920048824.do)
under a [Creative Commons license](https://creativecommons.org/licenses/by/4.0/)._
