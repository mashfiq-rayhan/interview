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

  #rInsert(value, currentNode = this.root) {
    if (currentNode === null) return new Node(value);
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
        let subTreeMin = this.minValue(currentNode.right);
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

    if (value < currentNode.value) {
      return this.rContains(value, currentNode.left);
    } else {
      return this.rContains(value, currentNode.right);
    }
  }
}

let myBST = new BST();

const insert47 = myBST.rInsert(47);
const insert21 = myBST.rInsert(21);
const insert76 = myBST.rInsert(76);
const insert18 = myBST.rInsert(18);
const insert27 = myBST.rInsert(27);
const insert52 = myBST.rInsert(52);
const insert82 = myBST.rInsert(82);
console.log(myBST);

console.log("\nBST Contains 27:");
console.log(myBST.rContains(27));

console.log("\nBST Contains 17:");
console.log(myBST.rContains(17));

console.log("\nMinValue from Root:");
console.log(myBST.minValue(myBST.root));

console.log("\nMinValue from Root->right:");
console.log(myBST.minValue(myBST.root.right));

const dlt52 = myBST.deleteNode(52);
console.log(myBST);
