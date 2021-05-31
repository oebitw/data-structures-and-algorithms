'use strict';


const Queue = require('../stack-and-queue/queue.js');

class AnimalShelter {
  constructor() {
    this.animals = new Queue();
    this.cat = new Queue();
    this.dog = new Queue();
  }

  enqueue(animal) {
    if (animal !== 'cat' && animal !== 'dog') {
      return 'You Can only add cat or dog to this shelter';
    }

    if (animal === 'cat') {
      this.cat.enqueue(animal);

    } else if (animal === 'dog') {
      this.dog.enqueue(animal);
    }

    this.animals.enqueue(animal);
  }

  dequeue(pref) {
    if (pref) {
      if (pref === 'cat') {
        if (this.animals.peek() === 'cat') this.animals.dequeue();
        return this.cat.dequeue();
      } else if (pref === 'dog') {
        if (this.animals.peek() === 'dog') this.animals.dequeue();
        return this.dog.dequeue();
      } else return null;
    } else {
      if (this.animals.peek() === 'cat') this.cat.dequeue();
      else if (this.animals.peek() === 'dog') this.dog.dequeue();
      return this.animals.dequeue();
    }
  }

}



module.exports = AnimalShelter;
