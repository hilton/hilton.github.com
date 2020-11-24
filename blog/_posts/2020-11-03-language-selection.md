---
title: Use localised language names for language selection
description: Don’t use flags for languages
layout: hh
tags: software design
image: flags.jpg
---

![Correct use of flags on two boxes of US and UK power adaptors" title="Correct use of flags on two boxes of US and UK power adaptors](flags.jpg)

<a class="unsplash" href="https://unsplash.com/photos/jUSu0686zDM" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>freestocks</span></a>

Imagine using the emoji 😀☺️😉😔😢 to represent job titles, because the five people you know with those jobs typically display those five emotions.
Similarly, national flags represent countries, not languages.

## Don’t use country flags to indicate languages

So many people use country flags to indicate languages, that many blog posts explain this one specific design mistake, and [www.flagsarenotlanguages.com](http://www.flagsarenotlanguages.com/) devotes a whole web site to it.
In case you need more than one good reason not to repeat other people’s mistakes:

1.	Many languages have official language status in more than one country.
2.	Many countries have more than one official language, making flags ambiguous.
3.	Some flags symbolise colonial history, making prioritising some flags offensive.
4.	People recognise names better than flags, making flags less usable.

I discovered the last issue in a London cafe, after speaking in Dutch to member of staff who had a Hungarian flag on their name badge.
The flags of Hungary, Luxembourg and the Netherlands differ by one similar colour:

<p style="text-align:center">🇱🇺 🇳🇱 🇭🇺</p>

Putting the flags next to each other makes the difference visible, but you might misidentify one of them in isolation.

These reasons for not using flags might make you wonder why the mistake persists.
It turns out that too many people really like flags.

## It doesn’t matter how much you want to use flags

The arguments that people make for using flags anyway resemble a child having a tantrum and screaming _but I really really want flags!_
It’s okay to like
[icons and pretty colours](http://www.famfamfam.com/lab/icons/flags/), but using icons for languages when you ought to know better looks childish and stupid.
Do that in the privacy of your home, if you must; not on the web.

## Name each language in the language it denotes

Instead of flags, use localised language names for selecting a language:

<p style="text-align:center;color:#DF5A49">English • Français • Pусский • 中文</p>

Display the language names instead of hiding them in a dropdown, which makes a language hard to find on a page in a language you cannot read.

## Consider using The Language Icon

A recognisable language selection icon might help.
Some web sites use a globe icon that suggests something vaguely international, but remains ambiguous.

[The Language Icon](http://www.languageicon.org), by A’ Design Award & Competition, Onur Müştak Çobanlı and Farhat Datta, aims to solve this problem by depicting language selection itself:

<p style="text-align:center"><a href="http://www.languageicon.org"><img src="language-icon.png" alt="The Language Icon"></a></p>

This icon replaced the original [2008 ‘pink tongue’ icon](http://www.languageicon.org/2008/index-icon.php) in 2012, following a competition to design a replacement.
It never caught on.

## Default to the browser’s preferred language

When you offer multiple languages, you have to choose one to use by default.
Fortunately, HTTP 1.0 solved this in 1996 with _language negotiation_ (via the 
[Accept-Language](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language) 
header) that identifies a web browser’s preferred languages.
Use this to set the default language.

Browser preferences don’t show which languages the web site offers or make it easy to switch language, though, so you still need a language selector.

Finally, remember that people visit, emigrate to, or grow up in, a country where their mother tongue is not an official language.
So whatever you do, don’t set the language based on the browser’s _country_  location 🙄.
