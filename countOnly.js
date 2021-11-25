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

/*const countOnly = function(allItems, itemsToCount) {
const results = {};

  for (let items in itemsToCount) {
    let results = {};
    if (itemsToCount[items]) {
      results += items;
      }
    
    for (let i=0; i <allItems.length; i++){
      for (let j=0 ; j < results[j]; j++)      
        if(results[j][0] === allItems[i]){
       results[items] += 1;
      }
    }
    
    console.log(results)
  }
  return results
}
*/


const countOnly = function(allItems,itemsToCount) {
  const results = {};
  
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const results = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(results);
assertEqual(results["Jason"], 1);
assertEqual(results["Karima"], undefined);
assertEqual(results["Fang"], 2);
assertEqual(results["Agouhanna"], undefined);

