'use strict';


module.exports = function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temporary = arr[i];
    let x = i - 1;
    while (temporary < arr[x] && x >= 0 ) {
      arr[x + 1] = arr[x];
      x--;
    }
    arr[x + 1] = temporary;
  }
  return arr;
};
