---
title: Software’s process value
description: Why special-purpose software offers more than its functionality
layout: hh
tags: product
image: jars-on-shelf.jpg
---

![Jars on a shelf](jars-on-shelf.jpg)

<a class="unsplash" href="https://unsplash.com/photos/M8TRK8u7A6A" rel="noopener noreferrer" title="Photo by Ajay Meganathan"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Ajay Meganathan</span></a>

<!--
1. Spreadsheets are more flexible, but that isn’t always what you need.
2. Special-purpose software gives you an off-the-shelf process.
3. You don’t need your own process if it won’t give you competitive advantage.
4. Someone else’s generic process will be good enough, maybe better than what you will come up with.
5. You save time by not having to come up with your own process.
6. You save more time by not having to explain it yourself.
7. The art of special-purpose software is providing flexibility as well.
-->

I remember a release planning conversation about when and how to release each roadmap item.
The tricky question concerned _where_ we might track these decisions:
in our dedicated product roadmap or release planning tool, perhaps, or in yet another spreadsheet.

When choosing between special-purpose software and Just Doing It In A Spreadsheet™, you often reach the following conclusion.
You need the flexibility a spreadsheet gives you.
Except when you don’t.

## Flexibility’s price

At the time of writing, GitHub recently announced their first public roadmap.
The [roadmap’s guide](https://github.com/github/roadmap/blob/main/README.md)
lists [release phases](https://github.com/github/roadmap/blob/main/README.md#release-phases): 
namely _alpha_, _beta_ and _ga_ (which look like an odd compromise between an abbreviation for _gamma_ and an initialism for general availability), and gives descriptions for each one.
Most people’s spreadsheets don’t include that much documentation.
Instead, they waste time in meetings caused by different interpretations of what _beta release_ means.

The flexibility you get from a spreadsheet comes at a price: having to come up with your own terms and process, and then explaining them to everyone else.
General-purpose tools provide flexibility;
you get the naming problems and documentation problems for free. 
Product roadmapping software, on the other hand, might already include a _release phase_ field.

## Good enough process

The conventional _alpha-beta-GA_ approach probably suits you fine.
Unless you expect to get competitive advantage from an innovative release process, you have more important things to discuss.
Special-purpose software can address this opportunity by offering a good enough built-in process, giving you time for more interesting problems.

This built-in process may even work better than whatever you could have come up with yourself, or at least what you would have time for.
In particular, it may perform better in both its _execution_ and how people learn to use it.

## The best kind of documentation

Having decided to plan release phases, we would ideally discover that our software vendor had already thought about that, decided on the name _release phase_, included tool support, and documented it all.

Off-the-shelf third-party software has the best documentation:
OPD - _other people’s documentation_. 
You save more time by not having to explain it yourself: the concepts, their names, how to complete tasks, and, significantly, the underlying process.

Other peoples’ documentation tends to have higher quality that what you would write for your ad hoc spreadsheet, in the unlikely event that you habitually add a _README_ or _Introduction_ sheet.
In practice, your management team colleagues don’t document their spreadsheets and their presentation slides do they?

## Requisite flexibility

Returning to the release planning example, we’d have a problem if our software didn’t give us any way to plan release phases.
Even if we happily conformed to the tool’s basic process, we might not accept the software preventing us from planning release phases.

Using off-the-shelf software’s built-in terminology, data model and process does come with a catch: no flexibility at all would lead to unreasonable compromises.
The art of special-purpose software, then, lies in figuring out how to provide just enough flexibility to make it useful without leaving you with a process design problem you don’t want.
