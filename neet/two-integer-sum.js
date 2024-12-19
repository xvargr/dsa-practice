class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const map = {};
    for (let i in nums) {
      map[nums[i]] = map[nums[i]]
        ? [map[nums[i]][0] + 1, [...map[nums[i]][1], i]]
        : [1, [i]];
    }
    console.log(map);
    for (let j in map) {
      const diff = target - j;
      const exists = map[diff];
      console.log(j, diff, exists);
      if (!exists) continue;
      if (diff === j && exists[1].length < 2) continue;
      return +j > diff
        ? [+map[diff][1].shift(), +map[j][1].shift()]
        : [+map[j][1].shift(), +map[diff][1].shift()];
    }
  }
}

console.log(
  new Solution().twoSum([1, 2, 3, 1], 4),
  new Solution().twoSum([2, 2], 4)
);
