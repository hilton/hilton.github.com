---
title: Respect people’s full names
description: Don’t call someone’s name ‘invalid’
layout: hh
tags: software design
image: certificate.jpg
---

![A credit card](certificate.jpg)

<a class="unsplash" href="https://unsplash.com/photos/yAGv0G6q7ec" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Марьян Блан</span></a>

*[CTO]: Chief Technology Officer - company executive responsible for technology

In television drama, we recognise idiots by their
[accidental misnaming](https://tvtropes.org/pmwiki/pmwiki.php/Main/AccidentalMisnaming)
and bullies by their
[malicious misnaming](https://tvtropes.org/pmwiki/pmwiki.php/Main/MaliciousMisnaming).
Software designers and developers have their own tropes, and misname people in three ways.

1. Rejecting letters with diacritics - and other ‘special’ characters 
2. Rejecting certain words - [The Scunthorpe Problem](https://en.wikipedia.org/wiki/Scunthorpe_problem)
3. Personal name mutilation - separating words

Software has all kinds of bugs and bad design, but people’s names deserve special consideration.
Your name deserves special consideration.
You take it personally when software, idiots and bullies get it wrong.

## Bad letters and bad words

[Allow all printable characters](allow-all-printable-characters) (earlier in this series)
explains why the first person to say ‘special characters’ loses.
If your software misnames people or rejects their names due to characters you don’t support, you should probably have a chat with your CTO.

[Why Web Filters Don't Work: Penistone and the Scunthorpe Problem](https://www.youtube.com/watch?v=CcZdwX4noCE) (video)
explains why trying to prevent _bad words_ doesn’t work without human assessment or science-fiction artificial intelligence.
Again, if you think your software can judge names’ acceptability, you need to talk to your CTO.

## The complexity of names

Intellectually, software developers and designers understand real-world complexity, and know about
[Falsehoods Programmers Believe About Names](https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/)
([additional information](https://www.w3.org/International/wiki/Personal_names)).
However, software still gets this wrong, despite these examples and advice on questions such as 
[Personal names around the world: To split or not to split?](https://www.w3.org/International/questions/qa-personal-names#singlefield)
(tl;dr _don’t_).

Writing on a different topic,
[Simon Wardley](https://twitter.com/swardley/status/1357635553093693440)
offers advice that may help here:

> Either you make sure your management has the cognitive capability to manage a complex and complicated environment or you pretend what is being managed is simple.

Perhaps modelling peoples’ names as _first name_ followed by _last name_ represent the same naïve simplification as management consulting’s beloved 2×2 matrices.
A discussion on management consulting’s value lies outside this article’s scope, but I can say that splitting personal names into _first_ and _last_ doesn’t work
Don’t take too much comfort in _most_ of your competitors also getting this wrong.

## Disrespectful name mangling

Some software deliberately breaks people’s names, in a misguided attempt to make them conform to a simplistic model.
Kees de Kooter maintains a
[Capitalised Last Name Hall of Shame](https://notestack.io/public/achternaam-moet-hoofdletter-hall-of-shame/f5f4302b-1c9e-4a1c-862d-9c4770350499)
(in Dutch, [translated](https://translate.google.com/translate?sl=nl&tl=en&u=https://notestack.io/public/achternaam-moet-hoofdletter-hall-of-shame/f5f4302b-1c9e-4a1c-862d-9c4770350499)),
for web sites that force the _last name’s_ first letter to upper case.
His surname starts with a lower-case ‘d’.

Meanwhile, Patrick McKenzie, listed the falsehoods linked above in response to an article by John Graham-Cumming, whose surname contains punctuation that web sites cannot handle.
Both writers have last names that contain two upper-case letters.

## Respect people’s full names

Don’t call people’s names invalid, or otherwise blame them for your software’s inadequacies.
Don’t try to split names up into fields that result in using names wrongly.

Instead, use a single _full name_ field for personal names, and ask people for additional input if you want to do something more specific than showing their name, such as greeting or sorting.
But most of all, show some respect.
