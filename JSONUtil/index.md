---
layout: archive
permalink: /JSONUtil/
title: "JSON Generation Utility"
---

This is a JSON generation library for Java.  Instead of creating its own maps for
objects or lists for arrays, this package allows you to use any Map you like,
allowing for iterations on your Map to be predictable by using a TreeMap or a
LinkedHashMap which can be useful for debugging. You can also use any Iterable
object or Enumeration to create a Javascript array or even use an actual array of
objects or primitives. In many cases it may be possible to use existing data
structures without modification.

There is also an interface provided called JSONAble which enables marking classes
that can convert themselves to JSON and when those are encountered as the values
in a Map, Iterable, Enumeration or array, their JSONAble#toJSON(JSONConfig,Writer)
method will be called to add them to the output.

This library is oriented towards being
used in web servers and includes several options for validation and
controling the way that the JSON is generated.  Defaults for those options
can be set using JNDI or JMX/MBean access which is normally available with
JEE web tier containers.  If you don't have those, a debug log message
may be generated, but it is harmless.  Those log messages can be supressed
by setting system properties on the java command line.

Binaries are available in the <a href="#downloads">Downloads</a> section below.

The trunk branch on GitHub requires Java 8, but there are branches for Java 5,
Java 6 and Java 7 which maintain the same functionality except for
the default methods in an interface.  Between 5, 6 and 7, some syntax had
to be dumbed down and some JDK methods had to be replicated as the versions
went down.

Files are included for the Maven project and an Eclipse project in GitHub.

It has JUnit tests for most of the functionality.

There is a run time dependency on the Apache Commons Logging facade so that
it should work with whatever logging framework you already use. Logging is
used for JNDI and JMX/MBeans and testing.

[GitHub page for JSONUtil](https://github.com/billdavidson/JSONUtil)

[Javadoc for JSONUtil 1.0 online](javadoc)

<h4 id="downloads">Downloads</h4>

<table>
  <caption>Release 1.0</caption>
  <tbody>
    <tr>
      <td>Java 8</td>
      <td><a href="release/1.0/JSONUtil-1.0.jar">Binary</a></td>
      <td><a href="release/1.0/JSONUtil-1.0-javadoc.jar">Javadoc</a></td>
      <td><a href="release/1.0/JSONUtil-1.0-sources.jar">Sources</a></td>
    </tr>
    <tr>
      <td>Java 7</td>
      <td><a href="release/1.0/JSONUtil-1.0-java7.jar">Binary</a></td>
      <td><a href="release/1.0/JSONUtil-1.0-java7-javadoc.jar">Javadoc</a></td>
      <td><a href="release/1.0/JSONUtil-1.0-java7-sources.jar">Sources</a></td>
    </tr>
    <tr>
      <td>Java 6</td>
      <td><a href="release/1.0/JSONUtil-1.0-java6.jar">Binary</a></td>
      <td><a href="release/1.0/JSONUtil-1.0-java6-javadoc.jar">Javadoc</a></td>
      <td><a href="release/1.0/JSONUtil-1.0-java6-sources.jar">Sources</a></td>
    </tr>
    <tr>
      <td>Java 5</td>
      <td><a href="release/1.0/JSONUtil-1.0-java5.jar">Binary</a></td>
      <td><a href="release/1.0/JSONUtil-1.0-java5-javadoc.jar">Javadoc</a></td>
      <td><a href="release/1.0/JSONUtil-1.0-java5-sources.jar">Sources</a></td>
    </tr>
  </tbody>
</table>

<div class="tiles">
{% for post in site.posts %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->