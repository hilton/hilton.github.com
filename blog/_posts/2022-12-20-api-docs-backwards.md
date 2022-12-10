---
title: Backwards API docs
description: Why API docs resist good explanations
layout: hh
tags: API documentation
css: "a img {width:640px; border: 2px solid #08f}"
image: wrong-way.jpg
---

![](wrong-way.jpg)

[NeONBRAND](https://unsplash.com/photos/-Cmz06-0btw){:.photocredit}

API documentation typically presents information in the wrong order.
First, come HTTP methods, authorisation information, and other cross-cutting concerns, followed by a breakdown of parameters.
The resource identifiers (URLs), request and response bodies, and their explanations often appear last, as an afterthought.
And even then, the documentation often leaves you guessing about what these requests and responses will actually look like.

A better [explanation order](explanation-order)
starts with concrete examples that illustrate typical API interactions.
API users need the details later, after they’ve understood the broad strokes and are ready to implement an API client.

{:#deconstructed}
## Deconstructed HTTP

Developers like to model things by breaking them down into their components, putting each in its own named box.
This neatly captures every detail, but risks hiding the forest among the trees.
When API specifications precede examples, you deconstruct the API’s HTTP requests and responses into a different but (hopefully) equivalent non-standard representation.

The following [Redoc](https://github.com/Redocly/redoc#readme) example illustrates reversed order.
The left-to-right visual hierarchy gives precedence to path parameters over the resource URL, and to the (missing) request body schema over the request body.

[ ![Redoc documentation example](api/pirates-redoc.webp) ](api/pirates-redoc.webp)

Perhaps this somehow looks more impressive than raw, brutalist HTTP requests and responses.
You even get to interact with it: the possible responses are so deconstructed that you have to expand their sections on the left, to discover their headers and response schemas, and select their tabs on the right to find the hidden example response bodies.

{:#examples}
## Missing examples

At least the OpenAPI specification document Redoc renders allows documentation to include examples, even if it doesn’t particularly encourage them.
Without examples the reader has to implement an HTTP client in their head to figure out what a concrete request will look like.

Backwards API documentation treats examples as the optional content, while prioritising detailed information, such as required authorisation headers.
The OpenAPI specification enables this, and renderers like Redoc further encourage it by producing reasonable-looking output when you omit the examples, but not the other way around.

In this case I blame Redoc, but not OpenAPI, which is a _specification_ language, not a documentation or explanation language.
In practice, don’t expect to be able to generate an explanation from a specification.

{:#backwards}
## Why API docs go the wrong way

Programmers tend to write documentation they way they write code, in the definitions-first order that makes sense to a computer (the language parser) instead of the examples-first order that works best for people.
Moreover, developers expect to find API documentation as hard to read as code, and want to avoid change more than they want documentation usability.

Tooling such as Redoc further caters to programmer priorities, with tools for people who want to _avoid_ writing documentation.
These are not tools for people who want to _actually write_ good documentation.
