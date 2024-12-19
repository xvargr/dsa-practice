/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  return bSearchArr(matrix, target, 0, matrix.length-1)
};

function bSearch(arr, target, lo, hi) {
  if (hi<lo) return false;
  const mid = Math.floor((hi-lo+1)/2)+lo;
  // console.log('b', arr, target, lo, mid, hi)
  if(arr[mid]===target) return true;
  if(target>arr[mid]) return bSearch(arr, target, mid+1, hi);
  return bSearch(arr, target, lo, mid-1);
}

function bSearchArr(arr, target, lo, hi) {
  if (hi<lo) return false;
  const mid = Math.floor((hi-lo+1)/2)+lo;
  // console.log('a', arr, target, lo, mid, hi);
  // console.log(target, arr[mid], arr[mid][arr[mid].length-1], arr[mid][0])
  if (target>arr[mid][arr[mid].length-1]) return bSearchArr(arr, target, mid+1, hi);
  if (target<arr[mid][0]) return bSearchArr(arr, target, lo, mid-1);
  return bSearch(arr[mid], target, 0, arr[mid].length-1);
}