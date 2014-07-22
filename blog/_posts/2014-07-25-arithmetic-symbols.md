---
title: Arithmetic symbols in source code
description: Why ASCII’s fifty year-old legacy is still with us
layout: hh
published: false
---

<p style="font-weight:bold; width:4.8em; font-size:10em; line-height:70%"><span style="color:#334D5C">+</span> <span style="color:#45B29D">−</span> <span style="color:#E27A3F">×</span> <span style="color:#DF5A49">÷</span></p>

Despite being rather long (around 6000 words) the [Wikipedia article on ASCII](http://en.wikipedia.org/wiki/ASCII) doesn’t seem to give any clues about why its 128 characters don’t only include two of the four basic arithmetic operations: `+` and `-` are included, but not `×` or `÷`. The standard was first published in 1963, so perhaps no-one can remember. Perhaps typewriters are to blame.

In principle, ASCII shouldn’t matter any more, now that Unicode encoded as UTF-8 has been around for _twenty years_. What’s more, as first [reported by Google](http://googleblog.blogspot.co.uk/2008/05/moving-to-unicode-51.html) in 2008, UTF-8 is the most common encoding for web pages, which is how pages like this one can display multiplication and division symbols without using the HTML entities (`&times;` and `&divide;`) in the page source.

## Programming languages

For some reason, modern programming languages remain steadfastly faithful to ASCII characters in their language specifications, leaving us to perform multiplication and division with substitute characters: `*` and `/`, years after the point that this seems necessary.

Scala is interesting, because of the way you can define operators and use them as if they were part of the language. You can add `×` to numeric types, as an alternative multiplication operator, although perhaps with operator precedence issues. Here’s a simplified example, on the Scala console:

{% highlight scala %}
scala> implicit class RichInt(val n: Int) extends AnyVal {
     |   def ×(m: Int) = m * n
     | }
defined class RichInt

scala> 3 × 4
res0: Int = 12
{% endhighlight %}

The only strange thing is that this isn’t built-in, for all of the ASCII operators that are really just approximations of the exact symbol, such as `≠` instead of `!=`.

It would of course be inconvenient if you always had to type these in, with a keyboard that lacks these characters, but there are other options. In Scala, you can already use [scalariform](https://github.com/mdr/scalariform) with the [rewritearrowsymbols](https://github.com/mdr/scalariform#rewritearrowsymbols) option, which replaces ASCII art arrows (`=>` and `<-`) with the Unicode equivalents that Scala does support (`⇒` and `←`). Nice, but something of a work-around.

## ASCII art API methods

Note that the conventional ASCII art arithmetic operators, such as `<=`, `>=` and `!=` are not the same kind of thing as the ASCII art API methods that appear in some Scala APIs. My favourites are `<|*|>`, the Scalaz ‘spaceship operator’, and `><>`, the Play framework ‘fish operator’.

Arithmetic symbols meanwhile, such as `≠` and `≥`, are sufficiently fundamental for kids to learn at school. The same can’t be said for any Scala libraries, however FP-hip they may be. That’s not what this article is about, just so you know.

## Logical operators

I will concede that mathematical logic symbols are a grey area, because they are specialist notation (not taught to school children). The symbols for disjunction and conjunction (`∧` and `∨`), for example, are more than 100 years old (via [Jeff Miller](http://jeff560.tripod.com/set.html)), though, so it wouldn’t be that weird to want to use them instead of `&&` and `||` in programming languages.
