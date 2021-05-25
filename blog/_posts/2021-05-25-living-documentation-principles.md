---
title: Principles of living documentation
description: Reflections on ‘Living Documentation’, by @cyriux
layout: hh
tags: documentation book
image: living-documentation.jpg
---

![Living Documentation - book cover](living-documentation.jpg)

The book [Living Documentation](https://www.pearson.com/us/higher-education/program/Martraire-Living-Documentation-Continuous-Knowledge-Sharing-by-Design/PGM1724668.html),
by [Cyrille Martraire](http://cyrille.martraire.com/about/)
explores the concept of _living documentation_.
This article examines what that means.

[Martraire’s principles of documentation](martraire-documentation-principles)
establish documentation as a knowledge-sharing process.
Chapter 1 continues with principles of living documentation, followed by the canonical example of living documentation in chapter 2.

## Living documentation

People often abuse the term [living document](https://en.wikipedia.org/wiki/Living_document)
when sharing a document with other people who could potentially keep it up-to-date but who, in practice, will do no such thing.
In Martraire’s book, _living documentation_ has a more specific meaning.

Gojko Adzic introduced the term _living documentation_ in his book
[Specification by Example](https://gojko.net/books/specification-by-example/)
to refer to the result of a documentation system.
The documentation provides a reliable accessible source of software system knowledge, based on validated specifications.
An example of this fills Martraire’s second chapter.

## Behaviour-driven development

[Behaviour-driven development](https://cucumber.io/docs/bdd/) (BDD)
offers the canonical example of living documentation in its use of structured English test scenarios, combined with automated testing tools.

The tooling plays a critical role: it reconciles any differences between test scenarios and automated tests - two redundant knowledge representations.
This reconciliation (fixing failing tests) ensures that the documentation (the test scenarios) remains up-to-date.

## Four principles

Martraire introduces principles of living documentation (p20) and later matches them to BDD (p65).
We learn that BDD satisfies all four principles by providing:

1. **collaborative** documentation that takes input from people in business, development and testing roles
2. **insightful** documentation whose precise structure exposes uncertainty and complexity
3. **reliable** documentation, thanks to automated checks and manual reconciliation with its implementation
4. **low-effort** documentation based on test scenarios, assuming that you already put in the effort to identify and discuss concrete examples.

BDD appears to satisfy these principles _by construction_;
perhaps BDD specifies living documentation _by example_.
Either way, we can use these principles to evaluate other kinds of living documentation.
However, we may have to add a fifth principle: we need _feasible_ documentation.

## Documentation costs money

The principle of _low effort_ risks causing a misunderstanding, and especially this note (p63):

> If the tool you need in your context is missing, you should create it on top of or as a derivation of existing tools. 
> The sky’s the limit.
> Custom tools or extensions of tools can be created as fun projects, on hackathon days, or during slack time; they needn’t be made by vendors or other people.

This veers dangerously close to the management fantasy that some necessary software development work might happen _for free_, in hours you somehow don’t have to account for.
However, Martraire really means that living documentation’s value must justify the effort it requires.
In particular, developers should take care to avoid using living documentation as an excuse to embark on an endless documentation system development project.

This development cost may mean that living documentation’s ultimate popularity depends on emerging combinations of:

1. **a software development technique** whose value justifies the overall effort, like BDD
2. **a documentation type** that proves collaborative and insightful, like [Gherkin](https://cucumber.io/docs/gherkin/) test scenarios
3. **a reconciliation tool** that makes the documentation reliable at reasonable effort, like [Cucumber](https://cucumber.io) and [SpecFlow](https://specflow.org).

After all, you might need more software documentation than test scenarios.
