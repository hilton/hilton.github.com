---
title: Use high contrast colours for text
description: The fashionable design horror of grey text
layout: hh
tags: design
css: "article p:has(img) { margin:15px 0; } body.writing article img { border: 1px solid #ddd; max-width:calc(100% - 3px) }"
---

User-interface design follows fashion as much as any other technical field,
such as product management or programming.
Visual trends like [skeuomorphism](https://en.wikipedia.org/wiki/Skeuomorph) and
[flat design](https://en.wikipedia.org/wiki/Flat_design) come and go,
and every change updates and refreshes old designs.
But some design trends also degrade user experience.

## Grey body text

For the last decade or more, fashionable web design has rejected black text on a white background,
in favour of grey text.
For example, this blog post paragraph 
([source](https://www.cycle.app/blog/stop-counting-feature-requests))
uses dark grey (`#5b5a59`) for the main body text, on a white background:

![A paragraph in dark grey #5b5a59 text on a white background](contrast/cycle-blog.webp)

Making the text lighter than black de-emphasises the text on the page, perhaps in favour of other elements.
While this text appears reasonably legible, the rationale for this aesthetic remains obscure.

Designers sometimes claim that _too much_ contrast causes eye strain, despite an apparent lack of evidence.
Meanwhile, web accessibility standards recommend the opposite, and give more precise guidance.

## Legible text contrast

The [W3C Web Accessibility Initiative](https://www.w3.org/WAI/)’s
[Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/#wcag2) (WCAG) include
[Guideline 1.4 Distinguishable](https://www.w3.org/TR/WCAG21/#distinguishable), 
which includes two success criteria for text contrast:

1. [Contrast (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum) - 
   a contrast ratio of at least 4.5:1 (for text smaller than 18 pt), or 3:1 for large text (at least 18 pt, or 14 pt bold)
2. [Contrast (Enhanced) (Level AAA)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced) - 
   a contrast ratio of at least 7:1 (for text smaller than 18 pt), or 4.5:1 for large text (at least 18 pt, or 14 pt bold)

It doesn’t matter if you don’t have an intuition for how much contrast that is,
because you can use an online or tool-based [contrast checker](https://contrastchecker.com).

For example, in the gray text example above, the Cycle blog paragraph uses `#5b5a59` colour text on a white background: **contrast ratio 6.9:1**.
This meets the WCAG AA _minimum contrast_ criterion, but narrowly fails the AAA _enhanced contrast_ criterion.

However, some web sites fail even to use minimum body text contrast, such as the following
([source](https://www.planhat.com/careers/)):

![A paragraph in light grey #5b5a59 text on a white background](contrast/planhat-careers.webp)

This paragraph uses `#959FB4` light grey text on a white background: **contrast ratio 2.7**.

## Tiny grey hint text

Another grey text design idiom uses _tiny grey text_ for hints and help text.
This example from [Linear](linear-projects) uses both gray paragraph text (as above) on the left, 
and tiny grey text on the right, to describe milestones, documents and links.

![Tiny grey #90959D hint text](contrast/linear-project.webp)

The hint text uses `#90959D` grey on a white background, with **contrast ratio 3:1**.
That reaches only the minimum (AA) contrast for large text, failing to achieve usable contrast for small text.

This common design treats hint text like some kind of deliberately unusable disabled user interface element.
This has less of a negative impact than the same low contrast for body text, because you only have to read it once,
and may appreciate its subtlety when you no longer need it.
However, the tiny size exaggerates its illegibility, evening things out.

## Dark mode hint text

Tiny grey hint text also makes some dark mode designs hard to use.
In this [Duolingo](https://en.wikipedia.org/wiki/Duolingo) example,
a less-familiar alphabet make things worse (and looks smaller on an iPhone).

![Tiny grey #52656C hint text on a #141F25 dark grey background](contrast/duolingo.webp)

At the start of the phrase’s Japanese translation, the むらさきいろ hint gives the pronunciation (_murasakiiro_) of 紫色 - Japanese for _purple_.
This hint text uses `#52656C` light grey on a `#141F25` dark grey background, with **contrast ratio 2.7**.

## The worst text contrast

Recently, I only found one worse example than the above, when searching the
[Brave browser](https://brave.com) settings for a way to manually trigger a version upgrade check.
It turns out that you have to click the apparently-disabled _About Brave_ navigation option:

![Very light grey #C5C5D3 menu item text](contrast/brave-settings.webp)

This menu item uses `#C5C5D3` light grey on white: **contrast ratio 1.7:1**. 
I don’t know what the designer was trying to achieve here, but
[low-contrast text is not the answer](https://www.nngroup.com/articles/low-contrast/).