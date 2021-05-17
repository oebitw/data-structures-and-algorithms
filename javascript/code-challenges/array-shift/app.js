'use strict';

function insertShiftArray(arr,num){
  let answer=[];
  let half= Math.ceil(arr.length/2);

  for (let i=0; i<arr.length+1;i++){
    if(i<half){
      answer[i]=arr[i];
    }
    if(i===half){
      answer[i]=num ;
    }
    if(i>half){
      answer[i]=arr[i-1];
    }
  }
  return answer;

}


module.exports = insertShiftArray ;

