---
title: BPM as a preferred approach to business application development
description: The fundamental problem with a process-centric approach
tags: BPM
layout: hh
---

![garden tools](tools.jpg)

A recent question over on the BPM.com forum asks:

> [Should BPM Be the Preferred Tool for General Application Development?](http://bpm.com/bpm-today/in-the-forum/should-bpm-be-the-preferred-tool-for-general-application-development)

No, BPM shouldn’t be the preferred approach, because there may be a better alternative.

For example, it’s common to use a data-centric design approach for building business applications, where you start from a data modelling perspective, rather than a process modelling perspective.

## Easy data modelling

When you start with data modelling, it’s usually fairly easy to discover which data people are using as part of their jobs, which means you can produce a nice satisfying data model diagram. Then you can code it all together into a nice big data management application, with the obvious CRUD style user interface: master-detail views and the like.

In fact, the hardest part of this is that the acronym that ends with IMS (… Information Management System) has probably already been used for something else. I once sat in a really long customer meeting with lots of highly paid people to try to find a different name for the system we’d built because the organisation (a large oil company) already had several other systems called ‘PIMS’, but that’s another story…

## Business process difficulties

The really great thing about data-centric application design is that it’s entirely unnecessary to figure out what business process the resulting Information Management System might be useful for, or how people are going to use the application, or what end result it might help them achieve. Even better: it’s entirely possible to complete a whole custom software development project to build some software without actually being sure that anyone will use it at all. After all, the idea situation is when there are no users at all, which really keeps software maintenance costs down.

BPM, on the other hand, is a problematic approach to application development, because it raises all sorts of difficult questions about the application you’re developing, such as ‘Why?’ Indeed, the worst thing about BPM as an approach is that you can’t really model a business process without understanding the process in terms of what result the process is supposed to achieve for an actual customer (internal or external). And if you go down that route, you might end up actually having to talk to real customers as part of the application development project. That would be ridiculous!

_Photo: [Jennifer C.](https://www.flickr.com/photos/29638108@N06/7718086616) / [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)_
