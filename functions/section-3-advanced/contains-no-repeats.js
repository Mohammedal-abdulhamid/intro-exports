const { check, runTest } = require("../../test-api/index.js");

function containsNoRepeats(str) {
  // This function should take a string as its argument and return true if each character appears only once and false otherwise
}

runTest(
  "containsNoRepeats() takes a string and returns true if each character only appears once in the string",
  function () {
    check(containsNoRepeats("dog")).isEqualTo(true);
    check(containsNoRepeats("oo")).isEqualTo(false);
    check(containsNoRepeats("dooog")).isEqualTo(false);
    check(containsNoRepeats("iHaveRepeats")).isEqualTo(false);
    check(containsNoRepeats("anat")).isEqualTo(false);
    check(containsNoRepeats("cat")).isEqualTo(true);
    check(containsNoRepeats("abcde")).isEqualTo(true);
    check(containsNoRepeats("abcdea")).isEqualTo(false);
  }
);
