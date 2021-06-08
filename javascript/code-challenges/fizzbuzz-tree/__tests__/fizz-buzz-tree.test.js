'use strict';


const Node = require('../node.js');
const {fizzBuzzTree, Tree} = require('../fizz-buzz-tree.js');

describe('Fizz Buzz Testing', () => {
  it('Should successfully instantiate an empty tree', () => {
    const one = new Node(1);
    const two = new Node(10);
    const three = new Node(15);
    const four = new Node(20);
    const five = new Node(9);

    one.children.push(two);
    two.children.push(three, four, five);

    let newTree = new Tree(one);
    let fizzBuzz = fizzBuzzTree(newTree);

    expect(fizzBuzz.root.value).toEqual('1');
    expect(fizzBuzz.root.children[0].value).toEqual('Buzz');
    expect(fizzBuzz.root.children[0].children[0].value).toEqual('FizzBuzz');
    expect(fizzBuzz.root.children[0].children[1].value).toEqual('Buzz');
    expect(fizzBuzz.root.children[0].children[2].value).toEqual('Fizz');
  });
});
