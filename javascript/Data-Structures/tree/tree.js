'use strict';
const Node = require('./node.js');


class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  // root - left - right
  preOrder() {
    let result = [];

    let traverse = (node) => {
      result.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // left - root - right
  inOrder() {
    let result = [];

    let traverse = (node) => {
      if(node.left) traverse(node.left);
      result.push(node.value);
      if(node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // left - right - root
  postOrder() {
    let result = [];

    let traverse = (node) => {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    }
    const traverse = (node) => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        }
        traverse(node.left);
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = newNode;
        }
        traverse(node.right);
      }
    };
    traverse(this.root);
  }

  contains(value) {
    if (this.root === null) return 'Empty Tree';

    let current = this.root;
    while (current) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else return true;
    }
    return false;
  }
}

module.exports = {
  BinaryTree,
  BinarySearchTree
};
