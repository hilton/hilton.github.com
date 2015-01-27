---
title: camunda developer-friendly BPM
description: a Business Process Management platform by and for developers
tags: BPM
layout: hh
---

Following my earlier look at [Effektif](effektif-hosted-bpm), here is a first look at another process management platform - [camunda BPM](http://camunda.org):

<blockquote class="big" style="max-width:29em"><p>camunda BPM is a Business Process Management platform dedicated to Java developers and their typical software development infrastructure.</p></blockquote>

This article explains how camunda BPM is different and how it appeals to developers.


## What camunda BPM is for

Suppose you’re building software to support an insurance business and you want software support for claims processing, then a [process-centric design](process-centric-design) approach is a good way to start. You could model the business process graphically using [Business Process Model and Notation](http://en.wikipedia.org/wiki/Business_Process_Model_and_Notation) (BPMN) and use this model to define how to run the process using software that keeps track of every ‘process instance’. You don’t have to build this from scratch; you can use a Business Process Management (BPM) platform.

camunda BPM, like its ancestors [jBPM](http://en.wikipedia.org/wiki/JBPM) and [Activiti](http://en.wikipedia.org/wiki/Activiti_(software%29), is a BPM platform, centred around a runtime engine for executing business processes design using an included modelling tool. This kind of BPM software is intended to close the gap between business analysts’ views of business processes and actual software that automates those processes. 


## The camunda hypothesis - who camunda is for

Initially, the most striking thing about camunda BPM is how describes itself as ‘developer-friendly’. This is related to [The camunda Hypothesis](http://blog.camunda.org/2013/04/the-camunda-hypothesis.html), which is that:

<blockquote class="big solid-two" style="max-width:29em"><p>‘While there are reasonable use cases for zero code BPM Suites, they are not the right approach for automating business processes that execute an IT based business model.’</p></blockquote>

In this scenario, software developers and successful software development are business-critical, and the success of software tools partly depends on whether these tools feature a good [developer experience](http://uxmag.com/articles/effective-developer-experience) and hence whether developers like them. Simply by recognising this, camunda BPM is already more appealing than the average enterprise middleware platform.


## camunda BPM and Activiti

A good question to ask about camunda BPM is how it differs from Activiti. After all, the process engine was originally a synchronised branch of Activiti until [camunda announced a permanent fork in March 2013](http://blog.camunda.org/2013/03/camunda-forks-activiti-and-launches.html).

The initial difference is in vision and audience. While the camunda hypothesis means a product dedicated to developers, [Activiti’s vision](http://activiti.org/vision.html) is to serve multiple groups: Activiti is ‘targeted at business people, developers and system admins’. This difference results in diverging feature sets and road maps.

To target enterprise Java developers, camunda offers container integration with Java EE application servers. This helps developers by defining deployment architecture choices and simplifying integration.

For process implementations, camunda BPM offers more control over transaction boundaries within business processes, to better support unattended batch workflows - what the Germans call ‘dark processing’ (_Dunkelverarbeitung_). Activiti’s initial Enterprise Content Management (ECM) leans more towards human tasks - filling-in forms, for example.

camunda BPM also has a more extensive plugin architecture, with more kinds of plugins, for both the process engine and the process management web application.

No doubt, Activiti has its own set of advantages over camunda BPM.


## Documentation and examples

Ultimately, things like visions, integrations and plugins aren’t the most important factors in developer experience. Those would be documentation and code examples.

The camunda BPM [documentation](http://docs.camunda.org/latest/) includes an extensive well-written user manual. The getting started guides are easy to follow, and give a quick initial hands-on experience. There’s a lot to read, including application server-specific instructions.

A first look at the [examples](http://camunda.org/examples/) ([GitHub repository](https://github.com/camunda/camunda-bpm-examples)) and the [consulting team demos/examples/snippets](https://github.com/camunda/camunda-consulting) reveals a lot of code to learn from. Reading other people’s code is perhaps the only real way to close the gap between high-level middleware concepts and actual solutions.


## Criticism

camunda BPM’s key strength is that it includes container integration for the main Java EE application servers, including Tomcat, JBoss AS, WebSphere and WebLogic. This is also its weakness. Java EE applications servers are the dominant runtime environments in the IT-based businesses that camunda serves. However, in one sense, these are technologies of the last decade, not the next decade.

camunda BPM currently lacks a clear place in the growing world of standalone cloud deployments and microservices. By focusing on deployment in traditional enterprise environments, camunda does not cater for those organisations that are evaluating or using different architectures. Fortunately, though, the camunda BPM process engine does not depend on a Java EE environment, so there is no technical reason why it couldn’t be used in, for example, a [12 Factor](http://12factor.net) architecture.

_The author wrote this article following a visit to camunda’s Berlin headquarters._
