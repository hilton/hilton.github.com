---
title: "Roadmaps in two dimensions and three levels"
description: How to relate your roadmap to what matters
layout: hh
tags: product
image: kittens.jpg
css: |
  .content .roadmap { width:38em;border-spacing:1em; margin:2em;border-bottom:1px solid #DF5A49; font-size:110%; }
  .roadmap caption { caption-side:bottom; font-style:italic; padding:0.5em; }
  .roadmap th, .roadmap td { border:none; }
  .roadmap th { padding-bottom:0.5em; width:33%;text-align:left;}
  .roadmap td { padding:0.5em 0.5em 0 0.5em; }
  .roadmap td:before { content:'￭'; color:#DF5A49; padding-right:0.5em;}
  .roadmap tr:first-child td { background:#DF5A49;color:white;padding:0.2em 0.5em;border-radius:0.5em; }
  .roadmap tr:first-child td::before { display:none; }
  .roadmap tr:last-child td { padding-bottom:1em; }
---

<!--
1. Work not linked to strategic initiatives looks random.
2. Abstraction just makes the roadmap meaningless.
3. Use swim lanes for objectives.
4. Time and objectives make a roadmap two-dimensional.
5. Objectives are the top of three levels of detail.
6. Product development tasks form the third level.
7. Short-term work addresses one problem
8. Medium-term initiatives address related problems
9. Long-term objectives guide strategic initiatives
-->

[![Cute kittens](kittens.jpg)](https://unsplash.com/photos/YCPkW_r_6uA)

[Jari Hytönen](https://unsplash.com/photos/YCPkW_r_6uA){:.photocredit}

{:.series}
1. [Roadmap compromise](product-roadmap-compromise)
2. Roadmap detail levels ←
3. [Product roadmap triangle](product-roadmap-triangle)

After a recent meeting, someone commented that the product roadmap should show ‘how new roadmap items contribute to the overall progress of strategic initiatives’.
They’d seen slides describing individual roadmap items - 
customer problems that upcoming work would address - 
but couldn’t relate them to long-term strategic initiatives.
Indeed, if you don’t link the work to higher-level initiatives, then your roadmap looks like a random collection of work.

You can’t solve roadmap chaos by showing larger problems 
(assuming that you have a [problem-based roadmap](https://melissaperri.com/blog/2014/05/19/rethinking-the-product-roadmap), 
rather than a feature backlog).
That makes the roadmap more abstract, and you lose the concreteness in the chaos of lots of smaller problems to solve.
Instead, you need to overlay a higher level that maps the objectives you’ll reach by solving those problems.

## Use swim lanes for objectives

Adding swim lanes for objectives explains roadmap initiatives by grouping them,
and answering the question of _why?_
Swim lanes work because you pursue more than one objective in parallel, in practice.

<table class="roadmap">
<caption>Example roadmap, with swim lanes for two objectives</caption>
<thead>
<tr><th>Now</th><th>Next</th><th>Later</th></tr>
</thead>
<tbody>
<tr><td colspan="3">Get users hooked (objective)</td></tr>
<tr><td>Show cat cuteness</td><td>Show cat cuteness</td><td>Puppies</td></tr>
<tr><td>Enable social sharing</td><td>Famous cats</td><td>Rabbits</td></tr>
</tbody>
<tbody>
<tr><td colspan="3">World domination (objective)</td></tr>
<tr><td>Legal protection</td><td>Cat politicians</td><td>Demote humans to <em>staff</em></td></tr>
<tr><td>Citizenship</td><td>Rewrite laws</td><td>World domination!</td></tr>
</tbody>
</table>

This hypothetical roadmap uses a familiar column-based relative time format (_now_, _next_, _later_ - see 
[The Birth of the Modern Roadmap](https://www.prodpad.com/blog/the-birth-of-the-modern-roadmap/)),
with two product objectives that provide context for the problems the roadmap addresses.
Horizontal time horizons and vertical objectives make the roadmap two-dimensional, with three levels of detail.

## Three levels of detail

At a high-level, the example roadmap (above) pursues two objectives at a time, and four customer problems.
Objectives sit at the ‘top’ - the most abstract - of the levels of detail.
You can structure your roadmap’s detail levels how ever you like, and it might end up like this.

1. _Long-term objectives_, stable over time horizons, guide the work.
2. _Medium-term initiatives_, spanning one or more time horizons, address _related problems_.
3. _Short-term work_ - in progress _now_ and complete before what comes _next_.

In the example above, _Show cat cuteness_ spans two time horizons, and could include _short-term work_ such as:

* Publish cat pictures
* Publish cat videos
* Use AI to rate cuteness
* Use AI to auto-generate ridiculously cute fake kittens

These represent development work to build concrete product capabilities, 
which agile software development teams sometimes call _epics_.
(_Epic_ means _long story_, referring to the storytelling metaphor behind _user stories_.)

## A system for explaining _why_

A multi-level roadmap like this achieves more than merely looking good in the next management meeting (although they _love_ this stuff).
This kind of roadmap creates a more important kind of transparency about the purpose of product development work.

The levels create a system for answering questions about _why we should build this_,
and [making roadmap tradeoffs](product-roadmap-triangle).
You build product capabilities, to solve customer problems, in pursuit of product objectives.
And with luck, your product objectives contribute to a clearly-articulated company strategy.
