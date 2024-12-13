export function binSearch(
  arr: number[],
  target: number,
  lo: number,
  hi: number
): number {
  if (hi < lo) return -1;
  const mid = Math.floor((hi - lo + 1) / 2) + lo;
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return binSearch(arr, target, lo, mid - 1);
  return binSearch(arr, target, mid + 1, hi);
}

const inp = [1, 2, 2, 3, 5, 7, 8, 9];

for (let i = 0; i < 10; i++) {
  console.log(i, binSearch(inp, i, 0, inp.length - 1));
}
