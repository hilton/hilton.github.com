---
title: Zero-bug policy adoption
description: from initial discussion to zero open bugs in seven months
layout: hh
tags: agile
image: bug-green-caterpillar.jpg
---

![](bug-green-caterpillar.jpg)

[Bankim Desai](https://unsplash.com/photos/FEnD-sxHcWk){:.photocredit}

{:.series}
1. [Zero-bug policy](zero-bug-policy)
2. [Zero-bug scenarios](zero-bug-scenarios)
3. [Fix It Now or Delete It](fix-it-now-or-delete-it)
4. Zero-bug policy adoption ←
5. [Zero-bug policy success](zero-bug-success)
6. Zero-bug policy questions

When I first wrote about [implementing a zero-bug policy](zero-bug-policy) in 2021,
I didn’t know what it would take to actually adopt one.
Last year I found out.

## Context

Software development methods depend your context.
This story took place at [På(fyll)](https://pafyll.com/en-NO), a twenty-person start-up,
on a fully-remote product team with six developers, which I joined as project manager.
Half of us had worked together at a previous company, and we benefited from
[an excellent agile coach](https://www.linkedin.com/in/sofia-katsaouni-96111113b/),
a clear business goal, and the freedom to figure out how to get there.

The software supports
[På(fyll)’s circular service](https://pafyll.com/en-NO/hva-er-pafyll/om-pafyll/hvordan-fungerer-det/slik-fungerer-pafyll-fra-a-til-a) to 
[reduce single-use plastic consumption](https://pafyll.com/en-NO/hva-er-pafyll/sirkulaer-okonomi/baerekraft/slik-blir-du-plastsmart-med-påfyll).
This includes a marketing web site and web shop for Norwegian consumers, and a logistics back-end.
We also maintain internal [CRM](https://en.wikipedia.org/wiki/Customer_relationship_management) and
[ERP](https://en.wikipedia.org/wiki/Enterprise_resource_planning)
tools that provide supply chain visibility.

## Initial discussion

The idea to ‘adopt a zero-bug policy’ emerged in a 26 January 2024 team retrospective.
Follow-up discussions in February and March then
gave the team space to [discuss how it might work](zero-bug-scenarios).

Meanwhile, we had started preparing for a spring marketing campaign,
which we expected to increase web site traffic.
At the time, the web shop had both known bugs and outstanding testing.
We’d already started fixing bugs when the marketing campaign revealed many more.

## Bugs hurt

New bug reports filled the `#bugs` Slack channel and overwhelmed the team.
We struggled with:

* spending too much time on support requests
* keeping track of known issues
* disliking discussing and prioritising bugs
* broken functionality blocking experiments to improve customer activation (first purchase).

These issues changed the zero-bug policy from an abstract idea to an opportunity to relieve the pain.
Meanwhile, I had realised that we needed to move past
[some unresolvable discussions](zero-bug-scenarios), and actually try it.
So we adopted a zero-bug policy and started fixing bugs.

## Fighting back

You can adopt a zero-bug policy by deleting all open bug reports, and starting again.
But after deleting old bug reports (more than six months old), we didn’t have many open bugs _yet_:
on 1 May 2024, we only had sixteen (serious) open bugs.
So we started fixing them instead.

Throughout May and June we only worked on fixing bugs.
We all found this hard, but doing it together felt good, as did our progress.
We fixed 62 bugs in those two months, and started July with seven open bugs.

## Slowing down

By the start of July, the number of new bug reports had slowed down, leaving only relatively minor open bugs.
At the same time, we couldn’t sustain 100 per cent focus on bugs any longer,
and wanted to work on something else, so we reduced bug fixing to 50 per cent of our work.

The work got more interesting, as we explored other ways to improve customer activation,
but also made decision-making harder.
In one retrospective, a developer noted that ‘zero-bug policy pissed me off this week’,
after the policy dictated fixing a minor bug before continuing higher-impact work.
Fortunately, we had come close to having more flexibility.

## Zero-bug day

Like the _fighting back_ period, _slowing down_ also lasted two months – July and August.
On 28 August 2024, we celebrated **zero-bug day**: the first time that we had zero open bugs.
It wouldn’t last – another bug report would inevitably arrive soon –
but it marked the beginning of **zero-bug policy success**.
