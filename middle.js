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
};

module.exports= middle; 

