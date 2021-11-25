const letterPositions = function(sentence) {
  const results = {};
  
  let sentenceArray = [];
  sentence = sentence.toLowerCase();
  sentenceArray = sentence.split("");

  for (let i = 0; i <= sentenceArray.length; i++) {
    if (results[sentenceArray[i]]) {
      results[sentenceArray[i]].push(i);
    } else if (results[sentenceArray[i]] !== " ") {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));