---
title: Scriptable microservice orchestration
description: A new software category for serverless and microservice architectures
layout: speaking
---

Microservices adoption is accelerating and making our architectures more complex. This trend towards smaller services and serverless computing means we need a new kind of software to stitch services together and coordinate their execution. This talk introduces _microservice orchestration platforms_ and compares the main products in this new category: AWS Step Functions, Netflix Conductor, Microsoft Logic Apps and Apache OpenWhisk. Attendees will learn about these products and their differences.

Existing microservice orchestration products don’t fully satisfy developers who use cloud platforms, and who face new challenges. We will demo a brand new solution to the orchestration problem: Rockscript, our JavaScript-like orchestration scripting language designed around developer experience. Rockscript has language level support for asynchronous execution, long-running functions and persistent execution state, and avoids the graphical ‘languages’ that business people love and coders hate. Our event-driven runtime architecture gives you resilient persistent execution that can recover from crashes, and the ability to replay what happened in production - both forwards and backwards.
