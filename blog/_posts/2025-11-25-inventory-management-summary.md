---
title: Deconstructed inventory management
description: the basis for a home information management project
layout: hh
tags: product
image: 2024-preview.jpg
---

{:.series}
1. [Narrative](inventory-management)
2. Details ←

Since 2020, I’ve played [home inventory management](inventory-management),
which makes online orders for supermarket deliveries more satisfying.
It also keeps the storeroom, fridge and freezer well-stocked, while minimising cost and waste.
This article deconstructs the narrative, to make it look more like a software problem.

![Home inventory in November 2024](inventory/2024.webp)

_Photo: twelve of the storeroom shelves in 2024 – some of the unrefrigerated food inventory_

## Context

* Weekly orders include fresh goods, such as fruit and vegetables.
* Orders have a minimum order value.
* Weekly supplies reach 50–80% of the minimum order value.
* Available storeroom space easily accommodates each item’s _maximum inventory_.

## Optimisation goals & constraints

1. Use all inventory before its _best before_ date.
2. Store each product in a consistent location in the storeroom.
3. Keep the storeroom tidy, without spreading a stock item across more than one shelf.
4. Use discounts to minimise each stock item’s moving average price.

## Inventory data model

| Attribute name     | Example value             | Description |
| ------------------ | ------------------------- | ----------- |
| product name       | De Cecco Spaghetti Nr. 12 | The name on the supermarket web site                   |
| inventory          | 4                         | The actual quantity currently in the storeroom         |
| expected inventory | 5                         | Actual inventory plus ordered undelivered stock        |
| shelf              | C3                        | Storeroom shelf column and row, _fridge_, or _freezer_ |
| maximum inventory  | 6                         | The highest quantity to stock for this product         |
| shelf life         | 12                        | Months from delivery date to ‘best before’ date        |
| last discount      | 2025                      | The year of this product’s last discount               |

Note that while I would absolutely use the unique product
[SKU codes](https://en.wikipedia.org/wiki/Stock_keeping_unit)
the supermarket uses, they don’t expose them in the customer-facing interface.

## Ordering process

1. Update inventory levels, by inspecting the storeroom and kitchen.
2. Start an order on the supermarket web site, using a desktop computer.
3. Add all items from the _weekly_ predefined shopping list.
4. Add one of any out-of-stock items.
5. Browse discounted items in the _storeroom_ shopping list, and in the list of the week’s discounts.
6. Add discounted items up to their _maximum inventory_, prioritising bigger discounts.
7. If necessary, to reach the minimum order value, add never-discounted items.
8. Place the order (with bonus points for an order value within €1 of the minimum).
9. For each order line, update _expected inventory_ to _actual inventory_ + _order quantity_.
10. After delivery, update _actual inventory_ levels, and clear _expected inventory_.

## Process variation

**Step 1** doesn’t happen during travel, in which case **step 2** uses a laptop or phone,
and **steps 4–7** rely on already-accurate inventory levels.

**Step 6**: a large discount (up to 50%) may justify exceeding the minimum order value,
to bet against a large discount returning before using up that stock.

**Step 6**: a small discount (e.g. 10%) may justify only partially restocking a previously-discounted product,
to bet on a larger discount later.

## The question

Given this summary of my domestic inventory management, how would you manage the inventory levels?
Which kind of software tool do you think I use?
