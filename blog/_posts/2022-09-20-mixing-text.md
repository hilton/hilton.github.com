---
title: Mixing kinds of text
description: Where embedding one kind of text in another goes bad
layout: hh
tags: data DDD
image: detour-sign.jpg
---

![](detour-sign.jpg)

[Ussama Azam](https://unsplash.com/photos/kMb4qE_zj3Q){:.photocredit}

{:.series}
1. [Modelling text as writing](modelling-text-writing)
2. [Modelling text as symbols](modelling-text-symbols)
3. [Modelling text as data and code](modelling-text-data-code)
4. Mixing kinds of text

Data modelling usually separates text from numbers and dates, but ignores differences between four kinds of text:
[writing](modelling-text-writing), [symbols](modelling-text-symbols), [data and code](modelling-text-data-code).
You probably don’t usually worry about this, unless you make a habit of overthinking modelling.
You _should_ think about them, though, whenever you decide to mix them.

## Mostly harmless embedding

Four kinds of embedding cause the least harm.

1. **Embedding writing in other writing** - using quotation marks and quotation blocks
2. **Embedding writing in code or data** - literal text values
3. **Embedding symbols in writing** - often using quotation marks or emphasis
4. **Embedding symbols in code or data** - atomic text values

More sophisticated systems separate writing instead of embedding it.
[Topic-based authoring](https://en.wikipedia.org/wiki/Topic-based_authoring)
allows technical writers to embed writing in other writing, to assemble content from smaller blocks.
[Content management systems](https://en.wikipedia.org/wiki/Content_management_system) and
[localisation systems](https://en.wikipedia.org/wiki/Internationalization_and_localization)
make it easier to embed writing in code, in web sites and other software, to separate writing and coding environments.

## Avoid embedding data in different kinds of text

Embedding structured data in other kinds of text causes character escaping and content type identification issues.
Escaping causes ugly mixed data formats, and many escaped characters.

Having seen both, I find it hard to say whether embedding XML in JSON offends me more than embedding JSON in XML, or the other way around.
For example, a system built during the XML age might include this:

```xml
<greeting><message lang="en" style="formal">Hello, world!</message></greeting>
```

Later, in the JSON age, lazy integration with another system might fail to replace the XML model with JSON:

{: style="width:42em"}
```json
{
   "type": "log",
   "level": "info",
   "body": "<greeting><message lang=\"en\" style=\"formal\">Hello, world!</message></greeting>"
}
```

The worst example of this I’ve seen appeared in an HTTP API for validating XML that required the XML document embedded in a JSON request body.
Needless to say, the API didn’t do HTTP content negotiation correctly.

For the other way around, you can choose between two ugly options. The first option requires escaping quotes, and a few other XML characters:

```xml
<greeting>
   <message lang="en" style="formal">Hello, world!</message>
   <notification>
      { &quot;type&quot;: &quot;log&quot;, &quot;level&quot;: &quot;info&quot; }
   <notification>
</greeting>
```

The second approach embeds an unparsed character data (`CDATA`) block:

```xml
<greeting>
   <message lang="en" style="formal">Hello, world!</message>
   <notification><![CDATA[ { "type": "log", "level": "info" } ]]><notification>
</greeting>
```

When you do this, your application requires special processing to handle a different content type for part of the data.
Making the content type explicit would solve the wrong problem; instead, avoid mixing types when combining data.
In most cases, do it all in JSON.

Note that making the content type explicit does make sense when embedding data in writing.
For example, the first XML fragment (above), appears in
[this article’s Markdown source](https://raw.githubusercontent.com/hilton/hilton.github.com/master/blog/_posts/2022-09-20-mixing-text.md)
as:

```
```xml
<greeting><message lang="en" style="formal">Hello, world!</message></greeting>
``` 
```

## Use MIME types to identify embedded data

Unfortunately, Markdown doesn’t have a standard way to indicate the embedded content type, and GitHub-Flavoured Markdown’s
[Fenced code blocks](https://github.github.com/gfm/#fenced-code-blocks)
use `xml` instead of a `text/xml` MIME type.
This matters, because without a standard way to identify the embedded data, you need a custom software implementation to handle the combination.

## Avoid embedding code in data

The same applies to embedding code in data, as when saving code in a database.
Store code separately from other types of code and data, and store the MIME type separately.
As for embedding code in code, in the same file, let’s pretend that never happens.

## Don’t embed text in symbols

Identifiers and other symbols have atomic structure, so you can’t embed anything in them.
Good identifiers, that is.
Software designers sometimes embed data in identifiers, such as putting the year in a registration number, or a 
[gender in a personal number](https://en.wikipedia.org/wiki/National_identification_number#Estonia).
Don’t do this.
