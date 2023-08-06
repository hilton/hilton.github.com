---
title: Use high-contrast text
description: The dark side of grey text
layout: hh
tags: UX
image: owl.jpg
css: "body.writing blockquote.big{padding:0; background:#fff; text-align:center; max-width:38em;} blockquote.black{color:#000} blockquote.gitlab{color:#303030} blockquote.slack{color:#1D1C1D} blockquote.notion{color:#373530}"
---

![](owl.jpg)

[Sharon Co Images](https://unsplash.com/photos/fH1ysCzWjo4){:.photocredit}

Fashion drives user-interface design as much any aspect of software development, 
but that doesn’t excuse cargo cult practices.
One relatively recent trend in software visual design avoids black text, in favour of some shade of dark grey.
Moderately grey text remains relatively harmless, but misguided designers that venture too far into this grey area have provoked a
[Contrast Rebellion](https://contrastrebellion.com).

It seems that a certain kind of young (and invariably) male designer can’t accept the idea of following the text contrast
[WCAG accessibility guidelines](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html).
Instead, their ego demands that unsubstantiated pseudoscience props up their current aesthetic preference for muted colour palettes, while they declare the WCAG guidelines _wrong_.

## Dark grey text

Designers of software I use have reduced the contrast of the text I read every day, but not excessively (brightness percentage in brackets, black text for comparison):

{:.big.black}
> black #000000 (0%)

{:.big.gitlab}
> GitLab #303030 (19%)

{:.big.slack}
> Slack #1D1C1D (21%)

{:.big.notion}
> Notion #373530 (22%)

This web site uses darker #222222 (13%) grey text.
All of these have higher contrast than the 7:1 ratio that the WCAG AAA rating requires, given a white background.
Of course, you might struggle to tell these examples apart, in practice.


## Contrast

On-screen text contrast depends on the environment.
A high-quality display in a dark room with no other light source has the highest contrast.
In practice, ambient light reduces this contrast - especially daylight.
Cheap monitors with dirty screens don’t help either.

Inexperienced designers tend to make the mistake of designing for their own experience, failing to accommodate a broader audience who don’t have designers’ perfect eyesight, colour-corrected monitors, and carefully limited ambient lighting.
Designer grey text fails to display its intended subtlety on my laptop with a screen privacy cover in a sunny cafe.


## Eye strain

While the WCAG guidelines describe _minimum_ contrast, designer
[Anthony Tseng claims](https://uxmovement.com/content/why-you-should-never-use-pure-black-for-text-or-backgrounds/) that:

> Pure black text on white backgrounds can cause eye strain when users read the text over an extended period.

Tseng links to a [research paper](https://www.nature.com/articles/s41598-018-28904-x),
but the study measured the effects of reading light text on a dark background, compared to dark text on a light background, not the effect of varying contrast levels.
I have yet to find any evidence for this eye strain claim, let alone peer-reviewed studies that control for other causes of eye strain from long periods of reading.


## Irlen syndrome

[Bristol Dyslexia Centre](http://www.dyslexiacentre.co.uk/visual-difficulties/)
claims that some dyslexics suffer from _scotopic sensitivity_:

> Black text on a white background may seem to glare or even flash, making it difficult to focus on the words and causing fatigue.
> In more extreme cases words can seem to float around the page and become distorted.

[Wikipedia’s article on this syndrome](https://en.wikipedia.org/wiki/Irlen_syndrome)
points to a lack of scientific consensus about it, however.
Assuming black text does negatively affect some dyslexics, it would help to know what measures they take.
After all, the 
[WCAG guidelines](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#visual-audio-contrast-contrast-intent-head)
target a certain range of vision loss:

> People with more than this degree of vision loss usually use assistive technologies to access their content (and the assistive technologies usually have contrast enhancing, as well as magnification capability built into them).

Perhaps monitor contrast controls have more effect than web designers’ colour palettes.
