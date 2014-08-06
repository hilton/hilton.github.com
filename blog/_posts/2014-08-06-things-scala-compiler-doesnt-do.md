---
title: Things the Scala compiler doesn’t do
description: Impossible functionality that you don’t actually want
tags: Scala
layout: hh
---

Today I thought of six impossible things before breakfast. Well, not before breakfast, but at Monday’s [London Software Craftsmanship Community meet-up](http://www.meetup.com/london-software-craftsmanship/events/187054672/). The event featured more ‘high-level discussion’ than coding, perhaps because there were more beers than laptops: fertile ground for crazy ideas that can’t be done.

I wanted to know what other people think about the idea stricter compile-time checks. The following ideas probably aren’t actually possible with the Scala compiler. And if they were possible via compiler plug-ins then no-one would be mad enough to actually implement these features, and even if they did then no-one would want to use them. Be warned: these are thought experiments.

## 1. Enforce whitespace

There were a few Python developers around the table, so it’s no surprise that the topic of significant white space came up. I wrote before about 
[enforcing coding style as part of the language](http://hilton.org.uk/blog/contstrained-coding-style)
and figure that this is something that would be good for Scala. After all, the 
[Scala Style Guide](http://docs.scala-lang.org/style/) doesn’t recommend any flexibility in how you use white space, so it would be better to simply make these compilation errors.

## 2. Support Unicode characters for operators

I’ve also written about using [arithmetic symbols in source code](http://hilton.org.uk/blog/arithmetic-symbols): `−`, `×` and `÷` instead of the usual ASCII characters that are merely typewriter-era substitutes. In Scala, there’s already precedent for the compiler supporting Unicode characters instead of ASCII art, for `←` and `⇒`, so it’s only logical to support even more basic examples at the compiler level.

## 3. Spellcheck names

[Using only English words in code](http://hilton.org.uk/blog/use-english-in-code) is something else that the compiler could enforce. This suggestion turns out to be most shocking to other developers, because everyone is so used to using abbreviations that they just made up, and expect new members of the team to learn. However, they calm down a little, if you explain that this feature would require the ability declare additional allowed words, or ‘import’ a set dictionary extensions into a package or compilation unit, so you can support domain-specific jargon.

    package models
     
    import jargon.SupplyChain

## 4. Grammar check names

Spellchecking isn’t actually controversial - people leave it turned on in some software. Automatically checking grammar, however, is far less mainstream. This is a shame, because object-oriented programming has some strong English grammar conventions that could reasonably be compilation errors:

    error: illegal noun or noun phrase; consider renaming to TerminateCommand
    class Terminate
          ^
          
    error: illegal noun or noun phrase; consider renaming to EventManager
    class ManageEvents
          ^

Similarly, method names with side-effects must contain verbs (e.g. `enableLaser()`), and subclasses require adjective prefixes (e.g. `AlienTerminateCommand`).

## 5. Thesaurus warnings for names

Beyond simply reporting errors, there is some opportunity to make automated constructive suggestions, provided that you’re careful to avoid reinventing [Clippy](http://en.wikipedia.org/wiki/Office_Assistant). While we’re busy improving naming with spelling and grammar checks, we might as well use another old school writer’s tool: a thesaurus. The compiler, after checking spelling and grammar, could suggest better names from a richer vocabulary:

    warning: simplistic language; consider renaming to Termination
    class TerminateCommand
          ^
          
    warning: unimaginative use of ‘Manager’ class name suffix; consider renaming to Scheduler
    class EventManager
          ^

This could be especially useful for mixed nationality development teams, where non-native English speakers naturally have a smaller vocabulary than native speakers, making naming even harder than it already is.

## 6. Property-based testing on constrained types

Later, at the Software Craftsmanship meet-up, [Christoph Neuroth](https://twitter.com/c089) mentioned property-based testing, an automated testing technique implemented by [scalacheck](http://www.scalacheck.org) in Scala. In property-based testing, you declare ‘properties’ of a function under test, such as expected ranges for numeric return values, and the test framework checks whether this property is true for a wide range of input values. 

Property-based testing is related to the older [design by contract](http://en.wikipedia.org/wiki/Design_by_contract) software design approach, which required the ‘function properties’ to be part of API specifications. The difference is that in property-based testing, automated test code replaces written specifications.

A compile-time alternative approach to property-based testing would be to annotate functions with the properties, perhaps like, and do the checking at the same time as compilation.

    @returnValue(_ > 0)
    def age: Int = ???

More specific types that include the constraint would result in even nicer code:

    def age: PositiveInt = ???

This would be nice, but presumably it’s just impossible.
