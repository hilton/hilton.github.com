---
title: Elide content according to context
description: When truncating the end of text that doesn’t fit doesn’t work
layout: hh
tags: design
---

When your software user interface displays variable length text, you have to decide what to do when you get longer text than you expected.
You can:

1. expand the area the text uses, possibly moving other user-interface components
2. add a scroll bar, or other user-interface control for viewing the whole text
3. elide (truncate) the text, typically by showing an ellipsis after a fixed initial length.

Designers often choose the easy option - the third option, to truncate the text.
Even if you can somehow reveal the whole text, your ability to browse multiple options depends on the text before the ellipsis containing useful information.

## macOS Finder file name elision

On macOS, Finder window file name columns elide the _middle_ of the file name, if it doesn’t fit in the column.
Apple’s 1992 edition of the
[Macintosh Human Interface Guidelines](https://dl.acm.org/doi/book/10.5555/573097)
explains why:

> … it’s best to eliminate text in the middle of the name and insert ellipsis points there, preserving the beginning and ending of the item’s name.
> Users often add version numbers to the end of their document or device names, so if you cut off the end of the text item, they lose that context and must guess which of the several item names that begin the same is the desired one.

Something similar happens when people prefix calendar event titles with a status, such as _[BLOCKER]_, or prefix a title with a category, such as the department name in _Marketing - Q2 objectives_.
When a title includes more information than just the title, by adding a prefix, the longer text might not fit the user-interface design.

## macOS Finder date formatting

On macOS, Finder’s window date columns provide another more dynamic example.
The _Date Modified_ column varies the format according to the column width.

The _long_ format uses the full month name:

![16 June 2009 at 11:58](macos/finder-date-full.webp)

The _medium_ format abbreviates the month name:

![16 Jun 2009 at 11:58](macos/finder-date-medium.webp)

The _short_ format only uses numbers:

![2009-06-16, 11:58](macos/finder-date-short.webp)

Finally, the shortest format omits the time:

![2009-06-16](macos/finder-date-short-no-time.webp)

In this example, instead of specifying a date format as some kind of text pattern, such as `YYYY-MM-DD`, you change the formatted dates by 
[direct manipulation](https://en.wikipedia.org/wiki/Direct_manipulation_interface).
Meanwhile, the user’s system preferences define the specific formats:

![macOS system preferences with date format configurations ‘Short’, ‘Medium’, and ‘Long’](macos/preferences-date-formats.webp)

This defines the format for each length, with independent choices of date part order, date part format, and date part separator. Finder then chooses between these formats, depending on the available space.

With most software, however, you can count yourself lucky if you can choose a regional language that changes the date separators and date part order, let alone making these configurable.

## Context matters

In the case of addresses, should you prefer saving space by removing the city and country names from the end, or the street and house number from the start? It depends.
If you must abbreviate addresses, at least consider which part has most importance in the context.

Similarly, if your user interface allows someone to browse items by name, don’t truncate those names to make space for less important information, like Mural does when browsing boards.
When browsing my recently opened boards, only a third of them have titles short enough to appear in full.
Even in [Mural’s own documentation](https://support.mural.co/en/articles/5214836-home-is-your-personalized-view-to-kickstart-collaboration)
the first three example _Recently opened murals_ have names that don’t fit.

![Mural showing recently opened murals with big thumbnails and titles that don’t fit](mural-recently-opened.webp)

At least they changed _Retrospective - week 2_ to _Week 2 Retrospective_ to avoid two indistinguishable titles.
Meanwhile, the board thumbnail gets 14 times as much space, which looks pretty but results in a terrible user experience.
Especially when similar titles coincide with similar looking boards:
you can’t differentiate the retrospective boards by their thumbnails.
