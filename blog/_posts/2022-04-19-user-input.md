---
title: Guide user input
description: How to fix, hint, and validate before complaining
layout: hh
tags: design
image: keyboard.jpg
css: "label {font-weight:bold; margin-left:0.5em} form { padding:1em; margin:1em 0; background-color: #f0f0f0; } form.good {background-color:#DAF2EE} form.bad {background-color:#FFF3CC} small { padding:0 0.5em; }"
---

![Computer keyboard](keyboard.jpg)

[Luis VIllafranca](https://unsplash.com/photos/A6BZj3PY7L4){:.photocredit}

Building a software product doesn’t involve anything harder than
[naming things]()
until the general public arrive.
Whatever your product user interface asks for, people will insist on typing things in _wrong_ and blaming you for the consequences.

You could try preventing users from giving you bad data in the first place, but then you might as well avoid foods you don’t like by refusing to eat.
Instead, guide user input in stages.

## Fix

<form class="bad">
❌ <label for="phone">Phone number:</label> <input id="phone"> <small>no spaces</small> 🙄
</form>

Many forms on the web include a phone number field, with a label containing the instruction _no spaces_.
If you choose to respond to the variety of
[telephone number formats](telephone-number-formats)
by storing them without spaces or punctuation, don’t make people type in numbers in that format.
Instead, write code to remove the spaces.

<form class="good">
👍🏻 <label for="phone2">Phone number:</label> <input id="phone2">
</form>

The same applies for other [so-called numbers](non-numeric-numbers)
that people format in different ways, such as credit card numbers or a specific country’s post codes.
Don’t start by rejecting invalid input. Do that _last_, after other tactics failed.
First, identify cases where you can safely fix bad input.

## Hint

<form class="bad">
❌ <label for="booking">Booking reference:</label> <input id="booking"> 🤔
</form>

If you frequently travel by plane, you get used to airline software asking for a  [booking reference](https://en.wikipedia.org/wiki/Record_locator)
that looks like something like `KZVGX5`, to look up a reservation.
However, industries that don’t all use similar 
[computer reservation systems](https://en.wikipedia.org/wiki/Computer_reservation_system)
might have reference numbers you don’t recognise and can’t easily find in booking confirmation emails.
Hint text next next to a form input field can tell you what to look for.

<form class="good">
👍🏻 <label for="booking">Booking reference:</label> <input id="booking"> <small>6 letters or digits. e.g. KZVGX5</small>
</form>

When you don’t accept all possible user input, communicate your expectations.
Use hint text to describe valid values.

## Report bad input

<form class="bad">
❌ <label for="age">Age:</label> <input id="age" value="XL"> <span style="color:#DF5A49">must be a number</span>
</form>

When someone enters their shoe size instead of their age, your software should do three things:

1. notice the error (validate), instead of trying to use obviously wrong data
2. inform the user, instead of failing silently
3. stay neutral and nice, instead of scolding the user.

When you tell people what you expect, they will still enter the wrong value anyway, so validate user input according to the requirements your hint text states.

<form class="good">
👍🏻 <label for="age">Age:</label> <input id="age" value="XL" style="color:#DF5A49"> <small>number</small> <span style="color:#DF5A49">⚠︎ Not a number</span>
</form>

When you report a problem, note that hint text and the corresponding validation error message differ.
Hint text describes a valid value, while a validation error message describes a problem.
