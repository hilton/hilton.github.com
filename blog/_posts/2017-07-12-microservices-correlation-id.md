---
title: Correlation IDs for microservices architectures
description: Sorting out logs with UUID, GUID, CUID and other identifiers
layout: hh
tags: microservices
---

If you sell things to customers, or participate in a physical supply chain, you’ll get used to the most frequent of questions: _where’s my stuff?_
Armed with order confirmation numbers, customers will contact you, and you’ll end up with a phone call, an e-mail or a support ticket asking you to investigate a particular customer order.

In general, most systems have a high-level task that corresponds to the customer order in an order processing system, and when things go wrong, that’s what you end up investigating.
Any system that processes more than one ‘order’ at a time will end up with system logs that interleave log messages for multiple orders.

Distributed systems, and those using microservices architectures in particular, scatter the order’s log messages further, across multiple locations, to be gathered by centralised logging tools.
To make it straightforward to investigate problems, you need a way to group the log messages that relate to a particular order, in all of your systems or services.

## Grouping log messages by correlation ID

Correlation IDs provide the standard solution to this problem.
A correlation ID uniquely identifies each ‘customer order’, or the equivalent in your system.
Similarly, web-based applications have ‘user requests’, for each user interaction.
[Sam Newman: Practical Implications of Microservices in 14 Tips](https://www.infoq.com/articles/microservices-practical-tips/) calls this a ‘domain-level operation’.
In general, you can usually identify track the ‘request’ down to an initial incoming message of some kind.

Once you have a correlation ID, you include it in every log message and network request, such as HTTP requests to microservices.
For a more detailed explanation, see [A consistent approach to track correlation IDs through microservices](http://theburningmonk.com/2015/05/a-consistent-approach-to-track-correlation-ids-through-microservices/).

Once you’ve worked out why you need correlation IDs for customer orders, and how to use them, you need to know when and how to create them.
This is where things get more interesting, because you have choices to make.

## Creating a correlation ID

**Create a correlation ID for each incoming request in every service with an external interface** or message, so that this correlation ID can identify the context.
In a web application, this is the front controller that first handles incoming HTTP requests.
In a middleware system, this might be the service that reads from a message queue or monitors a directory for uploaded files.

## Transporting correlation IDs

**Once you’ve created a correlation ID, use it _everywhere_.**
To use a correlation ID in all log messages in all services, in a microservices architecture, you need to transport it between services.

**Use an `X-Correlation-Id` header to include correlation IDs in HTTP requests.**
Ideally, you’ll be able to implement your HTTP interface to add these headers transparently, so you don’t have to rely on developers remembering to add the header each time, e.g. by keeping it in a Java `ThreadLocal` or Go `Context`.

If you’re not using HTTP you probably have an equivalent way to add message metadata, usually as some kind of _message envelope_ properties.
If you’re generating files, however, appending the correlation ID to the file name may be the only option.

You should also include the correlation ID in requests and messages you send to external systems.
If you’re lucky, you’ll get the same correlation ID back with every response or support request.

Once you’ve figured out where to create correlation IDs in your system and how to use them, you need to decide what kind of values to use.
There are different strategies and standards for you to choose between, with different uniqueness, length and readability properties.

## UUID a.k.a. GUID

`123e4567-e89b-12d3-a456-426655440000`

If you don’t know or don’t care what kind of value you use for your correlation IDs, then just use a UUID or GUID and skip the rest of this blog post.
However, these values aren’t perfect for all use cases, so you might want to consider other options at some point.

The Universally Inique Identifier (UUID) standard is defined by both an ISO standard an [RFC 4122](), and [explained in detail on Wikipedia](http://en.wikipedia.org/wiki/Universally_unique_identifier).
Microsoft calls the same thing a Globally Unique Identifier (GUID), and you can use the terms UUID and GUID interchangeably and probably get away with ignoring any small historical differences between them.
Actually, you should always call it a UUID in your code because that’s more standard.
Your more pendantic colleagues might just forgive you if you refer to a ‘GUID’ (rhymes with ‘fluid’) in conversation because no-one knows how to pronounce ‘UUID’.

The UUID standard defines five variations, with different properties and potential disadvantages.
Depending on which UUID version, and on the specific implementation:

* IDs take up a lot of space, especially when serialised as strings
* someone could trace a UUID to the computer that generated it
* a system might not reliably generated more than one unique UUID every 7 seconds
* pseudo-random generation may fail to prevent duplicate IDs
* the implementation might generate IDs that don’t comply with the standard.

As soon as you have to care about these kinds of things, you need to at least choose which UUID version/variant to use.
Alternatively, you might consider using something other than a UUID.

## Business ID

`15926535`

In some systems, you might be able to use a correlation ID from an upstream system.
For example, if you only process customer orders from an order management system that already includes a correlation ID in all requests then you can use that, rather than generating your own.

When you use an external correlation ID, you might choose to use a domain-specific name, such as _order number_ rather than _correlation ID_.
These are also called ‘business IDs’ or ‘external IDs’.
This makes communication between people easier, but only if the external ID is always available.

An external ID potentially offers other benefits, such as taking up less space.
You only get smaller values, such as sequential integers, if a single system creates the numbers sequentially.
Most of the time, you’ll have to generate your own IDs.

## Human-readable mixed IDs

`1234/Oldwood/192.168.1.1`

UUIDs have the disadvantage that they all look like random garbage.
You can avoid this by combining generated IDs with human-readable information, to make equal values easier to spot.
In healthcare, people often combine unique patient numbers with the patient’s last name, for example.

[Causality – Relating Distributed Diagnostic Contexts](https://accu.org/index.php/journals/1870?cn=cmVwbHk%3D) shows the example of an ID like `???` and explains like this:

> Ultimately it’s down to grep-ability but the human visual system is good at spotting patterns too and if it’s possible to utilise that as well it’s a bonus.

This combines the best of two words: the _grep-ability_ of being able to search files for unique IDs, and the human usability of spotting matching values when browsing a list.

## Base-62 encoded numbers

`7M85y0N8lZa`

You might decide that UUIDs take up too much space.
The astronomically large number of possible values avoids collisions (duplicate IDs) when separate services in a distributed system generate IDs simultaneously.
Depending on what you need, you might be able to use a smaller identifier, especially if you can generate sequential IDs in one place.

[A Recipe for Adding Correlation IDs in Java Microservices](https://blog.bandwidth.com/a-recipe-for-adding-correlation-ids-in-java-microservices/) describes using base-62 encoded numbers instead of UUIDs.
Base-62 encoding uses upper- and lower-case letters, and digits, which results in a shorter string serialisation than just digits, but without special characters.

## CUID

`ch72gsb320000udocl363eofy`

The [CUID web site](http://usecuid.org/) introduces ‘collision-resistant ids optimized for horizontal scaling and binary search lookup performance’.
The CUID design addresses scenarios that can result in duplciate UUID values.

> Application developers report v4 UUID collisions causing problems in their applications when the ID generation is distributed between lots of machines such that lots of IDs are generated in the same millisecond.

The CUID specification results in unguessable monotonically increasing IDs that should be useful in scenarios that require horizontal scalability and performance, and small portable implementations such as in-browser JavaScript.

## Diagnostic context pattern

If correlation IDs haven’t already given you enough to think about, then you can read more about a related pattern: diagnostic contexts.
[Causality – Relating Distributed Diagnostic Contexts](https://accu.org/index.php/journals/1870?cn=cmVwbHk%3D) introduces the concept, which extends the idea of a correlation ID to include more debugging data than just an ID that identifies a particlar context.

In Java logging, [Mapped Diagnostic Contexts](https://logback.qos.ch/manual/mdc.html) implement this pattern, as explained in [Java Logging with Nested Diagnostic Context (NDC)](http://www.baeldung.com/java-logging-ndc-log4j).

## Further reading

* [The Value of Correlation IDs](https://blog.logentries.com/2016/12/the-value-of-correlation-ids/)
* [Implementing correlation ids in Spring Boot](https://taidevcouk.wordpress.com/2014/05/26/implementing-correlation-ids-in-spring-boot/)
* [Best Practices for Building a Microservice Architecture](http://www.vinaysahni.com/best-practices-for-building-a-microservice-architecture#correlation-ids)
