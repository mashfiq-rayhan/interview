class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  #hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this.#hash(key);
    if (!this.dataMap[index]) this.dataMap[index] = [];
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this.#hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) return this.dataMap[index][i][1];
      }
    }
    return undefined;
  }

  keys() {
    let allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}

let myHashTable = new HashTable();
console.log(myHashTable);

const bolts = myHashTable.set("bolts", 100);
console.log(bolts);

const lumber = myHashTable.set("lumber", 70);
console.log(lumber);

const washers = myHashTable.set("washers", 1000);
console.log(washers);

console.log(myHashTable);

const getBolts = myHashTable.get("bolts");
console.log(getBolts);

const getLumber = myHashTable.get("lumber");
console.log(getLumber);

const getWashers = myHashTable.get("washers");
console.log(getWashers);

const allkeys = myHashTable.keys();
console.log(allkeys);

// Check Item in Common > n^2
// function ItemInCommon(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) return true;
//     }
//   }
//   return false;
// }

// let arr1 = [1, 3, 5];
// let arr2 = [2, 4, 5];

// const isCommon = ItemInCommon(arr1, arr2);
// console.log(isCommon);

// arr1 = [1, 3, 5];
// arr2 = [2, 4, 6];

// const notCommon = ItemInCommon(arr1, arr2);
// console.log(notCommon);

// Check Item in Common > n
function ItemInCommon(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) return true;
  }
  return false;
}

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 5];

const isCommon = ItemInCommon(arr1, arr2);
console.log(isCommon);

arr1 = [1, 3, 5];
arr2 = [2, 4, 6];

const notCommon = ItemInCommon(arr1, arr2);
console.log(notCommon);
