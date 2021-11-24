// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  const thumbsUp = String.fromCodePoint(0x1F44D);
  const thumbsDown = String.fromCodePoint(0x1F44E);
  if (eqArrays(actual,expected)) {
    console.log(thumbsUp + ` Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(thumbsDown + ` Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1,array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i <= array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};


// TEST CODE
/*assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);node

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
*/
assertArraysEqual([1, 2 ,3], [1, 2, 3]); // => should PASS
