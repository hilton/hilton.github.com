---
title: Use URLs and links in single-page apps
description: restore browser functionality that an SPA can’t take for granted
layout: hh
tags: UX
---

A [single-page app](https://en.wikipedia.org/wiki/Single-page_application) (SPA)
replaces web page navigation with user interaction inspired by desktop graphical user interfaces.
This model makes it possible to implement
[direct manipulation](https://en.wikipedia.org/wiki/Direct_manipulation_interface)
and a better user experience.
However, browser functionality that relies on URLs and links no longer automatically works in a single-page app.
Instead, SPA developers have to reimplement the missing browser functionality within their web application,
to avoid inconsistent web page navigation, and a bad user experience.

## Current view URL

Imagine a retail company’s internal product catalogue, that employees use to maintain a single source of truth for information about the products they sell.
This catalogue lists products and shows product details, among other capabilities.
When viewing a specific product’s details in a web browser,
people want to bookmark that product, or share a link to its details in a chat.

As a static web site, each product would have its own [information page](information-pages),
with a unique product page URL.
A single-page app, on the other hand, might behave more like a spreadsheet,
and overlay a modal dialogue box to show product information.
In a naive SPA implementation, opening a product details view wouldn’t change the page URL.

[SPA developers must implement client-side routing](https://dev.to/marcomonsanto/routing-in-spas-173i)
so that changes to the view change the current URL, making the current view addressable.
Otherwise, users can’t save or share links to specific views.

## Hyperlinks

In our product catalogue, product search results link to more information about each product.
Document-style web application use conventional HTML hyperlinks,
which web browsers provide functionality for.
Users want to right-click a hyperlink to copy the link URL, or decide whether to open it in a new tab.

Single-page app user interfaces often include what look like hyperlinks,
but implement them by adding click behaviour to non-standard HTML elements.

[SPA developers must implement plain HTML links](https://codeburst.io/shared-state-and-routing-in-vue-js-7bfea06e44ec#61e9),
and override their behaviour when clicked.
Otherwise, although they behave as expected when clicked,
the browser’s context menu features for links don’t appear when you right-click them.

## Loading indicators

Users of all software, not only web applications,
expect to see a progress indicator for any operation that takes more than 1-2 seconds.
A document-style web application loads new data, such as product details, when navigating to a new URL.
When this happens, the web browser’s built-in page loading indicator informs the user.

In a single-page app, data loads without page transitions, and therefore without a default progress indicator.
Unfortunately, many developers don’t bother adding loading indicators.
Someones, they fail to understand where users have to wait for data to load from the Internet,
because they develop in an environment that fetches data with no perceived delay from the local network.

[SPA developers must implement loading indicators within the application](https://www.saurabhmisra.dev/react-router-loading-indicators/),
commonly by showing a [throbber](https://en.wikipedia.org/wiki/Throbber)
near to the UI that triggered the change, or by showing a loading state or skeleton content where new data will appear.
