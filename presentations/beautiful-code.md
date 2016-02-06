---
title: Layout & typography for beautiful code
description: Reimagining how we read code
layout: speaking
---

The way we visually present code today would be recognisable to the first owner of the 1955 IBM typewriter that introduced the Courier typeface.
Innovations since then include little more than bigger monitors, syntax colouring and better monospace typefaces.
Meanwhile, layout and typography have progressed somewhat further in the 600+ years since Gutenberg’s printing press.
Unfortunately, source code missed out on the desktop publishing revolution thirty years ago that made layout and typography mainstream.

The goal of this talk is to reevaluate how we see code.
This talk uses step-by-step examples to show how fancy layout and typography can make code beautiful, and considers how this could improve programmers’ lives.
After all, we spend more time reading code that writing it, so we would benefit from making code easier to read.

Finally, we’ll see one typographic innovation that we will actually be able to use in the near future: functional programming font ligatures.

# Example

For example, the [Fast inverse square root](https://en.wikipedia.org/wiki/Fast_inverse_square_root) code would look like this in the average IDE.

![Fast inverse square root - standard formatting](beautiful-code-images/fast-invsqrt-wikipedia.png)

However, the following changes, presented one at a time, improve the visual design.

1. Modern typeface
2. Colour scheme more appropriate for game code
3. Header style for function name
4. Two-column layout
5. Pull-out code comments
6. Magic number highlight and abbreviate to ‘WTF’
7. Special characters, superscripts and subscripts
8. Tighten up magic number kerning

The result is much more cool, despite having the same content, and might even be easier to read:

![Fast inverse square root - improved layout and typography](beautiful-code-images/fast-invsqrt-after.png)

That’s just the start, and is isolated to a small snippet of code.
Other examples will take different directions, such as presenting multiple compilation units in a larger page layout.
