---
title: Why CSV survives
description: The enduring nature of comma-separated values (CSV) 
layout: hh
tags: data
image: columns-old-car.jpg
---

![](columns-old-car.jpg)

[Serge Kutuzov](https://unsplash.com/photos/tGt_jpHl_TU){:.photocredit}

{:.series}
1. [CSV delimiters](csv-delimiters)
2. [CSV character encoding](csv-encoding)
3. Why CSV survives
4. [RFC-4180 compliant CSV](csv-rfc-4180)
5. [CSV on the Web (CSVW)](csvw)
6. [Excel’s broken CSV](csv-excel)

Although comma-separated values (CSV) files often don’t work, because they have the
[wrong delimiters](csv-delimiters) or the
[wrong encoding](csv-encoding), CSV lives on.
CSV has retained its popularity for decades, and continues to do so despite a series of potential replacements.

## None of the CSV replacements replaced CSV

In the decades since CSV first gained popularity, many alternative text-based data interchange formats appeared.
Most improved on CSV by avoiding its ambiguities, or escaping its limitations.

{:.big style="max-width:34em"}
> XML has risen and fallen. JSON is just a flash in the pan.
> YAML is a poisoned chalice. **CSV will outlast them all.**  
> \- Leon Bambrick, [Awesome CSV](https://github.com/secretGeek/awesomecsv)

But cinema didn’t replace radio, and television didn’t replace cinema.
New options add choices, and obsolescence occurs separately.
In particular, new data formats aimed for many goals, but never _more convenience_.

## Convenience beats quality

Despite losing the fashionability it had twenty years ago, XML succeeds where it offers more convenience than legacy binary formats, that required far more specification.
However, in the world of text-based formats that we send over HTTP, XML occupies a kind of high-quality high-complexity high ground compared to the 1990s’ text formats.

XML provides a proper engineering solution to data exchange, so we use JSON instead.
JSON gives software developers a more convenient experience by not addressing the hard problems that XML took on.
In general, convenience beats quality, because inconvenience usually costs more than an imperfect solution.

## People prefer tabular data

Most people associate the word _data_ with a two-dimensional table.
A one-dimensional _list_ feels like something simpler, and hierarchies belong to people with  exposure to recursion and nested data structures, such as programmers.
While programming languages naturally support hierarchical data structures, genealogists and human resources departments need specialist software for their family trees and organisation charts.

Everyone else uses spreadsheets.
People (non-programmers) generally prefer tabular data to more exotic structures.
For many of them, data only exists in spreadsheets, which you can only share as CSV or a proprietary spreadsheet file format.

## Excel can’t import JSON

JSON deserves most of its popularity to how it _just works_ in JavaScript.
JSON doesn’t work with Excel, though.
And while CSV arguably doesn’t work particular well in Excel either, it works well enough.

{:.big .solid-two style="max-width:32em"}
> If Excel can’t import your data format, does it even exist?

Don’t expect CSV to go away any time soon.
Instead, make sure that the software you build uses it properly.
