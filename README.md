QUnit to JsTestDriver adapter
=============================
Qunit Adapter provides a small wrapper for JsTestDriver (http://code.google.com/p/js-test-driver/) to run QUnit (http://github.com/jquery/qunit) tests.
Supports new QUnit methods from current trunk revision r556 (http://code.google.com/p/js-test-driver/source/browse/trunk/JsTestDriver/contrib/qunit/src/QUnitAdapter.js?spec=svn1032&r=556) including start() and stop() async methods.

Extended from bundled QUnit adapter: http://code.google.com/p/js-test-driver/wiki/QUnitAdapter
For aync methods I extended the patch by this chap: http://code.google.com/p/js-test-driver/issues/detail?id=33#c4

Also in the repo are a few basic tests for the adapter. Enjoy!

TODO
====
Adding support for HTML fixtures (with html files!), severely lacking in JsTestDriver.


Contact
=======
adam.mccann[at]videogamer[dot]com
