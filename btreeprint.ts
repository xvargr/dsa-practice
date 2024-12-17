interface INode {
  val: number;
  l: INode | null;
  r: INode | null;
}

const tree: INode = {
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

const res: number[] = [];

export function btreeprint(node: INode | null): void {
  if (!node) return;
  btreeprint(node.l);
  // console.log(node.val);
  res.push(node.val);
  btreeprint(node.r);
}

console.log(btreeprint(tree));
console.log(res);
