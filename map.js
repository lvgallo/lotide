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

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  }

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ['g','c','t','m','t']); //word[0]
//assertArraysEqual(results1, ['r','o','o','a','o']); //word [1] pass
assertArraysEqual(results1, ['r','o','o','a','o']); //word [0] fail