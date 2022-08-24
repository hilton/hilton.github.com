---
title: IBAN support for no-code platforms
description: International Bank Account Numbers and data type design decisions
layout: hh
tags: NoCode
image: credit-card.jpg
---

![](credit-card.jpg)

<a class="unsplash" href="https://unsplash.com/photos/idNOBU5k_80" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Paul Felberbauer</span></a>

*[IBAN]: International Bank Account Number
*[EAN]: European Article Number - product identifier, typically used with bar codes
*[IMEI]: International Mobile Equipment Identity - mobile phone identifier
*[ISBN]: International Standard Book Number - the other bar code on a book

[International Bank Account Numbers](https://en.wikipedia.org/wiki/International_Bank_Account_Number)
(IBAN) standardise bank account identifiers.
Like other [so-called numbers](non-numeric-numbers), an IBAN has a specific structure that includes a two-letter country code and check digits that mitigate transcription errors.

Business software commonly includes standardised data, such as IBANs, that facilitate international commerce.
These standardised data formats allow for special handling, for input, validation and formatting.

## Traditional business software development

When software developers build business software, a lot of effort goes into handling data such as bank account numbers.
To mitigate the cost of errors, software user interfaces can guide user input, check for certain kinds of input errors, and format values in helpful ways.
While an IBAN consists of letters and digits, conceptually, we usually read them in groups of four characters separated by spaces, because that makes them easier to transcribe correctly.
The IBAN standard also includes an 
[algorithm for verifying the check digits](https://en.wikipedia.org/wiki/International_Bank_Account_Number#Validating_the_IBAN).

{:.big style="font-size:145%" title="An example IBAN"}
> GB98 MIDL 0700 9312 3456 78

Writing code to handle input, validation and formatting for specific data types requires significant software development effort.
It also involves complexity that leads to extra time for testing and fixing bugs.
Professional developers turn to open-source libraries for these specifics, such as 
[iban4j](https://github.com/arturmkrtchyan/iban4j) and
[java-iban](https://github.com/barend/java-iban),
so they don’t have to become IBAN experts and implement the algorithms themselves
(and then fix the inevitable bugs).

## No-code automation

People using no-code automation platforms have the same challenge when working with specialised data such as IBANs.
However, those no-code platforms don’t generally support custom behaviour, such as IBAN input guidance, validation and formatting.

From the perspective of the people building the no-code platforms themselves, this scenario introduces a tough design decision.
No-code automation has to choose from the following options.

## Basic data types

Just because you could probably build IBAN validation in a Notion formula, doesn’t mean you _should_.
Meanwhile, builders have to get by treating IBAN as text, and don’t get the user interface that online banking offers, at eye-wateringly high development costs when compared to a no-code solution.
No-code platforms can make this trade-off, and accept a basic user experience and data integrity challenges, and benefit from a simpler builder experience.

## Industry-specific data types

For some applications, no-code builders won’t accept the compromises that come from treating IBANs like other kinds of text, and platform vendors will add support.
However, they probably can’t add support for every kind of standardised data, 
such as 
[EAN codes](https://en.wikipedia.org/wiki/International_Article_Number),
[IMEI](https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity),
[Incoterms](https://en.wikipedia.org/wiki/Incoterms) and
[ISBN](https://en.wikipedia.org/wiki/International_Standard_Book_Number).
No-code platforms may focus on a specific industry vertical, such as banking and finance, and support that domain’s specialised data types, such as IBAN.

## Extensible data types

Extensible no-code platforms don’t accept the limitations of simplification or industry focus, and could allow their customers or partners to develop custom data types.
Vendors might make the platform extensible enough to allow pluggable data types that provide their own input user interface, data validation and formatting.
Whether or when this happens matters less than the fact that it could:
no-code limitations’ belong to the current state of the art, not to the future.
