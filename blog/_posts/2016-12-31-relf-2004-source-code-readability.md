---
title: Paper review: Achieving Software Quality through Source Code Readability
description: A computer science paper reviewed from an industry perspective.
layout: hh
tags: naming, readability, paper
---

This blog post reviews  _Achieving Software Quality through Source Code Readability_, which Phillip Relf presented at [Qualcon 2004](http://2014.qualcon.com.au), an Australian software quality conference.
I found my way to this paper via a reference in one of the papers Felienne Hermans and I reviewed for [What science says about naming](science-on-naming).

## Goals

Relf aimed to investigate whether software professionals would accept identifier naming guidelines that claim to improve source code readability.
He expected to show that:

1. software engineers would mostly accept the naming guidelines
2. expert software engineers would, more than novices, accept naming guidelines that require greater cognitive effort to check for, in source code.

The experimental data supported both expectations.

## Findings

The software engineers accepted the guidelines, in general, except for guideline 10 (see below).
In addition, the expert software engineers accepted the guidelines more strongly than the novices.

## Method

The author collected 21 guidelines from previously published research.
For each guideline, he constructed code examples in Ada and Java to illustrate compliance and non-compliance.

27 subjects rated each illustrated guideline on a scale of 1 (strong acceptance) to 5 (strong rejection).
Academic, Novice, Intermediate, Expert or Quality.

The paper does not address the thorny problem of defining either ‘software engineer’ or ‘expert’, which I doubt anyone has a good definition for.
However, the paper also does not explain how the subjects were selected and classified, in practice.

## Naming guidelines

The includes the following identifier naming guidelines, to which I’ve added a column with my own rating.
Unsurprisingly, because I like this kind of strictness, I strongly agree with half of the guidelines, and only reject four of them.

No | Guideline | Example violation | R
--- | --- | --- | ---
1 | Un-named Constant i.e., a numeric value other than -1, 0 or +1, used in an expression | `Radius * 3.141592` | 1
2 | Multiple Underscore Characters | `Apple__Count` | 1
3 | Outside Underscore Character | `_Apple_Count` | 1
4 | Numeric Digit(s) i.e., identifier duplication differentiated only by a digit (for multiple identifiers an array should be defined) | `Apple_Count_1`, `Apple_Count_2` | 1
5 | Naming Convention Anomaly i.e., a non-standard mixture of character case | `Apple_COUNT` | 1
6 | Identifier Encoding i.e., the use of Hungarian notation to attach the identifier data type to the identifier name | `iApple_Count` | 1
7 | Short Identifier Name i.e., an identifier name shorter than eight characters, excluding: `i`, `j`, `k`. `l`, `m`, `n`, `t`, `x`, `y` or `z` | `Count` | 4
8 | Long Identifier Name i.e., an identifier name longer than twenty characters | `Foreign_And_Domestic_Apple_Count` | 2
9 | Number of Words i.e., an identifier should consist of two, three or four words | `Count` | 3 
10 | Class/Type Qualification i.e., class names and type names should be qualified to identify their nature | `Fruit` (`FruitClass` and `Fruit_Tree` is considered more readable) | 5
11 | Abstract Words i.e., the construction of an identifier only using abstract words | `Do_It` | 1
12 | English Word(s) i.e., the use of ‘words’ not found in the English language | `App_Cnt` | 1
13 | Constant/Variable Qualification i.e., numeric range constants should be fully qualified | `Minimum_Apple_Count` (`Apple_Count_Minimum` is considered more readable) | 2
14 | Numeric Identifier Name i.e., the composition of an identifier from only numeric words and numeric values | `One_Hundred` | 1
15 | Singular Word(s) i.e., identifier names should be composed of words in the singular | `Apple_Counts` | 5
16 | Duplicate Identifier Names i.e., the appearance of two identical identifier names both in scope | `Apple_Count` Procedure … `Apple_Count` | 1
17 | Similar Identifier Names i.e., the appearance of two similar identifier names both in scope | `Apple_Count` Procedure … `Apple_Counts` | 3
18 | Unused Identifier i.e., an identifier declared by never used | N/A | 1
19 | Same Words i.e., two identifiers composed of the same words but used in a different order | `Apple_Count` … `Count_Apple` | 1
20 | Enumeration Identifier Definition Order i.e., enumeration constants declared in non-alphabetical order | `Type Colour_Type is (Colour_Red, Colour_Blue, 
Colour_Green)` | 2
21 | Enumeration Identifier Qualification i.e., the non-qualification of enumeration constants to identify their base type | `Type Colour_Type is (Blue, Green, Red)` | 5

To illustrate why someone might not accept all of these guidelines, the following paragraphs explain my rationale for those I do not ‘strongly accept’.

*7. Short Identifier Name*.
I don’t use this guideline, in practice, because I’m more concerned about avoiding abbreviations (guideline 12) than that names should not be too short.
In fact, I'd partly accept this guideline, were it not for it’s exception for single-letter names, which I consider the worst kind of abbreviation.

*8. Long Identifier Name*.
I only partly accept this guideline, because I prefer names to be as long as necessary.
However, I would also consider a name longer than twenty characters to be suspiciously long, and look for either a simpler name or extracting an intermediate declaration, which sometimes simplifies the thing with the long name.

*9. Number of Words*.
As with the previous guidelines, I don’t use this because I prefer to let the other guidelines determine length.
However, in his 2007 doctoral thesis, Relf reveals the neuroscience for limiting identifiers to four words, which suggests that may be a good idea.
I don’t know what the objection to one-word names might be, especially when the correct term in a bounded context’s vocabulary (a subject domain term) might be a single word, such as a ‘shipment’ in a supply chain context.

*10. Class/Type Qualification*.
I reject this guideline, as did the study participants. I would consider adding a class name `Class` suffix redundant.
Many languages use a capitalisation convention for type names, and a `class` keyword for declarations.
Furthermore, professional software developers tend to use tools (IDEs) that indicate which identifiers are types, or support navigation to the declaration.
I have never heard of anyone systematically adopting this guideline.

*13 | Constant/Variable Qualification*.
This guideline seems reasonable, but I probably prefer grammatical English word order sometimes.

*15. Singular Word*.
I reject this guideline because it doesn’t consider collection types, but it’s easily fixed.
Only use singular names for single values, and only use plural names for collections.

*17. Similar Identifier Names*.
I don’t know whether to accept this guideline, because I don’t experience this as a problem in practice, and don’t know how onerous I would find it.

*20. Enumeration Identifier Definition Order*.
I partly accept this guideline, which at least requires an order and thus prevents (apparently) random order.
However, some enumerations, such as weekdays, have their own non-alphabetical _natural_ order.
Fortunately, we follow guidelines blindly.

*21. Enumeration Identifier Qualification*.
Adding an enumeration type’s name to its constants’ name make as little sense as adding a class’ name to its instances’ names (or guideline come to that).
Fortunately, I’ve never seen this in practice.

## Industry relevance

This paper links written identifier naming guidelines to industrial practice by evaluating how strongly professional software engineers accept them.
Naming guidelines’ relevance lies in their contributions to more maintainable code, and therefore reduced software maintenance cost.
Naming, and source code readability in general, has a big impact on code maintainability.

This paper’s specific findings mean that you can expect to find numerous written guidelines that commercial software developers can use.
However, don’t expect to find all guidelines equally acceptable.
Furthermore, consider that novice developers may require more work explanation that more experienced developers.

## References

P. Relf, _Achieving Software Quality through Source Code Readability_ (2004)

## Further reading - from the paper’s references

Pearse, Troy; Oman, Paul (1995) _Maintainability Measurements on Industrial Source Code Maintenance Activities_. IEEE: Proceedings of the International Conference on Software Maintenance, 1995. October 1995, pp: 295-303

Spinellis, Diomidis (2003) _Reading Writing and Code_. ACM: Queue. October 2003, Vol: 1, No: 7, pp:84-89

Crutchfield, Richard; Workman, David A (1994) _Quality Guidelines = Designer 
Metrics_.
