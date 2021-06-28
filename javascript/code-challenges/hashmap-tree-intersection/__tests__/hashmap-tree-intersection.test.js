'use strict';

const Node = require('../../../Data-Structures/tree/node');
const { BinaryTree } = require('../../../Data-Structures/tree/tree');
const treeIntersection = require('../hashmap-tree-intersection');

describe('Tree Intersection Test', () => {
  let tree1,tree2, tree3,tree4;
  beforeAll(()=>{
    const one = new Node(150);
    const two = new Node(100);
    const three = new Node(250);
    const four = new Node(75);
    const five = new Node(160);
    const six = new Node(200);
    const seven = new Node(350);
    const eight = new Node(125);
    const nine = new Node(175);
    const ten = new Node(300);
    const eleven = new Node(500);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    three.left = six;
    three.right = seven;
    five.left = eight;
    five.right = nine;
    seven.left = ten;
    seven.right = eleven;
    tree1 = new BinaryTree(one);

    const a = new Node(42);
    const b = new Node(100);
    const c = new Node(600);
    const d = new Node(15);
    const e = new Node(160);
    const f = new Node(200);
    const g = new Node(350);
    const h = new Node(125);
    const i = new Node(175);
    const j = new Node(4);
    const k = new Node(500);
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    c.right = g;
    e.left = h;
    e.right = i;
    g.left = j;
    g.right = k;
    tree2 = new BinaryTree(a);

    const aa = new Node(1);
    const bb = new Node(2);
    const cc = new Node(3);
    const dd = new Node(4);
    const ee = new Node(5);
    const ff = new Node(6);
    const gg = new Node(7);
    const hh = new Node(8);
    const ii = new Node(9);
    const jj = new Node(10);
    const kk = new Node(11);
    aa.left = bb;
    aa.right = cc;
    bb.left = dd;
    bb.right = ee;
    cc.left = ff;
    cc.right = gg;
    ee.left = hh;
    ee.right = ii;
    gg.left = jj;
    gg.right = kk;
    tree3 = new BinaryTree(aa);

    const xx = new Node(4);
    const yy = new Node(5);
    const zz = new Node(6);
    xx.left = yy;
    xx.right = zz;
    tree4 = new BinaryTree(xx);
  });

  it('Successfully return a set of values found in both trees', () => {
    expect(treeIntersection(tree1, tree2)).toEqual([100,160,125,175,200,350,500]);
  });
  it('Successfully return a set of values found in both trees', () => {
    expect(treeIntersection(tree2, tree3)).toEqual([4]);
  });
  it('Successfully return an exception if the trees values are unique', () => {
    expect(treeIntersection(tree1, tree3)).toEqual('There is no common values inside the two trees');
  });

  it('Successfully return exception',()=>{
    let results = treeIntersection(tree4);

    expect(results).toEqual('Exception');
  });
});
