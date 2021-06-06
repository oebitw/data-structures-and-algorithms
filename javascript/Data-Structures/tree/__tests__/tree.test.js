'use strict';

const Node = require('../node.js');
const {BinaryTree, BinarySearchTree} = require('../tree.js');

describe('Node Testing', () => {
  it('Test creating an instance of Node', () => {
    const node = new Node();
    expect(node instanceof Node).toBeTruthy();
  });

  it(`Test creating an instance of Node with it's properties`, () => {
    const value = 'omar';
    const node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.right).toBeNull();
    expect(node.left).toBeNull();
  });
});


describe('Binary Tree', () => {
  let tree;

  beforeAll(() => {
    let one = new Node(1);// tree root
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;//
    one.right = three;//
    two.left = six;//
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;
    tree = new BinaryTree(one);
  });

  it('Can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node.', () => {
    const node = new Node('OEBITW');
    const tree = new BinaryTree(node);
    expect(tree.root.value).toBe('OEBITW');
  });

  it('Can successfully add a left child and right child to a single root node.', () => {
    const rootNode = new Node(10);
    const leftNode = new Node(20);
    const rightNode = new Node(30);
    rootNode.left = leftNode;
    rootNode.right = rightNode;
    const tree = new BinaryTree(rootNode);
    expect(tree.root.left.value).toBe(20);
    expect(tree.root.right.value).toBe(30);
  });

  it('Can successfully return a collection from a preorder traversal.', () => {
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrderResult = tree.preOrder();
    expect(preOrderResult).toEqual(expected);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrderResult = tree.inOrder();
    expect(inOrderResult).toEqual(expected);
  });

  it('Can successfully return a collection from a postorder traversal. ', () => {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrderResult = tree.postOrder();
    expect(postOrderResult).toEqual(expected);
  });

});

describe('Binary Search Tree', () => {

  it('Can successfully instantiate an empty tree', () => {
    const tree = new BinarySearchTree();
    expect(tree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node.', () => {
    const node = new Node('OEBITW');
    const tree = new BinarySearchTree(node);
    expect(tree.root.value).toBe('OEBITW');
  });

  it('Can successfully add a left child and right child to a single root node.', () => {
    const rootNode = new Node(10);
    const leftNode = new Node(20);
    const rightNode = new Node(30);
    rootNode.left = leftNode;
    rootNode.right = rightNode;
    const tree = new BinarySearchTree(rootNode);
    expect(tree.root.left.value).toBe(20);
    expect(tree.root.right.value).toBe(30);
  });

  it('Can successfully add a new node in the correct location in the binary search tree', () => {
    let tree = new BinarySearchTree();
    tree.add(5);
    tree.add(10);
    expect(tree.root.right.value).toEqual(10);

  });
  it('Can successfully search for a value in the tree', () => {
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(2);
    expect(tree.contains(1)).toBeTruthy();
    expect(tree.contains(2)).toBeTruthy();
    expect(tree.contains(3)).toBeFalsy();
  });
  it('Can successfully returns an exception if the tree is tree', () => {
    const newTree = new BinarySearchTree();
    expect(newTree.contains(1)).toBe('Empty Tree');
  });

  it('Can successfully return exception when the user search for maximum value in empty tree', ()=>{
    const newTree = new BinarySearchTree();
    expect(newTree.findMaximumValue()).toBe('Tree is Empty');
  });

  it('Can successfully Return the maximum value in the tree', () => {
    let tree = new BinarySearchTree();
    tree.add(5);
    tree.add(10);
    tree.add(100);
    tree.add(1000);
    expect(tree.findMaximumValue()).toEqual(1000);

  });


});


describe('Get Maximum Value', ()=>{

});

