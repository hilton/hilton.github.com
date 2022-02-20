---
title: Software estimation checklist
description: Ten ways to avoid bad estimates
tags: agile
layout: hh
---

{:.big style="max-width:38em"}
> ‘Life in a big or small company is an information game where you are judged by the amount, accuracy, and timeliness of your information.’
> 
> [@rands](https://twitter.com/rands) a.k.a. Michael Lopp, [Being Geek](http://beinggeek.com)

Perhaps the hardest thing that you are asked to do, as a professional software developer, is to estimate how long it will take to do something you’ve never done before. Estimation is hard, and unavoidable, so you cannot afford to make avoidable mistakes. 

Use the following checklist to identify unreliable estimates.

1. Do you know who the estimate is for?
2. Do you know how the estimate will be used?
3. Do you know who will do the work?
4. Are requirements fixed?
5. Does the scope include non-programming tasks?
6. Did three or more people first make independent estimates?
7. Does the estimate aggregate multiple tasks?
8. Is the estimate based on previous estimates?
9. Is the estimate given as a range?
10. Was the estimate accepted without negotiating?

If you answer ‘no’ to one or two of these questions, then your estimate is unreliable. If you answer ‘no’ to three or more then you’re asking for trouble.


## 1. Do you know who the estimate is for?

If you want to know how long it will take to do a piece of work, it depends who’s asking. As a developer, you learn the hard way that giving a number to another developer or even the project manager isn’t the same thing as giving a number to a customer. A raw estimate, out in the wild, tends to lead a life of its own.

There is also a difference between how long it will take to do something _now_, as opposed to _in general_. A development effort estimate comes with a lot of context, and is generally not broadly applicable. A different team working on a different task on a different project at a different time will make different estimates.

If you don’t know who an estimate is for, then you don’t know how much of the necessary context that person will have. Anyone taking an estimate out of context is likely to misunderstand it, and think that it’s a different kind of estimate. An estimate that is misunderstood is also ‘wrong’.


## 2. Do you know how the estimate will be used?

There are many different estimates that you could give, for a given task, so you need to know how the estimate will be used. If you don’t know what the estimate is for, then you can’t give the right information.

An estimate is usually used to make a decision, such as whether to proceed with the work. Sometimes estimates are not used at all: you’ll do the work anyway, whatever the estimate is. To spot this situation, consider what would be different if everyone knew that the estimates were always wrong, and therefore don’t provide any information.

Estimates may also be used to gain confidence that development is on progress, during a project. In this case, it’s worth trying to get this confidence from simply completing smaller tasks, after slicing tasks into sub-tasks, and asking whether the person asking for the estimate can just wait until the work is done.

Asking whether decisions can be made on the basis of better information than estimates, and other questions about how estimates are used, are the basis for the [#NoEstimates](http://noestimates.org/blog/) discussion.


## 3. Do you know who will do the work?

A software development estimate is usually phrased as how long it will take someone to do a piece of work. It matters who that _someone_ is, because despite management 
[fungibility](http://en.wikipedia.org/wiki/Fungibility) fantasies, software developers on cross-functional teams are not all the same.

An important part of an estimate’s context, then, is to know which developer is going to do the work and what their capabilities are. This is why estimates made on behalf of other people, or for unknown future developers, are so unreliable. Scrum answers this question, aggregated across a whole team, by having the whole team estimate their own tasks collectively. This is why it is better to only estimate one sprint at a time: later sprints will have a different team - either new team members, or more experienced existing team members.


## 4. Are requirements fixed?

If you weren’t a developer, you’d be surprised how often project stakeholders ask for development estimates as if it doesn’t particularly matter what the corresponding requirements are. Perhaps, programming really is indistinguishable from magic, in which case it might seem reasonable to imagine that what you’re trying to achieve is unrelated to how long it takes the magic to work.

There are really two questions here. In practice, requirements are not only incomplete at the time you make an estimate, but they will also change later on. Project stakeholders are not used to quantifying how unstable a requirement is, even though this directly relates to how accurate an estimate will turn out to be. If the requirement’s stability is zero, then so is the value of the estimate.

This question does not only apply to functional requirements: estimates are also sensitive to changes in non-functional (quality) requirements. These should probably be fixed for the duration of a project, or product, because it takes time to get used to their impact on doing the work: developers estimate for a particular quality level. If quality and non-functional requirements don’t matter, then you can have any estimate you want. After all, it doesn’t have to take very long to build if it doesn’t have to work.


## 5. Does the scope include non-programming tasks?

It’s easier to make an estimate if you focus on a narrow definition of the task: just writing the code, and not doing anything else. However, there is typically other work to be done, such as testing and documentation. What about rework when bugs are found? Scrum teams often address this by using a written _Definition of Done_, that specifies what the work includes. 


## 6. Did three or more people first make independent estimates?

When one person makes an estimate alone, they can easily forget important context or implementation details that massively affect the estimate. When you have three or more people, one is more likely to spot that there’s a hidden requirement that you have to take into account, or that there’s an easier way to do the work that will take less time.

The [Delphi method](http://en.wikipedia.org/wiki/Delphi_method) is a sophisticated forecasting technique that uses a panel of experts, who make independent estimates. Scrum planning poker is a more informal variant, that has most of the key characteristics, although it doesn’t preserve 
[anonymity of the participants](http://en.wikipedia.org/wiki/Delphi_method#Anonymity_of_the_participants).


## 7. Does the estimate aggregate multiple tasks?

Although an individual estimate is usually imprecise, ten estimates are usually more precise, collectively. This means that it is safer to use aggregate estimates - to make a decision, say - than to use a single estimate. Scrum does this by starting with individual user story estimates, but only using the aggregate sprint estimate for planning.

## 8. Is the estimate based on previous estimates?

It turns out that although estimates are generally wrong, they can be _consistently wrong_. This means that you can improve your estimates by considering how well previous estimates turned out. Instead of just looking at how long tasks actually took, which doesn’t help when you have different tasks in future, you look at the overall _difference_ between previous estimates and how long the work took.

Scrum does this by calculating a multiplication factor for estimates, based on actual performance, called _velocity_. This means that you can continually refine estimates during a project, which is exactly what doesn’t happen on waterfall projects when the project manager proudly tapes a giant Gantt chart to the wall on the first day of the project. You should avoid development methods that require perfect predictions in the planning phase.


## 9. Is the estimate given as a range?

When you are giving an estimate, it needs to be clear whether this is the best case, the most likely case, the worst case or something else. In any case, a single number is less useful than a range. An alternative to a range of numbers is a single estimate, perhaps for the most likely case, with a percentage that indicates the uncertainty - how much bigger the correct estimate might also be.


## 10. Was the estimate accepted without negotiating?

A final thing to watch out for is when someone - typically a developer’s direct manager - tries to negotiate a smaller estimate. This doesn’t seem to make any sense, because an estimate is an approximation to a fixed fact (albeit unknown): how long the work will take. When this happens, there a combination of two things might be happening, and it’s usually not a discussion about estimation techniques.

One issue that gets exposed by estimation discussions is when the manager doesn’t trust the developer, and suspects that estimates are inflated. If you have trust issues on a project, then you have worse problems than bad estimates. You should probably talk it over. A related issue is that sometimes a development manager says that they want an estimate when they really want a commitment. These are two different things, but if you’re lucky then it’s ‘only’ a communication problem.
