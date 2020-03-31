---
title: The worst kind of legacy code
description: A supply chain software maintenance project story from 2006
layout: hh
tags: maintenance
image: https://hilton.org.uk/blog/shipping-containers.jpg
---

<!-- 
1. In 2006, at a small consultancy in Rotterdam, who acquired supply chain software.
2. Supply chain visibility is interesting; not big data, but bad data.
3. Complex domain, bad legacy code (i.e. someone else's).
4. No documentation, so reverse-engineered understanding from the code.
5. Started a six-month development project.
6. Decided not to document.
7. High-level technical documentation for the customer, and installation instructions.
8. Don’t know if the system even went into production.
-->

[![Shipping containers](shipping-containers.jpg)](https://unsplash.com/photos/CtI_zen2NSk)

<a class="unsplash" href="https://unsplash.com/photos/CtI_zen2NSk" rel="noopener noreferrer" title="Photo by Sergio Souza"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Sergio Souza</span></a>

I used to work for a small software consultancy in Rotterdam, where we built custom systems for a variety of industries.
Some of us had supply chain management domain expertise, built up over the course of a decade maintaining a warehouse management system.

## Getting into a complex domain

In 2006, my employer acquired a company for its IP and contacts, to subsequently sell a development project to a government customer.
The acquisition included shipment management software, which dealt with things like international shipments and shipping manifest data.
I would call supply chain visibility an _interesting_ domain to work in, because it involves highly optimised business processes, run by lots of companies who don’t trust each other.

The challenge that the photo (above) shows does not lie in the number of shipping containers: 
large container ships carry thousands of containers, not millions.
Supply chain visibility addresses problems like not knowing what each shipping container contains, or where to find the shipping container that contains a particular customer order’s packages.
In theory, each container’s shipping manifest lists its contents.
In practice, supply chain participants struggle to get access to accurate aggregated shipping manifest data.
This system did not manage _big data_; it managed _bad data_.

## The wrong kind of legacy

Given the complex domain, we expected complex code.
We got more than merely complex code: we got complex _legacy code_, which in this case meant _code written by someone else_.
While I had experience with the varying quality of other people’s code, this codebase consisted of the worst 100,000 lines of code I had ever seen.

The system documentation posed a more serious issue: we didn’t get any.
We also had no access to the anyone on the original development team.
We had no choice but to read the code, which didn’t even have comments.

We reverse-engineered our understanding of the system by following the code from its entry points, via the user interface to the back-end.
At this point, any documentation at all would have helped.
On this project I learned the hard way that relying on the code stops seeming like such a good idea when you come across large sections of apparently unused code, and sections of code that clearly don’t work.

## Writing off maintainability

After achieving minimum viable understanding of the code, we committed to making modifications and delivering a production release to our customer six months later.
By this point, we’d decided that we would only deliver this system once, and that it would cost so much to make the code maintainable that we shouldn’t attempt to start documenting it.
During the project, we only wrote some brief high-level technical architecture documentation to give to the customer, along with detailed installation instructions.

![Your legacy system is undocumentable](undocumentable.jpg)

As it happens, I don’t know what happened next.
The customer planned to install the software on a secure government network that we shouldn’t have heard of - not the public Internet - and we would have needed a proper security clearance to find out whether our customer ever actually deployed to a production environment.
Ironically, and fortunately, we therefore had no obligation to maintain the unmaintainable.
