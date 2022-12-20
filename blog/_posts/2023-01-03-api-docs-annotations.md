---
title: API documentation annotations
description: Applying annotation style to HTTP API docs
layout: hh
tags: API documentation
css: "article a img {width:640px; border: 2px solid #7FC4FF} article .two {width:654px} article .two img {vertical-align:top !important} #litdoc {max-width:256px; margin-right:10px; } #redoc {max-width:378px}"
image: graffiti-sign.jpg
---

![](graffiti-sign.jpg)

[S O C I A L . C U T](https://unsplash.com/photos/nFH8eY7vCG4){:.photocredit}

{:.series}
1. [Explanation order](explanation-order)
2. [Backwards API docs](api-docs-backwards)
3. [Annotation styles](annotations)
4. API docs annotations ←
5. Annotations in HTML

[Documentation annotation styles](annotations), the previous article in this series, claims that a 
[direct annotations style](annotations#direct) would improve API documentation.
This article explores what that might look like for [example-first](explanation-order) HTTP APIs.

{:#brutalist}
## Brutalist HTTP API documentation

Instead of [deconstructed HTTP API documentation](api-docs-backwards#deconstructed),
annotated HTTP examples literally connect parts of a text-based API to their explanations.
Applying this to example-first annotated documentation combines several related ideas.

1. Start from concrete examples.
2. Use annotations to add detail and explain how things work in general.
3. Directly visually link each annotation to the part of the example it explains.
4. Don’t reinvent HTTP’s text format structure.

The following example makes plain text primary in a documentation style that 
[Bjørn Einar Bjartnes has called](https://twitter.com/bjartnes/status/1597964917432520704) _brutalism_
(but with [Pirate Ipsum](https://pirateipsum.me) text to emphasis layout instead of content).

![Annotations](api/api.webp)

Developers would understand HTTP faster if they learned from concrete examples of its use, with annotations.
This would also improve API documentation, by using HTTP’s own familiar text structure, instead of inventing a new documentation structure for each API.
As a final bonus, this takes up less space than approaches that separate examples and annotations, using tables and boxes, making it easier to see a whole HTTP request-response pair at the same time.

{:#litdoc}
## litdoc rendering

For a first attempt at rendering brutalist API docs in HTML, the following example uses [litdoc](http://litdoc.org).
Litdoc takes inspiration from [literate programming](https://en.wikipedia.org/wiki/Literate_programming)
to render a Markdown source document in two columns, so that prose on the left interleaves with code snippets on the right.
This example ([source](api/pirates.md), [HTML](api/pirates-litdoc.html))
documents a single operation on an HTTP resource, with one error response example.

[![Annotations](api/pirates-litdoc.webp)](api/pirates-litdoc.webp)

The result has [definition style](annotations#definition) annotations where red code-style text on the left provides definitions for the same example values in the actual HTTP request and response.
If you compare the litdoc rendering (left) to the earlier article’s 
[Redoc example](api-docs-backwards#deconstructed) (right)
you also see that it uses less space.

{:.two}
![Annotations](api/pirates-litdoc.webp){:#litdoc}![Redoc documentation example](api/pirates-redoc-404-only.webp){:#redoc}

The litdoc example is already pretty good, and the plain Markdown source makes it straightforward to produce.
But it still doesn’t match the annotated brutalist style ([top](#brutalist)).

{:#example-first}
## Example-first

Starting from concrete examples means swapping the two columns, moving the HTTP requests and responses to the left.
This encourages the reader to read the examples first, and look to the right-hand column for additional explanation, including definitions of the examples’ hard-coded values.

[![Annotations](api/pirates-litdoc-code-left.webp)](api/pirates-litdoc-code-left.webp)

Adding some CSS would straightforwardly achieve this, on top of what I’ve already added to customise litdoc’s default style.

{:#direct}
## Direct annotation

The next step adds arrows that visually link example values to their definitions, to make it easier for the reader to find the right definition.

[![Annotations](api/pirates-litdoc-arrows.webp)](api/pirates-litdoc-arrows.webp)

Unfortunately, static CSS can presumably not render these arrows.
No doubt you, dear reader, will have no trouble coming up with a generated HTML or SVG solution.
