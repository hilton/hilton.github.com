---
title: Escaping from primitives
description: how to use better domain types
layout: speaking
---

The fastest way to write a simple application is often to put all of the code in one class, and use plain strings and numbers for all of the data. However, monolithic classes and stringly-typed data don’t result in the most maintainable code. So what’s a good way to get started with the refactoring you know you need, instead of procrastinating until you have five-thousand line incomprehensible monster on your hands?

This talk introduces a coding exercise (for you to try at home) that shows you how to get started with refactoring stringly-typed code, by replacing primitive types. Primitive types are built-in or ‘technical’ types like strings, numbers, dates and files, that have no particular meaning in the problem domain. The alternative is a coding guideline to avoid primitive types in favour of domain types, which then enable further refactoring and cleaner code.

Ruby source code for the exercise, shown in the talk, is in the repository at [https://github.com/codurance/task-list](https://github.com/codurance/task-list).


