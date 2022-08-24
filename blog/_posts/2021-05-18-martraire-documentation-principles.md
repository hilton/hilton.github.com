---
title: Martraire’s principles of documentation
description: Reflections on ‘Living Documentation’, by @cyriux
layout: hh
tags: documentation book
image: living-documentation.jpg
---

![Living Documentation - book cover](living-documentation.jpg)

{:.series}
1. Principles of documentation
2. [Principles of living documentation](living-documentation-principles)
3. [Knowledge exploitation](knowledge-exploitation)
4. [Knowledge augmentation](knowledge-augmentation)
5. [Curation and storytelling](curation-storytelling)
6. [Glossaries and data dictionaries](living-glossary)

The book [Living Documentation](https://www.pearson.com/us/higher-education/program/Martraire-Living-Documentation-Continuous-Knowledge-Sharing-by-Design/PGM1724668.html),
by [Cyrille Martraire](http://cyrille.martraire.com/about/),
covers a wide range of software documentation topics.
This article reflects on the scope the first chapter introduces.

## Documentation as knowledge transfer

Martraire starts by defining documentation from the perspective of knowledge transfer (p17):

> The process of transferring valuable knowledge to other people now and also to people in the future.

This frames documentation’s purpose as the result it achieves: that someone has knowledge the they wouldn’t have otherwise acquired.
I’ve often felt like it took years at the start of my professional career to unlearn the implicit lesson from school that writing has no purpose other than proof-of-work.
Too much schoolwork felt like proving to a teacher that I’d understood something, rather than sharing it.

Any discussion of documentation needs to make this outcome focus explicit, because schoolwork, ISO compliance, and other bureaucracies attach so much importance to the idea of documentation as an achievement in itself.
After all, perhaps knowledge does want to remain secret, in its more power-hungry moments, but it also longs for the liberty that accessible documentation has.
Information usually _does_ want freedom.

## Three principles of documentation

Having dealt with the _documentation-as-goal_ straw man, Martraire moves on to reject the _comprehensive documentation_ straw man.
His principles of documentation continue the knowledge theme, by introducing the scope of _documentation-worthy knowledge_ (p19):

> * Knowledge that is of interest for a _long period of time_ deserves to be documented.
> * Knowledge that is of interest to a _large number of people_ deserves to be documented.
> * Knowledge that is _valuable_ or _critical_ may also need to be documented.

Conversations about software documentation, especially with programmers, risk touching on the fear of having to write a lot of documentation (instead of writing code).
Any discussion of documentation needs the qualification that becomes obvious with experience:
you don’t document most knowledge, and that you don’t actually spend much time on documentation.
Or as Martraire puts it, ‘The Default Is Don’t’.

## The fourth principle

While narrowing the scope of the documentation problem, we can add a fourth principle:

* Knowledge that you can recreate cheaply _does not_ deserve documentation.

You can create knowledge more cheaply than documenting some kinds of information:

1. unpredictable information that changes more frequently than how often you need to use it, as for estimates and most kinds of predictions about the future
2. information that you need so rarely that it costs less effort to ask someone each time, such as an annual check on software whose support will end soon
3. raw information whose audience can interpret it directly, such as diagnostic log messages.

This principle of _less documentation_ subtracts from the documentation I might otherwise recommend writing.
Apparently, [people systematically overlook subtractive changes](https://www.nature.com/articles/s41586-021-03380-y).
Perhaps that explains why software developers make excuses for not documenting _more_, instead of understanding how to successfully document _less_.
