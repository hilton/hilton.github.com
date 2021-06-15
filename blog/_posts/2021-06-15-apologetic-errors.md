---
title: Apologetic error messages
description: Following through on a naming idea by @huizendveld
layout: hh
tags: naming programming
image: bicycle.jpg
---

![Pink bicycle](bicycle.jpg)

<a class="unsplash" href="https://unsplash.com/photos/GXy64VLJ6sM" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Tamas Munkacsi</span></a>

Software sometimes models errors as
[exceptions](https://en.wikipedia.org/wiki/Exception_handling),
which represent conditions under which processing cannot continue normally.
As with everything in software, exceptions need good names.
In 
[Naming pattern for Exceptions](https://marijn.huizendveld.com/blog/naming-pattern-for-exceptions),
[Marijn Huizendveld](https://marijn.huizendveld.com/)
proposes naming exceptions as _apologies_,
which seems unusual enough to explore.

## Apology naming style

Marijn starts with the suitably-Dutch situation of losing a bicycle, which results in a `BikeCouldNotBeLocatedException`.
Marijn argues for using language more naturally, and starting with an apology, especially since he lost someone else’s bike.
He proposes renaming:

> `BikeCouldNotBeLocatedException` → `SorryBikeCouldNotBeLocated`.

While the conversational style holds some appeal, I prefer to name this kind of thing more conventionally, as noun phrases.
This means renaming:

> `SorryBikeCouldNotBeLocated` → `BikeCouldNotBeLocatedApology`

or even the more active renaming:

> `BikeCouldNotBeLocatedApology` → `ApologyForLosingTheBike`

This preserves the idea that instead of modelling the undesirable condition (not knowing where I left the bike),
politeness demands that I take responsibility for my inattentiveness.
However, apologising takes more than calling something an apology.

## 6 elements of an effective apology

In [An Exploration of the Structure of Effective Apologies](https://lps.library.cmu.edu/NCMR/article/264/galley/267/view/) (PDF) 
Roy Lewicki, Beth Polin and Robert Lount identify six components of an apology, and report that:

> apologies with more components were more effective than those with fewer components, 
> and certain components were deemed more important than others 

The paper includes the following definitions:

| Apology component | Definition |
| --- | --- |
| Expression of regret | A statement in which the violator expresses how sorry they are for the offense |
| Explanation of what went wrong | A statement in which the reasons for the offense are described to the victim |
| Acknowledgment of responsibility | A statement which demonstrates the violator understands their part in the offense |
| Declaration of repentance | A statement in which the violator expresses their promise to not repeat the offense |
| Offer of repair | A statement extending a way to work toward trust rebuilding on the part of the violator |
| Request for forgiveness | A statement asking for the victim to pardon the violator’s actions |

Perhaps this explains why software routinely displays ineffective error messages:
software design lacks an effective _apology model_.

## An apology model for software errors

The elements of effective apologies teach us that a software developer who models an error condition must provide more structured information about the error, so that the software can translate this to a more complete error message, whose effectiveness will then depend on the underlying model.

A software error model therefore requires the following properties:

| Property | Values | Example |
| --- | --- | --- |
| Explanation | Text summary of what went wrong | We lost your bike and our search of Amsterdam failed to locate it |
| Regret level | Number from 1 (_sorry not sorry_) to 10 (more sorry than about anything ever before) | 7 |
| Responsibility | Percentage of the blame assigned to the software | 90% |
| Repentance | Percentage likelihood that this will happen again | 5% |
| Repair | Text summary of measures taken to prevent reoccurrence | The error handler has fired the product manager, and the developers’ performance reviews will mention this incident |

The application user interface can then use this information to construct an appropriately apologetic error message that combines the text summaries with the standard text for each range of numeric values.
Note that this model does not include the _request for forgiveness_, which belongs to error messages but does not depend on the specific error.
