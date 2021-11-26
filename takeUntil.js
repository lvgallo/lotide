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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function(array, callback) {
  let arrayResult = [];
  for (let i = 0; i < array.length; i++){
    if (callback(array[i])){
      return arrayResult;
    } else {
      arrayResult.push(array[i]);
    }
  }
}
const results1 = takeUntil(data1, x => x < 0);

assertArraysEqual([ 1, 2, 5, 7, 2 ], results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(["I've", "been", "to", "Hollywood"], results2);
