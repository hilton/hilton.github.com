---
title: HTTP client error status code checklist
description: Because HTTP API clients don’t just send bad requests
layout: hh
tags: API design
image: seven-sisters.jpg
---

![Seven Sisters cliffs, Eastbourne, United Kingdom](seven-sisters.jpg)

<a class="unsplash" href="https://unsplash.com/photos/jxgJUpL-SQg" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Joseph Pearson</span></a>

*[HTTP]: Hypertext Transfer Protocol - the worldwide web’s standard for transferring data, commonly also used for APIs
*[DX]: developer experience, by analogy with user experience (UX)
*[API]: application programming interface - allows software to communicate with other software, via HTTP in this context
*[URL]: uniform resource locator - uniquely identifies data than an API accesses, in this context

[Use HTTP error handling in APIs](http-error-handling),
instead of adding your own error-handling layer on top of HTTP,
to provide a better developer experience (DX) for people who use your API.
In particular, use the correct
[HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes),
and correctly separate client and server errors.

| Prio. | Status | Use for
|-| ------ | ---------
| 1 | 404 Not Found | URL paths that don’t match a back-end action
| 2 | 404 Not Found | URL paths that include an invalid ID
| 3 | 405 Method Not Allowed | valid URLs but an unsupported HTTP method
| 4 | 415 Unsupported Media Type | unsupported `Content-type` request header
| 5 | 406 Not Acceptable | `Accept` request headers for content types you cannot serve
| 6 | 400 Bad Request | application-specific non-HTTP errors
| 7 | 400 Bad Request | only client errors that don’t have a more specific status code

*[Prio.]: Priority

Use this checklist for client errors, to identify how to improve your API’s DX.
Prioritise statuses in this order: use 404 rather than another status, if it applies,
and use 400 as your last choice.

## 404 Not Found

People’s mistakes in command lines and configuration can lead to sending a request to the wrong URL.
You can improve DX by specifying the first part of the URL that caused, in the response.

1. Use `404 Not Found` for URL paths that don’t match a back-end action
2. Use `404 Not Found` for URL paths that include an invalid ID

Beware of servers and frameworks that treat URLs that don’t map to server-side code as a server error.
You improve DX when you recognise that from the client’s perspective, a misconfigured URL mapping still results in a URL that doesn’t work.
You also get better DX by using `404 Not Found` for API URLs that include a unique identifier, such as a database primary key or a UUID, when the ID doesn’t correspond to an available resource.

Proritise this status over other 4xx error statuses.

## 405 Method Not Allowed

It helps to think of an HTTP API as exposing _HTTP resources_ identified by URLs.
Even if the client gets the URL right, not every resource supports every HTTP method.

{:start="3"}
1. Use `405 Method Not Allowed` for valid URLs but an unsupported HTTP method

You could help the API user by indicating whether the API _never_ allows this method, such as a  `DELETE /login` request, or whether the API allows it depending on context, such as updates for a possibly read-only resource.
The response body could even summarise the resource’s allowed HTTP methods and what they do, although I’ve never seen this in practice.

Prioritise this status second, after `404 Not Found`.

## 415 Unsupported Media Type

Media types allow HTTP APIs to explicit identify what kind of image or document, or whatever, a request or response body contains.
For web sites, it helps that web browsers do their best to make everything Just Work, but APIs deliver better DX with more explicit behaviour.

{:start="4"}
1. Use `415 Unsupported Media Type` when the API doesn’t support the request’s `Content-type` header

This might happen when someone sends an XML request body for an API that only understands JSON.
Good DX depends on understanding _why_ someone might do this.

Someone exploring which types the API supports by guessing, instead of reading the docs, needs different error details than someone who sent the right data to the wrong API, because they mixed up their URLs. 

## 406 Not Acceptable

{:start="5"}
1. Use `406 Not Acceptable` for requests whose `Accept` headers require only types you cannot serve.

This might happen when a client sends a request that specifies that the client only understands XML, while the server that only serves JSON.
Serving JSON anyway makes it pretty clear that the API doesn’t care about DX, and requires the client developer to recognise the errors an XML parser reports when it tries to parse JSON.

Beware of servers and frameworks that return HTML error pages instead of the content type the API client can parse. Similarly, watch out for misconfigured servers that send a redirect to a log-in web page when authentication fails.

Using an API that doesn’t implement content negotiation properly, including the `406 Not Acceptable` status, requires extra work to check each response’s content type before attempting to parse the response. 

## 400 Bad Request

‘Bad request’ doesn’t tell clients anything about what they did wrong, so this status code relies on application-specific error details in the HTTP response.
Failing to separate application-level errors from standard HTTP errors leads to the same poor experience as failing to separate server and client errors.

{:start="6"}
1. Use `400 Bad Request` for application-specific non-HTTP errors
2. Only use `400 Bad Request` for client errors that don’t have a more specific status code.

For example, a request might fail due to a missing required parameter.
In general, HTTP doesn’t have any way to specify application data.
Schemas belong in another layer.
