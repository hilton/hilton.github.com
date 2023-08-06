---
title: Build a separate API for public consumption
description: Because APIs have user personas too
layout: hh
tags: API
image: public-park.jpg
---

![](public-park.jpg)

[Luiza Giannelli](https://unsplash.com/photos/1RIlmivtNhw){:.photocredit}

Attempting to use the same back-end API for both your application front end and external API users
[comes with a heavy cost](free-api).
Public APIs need more than some lightly-sprinkled documentation.
Documentation forms the minimum addition for a public API; as the 
[Write the Docs](https://www.writethedocs.org) community likes to say, _docs or it didn’t happen!_

Don’t make the mistake of
[trying to generate the documentation from code](api-documentation-mistakes);
you need to actually write the words and spaces that tools cannot generate.
But public APIs have other less obvious requirements, while a back-end APIs requirements take it in a different direction.

## Back-end API requirements

When your API serves a single client that belongs to the same system, 
you can get away without thinking about external API user needs,
especially if the front-end developers belong to the same development team.
Instead, you can address concerns like documentation and versioning through informal conversation and agreements, without needing a well-designed solution.

You might expect that you should always want a carefully-designed API, but back-end APIs have their own more important requirements: completeness and flexibility.
A back end with no front end has no value in this context, which dictates a back-end API’s most important goal:
complete functional coverage, even at the cost of consistency, usability, or stability.
Or, in the style of #WriteTheDocs,  _UI or it didn’t happen_.

Public APIs also need documented stability, while user interfaces and their operations and data change constantly.
A user interface’s back-end API ability to adapt to these changing environments delivers more value than backwards compatibility.
After all, with a single front end, clients that depend on the previous API don’t exist.

## Public API requirements

To make a public API successful, you have to design and build solutions to the following problems API users will have.

1. **Documentation** - understanding and using the API
2. **Error handling** - diagnosing problems without reading the code (which users often don’t have)
3. **Versioning** - having confidence that their clients will continue to work
4. **Long-term support** - … for more than a few weeks
5. **Authentication** - using standard protocols to gain access
6. **Access management** - managing which developers still have access
7. **Paging and filtering** - controlling how much data to fetch from the API

Your API’s users want you to implement these using standard HTTP approaches,
such as [HTTP error handling](http-error-handling) instead of your home-grown JSON approach.
They want your API to use appropriate response status codes and standard HTTP headers, instead of having to write custom code to parse API responses that reinvent HTTP features.

## Different personas

The developers who build enterprise SaaS products have a different profile to the developers who use the same product’s APIs.
Enterprise developers have more generalist skills, use a broader range of integration-focused technologies, and tend to take on broader responsibilities than product developers.
Your product’s back-end API and its public API serve different personas.

Build a separate API for public consumption because it will provide an external interface whose goals and constraints have more in common with a user interface than with communication between two system components.
This public API even has the potential to become a separate product, so treat it like one.
