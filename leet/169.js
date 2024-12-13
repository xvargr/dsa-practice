/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const freq = {};
  for (let i = 0; i < nums.length; i++) {
    freq[nums[i]] = (freq[nums[i]] ?? 0) + 1;
  }
  for (const num in freq) {
    console.log(num, freq[num]);
    if (freq[num] <= Math.floor(nums.length / 2)) continue;
    return +num;
  }
  return -1;
};

majorityElement([0]);
