const tail = function(array) {
  let tail = array.slice(0);
  let emptyArray = [];

  if (array.length <= 1) {
    return emptyArray;
  } else {
    return tail;
  }
};

module.exports = tail;

