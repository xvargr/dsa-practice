// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function (nums) {
//   let left = 0;
//   let right = 0;
//   let runningVal = 0;
//   let max = [null, null, -Infinity];

//   while (right < nums.length) {
//     console.log(nums[right]);

//     runningVal = runningVal + nums[right];

//     if (runningVal === Math.max(max[2], runningVal)) {
//       max = [left, right, runningVal];
//     }

//     console.log(max);

//     right++;
//   }
// };

// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
