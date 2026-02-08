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

const myHeap = new Heap();

// Inserting
// const insert99 = myHeap.insert(99);
// const insert72 = myHeap.insert(72);
// const insert61 = myHeap.insert(61);
// const insert58 = myHeap.insert(58);
// console.log(myHeap.getHeap());

// const insert100 = myHeap.insert(100);
// console.log(myHeap.getHeap());

// const insert75 = myHeap.insert(75);
// console.log(myHeap.getHeap());

// Removing
const insert95 = myHeap.insert(95);
const insert75 = myHeap.insert(75);
const insert80 = myHeap.insert(80);
const insert55 = myHeap.insert(55);
const insert60 = myHeap.insert(60);
const insert50 = myHeap.insert(50);
const insert65 = myHeap.insert(65);
console.log(myHeap.getHeap());

const remove1Item = myHeap.remove();
console.log(remove1Item);
console.log(myHeap.getHeap());

const remove2Item = myHeap.remove();
console.log(remove2Item);
console.log(myHeap.getHeap());
