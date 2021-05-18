'use strict';

function binarySearch(sortedArray, key){
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let index = Math.floor((start + end) / 2);

    if (sortedArray[index] === key) {
      return index;
    } else if (sortedArray[index] < key) {
      start = index + 1;
    } else {
      end = index - 1;
    }
  }
  return -1;
}

module.exports = binarySearch;
