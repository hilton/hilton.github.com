---
title: "Source code layout"
description: Why source code deserves layout as well as typography
layout: hh
tags: programming
css: "a img { border: 1px solid #66A6CB; padding: 0.5em; }"
image: code-newspaper-style-2x.png
---

_Written version of part of [Beautiful code: typography and visual programming](/presentations/beautiful-code) (2017-2018)_

Of all of the text we read in our daily lives, source code looks the worst, not because of bad coding style but because of bad typography.
Decades after we stopped using typewriters, only source usually [looks like it came out of a typewriter](ugly-code).
And it gets worse: code lacks more than just good typography.

## Two-dimensional layout

Today, software developers have, or should have, large wide screen monitors.
When these developers work on large legacy code bases, they spend lots of time reading source code files that have ‘too many lines’ - hundreds or thousands.
Source code files typically have a tall and narrow shape - a completely different shape to the monitor you read it on.

Modern monitors often have a 16:9 aspect ratio, while a 5000-line class with 120 characters per line has an aspect ration of about 1:8.

<img src="code-aspect-ratio.png" srcset="code-aspect-ratio-2x.png 2x" alt="Source code aspect ratio on a large monitor">

This leads to integrated development environments with bento box user interfaces that only use a small portion of the available space for source code, and only show a small proportion of the code in that space.
Programmers would get more value from multiple large monitors if more of each monitor showed source code.
Sadly, the way we present and read source code pays no attention to layout.

## Newspaper layout

One possible solution uses the horizontal space to flow the code into columns, and scroll sideways to view additional columns when the code still doesn’t fit on the screen.
This approach risks making navigation harder, so we could make further improvements:

1. a larger font size for method signatures
2. horizontal and vertical lines to separate methods and columns
3. top-level information in a ‘masthead’ at the top of the ‘page’
4. a nice big font for the class name.

Once you’ve got that far, you might as well go all the way, and use a classic broadsheet newspaper layout, with a coat of arms and drop caps.

<a href="code-newspaper-style.pdf"><img src="code-newspaper-style.png" srcset="code-newspaper-style-2x.png 2x" alt="Newspaper layout code example"></a>

If we actually did this, and used development environments that presented code in a newspaper layout, it would start a revolution in programming tooling.
However, we’d have only caught up with _seventeenth century_ print design.

<a href="https://www.thegazette.co.uk/London/issue/1/page/1"><img src="oxford-gazette-1666.png" srcset="oxford-gazette-1666-2x.png 2x" alt="First edition of The Oxford Gazette"></a>

Two-dimensional layout with columns, separator lines and a masthead already appeared in the layout of the very [first edition of _The Oxford Gazette_](https://www.thegazette.co.uk/London/issue/1/page/1), 
the first newspaper published in England, on 7 November 1665.
We need something more modern.

## A thought experiment

People practised layout and typography long before anyone invented computers and programming.
Even digital layout and typography date from the early 1980s - the start of the 
[desktop publishing revolution](https://en.wikipedia.org/wiki/Desktop_publishing#History).

To imagine what current approaches for layout and typography might do for source code, consider what the following might look like.

* Reference books and technical guides
* Thousands of pages (100,000 lines of code, corresponding to around one million 'words')
* Most of the content updated frequently
* Typical lifetime of five to ten years

Whatever that would look like, it certainly wouldn’t look like a novel - linear text in a single typeface and font size, structured only by paragraphs and chapters.
Just imagine!
