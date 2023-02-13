const { check, runTest, skipTest } = require("../../../test-api/index.js");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

// Exercise 1
function checkIfPropertyExists(obj, key) {
  // This function should take an object and a key as its arguments and return true if the input object contains the provided key and false otherwise
}

skipTest("checkIfPropertyExists() checks if a property exists inside an object", function () {
  check(checkIfPropertyExists({ name: "jonny", age: 32 }, "name")).isEqualTo(true);
  check(checkIfPropertyExists({ name: "jonny", age: 32 }, "age")).isEqualTo(true);
  check(checkIfPropertyExists({ name: "jonny", age: 32 }, "pets")).isEqualTo(false);
});

// Exercise 2
function getLastItem(arr) {
  //Write your function here...
}

skipTest("getLastItem() returns the last item in an array", function () {
  check(getLastItem(["a", "b", "c", "d"])).isEqualTo("d");
  check(getLastItem(["apple", "banana", "pear", "kiwi"])).isEqualTo("kiwi");
});

// Exercise 3
function createObject(arr) {
  // This function should take an array consisting of two elements representing a key/ value pair as its argument and return an object with a single property based on the input
}

skipTest("createObject() creates a new object from a key value pair", function () {
  check(createObject(["name", "shaq"])).isEqualTo({ name: "shaq" });
  check(createObject(["fruit", "apple"])).isEqualTo({ fruit: "apple" });
  check(createObject(["language", "haskell"])).isEqualTo({ language: "haskell" });
});

// Exercise 4
function getFirstNItems(arr, n) {
  // This function should take two arguments, an array and a number n, and return a new array containing the first n items of the given array
}

skipTest("getFirstNItems() returns the first n items in an array", function () {
  check(getFirstNItems(["a", "b", "c", "d"], 2)).isEqualTo(["a", "b"]);
  check(getFirstNItems(["apple", "banana", "pear", "kiwi"], 0)).isEqualTo([]);
  check(getFirstNItems(["apple", "banana", "pear", "kiwi"], 3)).isEqualTo(["apple", "banana", "pear"]);
});

// Exercise 5
function createArrow(direction) {
  // This function should take a string representing a direction ("left", "right", "up" or "down") as its argument and return the corresponding arrow ("←", "→", "↑", "↓")
  // You don't need to utilise an object here, but think about how you could do so
}

skipTest("createArrow() will return an arrow pointing in the right direction", function () {
  check(createArrow("left")).isEqualTo("←");
  check(createArrow("right")).isEqualTo("→");
  check(createArrow("up")).isEqualTo("↑");
  check(createArrow("down")).isEqualTo("↓");
});

// Exercise 6
function moveItemToEnd(arr, n) {
  // This function should take two arguments, an array and a number n, and return a new array where the item that was previously at index 'n' is now at the end of the array 
}

skipTest("moveItemToEnd() removes an item at a given index", function () {
  check(moveItemToEnd(["a", "b", "c", "d"], 0)).isEqualTo(["b", "c", "d", "a"]);
  check(moveItemToEnd(["a", "b", "c", "d"], 2)).isEqualTo(["a", "b", "d", "c"]);
  check(moveItemToEnd(["a", "b", "c", "d"], 1)).isEqualTo(["a", "c", "d", "b"]);
});

// Exercise 7
function updateUserAge(user) {
  /*
  The user of our website is having a birthday!

  This function should take an object representing a user's account information

  A user object will look
  {
    admin: false,
    username: "xoxoAlexoxo",
    personalDetails: {
      name: "Alex",
      age: 39,
      favFood: "gooseberry fool"
    }
  }
  The user's age should be increased by 1 to reflect their recent birthday

  NOTE: This function does NOT need to return anything!
  */
}

skipTest("updateUserAge() updates the user's age", function () {
  const user1 = {
    admin: false,
    username: "xoxoAlexoxo",
    personalDetails: {
      name: "Alex",
      age: 39,
      favFood: "gooseberry fool"
    }
  };

  updateUserAge(user1);

  check(user1).isEqualTo({
    admin: false,
    username: "xoxoAlexoxo",
    personalDetails: {
      name: "Alex",
      age: 40,
      favFood: "gooseberry fool"
    }
  });

  const user2 = {
    admin: true,
    username: "brum4life",
    personalDetails: {
      name: "Poonam",
      age: 19,
      favFood: "caviar"
    }
  };

  updateUserAge(user2);

  check(user2).isEqualTo({
    admin: true,
    username: "brum4life",
    personalDetails: {
      name: "Poonam",
      age: 20,
      favFood: "caviar"
    }
  })
});

//Exercise 7
function mergeArrays(arr1, arr2) {
  // This function should take two arrays as arguments and return a new array containing all of arr1 and arr2's elements (in that order)
}

skipTest("mergeArrays() will concatenate two arrays together", function () {
  check(mergeArrays(["a", "b"], ["c", "d"])).isEqualTo(["a", "b", "c", "d"]);
  check(mergeArrays([1], [3, 5, 7])).isEqualTo([1, 3, 5, 7]);
  check(mergeArrays(["x", "y", "z"], [1, 2, 3, 4])).isEqualTo(["x", "y", "z", 1, 2, 3, 4]);
});
