---
title: Where to start documenting a legacy system
description: What new team members need, to understand a system
tags: documentation
layout: hh
---

Over on the [Write the Docs Forum](http://forum.writethedocs.org), a recent question asks [how to get started with documenting a legacy system](http://forum.writethedocs.org/t/documenting-legacy-systems-where-to-start/540).

This situation tends to change how a programmer thinks about software documentation.
When you build a system from scratch - greenfield development - you won’t necessarily notice if you don’t have enough documentation, or even none at all.
The experience of starting to lead a team that has responsibility for maintaining a poorly-documented legacy system changes that.
This situation leads to the discovery that the only thing harder than documenting software is trying to document legacy software built by people who have disappeared or who (claim to) have forgotten everything about it.

In general, I suggest two things in parallel for this kind of system documentation: a brief system overview and one kind of detailed documentation.

## System overview

By _system overview_ I mean something short that introduces the different perspectives on the system. Specifically, I mean max one ‘page’ each on the following as you can figure out.

* **Component list** - a table of the system’s separate components that identifies each one’s name, purpose, provider and version number
* **External interfaces** - similar to the component list, but for other people’s systems you connect to
* **Architecture overview** - typically a single diagram - that shows how these components and interfaces connect
* **Functional overview** - very short description of what the system does and why - which business problem it solves.
* **Non-functional requirements** - which five, say, of the long list on [Wikipedia](https://en.wikipedia.org/wiki/Non-functional_requirement) are most important for this system

The trick with each of these is to provide a starting point for a developer to delve deeper by asking other people or reading the source code.
You typically won’t need a lot of detail in every area.
However, you will probably need at least some more detailed documentation.

## Detailed documentation

However, each system usually has one area that features enough complexity to require more detailed documentation.
Some systems have complex data, or data models that use obscure domain jargon.
Other systems appear simple but support a complex business process.
In some systems, the complexity lies in complex user-interaction and obscure user interface details.

By the time you have compiled a few pages of system overview, you will probably have figured out which kind of complexity characterises the system.
Next, add more detailed documentation that explains the system’s most complex aspect.

* **Use cases** - for systems whose functionality and behaviour hides complexity
* **Data dictionary** - explain a complex data model by explaining what each name (tables and attributes in a relational model) _means_ - with bonus points for data type information and data examples
* **Data model diagram** - rarely as useful as a data dictionary, but useful when the nature of the relationships needs explanation more than what things mean
* **User interface map** - to unwind and explain all elements in the user interface
* **External interface specifications** - for when there’s a published/public API

Your mileage may vary, but my experience of internal business systems suggests that a data dictionary provides the most value on account, because what things mean is the only thing that you can’t figure out by studying the source code.

## Next steps

Once you have basic system documentation, impossible things such as fixing bugs should become possible.
The next steps are to help people do things more quickly.
I recommend focusing on what everyone has in common, whatever they do later: getting started.

* Development environment set-up guide
* Test/production environment configuration and set-up
* Release/deployment guide
* Operational/usage guide
* Getting started user guide

In all of the above, focus on identifying the audience for each piece of documentation, and identifying and understanding your current biggest problem.
