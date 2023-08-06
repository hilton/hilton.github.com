---
title: Default to the browser’s preferred language
description: Don’t set the web page language based on location
layout: hh
tags: DDD UX
image: letters.jpg
---

![](letters.jpg)

[Towfiqu barbhuiya](https://unsplash.com/photos/5u6bz2tYhX8){:.photocredit}

In a small countryside village bakery, you can reasonably expect a greeting in the local language and to have to ask for your bread in the same language.
Compare that to a cosmopolitan café in a large European capital city, where the person taking your order will often speak in English, rather than either the local language or their own mother tongue.

Online spaces have even more international visitors, and fewer reasonable expectations about what languages they read.
To offer multiple languages successfully, discover your visitors’ individual language preferences.

## Don’t select language based on location

Many multi-lingual web sites set the default language based on your geographic location,
determined by [Internet geolocation](https://en.wikipedia.org/wiki/Internet_geolocation).
However, people regularly visit, emigrate to, or grow up in, a country where their mother tongue is not an official language.
In fact, 101 of the 178 countries with an official language recognise more than one official language
([source](https://en.wikipedia.org/wiki/Official_language)),
which makes choosing one language per country recklessly political.

Even if you understand why you shouldn’t select a language based on location,
you might think that you don’t have better information than that.
Fortunately, you do.

## Default to the browser’s preferred language

Web browsers all implement a way for people to specify their preferred languages, 
and send these preferences to the web site every time you open a web page.
On a Mac, you configure this in the _Language & Region_ system preferences:

![macOS Language & Region system preferences](mac-language-and-region.png){: srcset="mac-language-and-region-2x.png 2x"}

Firefox has its own settings (Settings → General → Language and Appearance → Language → 
_Choose your preferred language for displaying pages_):

![Firefox language settings](firefox-languages.png){: srcset="firefox-languages-2x.png 2x"}

[Brave](https://brave.com/) (Chrome) also has its own settings (Settings → Advanced → Languages):

![Brave language settings](brave-languages.png){: srcset="brave-languages-2x.png 2x"}

Each of these systems lets you set your preferred languages, and your order of preference.
As a native English speaker, I have English first, while a non-native English speaker might have English second or third.

## HTTP accept-language headers

More technically, HTTP 1.0 solved this _language negotiation_ in 1996, via the 
[Accept-Language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) header.
Software should use this to identify a web browser’s preferred languages and select a default language.
HTTP language negotiation - a kind of
[content negotiation](https://en.wikipedia.org/wiki/Content_negotiation) -
lets people who can read several languages specify an order of preference, 
so you can still accommodate user preferences when you offer someone’s second-choice language, but not their first choice.

[IETF language tags](https://en.wikipedia.org/wiki/IETF_language_tag)
identify the languages, typically using an
[ISO 639-2](https://en.wikipedia.org/wiki/ISO_639-2) two-letter language code (e.g. `en` for English),
and often combined with an
[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) region code
(e.g. `en-GB` for British English).

## Language selection

Browser preferences don’t show which languages the web site offers or make it easy to switch language.
Unfortunately, web browsers never adopted a technology to list a web site’s available languages and provide their own web site language menu.

You still need your own language selection user interface.
Just [don’t use flags for languages](language-selection).
