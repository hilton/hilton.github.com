---
title: Minimum viable bug report
description: The most important bug report information… to start with
layout: hh
tags: software
image: bug-ladybird.jpg
---

![](bug-ladybird.jpg)

[Samuel Myles](https://unsplash.com/photos/CdX0FV_hIVA){:.photocredit}

Good bug reports cover five topics, in the following order of priority:

1. Observed behaviour
2. Expected behaviour
3. Context and environment
4. Reproduction steps
5. Consequences and workaround

Use this as a checklist for support request templates: what to include in a bug report.
This article describes the first part:
the observed behaviour that a good bug report describes.

## Minimum viable bug report

A minimum viable bug report provides the smallest amount of useful information

{:.big}
> ‘It doesn’t work’  
> \- worst bug report ever

A bug report that says that something _doesn’t work_ consists of no more than a cry for help - the customer support equivalent of sending _hello_ as a chat message and waiting for someone to respond before telling them what you want.

[no hello](https://www.nohello.net/) explains why you shouldn’t send start a conversation in a chat with _hi_.
Similarly, when you ask a support team to open a support ticket before you tell describe the problem, you waste your time and theirs.

Instead, describe a specific problem.
Stick to the facts, and describe exactly what you observed.
And while the minimum viable bug report provides at least some useful information, it doesn’t provide enough.

## Error message

Software that doesn’t work often shows error messages.
Sometimes they even help identify the problem.

{:.big.solid-two}
> ‘It showed an error message’  
> \- passive-aggressive bug report

If you report seeing an error message without giving the text, you just trolled the support team.
Always copy-paste an error message’s text, when you see one, and include it in the bug report.

Ideally, the error message will include a unique error ID that the support team can use to find the corresponding log message.
This allows them to investigate related log messages that provide more context, and reduce the number of requests for further information about what was happening at the time.

If you can’t easily copy-paste an error message that you can see in the user interface, file a bug report about the broken UI.
And you do have no choice, make a screenshot of the error message and send that instead.

## Screenshot

Provide a screenshot.
No-one wants a screenshot of an error message, because then the support team has to re-type the message or error ID to search for it in the logs, but a screenshot can provide other clues.

A screenshot of the whole screen, as long as it doesn’t include sensitive data, often gives useful context that other information doesn’t make explicit.
Screenshots might show which part of the application broke, what was happening at the time, what data was present or missing, and a thousand words of other context that the bug report otherwise doesn’t include.

## Summary

For bonus points, summarise the bug report in a short phrase the support team can use as its title.
They’ll probably change it, like how newspaper sub-editors write the headlines instead of the journalists, but a summary can capture which aspect of the problem matters most.

A good title summarises the observed problem - _X is broken_ - rather than summarising a solution such as _Fix Y_.
After all, the development team doesn’t always know how to fix the bug at first, let alone the reporter.
