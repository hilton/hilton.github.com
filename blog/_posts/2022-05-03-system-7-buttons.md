---
title: Mac OS System 7 buttons vs HTML
description: How native web browser user-interface controls compare to Mac OS 31 years ago
layout: hh
tags: design
css: ".example {text-align:center; margin:1em 0} form {background:#eee;padding:1em;margin:1em 2em; width:32em} .primary {color:white;background-color:#428bca;min-width:6em} input[type=number] {width:5.5em}"
---

Apple’s
[Macintosh Human Interface Guidelines](https://dl.acm.org/doi/book/10.5555/573097) 
(HIG, 1992) describe the Mac OS’ 1991
[System 7](https://en.wikipedia.org/wiki/System_7) user interface.
In the same year, Tim Berners-Lee first published 
[HTML Tags](http://info.cern.ch/hypertext/WWW/MarkUp/Tags.html),
the first public description of HTML.
Mac OS System 7 included standard user-interface controls,
HTML 2.0 added form controls in 1995, whose buttons remain nearly as good as System 7’s.
But not quite.

{:#button}
## Button

Buttons offer perhaps the simplest graphical user interface interaction, for performing or cancelling actions.

{:.example}
![Alert box](system-7/alert-box-note.webp)

System 7 featured both a plain button and an emphasised _default button_ -
_Continue_ and _Quit_, respectively in this example.
HIG also specifies that the button highlights when clicked.

<form>
<button>Continue</button> <button class=primary>Quit</button>
</form>

HTML form submit buttons lack a way to indicate a default button, leaving this to CSS styling.
Unforunately, styling a button, e.g. changing only the text and background colours as in this example, 
reverts its style to a bevelled CSS default that no longer matches operating system buttons.
This includes a different highlight style when you click the button.

In contemporary design systems, default buttons typically have a solid highlight colour, often blue.
Unfortunately, having to completely restyle the button leads to every design system using its own button styles.
Perhaps this also explains the modern trend to restyle every web-based form control,
as part of an application-specific design system, instead leaving users with their familiar operating system style.

{:#radio}
## Radio button

Radio buttons offer a single selection from several options,
[named after old car radios](https://www.jitbit.com/alexblog/242-the-history-of-a-radio-button/),
which had mutually-exclusive pop-out buttons.

{:.example}
![System 7 general control panel](system-7/control-panel-general.webp)

System 7 radio buttons only had a single representation, but could use horizontal or vertical layout for buttons and labels, as in this example.
HIG recommends radio buttons for ‘two to approximately seven items’,
and also notes that radio buttons should ‘never initiate an action’.

<form>
<input type=radio name=time value=1 checked> 12hr.
<input type=radio name=time value=2> 24hr.
</form>

HTML radio buttons have become less fashionable in recent years, 
possibly as more modern button types have taken their place.
Or maybe because designers prefer a menu’s more predictable layout.
This ignores radio buttons’ benefits of making the options more visible, and enabling single-click selection.

{:#checkbox}
## Checkbox

Checkboxes allow multiple selection, like boxes on a paper form that you check off 
(_tick_ in British English).

{:.example}
![System 7 views control panel](system-7/control-panel-views.webp)

System 7 checkboxes (e.g. _Always snap to grid_) could have icons as well as text labels.
HIG notes that designers may find it difficult to label checkbox:

> The label should imply two clearly opposite states. […]
> With radio buttons, you can use two labels clarifying the states.
> It’s sometimes tempting to use a checkbox because one item takes us less space than two.
> However, the resulting item may be ambiguous and thus difficult for your users to understand.

These difficulties apply equally to modern user interfaces.

<form>
<input type=checkbox value=1> Calculate folder sizes
<br><input type=checkbox value=2> Show disk info in header
</form>

HTML checkboxes match exactly, and more often retain their default appearance in modern design systems.
However, some design systems avoid checkboxes in favour of a single style for both radio buttons and checkboxes, indicating single vs multiple selection differently.
Meanwhile, macOS and web user interfaces now use an additional button types, such as
[switches](https://developer.apple.com/design/human-interface-guidelines/macos/buttons/switches/).

## The score so far

Despite making a good start with HTML 2.0 forms in 1995, HTML buttons have not caught up with Mac OS.
With no _default button_ semantics, HTML only scores 2½ out of 3, compared to System 7 buttons, radio buttons and checkboxes.
Perhaps HTML _menus_ score better against System 7.

_Screenshots from
[GUIdebook: Graphical User Interface gallery](https://guidebookgallery.org/screenshots/macos70)._
