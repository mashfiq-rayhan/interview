class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
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
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const before = this.get(index - 1);
    const temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp ? temp.next : null;
    let prev = null;
    while (temp) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }

  logAll() {
    let cursor = this.head;
    while (cursor) {
      console.log(cursor);
      cursor = cursor.next;
    }
  }

  findMiddleNode() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  hasLoop() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }

  findKthFromEnd(k) {
    let slow = this.head;
    let fast = this.head;
    for (let i = 0; i < k; i++) {
      if (fast === null) {
        return null;
      }
      fast = fast.next;
    }

    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }

  removeDuplicates() {
    const values = new Set();
    let current = this.head;
    let previous = null;
    while (current !== null) {
      if (values.has(current.value)) {
        previous.next = current.next;
        this.length--;
      } else {
        values.add(current.value);
        previous = current;
      }
      current = current.next;
    }
  }

  binaryToDecimal() {
    let num = 0;
    let current = this.head;
    while (current !== null) {
      num = num * 2 + current.value;
      current = current.next;
    }
    return num;
  }

  partitionList(x) {
    if (this.head === null) return;

    const dummy1 = new Node(0);
    const dummy2 = new Node(0);
    let prev1 = dummy1;
    let prev2 = dummy2;
    let current = this.head;
    while (current !== null) {
      if (current.value < x) {
        prev1.next = current;
        prev1 = current;
      } else {
        prev2.next = current;
        prev2 = current;
      }
      current = current.next;
    }
    prev2.next = null;
    prev1.next = dummy2.next;
    this.head = dummy1.next;
  }

  reverseBetween(m, n) {
    if (this.head === null) return;
    const dummy = new Node(0);
    dummy.next = this.head;
    let prev = dummy;
    for (let i = 0; i < m; i++) {
      prev = prev.next;
    }
    let current = prev.next;
    for (let i = 0; i < n - m; i++) {
      const temp = current.next;
      current.next = temp.next;
      temp.next = prev.next;
      prev.next = temp;
    }
    this.head = dummy.next;
  }

  swapPairs() {
    const dummy = new Node(0);
    dummy.next = this.head;

    let previous = dummy;
    let first = this.head;

    while (first !== null && first.next !== null) {
      const second = first.next;

      previous.next = second;
      first.next = second.next;
      second.next = first;

      previous = first;
      first = first.next;
    }

    this.head = dummy.next;
  }
}

const lnkdlst = new LinkedList(7);
console.log(lnkdlst);

const push1 = lnkdlst.push(1);
console.log(push1);

const pop1 = lnkdlst.pop();
console.log(pop1);

const unshift1 = lnkdlst.unshift(1);
console.log(unshift1);

const shift1 = lnkdlst.shift();
console.log(shift1);

const push8 = lnkdlst.push(8);
console.log(push8);

const unshift6 = lnkdlst.unshift(6);
console.log(unshift6);

console.log(lnkdlst);

const get0 = lnkdlst.get(0);
console.log(get0);

const get1 = lnkdlst.get(1);
console.log(get1);

const get2 = lnkdlst.get(2);
console.log(get2);

const set2 = lnkdlst.set(2, 10);
console.log(set2);

const getAgain2 = lnkdlst.get(2);
console.log(getAgain2);

const insert8 = lnkdlst.insert(2, 8);
console.log(lnkdlst.get(2));

const insert9 = lnkdlst.insert(3, 9);
console.log(lnkdlst.get(3));

const rmv10 = lnkdlst.remove(lnkdlst.length - 1);
console.log(rmv10);

const rvrs = lnkdlst.reverse();
console.log(rvrs);

console.log("--------");
lnkdlst.logAll();
