'use strict';

const newArray = require('../array-binary-search');

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
  it('Test if the function will return (Please enter an array) if the user entered an integer instead of array', () => {
    expect(newArray(4,5)).toEqual('Please enter an array');
  });
  it('Test if the function will return (Please enter an array) if the user entered a string instead of array', () => {
    expect(newArray('omar',5)).toEqual('Please enter an array');
  });
  it('Test if the function will return (Please enter the key as integer) if the user entered a string instead of key value (Integer)', () => {
    expect(newArray([],'omar')).toEqual('Please enter the key as integer');
  });
});
