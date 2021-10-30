---
title: Respect people’s full names
description: Don’t call someone’s name ‘invalid’
layout: hh
tags: software design
image: certificate.jpg
---

![A document granting permission to drive a train](certificate.jpg)

[Марьян Блан](https://unsplash.com/photos/yAGv0G6q7ec){:.photocredit}

*[CTO]: Chief Technology Officer - company executive responsible for technology

{:#tropes}
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
You take it personally when software, idiots and bullies get your name wrong.

{:#filters}
## Bad letters and bad words

[Allow all printable characters](allow-all-printable-characters) (earlier in this series)
explains why the first person to say ‘special characters’ loses.
If your software misnames people or rejects their names due to characters you don’t support, you should probably have a chat with your CTO.

[Why Web Filters Don't Work: Penistone and the Scunthorpe Problem](https://www.youtube.com/watch?v=CcZdwX4noCE) (video)
explains why trying to prevent _bad words_ doesn’t work without human assessment or science-fiction artificial intelligence.
Or as [@0xabad1dea put it](https://twitter.com/0xabad1dea/status/1358461414852222978):

{:.big style="max-width:31em"}
> you cannot algorithmically distinguish “real” names from “fake” ones and any attempt you make is automatically racist

Again, if you think your software can judge names’ acceptability and without automatic racism, you need to talk to your CTO.

{:#complexity}
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
A discussion on management consulting’s value lies outside this article’s scope, but I can say that splitting personal names into _first_ and _last_ doesn’t work.
And don’t take too much comfort in _most_ of your competitors also getting this wrong.

{:#mangling}
## Disrespectful name mangling

Some software deliberately breaks people’s names, in a misguided attempt to make them conform to a simplistic model.
Kees de Kooter maintains a
[Capitalised Last Name Hall of Shame](https://notestack.io/public/achternaam-moet-hoofdletter-hall-of-shame/f5f4302b-1c9e-4a1c-862d-9c4770350499)
(in Dutch, [translated](https://translate.google.com/translate?sl=nl&tl=en&u=https://notestack.io/public/achternaam-moet-hoofdletter-hall-of-shame/f5f4302b-1c9e-4a1c-862d-9c4770350499)),
for web sites that force the _last name’s_ first letter to upper case.
His surname starts with a lower-case ‘d’.

Meanwhile, Patrick McKenzie listed those 
[falsehoods about names](https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/)
in response to an article by John Graham-Cumming, whose surname contains punctuation that web sites cannot handle.
Both writers have last names that contain two upper-case letters.

{:#respect}
## Respect people’s full names

Don’t call people’s names invalid, or otherwise blame them for your software’s inadequacies.
Don’t try to split names up into fields that result in using names wrongly.

Instead, use a single _full name_ field for personal names, and ask people for additional input if you want to do something more specific than showing their name, such as greeting or sorting.
But most of all, show some respect.
