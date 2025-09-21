// ✅ BASIC

// 1. Reverse a string without using .reverse()
function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

const revStr = reverseString('Life is a video game!');
console.log(revStr);

// Check if a given string is palindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === reverseString(cleaned);
}

const isPal = isPalindrome('Madam');
console.log(isPal);

// 3. Factorial using recursion and iteration
function factorialRecursive(n) {
  return n <= 1 ? 1 : n * factorialRecursive(n - 1);
}

const fac8 = factorialRecursive(8);
console.log(fac8);

function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

const fac9 = factorialRecursive(9);
console.log(fac9);

// 4. Find the largest and smallest number in an array
function findMinMax(arr) {
  let min = arr[0],
    max = arr[0];
  for (let num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }

  return { min, max };
}

const minMax = findMinMax([1, 3, 2, 6, 5, 4]);
console.log(minMax);

// 5. Count vowels in a string
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

const cntV = countVowels('How many vowels are there in this string?');
console.log(cntV);

// 6. Remove duplicates from an array
function rmvDplcts(arr) {
  return [...new Set(arr)];
}

const rmd = rmvDplcts([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6]);
console.log(rmd);

// 7. Check if two strings are anagrams
function areAnagrams(str1, str2) {
  const format = (s) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '')
      .split('')
      .sort()
      .join('');
  return format(str1) === format(str2);
}

// 8. Find the second largest element in an array
function secondLargest(arr) {
  let unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[1] ?? null;
}

// 9. Flatten a nested array
function flattenArray(arr) {
  return arr.flat(Infinity);
}

// 10. Check if a number is prime
function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

// ✅ INTERMEDIATE PROBLEM-SOLVING

// 1. Debounce
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// 2. Throttle
function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// 3. Deep clone
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const obj = {
  person: {
    name: 'Mash',
    age: 31,
    city: 'Khulna'
  },
  status: 0,
  address: {
    postcode: 9100,
    area: 'nirala',
    city: 'khulna'
  }
};

const newObj = deepClone(obj);
console.log(newObj);

// 4. Intersection of arrays
function arrIntersec(arr1, arr2) {
  return arr1.filter((x) => arr2.includes(x));
}

// 5. Group by property

const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 21 },
  { name: 'David', age: 25 }
];

console.log(groupBy(people, 'age'));

function groupBy(arr, key) {
  return arr.reduce((acc, obj) => {
    const k = obj[key];
    acc[k] = acc[k] || [];
    acc[k].push(obj);
    return acc;
  }, {});
}

// 6. Fibonacci sequence up to n
function fibonacci(n) {
  let seq = [0, 1];
  while (seq.length < n) {
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  }
  return seq.slice(0, n);
}

const seq10 = fibonacci(10);
console.log(seq10);

// 7. First non-repeated character
function firstNonRepeatedChar(str) {
  const freq = {};
  for (let ch of str) freq[ch] = (freq[ch] || 0) + 1;
  for (let ch of str) if (freq[ch] === 1) return ch;
  return null;
}

const ifIn = firstNonRepeatedChar('This string should return the first non repeated character');
console.log(ifIn);

// 8. Two sum
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
    console.log(map);
  }
  return [];
}

const ts = twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12);
console.log(ts);

// 9. Convert to camelCase / snake_case
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

function toSnakeCase(str) {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

const camel = toCamelCase('this_is_camel_cased');
console.log(camel);

const snake = toSnakeCase('thisIsSnakeCased');
console.log(snake);

// 10. Memoization
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    return (cache[key] = fn.apply(this, args));
  };
}

function slowSquare(n) {
  console.log("Computing square...");
  return n * n;
}

const memoizedSquare = memoize(slowSquare);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5)); 

// ✅ ADVANCED

// 1. Custom Promise.all
function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [],
      count = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((val) => {
          results[i] = val;
          count++;
          if (count === promises.length) resolve(results);
        })
        .catch(reject);
    });
  });
}

const p1 = Promise.resolve(1);
const p2 = new Promise(res => setTimeout(() => res(2), 100));
const p3 = 3; // not a promise

customPromiseAll([p1, p2, p3])
  .then(console.log)  // [1, 2, 3]
  .catch(console.error);