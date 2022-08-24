---
title: Mac OS System 7 inputs vs HTML
description: Browser-native user-interface controls compared to Mac OS 31 years ago
layout: hh
tags: design
css: ".example {text-align:center; margin:1em 0} form {background:#eee;padding:1em;margin:1em 2em; width:20em} #volume{margin-top:0.5em}"
image: cables.jpg
---

![](cables.jpg)

[John Barkiple](https://unsplash.com/photos/l090uFWoPaI){:.photocredit}

*[HIG]: ‘Macintosh Human Interface Guidelines’ (Apple Computer, 1992)

{:.series}
1. [System 7 buttons](system-7-buttons)
2. [System 7 menus](system-7-menus)
3. System 7 inputs
4. [System 7 outlines](system-7-outlines)

This article continues a short series on Mac OS’ 1991 
[System 7](https://en.wikipedia.org/wiki/System_7)
user interface, as described in Apple’s 1992 edition of the
[Macintosh Human Interface Guidelines](https://dl.acm.org/doi/book/10.5555/573097) (HIG).

This instalment looks at inputs - controls for entering g data.
Let’s compare HTML inputs to what System 7 offered 31 years ago.

## Text entry field

The text entry field provides the simplest support for typed-in values.
System 7 offered a plain box for entering unstyled text:

{:.example}
![System 7 find dialogue box](system-7/dialogue-box-find.webp)

The HTML 2.0 text input works the same way:

<form>
<label for=find>Find:</label>
<input id=find>
</form>

So far, so unremarkable.

## Slider

The slider replaces numeric input when the range is small or exact values do not matter.
System 7’s slider included tick marks and labels:

{:.example}
![System 7 sound control panel](system-7/control-panel-sound.webp)

HIG warns not to use a scroll bar ‘when you really mean to use a slider’,
because that ‘confuses the meaning of the element and makes the interface inconsistent’.
These days, however, we probably have too few scrollbars rather than too many.

HTML added a _range_ input type that renders as a slider.
At the time of writing, not all browsers support vertical orientation, tick marks and labels (0-7 in this example).

<form>
<label for=volume>Speaker Volume:</label>
<br><input id=volume type=range min=0 max=7 list=tickmarks>
<datalist id=tickmarks>
<option value=0>0</option>
<option value=1>1</option>
<option value=2>2</option>
<option value=3>3</option>
<option value=4>4</option>
<option value=5>5</option>
<option value=6>6</option>
<option value=7>7</option>
</datalist>
</form>

HIG advises to ‘include meaningful labels that indicate to users the range and direction of the slider’.
Missing labels cause usability problems when users don’t find it obvious what _up_ or _right_ means.

## Little arrows

The adorably-named _little arrows_ add fine control to numeric text input fields, so you can make small adjustments with the mouse instead of entering a new value.
System 7 used a combined button for these arrows, as in this colour picker’s colour values:

{:.example}
![System 7 colour dialogue box](system-7/dialogue-box-colour.webp)

As with the slider, HIG warns about situations when the user won’t find the direction obvious, 
and recommends ‘some indication what the user can expect by using the up arrow and the down arrow’.

The HTML _number_ input works the same way, with the same rendering in modern browsers.

<form>
<label for=hue>Hue:</label>
<input id=hue type=number value=43690>
</form>

So far, HTML inputs more or less match what System 7 offered.
For inputs, at least, HTML offers more.

## Colour

HTML now has a _color_ input that renders a native colour picker in supported browsers:

<form>
<label for=highlight>Choose a highlight colour:</label>
<input id=highlight type=color value="#ccccff">
</form>

Colour selection in applications, as in
[GitLab’s label configuration](https://about.gitlab.com/releases/2014/08/22/gitlab-7-dot-2-released-with-better-labels/), doesn’t use browser-native colour pickers yet.

## Date and time

While most software doesn’t include colour pickers, it seems like all software includes at least one date picker.
System 7 didn’t include a date picker.
This control panel, for example, merely has three text inputs for the ‘date’ 3/4/3 at the bottom-right.

{:.example}
![System 7 general control panel](system-7/control-panel-general.webp)

HTML, however, now offers both date and time-of-day inputs, separate or combined:

<form>
<p><label for=date>Date:</label> <input id=date type=date value="2022-05-17"></p>
<p><label for=time>Time:</label> <input id=time type=time value="09:00"></p>
<p><label for=datetime>Date &amp; time:</label> <input id=datetime type="datetime-local" value="2022-05-17T09:00"></p>
</form>

I would struggle to justify building a custom date picker, now that modern browsers provide their own.
They appeared recently, though, so who can say whether developers will eventually adopt them instead of their own implementations.

## System 7 vs HTML

HTML scores 2½ out of three for the first three controls, losing half a point for slider labels’ poor browser support.
1½ bonus points for colour (less useful) and date/time inputs increase that to 4 out of 3.

_Screenshots from
[GUIdebook: Graphical User Interface gallery](https://guidebookgallery.org/screenshots/macos70)._
