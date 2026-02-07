function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let write = 1; // position where next unique element should go

  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[write - 1]) {
      nums[write] = nums[read];
      write++;
    }
  }
  console.log(nums);
  return write;
}

// const nums: number[] = [1, 1, 2];
// console.log(removeDuplicates(nums));

const nums: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
