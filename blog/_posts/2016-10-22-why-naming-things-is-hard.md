---
title: Why naming things is hard
description: The hardest thing in programming and the great naming myth
layout: hh
tags: naming programming
---

Naming has a reputation for difficulty, which probably comes from Phil Karlton’s famous quip.

<blockquote class="big solid-one">
<p>‘There are only two hard things in Computer Science: cache invalidation and naming things.’</p>
<p>- Phil Karlton</p>
</blockquote>

This is funny because it’s unexpected.
Cache invalidation sounds like a hard thing, while naming sounds more straightforward.
The joke works because it violates our expectation that hard things should be technical.
It’s also funny because it’s true.

## Why naming is hard

Anyone who has ever tried to name a child knows that naming is hard.
Naming things in code is harder.
It’s bad enough that you have to commit to a name that someone isn’t going to like.
You also have to be able to live with it.
In principle, the naming things in code need only be temporary, but names in code stick just like nicknames at school.

We could of course refactor our code to rename things any time we like, but we don’t do this enough in practice.
We also find it hard to agree on what good names and bad names look like, which makes it hard to know when renaming improves a name.
If we renamed things more often, then it probably wouldn’t be so hard to name them in the first place.

Unlike naming children, coding involves naming things on a daily basis.
When you write code, naming things isn’t just hard, it’s a relentless demand for creativity.
Fortunately, programmers are creative people.


## The great naming myth

There’s a chance that despite his substantial contribution to programming humour, among other accomplishments, Phil Karlton actually did us a disservice by encouraging us to be intimidated by having to name things.

<blockquote class="big solid-two" style="max-width:28em">
<p>‘There are two problems in computer science: there’s only one joke, and it isn’t funny.’</p>
</blockquote>

Perhaps the joke’s on us, and naming isn’t actually that hard, after all.
Naming is just one part of the micro-design activity that we call programming.
If design weren’t hard, we wouldn’t find good design so satisfying.


## Why naming matters

Naming matters for both idealogical and practical reasons.
First of all, we want names to exhibit truth and beauty: to be the right names, and to make our code clean and beautiful.
At least, this is what we want to think about our code, but naming’s importance is far more practical.

<blockquote class="big solid-three" style="max-width:30em">
<p>‘Programs are meant to be read by humans and only incidentally for computers to execute.’</p>
<p>- Donald Knuth</p>
</blockquote>

Naming is communication.
Bad names prevent code from clearly communicating its intent, which is why code with obfuscated names is spectacularly hard to understand.
The compiler might not care, but the humans benefit from naming that communicates effectively.

Other people, including your future self, need to understand the code to be able to make changes.
In many contexts, and for many teams, software maintenance provides the biggest day-to-day challenge.
Scalability is the problem you want to have, and sooner rather than later, but maintainability is the problem you’re definitely going to have, sooner or later.
