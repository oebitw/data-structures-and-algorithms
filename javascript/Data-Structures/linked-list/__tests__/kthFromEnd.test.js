'use strict';

const LinkedList = require('../linked-list.js');

test('Return Exception if k is negative', () => {
  let ll = new LinkedList().append(5).append(10);
  expect(ll.kthFromEnd(-2)).toEqual('Exception');
});

test('Return Exception if k is not an integer', () => {
  let ll = new LinkedList().append(5).append(10);
  expect(ll.kthFromEnd('omar')).toEqual('Exception');
});

test('Return Exception when k is greater than the length of the linked list', () => {
  let list = new LinkedList();
  expect(list.kthFromEnd(5)).toEqual('Exception');
});


// it('Should return null if k equals to the length of the list since the indexing starts from 0', () => {
//   let list = new LinkedList().append(2).append(10).append(8).append(3).append(5);
//   expect(list.kthFromEnd(5)).toEqual(null);
// });


it('Return a value when the linked list is of a size 1', () => {
  let list = new LinkedList();
  list.append(10);
  expect(list.kthFromEnd(0)).toEqual(10);
  expect(list.kthFromEnd(1)).toEqual('Exception');
});


test('find kth value in a linked list', () => {
  let list = new LinkedList().append(2).append(4).append(6).append(8);
  expect(list.kthFromEnd(0)).toEqual(8);
  expect(list.kthFromEnd(1)).toEqual(6);
  expect(list.kthFromEnd(2)).toEqual(4);
  expect(list.kthFromEnd(3)).toEqual(2);
});


test('Return a value when k is not at the end, but somewhere in the middle of the linked list', () => {
  let list = new LinkedList().append(2).append(10).append(8).append(3).append(5);
  expect(list.kthFromEnd(2)).toEqual(8);
});
