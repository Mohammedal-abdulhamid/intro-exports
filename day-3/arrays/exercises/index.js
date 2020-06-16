const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

console.log("checking multiTypeArray");

try {
  const multiTypeArray = ["I am a string", 42, true, [1, 2, 3]];

  check(FILL_ME_IN).isEqualTo(typeof multiTypeArray[0]);
  check(FILL_ME_IN).isEqualTo(typeof multiTypeArray[1]);
  check(FILL_ME_IN).isEqualTo(typeof multiTypeArray[2]);
  check(FILL_ME_IN).isEqualTo(typeof multiTypeArray[3]);

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("checking alphaSample");

try {
  const alphaSample = ["a", "b", "c"];
  alphaSample.push("d");
  alphaSample.push("g");

  check(FILL_ME_IN).isEqualTo(alphaSample);

  const lastItem = alphaSample.pop();

  check(FILL_ME_IN).isEqualTo(lastItem);
  check(FILL_ME_IN).isEqualTo(alphaSample);

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("working with nested arrays");
try {
  const rows = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ];

  check(FILL_ME_IN).isEqualTo(rows[0]);
  check(FILL_ME_IN).isEqualTo(rows[1]);
  check(FILL_ME_IN).isEqualTo(rows[2]);

  const firstRow = rows[0];
  check(firstRow[0]).isEqualTo("a");
  check(firstRow[FILL_ME_IN]).isEqualTo("b");

  check(rows[1][FILL_ME_IN]).isEqualTo("e");
  check(rows[2][FILL_ME_IN]).isEqualTo("g");
  check(rows[0][FILL_ME_IN]).isEqualTo("c");

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

console.log("get the slice of an array");

try {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"];

  check(FILL_ME_IN).isEqualTo(letters.slice(1, 4));
  check(FILL_ME_IN).isEqualTo(letters.slice(2, 3));
  check(FILL_ME_IN).isEqualTo(letters.slice(3, 5));
  check(FILL_ME_IN).isEqualTo(letters.slice(-1));
  check(FILL_ME_IN).isEqualTo(letters.slice(-2));
  check(FILL_ME_IN).isEqualTo(letters.slice(0, -4));

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

var FILL_ME_IN;
