---
title: Populate country lists carefully
description: How to source a list of countries to use in software
layout: hh
tags: software data design
image: bouvet-island.jpg
published: false
---

![Bouvet Island ISS017-E-16161, Public Domain](bouvet-island.jpg)

[International Space Station crew](http://eol.jsc.nasa.gov/scripts/sseop/photo.pl?mission=ISS017&amp;roll=E&amp;frame=16161){:.photocredit}

Pick a country!
Software often includes a list of countries to choose from, such as for a shipping address.
While populating that list may sound straightforward, the correct list remains elusive, and you can upset people both by including some countries and omitting others.

## Postal Union members

In the unlikely event that you have heard of the 
[Universal Postal Union](https://en.wikipedia.org/wiki/Universal_Postal_Union)
(UPU), you might look for your list of postal address countries there.
However, international postal services’ history (and present) still include some exceptions, making the list of UPU members anything but a coherent country list.

Four United Nations (UN) members do not belong to the UPU, and have their post delivered by another UPU member:

1. Andorra
2. Marshall Islands
3. the Federated States of Micronesia
4. Palau

Meanwhile, two UPU members pre-date the UPU restricting membership to sovereign states:

1. Dutch overseas territories - Aruba, Curaçao and Sint Maarten
2. British overseas territories

Restricting the list to sovereign states sounds like a better idea.
After all, it turns out that _country_ doesn’t mean the same thing as _state_.

## Sovereign states

In English, the word _country_ overlaps imperfectly with the concept of a
[sovereign state](https://en.wikipedia.org/wiki/Sovereign_state).
Notably, England and several other countries  make up the state (kingdom) _The United Kingdom of Great Britain & Northern Ireland_.

In most cases, your countries list should list _sovereign states_, provided that you can decide which ones qualify.
[Wikipedia explains](https://en.wikipedia.org/wiki/Sovereign_state):

> International law defines sovereign states as having a permanent population, defined territory, 
> one government, and the capacity to enter into relations with other sovereign states

This roughly means that we need a list of those states that other states (but not necessarily all of them) recognise.
This takes us to the United Nations.

## United Nations members

The list of United Nations (UN) members gets us closer to a list of countries/states.
However, not all sovereign states have
[United Nations membership](https://en.wikipedia.org/wiki/Member_states_of_the_United_Nations): 
Wikipedia’s divides its 
[list of states with limited recognition](https://en.wikipedia.org/wiki/List_of_states_with_limited_recognition) into:

* 6 UN member states not recognised by at least one UN member state
* 7 non-UN member states recognised by at least one UN member state
* 2 non-UN member states recognised only by other non-UN member states
* 1 non-UN member state not recognised by any other state

The correct list of countries depends on who you ask.

## UN/LOCODE

Aside from the complex issue of UN membership and recognition, one UN organisation defines around 100 thousand
[location codes](https://en.wikipedia.org/wiki/UN/LOCODE) for trade and transport, such as `NL RTM` (Rotterdam).
In this list, the first two letters correspond to 249 different
[ISO 3166-1 alpha-2 country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).

You’d think that these 249 UN/LOCODE country codes would match the 249 officially assigned codes,
but they include the user-assigned code `XZ` to represent _international waters_ 
and don’t include `BV` - Norway’s
[Bouvet Island](https://en.wikipedia.org/wiki/Bouvet_Island) (photo, top).
You probably don’t need to ship anything to the most remote island in the world -
an uninhabited nature reserve 1700 km North of Antarctica.

In practice, you should probably tailor your countries list to your purpose and audience, and select 
[names from the Unicode CLDR](l10n-cldr-names) explicitly,
using ISO 3166-1 alpha-2 country codes, instead of filtering the whole list.
And beware of the political issues some international data sets cause.
