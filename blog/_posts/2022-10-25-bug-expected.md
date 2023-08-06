---
title: Describe expected behaviour in bug reports
description: Comparing notes on software behaviour expectations
layout: hh
tags: product maintenance
image: bug-black-bee.jpg
---

![](bug-black-bee.jpg)

[Ray Hennessy](https://unsplash.com/photos/jN5pk0lbv4E){:.photocredit}

{:.series}
1. [Observed behaviour](bug-observed)
2. Expected behaviour ←
3. [Reproduction steps](bug-reproduction)
4. [Context & environment](bug-environment)
5. [Workaround](bug-workaround)

Some bug reports include an error message that effectively says that, _a bug made something go wrong_.
But some bug reports don’t necessarily describe a bug, in which case the support team has to identify the difference between the software’s behaviour and its _expected behaviour_.

## Describe both expected and observed behaviour

Suppose a software user interface shows a table of customers, sorted by name.
If you want to report the wrong sort order, describe both the observed and expected behaviour:

> Observed: customers sorted by name
>
> Expected: customers sorted by city, then by name

A [minimal bug report](bug-observed) only includes the first part.
However, in many cases, resolving the issue will require the second part as well.

## Design decisions

When designing this software’s table of customer names and addresses, the product team has to make design decisions.
Should the table sort its rows by name, by city, or by country?
It probably _depends_, so when they get a [minimal bug report](minimum-viable-bug-report)
with the summary _Customers sorted by name_, they won’t know if it describes a bug unless they know whether the table should instead sort customers differently.

Given several equally-plausible options, the product team needs a design decision to define the correct behaviour.
Even if they _have_ already have made this decision, they might still want to revisit a decision that doesn’t align with customer expectations.

Therefore, as a customer, you should describe both _observed_ and _expected_ behaviour.
This way, the product team knows whether to reject this bug report, because it doesn’t describe an actual bug  and the software _should_ sort customers by name.

## Mismatched expectations

What if the product team decided _not_ to sort the table of customers, for performance reasons?
First, the product team still needs to know which behaviour you expect:

> Observed: customers displayed _in random order_
>
> Expected: customers sorted by city, then by name

This time, the bug report has a new element: it signals to the product team that the software might have a design problem.
Perhaps the software really does display the customers in random order, which corresponds so a user-interface design bug, because _random order never provides the best user experience_.
The difference between observation and expectation therefore lies in the gap between a correct observation, and a better expectation.

{:.big style="max-width:31em"}
> In a software user interface,  
> random order is never the _right_ order

Just because a product’s design doesn’t meet your expectations, that doesn’t make your expectations _wrong_.
Product teams often spend too much time with their own software, and fail to account for how software _usually_ works.

## Hidden behaviour

Suppose the software actually sorts customers by _date added_ (not displayed).
Now the design bug lies in sorting a table by an invisible value, making the order apparently random _for the user_.
Now the difference between observation and expectation lies both:

1. between an _incorrect_ observation (random order) and actual behaviour (date order), and
2. between the actual behaviour and the expectation (city order).

To understand this, the product team needs explicit descriptions of both observed behaviour and expected behaviour.
Without both, bug reports may bounce between customer, support, and the product team, until someone adds more information.

## Shared context

Describing expected behaviour surfaces differences in expectations between different people looking at the same software.
But in reality, you can’t assume that everyone sees the same software thing.
