---
title: 7 ways to write bad comments
description: Things you don’t want to do to your code
tags: programming
layout: hh
---

![I comment my code - but I still don’t know what I did or why](comments-bad.jpg)

Although I’d rather write about how to write good comments, I have to first write about bad comments. Discussion about how ‘bad comments are bad’ gets in the way, so I have to get it off the table first. Think of the following as a kind of sanity check, making sure that we’re all in the same codebase, so to speak.

Bad comments cause as many problems as bad code, so don't write comments that:

1. contain syntax or grammar errors
2. contradict the code
3. are otherwise out-of-date with respect to the code
4. are verbose, taking up too much space
5. are too numerous, adding clutter
6. duplicate the code
7. explain awkward logic.

Most of these require further explanation, just to point out how obvious they are, or should be. Only the last two are less obvious in practice.


## Incorrect syntax or grammar

When you’re writing comments in English, say, it needs to be correct English or the humans are likely to misunderstand it. Letting English syntax or grammar errors pass code review would be like accepting code that doesn’t compile. Use a spell-checker.


## Wrong information

In theory a comment could contradict the code, perhaps because the person who wrote the comment didn’t understand the code, or because the code was changed enough to make the comment obsolete. This is obviously wrong - I don’t know why we’re even talking about this.


## Too much

If you have more lines of comments than lines of code then you’re probably doing it wrong. Sometimes it’s huge paragraphs of text at the start of classes and methods, and sometimes its a comment for nearly every line of code. With rare exceptions, this causes more problems than it solves. It’s hard to read the code if you can’t see it, and it’s hard to maintain the comments if that’s more work than maintaining the code.

One special case is worth mentioning. Comments are generally intended for people reading the code. However, API documentation tools such as Javadoc and Scaladoc use code comments to generate separate API documentation, which is a completely different medium that typically requires much more text. These tools keep API documentation together with the implementation, but their failure is that library programmers who cannot accept so much clutter in their code end up publishing APIs with too little documentation.


## Duplicating the code

Perhaps the worst kind of bad comments are the ones that duplicate the code, simply by saying the same thing as the code. Apart from the obvious redundancy, this leads to both wrong information and too many comments (see above). Remember that comments are supposed to communicate something to the reader, so there’s no place for comments that don’t add any new information.

Kevlin Henney explains this one in the essay [Comment only what the code cannot say](http://programmer.97things.oreilly.com/wiki/index.php/Comment_Only_What_the_Code_Cannot_Say).


## Explaining the code

Comments that duplicate the code are sometimes caused by code that is so difficult to read that it needs explaining. If you’ve worked out that the code is difficult to read, then comments are the wrong solution to the right problem. The easily-stated right solution is to rewrite the code to be clear enough that no comments are required.

Writing self-explanatory code is easier said than done, but is a worthy goal, because it helps avoid all of the kinds of bad comments. Without a separate explanation in a comment, there is no duplication and fewer comments. This, in turn, means few comments to maintain and less information in comments than can later be wrong.

## Writing good comments

Rewriting code to reduce the need for comments is also understandably popular with programmers, because it replaces something you don’t like (commenting code) with something you do (coding). Just beware that this is not always the solution: some comments are a good idea, and need spell-checking, editing for readability and updating.

Reducing the need for comments only gets you so far, though. The next step is to understand which comments improve the code, and to start writing good comments. Even if we agree that you’re not going to write bad comments, you’re not done yet.

_Photo: [quinnanya](https://www.flickr.com/photos/quinnanya/4869433260) / [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/)_
