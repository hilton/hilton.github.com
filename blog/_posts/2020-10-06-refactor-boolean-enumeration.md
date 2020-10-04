---
title: Refactor Boolean values to enumerations
description: "From ‘97 Things Every Java Programmer Should Know’"
layout: hh
tags: programming
image: 97-things-java.jpg
css: ".blog .content a img { width:150px; float:right; margin:0 0 1em 1em; }"
---

<a href="http://shop.oreilly.com/product/0636920048824.do" title="97 Things Every Java Programmer Should Know">
<img src="97-things-java.jpg" alt="book cover" style="width:150px"></a>

You wouldn’t use ‘magic numbers’ in your code, so don’t use magic Booleans either! Boolean literals are worse than hard-coded numbers: a `42` in the code might look familiar, but `false` could be anything, and anything could be `false`.

When two variables are both `true`, you don’t know whether that’s a coincidence, or whether they’re both ‘true’ for the same reason and should change together. This makes the code harder to read, and causes bugs when you read it wrong. As with magic numbers, you should refactor to named constants.

Refactoring `42` to an `ASCII_ASTERISK` or `EVERYTHING` constant improves code readability, and so does refactoring `true` to a Boolean constant called `AVAILABLE`, in a `Product` class, for example. However, you probably shouldn’t have any Boolean fields in your domain model: Some `boolean` values aren’t really Boolean.

Suppose your `Product` entity has a `boolean` `available` field, to indicate whether the product is currently being sold. This isn’t really a Boolean: It’s an optional ‘available’ value, which isn’t the same thing because ‘not available’ really means something else, like ‘out of stock’.

When a type has two possible values, that’s a coincidence, and can change - by adding a ‘discontinued’ option, for example. The existing Boolean field cannot aommodate the additional value. 

Beware: Using `null` to mean something is the worst possible way to implement a third value. You’ll end up needing a code comment like ‘true when the product is available, false when out of stock, null when discontinued’. Please don’t do that.

The most obvious model for products you no longer sell is a `boolean` `discontinued` field, in addition to the `available` field. This works, but is harder to maintain because there’s no hint that these fields are related._ _Fortunately, Java has a way to group named constants.

Refactor related Boolean fields like these to a Java _enum type_:

<pre>enum ProductAvailability {
   AVAILABLE, OUT_OF_STOCK, DISCONTINUED, BANNED
}</pre>

Enum types are great because then you get more things to name. Also, the values are more readable than a `true` that means that the value is really some other value, such as `AVAILABLE`. Enum types also turn out to be more convenient than you might expect, which makes laziness a weak excuse for not refactoring.

The enum type can still have `boolean` convenience methods, which you might want if your original code had lots of conditional checks for available products. In fact, enum types go further than simply grouping constants, with fields, constructors and methods. A less obvious but more important benefit is that you now have a destination for other refactorings that move availability-related logic to the `ProductAvailability` type.

Serialising an enum type is more work, e.g., to JSON or a database. However, it’s less than you might expect. You’re probably already using a library that handles this nicely, and lets you choose how to serialize to a single value object representation.

Domain models often suffer from _primitive obsession_ - overuse of  Java primitive types. Refactoring numbers and dates to domain classes allows your code to become more expressive and readable, and the new types provide a better home for related code, such as validations and comparisons.

In the problem domain’s language, Boolean types are false, and enumerated types are the truth.

_This article by Peter Hilton first appeared in 
[97 Things Every Java Programmer Should Know](http://shop.oreilly.com/product/0636920048824.do)
under a [Creative Commons license](https://creativecommons.org/licenses/by/4.0/)._
