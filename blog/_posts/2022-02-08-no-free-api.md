---
title: The cost of a free API
description: How you pay for publishing your back-end’s API
layout: hh
tags: API design
image: ship-sinking.jpg
---

![Ship sinking](ship-sinking.jpg)

[Jason Blackeye](https://unsplash.com/photos/0MEMXMOy--Y){:.photocredit}

*[HTTP]: Hypertext Transfer Protocol - the worldwide web’s standard for transferring data, commonly also used for APIs
*[SaaS]: software as a service

Web-based software with a
[client-server architecture](https://en.wikipedia.org/wiki/Client–server_model)
has a browser-based client (the _front end_) that connects to a server (the _back end_) via HTTP.
In enterprise SaaS, demand for an HTTP API tempts developers to say that their client-server _already has a back-end API_ for the front end.

They missed this warning from
[Jessica Kerr](https://twitter.com/jessitron/status/1471351023033720834):

> People. There is a difference between a backend and an API. 
> Taking the endpoints that you wrote for your site, slapping some documentation on them and publishing it
does not make an API.

What could possibly go wrong?

## Documentation costs more than that

You know you need documentation, and will soon discover that this takes longer than you expect.
Developers will try to generate all of the API documentation from code, 
the first of several [HTTP API documentation mistakes](api-documentation-mistakes).

## Publishing the API freezes it

Sooner or later, a user-interface change will change the API, and annoyed customers will want to know why their expensive custom reports broke.
You can’t break your API once _published_, so you’ll have to stop changing it.

## The actual API grows beyond what you published

As you continue to develop new application functionality, the API grows to support it.
You can’t restructure without breaking the published API, leading to messy design and inconsistent naming.
Meanwhile, you’ll skip documenting the new parts, and only part of your API will have official _published_ status.

Customer will want an API for the new application functionality.
They will figure out that the API has more functionality than what appears in the API documentation, and start using it.
Now you have to support an implicitly scoped and partially undocumented API.

## User-based authentication prevents access control

Because the API originally served the application user interface, it grants access to (human) users,
and so customer code (or configuration) that calls your API will contain someone’s username.
This breaks when that person changes job and you deactivate their account.
You’ll end up with some workaround that messes up license accounting, such as creating user accounts for API users (not real people).

You’ll want to charge more for API access, because in enterprise SaaS it has higher value than access for a single person, but your application can’t tell the difference.
I don’t want to know how you work around this.

## Documentation exposes bad design you can’t fix

No-one designed the API holistically, the way designers approach a user interface.
Instead, developers will have reinvented HTTP features because explaining how the API works to a colleague takes less time than both reading HTTP documentation and adopting a standard approaches.
Customers will struggle, though, so the documentation maintainer will suggest API improvements.
Unfortunately, without an [API versioning strategy](http-api-versioning) the developers can’t make API changes,
so the documentation will have to compensate:

{:.big style="max-width:38em"}
> While you might expect an HTTP error status code in this case, it turns out that the API
> reports success but then includes an error message in the response body.

[Definitely not sarcasm.](https://youtu.be/JcOfFeKXcd4)
You’ve got a problem when documentation warns users about the API.
