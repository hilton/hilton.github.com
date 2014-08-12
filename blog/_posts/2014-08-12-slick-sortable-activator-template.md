---
title: Play/Slick back-end for jQuery UI Sortable
description: A new Typesafe Activator template
tags: Scala
layout: hh
---

For a programmer, two especially useful ways to learn to use new technologies are tutorials and sample applications. The problem with sample applications, though, is that application source code is not linear, and it can be difficult to discover a useful way to approach it.

## Typesafe Activator

Tutorials provide a guided linear flow, but make it difficult to see the big picture. A challenge when writing a book like [Play for Scala](http://bit.ly/playscala2p) is to include enough enough context with code snippets to allow the reader to see how they relate to each other, while avoiding listings that are too long to follow. The usual compromise is to first explain a series of short snippets, and then repeat the code in one long listing.

[Typesafe Activator](https://typesafe.com/activator) cleverly combines the ability to browse and run sample applications with linear tutorials, and therefore has the potential to be more useful than conventional programming books. I decided to try it out, and wrote my own Activator template.

## Play Framework with Slick back-end for jQuery UI Sortable

[Play Framework with Slick back-end for jQuery UI Sortable](https://typesafe.com/activator/template/slick-sortable) is a new Activator template that demonstrates how to integrate [jQuery UI Sortable](http://jqueryui.com/sortable/) with a [Play Framework](http://playframework.com/) 2.3.3 (Scala) back-end that uses [Slick](http://slick.typesafe.com/) 2.1.0 for persistence. The [template page](https://typesafe.com/activator/template/slick-sortable) includes instructions for use.

In case you were wondering, jQuery UI Sortable is a JavaScript library that allows you to reposition elements in an HTML list with drag and drop. If you add a persistent server-side back-end then you can use this to add manual-reordering to a web application user-interface.

For example, you could write a new front-end for [GitHub Issues](https://github.com/features#issues) that lets you manually order a Scrum product backlog. This is of course not included in the Activator template, but left as an exercise for the reader.
