interface INode {
  val: number;
  l: INode | null;
  r: INode | null;
}

const tree1: INode = {
  val: 1,
  l: {
    val: 2,
    l: {
      val: 4,
      l: null,
      r: null,
    },
    r: {
      val: 5,
      l: null,
      r: null,
    },
  },
  r: {
    val: 3,
    l: null,
    r: null,
  },
};

const tree2: INode = {
  val: 1,
  l: {
    val: 2,
    l: {
      val: 4,
      l: null,
      r: null,
    },
    r: {
      val: 5,
      l: null,
      r: null,
    },
  },
  r: {
    val: 3,
    l: null,
    // r: null,
    r: {
      val: 13,
      l: null,
      r: null,
    },
  },
};

export function compare(a: INode | null, b: INode | null): boolean {
  console.log(a?.val ?? "x", b?.val ?? "x");
  if (a === null && b === null) return true;
  if (a === null || b === null) return false;
  if (a.val !== b.val) return false;
  return compare(a.l, b.l) && compare(a.r, b.r);
}

console.log("should be false", compare(tree1, tree2));
tree2.r!.r = null;
console.log("should be true", compare(tree1, tree2));
