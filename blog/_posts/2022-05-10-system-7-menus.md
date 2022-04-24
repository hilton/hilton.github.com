---
title: Mac OS System 7 menus vs HTML
description: How native web browser user-interface controls compare to Mac OS 31 years ago
layout: hh
tags: design
css: ".example {text-align:center; margin:1em 0} form {background:#eee;padding:1em;margin:1em 2em; width:32em}"
---

This article continues a short series on Mac OS’ 1991 
[System 7](https://en.wikipedia.org/wiki/System_7)
user interface, as described in Apple’s 1992 edition of the
[Macintosh Human Interface Guidelines](https://dl.acm.org/doi/book/10.5555/573097) (HIG).

1. [Mac OS System 7 buttons](system-7-buttons)
2. **Mac OS System 7 menus** (this article)

This instalment looks at menus - controls for selecting things from lists.
Let’s compare HTML menus to what System 7 offered 31 years ago.

## Pop-up menu

Pop-up menus (called _dropdown menus_ in Windows) provide an alternative to radio buttons, for single selection, that use less screen space.
System 7 uses a black shadow to make pop-up menus pop, as in this dialogue’s _Font for views_  menu:

{:.example}
![System 7 views control panel](system-7/control-panel-views.webp)

Unlike the flat [system 7 buttons](system-7-buttons), this design foreshadows three-dimensional effects for user-interface controls in later Mac OS user interfaces.

HIG recommends pop-up menus for 5-12 items, and ‘when the user doesn’t need to see all the choices at the same time’.
HIG adds:

> … use the same font for the closed state and the open state of a pop-up menu.
> If the menu looks different when it’s open, you destroy the illusion that it is one object that expands and contracts.

HTML 2.0 added the equivalent _select_ menu in 1995:

<form>
<label for=font>Font for views:</label>
<select id=font>
<option>Chicago</option>
<option>Courier</option>
<option selected>Geneva</option>
<option>Helvetica</option>
<option>Monaco</option>
<option>New York</option>
<option>Palatino</option>
<option>Symbol</option>
<option>Times</option>
</select>
</form>

Select menus often include many items: think [countries](country-lists) rather than months.
Despite this, it took years for HTML to offer text input with autocomplete.

## Type-in pop-up menu

Type-in pop-up menus (_combo boxes_ in Windows) allow the user to enter a value that the list does not already include.
System 7 implemented this with a pop-up next to a text input, as in the _Font for views_ font size:

{:.example}
![System 7 views control panel](system-7/control-panel-views.webp)

HIG characterises the type-in pop-up menu as a variant of the pop-up menu, rather than as a kind of text input:

> … all preset choices should be visible so that people can make choices with mouse actions.
> The type-in option should be an additional choice when appropriate, not a requirement.

Fifteen years after HTML 2.0, HTML5 _datalists_ add suggested values to text inputs:

<form>
<label for=size>Font for views:</label>
<input id=size type=text size=4 list=sizes>
<datalist id=sizes>
<option value=9></option>
<option value=10></option>
<option value=11></option>
<option value=12></option>
<option value=14></option>
<option value=18></option>
<option value=24></option>
</datalist>
</form>

The HTML version auto-completes values as the user types, which makes it useful for long lists.
However, after entering a value, such as _9_, the list no longer offers its pre-defined options for selection with the mouse, as HIG required for System 7.

Modern browsers barely support this variation, at the time of writing.
[Can I Use](https://caniuse.com/?search=datalist)
reports that Firefox and IE 11 still suffer from limitations.

## Scrolling list

A scrolling list supports selection from a large number of items.
System 7 used a list and a scroll bar, as for this dialogue’s _Alert sounds_ list:

{:.example}
![System 7 sound control panel](system-7/control-panel-sound.webp)

HIG notes that a scrolling list ‘can contain as many items as necessary’, rather than recommending limiting it to the pop-up menu’s dozen items.

HTML 2.0 renders a select menu as a scrolling list when you specify a vertical size:

<form>
<label for=sound>Alert sounds:</label>
<br><select id=sound size=5>
<option>Droplet</option>
<option>Indigo</option>
<option>Quack</option>
<option>Simple Beep</option>
<option>Sosumi</option>
<option>Wild Eep</option>
</select>
</form>

Ironically, while System 7 displayed the scroll bar even when not necessary, macOS now only displays the scroll bar after the user has already started scrolling.

## System 7 vs HTML

HTML only recently increased its score from two to three out of three points, for these three menu types.
Sadly, HTML-native type-in pop-up menu adoption does not look promising,
as web application developers now routinely implement their own versions.
Each with slightly different behaviour.
