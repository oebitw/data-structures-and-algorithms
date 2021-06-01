'use strict';

function multiBracketValidation(string) {
  string = string.match(/[()[\]{}]/g);
  let map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  let array = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
      array.push(string[i]);
    } else {
      let last = array.pop();
      if (string[i] !== map[last]) return false;
    }
  }
  if (array.length !== 0) return false;
  return true;
}

module.exports = multiBracketValidation;
