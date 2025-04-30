/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const count = {};

  for (let num of nums) {
    if (count[num] === 1) {
      delete count[num];
      continue;
    }
    count[num] = 1;
  }

  return +Object.keys(count)[0];
};

console.log(singleNumber([4, 1, 2, 1, 2]));
