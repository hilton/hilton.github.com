---
title: Numbers that aren’t numbers
description: How to get used to the idea of your first presentation
layout: hh
tags: design
---

Software that lets you configure data input - from spreadsheets to forms - often gives you a way to specify whether each input expects a number, date, email address or other text fragment.
These [data types](https://en.wikipedia.org/wiki/Data_type) 
help keep the data clean, and also allow specific input controls, such as a date picker.
Choosing the right data type doesn’t usually pose problems, but occasionally, you’ll choose the obvious data type instead of the _correct_ one.

## Non-numeric ‘numbers’

It turns out that some ‘numbers’ don’t work properly if you use a _number_ data type, as in these examples.

| Data name | Example | Problem with _number_ data type
| --- | --- | ---
[National insurance number](https://en.wikipedia.org/wiki/National_Insurance_number) | QQ123456C | Letters
[International Bank Account Number](https://en.wikipedia.org/wiki/International_Bank_Account_Number) | NL20 INGB 0001 2345 67 | Letters and spaces
[Telephone number](https://en.wikipedia.org/wiki/Telephone_numbers_in_the_Netherlands) | 088 585 1585 | Significant leading zero
[House number](https://en.wikipedia.org/wiki/House_numbering) | 12a | Letter suffix
[Aircraft tail number](https://en.wikipedia.org/wiki/Aircraft_registration) | G-KELS | No digits at all!

The list goes on, with myriad order numbers and customer numbers in business, many of which contain letters that you can’t enter on the numeric keypad your phone helpfully shows when you need to enter a number.

## Store data with ‘number’ in the name as text

As you might guess from the table above, the data modelling rule of thumb for data types in business software dictates the following rule of thumb.

<blockquote class="big solid-one">
<p>Use a <em>text</em> data type for any data whose name includes the word <em>number</em>.</p>
</blockquote>

If this disturbs you at all, then you might appreciate an explanation.
It turns out that the word _number_ means more than one thing.

## Programming language vs everyday language

I recently heard about a hospital patient information system that uniquely identified patients by their patient number.
When this system’s replacement used the term patient ID (PID), hospital staff took no time to start referring to a patient’s _PID number_.

In the context of programming, number refers to a strictly numeric value.
However, in everyday language, number sometimes means unique identifier.
While this may surprise some programmers, normal people (i.e. non-programmers) don’t habitually use the phrase unique identifier in conversation.
Instead, if they make the mistake of using software development jargon in a user interface, people using the software will probably _correct_ the name.

## The data type naming problem

Non-numeric ‘numbers’ present a design challenge for software that requires non-programmers to select the appropriate data type.
Relying on documentation, such as this article, to explain why they should use a _text_ type seems unsatisfying.

Introducing a new text data type for the other kind of number might help avoid confusion, especially with useful additional functionality such as enforcing a particular format or validation rules.
So what should we call it?

* Unique number
* Identifying number
* Serial number

We would actually use _serial number_ in some cases, but while it sounds right for a bicycle, for example, it doesn’t work as well for a patient.
Unfortunately, the generic term for the bicycle or patient - _entity_ - takes us back to where we started: programming jargon.
