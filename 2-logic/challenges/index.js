const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

function isBiggerThan10(num) {
  // checks if a number is strictly bigger than 10 and returns a message accordingly
}

runTest("isBiggerThan10() returns a message indicating if a number is bigger than 10", function () {
  check(isBiggerThan10(3)).isEqualTo("Number 3 is less than 10");
  check(isBiggerThan10(4)).isEqualTo("Number 4 is less than 10");
  check(isBiggerThan10(5)).isEqualTo("Number 5 is less than 10");
  check(isBiggerThan10(10)).isEqualTo("Number 10 is equal to 10");
  check(isBiggerThan10(11)).isEqualTo("Number 11 is more than 10");
  check(isBiggerThan10(100)).isEqualTo("Number 100 is more than 10");
});

function isFalsy(value) {
  // checks if a value is falsy and returns true if it is - returns false otherwise
}

skipTest("isFalsy() returns true if a value is falsy and false if it is truthy", function () {
  check(isFalsy(false)).isEqualTo(true);
  check(isFalsy("")).isEqualTo(true);
  check(isFalsy(0)).isEqualTo(true);
  check(isFalsy(NaN)).isEqualTo(true);
  check(isFalsy(undefined)).isEqualTo(true);
  check(isFalsy(null)).isEqualTo(true);
  check(isFalsy(true)).isEqualTo(false);
});

function readTrafficLight(lightColour) {
  // this function should check if the "traffic light colour" is red, green or amber and return a corresponding message
}

skipTest("readTrafficLight() should print a message according to the different colour passed in", function () {
  check(readTrafficLight("green")).isEqualTo("GO!");
  check(readTrafficLight("GREEN")).isEqualTo("GO!");

  check(readTrafficLight("amber")).isEqualTo("GET READY...");
  check(readTrafficLight("AMBER")).isEqualTo("GET READY...");

  check(readTrafficLight("red")).isEqualTo("STOP!");
  check(readTrafficLight("RED")).isEqualTo("STOP!");
});

function isMultipleOf6(num) {
  // isMultipleOf6 check if a passed value is a multiple of 6
}

skipTest("isMultipleOf6() should check if a number is divisible by 6", function () {
  check(isMultipleOf6(6)).isEqualTo(true);
  check(isMultipleOf6(10)).isEqualTo(false);
  check(isMultipleOf6(15)).isEqualTo(false);
  check(isMultipleOf6(36)).isEqualTo(true);
  check(isMultipleOf6(60)).isEqualTo(true);
  check(isMultipleOf6(61)).isEqualTo(false);
});

function checkInfinitive(word) {
  // checkInfinitive() will check if a French word is an infinitive French verb
  // A French infinitive verb is a word that ends with either "re", "ir" or "er"
}

skipTest("checkInfinitive() checks if a french word is an infinitive", function () {
  check(checkInfinitive("manger")).isEqualTo(true);
  check(checkInfinitive("faire")).isEqualTo(true);
  check(checkInfinitive("aller")).isEqualTo(true);
  check(checkInfinitive("finir")).isEqualTo(true);
  check(checkInfinitive("rendre")).isEqualTo(true);
  check(checkInfinitive("savoir")).isEqualTo(true);

  check(checkInfinitive("suis")).isEqualTo(false);
  check(checkInfinitive("ai")).isEqualTo(false);
  check(checkInfinitive("ete")).isEqualTo(false);
  check(checkInfinitive("sais")).isEqualTo(false);
  check(checkInfinitive("allons")).isEqualTo(false);
});

function checkGame(diceRoll, coinToss) {
  // checkGame() should take a value from a diceRoll ( a number from 1 to 6 )
  // and should also take the result from a coinToss (either "H" for heads or "T" for tails)
  // the function should return true if the player wins the game - getting a dice roll of 3 or higher AND a coinToss of 'H'
  // means that you have won the game :)
}

skipTest("checkGame() should check if a user was won the game", function () {
  check(checkGame(3, "H")).isEqualTo(true);
  check(checkGame(4, "H")).isEqualTo(true);
  check(checkGame(5, "H")).isEqualTo(true);
  check(checkGame(6, "H")).isEqualTo(true);
  check(checkGame(6, "T")).isEqualTo(false);
});

function checkBatteryLevel(batteryLevel) {
  // if the battery level is less than or equal to 5%, then it should return a string stating:
  // "Warning - battery level low: <number-here>%, please charge your device"
  // if the battery level is between 5 and 99% then it should return a string stating:
  // "Battery level: <number-here>%"
  // if the battery level is 100% then it should return a string stating:
  // "Fully charged :)"
}

skipTest("checkBatteryLevel() should return a message with info about the battery level", function () {
  check(checkBatteryLevel("100")).isEqualTo("Fully charged :)");

  check(checkBatteryLevel("99")).isEqualTo("Battery level: 99%");
  check(checkBatteryLevel("80")).isEqualTo("Battery level: 80%");
  check(checkBatteryLevel("30")).isEqualTo("Battery level: 30%");
  check(checkBatteryLevel("10")).isEqualTo("Battery level: 10%");
  check(checkBatteryLevel("6")).isEqualTo("Battery level: 6%");

  check(checkBatteryLevel("5")).isEqualTo("Warning - battery level low: 5%, please charge your device");
  check(checkBatteryLevel("4")).isEqualTo("Warning - battery level low: 4%, please charge your device");
  check(checkBatteryLevel("3")).isEqualTo("Warning - battery level low: 3%, please charge your device");
  check(checkBatteryLevel("1")).isEqualTo("Warning - battery level low: 1%, please charge your device");
});

function getOrdinalSuffix(num) {
  // an ordinal suffix are the letters we put after a number:
  // E.g. "nd" is an ordinal suffix as we'd write 2nd
  // E.g. "st" is an ordinal suffix as we'd write 1st etc
  // getOrdinalSuffix() should take a number and return the corresponding ordinal suffix
  // See here for more details: https://www.grammarly.com/blog/how-to-write-ordinal-numbers-correctly/
}

skipTest("getOrdinalSuffix() should give the correct ordinal suffix for a number", function () {
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
});
