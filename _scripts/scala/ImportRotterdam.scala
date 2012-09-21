/**
 * Create GitHub pages files for HH Madrid pages.
 */

import io.Source
import java.io.File

val SOURCE_DIR = "/Users/pedro/Dropbox/hh/cafe/rotterdam"
val TARGET_DIR = "/Users/pedro/Documents/code/hilton/hilton.github.com/rotterdam/_posts"

val Title = """[^<]?\s*<h3[^>]*>(.+?)</h3>""".r

for (file <- new File(SOURCE_DIR).listFiles if file.getName endsWith ".php") {

  val outputFile = new File(TARGET_DIR, "2003-03-06-" + file.getName.replace(".php", ".html"))
  if (!outputFile.exists) {

  println(file.getName)

    // Parse input
    var title: String = ""
    var address: String = ""
    var telephone: String = ""
    var content: String = ""
    for (line <- Source.fromFile(file).getLines) {
      line.trim match {
        case Title(value) => {
          val heading = value.split(", ")
          title = heading(0)
          if (heading.length > 1) address = heading(1)
          if (heading.length > 2) telephone = heading(2)
          println("  title: " + title)
          println("  address: " + address)
          println("  telephone: " + telephone)
        }
        case _ => content = content + line + "\n"
      }
    }

    // Fail on no title
    //if (title.trim().isEmpty) System.exit(1)

    // Generate
//    val outputFile = new File(TARGET_DIR, "2004-10-18-" + file.getName.replace(".php3", ".html"))
//    val out = new java.io.PrintWriter(outputFile)
//    out.println("---")
//    out.println("title: " + title)
//    out.println("address: " + address)
//    out.println("layout: madrid")
//    out.println("tag:" + pageTag)
//    out.println("---")
//    out.println()
//    out.print(content)
//    out.close()
  }
}