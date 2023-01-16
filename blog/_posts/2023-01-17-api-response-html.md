---
title: Browsing a JSON API in HTML
description: Rendering JSON responses as HTML with links and annotations
layout: hh
tags: API documentation
image: signpost-footpath.jpg
css: "pre abbr { border-bottom:none; background-color:#FFEBA9; color:black; }"
---

![](signpost-footpath.jpg)

[Marco Kaufmann](https://unsplash.com/photos/0kbNh7XrJ7Q){:.photocredit}

{:.series}
1. [Explanation order](explanation-order)
2. [Backwards API docs](api-docs-backwards)
3. [Annotation styles](annotations)
4. [API docs annotations](api-docs-annotations)
5. [Annotations in HTML](api-docs-annotations-html)
6. JSON API responses in HTML ←

[API documentation annotations in HTML](api-docs-annotations-html)
showed how to document an HTTP API by example, to create more usable documentation.
An API’s implementation could take this idea further by integrating these annotations into the API itself.

## HTML representations as live documentation

Consider using a _Pirate API_ to build a retirement planning SaaS for
[scurvy sons of dogs](https://www.youtube.com/watch?v=F3QYm5W8waI)
([transcript](https://maple-clef.livejournal.com/31063.html)) who sail the high seas.
The API’s ship’s crew HTTP resource provides the following JSON response.

```http
GET /ship/ShpOWZxvR3mxMndyC2aJ3A/crew HTTP/1.1
Accept: application/json
Content-Type: application/vnd.restful+json

[
  {
    "url": "/pirate/CecWcS52T4ePtOVd0L5EyQ",
    "name": "Alexander Smollett",
    "rank": "Captain"
  },
  {
    "url": "/pirate/zp9UrJznRliWESfom9ScRA",
    "name": "Job Anderson",
    "rank": "Boatswain"
  },
  {
    "url": "/pirate/EYV3NOklSWibT95TsVyABA",
    "name": "Long John Silver",
    "rank": "Cook"
  }
]
```

In practice, the response will not format its JSON body, making it harder to debug:

```
[{"url":"/pirate/CecWcS52T4ePtOVd0L5EyQ","name":"Alexander Smollett","rank":"Captain"
},{"url":"/pirate/zp9UrJznRliWESfom9ScRA","name":"Job Anderson","rank":"Boatswain"},{
"url":"/pirate/EYV3NOklSWibT95TsVyABA","name":"Long John Silver","rank":"Cook"}]
```

While plenty of tools will format this JSON response for you, you could also build it into the API,
so that requesting the same resource URL in a web browser outputs a formatted JSON response:

```json
[
  {
    "url": "/pirate/CecWcS52T4ePtOVd0L5EyQ",
    "name": "Alexander Smollett",
    "rank": "Captain"
  },
  {
    "url": "/pirate/zp9UrJznRliWESfom9ScRA",
    "name": "Job Anderson",
    "rank": "Boatswain"
  },
  {
    "url": "/pirate/EYV3NOklSWibT95TsVyABA",
    "name": "Long John Silver",
    "rank": "Cook"
  }
]
```

You can do this with content negotiation, by serving an HTML response for requests with an
`Accept: text/html` header, which web browsers send, instead of `Accept: application/json` (simplifying a little).
Now, instead of static documentation that shows a fixed set of request-response examples, client developers have the option to render every response as HTML.

## Browsing a hypermedia API

Once you can view API responses in a web browser, you could add a hyperlink to the HTTP resource for each pirate crew member.

<div class="language-json highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="p">[</span><span class="w">
  </span><span class="p">{</span><span class="w">
    </span><span class="nl">"url"</span><span class="p">:</span><span class="w"> </span><span class="s2">"<a href="api/pirate-not-found.html">/pirate/CecWcS52T4ePtOVd0L5EyQ</a>"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"name"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Alexander Smollett"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"rank"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Captain"</span><span class="w">
  </span><span class="p">},</span><span class="w">
  </span><span class="p">{</span><span class="w">
    </span><span class="nl">"url"</span><span class="p">:</span><span class="w"> </span><span class="s2">"<a href="api/pirate-not-found.html">/pirate/zp9UrJznRliWESfom9ScRA</a>"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"name"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Job Anderson"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"rank"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Boatswain"</span><span class="w">
  </span><span class="p">},</span><span class="w">
  </span><span class="p">{</span><span class="w">
    </span><span class="nl">"url"</span><span class="p">:</span><span class="w"> </span><span class="s2">"<a href="api/pirate-not-found.html">/pirate/EYV3NOklSWibT95TsVyABA</a>"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"name"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Long John Silver"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"rank"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Cook"</span><span class="w">
  </span><span class="p">}</span><span class="w">
</span><span class="p">]</span><span class="w">
</span></code></pre></div></div>

The API’s HTML rendering could automatically render these links because in the example above, the [RESTful JSON](https://restfuljson.org) response body uses `url` properties to link to other HTTP resources.
However, RESTful JSON would only make it possible to link HTTP GET requests;
a more complex API requires a richer hypermedia language, such as
[Hypertext Application Language](https://en.wikipedia.org/wiki/Hypertext_Application_Language) (HAL).

[Evert Pot](https://evertpot.com)’s [Curveball Browser](https://github.com/curveball/browser/#readme)
implements exactly this for a HAL API.
Curveball provides a far more sophisticated HTML rendering than the example above.
As well as rendering JSON responses as formatted HTML, with hyperlinks between resources, the response also renders forms for templated URLs, and multiple output formats.
This makes it much easier to explore and understand an HTTP API, and neatly demonstrates the value of hypermedia in an actually-REST API.

For a real-world example, NRK’s (Norwegian television) TV series colour palette API renders this 
[HTML preview](https://fargerik-psapi.nrk.no/tv/series/lykkeland) 
of the series [Lykkeland](https://www.imdb.com/title/tt7005636/)’s actual colour palette in the browser:

[ ![Preview of the HTML representation of a TV series’ colour palette](api/lykkeland.webp) ](https://fargerik-psapi.nrk.no/tv/series/lykkeland)

To use the API programmatically, use the correct `Accept` header:

```http
GET /tv/series/lykkeland HTTP/1.1
Accept: application/vnd.nrk.fargerik.palette.2.0+json
Host: fargerik-psapi.nrk.no
```

This fetches the following JSON response:

```http
HTTP/1.1 200 OK
Content-Type: application/vnd.nrk.fargerik.palette.2.0+json; charset=utf-8

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
```

The HTML preview saves you the trouble of trying to visualise RGB colours in your head, and checks for accessible contrast.
However, it doesn’t tell you what the properties `mediumDark40` and `whiteDark30` mean.
Documentation annotations could help there.

## Annotating HTML representations

Given an HTML rendering of a JSON response, we can also add annotations to document the API, in addition to making it browsable.
In the following example, hover a highlighted `name` property name to show its annotation:

<div class="language-json highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="p">[</span><span class="w">
  </span><span class="p">{</span><span class="w">
    </span><span class="nl">"url"</span><span class="p">:</span><span class="w"> </span><span class="s2">"<a href="api/pirate-not-found.html">/pirate/CecWcS52T4ePtOVd0L5EyQ</a>"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"<abbr title="Crew members have unique names on each ship, and adopt an alias when joining a ship if an existing crew member already uses their preferred name">name</abbr>"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Alexander Smollett"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"rank"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Captain"</span><span class="w">
  </span><span class="p">},</span><span class="w">
  </span><span class="p">{</span><span class="w">
    </span><span class="nl">"url"</span><span class="p">:</span><span class="w"> </span><span class="s2">"<a href="api/pirate-not-found.html">/pirate/zp9UrJznRliWESfom9ScRA</a>"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"<abbr title="Crew members have unique names on each ship, and adopt an alias when joining a ship if an existing crew member already uses their preferred name">name</abbr>"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Job Anderson"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"rank"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Boatswain"</span><span class="w">
  </span><span class="p">},</span><span class="w">
  </span><span class="p">{</span><span class="w">
    </span><span class="nl">"url"</span><span class="p">:</span><span class="w"> </span><span class="s2">"<a href="api/pirate-not-found.html">/pirate/EYV3NOklSWibT95TsVyABA</a>"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"<abbr title="Crew members have unique names on each ship, and adopt an alias when joining a ship if an existing crew member already uses their preferred name">name</abbr>"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Long John Silver"</span><span class="p">,</span><span class="w">
    </span><span class="nl">"rank"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Cook"</span><span class="w">
  </span><span class="p">}</span><span class="w">
</span><span class="p">]</span><span class="w">
</span></code></pre></div></div>

This example uses HTML `abbr` elements, which avoid cluttering the page but require a hover interaction that makes them harder to browse.
A better layout would render [API documentation annotations in HTML](api-docs-annotations-html).
This would require a detailed model of the API, so that the HTML renderer knows where to highlight the response, and which annotation to render.

Annotated examples improve API documentation, and APIs could integrate their own documentation.
Meanwhile, most HTTP APIs don’t even scratch the surface of good developer experience.
