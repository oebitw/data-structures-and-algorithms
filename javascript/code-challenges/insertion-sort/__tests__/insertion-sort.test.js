'use strict';


const insertionSort = require('../insertion-sort.js');

describe('Insertion Sort TESTING', () => {
  it('Successfully sort an array', () => {
    expect(insertionSort([46,10,5,100,80,500])).toStrictEqual([5,10,46,80,100,500]);
  });
  it('Successfully sort an array with a few uniques', () => {
    expect(insertionSort([9,9,7,9,20,7])).toStrictEqual([7,7,9,9,9,20]);
  });

  it('Successfully sort a nearly sorted array', () => {
    expect(insertionSort([1,2,3,4,5,6])).toStrictEqual([1,2,3,4,5,6]);
  });

  it('Successfully sort reverse-sorted array', () => {
    expect(insertionSort([20,10,15,5,0,-5])).toStrictEqual([-5,0,5,10,15,20]);
  });
});
