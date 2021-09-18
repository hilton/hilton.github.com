---
title: No code but not no maintenance
description: Software maintenance with no-code tools
layout: hh
tags: NoCode
---

Not writing code doesn’t make all of the work go away.
Building things feels like fun and games until a year later when someone wants you to fix something, or make your solution work with some new scenario.
In this respect, no-code solutions resemble traditional software: maintenance hurts.

Unsurprisingly, no-code solutions only become maintainable with some effort.
After all, software maintenance costs, however you build the software.
The difference when using no-code tools comes from their different affordances for keeping your implementation consistent, understandable, and explained.

Either way, maintainability requires consistency, good naming, and documentation.
With luck, your tools will help reduce the discipline and effort these require.

## Consistency

A programmer writing code could have written every line slightly differently, in dozens of ways.
Coding style matters, and no two teams use the same style.
No-code tools tend to offer less flexibility in the style of whatever you build;
sadly, you can’t usually change the shape and colour of your boxes and arrows.
_No-code tools make fine-grained consistency easier than programming languages._

At larger scales, however, low-code tools offer fewer ways to structure large projects.
You typically can’t freely add groups and layers to what you build, in the same way that you can with programming languages.
While conventional coding often results in spaghetti code and lasagne architecture (many layers),
it also enables higher-level abstractions that tame the complexity.
_Programming languages make coarse-grained consistency easier than no-code tools._

## Naming

Default names, like _foo_ or _untitled_, belong to solutions that you don’t have to maintain.
You needn’t bother naming something that you’ll abandon by the end of the week.
Maintainable software, on the other hand, absolutely requires good naming.
Otherwise, you’ll end up looking at a calculation that someone else (or your past self) implemented that divides one number by another, and wondering what the numbers mean and whether they shouldn’t appear the other way around.

{:.big style="max-width:31em"}
> a ÷ b
> 
> b ÷ a
>
> 🤔

_Programming languages traditional show hostility to good naming._
They restrict which names you can use, and relying on tools for improving and changing names.
No-code tools fare better here, typically allowing spaces and significant capitalisation, so you can call something `Polish VAT`, say, instead of something less clear and readable, like `polishVat`.
More significantly, no-code tools more frequently natively support renaming, so you don’t have to think about whether improving a name or fixing and earlier typo will break something.

However, no-code tools don’t always let you name abstractions, such as a _Discount policy_, so you can refer to them by name.
Meanwhile, programming languages love named abstractions - functions, objects, classes, and the like.
_Programming languages typically let you name more things than no-code tools._

## Documentation

Ironically, despite widespread contempt among programmers for code comments that would let them document their code, all mainstream programming languages support them.
Moreover, many programming environments extend this basic support with tooling to automatically extract _documentation comments_ into basic external documents.
_Programming languages have consistent but mediocre integrated documentation support._

Perhaps because of programmer attitudes to code comments, no-code tools seem less certain about what kinds of documentation to encourage, if any.
Spreadsheets, for example, typically let you attach comments to individual cells, but not to whole sheets.
Meanwhile, few spreadsheet users add a _documentation sheet_ to explain the other sheets.
And yet, no-code tools have the opportunity to address documentation far more effectively than programming languages can, using richer content than the unstyled text that programmers reluctantly write.
