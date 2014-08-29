---
title: Camel HTTP file upload with multipart/form-data
description: How to integrate with legacy HTTP endpoints
tags: Camel Scala
layout: hh
---

[Apache Camel](http://camel.apache.org) is all about integration, and has built-in support for most of the things you need. One integration pattern you might need is to process files in a directory, and send the contents over HTTP to a web service endpoint. You can do this using Camel’s [File](http://camel.apache.org/file2.html) and [HTTP](http://camel.apache.org/http4.html) components.

Suppose you want to send JSON files to a web service using HTTP POST. This is straightforward: the Camel File component consumes the file, creating a Camel message, and the HTTP component will send the message body (the JSON data) to the specified URL in the body on an HTTP POST request. If the web service is expecting a request body with a different encoding, though, you’ll have to do a little more work.

## Sending file contents using HTML form file upload

Suppose you have a legacy web service that is designed to handle file uploads from an HTML form. For example, it might use a form like this, which uploads a file and uses an additional form field for a file name:

{% highlight html %}
<form action="/upload" enctype="multipart/form-data">
  <input name="file" type="file">
  <input name="filename">
  <button>Upload File</button>
</form>
{% endhighlight %}

To send binary file data in the request, the form must use the [multipart/form-data](http://tools.ietf.org/html/rfc2388) encoding. This encoding handles multiple form parameters, each of which can be text or encoded binary. To use the same API from Camel, you have to apply the same form encoding.


##  Applying multipart form data encoding in Camel

The Camel HTTP component doesn’t do any request body encoding, and just sends the current message as-is. To send the same request as the HTML form, so the legacy web service can handle it, you have to encode the file contents.

To do a transformation in a Camel route, you need a function with a single `Exchange` parameter that you can pass to the Scala DSL’s `process` method:

{% highlight scala %}
def toMultipart(exchange: Exchange): Unit = {

  // Read the incoming message…
  
  // Encode the file as a multipart entity…

  // Set multipart entity as the outgoing message’s body…
  
}
{% endhighlight %}

The [Apache HttpComponents](https://hc.apache.org) library handles multipart MIME encoding, via the [MultipartEntityBuilder](https://hc.apache.org/httpcomponents-client-ga/httpmime/apidocs/org/apache/http/entity/mime/MultipartEntityBuilder.html) API, so you can use that to encode the file. The resulting Camel processor implementation is as follows.

{% highlight scala %}
import org.apache.camel.Exchange
import org.apache.http.entity.mime.MultipartEntityBuilder

def toMultipart(exchange: Exchange): Unit = {

  // Read the incoming message…
  val file = exchange.getIn.getBody(classOf[java.io.File])
  val name: String = exchange.getIn.getHeader(Exchange.FILE_NAME, classOf[String])

  // Encode the file as a multipart entity…
  val entity = MultipartEntityBuilder.create()
  entity.addBinaryBody("file", file)
  entity.addTextBody("name", name)

  // Set multipart entity as the outgoing message’s body…
  exchange.getOut.setBody(entity.build)
}
{% endhighlight %}

Note that the call to `exchange.getIn.getBody` uses a built-in type conversion to `java.io.File`, which you can pass to the `MultipartEntityBuilder` to add a binary section.


## Sending the file upload from a Camel route

Now you have the `toMultipart` processor, you can use it in a Camel route that takes files from an `incoming` directory, and sends them to `localhost:9000/upload`. The following example uses the Scala DSL to do this.

{% highlight scala %}
import org.apache.camel.Exchange
import org.apache.camel.component.http4.HttpOperationFailedException
import org.apache.camel.scala.dsl.builder.RouteBuilder

"file:incoming/" ==> {

  // Log any web service errors and move the file to the failure endpoint.
  handle[HttpOperationFailedException] {
    log(ERROR, "HTTP response: ${exception.statusCode} ${exception.statusText}\n${exception.responseBody}")
    to("file:failed/")
  }.handled

  // Transform the message into multipart/form-data.
  process(toMultipart _)

  // Send the message by HTTP POST and log the response.
  log("POST ${header.CamelFileName} to /upload")
  setHeader(Exchange.CONTENT_TYPE, "multipart/form-data")
  to("http4:localhost:9000/upload")
  log("HTTP response status: ${header.CamelHttpResponseCode}")
  log(DEBUG, "HTTP response body:\n${body}")
}
{% endhighlight %}

Note that when you’re using web services, it’s a good idea to log HTTP requests and responses, especially HTTP error responses. Once you’re in production, you’ll be glad you did.

