---
title: Using only English words in code
description: What if you could tell the compiler to require correct spelling?
layout: hh
---

I’ve just written about how [coding style](http://hilton.org.uk/blog/contstrained-coding-style) and [type](http://hilton.org.uk/blog/constrained-oop-types) constraints could result in better code if they were built into the programming language. 

They say that good design comes from embracing constraints. The thing is, with a language like Scala there aren’t nearly enough constraints, presumably in the name of flexibility, power and, of course, scalability. Sometimes, I’d like like to write code that was subject to more constraints.

Suggesting language changes was deliberately extreme, in the interests of starting a conversation; in practice there’s more precedence for adding constraints as compiler directives, such as JavaScript’s strict mode.

## Programming modes

An older example is [use strict](http://perldoc.perl.org/strict.html) in Perl, which generates compiler errors for ‘unsafe constructs’. Note that is Perl we’re talking about, so it should have been called ‘use slightly-less-obfuscation’. The same probably goes for JavaScript, come to think of it.

Something else I once saw in Perl code was `use English`. Sadly, this only turned out to be a module that allowed you to use words instead of symbols for certain variables, so instead of `$:` you could say `$FORMAT_LINE_BREAK_CHARACTERS`, for example. I was really hoping that ‘use English’ would mean something else. Something more constraining.

## Abbreviations in code

One of my experiences with learning to read a foreign language, in everyday use, is that abbreviations really slowed me down. In Dutch informal writing, for example, there are often a lot of initialisms to save writing things out in full. In English, that would be things like writing i.o. (instead of) or i.r.t. (in relation to).

The first time you look at someone else’s codebase, you tend to see the same thing: abbreviations used in variable names that don’t mean anything until you’ve managed to decode them, at which point they become part of the project’s jargon. I don’t think that’s a good thing in code where communication is more important than art. In novels, for example, it’s mildly annoying when the author starts inventing words - and you get this a lot in sci-fi - but that’s far more reasonable than it would be in technical documentation.

## Using English

Personally, I prefer to use standard English where possible in my code. In particular, this means that if I can I’ll have a project standard that shall be no abbreviations in name of identifiers - just whole words. They should also be spelled correctly. For example:

* `dir` becomes `directory` or `direction`
* `char` becomes `character` or `character`
* `req` becomes `request` or `required`
* `in` becomes `input` or `initial`
* `rev` becomes `reverse` or `revision`.

This may sound extreme, but there’s still plenty of room to be creative and brilliant when you write code without adding randomly-invented jargon into the mix. That slows things down, especially for new team members, or contributors if you’re writing code for an open-source project.

Perhaps less bad than prefixes or initialisms, are the abbreviations that omit the vowels - `ctx` and `src` for example. It’s nice that there’s enough redundancy in English to make it possible to work out what these mean, but it’s also worth considering that that redundancy is there for a reason. Try removing all of the vowels from a few paragraphs of text and see how fast you can read it.

In practice, allow one exception: ‘id’ as an abbreviation for ‘identifier’. If there were language support for a restriction like this, you would also want to allow a custom list of exceptions per project, because a domain language often includes jargon and abbreviations that belong in code.
