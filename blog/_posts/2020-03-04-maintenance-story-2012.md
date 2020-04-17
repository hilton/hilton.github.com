---
title: The good kind of legacy code
description: A supply chain software maintenance project story from 2012
layout: hh
tags: maintenance
image: shipping-containers.jpg
---

<!-- 
1. 2012, at a small consultancy in Rotterdam, dangerous conclusion: rewrite.
2. Custom-built supply chain management software; Perl wisely never ported to Java.
3. Good legacy code, incorporating a decade’s business rules and bug fixes.
4. Partial rewrite in Scala, to literally codify the maintainers’ knowledge.
5. Commercial opportunity to continue maintenance for 5 years.
6. Planning for maintainability, replacing one EDIFACT message type at a time.
7. Separate identity management and admin services
8. Later replaced the main UI, offering both and ‘competing’ on UX.
9. Some documentation: glossary, data dictionary, operations guides, external interfaces.
10. More effort on naming, code comments, and automated tests, especially for messages.
11. New application in production until 20??
-->

[![Warehouse](warehouse.jpg)](https://unsplash.com/photos/ZsHqFTWynv8)

<a class="unsplash" href="https://unsplash.com/photos/ZsHqFTWynv8" rel="noopener noreferrer" title="Photo by Ramon Cordeiro"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Ramon Cordeiro</span></a>

In 2012, while working at a small consultancy in Rotterdam, we came to a dangerous conclusion about a system that we built and maintained for a global logistics company: we had rewrite it.
We had maintained the original Perl-based shipment management system for more than ten years, carefully maintaining it and avoiding the temptation to rewrite it all in Java.
We even knew the first rule of big rewrites: _don’t_.

## The good kind of legacy code

This time we had the good kind of legacy code: well-written code that incorporates a decade’s business rules and bug fixes, partly built using an in-house rules engine.
You only have to think about the work that went into this kind of code, and the unavoidable misunderstandings and bugs that it no longer contains, to understand the risk involved in rewriting it.
Even if we could have accurately estimated the development effort to rewrite this code, we couldn’t anticipate what we would get wrong the first time.

We had reached the limiting factor of sustainable software development: 
a [bus factor](https://en.wikipedia.org/wiki/Bus_factor) of two.
Although we had Perl experience, we had largely switched from Java to Scala, and none of us wanted to code in Perl.

## New competition for the existing system

We judged that the commercial opportunity to maintain the system for a further five years justified a major investment, and chose to start a rewrite project.
We started a partial rewrite in Scala, initially focusing on the system’s 
[EDIFACT](https://en.wikipedia.org/wiki/EDIFACT) 
message processing, to literally codify the remaining maintainers’ system knowledge.
We developed for maintainability, replacing one EDIFACT message type at a time, with a team of 3-5 developers.

As part of the project, we wrote new separate identity management and system configuration services.
We also later replaced the main user interface, by offering both and ‘competing’ with the existing user interface by offering a user experience, and improving its capabilities until the users chose to switch.

## Minimal technical documentation

We did write some documentation, to validate new team members’ understanding of the domain and the problem space, and to make it easier to onboard new team members.
First, we had a minimum set of wiki pages to explain what everything _meant_: a glossary and data dictionary, for the supply chain jargon and the resulting complex data model.
Finally, we wrote operations guides that covered system administration as well as application support tasks, such as how to manually recover when the system failed to process a message automatically.

By focusing on the external EDIFACT message interfaces’ maintainability, we developed a parser generator and unit tests made most documentation unnecessary.
This included a lot effort on naming, including discussions with the whole team, and writing minimal documentation comments in the code to explain classes.

Rewriting parts of the system still took longer than the project sponsors would have liked, and we declared the project a success having only replaced part of the original system.
However, that greatly improved on the norm for system rewrites: total failure and huge business write-offs.
