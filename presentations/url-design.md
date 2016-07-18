---
title: Designing good URLs
description: How to get a web application’s public HTTP API right
layout: speaking
---

URL design is the often neglected part of web application and web service design.
However, URLs are part of your web application’s public interface, and good URLs make a better application.
This short presentation introduces URL design to web developers.

## Outline

### So what and why do I care?

* URLs are part of your web application’s public interface.
* Bad URLs make it difficult to debug your application.
* Clean URLs make everyone’s life easier.

### Good URLs

* Don’t change
* Don’t expose implementation technology details
* Don’t include unnecessary information
* Are fairly short
* Identify resources, not operations

### Benefits of good URLs

* Consistent public API - makes your application easier to understand
* Implementation independent URLs - don’t change when the technology does
* Short URLs - more usable - easier to type or paste into other media

### Nice URLs don’t change

* On the web, hyperlinks are one-way
* People expect URLs to be stable
* Changing URLs breaks other peoples’ links and bookmarks
* Stable URLs require up-front design

### Master detail URLs

* `/widgets/` - a resource representing a collection of widgets
* `/widgets/42` - the single widget with unique identifier 42
* `/widgets/42/edit` - an editable representation of widget 42, e.g. a form

### Pluralisation

* There are two versions of this kind of scheme
* `/widgets/` and `/widgets/42` - like a file system path, with a common prefix
* `/widgets/` and `/widget/42` - independent of each other, the second more logical 

### Example

* Identify a kind of ‘resource’, e.g. ‘widgets’
* Identify separate resources, e.g. list of widgets, one widget
* Choose operations, e.g. list, add, view, update, delete
* Match operations on resources to HTTP methods on URLs

### HTTP requests for operations

1. `GET /widgets` - list widgets
2. `GET /widgets/new` - edit a new widget
3. `POST /widgets` - add a new widget
4. `GET /widgets/42` - select one widget
5. `GET /widgets/42/edit` - edit the widget
6. `PUT /widgets/42` or `POST /widgets/42` - update the widget
7. `DELETE /widgets/42` or `POST /widgets/42?method=delete` - delete

### Resource options

* Use URL parameters to specify options for resources. e.g `GET /widgets?filter=new`
* Look out for standard cases, e.g. paging list results, like `GET /widgets?start=20&limit=10`

### Aliases and external identifiers

* In a URL like `/widgets/42`, 42 is probably a database identifier
* Aliases are more friendly, e.g. `/widgets/bottle-opener`
* External unique identifiers are more durable, e.g. ISBN in `/book/9781617290794`

### Code structure

* Web frameworks typically map an HTTP request (e.g. `GET /widgets`) to an ‘action’ method
* Group code that handles related resource URLs
* In web frameworks, this is usually a called a ‘controller’ that groups actions
* Sometimes it’s easier to choose the URLs before adding controller actions

### Next steps: the rest of the HTTP interface

* Handle error conditions for each HTTP request and return an HTTP error response
* Add options to requests
* Add alternative resource representations, e.g. plain text or JSON instead of HTML
