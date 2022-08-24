---
title: Form builder value styles
description: Word processor paragraph styles as no-code custom data types
layout: hh
tags: NoCode
image: kånken.jpg
---

![](kånken.jpg)

<a class="unsplash" href="https://unsplash.com/photos/psDzkLlifxQ" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Mitchell Griest</span></a>

No-code form builders give non-programmers a way to build custom forms, typically as part of a survey, workflow or decision management tool.
As in other programming environments, authors can typically use built-in form field types, such as _text, number, date_ and _email address_.

Some tools also give you a way to add your own.
You can define custom types, such as a single-valued _price in Euro_, or a _delivery address_ that includes more than one field.
However, no-code form builders haven’t yet settled on an obvious or best way to support user-defined field types.

Word-processors offer an alternative model for custom types.
They let you create user-defined ‘types’ for formatting and layout, but call them _paragraph styles_.

## Paragraph styles and value styles

Word processors offer the convenience of selecting a built-in heading style, but you get more benefit from the ability to change all headings to use a different font, and other document-wide changes.
While styles may seem to focus on making it easy to apply predefined formatting, their more important contribution lies in maintaining consistent styling throughout a document.

By analogy with word-processors, form builders need _value styles_ that preserve consistency between similar fields on different forms whose data shares the same meaning.
Like a paragraph style, a value style defines where you want consistency, starting with formatting.

<details>
<summary>Note: <em>value</em> sounds friendlier and more specific than <em>data</em>.</summary>
This context lets us get away with blurring the distinction between a concrete instance and the abstract category, ignoring the difference between <a href="https://www.martinfowler.com/bliki/EvansClassification.html">value types and entities</a>.
No-code environments can improve their authoring experience with this kind of simplification, and traditional developers often get it wrong anyway.
</details>

## Editing rules and display formats

Paragraph styles typically define formatting in a _font_ section: font family, bold, italic, underline, colour, etc.
In a value style, this corresponds to its _display format_.
For a value style for a single underlying value, such as a price, this mostly corresponds to editing and display formats.
Editing includes rules about valid values, such as no negative prices.
Display formats can include currency symbols and a fixed number of decimal places.

Values that have nested fields, such as postal addresses or prices with variable currencies, introduce more complexity but can otherwise work the same way.
This stretches the analogy, though, because while an address contains separate city and post code values, word processor paragraph styles don’t include either structured data or much metadata.
(Perhaps a paragraph’s language or its list of tab stops come closest.)

## Defining styles

Paragraph styles’ type definition approach seems plausible, but somewhat pointless.
Its benefit turns out to lie in how word processors use direct formatting to define or update styles from examples, instead of up-front definition.

Traditional programming languages generally define types with some kind of explicit type definition, before you create values with that type, instead of starting from examples.
This introduces up-front design that non-programmers usually get to avoid, as in word processors.
No-code platforms would also benefit from that kind of direct manipulation and definition by example.
