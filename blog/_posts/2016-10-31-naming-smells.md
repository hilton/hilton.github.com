---
title: Naming smells
description: Code smells that indicate bad names so you can avoid using them
layout: hh
tags: naming programming
---

Sometimes, when you’re reading code that looks nice and clean but which doesn’t quite make sense, the problem lies in the naming.
Naming smells are [code smells](http://martinfowler.com/bliki/CodeSmell.html) that come from bad names.

A code smell indicates where you can improve your code, and often points to some deeper problem.
A particular code smell often has a corresponding refactoring that removes that particular smell, improving the code.
Naming smells appear in many forms, but all have the same refactoring: _Rename_.
So [how hard could it be?](http://hilton.org.uk/blog/why-naming-things-is-hard)

This article describes some common naming smells.
Most come from names that don’t carry as much meaning as they might, or suffer from ambiguity.
Beyond that, bad names lack precision or accuracy.

## Meaningless names

`foo` doesn’t mean anything at all - the coding equivalent of `untitled`.
Nor does `bar`.
In theory, `foo` indicates a placeholder in an example where the name has no significance - a _metasyntactic variable_.
In practice, `foo` typically indicates a deliberate refusal to name something, with the excuse that the code won’t last long.
[Tens of millions of occurrences on GitHub](https://github.com/search?q=foo&type=Code&utf8=✓) suggest programmers frequently succumb to this temptation.

The solution to meaningless names like `foo` lies in the realisation that people find concrete examples easier to understand than abstract examples.
Rename `foo` to a concrete real-world concept, such as `food` or `foot`.

<blockquote class="big solid-one" style="max-width:35em">
<p>What is the worst ever variable name?<br><em>data</em></p>
<p>What is the second-worst name?<br><em>data2</em></p>
<p>What is the third-worst name ever?<br><em>data_2</em></p>
</blockquote>

## Abstract names

`data` and `object` lack precision.
No doubt they do name data and objects, but you already knew that without the vague name.
You might as well use `thing`, which is equally abstract but at least has humour value in its uselessness.

Rename `data` to a more descriptive name that identifies what kind of data it is.


## Numeric suffixes

`employee2` is a more subtle case of a name that is too abstract.
`employee2` has more meaning than `data`, say, but the numeric suffix probably separates it from something already called `employee`.
When this happens, the reader knows is that there are two _employees_, but not how one differs from the other.

Rename both `employee` and `employee2` to names that communicate the difference between the two employees.
Perhaps you have a `managementEmployee` and a `recentlyHiredEmployee`.
If your programming language has types, both identifiers probably have the type `Employee`, so you can remove the `employee` prefix, leaving a `manager` and a `recentHire`.

Note that although code that includes `employee`, `employee2` and `employee_2` makes you laugh, you’ll stop seeing the funny side when you see it in legacy production code that your team has just inherited.
You’ll probably also stop being able to read [The Daily WTF](http://thedailywtf.com) at the same time.
Trust me on this.


## Abbreviated names

`acc` and `pos` look like abbreviated forms of words, which causes problems when you realise that you have to choose between words like `accumulator` and `accuracy`, or between `position` and `point of sale`.
Abbreviations tend to suffer from ambiguity since multiple words often share the same abbreviation.

`char`, `mod` and `auth` are more subtly ambiguous, because people may use them as standard abbreviations within specific contexts.
This stops working when you switch context: when `character` becomes `characteristic` and `modulus` becomes `model`.
Meanwhile, no-one ever knows whether `auth` is `authentication` or `authorisation` (or both).

Refactor abbreviations to the complete word, which is easy as long as you know which word that is.


## Short names

`a` and other single-letter names have more potential explanations than abbreviation, which makes them worse.
`a` might abbreviate a word, like `answer`, but it might also be used as a meaningless placeholder, either because it comes first in the alphabet or because `foo` was too long to type.

Single-letter names are _meta-ambiguous_ because they’re ambiguous about which kind of ambiguity you’re dealing with.
Refactor to a complete word, using the refactoring for either _meaningless names_ or _abbreviated names_.

Traditionally, at least in certain programming languages, coders use names like `i`, `j` and `k` for loop variables and would prefer to ignore these problems and carry on using single-letter names.
(If they’re particularly hardcore, they use `ii`, `jj` and `kk`, which are easier to search for in a text editor with no programming language support.)

{% highlight c %}
for (int i = 1; i < 42; ++i)
{% endhighlight %}

If you’re wondering whether it’s okay to make a _for-loop_ index exception, you should probably switch to a more modern programming language that iterates over collection types without using a loop index.
And before you whine that single-letter names are okay _because Haskell_, one letter is too short in functional programming as well.

{% highlight Scala %}
/** Modify the value viewed through the lens, returning a `C` on the side. */
def modp[C](f: B1 => (B2, C), a: A1): (A2, C) = {
  val (b, c) = f(get(a))
  (set(a, b), c)
}
{% endhighlight %}

This method from the [`Lens`](https://github.com/scalaz/scalaz/blob/series/7.2.x/core/src/main/scala/scalaz/Lens.scala
) class in [Scalaz](https://github.com/scalaz/scalaz) defies comprehension.
This is what [Scala](http://scala-lang.org/) code written with a [Haskell](https://en.wikipedia.org/wiki/Haskell_%28programming_language%29) accent looks like.
At least there’s a comment that tells you what `modp` is supposed to mean.

Haskell presumably uses single-letter names because the mathematicians who invented the language use single-letters in written mathematics.
What this Haskell-style code seems to ignore is that written mathematics includes paragraphs of text and precise symbolic definitions that explain what each name means.


## Symbolic names

`>=>` ends up being called the [fish operator](https://github.com/yannmoisan/hands-on-scalaz#main-symbols---thanks-to-reactormonk) by the Scalaz programmers who don’t know what it’s called.
This ASCII-art fish follows mathematics’ tradition of starting with single-letter names, running out of letters, subsequently exhausting the Greek and Hebrew alphabets, and then inventing new symbols in the vain hope that they’ll catch on.
Meanwhile, we have already reached peak Haskell, as noted in a [tweet](https://twitter.com/aisamanra/status/579040253169668096) by [@aisamanra](https://twitter.com/aisamanra):

![Peak Haskell naming](haskell-hieroglyphics.png)

## Vague words

`InvoiceManager` suffers from a vague noun.
Who knows what a _manager_ really does?
[Alan Green wrote](http://www.bright-green.com/blog/2003_02_25/naming_java_classes_without_a.html) about the ‘-Manager’ problem, and suggests some more meaningful alternatives, such as `bucket`, `supervisor`, `planner` and `builder`.

`getScore`, on the other hand, suffers from a vague verb.
Rename names with a `get` prefix to use a more specific verb, such as `calculateScore` or `estimateScore`.

The `get` prefix is largely a Java-programming anti-pattern that comes from the [JavaBean Specification](http://docs.oracle.com/javase/tutorial/javabeans/writing/properties.html)’s requirement that the accessor method for a `score` property must be called `getScore`.
Java developers habitually use the prefix for all kinds of methods, not just JavaBean properties.
A related anti-pattern results from the names `isScore` and `hasScore` for a Boolean `score` property: Boolean variables often have names like `isVictory`, with a redundant `is-` prefix.


## Vestigial Hungarian notation

`isVictory` and `dateCreated` have prefixes that indicate Boolean and date types, respectively.
This is a kind of vestigial Hungarian notation.
In naming, [Hungarian Notation](https://en.wikipedia.org/wiki/Hungarian_notation) takes the title of the most spectacular example of something that _seemed like a good idea at the time but isn’t anymore_, now that we have languages with types.

These names may be useful in stringly-typed languages, but you don’t need them in languages like Java and C#, where you can define your own types. Rename to drop the prefix - `victory` and `created`, and use the appropriate type.

`dateOfBirth` or `birthDate` are exceptions: widely-used domain terms in fields like human resources.
Although renaming to `born` would make sense from a coding point of view, the domain likely never uses the term.


## Multiple words

`appointment_list` typifies many names for collections of things that simply concatenate the collection type and the item type.
`company_person` names a relationship by using the names of two related entities.
This approach can lead to names that form a pidgin language of simple words, like `text_correction_by_editor`, as if identifiers were written in [Basic English](https://en.wikipedia.org/wiki/Basic_English).
We tend to write code in English, which has a rich vocabulary to use for naming.
This code smell is the observation that ‘there’s a word for that!’

Rename `appointment_list` to `calendar`.
Rename `company_person` to `employee`, `owner`, `shareholder` or some more specific relationship name.
In the case of a `text_correction_by_editor`, referring to the person who edits a manuscript, rename to just `edit`.


## Wrong names

`order` or `carrier`, depending on the context, can be the right name for the wrong thing, i.e. the wrong name.
In a supply chain context, for example, an _order_ might be related to a _shipment_ but isn’t the same thing.
Similarly, a _carrier_ probably isn’t the same kind of organisation as a _broker_.
Some names are just wrong.

Spotting and fixing wrong names can prove difficult because you need some other clue that the intended concept is something else.
Documentation benefits from a little repetition, which builds confidence in the intended meaning.
If you only have one clock, you don’t know if it has the right time.
If you have two clocks that differ, you don’t know which one is wrong.
Only three clocks give you more confidence in the correct time than one, assuming that it’s unlikely for more than one to be wrong.
Naming and documentation are like a pocket watch and a clock, in that respect.
