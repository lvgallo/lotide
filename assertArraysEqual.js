// FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  const thumbsUp = String.fromCodePoint(0x1F44D);
  const thumbsDown = String.fromCodePoint(0x1F44E);
  if (eqArrays(actual,expected)) {
    console.log(thumbsUp + ` Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(thumbsDown + ` Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;

