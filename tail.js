const tail = function(array) {
  let tail = array.slice(1);
  console.log(tail)
  let emptyArray = [];

  if (array.length <= 1) {
    return emptyArray;
  } else {
    return tail;
  
  }
};


module.exports = tail;

