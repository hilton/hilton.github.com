---
title: Pluralise text
description: User-interface content design details matter too
layout: hh
tags: software design
---

Your software user interfaces include lots of text that refers to data sets, like _You have 7 new messages_.
If you don’t try very hard, you end up with text like _You have 5 new message(s)_
and if you don’t try at all, you get _You have 1 new messages_
Pluralising text correctly matters for readability, even if you treat it as a small detail.

## Straightforward to implement

Fortunately, pluralising text doesn’t pose a challenge to software developers.
In English, at least, it only requires conditionally outputting the singular form of a noun when a set contains one item, and the plural form otherwise.
This makes this an easier software engineering problem to solve than something genuinely hard, such as anything to do with [people’s names](respect-personal-names),
or anything to do with time zones.

Not every technology that could make something straightforward actually does, though.
Pluralisation tests any user-interface technology:
if a developer ever skips pluralising text ‘because it doesn’t matter here’, 
then the technology didn’t make it convenient enough.
Fortunately, the good kind of laziness encourages developers to curate good technology.

## More complex content

Pluralisation makes content management more complex, by adding conditional logic (i.e. _code_) to prose.
Solutions to this problem have existed for a long time, but discovering, understanding and using them costs some effort.
The effort pays off, though.

In some contexts, the easiest option involves using programmer-friendly content management.
After all, developers don’t mind seeing code in the prose.
However, if you do this, you may have ‘reduced’ the problem to a harder one:
getting programmers to write prose.
More scalable solutions manage content, including handling pluralisation, in a way that technical writers can use.
Proper content management also handles a more international kind of complexity.

## Other languages have more complex pluralisation

In general, adding another language means supporting more complex pluralisation rules than using a different noun form for a single item.
Unless you _start_ in Polish, of course.

If you didn’t already introduce no-code content management that lets technical writers take care of pluralisation, you certainly need it for translators to manage content in multiple languages, and their varying pluralisation rules.

Note that technology can help with multi-language pluralisation.
Some development stacks can pluralise text in multiple languages, using a dictionary of plural forms for each language, and logic to select the correct form.
For example, .Net’s pluralisation function supports language-specific dictionaries, which seems promising.
Unfortunately, it leaves providing a dictionary for languages other than English as an ‘exercise for the reader’.
