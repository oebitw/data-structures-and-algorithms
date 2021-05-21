'use strict';

function reverseArray (arr){
  let newArr=[];

  for (let i=arr.length-1; i>=0; i--){
    newArr.push(arr[i]);
  }

  if(newArr.length===0){
    return 'Please enter an array';
  }else{
    return newArr;
  }
}

module.exports = reverseArray;
