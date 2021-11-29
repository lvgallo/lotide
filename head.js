/*// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const thumbsUp = String.fromCodePoint(0x1F44D);
  const thumbsDown = String.fromCodePoint(0x1F44E);

  if (actual === expected) {
    console.log(thumbsUp + ` Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(thumbsDown + ` Assertion Failed: ${actual} !== ${expected}`);
  }
};


// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
*/
const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array.length === 0) { 
    return undefined;
  } else {
    return array[0];
  }
};
/*
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6,7]), 5);
assertEqual(head([]), 5);
*/
module.exports = head;