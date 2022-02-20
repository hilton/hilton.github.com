---
title: Custom development with Effektif
description: What a process-centric spreadsheet alternative means for developers
tags: BPM
layout: hh
---

![A spreadsheet](spreadsheet.jpg)

[atlken77](https://www.flickr.com/photos/floridaken77/5964733034){:.photocredit}
[CC BY-ND 2.0](https://creativecommons.org/licenses/by-nd/2.0/){:.license}

[Effektif](effektif-hosted-bpm) changes things for software developers, because it provides a process-centric alternative to spreadsheet-driven development. Instead of trying to do everything with spreadsheets (and e-mail), a process management tool like Effektif allows people to discover a different perspective.

## Spreadsheet-fixation

Spreadsheets are so pervasive in business, that there’s an old user-interface design joke:

{:.big style="max-width:28em"}
> There are only two user interfaces in the world: Word and Excel.

The joke works because of the recognisable frustration of trying to explain the design of a shiny new business automation solution that neither looks like a word-processor, nor a spreadsheet. This may even explain why so much development work seems to be on either some kind of (crypto-Word) CMS or a (crypto-Excel) CRUD-based data management application.

Spreadsheet-fixation is not always a bad thing, though. Personal spreadsheets allow end users to experiment with their own solutions, starting with the simplest thing that will do (at least part of) the job. Most spreadsheets are really simple databases, and most business applications are based on a database.

## Spreadsheet-Driven Development

A business automation project, to develop custom software to support some business process, will usually start by surveying the existing tools. The developers will gather up the spreadsheets to discover specifics and hidden details about the current situation, to complement the vague verbal descriptions and the absence of specifications.

[Spreadsheet-Driven Development](http://karankurani.com/post/96463823258/spreadsheet-driven-development) is a useful technique for dealing with the difficulty of producing realistic test data sets, and the danger of data modelling that is untarnished by reality. The alternative isn’t as easy.

Without the spreadsheets, the same developers would have to resort to listening to what end users talk about and reading what’s written on the Post-It notes that decorate their monitors. Even if the development team are up for this, they don’t always have the opportunity to spend time in the same room as the end users.

## Process-centric design

[Process-centric design](process-centric-design) - starting from tasks and activities rather than data - is harder, because you don’t have the spreadsheets. To design and build business process support software, typically using a Business Process Management framework such as [Activiti](http://activiti.org), software developers really do have to talk to end users about how they work, understand the flow of Post-It notes, and discover an otherwise intangible business process.

[Effektif](effektif-hosted-bpm) could be the spreadsheet of business processes. In the same way that spreadsheets are frequently used as general purpose tools for managing data, Effektif is a general purpose tool for managing processes. This could be things like basic case management, approval work-flow, incident management or just ad-hoc task co-ordination across multiple people.

As with spreadsheets, reaching and going beyond the limits of the tool is a good thing, and possibly represents that rare case where custom software development is justified. This is the phase where it’s a good thing to [do things that don’t scale](http://paulgraham.com/ds.html), in an existing company rather than a start-up.

## Custom software development

When office workers have general-purpose software for process management, they will be able to experiment in a way that they cannot on a conventional process-based software development project. If and when custom development then starts, there will be much less guesswork, and more concrete details about how the processes actually work, including an actual executable (and executed) process diagram.

This is why a tool like Effektif is important for enterprise software developers: it joins the dots between what people actually do it their job - the real business process - and a software-based model. Without this concrete process description, business analysts and software developers are just left with what people _say_ they do, which is a poor substitute indeed.
