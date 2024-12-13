export class Heap {
  public len: number;
  public data: number[];

  constructor(arr?: number[]) {
    if (!arr) {
      this.data = [];
      this.len = 0;
      return;
    }
    this.data = arr;
    this.len = arr.length;
  }

  protected getParentIdx(childIdx: number): number {
    return Math.floor((childIdx - 1) / 2);
  }

  protected getChildrenIdx(parentIdx: number): [number, number] {
    return [parentIdx * 2 + 1, parentIdx * 2 + 2];
  }

  protected rise(idx: number): void {
    if (idx <= 0) return;
    const parentIdx = this.getParentIdx(idx);
    if (this.data[idx] >= this.data[parentIdx]) return;
    this.swap(idx, parentIdx);
    this.rise(parentIdx);
    return;
  }

  protected fall(idx: number): void {
    const [l, r] = this.getChildrenIdx(idx);

    if (l >= this.len) return; // No children
    let minIdx = l; // Assume left child is the smallest

    if (r < this.len && this.data[r] < this.data[l]) {
      minIdx = r; // Right child exists and is smaller
    }

    if (this.data[idx] <= this.data[minIdx]) return; // Heap property satisfied

    this.swap(idx, minIdx);
    this.fall(minIdx);
  }

  protected swap(a: number, b: number) {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
  }

  insert(val: number): void {
    this.data.push(val);
    this.rise(this.len++);
  }

  delete(): number {
    this.len--;
    // console.log(this.data);
    this.swap(0, this.len);
    // console.log(this.data);
    this.fall(0);
    return this.data.pop() ?? -1;
  }
}

const heap = new Heap([]);
console.log(heap.insert(4), heap.data);
console.log(heap.insert(34), heap.data);
console.log(heap.insert(12), heap.data);
console.log(heap.insert(1), heap.data);
console.log(heap.insert(7), heap.data);
console.log(heap.insert(19), heap.data);
console.log(heap.insert(3), heap.data);
console.log(heap.insert(25), heap.data);
console.log(heap.insert(8), heap.data);
console.log(heap.insert(15), heap.data);

let prev: number | null = null;
let fail = false;
while (heap.len > 0) {
  const curr = heap.delete();
  console.log(curr, heap.data);
  if (prev !== null && prev > curr) {
    fail = true;
    break;
  }
  prev = curr;
}

console.log(fail ? "btree is wrong" : "btree is correct");

// console.log(heap.delete(), heap.data);
