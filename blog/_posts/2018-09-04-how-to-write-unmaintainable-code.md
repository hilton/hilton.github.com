---
title: How to write unmaintainable code
description: Tribute to the classic thesis by Roedy Green
layout: hh
tags: code maintenance
---

[How To Write Unmaintainable Code]( https://github.com/Droogans/unmaintainable-code) by Roedy Green is a classic text for all programmers.
What appears to start out as simple humour, quickly becomes satire, farce and ultimately judgement.
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
You may want to make it hard for people to attack short names, but developing some bogus arguments for them and building up a short-names-are-better coding style for your project, or even a whole programming language community.

If the honest uselessness of short names feels week, you can also consider personal names, such as names of your pets or secondary school crushes.
Personal names are deliberately meaningless, as far as the actual code goes, and are only better than numbers in that they are easier to remember (as long as they were _your_ pets or crushes).

## Coding style

Beyond naming, there are broader questions of coding style that give you an opportunity to prevent maintainability.
Chief among your stylistic weapons is inconsistency.
Inconsistency is another kind of selfish laziness, because consistency requires effort.

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
