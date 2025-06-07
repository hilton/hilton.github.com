---
title: Anytype’s local-first architecture
description: new user experience and data ownership priorities
layout: hh
tags: product review
image: local.jpg
---

![](local.jpg)

[Tim Mossholder](https://unsplash.com/photos/qvWnGmoTbik){:.photocredit}

{:.series}
1. [Anytype review](anytype-review)
2. Anytype architecture ←

[Anytype](anytype-review)
offers a Notion alternative whose user-experience improvements go beyond its user interface.
Instead of highlighting the user interface,
the [Anytype web site](https://anytype.io) focuses on the benefits of its local-first architecture:

* data privacy
* access your data without third-party services
* third-parties can’t access your data
* third-parties can’t control your access to your data.

(The writing experience – ‘compose beautifully’ – comes later.)
In general, local-first software delivers these benefits by design.

## Local-first software

In their essay,
[Local-first software: you own your data, in spite of the cloud](https://www.inkandswitch.com/essay/local-first/),
the team that coined the term _local-first software_ focus on improving collaboration and data ownership,
by applying seven _ideals_ to software design.

1. ‘[No spinners: your work at your fingertips](https://www.inkandswitch.com/essay/local-first/#1-no-spinners-your-work-at-your-fingertips)’ – a responsive user interface
2. ‘[Your work is not trapped on one device](https://www.inkandswitch.com/essay/local-first/#2-your-work-is-not-trapped-on-one-device)’
3. ‘[The network is optional](https://www.inkandswitch.com/essay/local-first/#3-the-network-is-optional)’ – work offline, or on an unreliable network
4. ‘[Seamless collaboration with your colleagues](https://www.inkandswitch.com/essay/local-first/#4-seamless-collaboration-with-your-colleagues)’ – avoid editing conflicts
5. ‘[The Long Now](https://www.inkandswitch.com/essay/local-first/#5-the-long-now)’ – keeping data accessible for years to come
6. ‘[Security and privacy by default](https://www.inkandswitch.com/essay/local-first/#6-security-and-privacy-by-default)’
7. ‘[You retain ultimate ownership and control](https://www.inkandswitch.com/essay/local-first/#7-you-retain-ultimate-ownership-and-control)’

See also: [Annette Bieniusa’s conference presentation about local-first software](https://media.ccc.de/v/bob11-2025-local-first-software-bieniusa).

These seven ideals result in a different user experience to cloud-based collaboration platforms like Notion.
But only the first immediately becomes apparent in the user-interface.

## User-interface responsiveness

_Local-first_ literally means storing all of the data locally, on your computer.
When you use Anytype, this data loads without the network latency we get used to with cloud apps.
Changes are then synchronised over the network asynchronously,
much like in Notion and Google Docs.

Not waiting seconds for pages to load, and for search results to appear, elevates the user experience.
Expert users who use keyboard shortcuts find this responsiveness especially satisfying,
because of how it allows them to work faster.

## Data ownership

US politics in 2025 have prompted European companies to look for alternatives to US software.
US control of your data poses new potential risks,
such as losing access to data, and losing GDPR compliance with little notice,
in the case that the EU-US data protection framework adequacy decision collapses.

Anytype belongs to a Swiss/German organisation, and you always have your data locally,
so you have less reason to worry about someone else blocking your access to your own data.
Meanwhile, Anytype encrypts your local data, using a key that only you have.
You get control over who can access your data, and which devices can synchronise it.

## Data portability

Anytype also makes it easy to move your data elsewhere.
You can export your data as an archive of Markdown documents, 
or export a single page to Markdown or PDF.
Because your data is local, this doesn’t depend on access to a cloud service, or its availability.


## Offline functionality

Anytype’s local-first architecture means that you always work on local data,
so you don’t need a network connection to view and edit content.
The network synchronises your changes with other devices, after you make those changes,
so you can work offline.
When you reconnect to the network, Anytype will synchronise updates.

As well as enabling offline work, working local-first and then synchronising means that 
a bad network connection won’t degrade your user experience.
Even if you never work while traveling, for example,
you’ll no longer notice the occasional network issues that cause video calls to freeze for a few seconds.
