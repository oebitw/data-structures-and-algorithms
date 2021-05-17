'use strict';
const newArray = require('../app.js');

describe('Returned the shifted array', () => {
  test('It should return an array with the added value ', () => {
    expect(newArray([1, 2, 4, 5], 3)).toStrictEqual([1, 2, 3, 4, 5]);
    expect(newArray([100, 150, 200], 175)).toStrictEqual([100, 150, 175, 200]);
  });
});
