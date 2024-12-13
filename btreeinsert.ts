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
    r: null,
  },
};

function attachNode(node: INode, value: number, position: "l" | "r") {
  node[position] = {
    val: value,
    l: null,
    r: null,
  };
  return node[position];
}

export function insert(
  node: INode | null,
  val: number,
  back: INode | null = null
): void {
  if (node === null) {
    attachNode(back!, val, val > back!.val ? "r" : "l");
    return;
  }
  if (val > node.val) return insert(node.r, val, node);
  return insert(node.l, val, node);
}

insert(tree, 0);
console.log("0 in correct position", tree.l.l.l.val === 0);
insert(tree, 18);
console.log("18 in correct position", tree.r.r.val === 18);
insert(tree, 16);
console.log("16 in correct position", tree.r.r.l.val === 16);
insert(tree, 17);
console.log("17 in correct position", tree.r.r.l.r.val === 17);
insert(tree, 17);
console.log("17 in correct position", tree.r.r.l.r.l.val === 17);
insert(tree, 10);
console.log(tree);
console.log("10 in correct position", tree.l.r.r === 10);
