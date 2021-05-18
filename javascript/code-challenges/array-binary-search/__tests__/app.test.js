'use strict';

const newArray = require('../app.js');

describe('Testing challenge 2', () => {
  it('Test if the function returns the index of the key', () => {
    expect(newArray([1,2,3,4], 4)).toEqual(3);
    expect(newArray([1], 1)).toEqual(0);
  });
  it(`Test if the function will return -1 when the key doesn't exists`, () => {
    expect(newArray([1,2,3,4], 5)).toEqual(-1);
    expect(newArray([10,20,30,40], 100)).toEqual(-1);
  });
  it('Test if the function will return -1 when the array is empty', () => {
    expect(newArray([],5)).toEqual(-1);
  });
});
