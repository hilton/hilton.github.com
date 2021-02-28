---
title: Formatting Clojure source code
description: The one thing that emacs can’t do
tags: Clojure
layout: hh
---

![A typewriter](typewriter.jpg)

<a class="unsplash" href="https://www.flickr.com/photos/kruemi/3391634807" rel="noopener noreferrer"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span>Marco Tedaldi</span></a>

The problem with Clojure source code is that there are too many parentheses. Clojure code is inherently hierarchical, which is what the parentheses show, so it’s a problem if it isn’t easy to see the structure. This is why Clojure programmers tend to apply what David Bryant Copeland calls [Source Code Typography](http://www.naildrivin5.com/blog/2013/05/17/source-code-typography.html) - indentation and syntax highlighting.

I’m not a Clojure programmer, so I don’t really know anything about this, but I’m pretty sure there’s something wrong here. There are two reasons why this could be better. First, though, let’s see what Clojure code normally looks like.


## Standard Clojure formatting

For example, [Learn Clojure with Project Euler](https://ochronus.com/learn-clojure-with-project-euler/)
contains some tidy Clojure snippets. The problem 1 solution, which finds the sum of all the multiples of 3 or 5 below 1000, is given as:

{% highlight clojure %}
(reduce + (set (concat (range 0 1000 3) (range 0 1000 5))))
{% endhighlight %}

This is a simple example, so it’s fairly easy to read; the syntax highlighting helps too. There are still four levels of hierarchy, however, shown by the four closing parentheses at the end of the line. I suspect that the limit of what’s readable is five levels, which suggests ‘no more than five consecutive parentheses’ as a Clojure coding standard.

The problem 2 solution, which sums even-valued Fibonacci sequence terms up to four million, is not much more complex, although it also has four-levels of nesting:

{% highlight clojure %}
(def fibo (lazy-cat [0 1]
                    (map + fibo (rest fibo))))

(reduce + (take-while (partial >= 4000000)
                      (filter even? fibo)))
{% endhighlight %}

In addition to syntax highlighting, manual indentation also helps readability. It could be better though.


## Typography and mathematics

The first problem with formatted source code as we know it is the lack of typography. Although the [Source Code Typography](http://www.naildrivin5.com/blog/2013/05/17/source-code-typography.html) article is a reasonable discussion of source code layout for readability, using the word ‘typography’ is an insult to everyone who does [real typography](http://en.wikipedia.org/wiki/Typography). The second sentence of that Wikipedia page already illustrates why in its definition of typography:

> The arrangement of type involves the selection of typefaces, point size, line length, leading (line spacing), adjusting the spaces between groups of letters (tracking) and adjusting the space between pairs of letters (kerning).

Not a single one of these adjustments is possible within the source code in any development environment I have ever seen. Not even emacs. When is the last time you saw in information-rich printed document whose layout and typography was limited to what you can do on a typewriter?

The second problem with (or opportunity for) the Clojure source code is that the main issue - hierarchy and parentheses - has been solved for a long time in printed mathematical notation. By applying the typographical innovation of variable font size, together with some layout, we can transform the likes of the two project Euler solutions.


## Formatted Clojure

Without thinking too hard about it, a mathematical notation point of view makes it natural to transform the first example, from:

{% highlight clojure %}
(reduce + (set (concat (range 0 1000 3) (range 0 1000 5))))
{% endhighlight %}

to, say:

![Problem 1 solution](clojure-euler-1.png)

In this simple example you can already see how the parentheses’ variable font size, however subtle, makes the hierarchy more visible.

Similarly, we can transform the second example, from:

{% highlight clojure %}
(def fibo (lazy-cat [0 1]
                    (map + fibo (rest fibo))))

(reduce + (take-while (partial >= 4000000)
                      (filter even? fibo)))
{% endhighlight %}

to:

![Problem 2 solution](clojure-euler-2.png)

Both examples show a different kind of line wrapping to what we’re used to in source code: where expressions break across multiple lines, the outer parentheses span these lines and still match horizontally. The result is a very different approach to presenting the code, without even using colour.


## MathML implementation

One suitable technology for this formatting already exists - [Mathematical Markup Language (MathML)](http://www.w3.org/TR/MathML3/), developed for mathematical notation. The best thing about using MathML is that you get automatic layout, so there’s no need to manually position each text element.

The examples above are based on screenshots of the following MathML, rendered in the browser. This mostly worked as planned, although there are issues with support for forced line breaks in my browsers, so I cheated and used fractions - `mfrac` elements.

### Problem 1

{% highlight xml %}
<math xmlns='http://www.w3.org/1998/Math/MathML' display='block'
  style='width:640px; font-size:1.2em; padding:0.5em 0'mathbackground='#f5f5f5'>
  <mfenced separators='&nbsp;'>
    <mtext>reduce</mtext>
    <mo>+</mo>
    <mfenced separators='&nbsp;'>
      <mtext>set</mtext>
      <mfenced separators='&nbsp;'>
          <mtext>concat</mtext>
          <mfrac linethickness='0'>
            <mfenced separators='&nbsp;'>
              <mtext>range</mtext> <mn>0</mn> <mn>1000</mn> <mn>3</mn>
            </mfenced>
            <mfenced separators='&nbsp;'>
              <mtext>range</mtext> <mn>0</mn> <mn>1000</mn> <mn>5</mn>
            </mfenced>
          </mfrac>
      </mfenced>
    </mfenced>
  </mfenced>
</math>
{% endhighlight %}

### Problem 2

{% highlight xml %}
<math xmlns='http://www.w3.org/1998/Math/MathML' display='block' 
  style='width:640px; font-size:1.2em; padding:0.5em 0'mathbackground='#f5f5f5'>
  <mfenced separators='&nbsp;'>
    <mtext>def</mtext>
    <mi>fibo</mi>
    <mfenced separators='&nbsp;'>
      <mtext>lazy-cat</mtext>
      <mfrac linethickness='0' numalign="left">
        <mfenced separators='&nbsp;' open="[" close="]">
          <mn>0</mn> <mn>1</mn>
        </mfenced>
        <mfenced separators='&nbsp;'>
          <mtext>map</mtext> <mo>+</mo> <mi>fibo</mi>
          <mfenced separators='&nbsp;'>
            <mtext>rest</mtext>
            <mi>fibo</mi>
          </mfenced>
        </mfenced>
      </mfrac>
    </mfenced>
  </mfenced>
</math>

<math xmlns='http://www.w3.org/1998/Math/MathML' display='block'
  style='width:640px; font-size:1.2em; padding:0.5em 0'mathbackground='#f5f5f5'>
  <mfenced separators='&nbsp;'>
    <mtext>reduce</mtext>
    <mo>+</mo>
    <mfenced separators='&nbsp;'>
      <mtext>take-while</mtext>
      <mfrac linethickness='0' denomalign="left">
        <mfenced separators='&nbsp;'>
          <mtext>partial</mtext>
          <mo>≥</mo>
          <mn>4000000</mn>
        </mfenced>
        <mfenced separators='&nbsp;'>
          <mtext>filter</mtext>
          <mo>even?</mo>
          <mi>fibo</mi>
        </mfenced>
      </mfrac>
    </mfenced>
  </mfenced>
</math>
{% endhighlight %}


## Clojure implementation

Writing a Clojure program that presents Clojure source as editable MathML is left as an exercise for the reader :)
