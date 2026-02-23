//////////////////////////////////////////
/// LINKED LIST
//////////////////////////////////////////

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
    const temp = this.get(index);
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
}

//////////////////////////////////////////
/// DOUBLY LINKED LIST
//////////////////////////////////////////

class DNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new DNode(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new DNode(value);
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
    if (this.length === 0) return undefined;
    let temp = this.tail;
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
    const newNode = new DNode(value);
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
    const temp = this.head;
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
    const temp = this.get(index);
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
    const newNode = new DNode(value);
    const before = this.get(index - 1);
    const after = before.next;
    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;
    this.length++;
    return this;
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
}

//////////////////////////////////////////
/// STACK
//////////////////////////////////////////

class SNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new SNode(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new SNode(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

//////////////////////////////////////////
/// QUEUE
//////////////////////////////////////////

class QNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new QNode(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new QNode(value);
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
    const temp = this.first;
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

//////////////////////////////////////////
/// TREE
//////////////////////////////////////////

class Leaf {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newLeaf = new Leaf(value);
    if (this.root === null) {
      this.root = newLeaf;
      return this;
    }
    let temp = this.root;
    while (temp) {
      if (newLeaf.value === temp.value) return undefined;
      if (newLeaf.value < temp.value) {
        if (temp.left === null) {
          temp.left = newLeaf;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newLeaf;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

//////////////////////////////////////////
/// HASH TABLES
//////////////////////////////////////////
class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  #hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this.#hash(key);
    if (!this.dataMap[index]) this.dataMap[index] = [];
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this.#hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) return this.dataMap[index][i][1];
      }
    }
    return undefined;
  }

  keys() {
    let allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}

//////////////////////////////////////////
/// GRAPH
//////////////////////////////////////////
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    while (this.adjacencyList[vertex].length) {
      let temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, temp);
    }
    delete this.adjacencyList[vertex];
    return this;
  }
}

//////////////////////////////////////////
/// HEAPS
//////////////////////////////////////////

class Heap {
  #heap = [];

  getHeap() {
    return [...this.#heap];
  }

  #leftChild(index) {
    return 2 * index + 1;
  }

  #rightChild(index) {
    return 2 * index + 2;
  }

  #parent(index) {
    return Math.floor((index - 1) / 2);
  }

  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]];
  }

  #sinkDown(index) {
    let size = this.#heap.length;
    while (true) {
      let maxIndex = index;
      let leftIndex = this.#leftChild(index);
      let rightIndex = this.#rightChild(index);

      if (leftIndex < size && this.#heap[leftIndex] > this.#heap[maxIndex]) {
        maxIndex = leftIndex;
      }
      if (rightIndex < size && this.#heap[rightIndex] > this.#heap[maxIndex]) {
        maxIndex = rightIndex;
      }

      if (maxIndex !== index) {
        this.#swap(index, maxIndex);
        index = maxIndex;
      } else {
        return;
      }
    }
  }

  insert(value) {
    this.#heap.push(value);
    let current = this.#heap.length - 1;
    while (current > 0 && this.#heap[current] > this.#heap[this.#parent(current)]) {
      this.#swap(current, this.#parent(current));
      current = this.#parent(current);
    }
  }

  remove() {
    if (this.#heap.length === 0) return null;
    if (this.#heap.length === 1) return this.#heap.pop();
    const maxValue = this.#heap[0];
    this.#heap[0] = this.#heap.pop();
    this.#sinkDown(0);
    return maxValue;
  }
}

//////////////////////////////////////////
/// RECURSION
//////////////////////////////////////////
function FactorialRecursive(n) {
  return n <= 1 ? 1 : n * FactorialRecursive(n - 1);
}

//////////////////////////////////////////
/// RECURSIVE BINARY SEARCH TREE
//////////////////////////////////////////
class RLeaf {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class RecursiveBST {
  constructor() {
    this.root = null;
  }

  #rInsert(value, currentNode = this.root) {
    if (currentNode === null) return new RLeaf(value);
    if (value < currentNode.value) {
      currentNode.left = this.#rInsert(value, currentNode.left);
    } else if (value > currentNode.right) {
      currentNode.right = this.#rInsert(value, currentNode.right);
    }

    return currentNode;
  }

  rInsert(value) {
    this.root = this.#rInsert(value);
  }

  minValue(currentNode) {
    if (!currentNode) return null;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  #deleteNode(value, currentNode) {
    if (currentNode === null) return null;
    if (value < currentNode.left) {
      currentNode.left = this.#deleteNode(value, currentNode.left);
    } else if (value > currentNode.right) {
      currentNode.right = this.#deleteNode(value, currentNode.right);
    } else {
      if (currentNode.left === null && currentNode.right === null) {
        return null;
      } else if (currentNode.left === null) {
        currentNode = currentNode.right;
      } else if (currentNode.right === null) {
        currentNode = currentNode.left;
      } else {
        let subTreeMin = this.minValue(currentNode.right);
        currentNode.value = subTreeMin;
        currentNode.right = this.#deleteNode(subTreeMin, currentNode.right);
      }
    }
  }

  deleteNode(value) {
    this.root = this.#deleteNode(value, this.root);
  }

  rContains(value, currentNode = this.root) {
    if (currentNode === null) return false;
    if (value === currentNode.value) return true;
    return value < currentNode.value
      ? this.rContains(value, currentNode.left)
      : this.rContains(value, currentNode.right);
  }
}

//////////////////////////////////////////
/// TREE TRAVERSAL
//////////////////////////////////////////
class TNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class RBST {
  constructor() {
    this.root = null;
  }
  #rInsert(value, currentNode = this.root) {
    if (currentNode === null) return new TNode(value);
    if (value < currentNode.value) {
      currentNode.left = this.#rInsert(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.#rInsert(value, currentNode.right);
    }
    return currentNode;
  }

  rInsert(value) {
    this.root = this.#rInsert(value);
  }

  minValue(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  #deleteNode(value, currentNode) {
    if (currentNode === null) return null;
    if (value < currentNode.value) {
      currentNode.left = this.#deleteNode(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.#deleteNode(value, currentNode.right);
    } else {
      if (currentNode.left === null && currentNode.right === null) {
        return null;
      } else if (currentNode.left === null) {
        currentNode = currentNode.right;
      } else if (currentNode.right === null) {
        currentNode = currentNode.left;
      } else {
        const subTreeMin = this.minValue(currentNode.right);
        currentNode.value = subTreeMin;
        currentNode.right = this.#deleteNode(subTreeMin, currentNode.right);
      }
    }
    return currentNode;
  }

  deleteNode(value) {
    this.root = this.#deleteNode(value, this.root);
  }

  rContains(value, currentNode = this.root) {
    if (currentNode === null) return false;
    if (value === currentNode.value) return true;
    return value < currentNode.value
      ? this.rContains(value, currentNode.left)
      : this.rContains(value, currentNode.right);
  }

  BFS() {
    if (this.root === null) return [];
    const queue = [this.root];
    const results = [];
    while (queue.length) {
      const currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return results;
  }

  DFSPreOrder() {
    const results = [];
    function traverse(currentNode) {
      results.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }

  DFSInOrder() {
    const results = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      results.push(currentNode.value);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }

  DFSPostOrder() {
    const results = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
      results.push(currentNode.value);
    }
    traverse(this.root);
    return results;
  }
}

//////////////////////////////////////////
/// BUBBLE SORT
//////////////////////////////////////////
function BubbleSort(A) {
  for (let i = A.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (A[j] > A[j + 1]) [A[j], A[j + 1]] = [A[j + 1], A[j]];
    }
  }
  return A;
}

//////////////////////////////////////////
/// INSERTION SORT
//////////////////////////////////////////
function InsertionSort(A) {
  for (let i = 1; i < A.length; i++) {
    for (let j = i; j > 0; j--) {
      if (A[j - 1] > A[j]) {
        [A[j - 1], A[j]] = [A[j], A[j - 1]];
      } else {
        break;
      }
    }
  }
  return A;
}

//////////////////////////////////////////
/// SELECTION SORT
//////////////////////////////////////////
function SelectionSort(A) {
  for (let i = 0; i < A.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < A.length; j++) {
      if (A[min] > A[j]) min = j;
    }
    if (min !== i) [A[min], A[i]] = [A[i], A[min]];
  }
  return A;
}

//////////////////////////////////////////
/// MERGE SORT
//////////////////////////////////////////

function Merge(A1, A2) {
  const combined = [];
  let i = 0;
  let j = 0;
  while (i < A1.length && j < A2.length) {
    if (A1[i] < A2[j]) {
      combined.push(A1[i]);
      i++;
    } else {
      combined.push(A2[j]);
      j++;
    }
  }

  while (i < A1.length) {
    combined.push(A1[i]);
    i++;
  }

  while (j < A2.length) {
    combined.push(A2[j]);
    j++;
  }

  return combined;
}

function MergeSort(A) {
  if (A.length <= 1) return A;
  const mid = Math.floor(A.length / 2);
  const left = MergeSort(A.slice(0, mid));
  const right = MergeSort(A.slice(mid));
  return Merge(left, right);
}
