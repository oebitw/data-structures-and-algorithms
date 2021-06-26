'use strict';

const HashTable = require('../hashtable');
let hashTable = new HashTable(50);

describe('Hash Table Testing', () => {

  it('Successfully hash a key to an in-range value', () => {
    let hashTable = new HashTable(50);
    expect(hashTable.table.length).toEqual(50);
  });

  it('Successfully hash a key', () => {
    let key = 'xxx';
    expect(hashTable.hash(key)).toBeLessThanOrEqual(50);
  });

  it('Successfully add to the hashed table', () => {
    let key = 'xxx';
    hashTable.add(key, 777);
    expect(hashTable.table[hashTable.hash(key)]).toBeDefined();
  });

  it('Successfully handle a collision within the hashtable', () => {
    const key1 = 'firstName';
    const key2 = 'secondName';
    const val1 = 'omar';
    const val2 = 'ewies';
    hashTable.add('firstName', val1);
    hashTable.add('secondName', val2);
    expect(hashTable.contains(key1)).toBeTruthy();
    expect(hashTable.contains(key2)).toBeTruthy();
    expect(hashTable.get(key1)).toEqual(val1);
    expect(hashTable.get(key2)).toEqual(val2);
  });

  it('Successfully find if the value exists in the table by it is key', () => {
    let key = 'firstName';
    hashTable.add(key, 777);
    expect(hashTable.contains(key)).toBeTruthy();
    expect(hashTable.contains('U District')).toBeFalsy();
  });

  it('Successfully get the value of a key if it exists in the table', () => {
    let key = 'xxx';
    let value = 777;
    hashTable.get(key);
    expect(hashTable.get(key)).toEqual(value);
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(hashTable.get('U District')).toBeNull();
  });
});
