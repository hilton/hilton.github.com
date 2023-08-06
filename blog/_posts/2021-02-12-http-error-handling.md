---
title: Use HTTP error handling in APIs
description: Improving developer experience with a richer HTTP vocabulary
layout: hh
tags: API
image: ice-cream-dropped.jpg
---

![](ice-cream-dropped.jpg)

<a class="unsplash" href="https://unsplash.com/photos/52jRtc2S_VE" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Sarah Kilian</span></a>

Your API’s developer experience (DX) matters as much as your web site’s user experience:
making people more successful ultimately makes more people successful.
For HTTP APIs, a good DX doesn’t only come from HTTP’s simplicity, but also from its depth.

This article explains why you should use HTTP error handling, instead of inventing your own.
You can also skip straight to the [HTTP client error status code checklist](http-client-error-checklist).

## Use HTTP’s rich vocabulary

HTTP contains features that you can use to make APIs more usable for developers.
Tragically, APIs sometimes reinvent HTTP features, making it harder for developers to find documentation, and understand your API’s exact functionality, design choices and limitations - all aspects of poor DX.

[HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes), in particular,
provide a rich vocabulary with precise semantics that makes error handling more usable than relying on API-specific error messages.
More generally, HTTP has a simple structure, but a rich standard vocabulary of 
about [60 status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes), 
about [50 headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields), 
and works with around 1900 registered [MIME types](https://en.wikipedia.org/wiki/MIME).

## Use error response codes

One thing shouldn’t require saying, but does:
your API will have terrible DX if you don’t use an _error_ status code to report an error.
Checking whether `status code ⩾ 400` always costs less than parsing a custom error response.

[![You Give REST a Bad Name (music video)](you-give-rest-a-bad-name.png)](https://www.youtube.com/watch?v=nSKp2StlS6s)

[Dylan Beattie and the Linebreakers](https://dylanbeattie.net/music/)
sang this more memorably in
[You Give REST a Bad Name](https://www.youtube.com/watch?v=nSKp2StlS6s):

> You say it works in a RESTful way  
> Then your errors come back as 200 OK

[Live at NDC Oslo 2019](https://www.youtube.com/watch?v=Zq-sGEwPLUQ),
Beattie introduced this as ‘a song about people who can’t write APIs’.
History doesn’t favour technologies that presume superiority to HTTP, and add their own error-handling layer.
HTTP APIs that replaced XML with JSON turn out to have outlived
[SOAP](https://en.wikipedia.org/wiki/SOAP)’s intended portability to other transport methods, for example.

## Client errors

An API that doesn’t correctly separate client and server errors will confuse its users.
More confusion; worse DX.
HTTP client errors indicate that the API could not process the request, due to a problem the client presumably caused, rather than the server.
Clients should therefore not retry requests that result in client error statuses.

APIs with good DX use status codes 400-499 for client errors.
You can improve DX by using a more specific status for HTTP-related errors, instead of relying on the general-purpose `400 Bad Request` status.

## Server errors

Server errors don’t affect operations more than DX, because they don’t correspond to client mistakes.
Consistent server error handling benefits operations, when you log error details as well as sending them in HTTP responses.
We don’t have an initialism for _operator experience_ yet, though.

## Error responses

DX and operations both benefit from including more error details, in the response body and server logs, respectively.
Good API responses provide both human-readable information for debugging, and machine-readable information for error-handling.

[REST API Error Handling - Problem Details Response](https://blog.restcase.com/rest-api-error-handling-problem-details-response/)
introduces some alternatives and the
[RFC 7807](https://tools.ietf.org/html/rfc7807) standard.
[Creating Good API Errors in REST, GraphQL and gRPC](https://apisyouwonthate.com/blog/creating-good-api-errors-in-rest-graphql-and-grpc)
discusses error responses more broadly, for different kinds of HTTP API.

## Check which status code to use

Status codes support the simplest possible error handling, but HTTP doesn’t stop there, and neither should your developer experience.
Instead of trying to memorise them, use HTTP
[status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) 
as a checklist for how to improve your API’s DX:
[HTTP client error status code checklist](http-client-error-checklist).
