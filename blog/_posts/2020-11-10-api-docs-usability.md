---
title: The API documentation usability problem
description: Why API documentation tends towards a poor developer experience
layout: hh
tags: product API documentation
image: library-reference.jpg
---

![Reference library](library-reference.jpg)

<a class="unsplash" href="https://unsplash.com/photos/IZyAtxoPX98" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Monjur Hasan</span></a>

<!--
1. An API you can use from anywhere
2. No single way to call an API
3. Docs that don’t match the client
4. Developers write the docs
-->

When someone asks if your product has an [API](https://en.wikipedia.org/wiki/API), they probably mean an [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) API that transports data in a standardised text format.
HTTP, like the web, owes its success to its simplicity and openness, and the fact that you can use it anywhere.
HTTP’s strength, however, leads to your product’s API’s biggest weakness: its documentation’s usability.

## Ubiquity comes at the cost of usability

You can typically use HTTP anywhere, with any technology.
But every API user might call an HTTP API in a different way, making it harder for you to optimise their experience.
And even if you provide code examples for more than one programming language, you might still have to choose between popular HTTP client libraries.

Some APIs do this well, and maintain a large set of code examples.
This requires complexity and effort that creates a trade-off with whatever else you might spend that on, such as a better API.
Meanwhile, you still need API documentation.

## Usable APIs have usable documentation

API users’ developer experience will depend on how easily they can:

1. find out what your API does
2. learn how to use your API for the first time
3. look up details of your API that they cannot reasonably remember
4. troubleshoot failed API requests.

No matter how good the API design, you also need good API documentation to make it usable.
The tension between these four documentation purposes and the value of simplicity leads to another trade-off:
simple vs usable documentation.

## HTTP-oriented documentation doesn’t fit the API client

When you don’t know what HTTP client people will use to access your API, you can’t tailor the documentation to the code they’ll write.
The usual documentation approach deconstructs HTTP requests and responses into separate items:

* host (server)
* HTTP method
* URL
* request parameters
* request headers, e.g. authentication, content types
* request body
* response status, e.g. error statuses
* response headers, e.g. content type, rate limits
* response body

API users then write code using this information, which the documentation inevitably lists in the wrong order and in separate places.

This won’t cause a critical problem, provided that your documentation has a logical structure, but does mean that API users have to learn your documentation structure before they can start using and learning your API.
This need for consistency and structure can lead documentation authors to structure the documentation the same way that programmers structure code, at the cost of its usability, not least because programmers write the documentation.

<h2 id="developers">Developers write the wrong documentation</h2>

While customer-facing staff may write your other product documentation, API documentation may require more technical knowledge than they have.
Programmers have that knowledge, but to produce good API documentation you need a technical writer, which software development organisations don’t always employ.
Instead, developers write the API documentation.

People who write code don’t necessarily have technical writing skills as well.
As a result, the way that programmers tend to write API documentation makes the developer experience worse for API users - the developers who need that documentation to use the API.

The intersection of APIs, HTTP and programmers creates a tough documentation problem.
We don’t have the best solution yet.
