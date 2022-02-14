---
title: Meaningless variable names
description: Naming things without actually choosing a name
tags: programming naming
layout: hh
---

There’s an old programming joke that goes like this:

> Q: What’s the worst variable name ever?  
> A: `data`
> 
> Q: What’s the _second-worst_ variable name?  
> A: `data2`

Actually, this might originate in [Andy Lester’s 2004 article](https://petdance.wordpress.com/2012/04/18/the-worlds-two-worst-variable-names/), and not be old at all. Either way, it’s a good one. The joke is funny because ‘data’ doesn’t add any _meaning_ - you already know that a variable is data - and because we’ve all seen this in production code. The same goes for the second-worst name.

When it comes to code review, bad variable names are a great thing to look for. There are many kinds of bad, of course; meaningless names are just one kind of bad name, and deserve a closer look.


## Four kinds of meaningless names

If you want to avoid choosing a name without any meaning, then there are several kinds of names that you can use.

1. `data` - stating the obvious, as in the joke above
2. `customer = new Customer`- the strongly-typed variant of the same thing
3. `customer2` - adding a number to another name to indicate ‘another one’
4. `_`, `foo` or `dummy` - using a special name to indicate that there’s no meaning.

All of these have two things in common:

1. there are a few situations when this is the best choice, but
2. most of the time you can choose a better name.

Just because you can’t think of a better name, that doesn’t mean that there isn’t a problem.


## The problem with meaningless names

Meaningless names make code harder to read because they make it more abstract. Abstraction is not necessarily a bad thing, but it _is_ a bad thing when it comes at the cost of readability. This is mostly because programmers add abstraction layers _instinctively_, but hardly ever increase readability.

If you’re considering a choice between abstraction and readability, think back to the last time you had to maintain code written at least five years earlier by programmers who have now vanished: would you have preferred that the code be more abstract or more readable? (If you haven’t been in this situation yet then it isn’t too late to change career - get out while you can!)

A reasonable rule for coding is to never use meaningless variable names. For now, let’s consider the cases when a meaningless name might be okay, because it’s these exceptions that test the rule.


## Abstract names belong in library code

If you’re writing generic library code, such as a collection manipulation library, then there are going to be variable names that don’t have much meaning. Your implementations will have to refer to things like `collection` and `item`, simply because your library doesn’t care if the collection contains customer objects or cute kittens. This code is the exception to the rule.

Abstract names don’t belong in the domain model, because everything there _means_ something. Naming is most critical in an application’s domain model, because that’s where it’s hardest to understand what everything means.


## Numbered names smell bad

Numbered variable names are a bad [code smell](http://en.wikipedia.org/wiki/Code_smell), and can probably be given better names. One scenario is logic that uses more than one instance of a given type:

    val parrot1 = …
    val parrot2 = …

As in this example, this is common in combination with using the name of the type (`Parrot`) instead of coming up with a sensible name for each instance. If you do this, it might be easier to understand what’s going on, as in this pet shop example:

    val deadParrot = …
    val replacement = …

Another scenario is when multiple instances represent a collection:

    val kitten1 = …
    val kitten2 = …
    val kitten3 = …
    val kitten4 = …

You can refactor this into a collection, which for animals can be called a [litter](http://en.wikipedia.org/wiki/Litter_(animal)):

    val kittens: Litter[Cat] = …


## You probably don’t want a metasyntactic variable

Consider explaining Scala case classes using a simple but generic example:

    case class Foo(bar: Baz)

It’s common to use `foo` as a placeholder name like this, in code examples, to specifically indicate that the name doesn’t have any meaning. The technical term for this is [metasyntactic variable](http://en.wikipedia.org/wiki/Metasyntactic_variable).

However, this is rarely a good idea: code examples are usually better when they are more specific, without this getting in the way of a general explanation, because they are easier to think about:

    case class AfricanSwallow(laden: Boolean)

Besides, for some reason, there is far more opportunity to inject humour into examples that are far more specific than they have to be.


## Not caring what the meaning is

A variation on using the meaningless `foo` because you want to indicate ‘any meaning’, is when you don’t actually care what the meaning is. In Scala and Python, it’s idiomatic to use an underscore, such as when unpacking a pair to get at only one of the two elements:

    val (_, moreDeadlyAnimal) = breedingPair

Again, this is reasonable as far as it goes, but it’s still more messy than not having to do it. The underscore at the start of the line is like spending the first minute of a presentation telling the audience what you’re _not_ going to talk about.


## Meaningless naming checklist

In summary, when you come across a meaningless name, especially when you’re the one typing, consider the following questions.

1. Do you really know nothing about what this variable is for?
2. Are there really no constraints on values, other than perhaps its type?
3. If you’re writing generic code, are you really gonna need it?
4. If you’re still writing generic code, is it separated from domain code?
5. If you have a numbered name, would separate names or a collection be better?
6. If you have a placeholder name, e.g. `foo`, would a specific example be as good?
7. If you have an ignored name, e.g. `_` or `dummy`, can you avoid needing it?

After all, if you come to the conclusion that a meaningless name isn’t the best idea, you can move on to a far more interesting problem: coming up with a good name.
