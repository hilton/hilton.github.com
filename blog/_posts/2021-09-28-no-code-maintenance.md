---
title: No code but not no maintenance
description: Software maintenance with no-code tools
layout: hh
tags: NoCode
image: maintenance.jpg
---

![Maintenance work](maintenance.jpg)

<a class="unsplash" href="https://unsplash.com/photos/B3j2ejPxe9c" rel="noopener noreferrer" title="Photo by Battlecreek Coffee Roasters"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Dan Loran</span></a>

Not writing code doesn’t make all of the work of automation go away.
You can have fun building things, but someone will eventually want you to fix something, or ask you to support some new scenario.
No-code solutions resemble traditional software, in this respect: maintenance hurts.

Software only becomes maintainable with some effort.
The difference with no-code tools comes from their different affordances for keeping your implementation consistent, understandable, and explained.

Maintainability requires consistency, good naming, and documentation.
With luck, your tools will help reduce the discipline and effort these require.

## Consistency

A programmer has a lot of freedom in how they write each line of code.
Coding style matters, and different teams use different styles.
No-code tools tend to offer less flexibility in the style of whatever you build, though.
For better or worse, you can’t usually change the shape and colour of your boxes and arrows.

_No-code tools make fine-grained consistency easier than programming languages._

At larger scales, however, low-code tools offer fewer ways to structure large projects.
You typically can’t freely add groups and layers to what you build, in the same way that you can with programming languages, so you can’t structure your solutions consistently.
While conventional coding often results in spaghetti code and lasagne architecture (many layers),
it also enables higher-level abstractions that tame (or at least bury) the complexity.

_Programming languages make coarse-grained consistency easier than no-code tools._

## Naming

Default names, like _untitled_, belong to experiments that you’ll abandon by the end of the week.
Maintainable software, however, requires good naming.
Otherwise, you’ll end up looking at some calculation, and wondering what the numbers mean and whether they appear in the right order.

{:.big style="max-width:19.75em"}
> a ÷ b
> 
> b ÷ a
>
> 🤔

_Programming languages resist good naming._

They restrict which names you can use, and rely on tools for renaming.
No-code tools do better, typically allowing spaces and significant capitalisation.
You can avoid something ambiguous like `polishVat`, and call it `Polish VAT`, say.
No-code tools tend to have better renaming support, so you can improve names and fix typos without risking breaking anything.

No-code tools have limited support for named abstractions, such as a _Discount policy_, that you can reference by name.
Meanwhile, programming languages love named abstractions - functions, objects, classes, etc.

_Programming languages typically let you name more things than no-code tools._

## Documentation

Despite programmers’ widespread contempt for code comments, for documenting code, all mainstream programming languages support them.
Many programming environments even extend this basic support with tooling to automatically extract _documentation comments_ into external documents.

_Programming languages have consistent but mediocre integrated documentation support._

Perhaps programmers’ own attitudes hold back no-code documentation capabilities.
Spreadsheets, for example, typically let you attach comments to individual cells, but not to whole sheets.
And few spreadsheet users compensate with a _documentation sheet_ to explain the other sheets.

No-code tools have the opportunity to address documentation far more effectively than programming languages can, using richer content than the unstyled text that programmers reluctantly write.
But consistency, naming and documentation only matter to people who’ve learned not to ignore maintenance.
Usually the hard way.
