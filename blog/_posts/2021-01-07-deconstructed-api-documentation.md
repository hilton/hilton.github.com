---
title: Deconstructed HTTP API documentation
description: The conventional way to write hard-to-use API documentation
layout: hh
tags: product API documentation
image: typewriter-deconstructed.jpg
css: ".hierarchy { margin-left:3em; line-height:1.1em; } 
  .hierarchy span { color: #DF5A49; white-space: pre; font-size: 1.2em; font-family: serif; }"
---

![A deconstructed typewriter](typewriter-deconstructed.jpg)

<a class="unsplash" href="https://unsplash.com/photos/-K6JMRMj4x4" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Florian Klauer</span></a>

<!--
1. Coders apply coding habits to docs.
2. Developers fetishise containers.
3. Deconstructing interactions obscures the conversation.
4. People document a deconstructed HTTP API rather than the actual API.
5. The resulting documentation prioritises the writer and editor over the readers.
-->

*[API]: application programming interface - allows software to communicate with other software, via HTTP in this context
*[HTTP]: Hypertext Transfer Protocol - the worldwide web’s standard for transferring data, commonly also used for APIs
*[URL]: uniform resource locator - uniquely identifies data than an API accesses, in this context

[Developers write bad API documentation](developers-bad-documentation)
because they apply good coding habits to technical writing, where they don’t belong.
In particular, software development encourages aggressive hierarchical decomposition - putting things in boxes.

## Putting things in boxes

‘Divide and conquer’ (Latin: _[divide et impera](https://en.wikipedia.org/wiki/Divide_and_rule)_),
the fundamental maxim of software development, dictates that every detail of a system must exist inside some kind of ‘container’.
This approach deals with essential system complexity by adding as much accidental complexity as possible.
This also has the benefit of introducing endless new container abstractions, 
to maximise the work of [naming things](why-naming-things-is-hard).

While I _might_ not actually mean that seriously, it does seem that every era and branch of software development has its own
[container fetish](https://en.wikipedia.org/wiki/OS-level_virtualization).
This explains why technology stacks use so many synonyms of _container_:
repository, cache, archive, stash, file, folder, envelope, wrapper, directory, catalogue, module, package, bundle, crate, batch, etc.
And despite these abstractions’ value, software developers sometimes go too far.

## Deconstructed interactions

The small phrasebook [Making Friends in English](https://www.amazon.co.uk/Penguin-Guides-Making-Friends-English/dp/0582468884)
(Penguin Quick Guides)
contains this brief example dialogue that takes place at a party (original emphasis):

> MARK:	Raúl, come with me and I’ll introduce you to a few people.
>
> RAUL:	OK.
>
> MARK:	**Have you met Lucy?**
>
> LUCY:	Yes, we’ve already met.
>
> MARK:	OK, in that case, **meet Sam**.
> Sam and I were at college together. **Sam, this is Raúl.**
> Raúl’s a mate of mine from Spain.

If you wrote this phrase book the way developers usually write API documentation, you’d end up with something like this:

<img src="introduction-api.png" srcset="introduction-api-2x.png 2x" alt="An API for introducing someone" />

In the pursuit of abstraction, deconstructing the introduction has discarded the conversation, leaving information without context or explanation.
You can’t use this to understand how the introduction works.
HTTP API documentation typically suffers the same fate.

## Deconstructing an HTTP API documents the wrong API

HTTP API documentation tends to structure the API in a deeply-nested hierarchy:

<p class="hierarchy">Base URL  
<br><span>┣</span> URL path
<br><span>┃┣</span> HTTP method
<br><span>┃┃┣</span> Request
<br><span>┃┃┃┣</span> Parameters
<br><span>┃┃┃┣</span> Headers
<br><span>┃┃┃┗</span> Body
<br><span>┃┃┣</span> Response
<br><span>┃┃┃┣</span> Status
<br><span>┃┃┃┣</span> Headers
<br><span>┃┃┃┗</span> Body
<br><span>┃┃┗</span> Errors
<br><span>┃┃    ┗</span> …
<br><span>┃┣</span> …
<br><span>┣</span> …
</p>

Splitting each HTTP request across this hierarchy scatters the parts of a URL like `https://api.example.com/search?query=new` to several different places in the documentation.
Extracting duplication, such as authentication and errors, from requests and responses by moving the information to a single place in the documentation, somewhere else, makes the situation even worse.

HTTP API documentation that removes all duplication overfits to a particular abstraction - a way of thinking about that API that has more to do with how you might implement the same functionality in, say, an object-oriented programming language.
The documentation essentially documents that other API, not the HTTP API.

## API treasure hunt

The documentation’s author might find the resulting structure exceedingly satisfying, 
but its appalling usability will frustrate readers, who have to assemble API requests by playing a perverse game of treasure hunt.

Instead, HTTP documentation should look more like HTTP itself, and should at least present the information that goes together in an HTTP request in the same place.
After all, HTTP’s request-response style makes an HTTP API a conversational API that has more to do with Raúl meeting Lucy at a party than objects and functions in code.
