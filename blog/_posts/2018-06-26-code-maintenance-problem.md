---
title: The code maintenance problem
description: Why software maintenance is worth talking about
layout: hh
tags: code maintenance
image: http://hilton.org.uk/blog/factory.jpg
---

[![A factory - where real maintenance happens](factory.jpg)](https://unsplash.com/photos/mhUsz2ezlXQ)

<a style="background-color:#ccc;color:white;text-decoration:none;padding:4px 6px;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@spacexuan?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Crystal Kwok"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Crystal Kwok</span></a>

Among software developers, there are things that everyone’s talking about, few are actually doing, and even fewer need. Some architectures and frameworks come to mind.
There are also aspects of software development that a lot of people are doing, but few people are talking about.
Software maintenance is one of those things.

We don’t talk about software maintenance because we don’t want to face reality.
It’s much easier to talk about the idealised perfect that we don’t actually have, because then we don’t have to admit to the problems we’re really facing, during long-term development.
That’s a shame, because we’re ultimately be better off when we face up to the code maintenance problem.

## The code maintenance naming problem

Naming’s hard, apparently, and the activity we call ‘software maintenance’ isn’t really maintenance.
With machinery, it makes sense to separate the cost of buying or building something from the cost of keeping it running from year to year.
Software isn’t like that though.
There’s no useful distinction between the phases called ‘construction’ and ‘maintenance’, and the version 1.0 release is no more than an arbitrary date.

‘Software maintenance’ is really just software development.
However, despite hardware maintenance being a bad metaphor, the alternatives are probably all worse, so lets talk about software maintenance anyway.
After all, at least ‘maintenance’ captures the idea of work that keeps something working without making it any better.
If you think _that_ sounds pessimistic, then read on because it gets worse.

## The code maintenance problem

When you first start on a piece of software, while there are only a few thousand lines of code, it seems like there aren’t any bugs or that they’re easy to fix if there are any.
And when you want to add or change features, it feels easy and doesn’t seem to take very long.
Then one day, you realise that there’s more code than you’ll ever read, all changes take too long, and development is constantly frustrating.
The code maintenance problem is the extent to which making changes to software gets harder, slower and less reliable as the years go by.

When you break it down, it’s usually straightforward to identify where the problems lie.
Bad naming gives you identifiers that might sense historically, or to one specific person, but don’t help you understand what things are for.
Code comments can be [bad comments in at least seven different ways](7-ways-to-write-bad-comments), ranging from being to few to being too many, as well as just plain wrong.
Code can also fail to fit the intended architecture, or the team’s code style, especially since both are moving targets.

The code maintenance problem is that code lies.
Code lies when naming, comments, architecture and code style mislead you.
And the best thing to do with lies is to expose them.

## Opening up about maintenance problems

Even without doing it publicly, a development team can benefit from talking through their code’s maintenance problems.
Even if this is only an occasional therapy session, it will be make you all feel a little better.
That’s only the first step, though.

When a team talks about maintenance issues, they can discover which issues affect them the most, in practice.
Team members know what the issues are, but probably aren’t used to talking about them.

The first set of issues a team identifies tend to focus on the code itself:

* bad naming, and other kinds of ambiguity
* bad comments
* big functions or classes
* code size and complexity
* code that isn’t written in a consistent style.

If you continue, you may discover broader issues and causes for code maintenance issues:

* code that’s hard to understand
* bad architecture
* insufficient or ineffective system documentation
* unpredicatable business priorities
* development that’s been influenced by too many different people
* code written by people who were being lazy or ‘clever’
* code with a long lifetime.

At this point, you’re still having a discussion, but if your team can talk about these kinds of things, then you might be ready to do something about the code maintenance problem.

## Next steps

After discussing the code maintenance problem with the team, it’s time for three serious questions.

1. Why does maintainable code matter?
2. Whose problem is this?
3. Can we get help?

If you get the answers to the first two questions right, then the answer to the third is ‘yes’.
When your team needs more than just a therapy session to help them deal with software maintenance, then [contact Peter Hilton](../contact) about training in [How to write maintainable code](../training/maintainable-code).
