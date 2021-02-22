---
title: Why telephone numbers don’t add up
description: No such thing as an international telephone number format
layout: hh
tags: software design
image: telephone.jpg
---

![A telephone](telephone.jpg)

<a class="unsplash" href="https://unsplash.com/photos/cZkFw06aX_8" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Annie Spratt</span></a>

When you automate a service that uses telephone numbers, they cause more complications than you might expect.
This starts when you want to know how to format a telephone number.

## Store telephone numbers as text

To start with, trying to use a _number_ field for a telephone number doesn’t work.
Telephone numbers include non-digits, such as `+`, significant leading zeroes, and separators such as spaces and dashes.
Fortunately, you don’t need arithmetic: adding two telephone numbers together doesn’t give you anything useful.
Telephone numbers share this confusion with other [non-numeric ‘numbers’](non-numeric-numbers).

You can’t store a telephone number as a number, and format it when you display it.
Instead, to start with, collect and store telephone numbers as text, using the formatting they came with.

## Expect numerous formats

Most people group telephone number digits in twos or threes,
while some conventions use groups of four or five digits.
You see a lot of variation between telephone numbers in different countries.

| Country | Typical landline format | Typical mobile format |
| --- | --- | --- |
| [France](https://en.wikipedia.org/wiki/Telephone_numbers_in_France) | 0x xx xx xx xx | 06 xx xx xx xx |
| [Denmark](https://en.wikipedia.org/wiki/Telephone_numbers_in_Denmark) | xx xx xx xx xx | xx xx xx xx xx |
| [Italy](https://en.wikipedia.org/wiki/Telephone_numbers_in_Italy) | 0xx xxxxxx | 3xx xxxxxxx |
| [The Netherlands](https://en.wikipedia.org/wiki/Telephone_numbers_in_the_Netherlands) | 0xx-xxx xx xx | 06-xx xxxxxx |
| [United Kingdom](https://en.wikipedia.org/wiki/Telephone_numbers_in_the_United_Kingdom) | 0xxx xxx xxxx | 07xxx xxxxxx |

Even within one country, you find various grouping conventions.
Countries that only use ten-digit numbers, for example, typically have more than one way to write them.
Except Quebec.

According to [Wikipedia](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers#Canada),
‘Educational institutions of Quebec will mark improperly written phone numbers as orthographical mistakes in academic texts.’
The rest of us live in chaos, I suppose.

## International standards don’t help much

International standards reduce telephone number format variation a little.
[ITU-T](https://en.wikipedia.org/wiki/ITU-T) recommendation 
[E.123 Notation for national and international telephone numbers, e-mail addresses and Web addresses](https://www.itu.int/rec/T-REC-E.123-200102-I/en) (2001),
explains digit-grouping, for example:

> 2.9 Grouping the digits of a telephone number is advisable for reasons of memorizing, oral presentation, and printing.

> 9.1 Grouping of digits in a telephone number should be accomplished by means or spaces unless an agreed upon explicit symbol (e.g. hyphen) is necessary for procedural purposes. Only spaces should be used in an international number.

These standards only go so far: each country still has its own
[numbering plan](https://en.wikipedia.org/wiki/Telephone_numbering_plan).
Some countries use a fixed-length ‘closed’ numbering plan, while telephone numbers in countries with open numbering plans vary in length.
As a result, you won’t find an international way to format a telephone number with digits in groups.

While telephone numbers in many countries all have ten digits, for example,
[telephone numbers in Italy](https://en.wikipedia.org/wiki/Telephone_numbers_in_Italy) vary, with 6-11 digit landline numbers.

## Formatting approaches

Given this international variation, you get to choose between the following approaches.

1. Use whatever user input format you get, so people can choose, at the cost of less overall consistency.
2. Only format telephone numbers for one country, and use the wrong format for every other country.
3. Only use international numbers with no grouping, like + xxxxxxxxxxx, for overall consistency.
4. Use a database of every country’s numbering plans and area codes to use the right format for each city, world-wide.

Needless to say, each approach has its pros and cons.
