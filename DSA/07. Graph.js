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

let myGraph = new Graph();
console.log(myGraph);

// let vertex1 = myGraph.addVertex(1);
// console.log(myGraph);

// let vertex2 = myGraph.addVertex(2);
// console.log(myGraph);

// let edge12 = myGraph.addEdge("1", "2");
// console.log(edge12);
// console.log(myGraph);

let vertexA = myGraph.addVertex("A");
console.log(myGraph);

let vertexB = myGraph.addVertex("B");
console.log(myGraph);

let vertexC = myGraph.addVertex("C");
console.log(myGraph);

let edgeAB = myGraph.addEdge("A", "B");
console.log(myGraph);

let edgeBC = myGraph.addEdge("B", "C");
console.log(myGraph);

let edgeCA = myGraph.addEdge("C", "A");
console.log(myGraph);

let rmvEdgeAB = myGraph.removeEdge("A", "B");
console.log(myGraph);

let rmvVertexA = myGraph.removeVertex("A");
console.log(myGraph);
