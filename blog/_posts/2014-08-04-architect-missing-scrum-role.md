---
title: Architect - the missing Scrum role
description: Agile architecture for non-functional requirements
tags: agile
layout: hh
---

[ ![Software design](architect.jpg) ](https://www.flickr.com/photos/juhansonin/12140602074)

On a Scrum project, there are a few common questions that turn out to be related.

1. How do we handle non-functional requirements?
2. Where’s the architecture?
3. Why is the application so slow?

The link is the role of the software architect on a Scrum project. In the same way that the Product Owner maintains a vision for how software functionality can deliver business value, the architect maintains a vision for how technical architecture can deliver a system that meets the non-functional requirements.


## Identifying non-functional requirements

The lazy way to identify the key non-functional requirements for application software is to copy-paste the following: security, performance and usability. That would be a good start at least.

Alternatively, start with the nice long 
[list of example non-functional requirements](http://en.wikipedia.org/wiki/Non-functional_requirement#Examples)
from Wikipedia. Take an hour with the Product Owner to walk through the list and summarise what each one means. Cross off the ones that don’t apply to the software you’re building, and rank the ones whose absence would affect the software’s business value. At this point you should probably just pick the three or four most critical, although it’s work keeping the others in mind.

That was the easy part. Once you have identified the key non-functional requirements, the hard part is to integrate them with Scrum-based software development. It is not obvious how to do this, because Scrum focuses on the business value of user stories, which most naturally describe software functionality. Enter the architect.


## The software architect role

The first question to ask about identifying non-functional requirements is who does it. A software architect is the ideal person to work with the Product Owner on this, because of how it’s a translation from business requirements to a view of the whole system. Crucially, the two of them must work together.

Understanding non-functional requirements requires a collaboration between architect and Product Owner, because although these are business requirements they tend to be technical in nature. A high-level understanding of the value and cost of meeting different non-functional requirements necessarily precedes any discussion about detail.

Meanwhile, the agile architect must seek a balance between the two kinds of bad architecture: too much and too little. Too much can result an over-engineered system, such as an application whose scalability is as impressive as it is unnecessary. Too little architecture can result in brittle or unreliable software, whose technical design never seems to make it easy to implement other requirements without introducing bugs.

The architect who understands how non-functional requirements are prioritised has the necessary input for designing good software architecture. Too much or too little architectural design is, after all, a failure to correctly prioritise non-functional requirements. Good architectural design is the key ingredient of good quality.


## Quality invariants

You can think of non-functional requirements as ‘qualities’ of a software system. Similarly, failure to meet non-functional requirements is often perceived as ‘low quality’. That, and a large number of bug reports. Experience teaches that you can’t add this quality ‘later’, after initially developing software, except at massive cost. Or a re-write. The better plan is to pick a consistent level of quality and stick with it from the start.

A good way to think about non-functional requirements, then, is as ‘quality invariants’ - properties of the software that are preserved throughout its life, throughout its development project, from the beginning. This is why identifying and updating non-functional requirements, at least at some level, is something to include in every Scrum sprint, including the first.


## Adding non-functional requirements to Scrum

In practice, spending ten minutes on non-functional requirements at the start of the project is vastly better than nothing. Still, spending an hour with the product owner to identify non-functional requirements is also reasonable. For some teams, keeping them in mind is as simple as writing them on a flip-chart and hanging it on the wall.

Making this part of the Scrum process means adding ‘Meets non-functional requirements’ to the definition of done. This is clearly problematic, because this is not easy to assess. Unfortunately, non-functional requirements are just not easy.

Alternatively, you could separate non-functional requirements from (normal) user stories. The ‘catching up exercise’ approach is to add separate user stories to improve security or usability, for example. However, it’s probably better to avoid being behind in the first place. Another approach is to reserve a percentage of team hours for continuous improvements, as if it were a kind of refactoring. This can work too, but risks churn and waste, as improvements are required in user stories that were only just ‘done’.


## Continuous evolution

The final catch, as if this weren’t difficult enough already, is that non-functional requirements are like any other requirements in that they change during the project. Vision, business value, priorities, and the requirements these result in are also evolving.

The result is software architecture must continuously evolve to respond to two kinds of continuous change. Not only does the size of the system change, as you build it, but also the non-functional requirements that the architecture must support. An architect’s work is never done.

_Photo: [Juhan Sonin](https://www.flickr.com/photos/juhansonin/12140602074)_
