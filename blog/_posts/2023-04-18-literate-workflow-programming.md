---
title: Literate workflow programming
description: How n8n fills a gap in graphical workflow model notations
layout: hh
tags: documentation
css: "a:hover img { box-shadow: 0 0 6px 2px #428bca; }"
image: n8n/notes.png
---

Software maintenance occasionally involves struggling to understand things that someone else built.
Other people, including your past self, would ideally have explained what they were thinking.
Maintainable software components often require inline documentation to explain
[three things that the implementation itself cannot show](3-kinds-of-good-comments):
why the component exists, implementation choices, or tradeoffs that lead to pre-conditions, restrictions and limitations.

## Direct annotations

Technical documentation usually separates diagrams from their explanations, which appear in captions or footnotes elsewhere on the page.
But when we explain a diagram in a more flexible medium - on a whiteboard or on the back of a napkin - we find it more natural and readable to write directly on the diagram.
We can do this documentation as well.

[Kathy Sierra](https://en.wikipedia.org/wiki/Kathy_Sierra)
used direct annotation to great effect in O’Reilly’s successful
[Head First](https://en.wikipedia.org/wiki/Head_First_(book_series)) technical book series.
This example uses ‘handwritten’ annotations to explain Java code syntax, right next to where the syntax appears:

![An annotated code example from the book Head First Java](head-first-java.jpg){: style="width:702px"}

[The Head First Formula](https://web.archive.org/web/20180219200945/http://www.headfirstlabs.com/readme.php)
explains this practice of directly annotating illustrations,
which apparently makes the explanation more effective:

> putting words within the pictures they describe (as opposed to somewhere else in the page,
> like a caption or in the body text) causes your brain to try to makes sense of how the words and picture relate

A previous series on this blog applied this idea to [API documentation annotations](api-docs-annotations).
You might expect no-code worklow automation to support direct annotations as well.

## The workflow annotation gap

Workflow automation tools typically use some kind of graphical process modelling language, such as
[BPMN](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation),
which visualises events, tasks and decisions.
For example, the following diagram, drawn with the [bpmn.io](https://bpmn.io) diagram editor, uses
[text annotations](https://docs.camunda.io/docs/components/modeler/bpmn/bpmn-coverage/#artifacts)
in green to add explanations to a single task (left), a marked group of tasks (right), and the whole process (bottom).

[![A BPMN diagram with text annotations](update-spreadsheet.bpmn.svg)](update-spreadsheet.bpmn.svg)

However, workflow automation platforms don’t usually support text annotations like these in their visual languages, BPMN or otherwise.
Ironically, legacy programming languages do always support inline documentation via a
[code comments](https://en.wikipedia.org/wiki/Comment_(computer_programming)) syntax.

## n8n workflow notes

[n8n](https://n8n.io)’s no-code [workflow library](https://n8n.io/workflows/) offers an exception.
Some of the workflow examples use direct annotation to document the workflow.
For example, the
[Send a ChatGPT email reply and save responses to Google Sheets](https://n8n.io/workflows/1898-send-a-chatgpt-email-reply-and-save-responses-to-google-sheets/)
workflow uses yellow notes to document both individual nodes and sections of the workflow:

[![Yellow notes that document one or more workflow steps](n8n/notes.webp)](n8n/notes.webp)

This uses n8n’s [sticky notes](https://docs.n8n.io/workflows/components/sticky-notes/)
feature to add resizable notes that you edit by double-clicking a note and editing
[Markdown](https://en.wikipedia.org/wiki/Markdown).
These notes improve on code comments in legacy programming, by supporting rich text content, and by letting you resize a note to indicate an area of the diagram.
No arrows necessary.

## Literate workflow programming

This n8n example brings aspects of an old idea to workflow automation.
[Literate programming](https://en.wikipedia.org/wiki/Literate_programming)
proposed embedding code with its own long-form explanation in prose.
Applied to graphical workflows, this can add missing structure and narrative, and perhaps make self-documenting workflows less of a fantasy.

Unfortunately for programmers who also like writing, literate programming never caught on.
Only time will tell whether other graphical workflow tools and their users follow n8n’s example.
