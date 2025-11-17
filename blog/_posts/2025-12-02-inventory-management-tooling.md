---
title: Domestic inventory management tooling
description: the ultimate nerd shopping list
layout: hh
tags: product
image: tidy.jpg
---

![](tidy.jpg)

[LUM3N](https://unsplash.com/photos/-RBuQ2PK_L8){:.photocredit}

{:.series}
1. [Narrative](inventory-management)
2. [Details](inventory-management-details)
3. Tooling ←
4. Minimum viable solution

My [home inventory management](inventory-management)
story describes how online supermarket shopping escalated into a game
that I find so satisfying that I sometimes wish I could play more than one move per week.
[Adding details](inventory-management-details) reframes this as a software problem.
This article explores potential solutions, and how I actually do it.

## Tool requirements

This inventory management problem doesn’t actually have any hard [requirements](requirements),
because I could always choose not to manage and optimise inventory.
I could just shop like a normal person does.
However, the [ordering process](inventory-management-details#process) present several _opportunities_.

1. When checking current inventory standing in the storeroom or kitchen, I would prefer to use a phone (**step 1**).
2. When checking current inventory shelf-by-shelf, I would save time if the list organised inventory by _shelf_ (**step 1**).
3. When placing orders using a desktop computer, with large monitors, I would like to see more of the list than I can on a phone (**steps 4–7**).
4. When browsing for out-of-stock items while preparing an order, I’d like the list to highlight them (**step 4**).
5. When checking products’ actual and maximum inventory while preparing an order, I’d like to search the list for a specific product (**steps 4–7**).

I haven’t considered, but could imagine, a user experience that goes beyond this basic browsing,
searching and updating behaviour.

## Tool options

1. Artisanal hand-coded custom application, developed and maintained at weekends.
2. Vibe-coded custom application, updated with each new AI coding tool release.
3. Personal license for _SAP ERP (Home Edition)_.
4. A spreadsheet.
5. Other off-the-shelf software product.

## Custom development

Custom development ranks last, because [it takes forever](development-time).
Even if you don’t have to write code or fix bugs,
you probably have to spend a lot of time either deciding (i.e. designing) what you want,
or trying out (i.e. testing) candidate solutions to see if they ‘work’.
And in practice, you’ll choose one of these, and end up doing both.

Fortunately, I haven’t ever really had the inclination to write or build software in my spare time.
Instead, because this information problem seems neither complex nor unique,
[off-the-shelf software](https://en.wikipedia.org/wiki/Commercial_off-the-shelf)
should solve this problem.

## ERP software

[Enterprise resource planning](https://en.wikipedia.org/wiki/Enterprise_resource_planning) (ERP)
software solves exactly this problem.
However, for better or worse, [SAP ERP](https://en.wikipedia.org/wiki/SAP_ERP) doesn’t have a _Home Edition_.

ERP software addresses a different scale and complexity:
more than one weekly user and one weekly order, and a different scale of cost optimisation.
That could change.
After all, we now have personal licenses for knowledge management tools,
which once only existed as an enterprise software category.

## Spreadsheet

For decades, spreadsheets have provided the default solution to any business information management problem.
If you want to try any other approach, you will have to compete with an _ad hoc_ spreadsheet.

In this case, a spreadsheet’s tabular interface suits the inventory’s 150 rows and 7 columns.
Apple Numbers, for example, does a good job of adapting the spreadsheet user experience to a small screen,
it still feels too fiddly to update inventory levels in the iOS version.

## Minimum viable inventory management

Back in 2020, I started with the simplest possible solution – a list in a simple text document.
To prioritise the text editing user experience,
and have synchronised data between mobile and desktop applications,
chose software that I already used.
In the end, for domestic inventory management,
I use [Apple Notes](https://en.wikipedia.org/wiki/Notes_(Apple)).
