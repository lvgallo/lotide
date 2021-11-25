const countLetters = function(sentence) {
//clean whitespaces, lowercase != uppercase
  const countEachLetter = {};
  
  let sentenceArray = [];
  sentence = sentence.toLowerCase();
  sentence = sentence.replace(/\s/g, "");
  sentenceArray = sentence.split("");

  for (const letters of sentenceArray) {
    if (countEachLetter[letters]) {
      countEachLetter[letters] += 1;
    } else {
      countEachLetter[letters] = 1;
    }
  }
  return countEachLetter;
};

console.log(countLetters("lighthouse in the house"));