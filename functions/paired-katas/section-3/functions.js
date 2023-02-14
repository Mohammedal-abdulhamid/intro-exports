const { check, runTest, skipTest } = require("../../../test-api/index.js");

/*
Instructions

For these challenges you are expected to declare your own function with the name and suggested behaviour provided.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

//Question 0
/*
function double() 
  This function should return any number doubled
*/

skipTest("double() can double any number", function () {
  check(double(11)).isEqualTo(22);
  check(double(129)).isEqualTo(258);
  check(double(25)).isEqualTo(50);
});

//Question 1
/*
function multiply() 
 This function should return the product of two passed numbers

*/

skipTest("multiply() can multiply 2 numbers together", function () {
  check(multiply(10, 42)).isEqualTo(420);
  check(multiply(3, 5)).isEqualTo(15);
  check(multiply(-180, 2)).isEqualTo(-360);
});

// Question 2
/*
roundDown()

This function should take a single argument and return its value rounded DOWN to the nearest integer
*/

skipTest("roundDown() returns the result of rounding down to the nearest integer", function () {
  check(roundDown(100.1)).isEqualTo(100);
  check(roundDown(25.5)).isEqualTo(25);
  check(roundDown(121.999)).isEqualTo(121);
});

// Question 3
/*
raiseToPower()

This function should take two arguments, m and n, and return m raised to the power of n
*/

skipTest("raiseToPower() raises given number to the given power", function () {
  check(raiseToPower(10, 3)).isEqualTo(1000);
  check(raiseToPower(25, 2)).isEqualTo(625);
  check(raiseToPower(10, 0)).isEqualTo(1);
});

// Question 4
/*
capitaliseFirstLetter()

This function should take a string as an argument and return the same string with the first letter capitalised
*/
skipTest("capitaliseFirstLetter() capitalises the first letter in a string", function () {
  check(capitaliseFirstLetter("bang")).isEqualTo("Bang");
  check(capitaliseFirstLetter("apple")).isEqualTo("Apple");
  check(capitaliseFirstLetter("coding")).isEqualTo("Coding");
});

// Question 5
/*
isInThe20thCentury()

This function should take a number as an argument representing a year, and return true if that year is in the 20th century and false otherwise

*/

skipTest("isInThe20thCentury() checks if a number is within 1901 to 2000 (inclusive)", function () {
  check(isInThe20thCentury(1962)).isEqualTo(true);
  check(isInThe20thCentury(1901)).isEqualTo(true);
  check(isInThe20thCentury(1900)).isEqualTo(false);
  check(isInThe20thCentury(1913)).isEqualTo(true);
  check(isInThe20thCentury(1876)).isEqualTo(false);
  check(isInThe20thCentury(2001)).isEqualTo(false);
  check(isInThe20thCentury(2000)).isEqualTo(true);
});

// Question 6
/*
isAbsolutePath()

This function should take a string as an argument representing a file path and return true if it is an absolute path, and false otherwise

HINT: all absolute file paths start with a /
*/

skipTest("isAbsolutePath() checks if a file path is absolute or relative", function () {
  check(isAbsolutePath("/Users/mitch")).isEqualTo(true);
  check(isAbsolutePath("/Users/mitch/northcoders/remote_course/remote_precourse_1")).isEqualTo(true);
  check(isAbsolutePath("../composers")).isEqualTo(false);
  check(isAbsolutePath("./applications/my-awesome-app.js")).isEqualTo(false);
});

// Question 7

/*
getCharCode()

This function should take a string as an argument and return a string which describes the ASCII code of that character

The returned string should be in the following format:

"The ASCII code for <character> is <character-code>"
*/

skipTest("getCharCode() will return a message stating the ASCII code of a passed char", function () {
  check(getCharCode("A")).isEqualTo("The ASCII code for A is 65");
  check(getCharCode("b")).isEqualTo("The ASCII code for b is 98");
  check(getCharCode("z")).isEqualTo("The ASCII code for z is 122");
  check(getCharCode("k")).isEqualTo("The ASCII code for k is 107");
  check(getCharCode("!")).isEqualTo("The ASCII code for ! is 33");
  check(getCharCode("M")).isEqualTo("The ASCII code for M is 77");
});

/************  Refactor Challenges *************

1. Question 5 - complete this problem without resorting to if statements!
2. Refactor every function into an ES6 arrow function () => {}
*/
