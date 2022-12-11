---
title: What’s missing from the Scala Style Guide
description: Input for team-specific code conventions
tags: Scala
layout: hh
image: scala-style-guide.jpg
---

![](scala-style-guide.jpg)

The [Scala Style Guide](http://docs.scala-lang.org/style/) is a useful set of
[coding conventions](http://en.wikipedia.org/wiki/Coding_conventions), like Sun’s old
[Code Conventions for the Java Programming Language](http://www.oracle.com/technetwork/java/javase/documentation/codeconvtoc-136057.html) (1999) or the newer
[Google Java Style](https://google.github.io/styleguide/javaguide.html). The Scala guide is more like Sun’s Java guide in that it provides basic guidelines but doesn’t specify everything, like Google’s Java guide.

Leaving things out is a good choice for a public style guide, because it lends focus to the important things and leaves development teams to make their own choices where there are tradeoffs. Java teams often write quite concise code conventions that start with the phrase ‘Follow _Code Conventions for the Java Programming_ unless specified here’, and only specify deviations or more specific guidelines than Sun’s guide.

I expect that Scala teams will write explicit code conventions to use, following the same model of using the Scala Style Guide as a starting point. This hasn’t yet happened in teams I’ve worked on, probably because very small teams of just a few developers can instead rely on code review and everyone’s memory. Larger teams would get more benefit.

The next step is to specify several different kinds of guidelines:

1. Stricter guidelines: ‘always’ or ‘never’ where the Scala Style Guide says ‘prefer’, ‘may’ or ‘avoid’.
2. A single choice where the Scala Style Guide gives multiple options.
3. Specific detailed guidelines that the Scala Style Guide doesn’t specify.

The following gives some examples, using the same sections as the Scala Style Guide, to get you started. Each section starts with a list of questions that you might choose to answer definitively in your own team’s code conventions.


## Indentation

Questions for your code conventions:

1. What is the maximum line length?
2. Is avoidable line-wrapping allowed?
3. Is it okay to vertically-align consecutive lines on anything other than the first non-whitespace character?
4. Is there a limit on the number of method arguments?

The Scala Style Guide (henceforth, ‘the guide’) doesn’t specify a maximum line length, which makes sense because it depends on various factors. Code conventions should probably pick one, depending on their development hardware and software, and how progressive the team is. The guide merely says that there is a maximum length and that:

> usually that length is anywhere above 80 characters

Line-wrapping is not terrible, but can make code less readable. The question for a development team is how bad you think this is and how far you will go to avoid it. The guide just says how - that:

> the preferred approach is to simply split the expression up into multiple expressions by assigning intermediate results to values

Vertical alignment of consecutive lines of code, and whether to allow it, is a trade-off between aesthetics and how many other lines of code have to change if a certain line changes length. Code conventions should specify which vertical alignment to allow, such as whether to align the equals signs for consecutive lines of variable assignments. The guide considers the particular case of indenting method arguments when there are enough of them to span multiple lines - in which column to vertically align the arguments:

> Great care should be taken to avoid these sorts of invocations well into the length of the line.

The idea of a maximum number of method arguments is incidental to the indentation section, and the guide mentions is as a passing comment:

> avoid any method which takes more than two or three parameters

This is one of many things where a team’s code conventions may choose to impose a maximum, to avoid things getting out of hand, one code change at a time. This could either be a hard limit, or a software limit with a convention that violations require a code comment that explains why sticking to the limit would be worse code.


## Naming Conventions

Questions for your code conventions:

1. Are symbolic (ASCII-art) method names acceptable?
1. Should type parameters _always_ have descriptive names (e.g. instead of `A` and `B`)?
1. Are type parameter name abbreviations (e.g. `K` instead of `Key`) acceptable?
1. Are abbreviations acceptable in names?

Symbolic method names (such as `+` instead of `plus`) are a good example of a Scala feature that represents a power that should be wielded with great care, or not at all. At the risk of arbitrarily subsetting the language, code conventions should decide which language features to use, and when. Scala gives you a big opportunity to write terrible code, here, and then the guide tells you not to unless you’re really sure:

> Avoid! … There are some very rare cases where it is acceptable to invent new symbolic method names. Odds are, your API is not one of those cases!

A Scala development team risks having programmers with different backgrounds: mathematicians (and Haskell programmers) who think that a reasonable length for names is one character, and Java programmers who are used to using (many) whole words. In the guide’s conventions, the Java programmers got the class names (whole words) and the Haskell programmers got the type parameters (‘a single upper-case letter… starting with `A`’). A particular development should either pick one approach, or follow the guide’s suggestion to use a name if you can think of one:

> If the type parameter has a more specific meaning, a descriptive name should be used

The same issue - single-letter names - applies to more than just type parameters. Code conventions should specify where to allow single-letter names or abbreviations. The adds another example in the ‘Special Note on Brevity’:

> Because of Scala’s roots in the functional languages, it is quite normal for local field names to be extremely brief
>
>     def add(a: Int, b: Int) = a + b

The goes on to say that this ‘is _good_ practice in Scala’.


## Types

Questions for your code conventions:

1. How much type inference should you use, instead of explicit type annotations?
1. When, if ever, should you annotate the types of fields and values?

Using type inference varies, according to how clear the types are from just reading the code, how much IDE support developers use, and how long team members have been using Scala. Code conventions should specify how much, and acknowledge that these things vary over time. The guide, meanwhile, acknowledges that ‘it depends’ and recommends more rather than less of it:

> Use type inference where possible, but put clarity first, and favour explicitness in public APIs.

A specific example of beginner type inference in Scala is to initially annotate local variable types, the way to have to in Java, but then do this less often as you become more used to Scala. Again, the guide recommends (much) less, not more:

> You should almost never annotate the type of a private field or a local variable


## Declarations

Questions for your code conventions:

1. What order should values and methods be declared in?
1. Should all (non-public) methods and functions have explicit type annotations?
1. Is procedure syntax acceptable?

The guide doesn’t make a recommendation for what order to put fields (or methods) in, so a code standard should. The guide merely says that:

> Fields should _precede_ methods in a scope.

Although the guide says that public methods should have an explicit return type, it leaves the choice open for local and private methods, which code conventions could reasonably disallow for readability:

> Local methods or private methods may omit their return type

Similarly, Scala allows a ‘procedure syntax’ that the guide suggests is unnecessary by rejecting it:

> Avoid the procedure syntax, as it tends to be confusing for very little gain in brevity.

This is another example of simplifying the language by disallowing specific language features. For a specific team and code base, code conventions can be strict about this kind of thing.


## Control Structures

Questions for your code conventions:

1. Should curly-braces be used with single-line if/else expressions?
1. Should `for` comprehensions be used where possible?

The guide is unusually strict about curly-braces in areas where different code conventions also have advantages, and would therefore be reasonable choices at the cost of likely inconsistency with other Scala teams. In the specific case of single-line if/else expressions, the guide adds a special case that code conventions could disallow:

> Omit braces if you have an else clause.

`for` comprehensions, on the other hand, are an example of a language feature that is technically syntactic sugar, and therefore optional. Some Scala developers seem to strongly prefer one over the other, and some use both depending on the code in question. Code conventions can add consistency here, and the guide prefers the `for` comprehensions:

> `for` comprehensions are preferred to chained calls to `map`, `flatMap`, and `filter`

There aren’t many examples of where Scala gives you a choice and the guide takes it away. Code conventions can do more of this and capture a more specific idiom, something that is especially useful for novice Scala developers who join an existing experienced team.


## ScalaDoc

Questions for your code conventions:

1. Is any ScalaDoc required, to start with, and to which level of detail?
2. Do you align ScalaDoc comment lines as shown in the Style Guide, or using the Java style - one line below and one column to the left?
3. When is formatting required, rather than plain text?

This is the section where the guide differs most from the majority of Scala code that I have ever read, which doesn’t generally contain much in the way of ScalaDoc. Although this could be about the difference between writing library code and application code, it is nevertheless striking that the guide _almost_ requires ScalaDoc for Scala code:

> It is important to provide documentation for all packages, classes, traits, methods, and other members. … Document all methods.

On the whole, ScalaDoc syntax and conventions are a logical progression from Javadoc, which makes one difference in the syntax stand out. Not every code convention will follow the guide on this one:

> Note, especially for those coming from Java, that the left-hand margin of asterisks falls under the _third_ column, not the second, as is customary in Java.

Formatting is another issue where the important distinction is between library and application code. Library code ScalaDoc is far more likely to be rendered as HTML than application code ScalaDoc, which may only ever be read by developers in the source code itself. A coding standard should specify a level of formatting, or none - plain text only. Meanwhile, the guide recommends:

> worry more about substance and writing style than in formatting

This, however, is clearly commentary on all kinds of writing - not just documentation comments in Scala code.
