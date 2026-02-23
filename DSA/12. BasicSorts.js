//////////////////////////////////////////
/// BUBBLE SORT
//////////////////////////////////////////
function BubbleSort(A) {
  for (let i = A.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (A[j] > A[j + 1]) {
        [A[j], A[j + 1]] = [A[j + 1], A[j]];
      }
    }
  }
  return arr;
}

const bblsrt = BubbleSort([4, 2, 6, 5, 1, 3]);
console.log(bblsrt);

//////////////////////////////////////////
/// INSERTION SORT
//////////////////////////////////////////
function InsertionSort(A) {
  for (let i = 1; i < A.length; i++) {
    for (let j = i; j > 0; j--) {
      if (A[j] < A[j - 1]) {
        [A[j], A[j - 1]] = [A[j - 1], A[j]];
      } else {
        break;
      }
    }
  }
  return A;
}

const insrtnsrt = InsertionSort([4, 2, 6, 5, 1, 3]);
console.log(insrtnsrt);

//////////////////////////////////////////
/// SELECTION SORT
//////////////////////////////////////////
function SelectionSort(A) {
  for (let i = 0; i < A.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < A.length; j++) {
      if (A[min] > A[j]) min = j;
    }
    if (i !== min) {
      [A[i], A[min]] = [A[min], A[i]];
    }
  }
  return A;
}

const slctnsrt = SelectionSort([4, 2, 6, 5, 1, 3]);
console.log(slctnsrt);
