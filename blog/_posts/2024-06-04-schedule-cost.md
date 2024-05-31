---
title: Development schedule cost
description: I don’t ask for developer estimates and nor should you
layout: hh
tags: product management
image: calendar.jpg
---

![](calendar.jpg)

[Towfiqu barbhuiya](https://unsplash.com/photos/jOeh3Lv88xA){:.photocredit}

Despite the illusion of agile software development, one legacy practice stubbornly remains:
asking software developers to provide development effort estimates.
In practice, wanting estimates doesn’t always mean you _need_ them.

## Comprehensive software documentation

When we did waterfall software development for real, in the 1990s,
projects produced substantial software documentation.
I remember bound volumes of _functional requirements specification_ and _technical specification_ on office shelves.
I also remember that we found this documentation _useful_, but not good value.

Software project documentation changed after the
[Manifesto for Agile Software Development](http://agilemanifesto.org)
gained traction, along with the idea that while we might value ‘comprehensive documentation’,
we should value ‘working software’ more.
We didn’t stop producing documentation, but stopped taking documentation for granted.
We acknowledged its expense, and only produced it for specific needs, with a reasonable return on investment.
The deal changed: **no more free documentation**.

## No more free project schedules

Software project _schedules_ also changed.
‘Responding to change over following a plan’ made the project manager’s twelve-month Gantt charts worthless within days.
Software developers responded to fluid planning by getting better at software estimation,
but eventually recognised the wasted effort.
Agile software development had changed the deal again: **no more free project schedules**.

Some people never stopped expecting free schedules and free estimates.
I’ve heard them claim that development teams have an obligation to provide estimates for every proposed feature.
This requires the ridiculous claim that producing accurate estimates won’t require significant effort,
or delay other work.
In practice, worthwhile estimates require significant up-front design,
and create the even larger cost of re-estimating after each design change.

Software documentation feels more tangible than a schedule, and uses more pages when printed.
Perhaps this explains why business stakeholders understood that they were never really getting ‘free’ documentation,
but freaked out when development teams stopped estimating delivery dates.

A decade ago, [#NoEstimates movement](https://ronjeffries.com/xprog/articles/the-noestimates-movement/)
polarised the industry in a way that technical writers never have.
And today, having too little documentation seems unavoidable.

## Decision-specific forecasts

We replace missing software documentation by producing
[minimum viable documentation](readme-outline) to address specific needs.
Similarly, you can approach demand for delivery dates with a similar question:

> What decision depends on this information?

Understanding the underlying need may help you replace the question with an easier one.
For example, when a marketing manager asked me when engineering would deliver a particular feature,
we had a conversation in which I learned the real question:

> Should we announce this feature’s release at the end of the current marketing campaign, next week?

While predicting the feature’s release date would have required a lot of effort,
and constrained the development work, it would obviously take longer than two weeks.
This resembles how asking for someone’s date of birth violates the GDPR data minimisation principle if you only need to classify them as over eighteen years old.

## Alternative decision input

The marketing example illustrates something other than making a question about dates more specific.
I could also reframe the marketing manager’s question as:

> Does engineering have capacity to start work on this feature in the next two weeks?

Answering _no_ to this question made a development estimate irrelevant, in this case.
In general, once you’ve identified the decision that created the demand for dates,
you can ask whether you might make that decision based on other information instead.
