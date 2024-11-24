---
title: Feature name jargon
description: finding out what products call their capabilities
layout: hh
tags: product
image: question-mark.jpg
---

![](question-mark.jpg)

[Towfiqu barbhuiya](https://unsplash.com/photos/oZuBNC-6E2s){:.photocredit}

A fellow product manager recently asked about implementation options for a data collection use case.
I used to work in this solution space, and know at least one useful thing.

## A digital forms use case

They asked how to achieve the following (edited for readability).

> Context: a big public office with a lot of digital forms that we've built for different users.
>
> Use case:
>
> * today, complete form ID-234
> * tomorrow, complete form ID-158 and – depending on the information provided – continue with form ID-698,
> or form ID-111
> * later, complete form ID-111 and, if they enter a date in a certain field,
> trigger form ID-456 on the date they entered.
> 
> I need to code a series of workflows that schedule forms according to previous answers.
>
> I’d like to have something that provides a UI (with customisable look and feel),
> where the user can pick from our libraries of forms, and define behaviours like:
> 
> * ‘if the user answer _yes_ to this question, continue to one form…’, or 
> * ‘if the user enters a date for this question, trigger another form on the specified date’.
> 
> I hope to find a solution to avoid reinventing the wheel.

Workflow automation tools cater for this kind of scenario:
problems that you could _almost_ solve using a series of Google Forms, but with more complexity.

## Workflow automation capabilities

_No-code workflow automation platforms_ don’t all support this use case the same way.
You’ll evaluate how well specific capabilities work.
Our example probably requires the following.

* **Custom forms** – you add fields for data like text, dates, money amounts, list options, and file uploads.
* **Conditional steps** – what happens next depends on what someone entered in earlier form fields.
* **Public forms** – people can submit a form without having a user account, or you paying for a license for them (not necessarily required, given the description above).
* **UI themes** – you use your own logos and colours, so that people recognise your organisation and internal stakeholders like the solution.
* **Integration actions** – send the submitted data to where you need it, e.g. email, add to a spreadsheet, call an API, or save it in a file.
* **Scheduled triggers** – depending on what _trigger a form at a specific date_ means, perhaps send someone a link to a form on a certain date.

Support for these capabilities varies between platforms.

## Capability names

To check which platforms support your use case, you mostly need to know the capability names.

* You probably find **custom forms** and **conditional steps** on any platform.
* Support for **public forms** varies – some tools cater to internal use within an organisation.
* The **integration actions** you need depend on where you want the data to end up, whether the tool has built-in support for that integration, and whether you will involve programmers.
* Relatively few platforms support **scheduled triggers** – the hardest to define of these requirements.

Without feature names, you end up swamped by technical details, and sales demos.
While you don’t want to select a solution based on features, they help you find the tool category you need.

This illustrates the tension between the product management instinct to explore these details of the problem you want to solve,
and simplifying the problem to a list of [‘required’ features](requirements).
Sometimes, using a bit of both gets you there faster.
