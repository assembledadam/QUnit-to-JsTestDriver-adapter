
module( "Module Test A" );

test( "Generic test", function() {
	expect(1);
	var poo = 1;
	equal( poo, 1, "Should pass" );
});

test( "Generic test with expect in argument", 1, function() {
	var poo = 1;
	equal( poo, 1, "Should pass" );
});

module("Module Test B with setup and teardown", {
	setup: function() {
		ok(true, "once extra assert per test");
		this.testData = "foobar";
	},
	teardown: function() {
		ok(true, "and one extra assert after each test");
	}
});

test("test with setup and teardown", function() {
  expect(3);
  // test depreciated method (same == deepEqual)
  same(this.testData, "foobar");
});

module( "Module Test C" );

test( "JsTestDriver DOM Comments", function() {
	expect(1);
	/*:DOC += <div id="foo">test</div> */
	equal( document.getElementById('foo').innerHTML, 'test', "Should pass" );
});

test( "Testing deep equal", function() {
	expect(2);
	var actual = {a: 1};
	//equal(actual, {a: 1}, "must fail, same content, but different object, not handled by equals");
	notDeepEqual(actual, {a: "1"}, "must not be deep equal, expected value is a string, actual a number");
	deepEqual(actual, {a: 1}, "must pass, same content, but different object");
});

test( "Testing strictEqual", function() {
	expect(2);
	var actual = 0;
	equal(actual, false, "Passes, as 0 and false are the same when compared with ==");
	notStrictEqual(actual, false, "Not strict equal, as 0 is a Number type, false Boolean");
});

test("Testing of raises() with no error param", function() {
	expect(1);
	raises(function() {
		throw new Error("failing test");
	}, "must throw error to pass");
});

test("Testing of raises() with error param", function() {
	expect(1);
	function CustomError() {};
	raises(function() {
		throw new CustomError();
	}, CustomError(), "must throw error to pass");
});

asyncTest( "Test of asyncTest() with start()", function() {
	expect(1);	
	var actual = false;

	setTimeout(function() {
		 strictEqual( actual, false, "actual should be defined as false" );
		 start();
	}, 200 );
});

test( "aSyncronous testing with start() and stop()", function() {
	expect(1);
	
	var actual = false;
	stop();
	
	setTimeout(function() {
		 strictEqual( actual, false, "actual should be defined as false 2" );
		 start();
	}, 200 );
});