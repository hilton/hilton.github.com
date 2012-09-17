/**
 * Create GitHub pages files for HH Madrid pages.
 */

import io.Source
import java.io.File

val SOURCE_DIR = "/Users/pedro/Dropbox/hh/cafe/madrid"
val TARGET_DIR = "/Users/pedro/Documents/code/hilton/hilton.github.com/madrid/_posts"

val tags = Map(
  "sol" ->
    List("noname", "barrefra", "botero", "cafedelreal", "cafemadrid", "cafeteriaarenal", "cafeunion", "cafevergara", "canasytapas", "casalabra", "casaparrondo", "chocolateriasangines", "coquette", "vienacapellanes", "imperfecto", "jabugo", "museodelpangallego", "oskar", "palaciodeljamon", "paraisodeljamon", "tabernareal", "taberneros", "templodelgato"),
  "latina" ->
    List("almendro13", "baricomio", "bonanno", "cafedelmono", "cafedelnuncio", "camarilla", "casapaco", "cerveceriasanandres", "concha", "delic", "musalatina", "tabernamatritum", "tabernatempranillo"),
  "santaana" ->
    List("alhambra", "cafedelespanol", "cafemilano", "merycruz", "piola", "salondelprado", "tiacebolla", "vinotecabarbechura", "vivamaria"),
  "malasana" ->
    List("cafecomercial", "caferuiz", "colorado", "cortomaltes", "louielouie", "maderfaker", "manuela", "mercurio"),
  "chueca" ->
    List("angelsierra", "cafeacuarela", "colbybarquillo", "colbyfuencarral", "mamaines", "rincondepelayo"),
  "salamanca" ->
    List("botellita", "pubdickens", "txirimiri"),
  "other" ->
    List("economico", "penedillo", "montes")
)
val Facade = """(.*?)src="/facade/(.*)""".r
val Title = """[^<]?\s*<h2>(.+?)</h2>""".r
val Php = """<\?=.*""".r
val Blank = """\s*""".r

for (file <- new File(SOURCE_DIR).listFiles) {
  if (file.getName().endsWith(".php3")) {

    println("\n---\n" + file.getName + "")

    // Parse input
    var title: String = ""
    var address: String = ""
    var content: String = ""
    for (line <- Source.fromFile(file).getLines) {
      line.trim match {
        case Title(value) => {
          val heading = value.split(", ")
          title = heading(0)
          if (heading.length > 1) address = heading(1)
          println("  title: " + title)
          println("  address: " + address)
        }
        case Php() => {}
        case Blank() => {}
        case _ => content = content + line + "\n"
      }
    }

    // Fail on no title
    if (title.trim().isEmpty) System.exit(1)

    // Tag
    val baseName = file.getName.split("\\.")(0)
    val pageTag = tags.foldRight("") {
      case ((tag, names), result) => if (names.contains(baseName)) result + " madrid-" + tag else result
    }
    println("  tag:" + pageTag)

    // Generate
    val outputFile = new File(TARGET_DIR, "2004-10-18-" + file.getName.replace(".php3", ".html"))
    val out = new java.io.PrintWriter(outputFile)
    out.println("---")
    out.println("title: " + title)
    out.println("address: " + address)
    out.println("layout: madrid")
    out.println("tag:" + pageTag)
    out.println("---")
    out.println()
    out.print(content)
    out.close()
  }
}