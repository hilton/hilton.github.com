---
title: Process-oriented reactive service architecture
description: Using workflow tools to orchestrate microservices and human workers
layout: speaking
---

Reactive application development gives us better ways to build scalable applications, but often together with a micro-services jigsaw puzzle. Decoupled teams can rapidly deliver decoupled services, but you still need to piece together an end-to-end system. This presentation introduces an alternative way to think about and architect reactive applications using workflow tools.

Modern workflow management tools enable a convenient process-oriented approach to service orchestration that is itself reactive. More importantly, process management technology provides two key features that hand-coded applications typically lack: persistent execution state and an editable graphical process representation that you can use to define and adjust service orchestration. After learning how to coordinate micro-services, you will also and how to use the same system to orchestrate micro-service-like human workers. It turns out that with the right platform, human actors can also be reactive services, and participate in the same architecture.

## Outline

Part 1: reactive programming and microservices

* Reactive programming recap - async and parallel execution
* Microservices recap - network-based service decomposition
* The orchestration problem - reactive code to coordinate µservice calls

Part 2: orchestrating service calls using workflow

* Rediscovering workflow for service orchestration
* Workflow makes execution state persistent - like continuations
* Workflow gives you a graphical representation of the orchestration

Part 3: workflow as the missing ingredient for microservices

* Microservice coordination using workflow
* Why human workers are like microservices
* Human task coordination using workflow

## Conference presentations

* [Topconf Tallinn](http://topconf.com/tallinn-2016/trackevent/process-oriented-reactive-service-architecture/) - 16/17 November 2016
