/**
 * Create GitHub pages files from HH page files. All files in the source directory are processed,
 * unless command line arguments specify input files.
 */

import io.Source
import java.io.File

val SOURCE_DIR = "/Users/pedro/Dropbox/hh"
val TARGET_DIR = "/Users/pedro/Documents/code/hilton/hilton.github.com"

def error(message: String) {
  System.err.println("[ERROR] " + message)
  System.exit(1)
}

// Check SOURCE_DIR
val sourceDirectory = new File(SOURCE_DIR)
if (!sourceDirectory.isDirectory) error("Not a directory: " + SOURCE_DIR)

val targetDirectory = new File(TARGET_DIR)
if (!targetDirectory.isDirectory) error("Not a directory: " + TARGET_DIR)


// Regular expressions for matching page content lines
val Thumbnail = """(.*?)<\?php Thumbnail \('([^']+)', '([^']*)', '([^']*)'\); \?>(.*)""".r
val LocalLink = """(.*?href=['"])([a-z0-9_]+?)\.phtml(.*)""".r


// Get list of source files from the directory or command line arguments
val files =
  if (args.isEmpty) sourceDirectory.listFiles
  else args.map(new File(SOURCE_DIR, _))

// Loop over source files
for (file <- files) {
  if (!file.isDirectory && file.getName.endsWith(".phtml") && !file.getName.startsWith("cycling")) {

    val page = readPage(file)

    // Output: if files weren’t specified explicitly, don’t overwrite existing files.
    val outputFile = new File(targetDirectory, file.getName.replace(".phtml", ".html"))
    if (args.isEmpty && outputFile.exists()) {
      println("Skipping " + file.getName.replace(".phtml", ".html"))
    }
    else {
      // Log missing values
      if (page.path.isEmpty) {
        println("[WARN] Missing path: " + file.getName)
      }
      else {
        if (page.title.isEmpty) println("[WARN] Missing title: " + file.getName)
        if (page.description.isEmpty) println("[WARN] Missing description: " + file.getName)

        println("Create " + outputFile)
        val out = new java.io.PrintWriter(outputFile)

        // Metadata
        out.println("---")
        page.title.foreach((value) => out.println("title: " + value))
        page.description.foreach((value) => out.println("description: " + value))
        page.keywords.foreach((value) => out.println("keywords: " + value))
        out.println("layout: hh")
        out.println("---")
        out.println()

        // Page content
        val pageFile = new File(SOURCE_DIR, page.path.get)
        if (pageFile.exists()) {
          println("  reading " + pageFile.getName)
          for (line <- Source.fromFile(pageFile).getLines) {
            line match {
              case Thumbnail(prefix, name, align, target, suffix) => {
                out.print(prefix)
                out.print(pictureHtml(name, align, target))
                out.print(suffix)
                out.println
              }
              case LocalLink(prefix, baseName, suffix) => {
                out.println(prefix + baseName + ".html" + suffix)
                println("  " + line)
              }

              case _ => out.println(line)
            }
          }
        }
        else {
          error("Missing page file: " + page.path.get)
        }
        out.close()
      }
    }
  }
}

// Extract metadata from a set of PHP variables.
def readData(file: File): Map[String, String] = {
  if (file.exists()) {
    val Assignment = """\s*\$(\w+)\s*=\s*["']?([^"']+)["']?;\s*""".r
    var data: Map[String, String] = Map()

    for (line <- Source.fromFile(file).getLines) {
      line match {
        case Assignment(name, value) => data = data + (name -> value)
        case _ => {}
      }
    }
    data
  }
  else {
    error("File not found: " + file.getName)
    Map()
  }
}

// Metadata for a web site content.
case class Page(title: Option[String], description: Option[String], keywords: Option[String], path: Option[String])

def readPage(file: File): Page = {
  val data = readData(file)
  Page(data.get("title"), data.get("description"), data.get("keywords"), data.get("page_file"))
}

case class Picture(big: Option[String], thumbnail: Option[String], width: Option[String], height: Option[String], caption: Option[String])

def readPicture(file: File): Picture = {
  val data = readData(file)
  Picture(data.get("big_version"), data.get("thumbnail"), data.get("width"), data.get("height"), data.get("caption"))
}

// HTML attribute
case class Attr(name: String, value: Option[String]) {
  override def toString = {
    value.map(name + "='" + _ + "'").getOrElse("")
  }
}

// Build HTML for an image thumbnail, which may be wrapped in a link.
def pictureHtml(name: String, align: String, target: String): String = {
  println("  Picture(%s, %s, %s)".format(name, align, target))

  val pic = readPicture(new File(SOURCE_DIR, "picture/data/" + name + ".data"))

  if (pic.thumbnail.isEmpty) {
    error("Thumbnail not found: " + name)
  }

  // Check if thumbnail is an absolute URL, and make a relative URL for local images.
  val thumbnail = pic.thumbnail.getOrElse("")
  val url =
    if (thumbnail == "http://")
      thumbnail
    else
      "picture/" + thumbnail

  val imgAttr = List(Attr("src", Some(url)), Attr("width", pic.width), Attr("height", pic.height), Attr("alt", pic.caption), Attr("title", pic.caption))

  val imgTag =
    if (align == "left" || align == "right")
      "<img " + imgAttr.mkString(" ") + " style='float:" + align + "'>"
    else
      "<img " + imgAttr.mkString(" ") + ">"
  println("    " + imgTag)

  target match {
    case "" => imgTag
    case "big" => {
      if (pic.big.isDefined)
        "<a href='picture/" + pic.big.get + "'>" + imgTag + "</a>"
      else
        imgTag
    }
    case _ => "<a href='" + target + "'>" + imgTag + "</a>"
  }
}