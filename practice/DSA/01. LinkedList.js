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
