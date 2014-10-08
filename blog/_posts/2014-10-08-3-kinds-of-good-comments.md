---
title: 3 kinds of good comments
description: Code tells you what and how - you need comments to say why
tags: programming
layout: hh
---

![Nous sommes les acteurs de nos existences](existence.jpg)

I’m sure you’re not going to write [bad comments](7-ways-to-write-bad-comments) in code, so there’s no need to discuss that, but I’m not sure that you’re going to write good comments either. In fact, I’m not sure that you’re going to write comments at all.

Too many discussions about code commenting seem to conclude that there are so many kinds of bad comments that you’d probably be better off with no comments at all. Perhaps your code really is so bad that you could improve the average comment quality by deleting all of the comments.

The truth about code comments is that if you don’t write any, because they would make your code worse, then there’s a powerful language feature that you don’t know how to use and questions that your code doesn’t answer:

> Why is this code here?  
> What is it _for?_  
> Why is the functionality implemented _this_ way?  
> Why is that the functionality?  
> When shouldn’t you use this code?

This article addresses these questions and introduces three kinds of good code comments.


## Explain why code exists

Good comments are answers to questions that maintainers will have about your code. For example, suppose you are maintaining some code and come across the following value object class: does it require an explanatory comment?

{% highlight scala %}
case class Kitten(photo: URL, cutenessScore: Int, age: Duration)
{% endhighlight %}

Perhaps not, if you’re building a pet shop catalogue, but you’ll definitely want an explanation if you come across this while maintaining a trading system for a merchant bank. As usual, obviousness depends on context.

The fundamental questions to ask about code are:

> Why is this code here? What is it _for?_

If you can write a clear answer to these questions in a single sentence, then that’s a candidate for a good comment. If you can’t answer these questions, perhaps you should just remove the code.

A block of code cannot explain why it exists, however clean and beautiful it is. Instead, write a comment that explains why the code is there:

{% highlight scala %}
// Photo of a kitten to console a trader after a loss, with 
// cuteness proportional to the magnitude of the loss.
case class Kitten(photo: URL, cutenessScore: Int)
{% endhighlight %}

When not to write this kind of comment: when the code is obviously an essential part of the code around it, in a larger scope. Whether this is obvious depends on the code around it, and how easily you can see this larger scope.


# Explain implementation choices

When you write clean code, it is clear how the implementation works. For example, the following code divides an amount of money by two, and even has a comment that explains why the code exists.

{% highlight scala %}
// Returns half of the given amount, so we can split the bill.
def half(amount: Money) = amount.dividedBy(2, RoundingMode.UP)
{% endhighlight %}

But why are we using [Joda Money](http://www.joda.org/joda-money/) instead of just dividing a numeric amount? The code cannot explain why you didn’t choose a different implementation - an alternative approach or a different algorithm. 

Also, why does the division round up, rather than down or to the nearest amount? The same kind of question applies to the functional details, as well as the implementation approach.

Now you have to answer more questions about the code, which a maintainer will not be able to answer by studying the implementation:

> Why is the functionality implemented _this_ way? Why is that the functionality?

If you chose one approach over another, then this is worth documenting in the code, to warn against refactoring to the lesser approach.

Again, there’s a trade-off here: if you say anything about rounding the result, in this example, then you have duplicated information that’s in the code, and you will have to change the comment if you change the rounding mode in the code. On the other hand, if you don’t mention the rounding mode then you don’t know whether the original developer chose it by tossing a coin (in which case it’s guaranteed to be wrong).

One special case is when you optimise a section of code in a different way to the rest of the code base. When you write bespoke business software, for example, you should probably optimise for maintainability by default, because support and maintenance represents the largest system cost. However, there might be some code that require performance optimisation: this code should explain that its implementation is subject to different design constraints - execution speed rather than code readability.

When not to write this kind of comment: if the implementation is the first one you thought of, or the first one that worked, because the maintainer is free to rewrite the code with a different approach.


## Explain pre-conditions, restrictions and limitations

Code may have requirements for or limitations on its use. For example, you might imagine that the following function can always estimate a kitten’s cuteness:

{% highlight scala %}
def estimateCuteness(kitten: Kitten): Int = { … }
{% endhighlight %}

However, perhaps the function fails when the kitten is dead or if it is more than a year old (and therefore not a kitten). We therefore have to consider another question:

> When shouldn’t you use this code?

These are reasonable restrictions to document in a comment:

{% highlight scala %}
// Returns a cuteness estimate for non-dead kittens less than one year old.
def estimateCuteness(kitten: Kitten): Int = { … }
{% endhighlight %}

The need for this kind of comment is arguable, because the code might be able to make it clear what these pre-conditions are. This introduces the trade-off between adding comments so that you can understand a function from its interface - the function signature and any explanation in the comment - versus having to read the implementation to find important details.

Sometimes, a restriction is an implicit TODO task, to remove the restriction:

{% highlight scala %}
// TODO Modify the algorithm to return zero for dead kittens, which are not cute.
// TODO Throw an IllegalArgumentException for cats that are too old to be kittens.
def estimateCuteness(kitten: Kitten): Int = { … }
{% endhighlight %}

When not to write this kind of comment: if you can find a way to make it clear in the code what the restrictions are or, even better, enforce them in the types you use. For example, the `Kitten` type could already enforce an age less than one year. In fact, if you find yourself writing detailed comments about function parameters and return values, then perhaps you should move to a more strongly-typed programming language.

_Photo: [jmenj](https://www.flickr.com/photos/jmenj/9597334273) / [CC BY-ND 2.0](https://creativecommons.org/licenses/by-nd/2.0/)_

