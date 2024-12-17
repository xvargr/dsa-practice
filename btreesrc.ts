interface INode {
  val: number;
  l: INode | null;
  r: INode | null;
}

const tree = {
  val: 10,
  l: {
    val: 5,
    l: {
      val: 3,
      l: null,
      r: null,
    },
    r: {
      val: 7,
      l: null,
      r: null,
    },
  },
  r: {
    val: 15,
    l: {
      val: 12,
      l: null,
      r: null,
    },
    r: {
      val: 18,
      l: null,
      r: null,
    },
  },
};

export function bTreeSearch(node: INode | null, target: number): boolean {
  if (node === null) return false;
  if (node.val === target) return true;
  if (target < node.val) return bTreeSearch(node.l, target);
  return bTreeSearch(node.r, target);
}

console.log("should be true", bTreeSearch(tree, 7));
console.log("should be true", bTreeSearch(tree, 18));
console.log("should be false", bTreeSearch(tree, 19));
