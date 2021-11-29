// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const thumbsUp = String.fromCodePoint(0x1F44D);
  const thumbsDown = String.fromCodePoint(0x1F44E);

  if (actual === expected) {
    console.log(thumbsUp + ` Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(thumbsDown + ` Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let tail = array.slice(0);
  let emptyArray = [];

  if (array.length <= 1) {
    return emptyArray;
  } else {
    return tail;
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length,3); // original array should still have 3 elements!
