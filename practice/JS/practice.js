// ✅ BASIC

// 1. Reverse a string without using .reverse()
function ReverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

const revStr = ReverseString('This is a string');
console.log(revStr);

// 2. Check if a given string is a palindrome
function IsPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === ReverseString(cleaned);
}

const isPalin = IsPalindrome('ABBA');
console.log(isPalin);

// 3. Factorial using recursion and iteration
function FactorialRecursive(n) {
  return n <= 1 ? 1 : n * FactorialRecursive(n - 1);
}

const facR8 = FactorialRecursive(8);
console.log(facR8);

function FactorialIterative(n) {
  let result = 1;
  for (i = 2; i <= n; i++) result *= i;
  return result;
}

const facI8 = FactorialIterative(8);
console.log(facI8);

// 4. Find the largest and smallest number in an array
function FindMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }
  return { min, max };
}

const minmax = FindMinMax([11, 9, 13, 7, 15, 5, 17, 3, 19, 1]);
console.log(minmax);

// 5. Count vowels in a string
function CountVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

const cntvwls = CountVowels('This is a String to count vowels');
console.log(cntvwls);

// 6. Remove duplicates from an array
function RemoveDuplicates(arr) {
  return [...new Set(arr)];
}

const aset = RemoveDuplicates([1, 3, 1, 3, 5, 7, 5, 7, 9, 9]);
console.log(aset);

// 7. Check if two strings are anagrams
function AreAnagrams(str1, str2) {
  const format = (s) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]/)
      .split('')
      .sort()
      .join('');

  return format(str1) === format(str2);
}

const areanagrams = AreAnagrams('listen', 'silent');
console.log(areanagrams);

// 8. Find the second largest element in an array
function SecondLargest(arr) {
  let unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[1] ?? null;
}

const scndLg = SecondLargest([11, 9, 13, 7, 15, 5, 17, 3, 19, 1]);
console.log(scndLg);

// 9. Flatten a nested array
function FlattenArray(arr) {
  return arr.flat(Infinity);
}

const fltarr = FlattenArray([[11, 9, 13, 7, [15, [5, [17, [3, [19, 1]]]]]]]);
console.log(fltarr);

// 10. Check if a number is prime
function IsPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const ispr = IsPrime(11);
console.log(ispr);

// ✅ INTERMEDIATE

// 1. Debounce
function Debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// 2. Throttle
function Throttle(fn, limit) {
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
function DeepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const person = {
  name: 'Mash',
  age: 31,
  address: {
    country: 'Bangladesh',
    city: 'Khulna',
    station: 'Khulna',
    location: {
      area: 'Nirala',
      pin: 9100,
      road: {
        road: 1,
        holding: 4,
        crossRoad: 2,
        houseName: 'Rabeya Monjil'
      }
    }
  }
};

const aperson = DeepClone(person);
console.log(aperson);

const bperson = { ...person };
console.log(bperson);

// 4. Intersection of arrays
function ArrayIntersection(arr1, arr2) {
  return arr1.filter((x) => arr2.includes(x));
}

const arrIntersec = ArrayIntersection([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 3, 5, 7, 9]);
console.log(arrIntersec);

// 5. Group by property
function GroupBy(arr, key) {
  return arr.reduce((acc, obj) => {
    const k = obj[key];
    acc[k] = acc[k] || [];
    acc[k].push(obj);
    return acc;
  }, {});
}

// 6. Fibonacci sequence up to n
function Fibonacci(n) {
  let seq = [0, 1];
  while (seq.length < n) {
    seq.push(seq[seq.length - 2] + seq[seq.length - 1]);
  }
  return seq.slice(0, n);
}

const fib = Fibonacci(10);
console.log(fib);

// 7. First non-repeated character
function FirstNonRepeatedChar(str) {
  const freq = {};
  for (let ch of str) freq[ch] = (freq[ch] || 0) + 1;
  for (let ch of str) if (freq[ch] === 1) return ch;
  return null;
}

console.log(FirstNonRepeatedChar('This is a String'));

// 8. Two sum
function TwoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  return [];
}
const twsm = TwoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 15);
console.log(twsm);

function twoSums(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  return [];
}

const twsms = twoSums([1, 2, 3, 4, 5, 6, 7, 8, 9], 15);
console.log(twsms);
