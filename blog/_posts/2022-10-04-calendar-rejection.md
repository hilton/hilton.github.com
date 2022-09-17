---
title: Calendar event rejections
description: Status codes for more expressive meeting request rejections
layout: hh
tags: product
image: calendar.jpg
css: "body.writing .series:before{content:''} body.writing .series{width:14.5em}"
---

![](calendar.jpg)

[Towfiqu barbhuiya](https://unsplash.com/photos/jOeh3Lv88xA){:.photocredit}

{:.series}
This article previously appeared as [a Tweet](https://twitter.com/PeterHilton/status/1559203631605452807),
which you may like.

When you work in some roles - and _product manager_ seems like a good example -
you get a lot of meeting requests.
And you send more than you receive.
And while you may enjoy playing calendar Tetris, _declined_ invitations rarely spark joy.

The problem with calendar invitation rejections lies in how little information they contain, typically only a _bit_.
Meanwhile, adding an explanatory comment when declining an invitation predictably lacks popularity.

Calendar software needs to adapt a broader vocabulary and a better user experience for selecting from a list of standard responses.
After all, as every product manager knows, _how_ you say ‘no’ matters more than how _often_ you say it.

{:#S400}
## 400 Agenda Missing

A proper meeting request specifies the meeting’s purpose, agenda, or both.
Some invitees don’t care, because they always already know about the meeting.
Otherwise, failing to include one deserves this basic response, possibly automatically.

{:#S401}
## 401 Talk To My Secretary First

Some people’s fame or importance invites more meeting requests than they can ever accept.
Traditionally, they either burn out and retire to a farm in the countryside, or hire a secretary to guard their time.
This automatic response means that you have to pitch your meeting first.
Note that you cannot always tell whether a rejection comes from a real secretary or a convenient fake persona.

{:#S404}
## 404 On Holiday

This automatic response rejects invitations to a meeting during someone’s holiday.
Etymologically, _holiday_ refers to a day too special for business meetings,
while _vacation_ merely means that someone will have vacated their usual workplace and have a more exotic video call background than usual.

{:#S405}
## 405 Ask On Slack First

This response summarises the sentiment that if you cannot articulate what you want in a coherent sentence or two in a text message, then this invitee cannot afford the time to sit in a meeting while you collect your thoughts.
A track record of unnecessary meetings no doubt makes this response more likely.

{:#S406}
## 406 I Only Do Zoom

_Location negotiation_ allows meeting participants to establish mutually acceptable meeting venues.
This response means _not in person, thank you very much_.
Unfortunately, we don’t have a standard for what _online_ means.

{:#S409}
## 409 Conflict

Most calendar software has failed to adopt the concept of a _blocker_.
This automatic response fixes that for people who prefer not to join two meetings at the same time.

{:#S425}
## 425 Too Early

It turns out that people have different [chronotypes](https://en.wikipedia.org/wiki/Chronotype).
Some invitees will prefer not to join a meeting in the middle of the night (i.e. before 09:00).
Note that this may also relate to time zone issues, which frustrate Australians who work for European companies.

{:#S429}
## 429 Too Many Requests

You can’t always tell by looking at a colleague’s calendar how many meetings they _want_ to have.
Unfortunately, calendars don’t indicate meetings that exceed personal daily and weekly hours totals, or maximum duration without a break.
This response implements rate-limiting for calendars, and indicates how long you have to wait for a meeting.

{:#S451}
## 451 Unavailable For Legal Reasons

Finally, this rarely used response code covers a variety of situations that prevent an invitee from accepting your meeting request, from
[gardening leave](https://en.wikipedia.org/wiki/Garden_leave) and quarantine to incarceration or deportation.
If you see this at all often, you should probably change jobs.
