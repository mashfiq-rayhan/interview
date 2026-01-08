class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // if (this.length === 0) return undefined;
    // let temp = this.tail;
    // this.tail = this.tail.prev;
    // this.tail.next = null;
    // temp.prev = null;
    // this.length--;
    // if (this.length === 0) {
    //   this.head = null;
    //   this.tail = null;
    // }
    // return temp;

    if (this.length === 0) return undefined;
    const temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    const newNode = new Node(value);
    const before = this.get(index - 1);
    const after = before.next;
    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const temp = this.get(index);
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }

  logAll() {
    let cursor = this.head;
    while (cursor) {
      console.log(cursor);
      cursor = cursor.next;
    }
  }

  isPalindrome() {
    if (this.length <= 1) return true;

    let forwardNode = this.head;
    let backwardNode = this.tail;
    for (let i = 0; i < Math.floor(this.length / 2); i++) {
      if (forwardNode.value !== backwardNode.value) return false;
      forwardNode = forwardNode.next;
      backwardNode = backwardNode.prev;
    }
    return true;
  }

  reverse() {
    let current = this.head;
    let temp = null;

    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  partitionList(x) {
    if (!this.head) return;

    const dummy1 = new Node(0);
    const dummy2 = new Node(0);
    let prev1 = dummy1;
    let prev2 = dummy2;
    let current = this.head;

    while (current !== null) {
      const nextNode = current.next; // Store next
      current.next = null; // Disconnect current
      current.prev = null;

      if (current.value < x) {
        prev1.next = current;
        current.prev = prev1;
        prev1 = current;
      } else {
        prev2.next = current;
        current.prev = prev2;
        prev2 = current;
      }

      current = nextNode;
    }

    prev2.next = null;
    prev1.next = dummy2.next;

    if (dummy2.next) {
      dummy2.next.prev = prev1;
    }

    this.head = dummy1.next;
    if (this.head) {
      this.head.prev = null;
    }
  }

  reverseBetween(startIndex, endIndex) {
    if (!this.head || startIndex === endIndex) {
      return;
    }

    const dummy = new Node(0); // ✅ real Node
    dummy.next = this.head;
    this.head.prev = dummy;

    let prev = dummy;
    for (let i = 0; i < startIndex; i++) {
      prev = prev.next;
    }

    let current = prev.next;

    for (let i = 0; i < endIndex - startIndex; i++) {
      let nodeToMove = current.next;

      current.next = nodeToMove.next;
      if (nodeToMove.next) {
        nodeToMove.next.prev = current;
      }

      nodeToMove.next = prev.next;
      prev.next.prev = nodeToMove;

      prev.next = nodeToMove;
      nodeToMove.prev = prev;
    }

    this.head = dummy.next;
    this.head.prev = null;
  }

  swapPairs() {
    const dummy = new Node(0);
    dummy.next = this.head;
    let prev = dummy;

    while (this.head !== null && this.head.next !== null) {
      const firstNode = this.head;
      const secondNode = this.head.next;

      prev.next = secondNode;
      firstNode.next = secondNode.next;
      secondNode.next = firstNode;

      secondNode.prev = prev;
      firstNode.prev = secondNode;
      if (firstNode.next !== null) {
        firstNode.next.prev = firstNode;
      }

      this.head = firstNode.next;
      prev = firstNode;
    }

    this.head = dummy.next;
    if (this.head) this.head.prev = null;
  }
}

let myDoublyLinkedList = new DoublyLinkedList(7);
console.log(myDoublyLinkedList);

const push4 = myDoublyLinkedList.push(4);
console.log(push4);

const push5 = myDoublyLinkedList.push(5);
console.log(push5);
// console.log(myDoublyLinkedList);

const pop2 = myDoublyLinkedList.pop();
console.log(pop2);
console.log(myDoublyLinkedList);

const pop4 = myDoublyLinkedList.pop();
console.log(pop4);
console.log(myDoublyLinkedList);

const pop7 = myDoublyLinkedList.pop();
console.log(pop7);
console.log(myDoublyLinkedList);

const unshft3 = myDoublyLinkedList.unshift(3);
console.log(unshft3);

const unshft2 = myDoublyLinkedList.unshift(2);
console.log(unshft2);

const unshft1 = myDoublyLinkedList.unshift(1);
console.log(unshft1);

const shft1 = myDoublyLinkedList.shift();
console.log(shft1);

const shft2 = myDoublyLinkedList.shift();
console.log(shft2);

const shft3 = myDoublyLinkedList.shift();
console.log(shft3);

const push0 = myDoublyLinkedList.push(0);
const push1 = myDoublyLinkedList.push(1);
const push2 = myDoublyLinkedList.push(2);
const push3 = myDoublyLinkedList.push(3);

const get2 = myDoublyLinkedList.get(2);
console.log(get2);

const set2 = myDoublyLinkedList.set(2, 22);
console.log(set2);
console.log(myDoublyLinkedList);

const insert2 = myDoublyLinkedList.insert(2, 99);
console.log("----------", insert2);

const remove2 = myDoublyLinkedList.remove(2);
console.log(remove2);

console.log("----------Logging All----------");
myDoublyLinkedList.logAll();
