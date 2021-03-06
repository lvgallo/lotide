const thumbsUp = String.fromCodePoint(0x1F44D);
const thumbsDown = String.fromCodePoint(0x1F44E);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
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

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let i in object1) {
      if ((Array.isArray(object1[i]) && Array.isArray(object2[i]))) {
        if (eqArrays(object1[i], object2[i]) === false) {
          return false
        }
      } else {
        if (object1[i] !== object2[i]) {
          return false;
        }
      }
    }
    return true;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(thumbsUp + thumbsUp + ` Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(thumbsDown + thumbsDown +` Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }  
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // 👍👍 Assertion Passed: { a: '1', b: '2' } === { b: '2', a: '1' }


const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => 👎👎 Assertion Failed: { a: '1', b: '2' } !== { a: '1', b: '2', c: '3' }

