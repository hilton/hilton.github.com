---
title: Language expressiveness versus code maintainability
description: How different programming languages lead to different software maintenance challenges
layout: hh
tags: code maintenance
image: factory3.jpg
---

![](factory3.jpg)

[Crystal Kwok](https://unsplash.com/photos/XUEdfpPIhXg){:.photocredit}

Some programming languages, such as Scala and Perl, aim to be as expressive as possible, giving you maximum flexibility in how you write your code.
Other languages, such as Java and Go, prefer or even force a single coding style, giving you more consistency.
On top of all of the other pros and cons of these two approaches, these choices affect code maintainability.

The good news is that neither programming language style makes it much harder than the other to write maintainable code.
The bad news is that both coding styles give you significant maintainability issues.
This article considers the trade-offs.

## Smaller code is more maintainable

The most effective way to write maintainable code is to write less of it.
Functional languages do well at maintaining code more concise, and anyone who has ported Java code to Scala will know what the most striking change is the reduction in the number of lines of code.

Other things being equal, more concise code is easier to browse and easier to change, and there are several ways to make your code more concise.
However, other things aren’t equal, so making your code more concise may end up making it less maintainable.

## Non-standard annotations harder to learn

Java developers have a long history of reducing repetitive lines of code, by introducing annotation-based libraries such as [Project Lombok](https://projectlombok.org).
The result is less verbose code in a non-standard dialect.

Non-standard coding idioms give you a trade-off between long-term coding efficiency and the short-term cost of teaching the style to new team members.
The best choice for the most maintainable code depends on how fast the team rotates.
This is hard to predict, but easier to observe: if you use a non-standard dialect, and all of your code has a consistent style, then you don’t have a problem keeping up with team rotation.
If you have code in different styles then it isn’t working.

Non-standard libraries and language extensions, such as Java annotation libraries, and JavaScript variants, such as CoffeeScript, aren’t the only way to end up with team-specific coding styles.
Some languages give you that out-of-the-box.

## Team-specific coding styles hard to preserve

The old Perl motto that [There’s more than one way to do it](https://en.wikipedia.org/wiki/There%27s_more_than_one_way_to_do_it) is both Perl’s blessing and curse.
Like Perl, Scala simultaneously supports more than one coding idiom.
This isn’t a code maintenance issue until you have more than one programmer on your team.

{:.big style="max-width:33em"}
> Half of the Scala developers are just writing Java code without semi-colons.
> The other half are writing Haskell.

You can, of course, solve this by adopting a team coding style that suits your situation.
However, these team coding styles are hard to preserve.
Over time, team members will follow different interests and grow in different directions.
With functional programming languages, in particular, it’s hard to preserve a consistent style when half (rather than all or none) of the team are also learning Haskell.

## Cross language styles require double the background

Multi-paradigm languages such as Scala offer the best of two worlds - object-oriented programming and functional programming.
To write maintainable code, however, you need to avoid the worst of both worlds.

Object-oriented programming is hard to do well.
After all, most Java code is really just procedural code in classes.
Functional programming is also hard to do well, no matter now many monad tutorials we write.
Being good at both at the same time, as a team, is even harder because there are two paradigms to learn.

C++ offers another example of a diverse language, which probably has more language versions than there are members of your development team.
Pick one.

## Team-specific approach wins

You need a team-specific coding style to achieve consistent maintainable code.
A language like Go helps you do this by [dictating what that style is](https://golang.org/doc/effective_go.html#introduction), and offering relatively little language flexibility.
This is fine, as long as you like it.

Programmers learning Scala, on the other hand, frequently ask for guidance on what idiomatic Scala code looks like.
Answers are of course available, but don’t all agree with each other.

Python seems to occupy space in between: more language flexibility but with such a strong community tradition of what idiomatic Python code looks like that it has its own term - [Pythonic](https://blog.startifact.com/posts/older/what-is-pythonic.html).
Perhaps this factor alone makes Python the best teaching language.

## Conclusion

Languages that let you write the most concise code have the potential to be most maintainable, because brevity is a big advantage.
However, this potential advantage is all for nothing if you fail to achieve a consistent coding style, or fall prey to [naming smells](naming-smells).
After all, in the long term an application code base (rather than a library) will become large whatever language you are using.

Languages with constrained coding styles make it easier to write maintainable code, at the cost of more code to maintain.
If this extra code is the cost of having _maintainable_ code, in your case, then that’s a worthwhile trade-off.

The practical difficulty of writing maintainable code in more expressive languages is no doubt the secret to Java and Go’s success.
Personally, although I’d rather write Scala code than Java, I’d also rather maintain someone else’s Java code than someone else’s Scala.

_When you need help thinking through software maintenance, [contact Peter Hilton](../contact) for training in [How to write maintainable code](../training/maintainable-code)._
