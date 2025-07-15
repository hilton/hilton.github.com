---
title: The data tables problem
description: the cost of repeatedly building the same UI component
layout: hh
tags: web architecture
image: spreadsheet.jpg
---

![](spreadsheet.jpg)

[atlken77](https://www.flickr.com/photos/floridaken77/5964733034){:.photocredit}

*[B2B]: business-to-business - refers to software for companies, as opposed to B2C (business-to-customer) consumer software
*[SaaS]: software-as-a-service - web-based software that you don’t have to install and upgrade

> Any sufficiently complicated front-end library/framework contains an ad hoc, informally-specified, 
> bug-ridden, slow implementation of half of [https://datatables.net](https://datatables.net).

This play on [Greenspun’s tenth rule of programming](https://en.wikipedia.org/wiki/Greenspun%27s_tenth_rule)
summarises **The Data Tables Problem**, which has three parts:

1. web-based business software displays complex tabular data
2. building a full-featured table component requires a lot of effort
3. development teams repeat this effort for each new front-end technology.

Given the choice between high development effort and low implementation quality,
many teams sadly choose both.
Worse, they don’t choose deliberately.

## Tabular data

I once visited an investment banking team’s office, where I briefly entered spreadsheet world.
Every desk had two large monitors showing a giant spreadsheet, across both screens.
And the only printouts on the desks increased the number of spreadsheets per desk.

Business software and internal tools love tables of data, 
from collections of employees in staff management information systems,
to customer orders in fulfilment software, and feature flags in product management tools.
Ever since the web’s invention, web applications have competed with spreadsheets,
which remain the canonical way to browse large data sets.

When business software, typically B2B SaaS, replaces spreadsheets, the tabular data remains.
[Information pages](information-pages) start with structured data, displayed as tables,
and every [system of record](https://en.wikipedia.org/wiki/System_of_record) includes tables of data.

## Table components

Modern web browsers and computer hardware give HTML tables excellent performance:
[a table with ten thousand rows](ten-thousand-rows.html) and ten columns renders in less than a second.
However, browsers never added the data manipulation tools available in spreadsheets.
You can only scroll and search across the whole web page.

Anyone who has ever used a spreadsheet wants additional capabilities,
especially when they have a lot of data:

1. sorting rows, by multiple columns
2. filtering rows by values or conditions
3. grouping and summarising (aggregating) rows
4. moving and hiding columns
5. [CSV export](csv-survives) (for using a spreadsheet after all).

On top of that, business users consider thousands of rows of data unremarkable,
so your _good performance_ doesn’t count when you paginate the data with ten rows per page.
Start with 100 rows.

Building a table component only requires _relatively_ straightforward design and implementation,
but it does require a lot of effort, especially to [fix all of the bugs](zero-bug-policy).
Ideally, of course, you would only have to build this once.

## Technology churn

The last ten years have seen a series of popular web application user-interface frameworks, such as 
jQuery, Ember.js, AngularJS, React, Angular 2, Vue, Svelte, and Next.js.
Each time a team adopts a newer framework, they’ll have to reimplement their table component.
They won’t have finished building the previous one yet,
hence the ‘bug-ridden, slow implementation of half of’ a table component.

Each time you build a new application,
it seems like you still have no better alternative than the development cost of a table component, yet again.
Instead, most teams should focus on their core business,
and use third-party software for complex-but-standard user-interface components.

## DataTables library

Just because few front-end developers use a third-party table component,
doesn’t mean they don’t have any to choose from.
For example, [DataTables](http://datatables.net/), first released in 2008,
has plenty of capabilities and flexibility.
and makes a better default approach than building your own.

DataTables clearly doesn’t solve the data tables problem, in practice, because not everyone uses it.
Perhaps one of the [many alternatives](https://github.com/FancyGrid/awesome-grid) does.
