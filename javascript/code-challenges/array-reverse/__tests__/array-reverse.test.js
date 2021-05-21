'use strict';

let reverseArray = require('../array-reverse.js');

describe ('Test Reverse Array Function', ()=>{
  it('Test Returning reversed array',()=>{
    expect(reverseArray([1,2,3,4])).toEqual([4,3,2,1]);
  });
  it('Test if the user entered an empty array', ()=>{
    expect(reverseArray([])).toEqual('Please enter an array');
  });
  it('Test if the user entered a string',()=>{
    expect(reverseArray('')).toEqual('Please enter an array');
  });
  it('Test if the user entered an integer',()=>{
    expect(reverseArray(5)).toEqual('Please enter an array');
  });
});
