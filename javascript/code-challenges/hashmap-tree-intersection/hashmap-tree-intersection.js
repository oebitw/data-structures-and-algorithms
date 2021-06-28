'use strict';

const HashTable = require('../../Data-Structures/hashtable/hashtable');


function treeIntersection(tree1, tree2) {

  if((tree1 && !tree2) || (!tree1 && tree2)) {
    return 'Exception';
  }


  let results = [];
  const hashtable = new HashTable(2048);
  const treeOneArray = tree1.preOrder();
  for(let i=0;i<treeOneArray.length;i++){
    if (!hashtable.contains(treeOneArray[i].toString())) {
      hashtable.add(treeOneArray[i].toString(), treeOneArray[i]);
    }
  }
  const treeTwoArray = tree2.preOrder();
  for(let i=0;i<treeTwoArray.length;i++){
    if (hashtable.contains(treeTwoArray[i].toString())) {
      results.push(treeTwoArray[i]);
    }
  }


  if(results.length){
    return results;
  }else{
    return 'There is no common values inside the two trees';
  }
}

module.exports = treeIntersection;
