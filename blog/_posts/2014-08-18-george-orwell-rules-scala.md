---
title: George Orwell’s six rules for Scala programmers
description: A concise style guide
tags: Scala
layout: hh
---

![George Orwell’s grave](george-orwell.jpg)

In his 1946 essay, [Politics and the English Language](http://www.orwell.ru/library/essays/politics/english/e_polit), [George Orwell](http://en.wikipedia.org/wiki/George_Orwell) (1903-1950) considers ‘the decadence of our language’. At the end of the essay he writes:

> The defence of the English language […] is especially concerned with the scrapping of every word or idiom which has outworn its usefulness. […] I think the following rules will cover most cases:
> 
> 1. Never use a metaphor, simile, or other figure of speech which you are used to seeing in print.
> 2. Never use a long word where a short one will do.
> 3. If it is possible to cut a word out, always cut it out.
> 4. Never use the passive where you can use the active.
> 5. Never use a foreign phrase, a scientific word, or a jargon word if you can think of an everyday English equivalent.
> 6. Break any of these rules sooner than say anything outright barbarous.

There are two things that you might not know about George Orwell’s advice to writers:

1. George Orwell’s real name was ‘Eric Blair’.
2. He was really writing about Scala programming, not English.

You’ll have to trust me (or Wikipedia) about the pseudonym thing. That he was writing about Scala, however, is self-evident once you consider the rules individually.


## 1. Don’t use object-oriented design patterns

> Never use a metaphor, simile, or other figure of speech which you are used to seeing in print.

Orwell’s first rule is clearly about design patterns. Design patterns are a useful technique, but they are for _object-oriented_ programming. Scala does not restrict programming style to object-oriented programming, and functional programming offers an alternative idiom to pattern-based object-oriented design that Scala programmers would do well to keep in mind. Orwell cleverly predicted the present day, in which decades of object-oriented design have created an inertia that now hinders the adoption of functional programming in commercial software development.

Incidentally, the book [Design Patterns](http://en.wikipedia.org/wiki/Design_Patterns) was published in 1994, which pre-dates Java. This didn’t stop a generation of Java programmers from misunderstanding the book’s advice to always ‘program to an _interface_, not an _implementation_’, which refers to a class’ public members, not Java interfaces.


## 2. Prefer concise names for values

> Never use a long word where a short one will do.

Orwell’s next rule concerns naming within local scopes, in which he cautions against unnecessarily-long names. Short names make code read more fluently, reduce line-wrapping, and stand in contrast to longer function and class names. Note that this is not an invitation to use abbreviations in value and parameter names; rather, ensure that your command on English vocabulary is such that you can choose the shorter and more precise of two synonyms.


## 3. Remove unnecessary words from class and method names

> If it is possible to cut a word out, always cut it out.

Some APIs feature a class-naming and method-naming style that is so verbose that all meaning is lost. Orwell’s third rule deals with this problem, by urging Scala programmers to avoid making these names as long as possible.

In the presentation [Seven Ineffective Coding Habits of Many Programmers](http://www.slideshare.net/Kevlin/seven-ineffective-coding-habits-of-many-programmers), Kevlin Henney points out how meaningless names like `ManagerControllerProxy` are (not to mention `ManagerControllerProxyFactory`), and explains result of gratuitously added words:

> This is like homeopathy. What you’ve done is you’ve diluted the meaning until it’s all gone.

Curiously, [Henney also publishes fiction](http://asemantic.blogspot.co.uk), just like Orwell.


## 4. Never use mutable state when you can use immutability

> Never use the passive where you can use the active.

Orwell’s fourth rule may be confusing at first, until you realise that [passive voice](http://en.wikipedia.org/wiki/Passive_voice) is a metaphor for mutable state. The link, is clear from the definition given in the Wikipedia page (my emphasis):

> In a clause with passive voice, the grammatical subject expresses the theme or patient of the main verb – that is, the person or thing that undergoes the action or _has its state changed_.

This reference to functional programming is the first clue that Orwell wrote his essay, and its six rules, specifically for Scala programmers.


## 5. Never use scalaz or Haskell idioms when you don’t have to

> Never use a foreign phrase, a scientific word, or a jargon word if you can think of an everyday English equivalent.

This next rule follows immediately from the first mention of functional programming by prohibiting lapses into other languages.

This stands out as the longest rule, which is a result of specifically and separately condemning coding style from other programming languages (Haskell), scientific words (category theory) or jargon (‘monad’ and ‘functor’). Orwell is not arguing against functional programming: he merely demands that this be done within the standard Scala idiom, without dragging other disciplines into it.

As with written English, code that uses unnecessary theoretical terminology looks pompous and fails to achieve its original goals. Jargon from computer science and mathematics is especially inappropriate in business software, where the language is better derived by [domain-driven design](http://en.wikipedia.org/wiki/Domain-driven_design).


## 6. Break these rules rather than write unmaintainable code

> Break any of these rules sooner than say anything outright barbarous.

Finally, the last rule is a warning not to take rules too seriously. In this context, ‘barbarous’ is a literary way of saying unmaintainable. Again, in the ultimate parallel with prose, bad code is code whose meaning rapidly fades from the moment it was written.

_Photo: [Phil Campbell](https://www.flickr.com/photos/clanlife/2620948678)_