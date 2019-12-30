---
title: How to comment code
description: What you have to actually do to get good comments
tags: programming comments
layout: hh
---

![revisions](revisions.jpg)

Once you’ve worked out the difference between [bad comments](7-ways-to-write-bad-comments) and [good comments](3-kinds-of-good-comments), you still have to write them. How you do this is less obvious than it ought to be, so here’s an approach that might work for you.

Writing comments has a lot in common with both writing code and writing prose. After all, it _is_ prose and it’s _about_ code, so don’t expect writing comments to be any easier. The key to actually writing good comments is to keep the following in mind.

* There are [several ways write bad comments](7-ways-to-write-bad-comments).
* Not writing any comments at all is giving up.
* [Good comments](3-kinds-of-good-comments) answer the ‘why?’ questions in a way that good code cannot.
* It is unreasonable to expect to write a comment once and never have to edit it.
* Comments require review, rewrites and refactoring to make them good, just like code.
* Improving code includes deleting lines of comments, as well as deleting lines of code.

Writing comments is the same activity as writing code, and involves writing the wrong thing, deleting it, writing it again and editing it until it’s right.


## Try to write good code first

The key to avoiding the traps of [bad comments](7-ways-to-write-bad-comments) is to improve the code so that those kinds of comments are not necessary. Rename classes and methods so that it is clearer what they do, and rewrite implementations so that it is clearer how they do it. Remove comments that make the code worse rather than better.

If you’re writing code and you get stuck and don’t know what to write next, this might be a good time to switch to writing comments, to consolidate what you have written so far. More importantly, the attempt to write a comment can help you realise that the code isn’t what it should be.


## Try to write a one-sentence comment

When you have existing code, or the first version of code that you just wrote, try adding minimal comments. In the following order, write a (properly-punctuated and grammatically correct) one-sentence documentation comment for each:

1. class
2. public method
3. private method.

Note that the one-sentence requirement makes this harder: it might be easier to write a whole paragraph at first, but it’s important to work out how to say what you want to say in a single sentence. This is a bit like using Twitter, assuming you don’t just retweet links to photos of kittens and ponies. Writing concisely takes practice.

Not every comment is going to be equally easy to write, which is useful information that you can only find out by trying to write the comment. There are broadly three different cases, which is how you learn more about your code.


## Learn about your code from having tried to write comments

The comment might be trivially easy to write, and you can write it as fast as you can type. This is a good thing, when you have been able to write a good comment for code you understand without this costing a lot of time. However, it could also be a sign that you have written a bad comment that doesn’t add any useful information. It’s worth considering whether this means you have unnecessary code that doesn’t do anything useful, or whether a comment isn’t needed, in which case you should just delete the comment.

There are some obvious special cases for methods that shouldn’t have comments, such as JavaBean getter methods. The name for code that doesn’t express anything interesting enough to need a comment is _boilerplate_, and is a sign that you need to refactor or even consider a new programming language.

The second case is that it turns out to be very hard to write a good one-sentence comment for a class or method. This is an important discovery: you either don’t understand what the code is for, or the code is too incoherent to be documented in a concise comment. Now you have some real work to do, but don’t get bogged down before you finish adding one-sentence comments: add a TODO comment to document the task for later.

The final case is the happy medium where you are able to write a good comment after some thought. This is time that you will save the many readers of the same code, which includes your future self.



## Refactor the code until the comment is easy to write

After you have added one-sentence comments to classes and methods, you will have probably identified a small number of problem areas. Now it’s time to refactor or rewrite the code, or even investigate whether the code in question is required at all. After all, the best way to judo the problem of code that is hard to comment is to be able to delete the code.

You’ve finished refactoring then code when the comments are now easy to write. Now you can get to the first good version of code _and_ comments. This is a good time for code review.


## Review the comments as well as the code

Code, like prose, needs to be read by other people and improved. Programmers can get this mixed up and forget to properly include comments in code review. Complaints about bad comments often identify outdated comments as problem, which suggests that code review is being neglected.

Code review is needed because comments talk about code at a different level than the code itself, and it can be hard for the person who wrote the code to take that step back. Pair programming helps a lot here, because while one person codes, the other can be thinking about the higher level - _Why are we doing this? - and how to express this in a good comment.

Finally, don’t forget the [rules of good writing](george-orwell-rules-scala), and to think about how to apply them to comments: avoid clichés, be concise, remove unnecessary words, and break the rules when you have to.

_Photo: [quinnanya](https://www.flickr.com/photos/quinnanya/2021672445) / [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/)_
