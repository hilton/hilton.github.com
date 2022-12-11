---
title: Source code maximum line length
description: GitHub sets the standard for code reviews
tags: Scala
layout: hh
image: tape-measure.jpg
---

![](tape-measure.jpg)

Sooner or later, a software development team has to settle on a standard for the maximum line length for source code. They might even add it to a written [coding standard](missing-from-scala-style-guide). The thing is, that different people and teams don’t often agree on how long a line of code can be. It turns out that _it depends_.

## How long is a line of code?

**80 characters per line** is the traditional length because, you know… [punched cards](http://en.wikipedia.org/wiki/Punched_card#IBM_80-column_punched_card_formats_and_character_codes). Even though the IBM card format dates from 1928 - so not yet _antique_ - this remains enduringly popular, becoming further set in stone in the 1978 [VT 100](http://en.wikipedia.org/wiki/VT100) DEC video terminal that became its own _de facto_ standard. 80 characters per line is still going strong today, perhaps through little more than its own inertia, and perhaps programmers’ ironic conservatism. Fortunately, if you’re using [vim](http://en.wikipedia.org/wiki/Vim_(text_editor)), you can always set your window to 80 columns and write short lines of code:

```scala
  // https://github.com/derekwyatt/vim-scala/blob/master/indent/testfile.scala#L36
  def someFunc = {
    if (b) 1
    else {
      if (b) 2
      else
        3
    }
```

**132 characters per line** is another traditional format - the other VT100 display mode, and related 132 column [dot-matrix printers](http://en.wikipedia.org/wiki/Dot_matrix_printing). 132 characters also seems to be the maximum line length in [Fortran](http://en.wikipedia.org/wiki/Fortran). In fact, this is probably about the longest line length in common use among programmers, although the Scala source code occasionally includes even longer lines.

{: style="width:60em"}
```scala
  // https://github.com/scala/scala/blob/2.11.x/src/library/scala/collection/immutable/Map.scala#L79
  class WithDefault[A, +B](underlying: Map[A, B], d: A => B) extends scala.collection.Map.WithDefault[A, B](underlying, d) with Map[A, B] {
    override def empty = new WithDefault(underlying.empty, d)
    override def updated[B1 >: B](key: A, value: B1): WithDefault[A, B1] = new WithDefault[A, B1](underlying.updated[B1](key, value), d)
    override def + [B1 >: B](kv: (A, B1)): WithDefault[A, B1] = updated(kv._1, kv._2)
    override def - (key: A): WithDefault[A, B] = new WithDefault(underlying - key, d)
    override def withDefault[B1 >: B](d: A => B1): immutable.Map[A, B1] = new WithDefault[A, B1](underlying, d)
    override def withDefaultValue[B1 >: B](d: B1): immutable.Map[A, B1] = new WithDefault[A, B1](underlying, x => d)
  }
```

**120 characters per line** sometimes emerges as a compromise, when longer lines seems like an outlandish decadence or, like 100 characters per line, a round number compromise.

**72 characters per line** is the longest line length that Manning allows in their books’ code listings. This is uncomfortably short, and wrapping lines to fit this was the least fun part of writing [Play for Scala](http://bit.ly/playscala2p).

```scala
// Play for Scala listing 2.33 - a Play Framework controller action
def save = Action { implicit request =>
  val newProductForm = this.productForm.bindFromRequest()

  newProductForm.fold(
    hasErrors = { form =>
      Redirect(routes.Products.newProduct()).
        flashing(Flash(form.data) +       
        ("error" -> Messages("validation.errors")))
    },
    success = { newProduct =>
      Product.add(newProduct)
      val message = Messages("products.new.success", newProduct.name)
      Redirect(routes.Products.show(newProduct.ean)).
        flashing("success" -> message) 
    }
  )
}
```

72 characters is also the _default_ fixed line length in Fortran, which is just an uncomfortable language.


## Not too long

If you want to know how long a line of code _should_ be, given that it depends, then you need to think about when it’s too long and when it’s too short. I have compiled a list of ways to tell that a line of code is too long:

1. You can’t read a whole line of code without truncation, scrolling or automatic wrapping.

And that is all. When it comes to what is _too long_, it depends on how big your monitor is and how big your editor window is on that monitor. This is very much a matter of choice: you can choose to code on an 11-inch MacBook air, work for a company that makes programmers use tiny square monitors, or fill your screen with lots of 80 column terminal windows. You don’t have to do those things, but you can if you want to.

Granted, I’m ignoring the potentially problem with being able to visually scan long lines of text, which is why newspaper columns are narrow. I think of a line of code is more like a whole paragraph of prose, so you don’t scan from one line to the next in the same way when you read, and has more internal structure than written language.

## Not too short

The maximum line length can be too short as well, for various reasons.

1. Code uses more vertical space, so you can see fewer lines at a time.
2. Lines of code frequently require wrapping across two or more lines.
3. The coding style tends towards short and abbreviated names, to avoid wrapping.

Probably the main reason for changing the maximum line length, in either direction, is to be able to view more code on the screen at once. Too long, and you can’t see the right hand side; too short and you can’t see all of the lines.

Line-wrapping can be even worse for vertical space use than just the extra wrapped lines. Sometimes, the line continuation indentation is not enough to make it visually clear enough where new statements start, so you have to choose between two bad options: less readable code, or losing even more vertical space to blank lines.

The worst consequence of short lines, however, is the tendency towards short names. The only thing that starting to maintain someone else’s legacy code is when it was all written in small terminal windows, and is full of 1-3 character variable names. When there isn’t enough screen space for longer lines, horizontally, or more lines, vertically, then you have to keep more of the code in your head. If you have space, then it is easier to read your code if you [only use English words in code](use-english-in-code).


## GitHub is the _de facto_ coding standard

**125 characters per line** is the real _de facto_ coding standard for maximum line length these days, because this is the maximum number of characters that you can see in the GitHub diff view. This used to be 119 characters, but the page layout changed.

How long is _too long_ does not only depend on your code editor window, but all of the tools you use to view code. For some old-school programmers, this is only the terminal window, but most programmers now use more tools than just an IDE. Coding is a team sport, and now we have web-based collaboration tools.

_Photo: [Brad Hagan](https://www.flickr.com/photos/bradhoc/7343762168)_
