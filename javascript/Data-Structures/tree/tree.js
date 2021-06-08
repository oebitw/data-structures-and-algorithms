'use strict';
const Node = require('./node.js');

class Node2 {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    var newNode = new Node2(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (this.isEmpty()) return 'Empty!';
    let temp = this.front;
    this.front = temp.next;
    temp.next = null;
    return temp.value;
  }

  isEmpty() {
    return this.front === null;
  }
}




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

  breadth() {
    let output = [];

    let queue = new Queue();

    if (this.root){
      queue.enqueue(this.root);
    }else{
      return 'The Tree is Empty';
    }

    while (!queue.isEmpty()) {
      let front = queue.dequeue();
      output.push(front.value);
      if(front.left){
        queue.enqueue(front.left);
      }
      if(front.right){
        queue.enqueue(front.right);
      }
    }

    return output;
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


  findMaximumValue() {
    if (!this.root){
      return 'Tree is Empty';
    }

    let maximumValue = 0;

    let getMax = (node) => {
      if (node.value > maximumValue) {
        maximumValue = node.value;
      }
      if (node.left) {
        getMax(node.left);
      }
      if (node.right) {
        getMax(node.right);
      }
    };
    getMax(this.root);
    return maximumValue;
  }
}

module.exports = {
  BinaryTree,
  BinarySearchTree
};


