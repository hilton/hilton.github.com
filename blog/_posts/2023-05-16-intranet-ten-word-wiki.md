---
title: Intranet ten word wiki
description: Using Notion to maintain a glossary with correct entry length
layout: hh
tags: documentation
css: "article img { box-shadow: 0 0 6px 2px #ccc; padding:15px; } article p:has(img) { margin:20px 0; }"
---

<!--
| Term | Entry |
| ---  | ---   |
| Excel      | One of the two kinds of UI. See also: Word. |
| Jira       | Will continuously accumulate software bugs until the end of time |
| Outlook    | Combines the horror of meetings with the horror of email |
| PowerPoint | Tool for presenting too much text in the wrong font |
| Slack      | Tool for telling colleagues they’re doing threads wrong, using emoji |
| Teams      | Escalates meetings you were going to avoid to group chats |
| Word       | One of the two kinds of UI. See also: Excel. |
-->

In 2010, the now-defunct community wiki Ten Word Wiki - _tenwordwiki.com_ - 
introduced a fun constrained writing challenge:
define everything in exactly ten words.
From the web site, via
[Wayback machine](https://web.archive.org/web/20100116030935/http://tenwordwiki.wikispot.org/):

{:.big style="max-width:46em"}
> Ten Word Wiki is an Encyclopedia for the ADD generation.
> 
> We Describe Everything In Ten words, Look At The Index
> 
> Rules, We Need Rules, There Always Has To Be Rules
> 
> Describe your subject in ten words. No more, no less.

Ten Word Wiki originally used a generic wiki, with one entry per page.
Most of the entries included one or two links to other entries, but you could only find  most entries via the index.
Given each entry’s short length, I’ve occasionally wondered if a different platform might work better.

## Notion implementation

You can maintain your own Ten Word Wiki in a 
[Notion](https://en.wikipedia.org/wiki/Notion_(productivity_software)) database.
This works pretty well, because of its views and formula properties.

A database view provides a sorted list of entries, showing one’s _term_ and _entry_:

![A ten word wiki as a Notion database view](10ww/included.webp)

You can use an  _Include?_ property with values yes/no/maybe to filter the list of _included entries_.
When you group a view by  this property, you can expand or collapse each group, and see the number of entries in each group:

![Notion view: entries grouped by inclusion status](10ww/inclusion.webp)

To make editing easier, a _Words_ formula property counts words in the _Entry_ property value,
using a word count formula:

	if(length(prop("Entry")) > 0, length(replaceAll(prop("Entry"), "[^ ]", "")) + 1, 0)

A _Validity_ formula then uses the word count to mark valid entries:

	if(prop("Words") == 10, "🟢 Valid", "🔴 Invalid")

You can then edit invalid entries in an _Entries to fix_ view that filters on _Validity_ and shows the word  count.
This shows you how many words you need to add or remove:

![Notion view: entries whose word count is not 10](10ww/fix.webp)

Finally, an overview shows all properties:

![Notion view: all entries and all properties](10ww/all.webp)

Unfortunately, Ten Word Wiki entertained its audience, but not enough of them found it useful, and it didn’t survive.
The concept deserves a more valuable use case.

## Intranet glossary

A company glossary on the intranet can help new joiners understand what everyone’s talking about, while exposing the amount of gratuitous company-specific jargon in use.
In a product company a product glossary can also help people use consistent naming in conversations, user interfaces, and documentation.

Despite an intranet glossary’s potential usefulness, the original Ten Word Wiki’s rules highlighted their typical flaws.
Glossary entries have too many or too few words, and hardly any humour at all.
Perhaps you’ll have more fun with a glossary in the style of Ten Word Wiki.
