---
title: Questions about documentation and avoiding writing it
description: Q&A for my forthcoming keynote at ProgSCon London 2016
tags: documentation
layout: hh
image: progscon-london.png
---

[ ![ProgSCon London](progscon-london.png) ](http://progscon.co.uk)

On 22 April 2016, I’ll be presenting [Documentation avoidance for developers](https://hilton.org.uk/presentations/documentation) as the keynote for [ProgSCon London 2016](http://progscon.co.uk).
In the run up to the conference, the organisers asked me a few questions about the topic.

## Professional experience

> Could you share with us one of your professional experience about document issues?

Some years ago, my employer bought a failed startup for its IP and client list, and we took on a six month project to deliver solution based on their inherited code.
When you inherit 300K lines of code and you need to figure out how to maintain and enhance it, then you want to start with some documentation.

It turns out to take a really long time to figure out a complex system just by looking at the code, even if the code is well written.
In this case it wasn’t.
Needless to say, we didn’t have much in the way of spare time to figure it all out either.
I remember finding the highest and lowest level questions hardest: ‘what problems does the system as a whole solve, and what is this particular piece of code for?’

## Clean code

> Kernighan & Plauger, once said ‘The best documentation for a computer program is a clean structure.’ How well does this apply to the relation between code and documentation?

They may well be right, and better code is certainly the best documentation-avoidance strategy for developers.
This is a good example of how documentation relates to code by explaining things that the code doesn’t.
Ideally, documentation is only there to explain things that the code cannot.
In practice, useful documentation is there to explain things that the code should make clear itself, but doesn’t.

In practice, a parallel strategy is most effective: while improving your code to make it as good as Kernighan & Plauger’s, also consider how to compensate for code that isn’t that good yet.
A good refactoring reduces the need for documentation, as well as improving the code.
Refactoring won’t reduce the need for all of it, though.

Meanwhile, even if clean structure is the best documentation, it is not necessarily the only documentation a program needs.
There are still plenty of questions that perfect code cannot answer about itself, such as why it exists in the first place.

## Documentation deliverables

> Lot of projects have documentation as a deliverable, do you think these is a good practice?

There’s no such thing as a good practice for all projects, even for documentation.
Every problem, solution, organisation and team are different.
Some software is so straightforward that you’d be insane to spend time on documentation.
Some are so complex that you’d be crazy not to.

## API documentation

> API is an hot topic nowadays, and documentation seems to be a key point for API adoption, how developers should be involved in it?

A public API tends to provide an example of where documentation has high value at relatively little cost, which it a good place to learn about consequences of alternatives to writing documentation, such as putting your email address or discussion forum URL in the README.

Developers also benefit from thinking about how the quality of an API’s design relates to its documentation.
The attempt to write even a rough first draft of API documentation usually reveals problems with the API design, at all levels.
Developers who release a bad API would ideally undergo the ordeal of having to use it to build something; failing that, documenting the API would suffice.

## Clear code

> Nicolas Boileau, a poet, once said "Whatever is well conceived is clearly said, And the words to say it flow with ease.". How well does this applies to the relation between code and documentation?

Personally, I’ve always found poetry incomprehensible, especially French poetry.
Way back, when I was studying mathematics at a French university, I was studying French grammar and translation and had the biggest problems with literary texts, and poetry especially.
Third-party notes explanations were the only way I could understand the texts.

When code is well-conceived and clearly written, and the team changes, then you barely need documentation.
In practice, code needs refactoring and new team members may be unfamiliar with the domain or language, in which case the code needs documentation.
This might be what Boileau meant, but I can’t be sure.

## User manuals

> Do you read the documentation of any electronic appliance before using it?

Of course not! Before you decide whether to write documentation, don’t forget to consider audience and the documentation’s purpose.
Reading an electronic appliance’s manual would be as weird as reading my e-mail clients’.

However, I’d probably appreciate some documentation if I wanted to fix a bug in my iOS e-mail clients’ code, especially since I don’t know anything about SMTP or Swift programming.
You’re much more likely to manage to design software that doesn’t need a user manual, than you are to write software that doesn’t need any developer documentation.
