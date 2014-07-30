---
title: Enforcing coding style as part of the language
description: What if the compiler only accepted one coding style? #programming
layout: hh
---

I’ve come to accept that programmers are never all going to agree about coding style, or even a specific question such as how to use whitespace. What’s hard to accept is that this isn’t a solved problem. The first whitespace argument was probably back in the 1960s or 1970s, and yet [programmers still discuss tabs and spaces](http://programmers.stackexchange.com/search?q=tabs+spaces). At length.

It seems that some programmers have a (very) strong opinion about whitespace in code, but this never seems to be enforced by the programming language they use. Is this because programming language designers are different, and don’t really care where you indent with tabs, or do language designers’ indentation beliefs somehow lack conviction?

[Ken Arnold](http://en.wikipedia.org/wiki/Ken_Arnold) stated this particular rhetorical question somewhat more strongly, in the opening essay in [The Best Software Writing I: Selected and Introduced by Joel Spolsky](http://joelonsoftware.com/articles/BestSoftwareWriting.html):

> … the only way to … stop worrying about style is to enforce it _as part of the language_. … I’m saying that, for example, the next ANSI C update should define the standard K&R C programming style into the language grammar.

This sounds like an excellent idea. If coding style, including whitespace, is a solved problem then surely it would be reasonable for our languages to simply refuse to compile code that violates the ~~convention~~ grammar. I don’t think the sky would fall.

Besides, _coding is design_, and I hear that [embracing constraints](https://gettingreal.37signals.com/ch03_Embrace_Constraints.php) results in better design.
