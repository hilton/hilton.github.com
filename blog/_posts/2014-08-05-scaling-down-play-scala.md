---
title: Scaling down Play and Scala web applications
description: Cruising with Play, Scala and in style
tags: Scala
layout: hh
---

[ ![Rolls Royce](rolls-royce.jpg) ](https://www.flickr.com/photos/alexprevot/8696067685)

What’s the best kind of car for getting around town, popping out to the shops and cruising along the seafront on a warm summer evening? The most basic small car will do, perhaps, but it won’t do it in style. If you can afford it, it’s far more classy to cruise along in a massively overpowered Rolls Royce, with nothing more than a soft purr from its V12 engine.

Sometimes, building a database-backed web application is just a short drive, rather than a round-the-world expedition. For a small web application, PHP will do, and is perhaps the most popular choice. Using 
[Play](http://playframework.com/) with [Scala](http://www.scala-lang.org) is more classy, though, and like owning a Rolls if you already know how to use them. Learning Scala might have been more effort than PHP, although that’s debatable, but once you have it, you have it.

There is a lot of attention for how Play and Scala scale up to complex applications, and how reactive programming enables large high-performance applications, but there is a lot of mileage in learning to scale _down_ as well and and giving all those PHP developers a run for their money.


## Learning Scala

There two parts to scaling down Scala: they way you learn it and the code you write. Learning Scala the easy way massively reduces how much time you need to spend on it before you can build a web application. Writing Scala code the easy way means less work to actually build it.

The hard way to learn Scala is to learn the whole language or to start the theory behind functional programming. Or Haskell. These things will make you a better Scala programmer, but at huge cost, in the same way that an Italian phrasebook is easier to understand if you study latin for a few years first. [Programming in Scala](http://www.artima.com/shop/programming_in_scala_2ed) covers so much of Scala, for example, that reading it is more work than the whole of a small development project.

The easy way to learn Scala is to learn what you need for building a web application, as you go along. 
[Atomic Scala](http://www.atomicscala.com) is probably the best book for this. It’s not for nothing that its blurb starts with:

> This should be your first Scala book, not your last.

Unfortunately, the [Scala web site book’s page](http://www.scala-lang.org/documentation/books.html)
still lists _Programming In Scala_ first.


## Writing Scala code

Spending a couple of years on a large team building a big web application with Play and Scala makes for an interesting project. It’s also a great way to learn to write Scala code in practice, because of how much code you get to read. However, on a big project you don’t get to see how little code a Scala web application can be.

Scaling down Scala coding for a small application means finding a good trade-off between having less code and code that is easiest to read. A big application has neither, because however good the code, when there is a lot of it there is inevitably too much structure and abstraction for it to be truly easy to read.

Scala makes it natural to write less code in several useful ways, a few of which are especially relevant for small web applications:

* type inference reduces clutter around local variables
* functional style eliminates the boilerplate for dealing with collections
* case classes make domain models more concise
* case classes make it feasible to define view models for page templates.

You can also simplify code in a small application by avoiding lasagna architecture - resisting the temptation to add many application layers and abstractions. This is especially true in web applications that don’t have a lot of logic; there is no need for a separate ‘business logic’ layer when all you do is edit and view data.

The last part of scaling down how you write Scala code is keeping it readable. Not only do you not need application layer abstractions in a small code base, you also don’t need sophisticated language techniques. Type parameters, for example, provide great flexibility in libraries by abstracting functionality over types, but you don’t need this in a web application. Instead, you can maximise readability by doing the opposite - using specific types where possible. You can refactor when needed, because an application with closed code base doesn’t have to worry about compatibility and versioning, the way a library does.


## Play Framework

Scaling down Play Framework application code also has two parts: keeping everything neat, and using the standard HTTP API approach. The neatness largely comes for free, because of a Play application’s standard structure, but it still takes some discipline to achieve consistency at all levels. At the application level, you need tidy file organisation, and at the code level, you need things like a tidy routes file.

The second part - using the standard HTTP API approach - means building a web-based user interface (or REST API) using standard Play functionality. Use the standard (built-in) functionality for things like HTTP routing, templates, form validation and user error handling. Leave the additional development cost of customisation and advanced features for big applications with special requirements: going with the flow is the fastest development and results in less code.

Note that front-end development is somewhat separate to this story, because you have exactly the same options as the hordes of PHP developers. You can either hire a team of JavaScript and front-end experts, or keep it simple and just use [Bootstrap](http://getbootstrap.com/).


## Database access

Database access is still the weakest part of the scaled-down Play/Scala web application, because there is no longer a standard approach that is well-documented and trivial to get working. There are two approaches, neither of which seems to be perfect yet, although both of which are an improvement on Java-based ORM solutions:

1. Relational database access with [Slick](http://slick.typesafe.com/) - results in very nice readable code, but can be tricky to get started with
2. NoSQL database access, e.g. [MongoDB](https://www.mongodb.org/) with JSON - simpler Scala code, but can be tricky to implement certain queries.

The choice probably depends on what you are most familiar with. If you are experienced with SQL and writing DDL scripts to create database objects, then you can be very productive with Slick, with very little code. If you are experienced with a particular NoSQL database, such as MongoDB, then you already know which gotchas to avoid and how to approach each kind of data access.

Either way, scaling down database access means avoiding complexity or magic. With Slick, for example you explicitly map the Scala model to database tables and write explicit queries for each select, insert, update or delete. What may appear to be a verbose approach to the code is actually faster to build because there’s no strange behaviour to debug - just the SQL that corresponds to your queries.


## Development hardware

After you’ve scaled down your coding, the last step is to scale up your development workstation hardware. To truly cruise in style, you need such a powerful workstation that the quietest sound in the room is a low hum from continuous Scala compilation as you type.

Photo: [Alexandre Prévot](https://www.flickr.com/photos/alexprevot/8696067685)