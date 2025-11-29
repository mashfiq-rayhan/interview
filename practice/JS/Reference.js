// String Reference
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(alphabet.length);
console.log(alphabet[0]);
console.log(alphabet.at(0));
console.log(alphabet.charAt(0));
console.log(alphabet.charCodeAt(0));
console.log(String.fromCharCode(65));
console.log(alphabet.codePointAt(0));
console.log(String.fromCodePoint(65));
console.log(alphabet.concat(' ', alphabet));
console.log(alphabet.slice(0, 10));
console.log(alphabet.substring(0, 10));
console.log(alphabet.toLowerCase());
console.log(alphabet.toUpperCase());
console.log(alphabet.toLocaleLowerCase());
console.log(alphabet.toLocaleUpperCase());
console.log(alphabet.isWellFormed());
console.log(alphabet.toWellFormed());
console.log(alphabet.trim());
console.log(alphabet.trimStart());
console.log(alphabet.trimEnd());
console.log(alphabet.padStart(30, '-'));
console.log(alphabet.padEnd(30, '-'));
console.log(alphabet.repeat(2));
console.log(alphabet.replace('ABC', 'abc'));
console.log(alphabet.replace(/ABC/i, 'abc'));
console.log(alphabet.replace(/ABC/g, 'abc'));
console.log(alphabet.replace(/ABC/gi, 'abc'));
console.log(alphabet.replaceAll(/ABC/g, 'abc'));
console.log(alphabet.replaceAll(/ABC/gi, 'abc'));
console.log(alphabet.split(''));
let txt = "Please locate where 'locate' occurs!";
console.log(txt.indexOf('locate'));
console.log(txt.lastIndexOf('locate'));
console.log(txt.search('where'));
console.log(txt.search(/occurs/));
let txt1 = 'The rain in SPAIN stays mainly in the plain';
console.log(txt1.match('ain'));
console.log(txt1.match(/ain/));
console.log(txt1.match(/ain/g));
console.log(txt1.match(/ain/gi));
console.log(txt1.matchAll('ain'));
console.log(txt1.matchAll(/ain/g));
console.log(txt1.matchAll(/ain/gi));
console.log(txt1.includes('ain'));
console.log(txt1.startsWith('The'));
console.log(txt1.endsWith('plain'));


// Number Reference
let x = 12;
console.log(x.toString());
console.log(x.toExponential(2));
console.log(x.toFixed(2));
console.log(x.toPrecision(3));
console.log(Number(true));
console.log(Number(false));
console.log(Number('10'));
console.log(Number('  10'));
console.log(Number('10  '));
console.log(Number('  10  '));
console.log(Number('10.33'));
console.log(Number('10,33'));
console.log(Number('10 33'));
console.log(Number('John'));
console.log(Number(new Date('2025-11-29')));
console.log(parseInt('-10'));
console.log(parseInt('-10.33'));
console.log(parseInt('10'));
console.log(parseInt('10.33'));
console.log(parseInt('10 20 30'));
console.log(parseInt('10 years'));
console.log(parseInt('years 10'));
console.log(parseFloat('10'));
console.log(parseFloat('10.33'));
console.log(parseFloat('10 20 30'));
console.log(parseFloat('10 years'));
console.log(parseFloat('years 10'));
console.log(Number.isInteger(10));
console.log(Number.isNaN(1));
console.log(Number.isFinite(10));
console.log(Number.isSafeInteger(10));
console.log(Number.parseFloat(10));
console.log(Number.parseInt(10));
console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

// Array Reference
const cities = ['Khulna', 'Dhaka', 'Chittagong', 'Sylhet', 'Barishal', 'Rajshahi'];
console.log(cities.length);
console.log(cities.toString());
console.log(cities[0]);
console.log(cities.join(''));
console.log(cities.pop());
console.log(cities.push('Jessore'));
console.log(cities.shift());
console.log(cities.unshift('Bagerhat'));
cities[0] = 'Khulna';
console.log(cities);
cities[cities.length] = 'Bagerhat';
console.log(cities);
console.log(Array.isArray(cities));
const myGirls = ['Cecilie', 'Lone'];
const myBoys = ['Emil', 'Tobias', 'Linus'];
console.log(myGirls.concat(myBoys));
fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits.copyWithin(2, 0)); // Copy to index 2, all elements from index 0:
fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi'];
console.log(fruits.copyWithin(2, 0, 2));
let myArr = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log(myArr.flat());
myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => [x, x * 10]);
console.log(newArr);
fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Banana', 'Orange', 'Apple', 'Mango'];
fruits.splice(2, 0, 'Lemon', 'Kiwi');
console.log(fruits);
console.log(fruits.splice(2, 2, 'ad', 'da'));
console.log(fruits);
console.log(fruits.splice(2, 2));
console.log(fruits.toSpliced(0, 1));
console.log(fruits);
console.log(fruits.slice(0, 2));

console.log(fruits.indexOf('Banana'));
console.log(fruits.lastIndexOf('Banana'));
console.log(fruits.includes('Banana'));
let numbers = [4, 9, 16, 25, 29];
let first = numbers.find((value, index, array) => value > 18);
console.log(first);
let firstIndex = numbers.findIndex((value, index, array) => value > 18);
console.log(firstIndex);
let fndlst = fruits.findLast((value, index, array) => value === 'Banana');
console.log(fndlst);
let fndlstindx = fruits.findLastIndex((value, index, array) => value === 'Banana');
console.log(fndlstindx);

fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits.sort());
console.log(fruits.reverse());
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));
console.log(numbers.reverse());
let months = ['Jan', 'Feb', 'Mar', 'Apr'];
console.log(months.toSorted());
console.log(months.toReversed());
numbers = [45, 4, 9, 16, 25];
txt = '';
numbers.forEach((value, index, array) => {
  txt += value + ' ';
});
console.log(txt);
numbers.forEach((value, index, array) => {
  value = value * 2;
});
console.log(numbers);
let mapNums = numbers.map((value, index, array) => value * 2);
console.log(mapNums);
let flatNums = numbers.flatMap((value, index, array) => value * 2);
console.log(flatNums);
let filteredNums = numbers.filter((value, index, array) => value !== 10);
console.log(filteredNums);
let reduceTotal = numbers.reduce((total, value, index, array) => (total += value), 0);
console.log(reduceTotal);
let reduceRightTotal = numbers.reduceRight((total, value, index, array) => (total += value), 0);
console.log(reduceRightTotal);
let everyTest1 = numbers.every((value, index, array) => value > 18);
console.log(everyTest1);
let everyTest2 = numbers.every((value, index, array) => value > 1);
console.log(everyTest2);
let someTest1 = numbers.some((value, index, array) => value > 18);
console.log(someTest1);
let someTest2 = numbers.some((value, index, array) => value > 1);
console.log(someTest2);
let myNumbers = [1, 2, 3, 4];
myArr = Array.from(myNumbers, (x) => x * 2);
console.log(myArr);
fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
let keys = fruits.keys();
console.log(keys);
for (let v of keys) {
  console.log(v);
}
let keysFrom = Array.from(keys);
console.log(keysFrom);
let entriesFruits = fruits.entries();
console.log(entriesFruits);
let entriesFruitsArray = Array.from(entriesFruits);
console.log(entriesFruitsArray);
let obj = Object.fromEntries(entriesFruitsArray);
console.log(obj);
months = ['Januar', 'Februar', 'Mar', 'April'];
console.log(months.with(2, 'March'));
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [...arr1, ...arr2];
console.log(arr3);
let q1 = ['Jan', 'Feb', 'Mar'];
let q2 = ['Apr', 'May', 'Jun'];
let q3 = ['Jul', 'Aug', 'Sep'];
let q4 = ['Oct', 'Nov', 'Des'];

let year = [...q1, ...q2, ...q3, ...q4];
console.log(year);
numbers = [23, 55, 21, 87, 56];
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);
console.log(minValue);
console.log(maxValue);

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


// Object Reference

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
