---
title: Pluralise text correctly
description: User-interface content design details matter too
layout: hh
tags: DDD UX
image: women.jpg
---

![](women.jpg)

<a class="unsplash" href="https://unsplash.com/photos/CLUtKzmwdKQ" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Shreena Bindra</span></a>

Software user interfaces freqently include text that refers to data sets, like _You have 7 new messages_.
If you don’t try very hard, you end up with text like _You have 5 new message(s)_
and if you don’t try at all, _You have 1 new messages_.
Pluralising text correctly matters for readability, even if you treat it as a small detail.

## Straightforward to implement

Fortunately, pluralising text doesn’t pose a challenge to software developers.
In English, at least, it only requires conditionally outputting the singular form of a noun when a set contains one item, and the plural form otherwise.
This makes this an easier software engineering problem to solve than something genuinely hard, such as anything to do with [people’s names](respect-personal-names),
or anything to do with time zones.

Not every technology that could make something straightforward actually does, though.
If a developer ever skips pluralising text ‘because it doesn’t matter here’, 
then the technology they used to build the user interface didn’t make it convenient enough.
Pluralisation tests any user-interface technology.
Fortunately, the good kind of laziness encourages developers to curate good technology,
and doing the right thing costs less effort than it used to.

## More complex content

Pluralisation makes content management more complex, by adding conditional logic (i.e. _code_) to prose.
Solutions to this problem have existed for a long time, but discovering, understanding and using them costs some effort.
That effort pays off, though, by making content management accessible to more people.

In some contexts, the easiest option involves using programmer-friendly content management.
After all, developers don’t mind seeing code in the prose.
However, if you do this, you may have ‘reduced’ the problem to a harder one:
_getting programmers to write prose_.
More scalable solutions manage content, including handling pluralisation, in a way that technical writers can use.
Proper content management also handles a more international kind of complexity.

## Other languages have more complex pluralisation

In general, adding another language means supporting more complex pluralisation rules than using a different noun form for a single item.
Unless you _start_ in a language like [Polish](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/language_plural_rules.html#pl), say, or 
[Arabic](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/language_plural_rules.html#ar),
which have several categories of plural.

If you didn’t already introduce no-code content management that lets technical writers take care of pluralisation, you certainly need it for translators to manage content in multiple languages, and their varying pluralisation rules.

Note that technology can help with multi-language pluralisation.
Some development stacks can pluralise text in multiple languages, using a dictionary of plural forms for each language, and logic to select the correct form.
For example, .Net’s [PluralizationService](https://docs.microsoft.com/en-us/dotnet/api/system.data.entity.design.pluralizationservices.pluralizationservice?view=netframework-4.8)
class supports language-specific dictionaries, which seems promising.
Unfortunately, it leaves providing a dictionary for languages other than English as an ‘exercise for the reader’:

> The `PluralizationService` class applies English rules for constructing plural and singular forms of words.
> To extend the service to other languages, use the `PluralizationService` on the `EntityModelSchemaGenerator` class.

It turns out that the missing puzzle piece remains the data.
The next step in easier pluralisation might involve open source linguistics:
freely-available dictionaries of plural forms in different languages.
