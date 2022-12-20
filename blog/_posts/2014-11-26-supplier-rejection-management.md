---
title: Supplier Rejection Management
description: Building interruption marketing countermeasures with @Twilio
tags: vapourware
layout: hh
image: call-centre.jpg
---

![](call-centre.jpg)

[alanclarkdesign](https://www.flickr.com/photos/alanclarkdesign/2486109368/){:.photocredit}
[CC BY-ND 2.0](https://creativecommons.org/licenses/by-nd/2.0//){:.license}

An annoying thing about working for a company that’s too small to have a full-time receptionist is that spam phone calls constantly interrupt your work. All businesses get hassled by people selling printer supplies, and if you employ programmers then you’ll have to deal with recruiters as well.

Part of the problem is that the potential suppliers who resort to cold-calling have software support that helps minimise the effort, and scripts that are designed to make it difficult to screen calls. Even worse is the brute force approach: armies of telemarketers in call centres whose job it is to waste your time.

One of the telemarketers’ tools is [Customer Relationship Management](http://en.wikipedia.org/wiki/Customer_relationship_management) (CRM) software. CRM is a mature software category for businesses to manage interactions with their customers. When combined with a call-centre and sales scripts, CRM supports [interruption marketing](http://en.wikipedia.org/wiki/Interruption_marketing) - organised cold-calling. Their victims need something to level the playing field.


## Introducing Supplier Rejection Management

Supplier Rejection Management (SRM) is the answer to interruption marketing: software tool support that provides a variety of countermeasures. This includes a number of techniques, including:

* basic call-screening, e.g. selecting a department
* block lists for known spammers, with automatic call rejection
* allow lists, integrated with your corporate telephone directory
* [greylisting](https://en.wikipedia.org/wiki/Greylisting_(email)) for screening unknown or withheld numbers
* gamification features.

Advanced features, such as a voice-response maze for persistent time wasters and a counter-script, are available as add-on modules.


## Implementing SRM with Twilio

[Twilio](https://www.twilio.com/) is a [cloud communications](http://en.wikipedia.org/wiki/Cloud_communications) provider whose services include a telephony API. The [quickstart tutorial](http://www.twilio.com/docs/quickstart/php/twiml) shows you how to use the API to handle incoming telephone calls by writing a simple web application. For each incoming call, Twilio consults the web application for instructions on how to handle it, specified using an XML application called TwiML.

[Connect Call to a Second Person](https://www.twilio.com/docs/quickstart/php/twiml/connect-call-to-second-person), for example, shows you how to use the `From` request parameter to route calls. SRM uses this to automatically accept or reject calls by implementing supplier blacklist functionality.

After you have identified the caller as a blacklisted supplier (or just about any recruiter) then you use SRM gamification features to have more fun. One approach (pioneered by Sietse) is to see how long the caller will wait on hold before giving up. Using Twilio, SRM automates this:

{: style="width:44em"}
```xml
<Response>
    <Say>Hi, this is the procurement department. Your call is important to us. Please hold.</Say>
    <Play>http://srm.example.com/cheesy-music-compilation.mp3</Play>
</Response>
```

Alternatively, SRM can play a surprise audio clip. (Sadly, video is not yet supported.)

```xml
<Response>
    <Play>http://srm.example.com/rickroll.mp3</Play>
</Response>
```

Twilio will use this web service response to announce a greeting (in a slightly creepy computer voice - presumably intended for prototyping) and play an audio clip. SRM then keeps score of the longest time on hold per caller.

As well as blacklisting known spammers, and whitelisting known contacts, SRM can also greylist callers who have not yet been identified. Suspected spammers and people who hide caller ID can be directed to a pre-screening voice-response menu.

```xml
<Response>
    <Say>Welcome to SRM 1.0. Your call is important to us. Please select 
    one of the following options so we can handle this call effectively.
    This call may be recorded for training purposes.</Say>
    <Gather numDigits="1" action="/srm/navigate-1" method="POST">
        <Say>
        	If you are a recruiter, press 1.
        	If you are selling printer supplies, press 2.
        	If you would like to speak to the finance director, press 3.
        	For all other enquiries, press 4.
        </Say>
    </Gather>
</Response>
```

As you can see in this example, Twilio captures key-presses using a similar model to HTML form processing, and requests a new web service resource whose TwiML (XML) response handles the next step in the menu. Twilio sends a POST request to the given `/srm/navigate-1` with a `Digits` request parameter that captures the key the caller pressed.


## Martin’s maze

If you feel that merely rejecting calls and rickrolling recruiters isn’t sufficient payback for CRM-wielding call-centre armies, then you should consider SRM’s Maze module (originally conceived by Martin). This takes gamification further by turning the caller’s telephone sales experience into an actual game.

The game takes the form of a classic adventure game, implemented in Twilio using a voice response menu.

{: style="width:44em"}
```xml
<Response>
    <Say>You are in a dark forest. It is raining. There are exists to the North and East.</Say>
    <Play>http://srm.example.com/thunder.mp3</Play>
    <Gather numDigits="1" action="/srm/navigate-1" method="POST">
        <Say>To go North, Press 2. To go East, press 6.</Say>
    </Gather>
</Response>
```

As in the earlier example, this uses speech, audio clips and capturing keypresses.

```xml
<Response>
    <Say>As you blunder through the trees, you fall and slip down a muddy bank 
    into a deep pit. There are 4 recruiters here.</Say>
    <!-- Transfer call to death-by-recruiter teleconference. -->
    <Dial>+13105551212</Dial>
    <Say>Thank you for playing SRM 1.0. Goodbye.</Say>
</Response>
```

The game ends when the caller finds the centre of the maze, or when they fall into a trap, which is a conference call with previously-captured recruiters.


## Counterscript

The SRM Counterscript module provides an implementation of the [Counterscript]( http://egbg.home.xs4all.nl/counterscript.html) that was written to provide countermeasures to the call-centre scripts that cold-callers use. This script turns the tables on the caller, and puts SRM in control of the conversation.

```xml
<Response>
    <Say>To whom am I speaking?</Say>
    <Record maxLength="10" action="/srm/counterscript-2" />
</Response>
```

This example records audio spoken by the caller. Twilio makes the previous recording’s URL available via the `RecordingUrl` request parameter.

```xml
<Response>
    <Say>I’m sorry, I didn’t get that. Could you spell your name for me?</Say>
    <Record maxLength="30" action="/srm/counterscript-3" />
</Response>
```

Note that this script simply discards the recording in most cases, and repeats the question in order to waste the caller’s time.

```xml
<Response>
    <Say>Could you tell me how you found this phone number?</Say>
    <Record maxLength="30" action="/srm/counterscript-4" />
</Response>
```


## Conclusion

Although Supplier Rejection Management is not yet available for use, because it’s vapourware, Twilio does offer a useful service that makes all sorts of interesting applications possible.
