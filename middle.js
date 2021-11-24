// FUNCTION IMPLEMENTATION
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

const assertArraysEqual = function(actual, expected) {
  const thumbsUp = String.fromCodePoint(0x1F44D);
  const thumbsDown = String.fromCodePoint(0x1F44E);
  if (eqArrays(actual,expected)) {
    console.log(thumbsUp + ` Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(thumbsDown + ` Assertion Failed: ${actual} !== ${expected}`);
  }
};
const middle = function(array) {
	let arrayMiddle = [];
  let middle = array.length / 2;
  let middleIndex = Math.floor(middle);
  if(array.length <= 2) {
  	return arrayMiddle;
  } else if (array.length % 2 !== 0) { // arrays with odd number of elements
      arrayMiddle.push(array[middleIndex]);
  	  return arrayMiddle;
  } else if (array.length % 2 === 0) { //array with even number of elements
  	arrayMiddle.push(array[middleIndex-1]);
  	arrayMiddle.push(array[middleIndex]);
  	return arrayMiddle;
  }
  
}

console.log(middle([1])); // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

assertArraysEqual(middle([1]), []); 
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

// TEST CODE
/*assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);node

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
*/
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

