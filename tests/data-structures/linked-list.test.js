/*
  LinkedList
  
  Name your class / constructor (something you can call new on) LinkedList
  
  LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
  the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
  keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
  same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
  consumer of the data structure.
  
  length - integer  - How many elements in the list
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value
                      
  I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
  has two properties, value and next.
  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class LinkedList {
  
  // would probably be better to include tail too
  constructor() {
    this.head = null
    this.length = 0
  }

  push(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let baseNode = this.head;
      while (baseNode.next !== null) {
        baseNode = baseNode.next;
      }

      baseNode.setNext(newNode);
    }

    this.length++;

  }

  pop() {
    let resp;

    if (this.head === null) return undefined;
    if (this.head.next === null) {
      resp = this.head;
      this.length--;
      this.head = null;
      return resp;
    }

    let base = this.head;
    // get next node in linked list
    let nextNode = base.next;
    // while next is not the last node
    while(nextNode.next) {
      base = nextNode;
      nextNode = nextNode.next;
    }

    // sever nextNode from end of list -- no pointer means it is gone
    base.setNext(null);
    resp = nextNode.value;
    this.length--;

    return resp;
  }

  getNode(index) {
    if (index >= this.length) return undefined;

    let resp = this.head;
    let i = 0;
    while (i < index) {
      resp = resp.next;
      i++;
    }

    return resp;
  }

  get(index) {
    
    let resp = this.getNode(index) ? this.getNode(index).value : undefined;
    return resp;

  }
  
  delete(index) {
    if (index >= this.length) return undefined;
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    const prev = this.getNode(index - 1);
    const target = this.getNode(index);
    const next = target.next ? target.next : null;

    prev.setNext(next);
    this.length--;

  }

}

class Node {
  
  constructor(value) {
    this.value = value
    this.next = null
  }

  setNext(next) {
    this.next = next
  }

}

describe("LinkedList", function () {
  const range = (length) =>
    Array.apply(null, { length: length }).map(Number.call, Number);
  const abcRange = (length) =>
    range(length).map((num) => String.fromCharCode(97 + num));
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  it("constructor", () => {
    expect(list).toEqual(expect.any(LinkedList));
  });

  it("push", () => {
    abcRange(26).map((character) => list.push(character));
    expect(list.length).toEqual(26);
  });

  it("pop", () => {
    abcRange(13).map((character) => list.push(character));
    expect(list.length).toEqual(13);
    range(10).map(() => list.pop());
    expect(list.length).toEqual(3);
    expect(list.pop()).toEqual("c");
  });

  it("get", () => {
    list.push("first");
    expect(list.get(0)).toEqual("first");
    list.push("second");
    expect(list.get(1)).toEqual("second");
    expect(list.get(0)).toEqual("first");
    abcRange(26).map((character) => list.push(character));
    expect(list.get(27)).toEqual("z");
    expect(list.get(0)).toEqual("first");
    expect(list.get(9)).toEqual("h");
    list.pop();
    expect(list.get(list.length - 1)).toEqual("y");
  });

  it("delete", () => {
    abcRange(26).map((character) => list.push(character));
    list.delete(13);
    expect(list.length).toEqual(25);
    expect(list.get(12)).toEqual("m");
    expect(list.get(13)).toEqual("o");
    list.delete(0);
    expect(list.length).toEqual(24);
    expect(list.get(0)).toEqual("b");
  });
});