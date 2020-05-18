---
title: "First look: Dark"
description: "A new back-end language and #nobuild web-based development environment"
layout: hh
tags: programming
image: dark-canvas-2x.png
css: "a:hover img { box-shadow: 0 0 6px 2px #428bca; } pre { width: 50em; }"
---

Taking a break from [product management](/tag/product) over the weekend,
I took a first look at [Dark](https://darklang.com), the beta release of a new programming language and web-based integrated development environment.
Dark grabbed my attention by talking about live HTTP requests in the coding environment and the ability to ‘deploy new code in 50 milliseconds’.

To experiment, I wrote a minimal ‘connector’ web service that proxies the 
[Country.io](http://country.io/data/) country names list using the API that my client application requires.
The last time I did something like this in Java, I wrote the code in a couple of hours, and then spent the next _two days_ getting access to a production server, and permission to query the database.
Dark changes that.

## Canvas

Dark gives you a canvas that looks a little like [Miro](https://miro.com), but for code.
Instead of files on your laptop, you see code blocks on a draggable infinite canvas.

<a href="dark-canvas-2x.png"><img src="dark-canvas.png" srcset="dark-canvas-2x.png 2x" alt="The Dark canvas - an web-based integrated development environment"></a>

This canvas includes six _components_ that make up my service:

* 3 × _HTTP_ handlers - output JSON HTTP responses
* 1 × _DB_ component - defines a key-value _datastore_
* 1 × _WORKER_ component - populates the datastore
* 1 × _REPL_ - lets you run code.

Functions occupy a separate space, and show their callers and dependencies:

<a href="dark-function-2x.png"><img src="dark-function.png" srcset="dark-function-2x.png 2x" alt="A Dark function definition"></a>

The environment captures incoming HTTP requests.
_404s_ in the sidebar lists requests that don’t match a handler, which you can use to quickly create a new handler.

## HTTP handlers

When you select a component, side panels show actual input and output data:

<a href="dark-http-handler-2x.png"><img src="dark-http-handler.png" srcset="dark-http-handler-2x.png 2x" alt="An HTTP handler - showing example request and response"></a>

Selecting a white dot on the left shows the corresponding incoming HTTP request.
Meanwhile, the code window highlights the executed code path, and the pop-up below the code shows the HTTP response.
In this case, the request path ends in `DE`, the second line of code calls the `countries` function and finds that code in the list, and the last line creates a JSON HTTP response from the matched country.
The preview below shows the actual response body:

    {
      id: "DE",
      country: "Germany"
    }

## Integrated deployment environment

I love the way that Dark deploys code changes ‘instantly’.
With this tight feedback loop, I made fast progress and completed the first version of the service as quickly as when I last did this in Java or Scala.
That impressed me _a lot_ because I did this in a new programming language.

I like Dark’s language, which appeals to current fashion (full-on functional).
The keyboard control and refactorings need more work, but the inline function help and clear messages helped with learning the language.
The structured editor’s placeholders help, and you can’t just type anywhere, which keeps the code sensible, once you get used to it.

## Looking ahead

The Dark beta impressed me.
Although Dark presumably targets web application back-ends, I already prefer this experience to developing a small web service in Java or Scala.

Looking ahead, enterprise application integration will need more than this.
I look forward to seeing how the Dark team address collaboration, version control, automated testing, and API documentation.
Meanwhile, language (and language documentation) improvements will no doubt enrich the coding experience.

I’ve (half) joked in the past about the future bring some kind of _Enterprise Scratch_.
Meanwhile, for enterprise application integration, technology like Dark changes everything.
