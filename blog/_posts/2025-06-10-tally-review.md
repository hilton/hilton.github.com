---
title: "Product review: Tally"
description: building a public product feedback form with a European alternative
layout: hh
tags: product review
image: tally/preview-crop.png
---

[Tally](https://tally.so)
offer a GDPR-compliant web-based forms builder that stores form data in Europe.
To try it out, I built a flexible product feedback form.

## Web forms

Tally solves the problem of building complex forms and publishing them on the web.

![A product feedback form, built with Tally](tally/preview.webp)

You get more options to [customise your form’s appearance](https://tally.so/help/customize-your-form)
than with Google Forms, and a better editor experience.

## Form editor

Editing a Tally form resembles editing a document in [Notion](intranet-ten-word-wiki).
You insert, drag and configure _blocks_ with slick
[direct manipulation](https://en.wikipedia.org/wiki/Direct_manipulation_interface).

![Form builder ‘Insert block below’ button, and the prompt ‘Type / to insert blocks’](tally/insert-block.webp)

The _insert block_ pop-up lists [many block types](https://tally.so/help/features),
with inline documentation and previews:

![Inserting a block from the dialogue box that lists block types](tally/insert-dialogue.webp)

Alternatively, as in a Notion document, you can type a forward slash and autocomplete block names, e.g. `/checkboxes`.
I love how quickly this lets you _type_ a form’s outline and content, deferring detailed configuration.

## Integration

Forms collect data, which makes it natural to want integration with other destinations for that data.
You browse form submissions in the built-in dashboard to, but also connect other tools.

[Google Sheets integration](https://tally.so/help/google-sheets-integration)
creates a new spreadsheet, and adds form submissions to it.
I used this to give colleagues access to the whole set of form submissions, for reporting, without needing to log in to Tally.

[Slack integration](https://tally.so/help/slack-integration)
posts each form submission as a message in a selected channel.
You format the message with Markdown, with placeholders for form values.
I used this to publish anonymised feedback in a `#product-feedback` Slack channel,
so that all team members could see customer feedback.

## Localisation

Tally has partial support for form localisation.
For each form, select one of
[53 supported languages](https://tally.so/help/supported-languages) (at the time of writing)
for the form user-interface text, such as button labels and error messages.

To localise form content, you have to duplicate your form, and maintain a separate copy.
This worked fine for one relatively simple form and two languages,
but this would become harder to maintain with many languages, if you add conditional logic.

## Conditional fields

Designing forms becomes more complicated when you wonder whether to include a particular question and conclude that _it depends_.
For example, suppose you offer a customer support follow-up:

![Asking a yes/no multiple-choice question: ‘Would you like us to contact you?’](tally/multple-choice.webp)

On a form like this, you don’t collect your customer’s email address unless they want you to use it.
In Tally, you achieve this with [conditional logic](https://tally.so/help/conditional-form-logic)
that dynamically updates the form when it satisfies a condition:

![Conditional logic: When ‘Would you like us to contact you’ is ‘Yes’, Then show blocks ’Contact email address, Email’](tally/conditional-logic.webp)

In this example, the _Contact email address_ heading at the email input block configurations hide them by default.
The conditional logic then overrides this configuration with a _Show blocks_ action whenever the user has selected _Yes, please contact me_.
I like how clearly Tally implements this, and how subtly this makes it a flexible no-code tool.

## Hidden fields

Tally’s [hidden fields](https://tally.so/help/hidden-fields) led to my favourite discovery.
To lower friction for gathering feedback, we wanted customers to click a star rating in our product user interface,
and pre-populate the star rating.
To do this in a Tally form:

1. add a `rating` hidden field
2. configure star rating’s _default answer_ (initial value) to use the `rating` hidden field’s value
3. in the product user interface, use a different URL query string, e.g. `?rating=5`, in each star’s link, to populate the hidden field.

![Configuring a star rating to use a value](tally/default-answer.webp)

Similarly, use a 	`subject` hidden field to track where in the product the feedback came from.

## Rating

Tally gets five starts. More like this please!

⭐️⭐️⭐️⭐️⭐️
