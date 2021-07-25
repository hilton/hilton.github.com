---
title: HTTP API versioning approaches
description: Why the experts say you shouldn’t
layout: hh
tags: API design
image: amsterdam-canal-houses.jpg
---

![Evolving facade styles in Amsterdam](amsterdam-canal-houses.jpg)

<a class="unsplash" href="https://unsplash.com/photos/2K2SR19RLg8" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Gaurav Jain</span></a>

*[API]: application programming interface - allows software to communicate with other software, via HTTP in this context
*[HATEOAS]: hypertext as the engine of application state - a REST constraint
*[HTTP]: Hypertext Transfer Protocol - the worldwide web’s standard for transferring data, commonly also used for APIs
*[REST]: representational state transfer - an architecture style for the web
*[RPC]: remote procedure call - referring to treating HTTP requests as function calls
*[URL]: uniform resource locator - uniquely identifies data than an API accesses, in this context

API versioning sounds straightforward, and I’d assumed that `/api/v1` in the URL path solves the problem by giving your API a version number.
Then I saw this from [Fielding himself](https://en.wikipedia.org/wiki/Roy_Fielding):

{:.big style="max-width:34em"}
> The reason to make a real REST API is to get evolvability … 
> a "v1" is a middle finger to your API customers, indicating RPC/HTTP (not REST)
> [@fielding](https://twitter.com/fielding/status/376835835670167552)

The plot thickens!


## Three wrong approaches

Troy Hunt expands on URL path versioning’s problems, writing that
[Your API versioning is wrong, which is why I decided to do it 3 different wrong ways](https://www.troyhunt.com/your-api-versioning-is-wrong-which-is/):

1. URL path, e.g. `/api/v1`
2. version HTTP header, e.g. `api-version: 2`
3. content negotiation HTTP header, e.g. `Accept: application/vnd.example.v3+json `

Each of these involves a combination of compromises:

1. Breaking HTTP semantics - by using URLs to refer not to specific versions of resources
2. [Changing URLs](https://www.w3.org/Provider/Style/URI.html) when you change the API
3. Making the API harder to test - by forcing clients to set HTTP headers
4. Breaking existing API clients - when a new version includes incompatible changes

Some of these cause more problems than others, in practice, and your level of distaste for each may vary.
Personally, I’ve learned that while _breaking HTTP semantics_ sounds esoteric,
it means having to write documentation to replace specifications you didn’t read.
Similarly, not using `Accept` headers properly eventually leads to badly-designed home-grown
[content negotiation](https://en.wikipedia.org/wiki/Content_negotiation).

Meanwhile, Troy Hunt’s compromises don’t suit everyone.
In situations like these, it helps to ask the experts.

## No versioning

Various HTTP experts inhabit the [HTTP APIs Slack](http://slack.httpapis.com), so I explored there.
The plot thickens (again) in the _#versioning_ channel, whose topic reads:

{:.big .solid-three style="max-width:34em"}
> Rule of thumb, don't do versioning :)

When I dug deeper, I din’t find a _no versioning_ movement (or even a hashtag), like
[NoEstimates](https://ronjeffries.com/xprog/articles/the-noestimates-movement/) or
[#noprojects](https://noprojects.org).
Instead, I learned that versioning a whole API makes about as much sense as versioning a whole web site.
Instead, you evolve the API:

1. Don’t use version numbers
2. Don’t break existing clients
3. Change existing HTTP resources or add new ones

Fielding’s comment about ‘a real REST API’ refers to how REST’s hypermedia constraint means that API clients follow links to compatible linked resources, so they don’t need version numbers.
However, even if your API doesn’t use hypermedia, this evolvability requires safe non-breaking changes to your API’s HTTP resources.
Instead of explicit API-level versioning, you do this with implicit _compatible versioning_.

## Compatible versioning

[API Change Management](https://medium.com/good-api/api-change-management-2fe5bba32e9b)
describes how compatible versioning evolves an API by allowing only non-breaking changes to HTTP resources.
This includes a strict definition of no-breaking changes to a resource’s URL, headers, body, HTTP methods, and links to other resources.
To implement a breaking change, you have to add a new HTTP resource.
With this approach, the API evolves without breaking existing clients.

[Asbjørn Ulsberg](https://asbjor.nu) explains this in more detail in his
[API Change Strategy](https://nordicapis.com/api-change-strategy/),
after which he makes a similar [comment](http://disq.us/p/2fkzd4w) to Fielding:

{:.big .solid-two style="max-width:37em"}
> slapping a version number on a web API seems like a simple solution to a simple problem,
> while in fact it is a very naïve solution to a very complex problem

So while HTTP may allow some simplicity, versioning remains complex.
