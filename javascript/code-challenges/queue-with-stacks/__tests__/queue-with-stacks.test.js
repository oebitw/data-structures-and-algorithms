'use strict';

// Require our PseudoQueue implementation
const PseudoQueue = require('../queue-with-stacks.js');

describe('Queue Test', () => {
  it('Test instantiating an empty queue with stacks', () => {
    let queue = new PseudoQueue();
    expect(queue.firstStack.top).toBeNull();
    expect(queue.secondStack.top).toBeNull();
  });

  it('Test enqueue into a queue', () => {
    let queue = new PseudoQueue();
    queue.enqueue(10);
    expect(queue.dequeue()).toEqual(10);
  });

  it('Test enqueue multiple values into a queue', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);

  });

  it('Return Exception when dequeue empty queue', () => {
    let queue = new PseudoQueue();
    queue.dequeue();
    expect(queue.dequeue()).toBe('Exception');
    expect(queue.firstStack.isEmpty()).toBeTruthy();
  });

});
