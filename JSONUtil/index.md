---
layout: article
permalink: /JSONUtil/
title: "JSONUtil - A JSON Generation Utility Library for Java"
comments: true
categories: release
---

#### Features
* Very fast encoding of large data sets.
* Recursive traversal of Maps, Iterables (Collection, List, Set etc.), Enumerations, arrays and ResourceBundles
* Data structure loop detection
* Reflection of objects is supported allowing lazy encoding of objects.
* Property name validation (can use ECMAScript or JSON rules)
* Output to String or java.io.Writer
* JSON parsing to Java objects from Strings or java.io.Reader
* Options to fix certain types of bad data
* Automatic escaping of characters required to be escaped by the JSON standard.
* Several different escaping options
* Option to format dates on output and handle different formats when parsing
* ECMAScript 6 code point escapes are supported for reading and optionally for writing
* Options to support arbitrary precision numbers
* The default values for most configuration options can be changed.
* Most defaults can be set via JNDI (See the JSONConfigDefaults class)
* Most defaults can be read or modified via a JMX MBean client
* Option to format output for debugging.

This is a JSON generation library for Java.  Instead of creating its own maps for
objects or lists for arrays, this package allows you to use any Map you like,
allowing for iterations on your Map to be predictable by using a TreeMap or a
LinkedHashMap which can be useful for debugging. You can also use any Iterable
object or Enumeration to create a Javascript array or even use an actual array of
objects or primitives. In many cases it may be possible to use existing data
structures without modification.  Maps, Iterables, Enumerations and arrays are
traversed, allowing you to encode complex data graphs in one call.

Using Java's reflection API to encode objects is supported.  See
[Using Reflection to Encode Objects as JSON](https://github.com/billdavidson/JSONUtil/wiki/Using-Reflection-to-Encode-Objects-as-JSON)

There is also an interface provided called JSONAble which enables marking classes
that can convert themselves to JSON and when those are encountered as the values
in a Map, Iterable, Enumeration or array, their JSONAble#toJSON(JSONConfig,Writer)
method will be called to add them to the output.

The JSONParser class will parse JSON data.  It converts Javascript objects to
LinkedHashMap's with the property names being the keys.  It converts Javascript
arrays to ArrayList's.  It is more permissive in the data that it accepts than
the JSON standard. It allows Javascript strings with either type of quote.  It
allows unquoted identifiers. It allows full Javascript numbers. It also allows
ECMAScript 6 style code point escapes.  It can take as input either a string or
an object of a class that extends java.io.Reader such as InputStreamReader, BufferedReader
or FileReader.

This library is oriented towards being
used in web servers and includes several options for validation and
controlling the way that the JSON is generated.  Defaults for those options
can be set using JNDI or JMX/MBean access which is normally available with
JEE web tier containers.  If you don't have those, a debug log message
may be generated, but it is harmless.  Those log messages can be suppressed
by setting system properties on the java command line.

Binaries are available in the <a href="#downloads">Downloads</a> section below.

The trunk branch on GitHub requires Java 8, but there are branches for Java 5,
Java 6 and Java 7 which maintain the same functionality except for
the default methods in an interface.  Between 5, 6 and 7, some syntax had
to be dumbed down and some JDK methods had to be replicated as the versions
went down.

Files are included for the Maven project and an Eclipse project in GitHub.

It has JUnit tests for most of the functionality.

There is a run time dependency on the
[Apache Commons Logging](http://commons.apache.org/proper/commons-logging/)
facade so that it should work with whatever logging framework you already use.
Logging is used for JNDI and JMX/MBeans and testing.

[GitHub releases page for JSONUtil](https://github.com/billdavidson/JSONUtil/releases)

[Javadoc online](http://kopitubruk.org/JSONUtil/javadoc) - start with the JSONUtil class.

[JSONUtil at the Maven Central Repository](http://search.maven.org/#search%7Cgav%7C1%7Cg%3A%22org.kopitubruk.util%22%20AND%20a%3A%22JSONUtil%22)

[Report Issues](https://github.com/billdavidson/JSONUtil/issues)

<h4 id="downloads">Downloads</h4>

<table>
  <caption>Release 1.10.4</caption>
  <tbody>
    <tr>
      <td>Java 8</td>
      <td><a href="https://github.com/billdavidson/JSONUtil/releases/download/JSONUtil-1.10.4/JSONUtil-1.10.4.jar">Library</a></td>
      <td><a href="https://github.com/billdavidson/JSONUtil/releases/download/JSONUtil-1.10.4/JSONUtil-1.10.4-javadoc.jar">Javadoc</a></td>
      <td><a href="https://github.com/billdavidson/JSONUtil/releases/download/JSONUtil-1.10.4/JSONUtil-1.10.4-sources.jar">Sources</a></td>
    </tr>
    <tr>
      <td>Java 7</td>
      <td><a href="https://github.com/billdavidson/JSONUtil/releases/download/JSONUtil-1.10.4/JSONUtil-1.10.4-java7.jar">Library</a></td>
      <td><a href="https://github.com/billdavidson/JSONUtil/releases/download/JSONUtil-1.10.4/JSONUtil-1.10.4-java7-javadoc.jar">Javadoc</a></td>
      <td><a href="https://github.com/billdavidson/JSONUtil/releases/download/JSONUtil-1.10.4/JSONUtil-1.10.4-java7-sources.jar">Sources</a></td>
    </tr>
    <tr>
      <td>Java 6</td>
      <td><a href="https://github.com/billdavidson/JSONUtil/releases/download/JSONUtil-1.10.4/JSONUtil-1.10.4-java6.jar">Library</a></td>
      <td><a href="https://github.com/billdavidson/JSONUtil/releases/download/JSONUtil-1.10.4/JSONUtil-1.10.4-java6-javadoc.jar">Javadoc</a></td>
      <td><a href="https://github.com/billdavidson/JSONUtil/releases/download/JSONUtil-1.10.4/JSONUtil-1.10.4-java6-sources.jar">Sources</a></td>
    </tr>
    <tr>
      <td>Java 5</td>
      <td><a href="https://github.com/billdavidson/JSONUtil/releases/download/JSONUtil-1.10.4/JSONUtil-1.10.4-java5.jar">Library</a></td>
      <td><a href="https://github.com/billdavidson/JSONUtil/releases/download/JSONUtil-1.10.4/JSONUtil-1.10.4-java5-javadoc.jar">Javadoc</a></td>
      <td><a href="https://github.com/billdavidson/JSONUtil/releases/download/JSONUtil-1.10.4/JSONUtil-1.10.4-java5-sources.jar">Sources</a></td>
    </tr>
  </tbody>
</table>

<!-- /.tiles -->

<div id="comments"></div>
