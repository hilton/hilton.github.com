---
title: Sort every collection you output
description: Unsorted is never the right order
layout: hh
tags: software design
image: cacti.jpg
---

![Five cacti in a row](cacti.jpg)

<a class="unsplash" href="https://unsplash.com/photos/GQD3Av_9A88" rel="noopener noreferrer" title="Photo by Scott Webb"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Scott Webb</span></a>

If you work in software development, you will see certain bugs in every year of your career.
I recently wrote about [numbers that aren’t numbers](non-numeric-numbers),
and this article describes another one: unsorted lists.

## Nobody expects an unsorted list

Imagine looking at a list of names - documents, people, or whatever - and you can’t work out how the list sorts its entries.
Either you regularly examine detailed software functionality (because you test it), or you can’t find the list item you want, and have started wondering why not.

Sometimes, you can’t find the item you want in a list because the software did not sort the list items, leaving the list unsorted.
You just found a bug, and not for the last time, because in general:

> Unsorted is never the right order

Fortunately, you can fix this with minimal effort, unless you have problems of some kind.
You certainly shouldn’t have to discuss it.

## Don’t dwell on whether to call an unsorted list a bug

Your team’s definitions of _bug_ and _improvement_ don’t matter here.
Software developers shouldn’t assume that they don’t have to sort a list, if nobody said otherwise.
Meanwhile, product owners shouldn’t assume that everyone thinks the list has the same natural ordering, if you’ve never mentioned it.

If you don’t write down software specifications, even as user story _acceptance criteria_, you should still specify something as unusual as an unsorted list.

## Sort lists alphabetically by display value, by default

This bug doesn’t happen when product owners and software developers have effective conversations.
Either can say ‘the software will sort the list alphabetically’, and check that the other nods.
Anything else belongs to a special case.

Note that this applies to both user interfaces and APIs.
If you really want to leave an API result collection’s order as _unspecified_ or _unsorted_, you need to account for some API consumers eventually relying on all API behaviour, specified or not.

Unsorted items don’t necessarily appear in random order.
If you don’t explicitly sort a list, the underlying technology stack may give you items in creation order, for example.
If you really want to represent something as an unsorted set, you may have to explicitly randomise it so that API consumers _can’t_ rely on its accidental ordering.

## Make the order explicit, including direction

Most collections have a _natural ordering_, usually alphabetical order for a list of names.
If you sort a list any other way, such as _popularity_ or _relevance_, you need to explicitly state the order to avoid a user experience of apparently random order.

For numeric and date values, specify the _direction_ as well.
Phrases like _low to high_ and _newest first_ seem to resolve the ambiguity that _ascending_ and _descending_ can suffer from.

## Show the values you sort by

If you do sort a list of documents by _date modified_, then it’s probably worth actually showing that date.
In general, display the value you sort by.
In the same way that your new product doesn’t actually have to repeat the classic unsorted list bug, your user interface doesn’t have to reinvent the user experience from first principles.
