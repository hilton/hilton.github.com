---
title: Generating API documentation examples
description: Implementing docs-as-code for an HTTP API
layout: hh
tags: API documentation
image: bubbles.jpg
---

![](bubbles.jpg)

[Kid Circus](https://unsplash.com/photos/3XSELqbbo3E){:.photocredit}

{:.series}
1. [Explanation order](explanation-order)
2. [Backwards API docs](api-docs-backwards)
3. [Annotation styles](annotations)
4. [API docs annotations](api-docs-annotations)
5. [Annotations in HTML](api-docs-annotations-html)
6. [JSON API responses in HTML](api-response-html)
7. Generated API examples ←

Despite developers’ wishful thinking, you can’t generate API _documentation_.
You can generate layouts and outlines based on an API, but they don’t actually document the API.

You can, however, generate _examples_, so you can
[start documentation with examples](api-docs-backwards).
Example-first API docs start with a representative set of API request and response examples, and 
[document them with annotations](api-docs-annotations).

## Generate the examples from API calls

To document an existing HTTP API, start with a set of example API calls, and capture each one’s complete HTTP request and response.

[cURL](https://en.wikipedia.org/wiki/CURL)
gives you plain output that still needs formatting and syntax colouring:

```
curl --verbose --silent \
 --header 'Accept: application/vnd.nrk.fargerik.palette.2.0+json' \
 https://fargerik-psapi.nrk.no/tv/series/lykkeland 2>&1 | \
 egrep --invert-match '^([ *]|[{}] )' | sed 's/^[<>] //'
```

This commend line includes several incantations to limit the output to request and response (but still has an untamed `* Closing connection 0` on the end):

```
GET /tv/series/lykkeland HTTP/2
Host: fargerik-psapi.nrk.no
User-Agent: curl/7.64.1
Accept: application/vnd.nrk.fargerik.palette.2.0+json

HTTP/2 200 
content-type: application/vnd.nrk.fargerik.palette.2.0+json; charset=utf-8
request-context: appId=cid-v1:804d17e3-01ed-46af-88ac-f8389a23ccf9
x-robots-tag: noindex, noarchive, nosnippet
access-control-allow-origin: *
cache-control: max-age=3600,stale-while-revalidate=3600,stale-if-error=3600
etag: W/"107-m9HE7qp+5oItcLJVfdhx8ZPSGYk"
date: Mon, 16 Jan 2023 09:46:16 GMT
content-length: 263
alt-svc: h3=":443"; ma=93600
vary: Accept
strict-transport-security: max-age=15768000

{"light":"#affdff","whiteMedium30":"#c1cbcb","whiteDark30":"#bac3c3",
"mediumLight20":"#497475","mediumLight10":"#3d6364","mediumLight5":"#365b5c",
"medium":"#305253","mediumDark40":"#274748","dark":"#1a3737","disabledOnMedium":"#bdcccd",
"disabledOnDark":"#8c9e9e"}* Closing connection 0
```

[HTTPie](https://httpie.io) has a simpler command-line syntax that resembles HTTP more.

```
http --verbose GET https://fargerik-psapi.nrk.no/tv/series/lykkeland \
 Accept:application/vnd.nrk.fargerik.palette.2.0+json
```

HTTPie also defaults to friendlier output that automatically formats and colours HTTP and JSON responses:

<div class="language-http highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nf">GET</span> <span class="nn">/tv/series/lykkeland</span> <span class="k">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Accept</span><span class="p">:</span> <span class="s">application/vnd.nrk.fargerik.palette.2.0+json</span>
<span class="na">Accept-Encoding</span><span class="p">:</span> <span class="s">gzip, deflate</span>
<span class="na">Connection</span><span class="p">:</span> <span class="s">keep-alive</span>
<span class="na">Host</span><span class="p">:</span> <span class="s">fargerik-psapi.nrk.no</span>
<span class="na">User-Agent</span><span class="p">:</span> <span class="s">HTTPie/2.3.0</span>

<span class="k">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
<span class="na">Access-Control-Allow-Origin</span><span class="p">:</span> <span class="s">*</span>
<span class="na">Alt-Svc</span><span class="p">:</span> <span class="s">h3=":443"; ma=93600</span>
<span class="na">Cache-Control</span><span class="p">:</span> <span class="s">max-age=3600,stale-while-revalidate=3600,stale-if-error=3600</span>
<span class="na">Connection</span><span class="p">:</span> <span class="s">keep-alive</span>
<span class="na">Content-Encoding</span><span class="p">:</span> <span class="s">gzip</span>
<span class="na">Content-Length</span><span class="p">:</span> <span class="s">164</span>
<span class="na">Content-Type</span><span class="p">:</span> <span class="s">application/vnd.nrk.fargerik.palette.2.0+json; charset=utf-8</span>
<span class="na">Date</span><span class="p">:</span> <span class="s">Sat, 07 Jan 2023 16:59:30 GMT</span>
<span class="na">ETag</span><span class="p">:</span> <span class="s">W/"107-m9HE7qp+5oItcLJVfdhx8ZPSGYk"</span>
<span class="na">Strict-Transport-Security</span><span class="p">:</span> <span class="s">max-age=15768000</span>
<span class="na">Vary</span><span class="p">:</span> <span class="s">Accept-Encoding</span>
<span class="na">Vary</span><span class="p">:</span> <span class="s">Accept</span>
<span class="na">X-Robots-Tag</span><span class="p">:</span> <span class="s">noindex, noarchive, nosnippet</span>
<span class="na">request-context</span><span class="p">:</span> <span class="s">appId=cid-v1:804d17e3-01ed-46af-88ac-f8389a23ccf9</span>

<span class="p">{</span><span class="w">
    </span><span class="nl">"dark"</span><span class="p">:</span><span class="w"> </span><span class="s2">"#1a3737"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"disabledOnDark"</span><span class="p">:</span><span class="w"> </span><span class="s2">"#8c9e9e"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"disabledOnMedium"</span><span class="p">:</span><span class="w"> </span><span class="s2">"#bdcccd"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"light"</span><span class="p">:</span><span class="w"> </span><span class="s2">"#affdff"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"medium"</span><span class="p">:</span><span class="w"> </span><span class="s2">"#305253"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"mediumDark40"</span><span class="p">:</span><span class="w"> </span><span class="s2">"#274748"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"mediumLight10"</span><span class="p">:</span><span class="w"> </span><span class="s2">"#3d6364"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"mediumLight20"</span><span class="p">:</span><span class="w"> </span><span class="s2">"#497475"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"mediumLight5"</span><span class="p">:</span><span class="w"> </span><span class="s2">"#365b5c"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"whiteDark30"</span><span class="p">:</span><span class="w"> </span><span class="s2">"#bac3c3"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"whiteMedium30"</span><span class="p">:</span><span class="w"> </span><span class="s2">"#c1cbcb"</span><span class="w">
</span><span class="p">}</span><span class="w">
</span></code></pre></div></div>


<!-- ```http
GET /tv/series/lykkeland HTTP/1.1
Accept: application/vnd.nrk.fargerik.palette.2.0+json
Accept-Encoding: gzip, deflate
Connection: keep-alive
Host: fargerik-psapi.nrk.no
User-Agent: HTTPie/2.3.0
```


```http
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Alt-Svc: h3=":443"; ma=93600
Cache-Control: max-age=3600,stale-while-revalidate=3600,stale-if-error=3600
Connection: keep-alive
Content-Encoding: gzip
Content-Length: 164
Content-Type: application/vnd.nrk.fargerik.palette.2.0+json; charset=utf-8
Date: Sat, 07 Jan 2023 16:59:30 GMT
ETag: W/"107-m9HE7qp+5oItcLJVfdhx8ZPSGYk"
Strict-Transport-Security: max-age=15768000
Vary: Accept-Encoding
Vary: Accept
X-Robots-Tag: noindex, noarchive, nosnippet
request-context: appId=cid-v1:804d17e3-01ed-46af-88ac-f8389a23ccf9
```

```json
{
    "dark": "#1a3737",
    "disabledOnDark": "#8c9e9e",
    "disabledOnMedium": "#bdcccd",
    "light": "#affdff",
    "medium": "#305253",
    "mediumDark40": "#274748",
    "mediumLight10": "#3d6364",
    "mediumLight20": "#497475",
    "mediumLight5": "#365b5c",
    "whiteDark30": "#bac3c3",
    "whiteMedium30": "#c1cbcb"
}
``` -->

If you write documentation by hand, you can just copy-paste this into your documentation, and save the command line somewhere.
You could also automate that.

## Automate capturing examples

Whether you capture API HTTP requests and responses via command line tools or programmatically, you can automate capturing and saving them as text files.
This first automation step already gives you a set of examples that you can update automatically, saving documentation effort.
You might also want to use this automation to automate API tests, to check expected responses, while saving the output for use in documentation.

## Use version control to identify API changes

When you automatically save API HTTP responses to files, you can use version control to identify changes.
Unexpected changes may indicate bugs, and expected changes need documenting.
For this to work, you’ll have to suppress response headers whose values change independently of the API, such as the `Date` header and any [correlation IDs](microservices-correlation-id).

When you update documentation as part of a docs-as-code approach, using file-based version control, these API output changes make the corresponding API changes explicit.
This gives reviewers a reliable way to review documentation changes using developer tools, similarly to how technical writers might review changes in a traditional document management system.

## Document changes

Once you have text files for the API HTTP requests and responses you want to document, you can 
[add annotations in HTML](api-docs-annotations-html).
Ideally, you wouldn’t have to copy these requests and responses into the documentation, and could instead include them automatically.
This would require a way to specify the annotation locations, such as the base64url-encoded ship ID in the request line (starting with `POST`) of this pirate crew update:

![Annotations with diagonal arrows](api/pirates-artisanal-canvas.webp)

Unfortunately, this all means yet more custom documentation system implementation.
Perhaps all of this explains the CMS problem: we have too many content management systems because people keep inventing new ways to do documentation.
And that sounds like front-end frameworks and user-interface designs.
