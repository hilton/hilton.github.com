---
title: camunda BPM with Play and Scala
description: integrating Business Process Management with a web application
tags: BPM playframework Scala
layout: hh
---

This article shows how to integrate [camunda BPM](http://camunda.org) with a [Play Framework](http://playframework.com/) web application. My [introduction to camunda BPM](camunda-developer-friendly-bpm) takes a high-level view of the framework, from a developer’s perspective, but doesn’t show what it’s actually like. This tutorial is about the code:

1. [Introduction](#introduction)
2. [Installing the database and camunda BPM application](#installing-the-database-and-camunda-bpm-application)
3. [Adding a Play framework application](#adding-a-play-framework-application)
4. [Starting process instances](#starting-process-instances)
5. [Next steps](#next-steps)

Source code for this article: [https://github.com/hilton/camunda-get-started-play](https://github.com/hilton/camunda-get-started-play)

## Introduction

The [camunda documentation](http://docs.camunda.org/latest/) includes a [tutorial for developing process applications](http://docs.camunda.org/latest/guides/getting-started-guides/developing-process-applications/) that shows how to install camunda BPM, build and deploy a simple process, and interact with the process using camunda’s [Cockpit](http://docs.camunda.org/latest/guides/user-guide/#cockpit) and [Tasklist](http://docs.camunda.org/latest/guides/user-guide/#tasklist) web applications. The tutorial uses the camunda BPM platform distribution that includes Apache Tomcat 7, runs on a local file-based H2 database, and shows a Java Servlet-based process application. Let’s consider an alternative architecture.

For this version of the tutorial, we are going to use a standalone distribution of the camunda web applications, embed the camunda BPM process engine in a Play/Scala web application, and use a shared PostgreSQL database for the two. This version of the tutorial has more configuration steps than the camunda version, but the end result is easier to understand if you are familiar with Play framework applications because nothing happens automatically.


## Installing the database and camunda BPM application

First, create a database and install the camunda BPM web application that you will use to interact with your deployed business processes. For this tutorial, you will need the following pre-requisites to start:

* Java Runtime Environment (JRE) 7
* [Apache Tomcat](http://tomcat.apache.org) 7 - to run the camunda web applications
* [PostgreSQL](http://www.postgresql.org).

There are other Java versions, Java Servlet containers and SQL databases that work; see [Camunda’s supported environments](http://docs.camunda.org/latest/guides/user-guide/#introduction-supported-environments) for details.

### Create a database

First, install and start PostgreSQL (e.g. using [Homebrew](http://brew.sh) with `brew install postgres` on OS X). Open the PostgreSQL command line with (`psql template1`) and use the following commands to create a user and database.

	create database "process-engine";
	create user camunda with password 'camunda';
	grant all privileges on database "process-engine" to camunda;

### Install the camunda BPM web application

On the [camunda download page](http://camunda.org/download/), download the [camunda Standalone Webapp for Apache Tomcat 7](http://camunda.org/release/camunda-bpm/tomcat/7.2/camunda-webapp-tomcat-standalone-7.2.0.war).

Using your own Apache Tomcat installation location, deploy the WAR file - ‘exploded’ so we can edit the database configuration.

	unzip camunda-webapp-tomcat-standalone-7.2.0.war -d /Applications/apache-tomcat-7.0.57/webapps/camunda/

Add the PostgreSQL JDBC driver to the camunda web application. If you don’t already have it, you can download the JAR from the corresponding [http://mvnrepository.com artifact page](http://mvnrepository.com/artifact/org.postgresql/postgresql/9.3-1102-jdbc41) or proceed with the next section until the Play application has downloaded the dependency to the local Ivy cache.

	cp ~/.ivy2/cache/org.postgresql/postgresql/jars/postgresql-9.3-1102-jdbc41.jar /Applications/apache-tomcat-7.0.57/webapps/camunda/WEB-INF/lib/

### Configure the camunda BPM web application

Edit the deployed web application’s configuration, to change the `dataSource` bean to use the new PostgreSQL database by editing the four configuration property values:

	<bean id="dataSource" class="org.springframework.jdbc.datasource.TransactionAwareDataSourceProxy">
	  <property name="targetDataSource">
	    <bean class="org.apache.commons.dbcp.BasicDataSource">
	      <property name="driverClassName" value="org.postgresql.Driver" />
	      <property name="url" value="jdbc:postgresql://localhost/process-engine" />
	      <property name="username" value="camunda" />
	      <property name="password" value="camunda" />
	    </bean>
	  </property>
	</bean>

Start Apache Tomcat to run the camunda BPM web application:

	/Applications/apache-tomcat-7.0.57/bin/startup.sh

Open the camunda web application at [http://localhost:8080/camunda/](http://localhost:8080/camunda/) and create a new admin user with user name `admin`.

![Adding a new admin user for the camunda web applications](camunda-admin-user.png)

Now you are ready to build your own process application and deploy a business process to the database.


## Adding a Play framework application

The next steps are to create a new Play framework application, add a BPMN process definition and run the application to deploy the process definition to the database, so we can see it in the camunda BPM Cockpit application.

### Create a new Play application

First, download Play framework 2.3 from the [Play framework download page](https://playframework.com/download). The default approach is to download Activator and use that to create a new Play application; alternatively, you can [add Play as a dependency to a new sbt project](https://playframework.com/documentation/2.3.x/NewApplication#Create-a-new-application-without-Activator).

Next create a new Play/Scala application, which we will use to deploy the business process. Using Activator:

	activator new get-started-play play-scala

In the new application, edit `build.sbt` and replace the library dependencies section with the following, to add the database driver and camunda API:

{% highlight Scala %}
libraryDependencies ++= Seq(
  "org.postgresql" % "postgresql" % "9.3-1102-jdbc41",
  "org.camunda.bpm" % "camunda-bom" % "7.2.0",
  "org.camunda.bpm" % "camunda-engine" % "7.2.0")
{% endhighlight %}

### Add the business process definition file

For this application, we can use the BPMN process definition from the original camunda BPM tutorial, which starts off as a trivial loan approval workflow with a single activity:

![loan approval workflow](camunda-loan-approval-1.png)

Download [loan-approval.bpmn](https://github.com/camunda/camunda-get-started/raw/Step-3/src/main/resources/loan-approval.bpmn) from Step 3 of the [Developing Process Applications tutorial code](https://github.com/camunda/camunda-get-started/tree/Step-3) and add it to your application in `conf/loan-approval.bpmn` so it will be available on the application’s runtime classpath.

Next we need some code that will use the camunda BPM API to deploy `loan-approval.bpmn` to the process engine database. 

### Integrate the application with the process engine

Add the following code in the new file `app/Global.scala`, to start the process engine and deploy the BPMN file when the Play application starts-up.

{% highlight Scala %}
import org.camunda.bpm.engine.{ProcessEngineConfiguration, ProcessEngines}
import play.api.{Application, GlobalSettings, Logger}

object Global extends GlobalSettings {

  /**
   * Start the camunda BPM process engine and deploy process definitions on start-up.
   */
  override def onStart(application: Application): Unit = {
    val configuration = ProcessEngineConfiguration.createStandaloneProcessEngineConfiguration()
      .setJdbcDriver("org.postgresql.Driver")
      .setJdbcUrl("jdbc:postgresql://localhost/process-engine")
      .setJdbcUsername("camunda")
      .setJdbcPassword("camunda")
      .setDatabaseSchemaUpdate(ProcessEngineConfiguration.DB_SCHEMA_UPDATE_TRUE)
      .setHistory(ProcessEngineConfiguration.HISTORY_FULL)
      .setJobExecutorActivate(true)

    Logger.info("Starting process engine...")
    val engine = configuration.buildProcessEngine()

    Logger.info("Deploying process definition...")
    val deployment = engine.getRepositoryService.createDeployment()
    deployment.addClasspathResource("loan-approval.bpmn").enableDuplicateFiltering(true)
    deployment.deploy()
  }

  override def onStop(application: Application): Unit = {
    ProcessEngines.getDefaultProcessEngine.close()
  }
}
{% endhighlight %}

This code uses the camunda BPM API to configure the process engine programmatically. In a real application, you would externalise this to a configuration like the following in `conf/application.conf` and use the Play configuration API instead of hard-coding the values.

{% highlight javascript %}
camunda {
  jdbcDriver = "org.postgresql.Driver"
  jdbcUrl = "jdbc:postgresql://localhost/process-engine"
  jdbcUsername = "camunda"
  jdbcPassword = "camunda"
  processDefinitions = ["loan-approval.bpmn", "new-account.bpmn"]
}
{% endhighlight %}

Anyway, for now, we have everything we need to run the Play application and deploy the business process.


## Deploying the business process

Now we are ready to use our new Play application to deploy our business process.

First log in to [Cockpit](localhost:8080/camunda/app/cockpit/) as the user that you created in the first section, above. The Cockpit dashboard shows _Deployed Processes_, which at this stage is only the sample _Generated Forms Quickstart_ that the web application initially installs.

Now, in the Play application directory, start the Play application to deploy the loan approval process.

	$ activator run
	[info] Loading project definition from /camunda/get-started-play2/project
	[info] Set current project to get-started-play2 (in build file:/camunda/get-started-play2/)
	[info] Updating {file:/camunda/get-started-play2/}root...
	[info] Resolving jline#jline;2.11 ...
	[info] Done updating.

	--- (Running the application, auto-reloading is enabled) ---

	[info] play - Listening for HTTP on /0:0:0:0:0:0:0:0:9000

	(Server started, use Ctrl+D to stop and go back to the console...)

The first time, this includes fetching the dependencies from Maven repositories. The application has not started yet, because this is lazy is dev mode. To compile and start the application, open [http://localhost:9000](http://localhost:9000), which makes the console show:

	[info] Compiling 6 Scala sources and 1 Java source to /camunda/get-started-play2/target/scala-2.11/classes...
	[info] application - Starting process engine...
	[info] application - Deploying process definition...
	[info] play - Application started (Dev)

The two lines starting `[info] application` are the application log output from our `Global.onStart` code.

Now reload the Cockpit dashboard page, which will now show the deployed loan approval process:

![camunda Cockpit dashboard](camunda-cockpit-processes.png)

Note that if starting the process engine fails with _ProcessEngineException: historyLevel mismatch_ then you need to use a different history level in the call to `setHistory` in `Global.onStart`, such as `HISTORY_FULL`. The other values are listed in the [configuration properties reference](http://docs.camunda.org/latest/api-references/deployment-descriptors/#tags-process-engine-configuration-configuration-properties).


## Starting process instances

At this stage, we have deployed a process definition which means that we have defined a  workflow that we can now execute in the process engine. We have described the process for approving a loan, but we don’t have any actual approvals to do yet. We need to be able to start a process instance based on this process definition.

### Using the camunda Tasklist to start process instances

The simplest way to start a process is using the [camunda Tasklist application](localhost:8080/camunda/app/tasklist/). Select the _Start a process_ icon in the menu bar:

![camunda Tasklist application](camunda-tasklist-start-process.png)

On the _Start a process_ dialog, select the _Loan Approval_ process, then click _Start_.

The task list will initially be empty because there are no search filters. To create a filter:

1. in the Tasklist far-left column select _Create a filter_
2. on the _Create a filter_ dialog, in the _Name_ field, enter **All tasks**
3. click _Save_.

Now select the new filter in the first column, and the _Approve Loan_ task will be listed in the second column.

![Tasklist](camunda-task-list.png)

Although the camunda Tasklist will be enough in some cases, you might want to integrate process instances with your application. You can either use the camunda REST API or the Java API.

### Starting process instances from a Play application

To be able to start process instances from our application, we will add a simple HTTP endpoint. Initially, this is like a simplified version of the camunda REST API, but demonstrates how to use the Java API.

First add a new HTTP route to the `conf/routes` file:

	POST /loan-approval/:amount   controllers.Application.startLoanApprovalProcess(amount: Int)

This route defines an integer URL path parameter that we will pass to the process engine as a process variable. To do this, add the following action method to the `app/controllers/Application.scala` controller:

{% highlight Scala %}
def startLoanApprovalProcess(loanAmount: Int) = Action {
  import org.camunda.bpm.engine.ProcessEngines
  import org.camunda.bpm.engine.variable.Variables._
  val runtime = ProcessEngines.getDefaultProcessEngine.getRuntimeService
  val processVariables = createVariables().putValueTyped("Loan amount", integerValue(loanAmount))
  val processInstance = runtime.startProcessInstanceByKey("approve-loan", processVariables)
  Created("started process instance " + processInstance.getId)
}
{% endhighlight %}

Now you can start the process instance with an HTTP request to the new endpoint:

	$ curl --include --request POST "http://localhost:9000/loan-approval/42000"
	HTTP/1.1 201 Created
	Content-Type: text/plain; charset=utf-8
	Content-Length: 28

	started process instance 104

You can see this in the Tasklist. Select the new _Approve Loan_ process instance in the second column, on the right-hand side remove the _john_ assignment and select _Claim_ to assign the task you yourself. Now you can select _Load Variables_ to show the process variable:

![camunda Tasklist process instance details](camunda-process-variable.png)


## Next steps

The next step is [adding a service task](http://docs.camunda.org/latest/guides/getting-started-guides/developing-process-applications/#tutorial-add-a-service-task) from the original tutorial. The corresponding Scala code for the proces delegate is as follows:

{% highlight Scala %}
package org.camunda.bpm.getstarted.loanapproval

import org.camunda.bpm.engine.delegate.{DelegateExecution, JavaDelegate}
import play.api.Logger

class ProcessRequestDelegate extends JavaDelegate {
  def execute(execution: DelegateExecution): Unit = {
    val amount = execution.getVariable("amount")
    Logger.info(s"Processing loan approval for amount $amount...")
  }
}
{% endhighlight %}

However, it is not possible to run this from the camunda Tasklist, as in the original tutorial, because our architecture is different. Our application is using a separate process engine to Tasklist, which therefore does not have access to the `ProcessRequestDelegate`. Instead, it is necessary to control the process from within our own application, using the camunda Java API. This is, of course, left as an exercise for the reader.
