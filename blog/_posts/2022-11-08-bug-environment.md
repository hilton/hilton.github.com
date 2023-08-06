---
title: Identify context and environment in bug reports
description: Why bug reports get rejected because ‘it works on my machine’
layout: hh
tags: product maintenance
image: bug-caterpillar.jpg
---

![](bug-caterpillar.jpg)

[Yoal Desurmont](https://unsplash.com/photos/JsQbvseVlzs){:.photocredit}

{:.series}
1. [Observed behaviour](bug-observed)
2. [Expected behaviour](bug-expected)
3. [Reproduction steps](bug-reproduction)
4. Context & environment ←
5. [Workaround](bug-workaround)

*[SaaS]: software-as-a-service - web-based software that you don’t have to install and upgrade

When you submit a bug report, the product team can only fix it if they can reproduce the bug.
To make a bug report reproducible, providing [reproduction steps](bug-reproduction)
avoids relying on and waiting for a support team to figure out what you did.
But sometimes, it takes more than that.

## Previously-fixed bugs

Product support teams never have spare time, and will want to avoid investigating a bug that the product team has already fixed.
The support team therefore wants to check that you didn’t see a bug in an old version of the software, and report a bug that a more recent release already fixes.

In practice, this means that the support team needs to know which software version you used.
They either want to check if a more recent release resolves the observed behaviour or, if they can’t afford to support old versions, to ask you to upgrade and see if that resolves the issue.

## Software versions

The most stubborn bugs appear intermittently, in some environments, for some people.
When this happens, the support team will need to try a software environment closer to the reporter’s environment.
In general, reproducing a bug depends on the version of more than part of the software stack.

The relevant environment depends on the kind of software.
For web applications, the web browser and version have a big impact, because newer browsers implement newer technologies such as CSS and JavaScript features that the software may require.
The operating system and version _usually_ matters less, but may still affect some behaviour.

## Timestamps

Meanwhile, SaaS products usually only run a single version, and frequently release new versions without anyone noticing, often daily.
If you see a problem on Monday morning, and submit a bug report on Tuesday, a Monday afternoon release might have fixed the issue, leading to confusion about why someone reported the bug _after_ a new release fixed it.

Frequent releases mean that bug reports usually concern the latest version, but also make the date and time when you _observed_ the issue important.
The exact time you saw the bug may also coincide with other known issues, and will also make it easier for the support team to check system logs from when you saw the issue.

## Integration

When you use two products together, you might only experience a bug with a specific combination of versions.
Meanwhile, the support team probably only knows about issues with historical pairs of contemporary latest versions.

Integration scenarios get worse when separate _connectors_ have their own versions of software that implements the integration between two products, such as how Zapier provides middleware between a photo sharing web site and the social media platform it automatically posts photos to.
Now each integration has three software versions to consider.

## Other environmental context

Below the software versioning tip of the iceberg, other factors challenge bug reproducibility.
Software internationalisation offers several more dimensions where bugs can hide.

Reproducing bugs gets harder if you first have to change the software or your operating system to a different language.
Dutch and German tend to use more space than English, for example, and break user-interface layouts.
And it gets worse: languages that use a different alphabet can introduce font issues as well.
