/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const past = {};
  for (let idx in nums) {
    const val = nums[idx];
    const diff = target - val;

    // console.log(val, diff);
    if (!past[diff]) {
      if (!past[val]) past[val] = [];
      past[val].push(idx);
      continue;
    }

    // console.log("hey" + val + diff);
    return [past[diff][0], idx];
  }
  // console.log(past);
  return [];
};

let arr = [1, 1, 2, 7, 11, 15];
let target = 9;
console.log(twoSum(arr, target));

arr = [3, 3];
target = 6;
console.log(twoSum(arr, target));

arr = [];
target = 1;
console.log(twoSum(arr, target));
