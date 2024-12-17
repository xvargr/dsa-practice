export function qs(arr: number[], lo: number, hi: number): void {
  if (hi - lo < 1) return;
  const mid = part(arr, lo, hi);
  qs(arr, lo, mid - 1);
  qs(arr, mid + 1, hi);
}

function part(arr: number[], lo: number, hi: number): number {
  const pivotIdx = Math.floor((Math.random() * (hi - lo + 1)) / 2) + lo;
  swap(arr, pivotIdx, hi);
  let i = lo - 1;
  for (let j = lo; j < hi; j++) {
    if (arr[j] >= arr[hi]) continue;
    i++;
    swap(arr, i, j);
  }
  i++;
  swap(arr, i, hi);
  return i;
}

function swap(arr: number[], first: number, second: number) {
  [arr[first], arr[second]] = [arr[second], arr[first]];
}

const inp = [2, 1, 3, 2, 5, 3, 8, 9, 5, 4, 2, 0, 3];

qs(inp, 0, inp.length - 1);
console.log(inp);
