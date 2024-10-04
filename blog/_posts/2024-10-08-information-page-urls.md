---
title: Information page URLs
description: implementing information pages that you can actually link to
layout: hh
tags: design
image: web.jpg
---

{:.series}
1. [Management information](management-information)
2. [Working out loud](work-out-loud)
3. [Collaboration opportunities](collaboration-opportunities)
4. [Activity feeds](activity-feed)
5. [Activity feed design](activity-feed-design)
6. [Information pages](information-pages)
7. Information page URLs ←

![](web.jpg)

[Aaron Burden](https://unsplash.com/photos/9TgJxZMd0hc){:.photocredit}

In an online retail business, operations teams work with _business data_.
To resolve a customer support request, for example,
the team typically starts from information about the relevant customer and order,
and related products and deliveries.
Similarly, other businesses have other operational information to look up,
in their own data models.

[Information pages](information-pages) provide a company’s internal 
[single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth)
for operational data.
The of each of these [business objects](product-backlog-naming#objects)
having an intranet web page comes from it becoming more
[findable](https://en.wikipedia.org/wiki/Findability).

## Intranet web resources

Despite their previous popularity, worldwide web-like company intranets went out of fashion.
This mirrors how [walled gardens](https://en.wikipedia.org/wiki/Closed_platform),
such as the big social media platforms, have swallowed much of the public web we use.

In replacing our intranets with business software suites, we have forgotten the
[architecture of the web](https://www.w3.org/DesignIssues/Architecture.html),
and its [design principles](https://www.w3.org/DesignIssues/Principles.html).
This matters because business information’s document-nature aligns well with the web concept of an
[information resource](https://www.w3.org/DesignIssues/Model.html),
and its identifier:

> The most fundamental specification of Web architecture, while one of the simpler,
> is that of the Universal Resource Identifier, or URI.
> The principle that anything, absolutely anything,
> ‘on the Web’ should identified distinctly by an otherwise opaque string of characters
> (a URI and possibly a fragment identifier) is core to the universality.

You can apply this to business information on an intranet.
You just need a stable URL for each resource.

## Business object canonical URLs

When you start designing an information page, don’t with its contents;
start with how you get there.
Give each business object’s information page a canonical URL, such as:

* `https://internal.example.com/customer/14159265`
* `https://internal.example.com/product/BFG9000`

In these examples, the URL path ends with an well-known existing identifier.
Typically, `14159265` would be a customer number in an existing database or CRM.
Similarly, `BFG9000` would be a product’s
[SKU code](https://en.wikipedia.org/wiki/Stock_keeping_unit), or maybe an 
[EAN code](https://en.wikipedia.org/wiki/International_Article_Number).

On the web, you can link to any web page without needing to know who published it, or how.
In the examples above, you can link to a customer or product only by knowing the URL.
When you can’t simply _link to a web page_, you probably have a
[single-page application](https://en.wikipedia.org/wiki/Single-page_application),
a software architecture that breaks the web’s most useful feature: hyperlinks.

Linkable information pages make valuable use cases trivial.
When [working out loud](work-out-loud),
team members can unambiguously refer to business objects with links.
When you automate those messages,
[activity feed messages can link a single source of truth](activity-feed-design#link),
and [limit notifications to one line](activity-feed-design#line),
because they don’t have to duplicate linked information.

## Frameworks and app builders

In theory, you shouldn’t have to write any custom code to publish information pages from an existing database or API.
Indeed, many products make exactly this possible.
Unfortunately, they typically implement bad URL design for you.

In one particularly bad example of implementation details leaking into a public interface,
[Appsmith](https://www.appsmith.com) adds a 
[UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) to each URL, so instead of:

> `https://internal.example.com/product/BFG9000`

you get something like:

> `https://internal.example.com/product-318511f658966f4066a159bf?sku=BFG9000`

Dealing this requires inconvenient-if-not-unfeasible workarounds,
and understanding how and when the generated UUID changes, so you can update your workarounds.
Apparently, Appsmith doesn’t support the avant garde use case of knowing a product’s SKU code and wanting to link to its web page.
I hope your tooling does better.
