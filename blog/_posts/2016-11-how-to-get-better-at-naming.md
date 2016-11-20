---
title: How to get better at naming things
description: 10 steps to mastering names in code
layout: hh
tags: naming programming
---

As programmers, we use various different skills in the course of developing software, and when writing code in particular.
Our coding skills include naming.
As programmers, we can develop skills as well as software.
This article proposes ten ways you can improve your naming skills, which help you to write better code.

## 1. Decide how hard it is for you

First, think about [Why naming things is hard](http://hilton.org.uk/blog/why-naming-things-is-hard), and how hard you find it yourself.

<blockquote class="big" style="max-width:35em">
<p>The reason naming is both hard and important is because it is an act of communication;
without good names your code might as well be written in, well, code</p>
<p>- Kevlin Henney</p>
</blockquote>

Someone recently told me that they’ve never had a problem with naming, which you don’t hear very often.
Either way, you have to decide for yourself what you need to improve.

## 2. Learn to recognise bad naming

[Naming smells](http://hilton.org.uk/blog/naming-smells) indicate names that can be improved.
You can use naming smells to recognise bad habits, as a the first step towards giving them up.
As a bonus, naming smells themselves have names that you can use in code reviews, to improve your whole team’s communication and coding style.

## 3. Refactor - rename things with better names

Merely recognising bad names does not improve code.
Meanwhile, even though _Rename_ is the safest refactoring, we do not use it as often as we might.
Not everyone finds it easy to overcome _fear of renaming_.
This should not surprise us, because renaming includes naming (which you might find hard) plus other hard things, such as talking to other people and persuading them to accept change.
It turns out that getting better at naming requires practice, which also gives you an opportunity to improve your code by improving existing names.

## 4. Improve your vocabulary by reading and gaming

In code review, you can sometimes suggest a renaming by commenting that ‘there’s a word for that’.
Choosing a good name sometimes means discovering the right word, whose meaning matches the concept you’re naming.
The more words you know, the more often you can do this, which is why improving your vocabulary helps you get better at naming.

Reading does more to improve your vocabulary than anything else.
Read novels: whether you read the classics, science fiction (or classic sci-fi) doesn’t matter, as long as you read good writing.
At the same time, play word games: think of [Words with Friends](https://en.wikipedia.org/wiki/Words_with_Friends) and [Word Feud]() as thinking person’s [Candy Crush](https://en.wikipedia.org/wiki/Candy_Crush_Saga).

![Losing at Words With Friends](words-with-friends.png)

This screen shot, someone called Karen is thrashing me at Words With Friends.
I’ve never met Karen, but she probably writes outstanding code.

Note that the impact of improving your vocabulary, and how you do it, depends on whether you are a native English speaker.
A development’s team’s only native English speaker has a natural advantage when it comes to naming, because she probably knows more English words.
However, the non-native speakers are more likely to have experienced learning to speak a foreign language.
If you’ve never learned a foreign language then you probably can’t remember how you go about deliberately improving your vocabulary.
Native English speakers might have better English skills, but worse _English-learning_ skills.
Non-native speakers can often _explain_ English better.

## 5. Use vocabulary and naming tools

The tools that help you to improve your vocabulary and with naming include tools that you already have.

![macOS dictionary and thesaurus](thesaurus.png)

On macOS, the _Dictionary_ application has two vital features: it tells you what words mean, and its thesaurus suggests other words with similar meanings.
Use these tools to browse words that you can use for naming, and to check their meanings.

## 6. Tell jokes

Unexpectedly perhaps, jokes help you get better at naming.
Many jokes rely on word-play, especially in English, but it takes practice to think of puns quickly.
Puns are important for naming, because they rely on double-meanings.
Spotting double-meanings is the essential skill for avoiding ambiguous names, during code review for example.

## 7. Embrace Domain Driven Design

Scan the domain model entities’ Wikipedia pages for names of related concepts.
Read novels set in your customer’s domain, to learn their jargon (if you can find them).
Find out what they really mean.

## 8. Engage with other people

Over the course of several years of attending developer conferences, I noticed that no-one ever talked about naming.
In fact, I gave a [presentation about naming things](../presentations/naming) precisely because no-one else ever did.
Only recently have I seen another one: [Björn Kimminich’s naming presentation]() explains why you shouldn’t need _Batman mode_ to understand code.

Talking to people about naming helps you discover tips, like these, compare notes about common problems and learn examples of good and bad naming.
Talking about naming reminds us of the value of better names in code.
The horror stories have entertainment and humour value too.

## 9. Adopt better naming practices

In general, you can get better at naming by improving your whole approach.
Specifically:

* Start with meaning and intention: think about what you want the code to _say_.
* Use words with precise meanings.
* Prefer fewer words in names.
* Never abbreviations in names, which are always ambiguous, except for `id`.
* Use code review to improve existing names.

## 10. Experiment with writing

Finally, if you consider that naming has something in common with writing, then you might want to consider actual writing.
When you write code blog posts, tutorials, comments, and other documentation, you get plenty of opportunities to try choosing interesting words.
After all, as a famous writer once wrote, ‘all writing is rewriting’.
