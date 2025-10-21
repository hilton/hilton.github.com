---
title: Secret macOS file drag and drop
description: useful but hard-to-discover Mac interactions
layout: hh
tags: usability
image: drag-and-drop/file-to-terminal-drag.jpg
---

Ironically, not many people know about [macOS](https://en.wikipedia.org/wiki/MacOS)’
‘famously’ undiscoverable drag-and-drop interactions.
Ever since the early versions of [Mac OS](https://en.wikipedia.org/wiki/Classic_Mac_OS),
Macs have used drag-and-drop.
Especially, [Finder](https://en.wikipedia.org/wiki/Finder_(software)).
However, it took me years to discover some of the most useful ‘secret’ interactions,
some of which don’t seem to appear in the user guide.

For example, most people know you can drag a file in a Finder window to move it,
or open it in an application by dropping it on the application.
However, dragging a file has several other less obvious drop targets.

## Finder file/folder → File/Open dialogue

You can drag files from Finder into application windows, in many applications.
In particular, you can drag a file into the standard _File/Open_ dialogue box.
For example, drag an image file from Finder into Preview’s _Open_ dialogue:

{:.screenshot}
[![Dragging a file from the Desktop folder in Finder, to an Open dialogue in Preview](drag-and-drop/file-to-open-dialogue-drag.webp)](drag-and-drop/file-to-open-dialogue-drag.webp)

When you drop the file, it becomes the _Open_ dialogue’s selection.
You will find this especially useful when the file you want to open already appears in a Finder window:

{:.screenshot}
[![After dropping a file in Preview’s Open dialogue, Preview selects the file](drag-and-drop/file-to-open-dialogue-drop.webp)](drag-and-drop/file-to-open-dialogue-drop.webp)

You can also drag a folder into an _Open_ dialogue, instead of a file,
to set browse location.

## Finder file/folder → File/Save dialogue

You can drag files and folders from Finder into a standard _File/Save_ dialogue box.

{:.screenshot}
[![Dragging a folder from a Finder window](drag-and-drop/folder-drag.webp)](drag-and-drop/folder-drag.webp)

This sets the save location:

{:.screenshot}
[![After dropping a folder in Preview’s Save dialogue, Preview sets the save location to that folder](drag-and-drop/folder-to-save-dialogue-drop.webp)](drag-and-drop/folder-to-save-dialogue-drop.webp)

This means that dragging a file from Finder into a _Save_ dialogue sets the save
location to replace the dragged file.

## Finder file/folder → text editor

You can drag files and folders from Finder into a TextEdit document window:

{:.screenshot}
[![Dragging a file from the Desktop folder in Finder, to a TextEdit document window](drag-and-drop/file-to-editor-drag.webp)](drag-and-drop/file-to-editor-drag.webp)

This inserts the file path:

{:.screenshot}
[![After dropping a file in a TextEdit document window, TextEdit inserts the file’s path](drag-and-drop/file-to-editor-drop.webp)](drag-and-drop/file-to-editor-drop.webp)

The result of dragging files and folders into application windows depends on the application.
At least one other application does the same thing.

## Finder file/folder → terminal

You can drag files and folders from Finder into a Terminal window:

{:.screenshot}
[![Dragging a file into a Terminal window](drag-and-drop/file-to-terminal-drag.webp)](drag-and-drop/file-to-terminal-drag.webp)

As with TextEdit, this inserts the file/folder path:

{:.screenshot}
[![After dragging a file into a Terminal window, Terminal inserts the file’s path on the command line](drag-and-drop/file-to-terminal-drop.webp)](drag-and-drop/file-to-terminal-drop.webp)

If you use this to navigate the filesystem with Finder instead of the command line,
you’ll probably also find it useful to use the `open .` command,
which opens the current folder in Finder.

Unlike the other interactions in this article, Apple has documented this one:
[Drag items into a Terminal window on Mac](https://support.apple.com/en-gb/guide/terminal/trml106/mac).

## Current document

You don’t need to use Finder to find files to drag.
In a standard Mac application,
the title bar includes a _representative icon_ to the left of the document title.
Dragging this icon has the same results as dragging the same file in Finder:

{:.screenshot}
[![Dragging a TextEdit document’s representative icon](drag-and-drop/self-to-editor-drag.webp)](drag-and-drop/self-to-editor-drag.webp)

In TextEdit, for example, you can drag this icon into the document window, to insert its own file path:

{:.screenshot}
[![After dropping a file in a TextEdit document window, TextEdit inserts the file path](drag-and-drop/self-to-editor-drop.webp)](drag-and-drop/self-to-editor-drop.webp)

Unfortunately, not all third-party document-based macOS applications support this,
because they use a different title bar.

## Finder current folder

In Finder, folder windows also have a representative icon,
although macOS now hides it by default, perhaps for even less discoverability.
The representative icon icon appears when you hover the folder name in the folder window’s title bar:

{:.screenshot}
[![Dragging a Finder folder window’s representative icon](drag-and-drop/folder-self-drag.webp)](drag-and-drop/folder-self-drag.webp)

Therefore, if you have a folder window open in Finder, you can navigate there on the command line:

1. In Terminal, type `cd` followed by a space.
2. In Finder, hover the folder window’s title (the folder name).
3. When the folder’s representative icon appears, drag it into the Terminal window.
4. In Terminal, type _return_.

This sounds laborious, but turns out less fiddly than right-clicking things,
and selecting options from pop-up menus.

