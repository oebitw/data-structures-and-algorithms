'use strict';


const Node = require('./node.js');

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value){
    let newNode = new Node(value);
    if(this.length === 0) {
      this.top = newNode;
      this.rear = newNode;
    } else {
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    this.length++;
    return this;
  }

  pop(){
    if(!this.top) {
      return 'Exception';
    }
    if(this.top === this.rear) {
      this.rear = null;
    }
    const temp = this.top;
    this.top = this.top.next;
    this.length--;
    return temp.value;
  }

  peek() {
    if(!this.top) {
      return 'Exception';
    }
    return this.top;
  }


  isEmpty() {
    if(this.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;

