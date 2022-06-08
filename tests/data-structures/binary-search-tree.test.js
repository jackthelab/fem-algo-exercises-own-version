/*
Binary Search Tree!
Name your class Tree. 
I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects
Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.
value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree
*/

class Tree {
  
  constructor() {
    this.root = null
    this.left = null
    this.right = null
  }

  add(value) {
    const newNode = {
      value: value,
      left: null,
      right: null
    };

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let base = this.root;
    // if value <= base.value -> make base = base.left
    // if value > base.value -> make base = base.right
    // repeat this until base.left || base.right that is needed is null

    while (base.value) {
      if (value <= base.value) {
        if (!base.left) {
          base.left = newNode;
          break;
        } else {
          base = base.left;
        }
      } else {
        if (!base.right) {
          base.right = newNode;
          break;
        } else {
          base = base.right;
        }
      }
    }

  }
}

// you might consider using a Node class too
// class Node {
//   // code maybe goes here
// }

describe("Binary Search Tree", function () {
  it("creates a correct tree", () => {
    const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
    const tree = new Tree();
    nums.map((num) => tree.add(num));
    // const objs = tree.toObject();
    // ^ getting TypeError that tree.toObject is not a function
    // only talks about this in video -- Tree.prototype.toObject should return root...
    // below is solution instead of adding method on class
    const objs = tree.root;
    // render(objs, nums);

    expect(objs.value).toEqual(3);

    expect(objs.left.value).toEqual(1);
    expect(objs.left.left).toBeNull();

    expect(objs.left.right.value).toEqual(2);
    expect(objs.left.right.left).toBeNull();
    expect(objs.left.right.right).toBeNull();

    expect(objs.right.value).toEqual(7);

    expect(objs.right.left.value).toEqual(4);
    expect(objs.right.left.left).toBeNull();

    expect(objs.right.left.right.value).toEqual(6);
    expect(objs.right.left.right.left.value).toEqual(5);
    expect(objs.right.left.right.left.right).toBeNull();
    expect(objs.right.left.right.left.left).toBeNull();

    expect(objs.right.right.value).toEqual(10);
    expect(objs.right.right.right).toBeNull();

    expect(objs.right.right.left.value).toEqual(9);
    expect(objs.right.right.left.right).toBeNull();

    expect(objs.right.right.left.left.value).toEqual(8);
    expect(objs.right.right.left.left.right).toBeNull();
    expect(objs.right.right.left.left.left).toBeNull();
  });
});