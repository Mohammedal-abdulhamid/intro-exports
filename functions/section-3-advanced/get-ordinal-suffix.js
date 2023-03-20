const { check, runTest, skipTest } = require("../../test-api/index.js");

function getOrdinalSuffix(num) {
  // This function should take a number as an argument
  // An ordinal suffix are the letters we put after a number:
  // E.g. "nd" is an ordinal suffix as we'd write 2nd and "st" is an ordinal suffix as we'd write 1st etc
  // You should return the corresponding ordinal suffix
  // See here for more details: https://www.grammarly.com/blog/how-to-write-ordinal-numbers-correctly/
}

runTest(
  "getOrdinalSuffix() should give the correct ordinal suffix for a number",
  function () {
    check(getOrdinalSuffix(1)).isEqualTo("st");
    check(getOrdinalSuffix(2)).isEqualTo("nd");
    check(getOrdinalSuffix(3)).isEqualTo("rd");
    check(getOrdinalSuffix(4)).isEqualTo("th");
    check(getOrdinalSuffix(5)).isEqualTo("th");
    check(getOrdinalSuffix(10)).isEqualTo("th");
    check(getOrdinalSuffix(11)).isEqualTo("th");
    check(getOrdinalSuffix(12)).isEqualTo("th");
    check(getOrdinalSuffix(13)).isEqualTo("th");
    check(getOrdinalSuffix(14)).isEqualTo("th");
    check(getOrdinalSuffix(15)).isEqualTo("th");
    check(getOrdinalSuffix(16)).isEqualTo("th");
    check(getOrdinalSuffix(17)).isEqualTo("th");
    check(getOrdinalSuffix(18)).isEqualTo("th");
    check(getOrdinalSuffix(19)).isEqualTo("th");
    check(getOrdinalSuffix(20)).isEqualTo("th");
    check(getOrdinalSuffix(21)).isEqualTo("st");
    check(getOrdinalSuffix(22)).isEqualTo("nd");
    check(getOrdinalSuffix(23)).isEqualTo("rd");
    check(getOrdinalSuffix(32)).isEqualTo("nd");
  }
);
