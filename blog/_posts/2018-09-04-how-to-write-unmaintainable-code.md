---
title: How to write unmaintainable code
description: Tribute to the classic thesis by Roedy Green
layout: hh
tags: code maintenance
image: https://hilton.org.uk/blog/factory5.jpg
---

[![A factory - where real maintenance happens](factory5.jpg)](https://unsplash.com/photos/zXPiqavR2FU)

<a style="background-color:#ccc;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/photos/zXPiqavR2FU" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Crystal Kwok"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Crystal Kwok</span></a>

[How To Write Unmaintainable Code](https://github.com/Droogans/unmaintainable-code) by Roedy Green is a classic text for all programmers.
What appears to start out as simple humour, quickly reveals satire, farce and ultimately harsh judgement.
If you’ve written much code, you’re likely to feel very _seen_.

Unmaintainable code comes from five core practices:

1. *Naming*: use single-letters, typos and a baby name book
2. *Coding style*: obfuscate, ‘optimise’, avoid consistency
3. *Code structure*: copy-paste, break encapsulation, use global/static members, wrap unnecessarily
4. *Documentation*: lie, state the obvious, leave placeholders
5. *Languages & formats*: mix them, invent your own

Here are a few highlights, to give you an idea of what you can learn.

## Naming

Naming is, of course, the first topic.
After all, [it’s famously hard](why-naming-things-is-hard).
More importantly, your approach to naming provides the greatest opportunity to write unmaintainable code.

Single-letter names represent the ultimate laziness in naming.
That’s selfish laziness, by the way, not [constructive laziness](constructive-laziness).
However, short variable names are vulnerable to constructive renaming.

To make it hard for people to attack short names, you’ll need some (bogus) arguments for using them and building up a short-names-are-better coding style for your project, or even a whole programming language community.

If the honest uselessness of short names feels weak, you can also consider personal names, such as names of your pets or school crushes.
Personal names are deliberately meaningless, as far as the actual code goes, and are only better than numbers in that they are easier to remember (as long as they were _your_ pets or crushes).

## Coding style

Beyond naming, there are broader questions of coding style that give you an opportunity to prevent maintainability.
Chief among your stylistic weapons is inconsistency.
Inconsistency is another kind of selfish laziness, because consistency requires effort.

If you can recognise each coder’s personal style in the code, you’re only halfway to unmaintainable inconsistency.
The next step is to master the unexpected.

[Expressive languages](maintenance-expressive-languages) help you affect an inconsistent coding style, because you can randomly select different idioms for code that would otherwise be similar.
When there’s always _more than one way to do it_, you can constantly surprise the unsuspecting maintainer.

## Code structure

Coding style merely deals with lines of code, while truly unmaintainable code rejects common sense at multiple levels.
At a higher level, you can develop an unmaintainable coding structure.
Unmaintainable coding structure is harder to mitigate than the other approaches to writing maintainable code, because it’s less about laziness and more about wilful mischief.

Bad structure comes from the stronger forces: fashion and failure to properly apply coding paradigms such as object-oriented programming.
For example, you can easily achieve inconsistency at the code structure level, but constantly introducing new languages, libraries, frameworks and paradigms.

The trick is to only half-learn and half-apply the new ideas.
That way, you can combine the previous half-arsed implementation of a new idea with a portion of the code that less successfully implements an approach that’s even less appropriate to the problem at hand.

## Documentation

TO DO.

## Languages & formats

Programming languages and data formats present a challenge, as they tend to improve over the years, making previously incomprehensible code slightly less bad.
To work against these creeping improvements in design and documentation, you need to embrace the obscure.

Fortunately, the proliferation of new languages and formats makes it easier to pick one that other programmers are less familiar with.
Even better: invent your own, so you can apply all of these unmaintainable code techniques to the language or format itself.

## Next steps

First, read [How To Write Unmaintainable Code]( https://github.com/Droogans/unmaintainable-code), written by Roedy Green, reformatted in Markdown by Droogans.
Then [contact Peter Hilton](../contact) to ask for training in [How to write maintainable code](../training/maintainable-code).
