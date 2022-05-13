---
title: Mac OS System 7 outlines vs HTML
description: Browser-native user-interface controls compared to Mac OS 31 years ago
layout: hh
tags: design
css: ".example {text-align:center; margin:1em 0} 
#outline {background:#eee;padding:1em;margin:1em 2em; width:32em}
#outline, #outline ul {list-style-type:none} #outline ul { margin:0; padding:0 0 0 26px } 
#outline li {margin-bottom:0}  .triangle {cursor:pointer }
.triangle::before { content:'▹'; display:inline-block; width:14px }
.triangle-down::before {content:'▿'} .nested {display:none} .open {display:block}"
image: tree.jpg
---

550+160=710

![](tree.jpg)

[Arno Smit](https://unsplash.com/photos/sKJ7zSylUao){:.photocredit}

*[HIG]: ‘Macintosh Human Interface Guidelines’ (Apple Computer, 1992)

This article continues a series on Mac OS’ 1991 
[System 7](https://en.wikipedia.org/wiki/System_7)
user interface, as described in Apple’s 1992 edition of the
[Macintosh Human Interface Guidelines](https://dl.acm.org/doi/book/10.5555/573097) (HIG).

1. [System 7 buttons](system-7-buttons)
2. [System 7 menus](system-7-menus)
3. [System 7 inputs ](system-7-inputs)
4. **System 7 outlines** (this article)

The last System 7 user-interface control in this series did not generally appear in Mac OS applications, but had an essential function for browsing files in Finder.

## Outline triangle

Outline triangles provide a way to expand and collapse sections of a hierarchy.
System 7 used them in Finder windows to expand folders in the list view,
shown here on the far left of the window content area:

{:.example}
![System 7 Finder window](system-7/finder.webp){: style="width:320px"}

HIG has little to say about outline triangles,
other than to mention that the triangle _rotates_ when clicked,
rather than one icon replacing another.
HIG only refers to using outline triangles in the Finder, specifically ‘next to folders’,
and neither describes correct usage or using them to reveal anything other than folder contents.

## HTML tree navigation

HTML forms have never had any kind of interactive outline, hierarchical browser, or tree control.
HTML does, however, let you represent a hierarchy with nested lists.
You can use this to render the list with outline triangles, and use JavaScript to add their behaviour.

This basic example features clickable list items, and the corresponding outine triangles.

<ul id="outline" class="open">
  <li><span class="triangle triangle-down">Apps</span>
    <ul class="nested open">
      <li><span class="triangle">BBEdit Lite 3.5.1</span></li>
      <li><span class="triangle triangle-down">MacDraw 1.9</span>
        <ul class="nested open">
          <li>Guided Tour Examples</li>
          <li>MacDraw</li>
          <li>Manual Example</li>
        </ul>
      </li>
      <li><span class="triangle">Mac Paint 2.0</span></li>
      <li><span class="triangle">Microsoft Excel 2.2a</span></li>
      <li><span class="triangle">Microsoft Word 4.0a</span></li>
      <li><span class="triangle">Microsoft Works 3.0</span></li>
    </ul>
  </li>
</ul>

<script type="text/javascript">
var toggler = document.getElementsByClassName("triangle");
var i;
for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    var nested = this.parentElement.querySelector(".nested");
    if (nested != null) {
      nested.classList.toggle("open")
    }
    this.classList.toggle("triangle-down");
  });
}
</script>

This kind of implementation, with a small amount of code or a third-party component, may look okay.
However, a basic implementation has several problems.

## Usability and accessibility

The basic HTML outline triangles above lack accessibility features found in both native web browser form controls, and the System 7 _original_.
Most strikingly, the HTML version does not support keyboard control.

In the modern macOS equivalent, you can use the keyboard’s arrow keys to navigate up and down the list of files and folders, and use the left and right arrows to close and open the selected folder, respectively.
Keyboard control also lets you select an item by typing its initial letters (not limited to just one letter).

## Cost

This kind of user-interface control has more behaviour than developers can easily identify; custom implementations therefore tend to suffer from bugs and limitations.
They don’t come cheap either, especially if you build your own instead of finding a reusable component and accepting its limitations.



_Screenshot from [PCE.js MacPlus emulator](https://jamesfriend.com.au/pce-js/)_
