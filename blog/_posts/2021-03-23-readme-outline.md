---
title: What to put in a README
description: How to minimally document software
layout: hh
tags: software documentation
image: readme.png
twitter_card: summary_large_image
css: "ol{padding:1em 3em 0.5em;border:1px solid #ccc;width:33em;} article table{font-size:100%;width:38em} pre{width:640px}"
---

![Writing at the top of blank page](notepad-writing.jpg)

<a class="unsplash" href="https://unsplash.com/photos/PeUJyoylfe4" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>J. Kelly Brito</span></a>

[GitHub](https://github.com) 
has probably done more for modern software documentation than anyone
since Aaron Swartz and John Gruber invented
[Markdown](https://en.wikipedia.org/wiki/Markdown) in 2004 (except of course for HTML itself),
by promoting [README](https://en.wikipedia.org/wiki/README) files:

![GitHub prompt to add a README](github-readme.png){:srcset='github-readme-2x.png 2x'}

Despite Markdown README files’ popularity, software developers typically either don’t know what to include, or leave out important information.
A standard outline solves this.

{:#outline}
## Standard README outline

I recommend the following README outline ([template below](#template)),
which includes enough to have better documentation than nearly every GitHub repository.
Ten sections seems like a reasonable compromise between documentation length and breadth, 
as several only require one or two sentences.

1. What it is
2. Purpose
3. Features
4. Usage/examples
5. Installation
6. Asking questions
7. Building from source
8. Contributing
9. Authors/maintainers
10. License

Some sections only apply to open source software, or software libraries that you share with third-parties.
For different contexts, such as enterprise line of business software or commercial product development, adjust the standard outline to cover relevant topics.

{:#questions}
## Answer three basic questions

Before you can adjust the standard outline to your own context, you need to understand which questions an effective README answers.
Grouping the standard sections illustrates this:

| 1. Should I use this? | 2. How can I use it successfully? | 3. How can I participate? |
| --- | --- | --- |
| What it is<br>Purpose<br>Features<br>License | Usage/examples<br>Installation<br>Asking questions | Building from source<br>Contributing<br>Authors/maintainers |

These questions help you understand the reader’s perspective when they first discover your software and its README.
In particular, they first address relevance, in the same way as Vanguard’s
[three questions to ask about any tool](https://vanguard-method.net/library/systems-principles/three-questions-to-ask-about-any-tool/).

Depending on your context, and what kind of software you need to document, you might need different information to answer these questions.
You can also choose your top ten headings from the following options.

| 1a. Should I really use this? | 5. How do I get it to work? | 6. How it works |
| --- | --- | --- |
| Status (does it work?)<br>Known issues/bugs<br>FAQ<br>Security<br>Background<br>Alternatives<br>Target users (who it’s for)<br>Scope & limitations<br>Constraints<br>Hardware requirements<br>Prerequisites | Troubleshooting<br>Version<br>Change log<br>Reporting bugs<br>Testing<br>Code of conduct<br>Copyright information<br>Contributors<br>To do list<br>Further information | Deployment<br>Platforms<br>Architecture<br>Components<br>Physical structure<br>Inputs & outputs<br>Algorithm choices<br>Lessons learned<br>Jargon used |

Note that _history_ doesn’t appear on any of these lists.
Your readers don’t care.
If you must indulge yourself, document that separately.

{:#documentation}
## Incremental software documentation

Starting with a small README helps you document your software incrementally, starting with one sentence on each topic.
For each section that needs more than a few short paragraphs, add a new document that focuses on one of the outline topics.
For example, all but the most stable development terms benefit from more detailed
[development environment documentation](dev-environment-documentation).

A README that provides minimum viable documentation can also become the basis of more detailed documentation, when necessary.
You don’t need more than a README for some software, but most software has at least one complex area that justifies more detailed documentation.
Compared to more complex documentation approaches, starting with a README scales _down_ enough to actually get used.

{:#template}
## Markdown template

```
## What it is

## Purpose

## Features

## Usage/examples

## Installation

## Asking questions

## Building from source

## Contributing

## Authors/maintainers

## License
```
