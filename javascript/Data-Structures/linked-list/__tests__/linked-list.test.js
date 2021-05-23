'use strict';
const LinkedList = require('../linked-list');
let list = new LinkedList();

describe('Linked List', () => {
  it('Test instantiating an empty linked list', () => {
    expect(list.head).toEqual(null);
  });
  it('Test adding new node to empty list', () => {
    list.insert(10);
    expect(list.head.value).toBe(10);
    expect(list.head.next).toBeNull();
  });
  it('Test if the first node is the head', () => {
    list.insert(5);
    list.insert(7);
    expect(list.head.value).toEqual(7);
  });
  it('Test inserting multiple nodes into the linked list', () => {
    list.insert(1);
    list.insert(10);
    list.insert(100);
    let length = list.length;
    expect(list.length).toEqual(length);
  });

  it('Test returning true if the value exists in the linked list', () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    let exists = list.includes(4);
    expect(exists).toEqual(true);
  });

  it(`Test returning false if the value doesn't exist in the linked list`, () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    let exists = list.includes(10);
    expect(exists).toBeFalsy;
  });

  it('should find a value anywhere in the linked list', () => {
    list.insert(25);
    expect(list.includes(25)).toBeTruthy();
    expect(list.includes(250)).toBeFalsy();
    expect(list.includes(2500)).toBeFalsy();
  });
  it('Test returning all values in LL as a string', () => {

    list.insert(10);
    list.insert(20);
    list.insert('omar');
    expect(list.toString()).toEqual('{ omar } -> { 20 } -> { 10 } -> { 25 } -> { 4 } -> { 3 } -> { 2 } -> { 1 } -> { 4 } -> { 3 } -> { 2 } -> { 1 } -> { 100 } -> { 10 } -> { 1 } -> { 7 } -> { 5 } -> {10} -> NULL');
  });

  it('Can successfully add a node to the end of the linked list', () => {

    list.insert(10);
    list.insert(20);
    list.insert(30);
    list.append(0);

    expect(list.toString()).toEqual('{ 30 } -> { 20 } -> { 10 } -> { omar } -> { 20 } -> { 10 } -> { 25 } -> { 4 } -> { 3 } -> { 2 } -> { 1 } -> { 4 } -> { 3 } -> { 2 } -> { 1 } -> { 100 } -> { 10 } -> { 1 } -> { 7 } -> { 5 } -> { 10 } -> {0} -> NULL');
  });

  it('Can successfully add multiple nodes to the end of a linked list.', () => {

    list.append(10);
    list.append(20);
    list.append(30);
    list.append(40);

    expect(list.toString()).toEqual('{ 30 } -> { 20 } -> { 10 } -> { omar } -> { 20 } -> { 10 } -> { 25 } -> { 4 } -> { 3 } -> { 2 } -> { 1 } -> { 4 } -> { 3 } -> { 2 } -> { 1 } -> { 100 } -> { 10 } -> { 1 } -> { 7 } -> { 5 } -> { 10 } -> { 0 } -> { 10 } -> { 20 } -> { 30 } -> {40} -> NULL');
  });

  test('Can successfully insert a node before a node located i the middle of a linked list.', () => {
    list.insert('first');
    list.insertBefore('omar', 'name');

    expect(list.toString()).toEqual('{ first } -> { 30 } -> { 20 } -> { 10 } -> { name } -> { omar } -> { 20 } -> { 10 } -> { 25 } -> { 4 } -> { 3 } -> { 2 } -> { 1 } -> { 4 } -> { 3 } -> { 2 } -> { 1 } -> { 100 } -> { 10 } -> { 1 } -> { 7 } -> { 5 } -> { 10 } -> { 0 } -> { 10 } -> { 20 } -> { 30 } -> {40} -> NULL');

  });

  test('Can successfully insert a node before the first node of a linked list.', () => {

    list.insert('firstly');



    expect(list.toString()).toEqual('{ firstly } -> { first } -> { 30 } -> { 20 } -> { 10 } -> { name } -> { omar } -> { 20 } -> { 10 } -> { 25 } -> { 4 } -> { 3 } -> { 2 } -> { 1 } -> { 4 } -> { 3 } -> { 2 } -> { 1 } -> { 100 } -> { 10 } -> { 1 } -> { 7 } -> { 5 } -> { 10 } -> { 0 } -> { 10 } -> { 20 } -> { 30 } -> {40} -> NULL');

  });

  test('Can successfully insert a node after a node located i the middle of a linked list.', () => {

    list.insertAfter('omar', 'ewies');

    expect(list.toString()).toEqual('{ firstly } -> { first } -> { 30 } -> { 20 } -> { 10 } -> { name } -> { omar } -> { ewies } -> { 20 } -> { 10 } -> { 25 } -> { 4 } -> { 3 } -> { 2 } -> { 1 } -> { 4 } -> { 3 } -> { 2 } -> { 1 } -> { 100 } -> { 10 } -> { 1 } -> { 7 } -> { 5 } -> { 10 } -> { 0 } -> { 10 } -> { 20 } -> { 30 } -> {40} -> NULL');

  });

  it('Can successfully insert a node after the last node of the linked list', () => {

    list.append('final');


    expect(list.toString()).toEqual('{ firstly } -> { first } -> { 30 } -> { 20 } -> { 10 } -> { name } -> { omar } -> { ewies } -> { 20 } -> { 10 } -> { 25 } -> { 4 } -> { 3 } -> { 2 } -> { 1 } -> { 4 } -> { 3 } -> { 2 } -> { 1 } -> { 100 } -> { 10 } -> { 1 } -> { 7 } -> { 5 } -> { 10 } -> { 0 } -> { 10 } -> { 20 } -> { 30 } -> { 40 } -> {final} -> NULL');
  });




});



