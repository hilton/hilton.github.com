/**
 * Create GitHub pages files for HH Madrid pages.
 */

import io.Source
import java.io.{PrintWriter, File}

val SOURCE_DIR = "/Users/pedro/Dropbox/hh/picture/data"
val TARGET_DIR = "/Users/pedro/Documents/code/hilton/hilton.github.com/photo/_posts"

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

def write(out: PrintWriter, data: Option[String]) {
  if (data.isEmpty) error("missing data")
  println("  " + data.get)
  out.println(data.get)
}

for (file <- new File(SOURCE_DIR).listFiles if file.getName().endsWith(".data")) {

  println(file.getName)
  val data = readData(file)

  val path = data.get("big_version") match {
    case Some(value) => Some("path: %s" format value)
    case None => data.get("thumbnail").map(value => "path: %s" format value)
  }

  val thumbnail = data.get("big_version") match {
    case Some(value) => data.get("thumbnail").map(value => "thumbnail: %s" format value)
    case None => None
  }

  val width = data.get("width").map(value => "width: %s" format value)
  val height = data.get("height").map(value => "height: %s" format value)
  val caption = data.get("caption").map(value => "caption: \"%s\"" format value)

  // Generate
  val outputFile = new File(TARGET_DIR, "2000-01-01-" + file.getName.replace(".data", ".html"))
  val out = new java.io.PrintWriter(outputFile)
  out.println("---")
  write(out, path)
  if (thumbnail.isDefined) write(out, thumbnail)
  if (width.isDefined) write(out, width)
  if (height.isDefined) write(out, height)
  write(out, caption)
  out.println("layout: photo")
  out.println("---")
  out.close()
}