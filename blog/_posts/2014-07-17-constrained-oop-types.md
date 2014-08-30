---
title: Object-oriented programming with constrained types
description: What if you had to define types for all values?
tags: programming
layout: hh
---

With object-oriented programming in a language like Java or Scala, we’re used to defining classes for complex types, such as Person and Organisation. At the same time, we use ‘primitive types’ such as String and Integer for single values, such as a person’s name or a company’s registration number. We also use general types such as Date, for a date of birth say, that are not built into the language.

Why don’t we go further, and use custom types for single values as well? Why not define PersonName, RegistrationNumber and BirthDate as types?

## Primitive types

The problem is, when you’re writing code, it’s too convenient to using String and Integer types to store names and numbers, resulting in code that’s harder to read and more fragile. You might be able to see that a value is 42 without knowing what that means, or that you have 3 of something, without knowing what they are. Not having named the types, you can end up having to compensate with more wordy variable and parameter names.

Worse, you can end up with subtle bugs, when you do things like assigning a person’s name to the name of a status, or calling an API that expects a BirthDate with an InvoiceDate instead.

## Wrapper types for value objects

You can solve this by defining custom wrapper types for value objects, so that mixing types causes compilation errors. The only problem is that this isn’t necessarily convenient. In Scala, for example, you can use a case class that has a single `value` property to wrap a primitive type, such as `String` or `Int`. This is certainly convenient, but it doesn’t happen by itself.

The missing constraint is to only allow primitive types to be used for _private_ values/variables. This would mean that all API and function/method parameter and return value types would have to be defined types.

## Hard coding constraints

Of course, what would be really cool would be if the language enforced this constraint, rather than merely using a coding standard. That would be more hardcore than [constrained coding style](http://hilton.org.uk/blog/contstrained-coding-style).

Meanwhile, you’ll have to settle for team coding standards that enforce this. To understand more about why and how, read Ken Scambler’s excellent article about [The abject failure of weak typing](http://techblog.realestate.com.au/the-abject-failure-of-weak-typing/).
