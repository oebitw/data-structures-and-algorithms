'use strict';
let LinkedList = require('../../../Data-Structures/linked-list/linked-list.js');
let zipLists = require('../ll-zip.js');

describe('Test zipLists function', () => {

  it('Test Returning (Error: Both lists are Empty) when the user pass empty linked lists', () => {
    let ll1 = new LinkedList();
    let ll2 = new LinkedList();
    expect(zipLists(ll1, ll2)).toEqual('Error: Both lists are Empty');
  });

  it('Test returning first LL when the second LL is empty', () => {
    let ll1 = new LinkedList().append(100).append(150).append(200);
    let ll2 = new LinkedList();
    expect(ll1.toString()).toEqual('{ 100 } -> { 150 } -> {200} -> NULL');
  });

  it('Test returning second LL when the first LL is empty', () => {
    let ll1 = new LinkedList();
    let ll2 = new LinkedList().append(1).append(2).append(3);
    expect(ll2.toString()).toEqual('{ 1 } -> { 2 } -> {3} -> NULL');
  });

  it('Test zipping two lists', () => {
    let ll1 = new LinkedList().append(1).append(3).append(5);
    let ll2 = new LinkedList().append(2).append(4).append(6);
    zipLists(ll1, ll2);
    expect(ll1.toString()).toEqual(
      '{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> {6} -> NULL'
    );
  });

  it('Testing if the user entered linked lists with different lengths', () => {
    let ll1 = new LinkedList().append(1).append(3);
    let ll2 = new LinkedList().append(2).append(4).append(5).append(6);
    zipLists(ll1, ll2);
    expect(ll1.toString()).toEqual(
      '{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> {6} -> NULL'
    );
  });

});
