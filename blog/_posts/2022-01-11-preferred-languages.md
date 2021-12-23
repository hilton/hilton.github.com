---
title: Default to the browser’s preferred language
description: Don’t set the web page language based on location
layout: hh
tags: data
---


## Don’t select language based on location

Nevertheless, many multi-lingual web sites set the default language based on your geographic location,
determined by [Internet geolocation](https://en.wikipedia.org/wiki/Internet_geolocation).
However, people regularly visit, emigrate to, or grow up in, a country where their mother tongue is not an official language.
In fact, 101 of the 178 countries with an official language recognise more than one
([source](https://en.wikipedia.org/wiki/Official_language)),
which makes choosing one language per country a reckless political statement.

Even if you understand why you shouldn’t select a language based on location,
you might think that you don’t have better information than that.
Fortunately, you do.

## Default to the browser’s preferred language

Web browsers all implement a way to specify your preferred language, and send these preferences to the web site every time you open a web page.
On a Mac, you configure this in the _Language & Region_ system preferences:

![macOS Language & Region system preferences](mac-language-and-region.png){: srcset="mac-language-and-region-2x.png 2x"}

Firefox has its own settings, via Settings → General → Language and Appearance → Language → Choose your preferred language for displaying pages:

![Firefox language settings](firefox-languages.png){: srcset="firefox-languages-2x.png 2x"}

[Brave](https://brave.com/) (Chrome) also has its own settings, via Settings → Advanced → Languages:

![Brave language settings](brave-languages.png){: srcset="brave-languages-2x.png 2x"}

Operating systems and web browsers include this functionality so your web-based software doesn’t have to.


## HTTP accept-language headers

More technically, HTTP 1.0 solved what it calls _language negotiation_ in 1996, via the 
[Accept-Language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) header.
Use this to identify a web browser’s preferred languages.

HTTP language negotiation even lets people who can read several languages specify an order of preference, 
as shown in the above screenshots, so you can still accommodate user preferences when you offer someone’s second-choice language, but not their first choice.

## Language selection

Browser preferences don’t show which languages the web site offers or make it easy to switch language, though, so you still need a language selector.
Just [don’t use flags for languages](language-selection).
