/**
 * Create GitHub pages files for HH Madrid pages.
 */

import io.Source
import java.io.File
import java.text.{ParseException, SimpleDateFormat}
import java.util.Date

val SOURCE_DIR = "/Users/pedro/Dropbox/hh/cafe/rotterdam"
val TARGET_DIR = "/Users/pedro/Documents/code/hilton/hilton.github.com/rotterdam/_posts"
val EXCLUDE = List("report.php", "rotterdam-lat-long.php")

val DATE_FORMAT = new SimpleDateFormat("d MMMM yyyy")
val MONTH_FORMAT = new SimpleDateFormat("MMMM yyyy")
val OUTPUT_DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd")

val Title = """[^<]?\s*<h3[^>]*>(.+?)</h3>""".r
val LastVisited = """<p>Last visit: (\d* ?\w+ \d+)\.?</p>""".r
val Tags = """<p class="tags">Tags: <span itemprop="keywords">([^<]+)</span></p>""".r
val Image = """<p><img src="/facade/rotterdam-([^\.]+).*""".r
val PostCode = """// '?(\w+)', '(\d+)'?;?""".r
val RotterdamMap = """<\? rotterdamMap\('([^']+)', '([^']+)'\); \?>""".r
val Map = """googleMap.([\d\.]+), ?([\d\.]+).*""".r
val Website = """<a itemprop="url" href="([^"]+).*""".r

for (file <- new File(SOURCE_DIR).listFiles if file.getName endsWith ".php"; if !EXCLUDE.contains(file.getName)) {

  val outputFile = new File(TARGET_DIR, "2003-03-06-" + file.getName.replace(".php", ".html"))
  if (!outputFile.exists) {

    println(file.getName)

    var title = ""
    var slug = ""
    var address = ""
    var website = ""
    var telephone = ""
    var postCode = ""
    var lat = ""
    var lon = ""
    var visited: Option[Date] = None
    var content = ""
    var tags = ""
    var rating = ""

    // Parse input
    for (line <- Source.fromFile(file).getLines) {
      line.trim match {
        case "" => {}
        case """<div class="left">""" => {}
        case "<?" => {}
        case "?>" => {}
        case "</div>" => {}
        case Title(value) => {
          val heading = value.split(", ")
          title = heading(0)
          if (heading.length > 1) address = heading(1)
          if (heading.length > 2) telephone = heading(2)
        }
        case Image(value) => slug = value
        case Website(value) => website = value
        case PostCode(left, right) => postCode = left + " " + right
        case RotterdamMap(left, right) => postCode = left + " " + right
        case Map(left, right) => {
          lat = left
          lon = right
        }
        case LastVisited(value) => {
          try {
            visited = Some(DATE_FORMAT.parse(value))
          }
          catch {
            case pe: ParseException => visited = Some(MONTH_FORMAT.parse(value))
          }
        }
        case Tags(value) => tags = value
        case """<div itemprop="itemReviewed" itemscope itemtype="http://schema.org/LocalBusiness">""" => {}
        case _ => content = content + line.trim + "\n"
      }
    }

    println("  title: " + title)
    println("  slug: " + slug)
    if (!website.isEmpty) println("  website: " + website)
    println("  address: \"%s\"" format address)
    println("  telephone: " + telephone)
    if (!postCode.isEmpty) println("  postCode: " + postCode)
    if (!lat.isEmpty) println("  lat: " + lat)
    if (!lon.isEmpty) println("  lon: " + lon)
    if (visited.isDefined) println("  visited: " + OUTPUT_DATE_FORMAT.format(visited.get))
    if (!tags.isEmpty) println("  tags: " + tags)
    if (!rating.isEmpty) println("  rating: " + rating)
    println("  %d lines".format(content.count(_ == '\n')))
    //    println("\n" + content)

    // Fail on no title
    if (title.trim.isEmpty || slug.isEmpty) System.exit(1)

    // Generate
    val out = new java.io.PrintWriter(outputFile)
    out.println("---")
    out.println("title: " + title)
    out.println("slug: " + slug)
    out.println("address: \"%s\"" format address)
    if (!postCode.isEmpty) out.println("postCode: " + postCode)
    out.println("telephone: " + telephone)
    if (!website.isEmpty) out.println("website: " + website)
    if (!lat.isEmpty) out.println("lat: " + lat)
    if (!lon.isEmpty) out.println("lon: " + lon)
    if (visited.isDefined) out.println("visited: " + OUTPUT_DATE_FORMAT.format(visited.get))
    if (!tags.isEmpty) out.println("tags: " + tags)
    if (!rating.isEmpty) out.println("rating: " + rating)
    out.println("layout: rotterdam")
    out.println("---")
    out.println()
    out.print(content)
    out.close()

    // Reset
  }
}