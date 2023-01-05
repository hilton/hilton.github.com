---
title: HTTP API documentation mistakes
description: Five common ways to get stuck writing the docs
layout: hh
tags: product API documentation
image: wrong-way.jpg
---

![](wrong-way.jpg)

[NeONBRAND](https://unsplash.com/photos/-Cmz06-0btw){:.photocredit}

{:.series}
1. [Documentation usability](api-docs-usability)
2. [Bad API documentation](developers-bad-documentation)
3. [Deconstructed HTTP API docs](deconstructed-api-documentation)
4. API documentation mistakes ←

*[API]: application programming interface - allows software to communicate with other software, via HTTP in this context
*[HTTP]: Hypertext Transfer Protocol - the worldwide web’s standard for transferring data, commonly also used for APIs

To make the first step towards doing something well, you may have to figure out how to not do it badly.
Documenting APIs has a low enough bar that this already results in better-than-average documentation.
By understanding the following mistakes, you can save yourself a lot of time.

## 1. Trying to generate all of the documentation from code

Programmers like to focus on code as the single source of truth, because its structure and testability makes it easier to maintain than documentation.
In doing so, they make the mistake of imagining that they can express the information that documentation requires in code.
That doesn’t work.

API documentation must explain what you will achieve by using the API, how that contributes to its users’ goals, and what benefits they will gain.
While code describes precisely what an API does, it cannot explain _why_.

## 2. Mistaking an API client library for documentation

Wanting to write code instead of documentation also leads developers to prioritise API client libraries over documentation.
An API client library provides code that calls an API, so that developers using API don’t have to call it directly themselves.
In theory, API users will find a client library in a familiar programming language, such as JavaScript, easier to use than calling an HTTP API directly.

In practice, a client library provides yet another API, that requires as much documentation as what it attempts to hide.
It also typically fails to hide every detail of HTTP, inflicting a 
[leaky abstraction](https://en.wikipedia.org/wiki/Leaky_abstraction)
and the worst of both worlds on its users.
Moreover, this approach creates demand for supporting more programming languages, requiring yet more documentation, maintenance and support.

## 3. Documenting implementation instead of design

In [How I got programming to an interface wrong](https://nrkbeta.no/2019/08/26/on-architecture-fifth-post-how-i-got-programming-to-an-interface-wrong/),
[Bjørn Einar Bjartnes](https://twitter.com/bjartnes) writes:

> **Misconception #3. The task at hand is documentation of the implementation**
>
> ‘We need to document what we just built so that it is easy to use.’

In theory, the actual software interface matches the API _by definition_.
In reality, useful APIs simplify how software behaves, 
and exclude some details of its actual behaviour, such as its bugs.
These differences cause problems when the software and its API change:
when they disagree, the design describes the API’s intent, not its implementation.

## 4. Documenting a deconstructed HTTP API

Writing HTTP API documentation typically splits the API into a deeply-nested hierarchy of URLs, paths, methods and parameters.
[Deconstructed HTTP API documentation](deconstructed-api-documentation)
explains how software developers’ container fetishes prioritise maintenance effort over usefulness, and damage API documentation usability.

## 5. Leaving out the data dictionary

API documentation that describes valid HTTP requests, without explaining what the data means, resembles a phrase book that describes pronunciation without translations:
you can use it to make syntactically correct requests, but you’ll end up asking the waiter for more soup when you want to pay the bill.

API documentation sometimes fails to reach the necessary depth, documenting URLs and HTTP methods without explaining what the data means.
API users need a data dictionary for the data model serialised in request and response bodies.
The
[Spotify API object model](https://developer.spotify.com/documentation/web-api/reference/object-model/) 
provides a nice example:
I know what _album_ means, but I don’t know whether an artist wants to have a _popularity_ score of 10.
