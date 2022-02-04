---
title: Allow all printable characters
description: First person to say ‘special characters’ loses
layout: hh
tags: software data design
image: japanese-sign.jpg
---

![A sign which says stop where you are in Japanese and a cherry blossom](japanese-sign.jpg)

<a class="unsplash" href="https://unsplash.com/photos/t-J5BZ1a4fY" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Ryoma Onita</span></a>

Despite [Unicode’s](https://en.wikipedia.org/wiki/Unicode) success,
too much software remains in the 1990s, with limitations on which characters you can use.
We got used to the idea that you can’t use spaces in file names, punctuation in database table names, or any character you like in passwords.
Modern software doesn’t have to perpetuate these limitations, though.

## Don’t give some characters special treatment

Before Unicode, the way software processed text only supported a limited set of characters.
The same piece of text typically couldn’t include more than one or two alphabets, and everything else got called _special characters_.

Unicode makes the whole notion of special characters obsolete, and from 1998 onwards, all Internet standards have had to support it.
Even if it took you twenty years to get that particular memo (i.e. [RFC 2277](https://tools.ietf.org/html/rfc2277)),
by now you should have started allowing all characters everywhere you support the letters A-Z.

## Make everything use UTF-8 by default

Text encodings translate characters to and from the data that software transmits and stores.
Use the UTF-8 encoding for all text in any software you build, unless you have a particular reason not to and the expertise to get that right.

The more components in your system use UTF-8 by default, the more things Just Work, but some software has the wrong default encoding, for backwards compatibility.
Fortunately, using UTF-8 doesn’t require as much effort as it used to, as operating systems, databases and programming languages increasingly do the right thing.
Just don’t build new software that becomes the weakest link, and gets featured on [Fake “Unicode.”](https://twitter.com/fakeunicode)

## Stop inflicting decades-old limitations on modern software

Historical inertia also causes bad character support in modern software:
software designers replicate limitations they learned from old software.
At least emoji have helped:

> ‘I’m really glad that emoji have forced more developers to _actually_ handle Unicode correctly.’ - 
> [Apple did not invent emoji](https://eev.ee/blog/2016/04/12/apple-did-not-invent-emoji/), Evelyn Woods 
> ([@eevee](https://twitter.com/eevee))

Emoji turn out to have value in more than just chat messages, provided that software supports them.
If we can get used to emoji in [document titles in Notion](https://www.notion.so/Page-icons-covers-be694b07c6284ee3800bd71dde495981), 
perhaps we’ll get used to them in our file names, spreadsheets and databases as well.

## Treat underscores with suspicion

File names and databases suffer from a related historical inertia: fear of spaces.
Using underscores instead of spaces may allow you to conveniently skip quote characters, in some contexts,
but that kind of laziness doesn’t justify robbing everyone of spaces.
Meanwhile, you don’t need to quote text in boxes - fields on a form or cells in a spreadsheet.

Underscores deserve suspicion when they replace the forbidden space characters that normal people (not programmers) might naturally try first.
Everything that doesn’t just work makes software hard to use, and arbitrary rules about ‘special characters’ contribute to the horror of typical software ‘usability’.

Progress remains slow, even though modern software’s underlying technologies typically haven’t had those limitations for a decade or two.
Meanwhile, much software development remains fixated on 1970s era Unix tooling, 
principally the idea that everything belongs in a ‘plain text’ file, even after Joel Spolsky explained 
[The Single Most Important Fact About Encodings](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/) back in 2003: 
‘There Ain’t No Such Thing As Plain Text.’
