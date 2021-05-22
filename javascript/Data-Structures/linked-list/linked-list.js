'use strict';

const Node = require('./node');


class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {

    try {

      if(!value){
        throw new Error('Please enter a value');
      }
      let newNode = this.head;
      this.head = new Node(value, newNode);
      this.length++;
    }
    catch (error) {
      console.log('Error: insert method', error);
    }
  }

  includes(value) {
    try {

      if(!value){
        throw new Error('Please enter a value')
      }

      let current = this.head;

      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
      return false;
    } catch (error) {
      console.log('Error: includes method', error);
    }
  }

  toString() {
    try {
      let linkedList = '';
      let current = this.head;
      while (current) {
        if (current.next === null) {
          linkedList += `{${current.value}} -> NULL`;
        } else {
          linkedList += `{ ${current.value} } -> `;
        }
        current = current.next;
      }
      return linkedList;
    } catch (error) {
      console.log(`Error: toString method`, error);
    }
  }
}



module.exports = LinkedList;
