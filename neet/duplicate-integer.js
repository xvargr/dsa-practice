class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const freq = {};

    for (let i of nums) {
      if (freq[i]) return true;
      freq[i] = true;
    }

    return false;
  }
}

new Solution().hasDuplicate(["a", "b", "c"]);
