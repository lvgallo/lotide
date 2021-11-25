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

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

const findKeyByValue = function(object, tvShow) {
  for (const genre in bestTVShowsByGenre) {
    if (bestTVShowsByGenre[genre] === tvShow) {
      return genre;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
