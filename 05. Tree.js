class Node {
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
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
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

const myTree = new BST();
console.log(myTree);

const insert47 = myTree.insert(47);
console.log(insert47);

const insert21 = myTree.insert(21);
console.log(insert21);

const insert76 = myTree.insert(76);
console.log(insert76);

const insert18 = myTree.insert(18);
console.log(insert18);

const insert52 = myTree.insert(52);
console.log(insert52);

const insert82 = myTree.insert(82);
console.log(insert47);

const insert27 = myTree.insert(27);
console.log(insert27);

const contains99 = myTree.contains(99);
console.log(contains99);

const contains27 = myTree.contains(27);
console.log(contains27);
