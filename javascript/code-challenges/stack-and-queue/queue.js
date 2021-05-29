'use strict';
const Node = require('./node.js');

class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value){
    const newNode = new Node(value);
    if (this.length === 0) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
    return this;
  }

  dequeue(){
    if (!this.front) {
      return 'Exception';
    }
    if (this.front === this.rear) {
      this.rear = null;
    }
    this.front = this.front.next;
    this.length--;
    return this;
  }

  peek() {
    if(!this.front) {
      return 'Exception';
    }
    return this.front.value;
  }


  isEmpty() {
    if(this.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}



module.exports= Queue;
