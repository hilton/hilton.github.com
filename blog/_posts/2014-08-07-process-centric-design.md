---
title: Process-centric application design
description: The fourth way to think about the problem
tags: BPM
layout: hh
---

![An address](address.jpg)

In [Play for Scala](http://bit.ly/playscala2p), I wrote about three difference approaches to web application design, according to whether you start with database, URL or user-interface design.

> One good way to design an application is to start with a logical data model, as well as an actual physical database. This is an alternative to a UI-centric design that’s based on how users will interact with the application’s user interface, or a URL-centric design that focuses on the application’s HTTP API.

## Data-first design

For example, imagine how you might start working on an address book application. Traditionally, software developers would start with the data model: start with one entity that we’ll call _Contact_ and add attributes, such as _Telephone number_ and _Address_. Once you’ve decided which data to support, then building the user-interface might be no more than adding [CRUD](http://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations and a search interface.

Web developers often start by imagining the user-interface. (Right now, you’re probably picturing Apple’s _Contacts_ application.) Once you’ve got as far as a user-interface mock-up, building the rest of the application might only consist of wiring-up the search interface and picking a way to store the data that you can edit.

Each approach may lead to the same application, from a different starting point. It may be easier to think about a design problem in a certain way and use that as the basis for the rest. Switching to a different perspective throws a different light on a problem, and can help you proceed when you get stuck.

What all three of these approaches share is a fundamentally data-centric approach: each is a different way to think about the data in the application and how you can interact with it: how you store it, access it and see it. What none of them consider is the notion of _process_. Business process management suggests a fourth way to think about the problem.

## Process-first design

The address book application might work out differently if you start by thinking about processes that require an address book. For example, these include:

1. Meeting someone.
2. Trying to contact someone and discovering that the phone number no longer works.
3. Learning that an existing contact has moved house or changed job.

Using the process of meeting someone as a starting point, for example, would then lead you to thinking about how you exchange contact details (in both directions), and which new information this interaction generates.

A business process focus on web application design starts somewhere else. This way of approaching the problem gets to the data that is common to the above approaches as the _last_ step in the following.

1. Start by discovering the business process that the application will support.
2. Design the human interactions - the collaboration - within that process.
3. For each interaction, identify data that must be presented or captured.

## Different resulting software

The process-first design approach may result in different software, whose user functionality is based on the processes rather than data maintenance operations. Perhaps not, in the case of the address book example, because the three example processes - starting with meeting someone, are all handled by the _Edit contact details_ feature in the data-first design. That’s not the whole story, though.

The flaw in the address book example is that I called it an ‘address book’, which you probably already associate with a particular kind of application (and you’re probably still thinking about Apple’s). However, the process identification step in the design process might have also identified other processes:

4. Deciding who to contact today.
5. Making a telephone call.
6. Running a call centre.

Adding support for these processes as well might result in a different kind of software - some kind of [customer relationship management](http://en.wikipedia.org/wiki/Customer_relationship_management) software. Process-first design results in an application whose nature reflects the process and interactions, not the underlying data.

Photo: [Henry M Karshis](https://www.flickr.com/photos/hmk/3972213129)