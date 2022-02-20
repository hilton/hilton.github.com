---
title: Systems integration with Effektif
description: Using JavaScript tasks to access web services
tags: BPM
layout: hh
---

[Effektif](effektif-hosted-bpm) makes it easy to build a business process that contain human tasks, with its form builder and configurable work-flow. However, automating these business processes  requires systems integration as well.

Managing human tasks is an important part of business process support, and there are tools that focus on this side of things, such as [Asana](https://asana.com) and [JIRA](https://www.atlassian.com/software/jira). Meanwhile, integration frameworks and platforms address interaction between systems without user tasks.

Business process management is the result of combining both human tasks and interactions with systems. In fact, in enterprise software development is all about enabling multiple people to interact with multiple systems as part of a single process.


## Vacation requests - an integration example

The [earlier article](effektif-hosted-bpm) mentioned the example of a simple vacation request process: an employee requests vacation, and the request is approved or denied. This is one of Effektif’s example processes:

![Vacation request process](effektif/vacation-request-flow.png)

The process trigger is a form for the initial vacation request information:

![Vacation request form](effektif/vacation-request-form.png)

After starting the process, and completing the _Approve vacation request_ task, Effektif’s ‘case stream’ shows what happened.

![Vacation request case stream](effektif/vacation-request-case-stream.png)

You can use this functionality to co-ordinate vacation requests, recording both requests and decisions. However, this only works if you want to use the built-in user interface to manage this process.

In practice, especially for more complex processes, there are existing systems for managing aspects of the process, such as providing visibility of current and historical requests. In this case, you would need to integrate Effektif with a back-end system.


## Adding web services integration

Integrating with a back-end system typically means sending web services requests, as part of a [Service-Oriented Architecture](http://en.wikipedia.org/wiki/Service-oriented_architecture) or using [Microservices](http://en.wikipedia.org/wiki/Microservices). To do this in Effektif, add a JavaScript task to the process and write code to send the web services request.

For this example, we’ll need a test server to represent an external system that we will send vacation requests to. This means [inspecting HTTP client requests](inspecting-http-requests) - we can use [RequestBin](http://requestb.in) to create an endpoint such as `http://requestb.in/1cu152h1` for debugging.

The next step is to write some JavaScript code that sends data to this URL, which Effektif will run on the server. Effektif provides the [Request](https://github.com/mikeal/request/blob/master/README.md) HTTP client, which we can use as follows.

```javascript
var url = 'http://requestb.in/1cu152h1';
var formData = { "start":startDate, "end":endDate, "employee":employee };
request.post(url, { "form": formData }, function(error, response, body) {
    if (response.statusCode != 200) {
        console.log('HTTP response status %d', response.statusCode);
        console.log('Error: ‘%s’', body);
        throw 'HTTP error';
    }
});
```

After adding the JavaScript task to the process, you can add the code to the code editor, which indicates syntax errors and provides code completion.

![JavaScript code editor](effektif/vacation-request-javascript.png)

Note that the process splits using a parallel gateway (the diamond with a plus sign) so that the JavaScript task is executed in parallel with the _Plan vacation_ task.

The code editor also includes a variable mapping, that you use to make process variables - `startDate`, `endDate` and `employee` - available to the JavaScript code.

![JavaScript variable mapping](effektif/vacation-request-javascript-variables.png)

The next step is to run the code, and inspect the results.


## Testing web services requests

 You can also use the code editor to enter test data and test the code. After entering test values for the mapped variables, click the _Test it_ button to run the code and get the following output.

![JavaScript test panel](effektif/vacation-request-javascript-test.png)

Meanwhile, RequestBin shows the HTTP request that the JavaScript code sent.

![RequestBin output for HTTP request](effektif/vacation-request-requestbin.png)

This shows the values of the form-encoded data sent in the request.


## Error handling

The final ingredient is some basic error handling, which is provided by the JavaScript callback function that the Request library calls when the request is complete.

```javascript
function(error, response, body) {
    if (response.statusCode != 200) {
        console.log('HTTP response status %d', response.statusCode);
        console.log('Error: ‘%s’', body);
        throw 'HTTP error';
    }
}
```

When the HTTP response is not a success (status 200), the callback writes to the console and throws an exception. For example, suppose that an evil HR system starts rejecting requests with an _All vacation is cancelled!_ error, then executing the process will result in the following output in the Effektif case stream.

![Case stream JavaScript error](effektif/vacation-request-error.png)

The exception results in the red icon (top-right), and the console logging is also shown.
