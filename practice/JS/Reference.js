// String Reference

// 1. at()
console.log("hello".at(1)); // Returns an indexed character from a string

// 2. charAt()
console.log("hello".charAt(1)); // Returns the character at a specified index

// 3. charCodeAt()
console.log("A".charCodeAt(0)); // Returns the Unicode of the character at a specified index

// 4. codePointAt()
console.log("💻".codePointAt(0)); // Returns the Unicode code point at the given index

// 5. concat()
console.log("Hello".concat(" ", "Boss")); // Joins two or more strings

// 6. constructor
console.log("test".constructor); // Returns the string's constructor function

// 7. endsWith()
console.log("JavaScript".endsWith("Script")); // Checks if the string ends with a specified value

// 8. fromCharCode()
console.log(String.fromCharCode(65, 66, 67)); // Converts Unicode values to characters

// 9. includes()
console.log("Navigator".includes("gator")); // Checks if the string contains a specified value

// 10. indexOf()
console.log("banana".indexOf("a")); // Returns index of first occurrence

// 11. isWellFormed()
console.log("test".isWellFormed()); // Checks if a string is well-formed

// 12. lastIndexOf()
console.log("banana".lastIndexOf("a")); // Returns index of last occurrence

// 13. length
console.log("Boss".length); // Returns string length

// 14. localeCompare()
console.log("a".localeCompare("b")); // Compares strings based on locale

// 15. match()
console.log("abc123".match(/\d+/)); // Returns matches for regex or string

// 16. matchAll()
console.log([..."a1b2c3".matchAll(/\d/g)]); // Returns all regex matches with details

// 17. padEnd()
console.log("Boss".padEnd(10, "*")); // Pads string at the end

// 18. padStart()
console.log("Boss".padStart(10, "*")); // Pads string at the beginning

// 19. prototype
console.log(String.prototype); // Allows adding properties/methods to String objects

// 20. repeat()
console.log("ha".repeat(3)); // Repeats string specified number of times

// 21. replace()
console.log("banana".replace("a", "@")); // Replaces the first match

// 22. replaceAll()
console.log("banana".replaceAll("a", "@")); // Replaces all matches

// 23. search()
console.log("abc123".search(/\d/)); // Searches for match, returns index

// 24. slice()
console.log("JavaScript".slice(0, 4)); // Extracts part of a string

// 25. split()
console.log("a,b,c".split(",")); // Splits string into array

// 26. startsWith()
console.log("Navigator".startsWith("Nav")); // Checks if string begins with specified value

// 27. substr() (Deprecated)
console.log("JavaScript".substr(0, 4)); // Deprecated: extracts part of string

// 28. substring()
console.log("JavaScript".substring(0, 4)); // Extracts characters between indices

// 29. toLocaleLowerCase()
console.log("BOSS".toLocaleLowerCase()); // Converts to lowercase using locale

// 30. toLocaleUpperCase()
console.log("boss".toLocaleUpperCase()); // Converts to uppercase using locale

// 31. toLowerCase()
console.log("BOSS".toLowerCase()); // Converts string to lowercase

// 32. toString()
console.log((123).toString()); // Converts value to string

// 33. toUpperCase()
console.log("boss".toUpperCase()); // Converts string to uppercase

// 34. toWellFormed()
console.log("test".toWellFormed()); // Fixes malformed Unicode sequences

// 35. trim()
console.log("   Boss   ".trim()); // Removes whitespace from both sides

// 36. trimEnd()
console.log("   Boss   ".trimEnd()); // Removes whitespace from end

// 37. trimStart()
console.log("   Boss   ".trimStart()); // Removes whitespace from start

// 38. valueOf()
console.log(new String("Boss").valueOf()); // Returns the primitive value


// Number Reference

// 1. Number.EPSILON
console.log(Number.EPSILON); // Smallest difference between two representable numbers

// 2. Number.MAX_VALUE
console.log(Number.MAX_VALUE); // Largest possible number in JS

// 3. Number.MIN_VALUE
console.log(Number.MIN_VALUE); // Smallest positive number in JS

// 4. Number.MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER); // Largest safe integer

// 5. Number.MIN_SAFE_INTEGER
console.log(Number.MIN_SAFE_INTEGER); // Smallest safe integer

// 6. Number.NaN
console.log(Number.NaN); // Not-a-Number value

// 7. Number.NEGATIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY); // Negative infinity

// 8. Number.POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY); // Positive infinity

// 9. Number.isFinite()
console.log(Number.isFinite(100)); // Checks if value is finite

// 10. Number.isInteger()
console.log(Number.isInteger(10)); // Checks if value is an integer

// 11. Number.isNaN()
console.log(Number.isNaN(NaN)); // Checks if value is NaN

// 12. Number.isSafeInteger()
console.log(Number.isSafeInteger(9007199254740991)); // Checks for safe integer

// 13. Number.parseFloat()
console.log(Number.parseFloat("12.34")); // Converts string to float

// 14. Number.parseInt()
console.log(Number.parseInt("12.34")); // Converts string to integer

// 15. Number.prototype.toExponential()
console.log((123456).toExponential(2)); // Converts to exponential notation

// 16. Number.prototype.toFixed()
console.log((12.3456).toFixed(2)); // Formats with fixed decimal places

// 17. Number.prototype.toLocaleString()
console.log((1000000).toLocaleString()); // Formats number based on locale

// 18. Number.prototype.toPrecision()
console.log((12.3456).toPrecision(4)); // Formats number with total digits

// 19. Number.prototype.toString()
console.log((255).toString(16)); // Converts number to string (hex)

// 20. Number.prototype.valueOf()
console.log((123).valueOf()); // Returns primitive number value


// Date Reference 

// 1. new Date()
console.log(new Date()); // Creates a new date object with current date/time

// 2. Date.now()
console.log(Date.now()); // Returns timestamp in milliseconds

// 3. Date.parse()
console.log(Date.parse("2025-07-15")); // Parses date string to timestamp

// 4. Date.UTC()
console.log(Date.UTC(2025, 6, 15)); // Creates timestamp for UTC date

// 5. getDate()
console.log(new Date().getDate()); // Returns day of the month

// 6. getDay()
console.log(new Date().getDay()); // Returns day of the week (0–6)

// 7. getFullYear()
console.log(new Date().getFullYear()); // Returns full year

// 8. getHours()
console.log(new Date().getHours()); // Returns hour (0–23)

// 9. getMilliseconds()
console.log(new Date().getMilliseconds()); // Returns milliseconds (0–999)

// 10. getMinutes()
console.log(new Date().getMinutes()); // Returns minutes (0–59)

// 11. getMonth()
console.log(new Date().getMonth()); // Returns month (0–11)

// 12. getSeconds()
console.log(new Date().getSeconds()); // Returns seconds (0–59)

// 13. getTime()
console.log(new Date().getTime()); // Returns timestamp

// 14. getTimezoneOffset()
console.log(new Date().getTimezoneOffset()); // Minutes difference from UTC

// 15. getUTCDate()
console.log(new Date().getUTCDate()); // UTC day of month

// 16. getUTCDay()
console.log(new Date().getUTCDay()); // UTC weekday

// 17. getUTCFullYear()
console.log(new Date().getUTCFullYear()); // UTC full year

// 18. getUTCHours()
console.log(new Date().getUTCHours()); // UTC hours

// 19. getUTCMilliseconds()
console.log(new Date().getUTCMilliseconds()); // UTC milliseconds

// 20. getUTCMinutes()
console.log(new Date().getUTCMinutes()); // UTC minutes

// 21. getUTCMonth()
console.log(new Date().getUTCMonth()); // UTC month

// 22. getUTCSeconds()
console.log(new Date().getUTCSeconds()); // UTC seconds

// 23. setDate()
const d1 = new Date(); d1.setDate(20);
console.log(d1); // Sets day of month

// 24. setFullYear()
const d2 = new Date(); d2.setFullYear(2030);
console.log(d2); // Sets full year

// 25. setHours()
const d3 = new Date(); d3.setHours(10);
console.log(d3); // Sets hour

// 26. setMilliseconds()
const d4 = new Date(); d4.setMilliseconds(500);
console.log(d4); // Sets milliseconds

// 27. setMinutes()
const d5 = new Date(); d5.setMinutes(45);
console.log(d5); // Sets minutes

// 28. setMonth()
const d6 = new Date(); d6.setMonth(6);
console.log(d6); // Sets month (0–11)

// 29. setSeconds()
const d7 = new Date(); d7.setSeconds(30);
console.log(d7); // Sets seconds

// 30. setTime()
const d8 = new Date(); d8.setTime(2000000000000);
console.log(d8); // Sets timestamp

// 31. setUTCDate()
const d9 = new Date(); d9.setUTCDate(15);
console.log(d9); // Sets UTC day

// 32. setUTCFullYear()
const d10 = new Date(); d10.setUTCFullYear(2040);
console.log(d10); // Sets UTC year

// 33. setUTCHours()
const d11 = new Date(); d11.setUTCHours(12);
console.log(d11); // Sets UTC hours

// 34. setUTCMilliseconds()
const d12 = new Date(); d12.setUTCMilliseconds(700);
console.log(d12); // Sets UTC milliseconds

// 35. setUTCMinutes()
const d13 = new Date(); d13.setUTCMinutes(20);
console.log(d13); // Sets UTC minutes

// 36. setUTCMonth()
const d14 = new Date(); d14.setUTCMonth(8);
console.log(d14); // Sets UTC month

// 37. setUTCSeconds()
const d15 = new Date(); d15.setUTCSeconds(50);
console.log(d15); // Sets UTC seconds

// 38. toDateString()
console.log(new Date().toDateString()); // Converts to readable date string

// 39. toISOString()
console.log(new Date().toISOString()); // Converts to ISO format

// 40. toJSON()
console.log(new Date().toJSON()); // Converts to JSON date format

// 41. toLocaleDateString()
console.log(new Date().toLocaleDateString()); // Date formatted by locale

// 42. toLocaleString()
console.log(new Date().toLocaleString()); // Date & time formatted by locale

// 43. toLocaleTimeString()
console.log(new Date().toLocaleTimeString()); // Time formatted by locale

// 44. toString()
console.log(new Date().toString()); // Converts date to string

// 45. toTimeString()
console.log(new Date().toTimeString()); // Extracts time as string

// 46. toUTCString()
console.log(new Date().toUTCString()); // Converts to UTC string format

// 47. valueOf()
console.log(new Date().valueOf()); // Returns timestamp (primitive value)

// Array Reference

// 1. Array()
console.log(new Array(1, 2, 3)); // Creates a new array

// 2. Array.from()
console.log(Array.from("Boss")); // Converts iterable/string to array

// 3. Array.isArray()
console.log(Array.isArray([1, 2, 3])); // Checks if value is an array

// 4. Array.of()
console.log(Array.of(1, 2, 3)); // Creates array from arguments

// 5. concat()
console.log([1, 2].concat([3, 4])); // Joins arrays

// 6. copyWithin()
console.log([1, 2, 3, 4].copyWithin(1, 2)); // Copies array elements

// 7. entries()
console.log([...['a', 'b'].entries()]); // Returns key/value pairs

// 8. every()
console.log([2, 4, 6].every(n => n % 2 === 0)); // Checks if all elements pass a condition

// 9. fill()
console.log([1, 2, 3].fill(0)); // Fills elements with a static value

// 10. filter()
console.log([1, 2, 3, 4].filter(n => n > 2)); // Filters array elements

// 11. find()
console.log([1, 2, 3].find(n => n > 1)); // Finds first matching element

// 12. findIndex()
console.log([1, 2, 3].findIndex(n => n > 1)); // Finds index of first match

// 13. findLast()
console.log([1, 2, 3].findLast(n => n > 1)); // Finds last matching element

// 14. findLastIndex()
console.log([1, 2, 3].findLastIndex(n => n > 1)); // Finds index of last match

// 15. flat()
console.log([1, [2, [3]]].flat(2)); // Flattens nested array

// 16. flatMap()
console.log([1, 2, 3].flatMap(n => [n, n * 2])); // Maps + flattens array

// 17. forEach()
[1, 2, 3].forEach(n => console.log(n)); // Iterates over array

// 18. includes()
console.log([1, 2, 3].includes(2)); // Checks if array includes a value

// 19. indexOf()
console.log([1, 2, 3].indexOf(2)); // Returns index of first match

// 20. join()
console.log(["a", "b", "c"].join("-")); // Joins elements into string

// 21. keys()
console.log([...['a', 'b'].keys()]); // Returns array indices

// 22. lastIndexOf()
console.log([1, 2, 3, 2].lastIndexOf(2)); // Last index of value

// 23. map()
console.log([1, 2, 3].map(n => n * 2)); // Maps each element

// 24. pop()
const arr1 = [1, 2, 3]; console.log(arr1.pop()); // Removes last element

// 25. push()
const arr2 = [1, 2]; console.log(arr2.push(3)); // Adds to end

// 26. reduce()
console.log([1, 2, 3].reduce((a, b) => a + b)); // Reduces array to value

// 27. reduceRight()
console.log([1, 2, 3].reduceRight((a, b) => a + b)); // Reduces from right

// 28. reverse()
console.log([1, 2, 3].reverse()); // Reverses array order

// 29. shift()
const arr3 = [1, 2, 3]; console.log(arr3.shift()); // Removes first element

// 30. slice()
console.log([1, 2, 3, 4].slice(1, 3)); // Slices array

// 31. some()
console.log([1, 2, 3].some(n => n > 2)); // Checks if any element passes test

// 32. sort()
console.log([3, 1, 2].sort()); // Sorts array

// 33. splice()
const arr4 = [1, 2, 3]; console.log(arr4.splice(1, 1)); // Adds/removes elements

// 34. toLocaleString()
console.log([1000, 2000].toLocaleString()); // Formats elements by locale

// 35. toString()
console.log([1, 2, 3].toString()); // Converts array to string

// 36. unshift()
const arr5 = [2, 3]; console.log(arr5.unshift(1)); // Adds to start

// 37. values()
console.log([...['a', 'b'].values()]); // Returns array values


// Set Reference

// Create a Set
const letters = new Set(["a", "b", "c"]);
console.log(letters);

// add()
letters.add("d");
console.log(letters);

// delete()
letters.delete("b");
console.log(letters);

// has()
console.log(letters.has("a")); // true
console.log(letters.has("z")); // false

// clear()
// letters.clear();
// console.log(letters); // Set(0) {}

// size
console.log(letters.size); // 3

// forEach()
letters.forEach(value => console.log(value));

// values() / keys() (same for Set)
for (let v of letters.values()) console.log(v);
for (let k of letters.keys()) console.log(k);

// entries()
for (let entry of letters.entries()) console.log(entry);

// Iteration
for (let item of letters) console.log(item);


// Map Reference

// Create a Map
const fruits = new Map([
  ["apple", 10],
  ["banana", 5],
  ["mango", 7]
]);
console.log(fruits); // Initial map

// set()
fruits.set("orange", 12); // Adds or updates an entry
console.log(fruits);

// get()
console.log(fruits.get("apple")); // Returns value of a key

// delete()
fruits.delete("banana"); // Removes a key/value pair
console.log(fruits);

// has()
console.log(fruits.has("mango")); // true
console.log(fruits.has("banana")); // false

// size
console.log(fruits.size); // Number of entries

// clear()
// fruits.clear();
// console.log(fruits); // Map(0) {}

// forEach()
fruits.forEach((value, key) => console.log(key, value));

// keys()
for (let key of fruits.keys()) console.log(key);

// values()
for (let value of fruits.values()) console.log(value);

// entries()
for (let entry of fruits.entries()) console.log(entry);

// Iteration
for (let [key, value] of fruits) console.log(key, value);


// Full JavaScript Object Reference Practice

// 1. Object()
const obj1 = new Object();
obj1.name = "Boss";
console.log(obj1);

// 2. Object.assign()
const target = { a: 1 };
const source = { b: 2 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget);

// 3. Object.create()
const proto = { greet: function() { return "Hello"; } };
const obj2 = Object.create(proto);
console.log(obj2.greet());

// 4. Object.defineProperty()
const obj3 = {};
Object.defineProperty(obj3, 'prop', { value: 42, writable: true });
console.log(obj3.prop);

// 5. Object.defineProperties()
const obj4 = {};
Object.defineProperties(obj4, {
  'prop1': { value: 1, writable: true },
  'prop2': { value: 2, writable: true }
});
console.log(obj4);

// 6. Object.entries()
const obj5 = { a: 1, b: 2 };
console.log(Object.entries(obj5));

// 7. Object.freeze()
const obj6 = { a: 1 };
Object.freeze(obj6);
obj6.a = 2;
console.log(obj6.a); // still 1

// 8. Object.fromEntries()
const entries = [['a', 1], ['b', 2]];
const obj7 = Object.fromEntries(entries);
console.log(obj7);

// 9. Object.getOwnPropertyDescriptor()
const obj8 = { a: 1 };
console.log(Object.getOwnPropertyDescriptor(obj8, 'a'));

// 10. Object.getOwnPropertyDescriptors()
console.log(Object.getOwnPropertyDescriptors(obj8));

// 11. Object.getOwnPropertyNames()
console.log(Object.getOwnPropertyNames(obj8));

// 12. Object.getOwnPropertySymbols()
const sym = Symbol('foo');
const obj9 = {};
obj9[sym] = 1;
console.log(Object.getOwnPropertySymbols(obj9));

// 13. Object.getPrototypeOf()
console.log(Object.getPrototypeOf(obj8));

// 14. Object.is()
console.log(Object.is('foo', 'foo')); // true
console.log(Object.is([], [])); // false

// 15. Object.isExtensible()
const obj10 = {};
console.log(Object.isExtensible(obj10)); // true

// 16. Object.isFrozen()
console.log(Object.isFrozen(obj6)); // true

// 17. Object.isSealed()
const obj11 = { a: 1 };
Object.seal(obj11);
console.log(Object.isSealed(obj11)); // true

// 18. Object.keys()
console.log(Object.keys(obj5)); // ['a','b']

// 19. Object.preventExtensions()
const obj12 = {};
Object.preventExtensions(obj12);
console.log(Object.isExtensible(obj12)); // false

// 20. Object.seal()
const obj13 = { a: 1 };
Object.seal(obj13);
obj13.a = 2; // allowed
// obj13.b = 3; // not allowed
console.log(obj13);

// 21. Object.values()
console.log(Object.values(obj5)); // [1,2]

// 22. Object.prototype.hasOwnProperty()
console.log(obj5.hasOwnProperty('a')); // true
console.log(obj5.hasOwnProperty('z')); // false

// 23. Object.prototype.isPrototypeOf()
console.log(proto.isPrototypeOf(obj2)); // true

// 24. Object.prototype.propertyIsEnumerable()
console.log(obj5.propertyIsEnumerable('a')); // true

// 25. Object.prototype.toLocaleString()
console.log(obj5.toLocaleString()); // 1,2

// 26. Object.prototype.toString()
console.log(obj5.toString()); // [object Object]

// 27. Object.prototype.valueOf()
console.log(obj5.valueOf()); // {a:1,b:2}