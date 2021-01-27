---
title: Enforcing coding style as part of the language
description: What if the compiler only accepted one coding style?
tags: programming
layout: hh
image: white-desk.jpg
---

![Whitespace - a white desk against a bit white wall](white-desk.jpg)

<a class="unsplash" href="https://unsplash.com/photos/nvzvOPQW0gc" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Bench Accounting</span></a>

I’ve come to accept that programmers will never all agree about coding style, or even a specific question such as how to use whitespace.
I do find it hard to accept that this problem remains unsolved, though.
Whitespace arguments probably date back to the 1960s or 1970s, and yet 
[programmers still discuss tabs and spaces](http://programmers.stackexchange.com/search?q=tabs+spaces). 
At length.

It seems that some programmers have a (very) strong opinion about whitespace in code, but the programming languages they use never seems to enforce it.
Do programming language designers really not care whether you indent with tabs, or do their indentation beliefs somehow lack conviction?

[Ken Arnold](http://en.wikipedia.org/wiki/Ken_Arnold) stated this particular rhetorical question somewhat more strongly, in the opening essay in [The Best Software Writing I: Selected and Introduced by Joel Spolsky](http://joelonsoftware.com/articles/BestSoftwareWriting.html):

> … the only way to … stop worrying about style is to enforce it _as part of the language_. … I’m saying that, for example, the next ANSI C update should define the standard K&R C programming style into the language grammar.

This sounds like an excellent idea.
If the problem of coding style, including whitespace, has a solution then surely our languages could reasonably simply refuse to compile code that violates the ~~convention~~ grammar.
I don’t think the sky would fall.

Besides, _coding is design_, and I hear that 
[embracing constraints](https://gettingreal.37signals.com/ch03_Embrace_Constraints.php) results in better design.
