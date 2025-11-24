function FactorialRecursive1(n) {
  return n <= 1 ? 1 : n * FactorialRecursive1(n - 1);
}

function FactorialRecursive2(n) {
  if (n <= 1) return 1;
  return n * FactorialRecursive2(n - 1);
}

const fac18 = FactorialRecursive1(8);
console.log(fac18);

const fac28 = FactorialRecursive2(8);
console.log(fac28);
