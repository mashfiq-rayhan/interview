// function swap(A, index1, index2) {
//   [A[index1], A[index2]] = [A[index2], A[index1]];
// }

function pivot(A, pivotIndex = 0, endIndex = A.length - 1) {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (A[i] < A[pivotIndex]) {
      swapIndex++;
      // swap(A, swapIndex, i);
      [A[swapIndex], A[i]] = [A[i], A[swapIndex]];
    }
  }
  // swap(A, pivotIndex, swapIndex);
  [A[pivotIndex], A[swapIndex]] = [A[swapIndex], A[pivotIndex]];
  return swapIndex;
}

let myArray = [4, 6, 1, 7, 3, 2, 5];

const piV = pivot(myArray);
console.log(piV);
console.log(myArray);

function quickSort(A, left = 0, right = A.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(A, left, right);
    quickSort(A, left, pivotIndex - 1);
    quickSort(A, pivotIndex + 1, right);
  }
  return A;
}

const qksrt = quickSort([4, 6, 1, 7, 3, 2, 5]);
console.log(qksrt);
