'use strict';

const Node = require('./node.js');

class Tree {
  constructor(val) {
    if (val) {
      this.root = val;
    } else {
      this.root = null;
    }
  }
}

const fizzBuzzTree = (tree) => {
  if(!tree.root){
    return 'Empty Tree!';
  }

  let t = new Tree();

  let fizzBuzz = (node) => {

    let newNode = new Node(null);

    if (node.value % 3 === 0 && node.value % 5 === 0) {
      newNode.value = 'FizzBuzz';
    } else if (node.value % 3 === 0) {
      newNode.value = 'Fizz';
    } else if (node.value % 5 === 0) {
      newNode.value = 'Buzz';
    } else {
      newNode.value = node.value.toString();
    }

    for (let i = 0; i < node.children.length; i++) {
      newNode.children.push(fizzBuzz(node.children[i]));
    }
    return newNode;
  };
  t.root = fizzBuzz(tree.root);
  return t;
};



module.exports = {fizzBuzzTree, Tree};
