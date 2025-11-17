---
title: Minimum viable inventory management
description: using Apple Notes to manage supermarket orders
layout: hh
tags: product
image: inventory/notes-preview.jpg
css: "body.writing h2.clear {clear:right}"
---

{:.series}
1. [Narrative](inventory-management)
2. [Details](inventory-management-details)
3. [Tooling](inventory-management-tooling)
4. Minimum viable solution ←

Previous articles in this series
[describe home inventory management](inventory-management),
[add details](inventory-management-details), and
[discuss tooling](inventory-management-tooling).
This article shows my minimum-viable solution using
[Apple Notes](https://en.wikipedia.org/wiki/Notes_(Apple)).

## The shopping list

My home inventory management solution consists of a single shopping list, in Apple Notes:

![Home inventory management in Apple Notes on macOS](inventory/notes.webp)

This illustrates how the note uses one line per product, for the following data.

| Example   | Description                                        |
| --------- | -------------------------------------------------- |
| A0        | **shelf** location, formatted as a heading         |
| 3/4       | 3 **actual inventory** and 4 **maximum inventory** |
| → 16/18   | 16 **expected inventory** (after next delivery)    |
| keukenrol | Product name (_kitchen roll_), in Dutch            |
| 🟠2025    | **last discount** in 2025                         |
| 📆11      | 11 months’ **shelf life**, from delivery date     |
| ✨        | Frequently-used product, suitable for stocking up |

The ad hoc purple highlights manually indicate changes. For example:

* the next order will include 1 jar of mayonnaise (C1), which has zero actual inventory
* the last order included 6 packs of coconut milk (_kokosmelk_, D1), which has 16 expected inventory.

The multiplication symbol (**×**) acts only as a visual separator.
Standard keyboards only include the plus sign (**+**),
and only the division sign (**÷**) gets a macOS keyboard shortcut (**Option-/**),
so I configured a [text replacement](https://support.apple.com/en-gb/guide/mac-help/mh35735/mac)
to replace ******* with **×** on macOS and iOS.

## Mobile client

![The same list in Apple Notes on iOS](inventory/notes-mobile.webp){:.cover}

Apple Notes has a killer feature for tracking stock levels:
automatic synchronisation between desktop and mobile devices, via iCloud.
The screenshot (right), shows the iOS version of Apple Notes on iPhone (where I use dark mode).

The [ordering process](inventory-management-details)
describes how I use my phone in the storeroom to look at the shelves and update inventory levels,
and then my desktop computer (in another room) to look at inventory levels and place orders.
This saves me installing webcams in the storeroom, fridge and freezer.

The text editing experience works well enough, and avoids fiddly spreadsheet cell editing.
I don’t usually need to use the option to search for text within the note,
because the large headings for the shelf locations make it easy to browse.

I can, however, think of ways to improve the user experience.
A different kind of application could make editing more convenient,
provided that its mobile client syncs with desktop and has good enough UX.

{:.clear}
## UX opportunities

During the ordering process, editing text sometimes feels like a compromise:

* editing text to decrement stock levels, on a phone in the storeroom
* browsing only out-of-stock items
* browsing never-discounted products
* updating _actual inventory_ from _expected inventory_, after a delivery

A more graphical user interface could support these actions more directly:

* plus/minus buttons to adjust stock levels
* filter views for out-of-stock and never-discounted products
* action buttons to mark products as _not delivered_ or _all delivered_, to update _actual inventory_ and clear _expected inventory_.

These improvements don’t necessarily require custom software.

## Business software alternatives

My domestic inventory management story has a moral for B2B software product development.
B2B SaaS products compete with spreadsheets and rich text documents,
before they compete with each other.
And while these competing software tools have more complexity than Apple Notes,
they have room for improvement in the same direction.

Structured data models and ‘proper databases’ don’t in themselves make B2B SaaS products better than ad hoc solutions.
If anything, their web user interfaces prevent data portability.
Instead, better software incorporates a better user experience,
based on the user journeys and business processes that determine where and how people use it.
