'use strict';

const Node = require('../node.js');
const Stack = require('../stack.js');
const Queue = require('../queue.js');



describe('Stack Testing', ()=>{

  it('Can successfully push onto a stack.',() =>{
    let stack = new Stack().push(10);
    expect(stack.top.value).toEqual(10);
  });

  it('Can successfully push multiple values onto a stack',() =>{
    let stack = new Stack().push(10).push(15).push(20);
    expect(stack.length).toEqual(3);
  });


  it('Can successfully pop off the stack',()=>{
    let stack = new Stack().push(1).push(10);
    stack.pop();
    expect(stack.pop()).toEqual(1);
  });


  it('Can successfully empty a stack after multiple pops',()=>{
    let stack = new Stack().push(10).push(20);
    stack.pop();
    stack.pop();
    expect(stack.length).toEqual(0);
  });


  it('Can successfully peek the next item on the stack',()=>{
    let stack = new Stack().push(100).push(200);
    stack.peek();
    expect(stack.top.next.value).toEqual(100);
  });


  it('Can successfully instantiate an empty stack',()=>{
    let stack = new Stack();
    expect(stack.length).toEqual(0);
  });


  it('Calling pop or peek on empty stack raises exception',()=>{
    let stack = new Stack();

    expect(stack.pop()&&stack.peek()).toEqual('Exception');
  });

});


describe('Queue Testing', ()=>{

  it('Can successfully enqueue into a queue',() =>{
    let queue = new Queue().enqueue(100);

    expect(queue.front.value).toEqual(100);
  });

  it('Can successfully enqueue multiple values into a queue',() =>{
    let queue = new Queue().enqueue(1).enqueue(2);
    expect(queue.length).toEqual(2);
  });

  it('Can successfully dequeue out of a queue the expected value',() =>{
    let queue = new Queue().enqueue(10).enqueue(20);
    queue.dequeue();
    expect(queue.front.value).toEqual(20);
  });

  it('Can successfully peek into a queue, seeing the expected value',() =>{
    let queue = new Queue().enqueue(1).enqueue(2);
    queue.peek();
    expect(queue.peek()).toEqual(1);
  });

  it('Can successfully empty a queue after multiple dequeues',() =>{
    let queue = new Queue().enqueue(1).enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.length).toEqual(0);
  });

  it('Can successfully instantiate an empty queue',() =>{
    let queue = new Queue();
    expect(queue.length).toEqual(0);
  });

  it('Calling dequeue or peek on empty queue raises exception',() =>{
    let queue = new Queue();
    expect(queue.peek()&&queue.dequeue()).toEqual('Exception');
  });



});


