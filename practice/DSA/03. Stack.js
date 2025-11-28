class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
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
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }

}

let myStack = new Stack(1);
console.log(myStack);

const push2 = myStack.push(2);
console.log(push2);

const pop2 = myStack.pop();
console.log(pop2);


class ArrayStack {
  constructor() {
    this.stackList = [];
  }

  getStackList() {
    return this.stackList;
  }

  printStack() {
    for (let i = this.stackList.length - 1; i > 0; i--) {
      console.log(this.stackList[i]);
    }
  }

  isEmpty() {
    return this.stackList.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.stackList[this.stackList.length - 1];
    }
  }

  size() {
    return this.stackList.length;
  }

  push(value) {
    this.stackList.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.stackList.pop();
  }
}

function ReverseString(str) {
  const stack = new ArrayStack();
  let revStr = "";

  for (const c of str) {
    stack.push(c);
  }

  while (!stack.isEmpty()) {
    revStr += stack.pop();
  }
  return revStr;
}

const rev = ReverseString("Udemy");
console.log(rev);

function isBalancedParentheses(parentheses) {
  const stack = new ArrayStack();
  for (const p of parentheses) {
    if (p === "(") {
      stack.push(p);
    } else if (p === ")") {
      if (stack.isEmpty() || stack.pop() !== "(") {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

function sortStack(stack) {
  const additionalStack = new ArrayStack();

  while (!stack.isEmpty()) {
    const temp = stack.pop();

    while (!additionalStack.isEmpty() && additionalStack.peek() > temp) {
      stack.push(additionalStack.pop());
    }

    additionalStack.push(temp);
  }

  while (!additionalStack.isEmpty()) {
    stack.push(additionalStack.pop());
  }
}

const s = new ArrayStack();

s.push(3);
s.push(1);
s.push(4);
s.push(2);

console.log("Before sorting:", s.getStackList());

// Call the sort function
sortStack(s);

console.log("After sorting:", s.getStackList());