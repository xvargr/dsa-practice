/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < nums2.length; i++) {
    // console.log(i, nums1);
    nums1[m + i] = nums2[i];
    float(nums1, m + i);
  }
};

/**
 *
 * @param {number[]} arr
 * @param {number} idx
 * @returns
 */
function float(arr, idx) {
  // const parent = Math.floor(idx + 1 / 2);
  // console.log("F", arr, idx, idx - 1);
  if (idx === 0) return;
  if (arr[idx - 1] < arr[idx]) return;
  swap(arr, idx, idx - 1);
  float(arr, idx - 1);
}

/**
 *
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 */
function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

const a = [1, 2, 3, 0, 0, 0];
const b = [2, 5, 6];
merge(a, 3, b, 3);
console.log(a);

const c = [1];
const d = [];
merge(c, 1, d, 0);
console.log(c);

const e = [0];
const f = [1];
merge(e, 0, f, 1);
console.log(e);
