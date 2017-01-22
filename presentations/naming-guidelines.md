---
title: Naming guidelines for professional programmers
layout: paper
---

## Abstract

All kinds of programmers acknowledge the difficulty of naming things, but relatively few use explicit naming guidelines.
Various authors have published different kinds of identifier naming guidelines, but these guidelines do little to make naming easier, in practice.
Meanwhile, professional programmers follow diverse conventions and disagree about key aspects of naming, such as acceptable name lengths.

Although few teams write their own coding standards, let along naming guidelines, many teams use code review and pair programming to maintain code quality.
These teams can use third-party naming guidelines to inform these reviews, and improve their coding style.

This paper examines various sources of naming guidelines, in the context of the author’s twenty years’ experience as a professional programmer.
This paper then presents a consolidated set of naming guidelines that professional programmers can use in their work.


## Purpose of naming guidelines

Naming guidelines aim to make code more readable, and thus maintainable.
Two well-known quotes illuminate this purpose:

> ‘Programs are meant to be read by humans and only incidentally for computers to execute.’ - Donald Knuth
>
> ‘There are only two hard things in Computer Science: cache invalidation and naming things.’ - Phil Karlton

Long-term software maintenance presents a key difficulty to professional programmers.
Programmers don’t always try write code to be maintainable, and when they do they typically find it difficult to achieve.
Readability requires good naming, because bad names obscure intent.
Unfortunately, programmers struggle to write readable code because they struggle to avoid using bad names.

Naming guidelines aim to help programmers identify and avoid bad names, and to guide programmers towards good names.
Naming guidelines ultimately aim to help programmers write more maintainable code, and to reduce the cost and difficulty of software development.
Crucially, these benefits apply to all software development, not just long-term maintenance of legacy systems.


## Existing guidelines

In my experience, professional software developers don’t use explicit naming guidelines extensively.
The few written coding standards I’ve seen limit their guidelines to formatting and name length, but offer little to clarify the difference between good names and bad names.

Books for software developers sometimes include a section on naming.
_Code Complete_ \[[4](#references)\] includes a 30-page chapter on _The Power of Data Names_.
This includes fourteen guidelines for how to write better names, a discussion of various naming conventions, a list of eleven naming smells and a checklist that summarises these guidelines.
For this chapter alone, I recommend that every professional programmer own a copy of this book.

_Clean Code_ \[[5](#references)\] also has a whole chapter on _Meaningful Names_, which consists of eighteen guidelines.
Most of these guidelines directly address the hardest part of naming: semantics.
More recent programming books tend to devote fewer words to naming, perhaps because they have little to add.

Computer science research sometimes includes naming guidelines.
Papers by Relf \[[2](#references)\] and Arnaodova et al \[[3](#references)\] include collections of naming guidelines, which they evaluate in different ways.
A thorough literature review would no doubt turn up more naming guidelines, but professional programmers rarely have access to published papers, which makes them less directly useful in the software industry than books.


## Relative importance of different guidelines

Professional software developers benefit from some kinds of guidelines more than others.
Guidelines like ‘Variable names should be short yet meaningful’ \[[6](#references)\] sound reasonable, but offer little practical help, either when choosing a name when coding or when evaluating a name during code review.

Some academic studies have compared the relative readability of different formatting conventions, such as camel-case (caplitalised words) and snake-case (words separated by underscores).
In practice, programmers follow the name formatting convention that a programming language community adopts, and therefore have little use for this research.
In theory, programming language designers could use this research when setting these conventions.

Fortunately, some research has directly addressed different guidelines’ usefulness.
Relf \[[8](#references)\], for example, concludes that:

> The identifier-naming style guidelines that proved to be the most useful to programmers required that
> identifier names should be composed of from two to four Natural language words or project accepted acronyms;
> should not be composed only of abstract words;
> should not contain plural words;
> and should conform to the project naming conventions.

Professional programmers can apply guidelines like these without reading all 293 pages of the corresponding doctoral thesis.


## Guideline styles

Naming guidelines’ authors don’t all phrase them the same way.
Some authors write prescriptive instructions, e.g. _Use intention-revealing names_ \[[5](#references)\], while some phrase them as code smells or naming problems, e.g. _Meaningless names_ \[[1](#references)\].
Written naming guidelines include one or more of the following.

* Prescriptive instruction
* Naming smell name
* Correcting refactoring name
* Example guideline violation
* Example name that follows the guideline
* Rationale

Naming smells are ‘code smells’ that come from bad names.
A code smell indicates where you can improve your code, and often points to some deeper problem.
A particular code smell often has a corresponding refactoring that removes that particular smell, improving the code.
Naming smells appear in many forms, but all have the same refactoring: _Rename_.

Needless to say, programmers find consistently-written guidelines easier to understand and apply.
As well as consistency, multiple explanations help programmers apply a guideline in different scenarios.
Naming smells help programmers identify violations during code review, while prescriptive instructions are easier to follow while writing code.
Examples serve to explain both smells and instructions, whose abstract nature can make them hard to understand.

The remainder of this paper presents and discusses specific guidelines.

_TODO Consider formatting the guidelines as tables_


## Syntax guidelines

Syntax guidelines address how identifiers are constructed from words and formatted.
These guidelines are not concerned with which words names use, except for the guideline to use words in the first place.

### Use naming conventions

* Guideline: Follow the programming language’s conventions for names
* Smell: Random capitalisation, Non-standard word separation
* Refactoring: Apply standard case
* Example violations: `appleCOUNT`, `apple_count` (when camel-case is standard)
* Ref: \[[2](#references)\]

### Replace numeric suffixes

* Guideline: don’t add numbers to multiple identifiers with the same base name
* Smell: Numeric suffix
* Refactoring: replace the numbers with words that describe the difference
* Example violations: `employee2`
* Ref: \[[1](#references)\], \[[2](#references)\]

### Use dictionary words

* Guideline: only use dictionary words and abbreviations
* Exceptions: `id`, documented domain-specific language/abbreviations
* Smell: Abbreviated name, Unpronounceable name
* Refactoring: spell words out in full and define abbreviations for the bounded context
* Example violations: `acc`, `pos`, `char`, `mod`, `auth`, `appCnt`
* Ref: \[[1](#references)\], \[[5](#references)\]

### Expand single-letter names

* Guideline: don’t make exceptions to using dictionary words for single-letter names; use searchable names
* Smell: Short name
* Refactoring: [use dictionary words](#use-dictionary-words)
* Example violations: `i`, `j`, `k`, `l`, `m`, `n`, `t`, `x`, `y`, `z`
* Ref: \[[1](#references)\], \[[2](#references)\], \[[5](#references)\]

### Articulate symbolic names

* Guideline: don’t use ASCII art symbols instead of words
* Exceptions: documented domain-specific symbols, e.g. `+` in arithmetic
* Smell: Symbolic name
* Refactoring: [use dictionary words](#use-dictionary-words)
* Example violations: `>=>`, `<*>`
* Ref: \[[1](#references)\]

### Name constant value

* Guideline: define a named constant for a literal value
* Smell: magic number, magic Boolean or other literal value
* Refactoring: Extract constant
* Example violations: `radius * 3.142591`
* Ref: \[[2](#references)\]

### Only use one underscore at a time

* Guideline: Don’t use more than one consecutive underscore
* Smell: Consecutive underscores
* Refactoring: Replace with a single underscore
* Example violations: `APPLE__COUNT`
* Ref: \[[2](#references)\]

### Only use underscores between words

* Guideline: Don’t use underscores and prefixes or suffixes.
* Smell: Leading/trailing underscore
* Refactoring: Trim underscores
* Example violations: `_APPLE_COUNT`, `APPLE_COUNT_`
* Ref: \[[2](#references)\]

### Limit name character length

* Guideline: Keep name length within a twenty character maximum
* Smell: Long name
* Refactoring: Simplify name, Extract variable
* Example violations: `ForeignDomesticAppleCount`
* Ref: \[[2](#references)\]

### Limit name word length

* Guideline: Keep name length within a four word maximum, and avoid gratuitous context
* Smell: Long name
* Refactoring: Simplify name, Extract variable
* Example violations: `NewRedAppleSizeType`, `MyAppSizeType`
* Ref: \[[2](#references)\], \[[5](#references)\]

### Qualify values with suffixes

* Guideline: describe constant and variable values, such as numeric ranges with a suffix
* Smell: Missing/preceding qualification
* Refactoring: Move the qualification to the end
* Example violations: `MINIMUM_APPLE_COUNT` (replace with `APPLE_COUNT_MINIMUM`)
* Ref: \[[2](#references)\]

### Don’t name numbers

* Guideline: Don’t construct names from numbers’ names.
* Smell: Number names
* Refactoring: [Describe meaning](#describe-meaning)
* Example violations: `ONE_HUNDRED`
* Ref: \[[2](#references)\]

### Make names unique

* Guideline: Don’t overwrite a name with a duplicate name in the same scope
* Smell: Duplicate name
* Refactoring: Use a less specific name in nested scopes
* Ref: \[[2](#references)\]


## Vocabulary guidelines

Vocabulary guidelines address word choice, with the rationale that using the _right_ word matters.

### Describe meaning

* Guideline: Use a descriptive name whose meaning describes a recognisable concept, with enough context.
* Smell: Meaningless name, Meaning depends on context
* Refactoring: describe what the identifier represents
* Example violations: `foo`, `blah`
* Ref: \[[1](#references)\], \[[5](#references)\]

### Be precise

* Guideline: Identify a specific kind of information and its purpose.
* Smell: Abstract name
* Refactoring: be more specific
* Example violations: `data`, `object`
* Ref: \[[1](#references)\]

### Choose concrete words

* Guideline: use words that have a single clear meaning
* Smell: Vague word
* Refactoring: replace with more specific words
* Example violations: `Manager` suffix, `get` prefix, `doIt`
* Ref: \[[1](#references)\], \[[2](#references)\]

### Use standard language

* Guideline: avoid being cute or funny when it results in a name that requires shared culture or more effort to understand
* Smell: Colloquialism, Humour
* Refactoring:
* Example violations: `whack` instead of kill
* Ref: \[[5](#references)\]

### Use a large vocabulary

* Guideline: use a richer single word instead of multiple words that describe a well-known concept
* Smell: Multiple words, Pidgin language
* Refactoring: replace multiple words that describe a concept when ‘there’s a word for that’
* Example violations: `CompanyPerson` (replace with `Employee`)
* Ref: \[[1](#references)\]

### Use domain terms

* Guideline: Use the correct term in the problem domain’s ubiquitous language, and only one term for each concept
* Smell: Wrong name
* Refactoring: consistently use the correct domain language term
* Example violations: `Order` when you mean `Shipment`, in a supply-chain context
* Ref: \[[1](#references)\], \[[5](#references)\]

### Make names differ by more than one or two letters

* Guideline: Don’t use a name that barely differs from an existing name
* Smell: Similar name
* Refactoring: Make the difference more explicit
* Example violations: `appleCount` vs `appleCounts`
* Ref: \[[2](#references)\] \[[5](#references)\]

### Make names differ by more than word order

* Guideline: Don’t use a name that only differs from an existing name in word order
* Smell: Similar name
* Refactoring: Make the difference more explicit
* Example violations: `appleCount` vs `countApple`
* Ref: \[[2](#references)\]


## Data type guidelines

Data type guidelines are vocabulary guidelines that address data type names in identifier names.
Some of these guidelines only apply to languages whose type system allows code to explicitly identify data types, separately from identifier names.

### Omit type information

* Guideline: don’t use prefixes or suffixes that encode the data type
* Smell: Vestigial Hungarian notation
* Refactoring: remove words that duplicate the data type
* Example violations: `isValid`, `dateCreated`, `iAppleCount`
* Ref: \[[1](#references)\], \[[2](#references)\], \[[5](#references)\]

### Use singular names for values

* Guideline: Don’t pluralise names for single values.
* Smell: Plural name
* Refactoring: Use the singular
* Example violations: `appleCounts`
* Ref: \[[2](#references)\], [3]

### Use plural names for collections

* Guideline: Pluralise names for collection values, such as lists.
* Smell: Singular name
* Refactoring: Use the plural
* Example violations: `remainingApple` for a set of apples
* Ref: \[[3](#references)\]

### Prefer collective nouns for collections

* Guideline: If a collection’s type has a collective noun, in the name’s context, use it instead of a plural.
* Smell: Plural name
* Refactoring: Use the collective noun
* Example violations: `appointments` (replace with `calendar`), `pickedApples` (replace with `harvest`)
* Ref: \[[1](#references)\]


## Class name guidelines

Class name guidelines specifically address names for classes in object-oriented programming languages.

### Use a noun-phrase name

* Guideline: make the class name a noun phrase
* Smell: Missing noun
* Refactoring: Add the missing noun, remembering to [Choose concrete words](#choose-concrete-words)
* Example violations: `Calculate`
* Ref: \[[5](#references)\], \[[6](#references)\]


### Use a name that allows all possible states

* Guideline: Don’t use class names that assume a particular state, and are inconsistent as the return type of a method that changes that state.
* Smell: Method name and return type are opposite
* Refactoring: Make class name less specific
* Example violations: `disable` method that returns a `ControlEnableState` (rename class to `ControlState`)
* Ref: \[[3](#references)\]

### Choose a name consistent with possible values

* Guideline: Don’t use a name that appears to contradict certain possible values.
* Smell: Attribute name and type are opposite
* Refactoring: Make class name inclusive
* Example violations: `start` field has type `MAssociationEnd` (rename class to `MAssociationExtremity`)
* Ref: \[[3](#references)\]


## Method name guidelines

Method name guidelines specifically address names for methods in object-oriented programming languages.
Several of these guidelines apply to Java in particular, due to the bad habits the JavaBeans Specification  \[[6](#references)\] encouraged.

### Use a verb-phrase name

* Guideline: make the method name an active verb phrase, except for accessor methods and some conversions
* Smell: Missing verb
* Refactoring: Add the missing verb, remembering to [Choose concrete words](#choose-concrete-words)
* Example violations: `calculation()`
* Ref: \[[5](#references)\], \[[6](#references)\]


### Don’t use `get`, `is` or `has` prefixes for methods with side-effects

* Guideline: Use a verb phrase that suggests the side-effect, if there is one.
* Smell: ‘get’ more than an accessor
* Refactoring: Replace ‘get’ with another verb
* Example violations: `getImageData` method that constructs a new object
* Ref: \[[3](#references)\]

### Only use `get`, `is` and `has` prefixes for methods that only peform field access

* Guideline: Only use the conventional accessor method name prefixes for accessor methods that directly return a field value.
* Smell: ‘get’ more than an accessor
* Refactoring: Replace ‘get’ with another verb
* Example violations: `getScore` that performs calculation or accesses external data

### Only use `get` prefix for field accessors that return a value

* Guideline: Don’t use the `get` field accessor method name prefix for methods that don’t return a value.
* Smell: ‘get’ method returns `void`
* Refactoring: Replace ‘get’ with a verb that describes the side-effect
* Example violations: `getMethodBodies` populates the method bodies but doesn’t return them
* Ref: \[[3](#references)\]

### Only use `is` and `has` prefixes for Boolean field accessors

* Guideline: Don’t use the conventionals Boolean accessor method name prefixes for methods that don’t return a Boolean value.
* Smell: ‘is’ returns more than a Boolean
* Refactoring: Replace prefix with `get`
* Example violations: `isValid` returns an `int` value
* Ref: \[[3](#references)\]

### Only use `set` prefix for field accessors that don’t return a value

* Guideline: Don’t use the `set` field accessor method name prefix for methods that return a value.
* Smell: ‘set’ method returns
* Refactoring: Replace ‘set’ with another verb, or remote it in a fluent API
* Example violations: `setBreadth` creates and returns a new object, or updates and returns `this` (fluent API)
* Ref: \[[3](#references)\]

### Only use validation verbs for methods that provide the result

* Guideline: Only use verbs like `validate`, `check` or `ensure` to name methods that either result or throw an exception when validation fails.
* Smell: Validation method does not confirm
* Refactoring: Return result
* Example violations: `validateSnaps` and `checkCurrentState` that return `void`.
* Ref: \[[3](#references)\]

### Only use transformation verbs for methods that return a transformed value

* Guideline: Only use verbs that suggest transformation, like `convert`, for methods that return the result.
* Smell: Transform method does not return
* Refactoring: Return result, or change the verb to indicate what the method transforms
* Example violations:
* Ref: \[[3](#references)\]


_TODO: extract more guidelines from Code Complete_


## Rejected guidelines

To illustrate disagreement among programmers about which guidelines to use, the following paragraphs quote naming guidelines together with my rationale for why I do not ‘strongly accept’ them.

### Short Identifier Name

> \[avoid\] an identifier name shorter than eight characters, excluding: `i`, `j`, `k`. `l`, `m`, `n`, `t`, `x`, `y` or `z` \[[2](#references)\]

> Variable names should be short yet meaningful. The choice of a variable name should be mnemonic- that is, designed to indicate to the casual observer the intent of its use. One-character variable names should be avoided except for temporary "throwaway" variables. Common names for temporary variables are i, j, k, m, and n for integers; c, d, and e for characters. \[[6](#references)\]

I don’t use this guideline, in practice, because I’m more concerned about avoiding abbreviations (guideline 12) than that names should not be too short.
In fact, I’d partly accept these guideline, were it not for their exceptions for single-letter names, which I consider the worst kind of abbreviation.

### Long Identifier Name

> \[avoid\] an identifier name longer than twenty characters \[[2](#references)\]

I only partly accept this guideline, because I prefer names to be as long as necessary.
However, I would also consider a name longer than twenty characters to be suspiciously long, and look for either a simpler name or extracting an intermediate declaration, which sometimes simplifies the thing with the long name.

### Number of Words

> an identifier should consist of two, three or four words \[[2](#references)\]

As with the previous guidelines, I don’t use this because I prefer to let the other guidelines determine length.
However, in his 2007 doctoral thesis, Relf reveals the neuroscience for limiting identifiers to four words, which suggests that may be a good idea.
I don’t know what the objection to one-word names might be, especially when the correct term in a bounded context’s vocabulary (a subject domain term) might be a single word, such as a ‘shipment’ in a supply chain context.

### Class/Type Qualification

> class names and type names should be qualified to identify their nature \[…\] e.g. `Fruit` (`FruitClass` and `Fruit_Tree` are considered more readable) \[[2](#references)\]

I reject this guideline, as did the study participants (in \[[2](#references)\]).
I would consider adding a class name `Class` suffix redundant.
Many languages use a capitalisation convention for type names, and a `class` keyword for declarations.
Furthermore, professional software developers tend to use tools (IDEs) that indicate which identifiers are types, or support navigation to the declaration.
I have never heard of anyone systematically adopting this guideline.

### Constant/Variable Qualification

> numeric range constants should be fully qualified \[…\] e.g. `Minimum_Apple_Count` (`Apple_Count_Minimum` is considered more readable) \[[2](#references)\]

This guideline seems reasonable, but I probably prefer grammatical English word order sometimes.

### Singular Word

> identifier names should be composed of words in the singular \[[2](#references)\]

I reject this guideline because it doesn’t consider collection types, but it’s easily fixed.
Only use singular names for single values, and only use plural names for collections.

### Similar Identifier Names

> \[avoid\] the appearance of two similar identifier names both in scope \[[2](#references)\]

I don’t know whether to accept this guideline, because I don’t experience this as a problem in practice, and don’t know how onerous I would find it.

### Enumeration Identifier Definition Order

> \[avoid\] the appearance of two similar identifier names both in scope \[[2](#references)\]

I partly accept this guideline, which at least requires an order and thus prevents (apparently) random order.
However, some enumerations, such as weekdays, have their own non-alphabetical _natural_ order.
Fortunately, we follow guidelines blindly.

### Enumeration Identifier Qualification

> \[avoid\] enumeration constants declared in non-alphabetical order \[[2](#references)\]

Adding an enumeration type’s name to its constants’ name make as little sense as adding a class’ name to its instances’ names (or guideline come to that).
Fortunately, I’ve never seen this in practice.



## Further research

Naming guidelines remain underused in the software industry.
In my experience, professional software developers do not always agree on which guidelines to use, or even that they are worthwhile.
Our industry would benefit from more rigorous answers to the following questions.

1. Which naming guidelines apply universally to all kinds of code?
1. Which naming guidelines have the most positive impact on code readability and maintainability?
1. Can naming guidelines be usefully reduced to a short checklist for use in code review?
1. How should software developers _write_ naming guidelines?
1. How should software developers _use_ naming guidelines?
1. Is it possible to measure identifier name quality or naming guideline effectiveness?
1. What can we learn from a cost-benefit analysis of naming guidelines?
1. How do naming and naming guidelines relate to software documentation?

Needless to say, I hope that software engineering researchers address these questions in the future.


## References

1. Peter Hilton - [Naming smells](http://hilton.org.uk/blog/naming-smells) (2016)
2. Phillip Relf - _Achieving Software Quality through Source Code Readability_ (2004)
3. Arnaodova et al - [Linguistic Antipatterns: What They Are and How Developers Perceive Them](http://www.veneraarnaoudova.com/wp-content/uploads/2014/10/2014-EMSE-Arnaodova-et-al-Perception-LAs.pdf) (2015)
4. Steve McConnell - _Code Complete_, Microsoft Press (1993)
5. Robert C. Martin - _Clean Code_, Prentice Hall (2009)
6. Sun Microsystems - [Code Conventions for the Java TM Programming Language](http://www.oracle.com/technetwork/java/codeconvtoc-136057.html) (20 April 1999)
7. Sun Microsystems - [JavaBeans](http://www.oracle.com/technetwork/java/javase/documentation/spec-136004.html) - JavaBeans™ API specification version 1.01 (1997)
8. Phillip Relf - _Source Code Readability Improvement Using Heuristic-Based Dynamic Error Reporting During Editing_ - doctoral thesis (2007)
