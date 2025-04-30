/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const count = {};

  for (let num of nums) {
    if (count[num] === 2) {
      delete count[num];
      continue;
    }
    count[num] = count[num] ? count[num] + 1 : 1;
  }

  return +Object.keys(count)[0];
};

console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
