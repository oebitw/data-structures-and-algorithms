'use strict';

const HashTable = require('../../../Data-Structures/hashtable/hashtable');
const leftJoin = require('../hashmap-left-join');



const hashTable1 = new HashTable();
const hashTable2 = new HashTable();
hashTable1.add('firstName', 'omar');
hashTable1.add('secondName', 'Ewies');
hashTable2.add('secondName', 'ghazi');
hashTable2.add('thirdName', 'Ewies');

test('Happy path', () => {
  const hashTable1 = new HashTable();
  const hashTable2 = new HashTable();


  hashTable1.add('firstName', 'omar');
  hashTable1.add('secondName', 'ewies');


  hashTable2.add('secondName', 'ghazi');
  hashTable2.add('thirdName', 'ewies');

  expect(leftJoin(hashTable1, hashTable2)).toEqual([
    ['firstName', 'omar', null],
    ['secondName', 'ewies', 'ghazi'],
  ]);
});



test('Exception', () => {
  const hashTable1 = new HashTable();
  const hashTable2 = new HashTable();
  hashTable2.add('secondName', 'xxx');
  hashTable2.add('thirdName', 'yyy');

  expect(leftJoin(hashTable1, hashTable2)).toEqual(
    null
  );
});
