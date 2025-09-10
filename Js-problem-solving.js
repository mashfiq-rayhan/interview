// ✅ BASIC PROBLEM-SOLVING

// 1. Reverse a string without using .reverse()
function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// 2. Check if a given string is a palindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === reverseString(cleaned);
}

// 3. Factorial using recursion and iteration
function factorialRecursive(n) {
  return n <= 1 ? 1 : n * factorialRecursive(n - 1);
}
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

// 4. Find the largest and smallest number in an array
function findMinMax(arr) {
  let min = arr[0], max = arr[0];
  for (let num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }
  return { min, max };
}

// 5. Count vowels in a string
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// 6. Remove duplicates from an array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// 7. Check if two strings are anagrams
function areAnagrams(str1, str2) {
  const format = s => s.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
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
  return function (...args) {
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
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 3. Deep clone
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// 4. Intersection of arrays
function arrayIntersection(arr1, arr2) {
  return arr1.filter(x => arr2.includes(x));
}

// 5. Group by property
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

// 7. First non-repeated character
function firstNonRepeatedChar(str) {
  const freq = {};
  for (let ch of str) freq[ch] = (freq[ch] || 0) + 1;
  for (let ch of str) if (freq[ch] === 1) return ch;
  return null;
}

// 8. Two sum
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(nums[i], i);
  }
  return [];
}

// 9. Convert to camelCase / snake_case
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
function toSnakeCase(str) {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

// 10. Memoization
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    return (cache[key] = fn.apply(this, args));
  };
}


// ✅ ADVANCED PROBLEM-SOLVING

// 1. Custom Promise.all
function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [], count = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p).then(val => {
        results[i] = val;
        count++;
        if (count === promises.length) resolve(results);
      }).catch(reject);
    });
  });
}

// 2. LRU Cache
class LRUCache {
  constructor(limit) {
    this.cache = new Map();
    this.limit = limit;
  }
  get(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }
  put(key, val) {
    if (this.cache.has(key)) this.cache.delete(key);
    if (this.cache.size >= this.limit) this.cache.delete(this.cache.keys().next().value);
    this.cache.set(key, val);
  }
}

// 3. Retry API call
function retry(fn, retries, delay) {
  return new Promise((resolve, reject) => {
    function attempt(n) {
      fn().then(resolve).catch(err => {
        if (n === 0) reject(err);
        else setTimeout(() => attempt(n - 1), delay);
      });
    }
    attempt(retries);
  });
}

// 4. Expression evaluator
function evaluateExpression(expr) {
  return Function(`return ${expr}`)();
}

// 5. Flatten object
function flattenObject(obj, parent = '', res = {}) {
  for (let key in obj) {
    const newKey = parent ? `${parent}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      flattenObject(obj[key], newKey, res);
    } else {
      res[newKey] = obj[key];
    }
  }
  return res;
}

// 6. Event Emitter
class EventEmitter {
  constructor() { this.events = {}; }
  on(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
  }
  emit(event, ...args) {
    if (this.events[event]) this.events[event].forEach(fn => fn(...args));
  }
  off(event, listener) {
    this.events[event] = this.events[event].filter(fn => fn !== listener);
  }
}

// 7. Curry function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...next) => curried(...args, ...next);
  };
}

// 8. Binary search
function binarySearch(arr, target) {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) return mid;
    arr[mid] < target ? (l = mid + 1) : (r = mid - 1);
  }
  return -1;
}

// 9. Maximum Subarray (Kadane's Algorithm)
function maxSubArray(nums) {
  let maxSoFar = nums[0], curr = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(nums[i], curr + nums[i]);
    maxSoFar = Math.max(maxSoFar, curr);
  }
  return maxSoFar;
}

// 10. Custom bind, call, apply
Function.prototype.myCall = function (ctx, ...args) {
  ctx = ctx || globalThis;
  const fn = Symbol();
  ctx[fn] = this;
  const result = ctx[fn](...args);
  delete ctx[fn];
  return result;
};

Function.prototype.myApply = function (ctx, args) {
  return this.myCall(ctx, ...(args || []));
};

Function.prototype.myBind = function (ctx, ...args) {
  const fn = this;
  return function (...newArgs) {
    return fn.myCall(ctx, ...args, ...newArgs);
  };
};


// ✅ SCENARIO-BASED PROBLEM-SOLVING

// 1. Top 10 largest numbers efficiently
function top10Largest(arr) {
  return arr.sort((a, b) => b - a).slice(0, 10);
}

// 2. Auto-complete (debounce + cache)
function autoComplete(fetchFn) {
  const cache = {};
  const debounced = debounce(async (query) => {
    if (cache[query]) return cache[query];
    const result = await fetchFn(query);
    cache[query] = result;
    return result;
  }, 300);
  return debounced;
}

// 3. Extract all keys from nested JSON
function extractKeys(obj, keys = []) {
  for (let key in obj) {
    keys.push(key);
    if (typeof obj[key] === 'object') extractKeys(obj[key], keys);
  }
  return keys;
}

// 4. Infinite scrolling logic (simplified)
window.onscroll = function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    console.log('Load more data...');
  }
};

// 5. Fastest API response
function fastestAPI(promises) {
  return Promise.race(promises);
}

// 6. Lazy loading images
function lazyLoad() {
  const imgs = document.querySelectorAll('img[data-src]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  });
  imgs.forEach(img => observer.observe(img));
}

// 7. Scheduler function
function scheduler(tasks, interval) {
  let i = 0;
  setInterval(() => {
    if (i < tasks.length) tasks[i++]();
  }, interval);
}

// 8. Check circular reference
function hasCircular(obj, seen = new Set()) {
  if (obj && typeof obj === 'object') {
    if (seen.has(obj)) return true;
    seen.add(obj);
    return Object.values(obj).some(val => hasCircular(val, seen));
  }
  return false;
}

// 9. Detect memory leaks (conceptual - profiling tools needed)
// In interviews: explain using Chrome DevTools Performance/Memory tab + heap snapshots.

// 10. Merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
  let i = 0, j = 0, res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) res.push(arr1[i++]);
    else res.push(arr2[j++]);
  }
  return res.concat(arr1.slice(i)).concat(arr2.slice(j));
}
