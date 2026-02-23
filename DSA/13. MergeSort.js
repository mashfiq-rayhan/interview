function merge(array1, array2) {
  const combined = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combined.push(array1[i]);
      i++;
    } else {
      combined.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    combined.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    combined.push(array2[j]);
    j++;
  }
  return combined;
}

const merged = merge([1, 3, 5, 7], [2, 4, 6, 8, 9]);
console.log(merged);

function mergeSort(array) {
  if (array.length <= 1) return array;
  const midIndex = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, midIndex));
  const right = mergeSort(array.slice(midIndex));
  return merge(left, right);
}

const mergedSorted = mergeSort([3, 1, 4, 2]);
console.log(mergedSorted);
