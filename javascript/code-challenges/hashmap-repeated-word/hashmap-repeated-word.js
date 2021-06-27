'use strict';


const HashTable = require('../../Data-Structures/hashtable/hashtable');

function repeatedWord(string) {

  if (string === '') {
    return 'Empty String';
  }

  if (string.length) {
    let words = string.match(/\w+/g);
    let newHashTable = new HashTable(words.length);
    for (let i = 0; i < words.length; i++) {
      let key = words[i].toLowerCase();
      if (newHashTable.contains(key)) {
        if (newHashTable.get(key) === key) return newHashTable.get(key);
      }
      newHashTable.add(key, key);
    }

  } else {
    return 'No repeated words';
  }

}

module.exports = repeatedWord;



