---
title: Use URLs and links in single-page apps
description: restore browser functionality that an SPA can’t take for granted
layout: hh
tags: UX
image: page.jpg
---

![](page.jpg)

[Debby Hudson](https://unsplash.com/photos/FO4gzqI2t84){:.photocredit}

*[URL]: uniform resource locator - a web page’s address

A [single-page app](https://en.wikipedia.org/wiki/Single-page_application) (SPA)
replaces web page navigation with user interaction inspired by desktop graphical user interfaces.
This approach makes it possible to implement
[direct manipulation](https://en.wikipedia.org/wiki/Direct_manipulation_interface)
and a more sophisticated user interface.

However, browser functionality that relies on URLs and links no longer automatically works in a single-page app.
Instead, SPA developers have to reimplement the missing browser functionality within their web application,
to avoid inconsistent web page navigation, and a bad user experience.

## View URLs

Imagine a retail company’s internal product catalogue, 
that employees use to maintain information about the products they sell.
This catalogue lists products, and shows product details, among other capabilities.
When viewing a specific product’s details in a web browser,
people want to bookmark that product, or share a link to its details in a chat.

With [static web pages](https://en.wikipedia.org/wiki/Static_web_page), 
each product would have its own [information page](information-pages), with a unique product page URL.
A single-page app, on the other hand, might behave more like a spreadsheet,
and overlay a modal dialogue box to show product information.
In a naive SPA implementation, opening a product details view wouldn’t change the page URL.

[Single-page apps must implement client-side routing](https://dev.to/marcomonsanto/routing-in-spas-173i)
so that changes to the view change the current URL, making the current view addressable.
Otherwise, users can’t save or share links to specific views.

## Hyperlinks

In our product catalogue, product search results link to more information about each product.
Static web pages use conventional HTML hyperlinks, which web browsers provide functionality for.
Users want to right-click a hyperlink to copy the link URL, or decide whether to open it in a new tab.

Single-page app user interfaces often include what look like hyperlinks,
but implement them by adding click behaviour to non-standard HTML elements.
For these user interface elements, browsers don’t provide their functionality for hyperlinks.

[Single-page apps must implement plain HTML links](https://codeburst.io/shared-state-and-routing-in-vue-js-7bfea06e44ec#61e9),
and override their behaviour when clicked.
Otherwise, although so-called links behave as expected when clicked,
the browser’s context menu features for links don’t appear when you right-click them.

## Loading indicators

Users of all software, not only web applications, expect to see 
[progress indicators for operations that take more than one second](https://uxdesign.cc/loading-progress-indicators-ui-components-series-f4b1fc35339a).
A static web site loads new data, such as product details, when navigating to a new URL.
When this happens, the web browser’s built-in page loading indicator informs the user.

In a single-page app, data loads without a default progress indicator.
Unfortunately, many developers ignore this, because they don’t share users’ experiences.
Developers typically use an environment where data loads apparently instantly.

[Single-page apps must implement loading indicators within the application](https://www.saurabhmisra.dev/react-router-loading-indicators/),
commonly by showing a [throbber](https://en.wikipedia.org/wiki/Throbber)
near to the UI that triggered the change, or by showing a loading state or skeleton content where new data will appear.

## Page titles

When people view product details in our product catalogue,
they expect the browser tab, browser history, and new bookmarks to show the product name or
[SKU code](https://en.wikipedia.org/wiki/Stock_keeping_unit).
On a static web page, this text comes from the HTML document _title_.

A single-page app only has one HTML document _title_,
which means that in a naive implementation, every browser history entry will have the same title.
[Single-page apps much dynamically update the document title](https://www.kindacode.com/article/ways-to-set-page-title-dynamically-in-react/)
for each view and navigation history entry, so that browser functionality doesn’t show duplicate titles.
