---
title: Get better at naming things
description: "From ‘97 Things Every Java Programmer Should Know’"
layout: hh
tags: programming DDD
image: 97-things-java.webp
---

<a class="cover" style="width:auto" href="http://shop.oreilly.com/product/0636920048824.do" title="97 Things Every Java Programmer Should Know">
<img src="97-things-java.webp" alt="book cover" style="width:150px"></a>

> ‘What is above all needed is to let the meaning choose the word, and not the other way around… the worst thing one can do with words is surrender to them.’<br>- George Orwell

Getting better at naming things improves the maintainability of the code you write more than anything else. There’s more to maintainable code than good naming, but naming things is famously hard, and usually neglected. Fortunately, programmers like a challenge.

First, avoid names that are meaningless (`foo`) or too abstract (`data`), duplicated (`data2`) or vague (`DataManager`), abbreviated or short (`dat`). Single letters (`d`) are worst of all. These names are ambiguous, which slows everyone down, because programmers spend more time reading code than writing code.

Next, adopt guidelines for better names - words with precise meanings that make the code say what it means.

Use up to four words for each name, and don’t use abbreviations (except for `id`, and those you adopt from the problem domain). One word is rarely enough; using more than four is clumsy and stops adding meaning. Java programmers use long class names, but often prefer short local variable names, even when they’re worse.

Learn and use problem domain terminology - domain-driven design’s _ubiquitous vocabulary_. This is often concise: in publishing, the correct term for text changes might be _revision_ or _edit_, depending on who makes the change. Instead of making words up, read the topic’s Wikipedia page, talk to people who work in that domain, and add the words they use to your glossary.

Replace plurals with collective nouns (e.g., rename `appointment_list` to `calendar`). More generally, enlarge your English vocabulary so you can make names shorter and more precise. This is harder if you’re a non-native English speaker, but everyone has to learn the domain jargon anyway.

Rename pairs of entities with relationship names (e.g., rename `company_person` to `employee`, `owner`, `shareholder`). When this is a field, you’re naming the relationship between the field’s type and the class it’s a member of. In general, it’s often worth extracting a new variable, method or class just so that you can explicitly name it.

Java helps you with good naming, because you name classes separately from objects. Don’t forget to actually name your types, instead of relying on primitive and JDK classes: instead of `String`, you should usually introduce a class with a more specific name, such as `CustomerName`. Otherwise, you need comments to document unacceptable strings, such as empty ones.

Don’t mix up class and object names: rename a date field called `dateCreated` to `created`, and a `boolean` field called `isValid` to `valid`, to avoid duplicate type noise. Give objects different names: instead of a `Customer` called `customer`, use a more specific name, such as `recipient` when sending a notification, or `reviewer` when posting a product review.

The first step in naming is to apply the basic naming conventions, such as using noun phrases for class names. The next step is good naming technique, using guidelines like these. But guidelines have limits. The JavaBeans specification taught a generation of Java programmers to break object encapsulation and use vague method names, like `setRating` when `rate` might be better, for example. You don’t need to name methods that aren’t imperative with verb phrases, as in builder APIs like `Customer.instance().rating(FIVE_STARS).active()`. In the end, naming mastery is choosing which rules to break.

_This article by Peter Hilton first appeared in 
[97 Things Every Java Programmer Should Know](http://shop.oreilly.com/product/0636920048824.do)
under a [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/)._
