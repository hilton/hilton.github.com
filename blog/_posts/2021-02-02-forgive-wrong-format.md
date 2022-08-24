---
title: Forgive user input in the wrong format
description: Don’t make people normalise data manually
layout: hh
tags: software design
image: credit-card.jpg
---

![](credit-card.jpg)

<a class="unsplash" href="https://unsplash.com/photos/idNOBU5k_80" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Paul Felberbauer</span></a>

Credit card numbers typically appear on the card in groups of four digits, separated by spaces.
This makes the number easier to read and transcribe.
Other [non-numeric numbers](non-numeric-numbers), such as account numbers,
also typically have a common display format, often using spaces or punctuation for grouping.
This difference, between the data and its presentation, traps unwary product designers.

## Credit card numbers

Nearly every web site that sells something has credit card number input user interface.
Many get it wrong.
Credit card numbers have eight to nineteen digits
([Wikipedia](https://en.wikipedia.org/wiki/Payment_card_number)),
with most card issuers using at least sixteen digits.
This presents a tough user experience design challenge, because humans can’t keep long numbers in short-term memory.

[The ‘Credit Card Number’ Field Must Allow and Auto-Format Spaces (80% Don’t)](https://baymard.com/blog/credit-card-field-auto-format-spaces)
notes that ‘test subjects were often observed to enter their number in the **same format** in which it is embossed or printed on their physical card’.
Sadly, many web page forms don’t allow this, and appear on the
["No Dashes Or Spaces" Hall of Shame](http://unixwiz.net/ndos-shame.html).

## Post codes

Post code inputs have the same problem. In
[Geen-spaties-in-postcode Hall of Shame](https://notestack.io/public/geen-spaties-in-postcode-hall-of-shame/07d9d10c-1dfb-4412-bdd1-48f1371ec7c5)
(in Dutch, [translated](https://translate.google.com/translate?sl=nl&tl=en&u=https://notestack.io/public/geen-spaties-in-postcode-hall-of-shame/07d9d10c-1dfb-4412-bdd1-48f1371ec7c5)),
[Kees de Kooter](https://twitter.com/kdekooter) explains how this goes wrong.

1. A Dutch post code consists of four digits, **a space**, and two letters, e.g. _1234 AB_.
2. A developer stores the post code in a database **without the space**, e.g. _1234AB_.
3. The developer **mistakenly** thinks the input format must match the storage format.
4. The resulting **form validation rejects user input** that uses the display format, e.g. _1234 AB_.

It doesn’t help that frameworks for building web sites typically include built-in code for rejecting ‘invalid’ user input, but not for normalising ‘numbers’ and codes to their canonical formats.
It also doesn’t help that most countries have more complex post code formats
(while several smaller European countries only use four digits).

## Normalise user input

When people enter credit card numbers, allow them to use spaces and automatically remove them later, to improve usability.
The same applies to other kinds of data with few significant characters, such as phone numbers.
Instead of rejecting user input that doesn’t conform to your storage format, accept variant but equivalent formats for unambiguous data.

Similarly, remove spaces and line breaks at the start and end of most text input - ‘insignificant white space’.
But beware of exceptions, and kinds of data that require more care.

Be extra careful with money amounts, where typos can have larger consequences.
For example, when someone inputs the amount _1,0000_ they might have intended _10,000_ or _1,000_.
In general, don’t make guesses about ambiguous input; instead show a warning.

Don’t assume the same format for input, storage and display.

## Separate input, storage and display formats

Don’t assume the same format for input, storage and display.
Each has multiple possible formats, and they change for different reasons.

* Input formats vary from person to person.
* Display formats vary by region (_locale_).
* Storage formats vary by software system.

Accept any unambiguous input, store it in one normalised format, and display it in the user’s chosen regional format.
And more generally, understand and apply the
[robustness principle](https://en.wikipedia.org/wiki/Robustness_principle).
