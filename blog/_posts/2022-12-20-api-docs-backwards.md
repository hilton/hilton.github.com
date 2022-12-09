---
title: Backwards API docs
description: Why API docs resist good explanations
layout: hh
tags: API documentation
css: "article img {width:640px}"
image: wrong-way.jpg
---

![](wrong-way.jpg)

[NeONBRAND](https://unsplash.com/photos/-Cmz06-0btw){:.photocredit}

API documentation typically presents information in the wrong order.
A better [explanation order](explanation-order)
starts with concrete examples that illustrate typical interactions.
Explaining the details comes later.

## Deconstructed HTTP

Developers typically model things by breaking them down into their components, putting each in its own named box.
This captures every detail, but risks hiding the forest among the trees.
When API specifications precede examples, you deconstruct the APIs HTTP requests and responses into a different but (hopefully) equivalent non-standard representation.

The following [Redoc](https://github.com/Redocly/redoc#readme) example illustrates this.
The visual hierarchy gives precedence to path parameters over the resource URL, and to the (missing) request body schema over the request body.

[ ![Redoc documentation example](api/pirates-redoc.webp) ](api/pirates-redoc.webp)

Perhaps this somehow looks more impressive than raw, brutalist HTTP requests and responses.
You even get to interact with it: the possible responses are so deconstructed that you have to expand their sections on the left, to discover their headers and response schemas, and select their tabs on the right to view their example response bodies.

## Missing examples

At least the OpenAPI specification document Redoc renders allows documentation to include examples, even if it doesn’t particularly encourage them.
Without examples the reader has to implement an HTTP client in their head to figure out what a concrete request will look like.

Backwards API documentation treats examples as the optional content, while always more detailed information, such as required authorisation headers.
The OpenAPI specification enables this, and renderers like Redoc further encourage it by producing reasonable-looking output when you omit the examples, but not the other way around.

In this case I blame Redoc, but not OpenAPI, which is a _specification_ language, not a documentation or explanation language.
In practice, don’t expect to be able to generate an explanation from a specification.

## Why

Programmers tend to write documentation they way they write code, in the order that makes sense to a computer (the language parser) instead of what works best for people.
Moreover, developers expect to find API documentation as hard to read as code, and want to avoid change more than they want documentation usability.
