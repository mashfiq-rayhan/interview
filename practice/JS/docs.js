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
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
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
let letters = new Set(['a', 'b', 'c']);
// Create a Set
letters = new Set();
// Add Values to the Set
letters.add('a');
letters.add('b');
letters.add('c');

console.log(letters.size);
console.log(letters.has('a'));
console.log(letters.has('d'));
let vals = letters.values();
console.log(vals);
keys = letters.keys();
console.log(keys);
let entriesSet = letters.entries();
console.log(entriesSet);
let A = new Set(['a', 'b', 'c']);
let B = new Set(['b', 'c', 'd']);
let C = A.union(B);
console.log('union: ', C);
C = A.difference(B);
console.log('difference: ', C);
C = A.intersection(B);
console.log('intersection: ', C);
C = A.isDisjointFrom(B);
console.log('isDisjointFrom: ', C);
C = A.isSubsetOf(B);
console.log('isSubsetOf: ', C);
C = A.isSupersetOf(B);
console.log('isSupersetOf: ', C);
C = A.symmetricDifference(B);
console.log('symmetricDifference: ', C);

// WeakSet
let mySet = new WeakSet();
let myObj = { fname: 'John', lname: 'Doe' };
mySet.add(myObj);
let isIn = mySet.has(myObj);
console.log(isIn);

mySet = new WeakSet();
myObj = { fname: 'John', lname: 'Doe' };
mySet.add(myObj);
mySet.delete(myObj);
isIn = mySet.has(myObj);
console.log(isIn);

// Map Reference
fruits = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200]
]);
fruits.set('Mangoes', 500);
console.log(fruits);
console.log(fruits.get('bananas'));
console.log(fruits.size);
console.log(fruits.delete('Mangoes'));
console.log(fruits);
fruits.set('Mangoes', 500);
console.log(fruits);
console.log(fruits.has('Mangoes'));
fruits.forEach((value, key) => {
  console.log(key + ' = ' + value);
});
console.log(fruits.entries());
for (const [key, value] of fruits.entries()) {
  console.log(key + ' = ' + value);
}
console.log(fruits.keys());
console.log(fruits.values());
console.log();
