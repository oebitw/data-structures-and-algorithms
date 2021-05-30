'use strict';

const Stack  = require('../stack-and-queue/stack.js');

class PseudoQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  enqueue(value) {

    if (!this.front) {
      this.firstStack.push(value);
      this.front = this.firstStack.top;
    } else {
      this.firstStack.push(value);

    }
  }

  dequeue() {
    if (this.firstStack.isEmpty() && this.secondStack.isEmpty()){
      return 'Exception';
    }else{
      while (!this.firstStack.isEmpty()) {
        this.secondStack.push(this.firstStack.pop());
      }

      let poppedValue = this.secondStack.pop();
      this.front = this.secondStack.top;
      while (this.secondStack.top) {
        this.firstStack.push(this.secondStack.pop());
      }
      return poppedValue;
    }
  }
}

module.exports = PseudoQueue;
