---
title: Don’t model every possible process exception
description: When not to automate delivery process edge cases
layout: hh
tags: process
image: detour-sign.jpg
---

![](detour-sign.jpg)

[Ussama Azam](https://unsplash.com/photos/kMb4qE_zj3Q){:.photocredit}

When developers start discussing your [zero-bug policy](zero-bug-policy),
they tend to get sidetracked by a long decision process discussion.
They want to fully-understand how the team will decide whether to fix a bug or delete the bug report, in a variety of scenarios.
But internal business processes for working with members of your own team don’t need the same level of precision as writing business process automation code.

## Decision logic

Programming involves describing how logic applies to information, in fine detail.
To automate decisions, you have to specify exactly which conditions lead to which decision, accounting for every possible scenario.
Developers naturally apply this - their usual approach - to other kinds of decision-making.

A zero-bug policy, aims to simplify software maintenance, which means simplifying its decision logic to: _just fix the bug_.
Adopting this approach requires less work on defining the usual kind of complex process, and more effort on figuring out what would make one unnecessary.

<svg xmlns:xl="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:dc="http://purl.org/dc/elements/1.1/" viewBox="0 0 640 130" width="640" height="130">
  <defs>
    <marker orient="auto" overflow="visible" markerUnits="strokeWidth" id="FilledArrow_Marker" stroke-linejoin="miter" stroke-miterlimit="10" viewBox="-1 -3 7 6" markerWidth="7" markerHeight="6" color="black">
      <g>
        <path d="M 4.8 0 L 0 -1.8 L 0 1.8 Z" fill="currentColor" stroke="currentColor" stroke-width="1"/>
      </g>
    </marker>
  </defs>
  <g id="Canvas_1" stroke-dasharray="none" fill-opacity="1" fill="none" stroke="none" stroke-opacity="1">
    <title>Canvas 1</title>
    <g id="Canvas_1_credits">
      <title>credits</title>
      <g id="Graphic_9">
        <path d="M 21 40 L 109 40 C 117.83656 40 125 47.163444 125 56 L 125 74 C 125 82.83656 117.83656 90 109 90 L 21 90 C 12.163444 90 5 82.83656 5 74 L 5 56 C 5 47.163444 12.163444 40 21 40 Z" fill="white"/>
        <path d="M 21 40 L 109 40 C 117.83656 40 125 47.163444 125 56 L 125 74 C 125 82.83656 117.83656 90 109 90 L 21 90 C 12.163444 90 5 82.83656 5 74 L 5 56 C 5 47.163444 12.163444 40 21 40 Z" stroke="#df5a49" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <text transform="translate(10 57)" fill="black">
          <tspan font-family="Source Sans Pro" font-weight="bold" font-size="16" fill="black" x="9.765625" y="12">Bug reported</tspan>
        </text>
      </g>
      <g id="Graphic_11">
        <path d="M 235 5 L 295 65 L 235 125 L 175 65 Z" fill="white"/>
        <path d="M 235 5 L 295 65 L 235 125 L 175 65 Z" stroke="#df5a49" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <text transform="translate(191.2 39.8)" fill="black">
          <tspan font-family="Source Sans Pro" font-weight="bold" font-size="16" fill="black" x="20.671875" y="12">Should</tspan>
          <tspan font-family="Source Sans Pro" font-weight="bold" font-size="16" fill="black" x="18.226562" y="28">we fix it</tspan>
          <tspan font-family="Source Sans Pro" font-weight="bold" font-size="16" fill="black" x="26.601562" y="44">now?</tspan>
        </text>
      </g>
      <g id="Line_12">
        <line x1="126" y1="65" x2="160.68579" y2="65" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </g>
      <g id="Graphic_13">
        <rect x="345" y="40" width="120" height="50" fill="white"/>
        <rect x="345" y="40" width="120" height="50" stroke="#df5a49" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <text transform="translate(350 57)" fill="black">
          <tspan font-family="Source Sans Pro" font-weight="bold" font-size="16" fill="black" x="30.246094" y="12">Fix bug</tspan>
        </text>
      </g>
      <g id="Graphic_14">
        <path d="M 531 40 L 619 40 C 627.83656 40 635 47.163444 635 56 L 635 74 C 635 82.83656 627.83656 90 619 90 L 531 90 C 522.16344 90 515 82.83656 515 74 L 515 56 C 515 47.163444 522.16344 40 531 40 Z" fill="white"/>
        <path d="M 531 40 L 619 40 C 627.83656 40 635 47.163444 635 56 L 635 74 C 635 82.83656 627.83656 90 619 90 L 531 90 C 522.16344 90 515 82.83656 515 74 L 515 56 C 515 47.163444 522.16344 40 531 40 Z" stroke="#df5a49" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <text transform="translate(520 57)" fill="black">
          <tspan font-family="Source Sans Pro" font-weight="bold" font-size="16" fill="black" x="23.023438" y="12">Bug fixed</tspan>
        </text>
      </g>
      <g id="Line_15">
        <line x1="296.4142" y1="65" x2="331.1" y2="65" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </g>
      <g id="Line_16">
        <line x1="466" y1="65" x2="501.1" y2="65" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </g>
      <g id="Graphic_19">
        <text transform="translate(300 69)" fill="black">
          <tspan font-family="Source Sans Pro" font-weight="bold" font-size="16" fill="black" x="0" y="12">Yes</tspan>
        </text>
      </g>
    </g>
  </g>
</svg>

For example, software defect management (bug backlog wrangling) typically includes prioritisation: deciding which
[corrective maintenance](https://en.wikipedia.org/wiki/Corrective_maintenance)
(bug fixing) to do first.
In contrast, zero-bug policies aim to make prioritisation irrelevant by having at most one open bug to consider at a time.

## Edge cases

Software developers spend a lot o effort identifying
[edge cases](https://en.wikipedia.org/wiki/Edge_case).
Every scenario you didn’t consider will lead to bugs, sooner or later,
and the more obscure the scenario, the more surprising how soon it happens and how much disruption it causes.

{:.big style="max-width:30em"}
> A good programmer looks both ways before crossing a one-way street.

Now return to your zero-bug policy discussion, which has now moved on to, say,
whether you would fix or ignore a serious bug caused by a third-party defect that a planned upgrade will probably resolve.
These discussions routinely digress into scenarios that no-one expects to happen more than once a year, and which you’d discuss in any case if they did.

When you have hundreds or thousands of open bugs, you naturally analyse and classify them, so you know things like which ones depend on third-party upgrades.
By contrast, with a successful zero-bug policy, and no big bug backlog, you only ever have a conversation about one bug at a time.

## Process gaps

Software developers typically aim to automate as much as possible,
whether or not that make this goal explicit.
In business software, this means [automating business processes](process-centric-design),
and handling a lot of process variation.
If you haven’t _finished_, bugs or missing features lead to gaps in what the software automates,
and the software’s model cannot complete the process.

To many programmers’ surprise, the real-world business process may only experience minor delay when this happens,
because a telephone call or text message typically fills a process gap.
Software teams should therefore 
[figure out which automation actually saves time](https://xkcd.com/1205/)
(because [some doesn’t](https://xkcd.com/1319/)).

## Process exceptions

From a software perspective, process exceptions that occur too infrequently may not justify automation.
And some exceptions occur too infrequently to even justify modelling how to handle them, in advance, like those zero-bug policy scenarios that may never happen.
Instead, you should ignore some potential process exceptions until they actually occur,
just like how you should ignore some known bugs until they actually impact a customer.
