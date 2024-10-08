---
title: Design one-line activity feed notifications
description: how to automate legible, concise and useful updates
layout: hh
tags: remote collaboration
css: "blockquote em {font-style: normal; color: #555; font-size: 75%;}"
image: headlines.jpg
---

{:.series}
1. [Management information](management-information)
2. [Working out loud](work-out-loud)
3. [Collaboration opportunities](collaboration-opportunities)
4. [Activity feeds](activity-feed)
5. Activity feed design ←
6. [Information pages](information-pages)
7. [Information page URLs](information-page-urls)

![](headlines.jpg)

[Ewien van Bergeijk - Kwant](https://unsplash.com/photos/JWRFUKfGWSk){:.photocredit}

When you [build a team activity feed](activity-feed) using tools’ built-in Slack integrations,
you rarely get any control over their posts’ design.
Only in [rare cases](https://tally.so/help/slack-integration#e4eedb694aa845ec9b63bf879dbed9d1)
can you even customise the text.
When you do get to design activity feed posts,
such as when logging notifications from your own custom automation,
design for readability.
And keep them short.

{:#line}
## Limit notifications to one line

Slack integration in third-party tools, such as 
[Notion](https://www.notion.so/integrations/slack) and 
[Intercom](https://clearfeed.ai/how-to/configure-slack-for-intercom),
typically posts long messages that use at least half a dozen lines.
These notifications resemble email notifications, and typically share the state of some new or updated data, such as a document, pull request, or system error.

Perhaps we should appreciate Slack’s limits these notification presentation options.
While most email notifications should resemble these Slack notifications,
they typically contain far too much content,
starting with [unnecessary salutations](omit-notification-salutations).
Meanwhile, most Slack notifications should fit on one line that states what happened.

{:#what}
## State what happened

[Working out loud](work-out-loud) works better when you stick to facts and changes.
Announcing your current task in a status meeting only wastes time,
if you started a week earlier, and nothing has _changed_ since then.
Similarly, saying what you plan to do in the future doesn’t help anyone understand the present,
and doesn’t always reflect what will really happen.
Making a commitment to do something, however, leaves you with something that just happened.

Like log messages, activity feed notifications share information about something that has happened.
Therefore, write each message as a direct and descriptive statement:

> **Activity feed** _1:37 PM_
> 
> Customer #14159 shared feedback #26535
> 
> Delivery #89793 failed: courier could not find address
> 
> Anna shared meeting recording ‘2024 Q4 sales forecast’

Make each notification a complete sentence, to avoid ambiguity,
but resist the temptation to add fluff or boilerplate.

{:#emoji}
## Use emoji to show categories

Single-line notifications risk becoming a wall of text, whose structure you cannot see.
One heavy-handed solution draws boxes around each notification,
and adds content to make each one stand out more,
but this only reduces information density.
Single-line notifications only need a little visual distinction.

As you add more kinds of notifications to a Slack channel,
it gets harder to see what kind of things have happened.
Start each notification template with a different emoji:

> **Activity feed** _1:37 PM_
> 
> 🗯️ Customer #14159 shared feedback #26535
> 
> 🚚 Delivery #89793 failed: courier could not find address
> 
> 📺 Anna shared meeting recording ‘2024 Q4 sales forecast’

This makes it easier to spot a particular type of notification.

{:#link}
## Link to business objects’ canonical URLs

Attempting clear communication introduces a tension between brevity and detail.
Journalists address this with an [inverted pyramid](https://en.wikipedia.org/wiki/Inverted_pyramid_(journalism)) style.
So does technical writing and user-interface text, including notifications.

Notifications will rarely provide complete information, for when you want to follow up.
Instead of including more context in the notification itself, link to a canonical information page for each business object.

> **Activity feed** _1:37 PM_
> 
> 🗯️ [Customer 14159](http://example.com/customer/14159) shared [feedback 26535](http://example.com/feedback/26535)
> 
> 🚚 [Delivery 89793](http://example.com/feedback/89793) failed: courier could not find address
> 
> 📺 [Anna](https://example.slack.com/team/U023846FFFF) shared meeting recording [2024 Q4 sales forecast](http://example.com/file/pqUOSepEvPe3CWyvx0cbog)

Don’t mention team members’ Slack handles, to disambiguate names:
Anna doesn’t need a Slack notification.
Instead, [link to their Slack profile](https://slack.com/intl/en-gb/help/articles/360003827751),
assuming that you don’t work somewhere with a unique nicknames policy.
