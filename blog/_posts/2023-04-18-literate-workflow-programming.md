---
title: Literate workflow programming
description: Simpler more accessible tools to manage product development
layout: hh
tags: documentation
css: "a:hover img { box-shadow: 0 0 6px 2px #428bca; }"
image: n8n/notes.png
---

Software maintenance occasionally involves struggling to understand things that someone else built.
Other people, including your past self, would ideally have explained what they were thinking.
However, workflow automation platforms don’t all support inline documentation.

## The BPMN annotation gap

Some workflow automation tools use the
[BPMN](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation)
visual process modelling language to define workflows’ events, tasks and decisions.
But however clearly the notation expresses what this process _does_,
it can’t explain [why it exists or the choices its author made](3-kinds-of-good-comments).
A diagram such as the following will always lead to questions the notation cannot answer:

[![A BPMN diagram](n8n/update-spreadsheet.bpmn.svg)](n8n/update-spreadsheet.bpmn.svg)

In theory, you can add more information to a BPMN diagram such as the above with
[text annotation artifacts](https://docs.camunda.io/docs/components/modeler/bpmn/bpmn-coverage/#artifacts).
However, I’ve never seen text annotations in a workflow automation platform’s visual language, BPMN or otherwise.

Adding explanations to the diagram above would require text outside the diagram.
In this case, I didn’t use BPMN text annotations because the
[bpmn.io](https://bpmn.io) diagram editor I used doesn’t enable them by default.

## Direct annotations

Technical documentation usually separates diagrams from their explanations, which appear in captions or footnotes elsewhere on the page.
But when we explain a diagram in a more flexible medium - on a whiteboard or on the back of a napkin - we find it more natural and readable to write directly on the diagram.

[Kathy Sierra](https://en.wikipedia.org/wiki/Kathy_Sierra)
used direct annotation to great effect in O’Reilly’s successful
[Head First](https://en.wikipedia.org/wiki/Head_First_(book_series)) technical book series:
This code example uses ‘handwritten’ annotations to explain parts of the code where they appear:

![An annotated code example from the book Head First Java](head-first-java.jpg){: style="width:702px"}

[The Head First Formula](https://web.archive.org/web/20180219200945/http://www.headfirstlabs.com/readme.php)
explains this practice of directly annotating illustrations:

> putting words within the pictures they describe (as opposed to somewhere else in the page,
> like a caption or in the body text) causes your brain to try to makes sense of how the words and picture relate

A previous series on this blog applied this idea to [API documentation annotations](api-docs-annotations).
Meanwhile, it turns out that at least one no-code automation tool makes it possible to use the same idea in graphical workflows.

## n8n workflow notes

[n8n](https://n8n.io)’s no-code [workflow library](https://n8n.io/workflows/)
uses direct annotation to document some of the workflow examples.
For example, the
[Send a ChatGPT email reply and save responses to Google Sheets](https://n8n.io/workflows/1898-send-a-chatgpt-email-reply-and-save-responses-to-google-sheets/)
workflow uses yellow notes to document both individual nodes and sections of the workflow:

[![Yellow notes that document one or more workflow steps](n8n/notes.webp)](n8n/notes.webp)

This uses n8n’s [sticky notes](https://docs.n8n.io/workflows/components/sticky-notes/)
feature to add resizable notes that you edit by double-clicking a note and entering Markdown.
These notes improve on code comments in legacy programming, by supporting rich text content, and by letting you resize a note to indicate an area of the diagram.
No arrows necessary.

## Literate workflow programming

This n8n example brings aspects of an old idea to workflow automation.
[Literate programming](https://en.wikipedia.org/wiki/Literate_programming)
proposed embedding code with its own long-form explanation in prose.

Unfortunately for programmers who also like writing, literate programming never caught on.
Only time will tell whether other graphical workflow tools follow n8n’s example.
