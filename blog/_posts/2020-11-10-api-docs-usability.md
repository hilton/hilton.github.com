---
title: The API documentation usability challenge
description: Why HTTP API documentation results in a poor developer experience
layout: hh
tags: API documentation
---

<!--
1. An API you can use from anywhere
2. No single way to call an API
3. Docs that don’t match the client
4. Developers write the docs
-->

When someone asks if your app has an API these days, you can assume that they mean an HTTP API that transports data in JSON format.
HTTP, like the web more broadly, owes its success to its simplicity and openness, and the fact that you can use it anywhere, with any technology.
HTTP’s strength, however, leads to your HTTP API’s biggest weakness.

## The HTTP API usability problem

Everyone who uses your API might call it in a different way, making it harder for you to optimise their experience.
Your API consumers’ experience - their developer experience - matters for the same reason that an application’s user experience matters.
We should treat developers like people too.

To deliver a great developer experience, your API needs to address several related developer needs.

1. They need to find out what your API does.
2. They need to learn how to use your API for the first time.
3. They need to look up details of your API that they cannot reasonably remember.
4. They need to troubleshoot failed API requests.

However good your API’s design, people who use it need API documentation.
From a product perspective, this documentation makes up part of the product, and part of what determines the developer experience.
And the developer experience contributes to your (API) product’s success, or failure.

## The documentation doesn’t match the API client

When you don’t know what programming language and HTTP client people will use to access your API, you can’t tailor the documentation to the code they’ll write.
Instead, a developer will have to write code using information that will appear in the API documentation in the wrong order and in more than one place.

This won’t cause a big problem, if your documentation has a logical and consistent structure, but it does mean that the developer has to learn your documentation structure before they can start using and learning your API.
Unfortunately, this need for consistency and structure can lead documentation authors to structure the documentation the same way they would structure code.

## The API developers write the documentation

While customer-facing staff may write most of your product documentation, HTTP API documentation may require more technical knowledge than they have.
To produce good API documentation you need a technical writer.
Meanwhile, software development organisations that publish APIs don’t always employ technical writers, so their developers write the API documentation instead.

Unfortunately, people who write code don’t usually have technical writing skills as well.
As a result, the way that programmers tend to write API documentation makes the developer experience worse for developers who need to use that documentation to successfully use the API, for various reasons.
