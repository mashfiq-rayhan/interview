// Fibonacci Top -> Down
let memo = [];
let counterTD = 0;
function fibonacciTD(n) {
  counterTD++;
  if (memo[n] !== undefined) {
    return memo[n];
  }
  if (n === 0 || n === 1) {
    return n;
  }
  memo[n] = fibonacciTD(n - 1) + fibonacciTD(n - 2);
  return memo[n];
}

const n = 20;

console.log("\nFib of", n, "=", fibonacciTD(n));
console.log("\n Counter:", counterTD);

// Fibonacci Bottom -> Up
let counterBU = 0;
function fibonacciBU(n) {
  let fibArray = [];
  fibArray[0] = 0;
  fibArray[1] = 1;
  for (let index = 2; index <= n; index++) {
    counterBU++;
    fibArray[index] = fibArray[index - 1] - fibArray[index - 2];
  }
  return fibArray[n];
}

console.log("\nFib of", n, "=", fibonacciBU(n));
console.log("\n Counter:", counterBU);
