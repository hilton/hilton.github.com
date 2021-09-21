---
title: Scrum and non-functional requirements
description: The qualities you must not ignore
tags: agile
layout: hh
image: coffee-tasting.jpg
---

![Testing/tasting coffee](coffee-tasting.jpg)

<a class="unsplash" href="https://unsplash.com/photos/i22gbC3gFm4" rel="noopener noreferrer" title="Photo by Battlecreek Coffee Roasters"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Battlecreek Coffee Roasters</span></a>

Project teams using Scrum tend to focus on implementing the next set of features.
Features don’t describe everything that matters, though.
You also need to work on fixing bugs and usability issues, and improve performance and scalability.

## Reliability, security, usability, performance, scalability… 

You can get into trouble if you neglect bugs and security requirements.
An application can become so buggy that the development team gives up on ever fixing all known bugs, while users give up on the idea of the software ever becoming trustworthy or reliable.

Similarly, people experience good (and bad) usability in every system interface (not just the user-interface).
Usability does not come from a set of features that you can just add to an existing system later on. 

Performance and scalability requirements differ somewhat.
Although you can measure a system’s overall performance, good performance relies on repeatedly tuning specific performance bottlenecks.
Trying to make everything ‘fast’ first time leads to premature optimisation.
Scalability requirements, meanwhile, tend to depend on business requirements that evolve over time, such as an on-line service’s number of users, and have high costs that are best delayed. 

## Functional vs non-functional requirements 

Software development involves two kinds of requirements.
Functional requirements describe features, such as being able to send e-mail.
Non-functional requirements include _qualities_, such as reliability, usability, performance and security.
Wikipedia has a 
[long list of non-functional requirements](http://en.wikipedia.org/wiki/Non-functional_requirement#Examples), 
which all contribute to overall software quality. 

Scrum projects risk neglecting non-functional requirements, resulting in poor-quality software.
Product owners may find it natural to think about progress in terms of user stories and features, 
while holding the development team responsible for the ‘quality’ of the resulting software.
This creates a tension with developers who don’t feel that they are free to work on non-functional requirements.

## Prioritising Scrum project requirements 

Scrum helps you prioritise, specify and implement functional requirements, typically via user stories, but doesn’t always help with non-functional requirements.
The agile manifesto 
[builds on the principle](http://agilemanifesto.org/principles.html) 
that ‘working software is the primary measure of progress’, 
but assumes that your team has enough experience and common sense to decide what _working_ means.

The usual solution bakes non-functional requirements into a Scrum project’s _definition of done_, and any associated review process.
This incorporates non-functional requirements for things like reliability and usability into every user story.

Adding conditions to the definition of done increases the time required to implement each user story, as well as the time required to review or test whether you can consider it _done_.
Remember: non-functional requirements require development effort. 

Alternatively, each sprint can budget a fixed amount of _non-story time_ that team members spend on technical tasks, such as bug fixing 
(in the absence of a [zero-bug policy](zero-bug-policy)) and performance improvements.
This comes to the same thing; you choose whether user stories include all work. 

## Playing catch-up 

User-stories that ‘catch up’ on software quality can address some non-functional requirements.
Incremental development can can use user stories for specific performance improvements, for example.
In fact, many applications would benefit from one performance improvement each sprint, 
and ‘performance improvements and bug fixes’ in every release.
