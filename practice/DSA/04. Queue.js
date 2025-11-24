class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) return undefined;
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

const myQueue = new Queue(11);
console.log(myQueue);

const enqueue3 = myQueue.enqueue(3);
console.log(enqueue3);

const enqueue23 = myQueue.enqueue(23);
console.log(enqueue23);

const enqueue7 = myQueue.enqueue(7);
console.log(enqueue7);

const dequeue11 = myQueue.dequeue();
console.log(dequeue11);

console.log(myQueue);