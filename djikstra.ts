interface INode {
  [key: string]: number;
}
interface IGraph {
  [key: string]: INode;
}
interface IDijColumn {
  from: string;
  distance: string;
}
interface IDijTable {
  [key: string]: IDijColumn;
}

const graph = {
  s: { a: 6, b: 2 },
  a: { e: 1 },
  b: { a: 3, e: 5 },
  e: {},
};

export function djikstra(
  graph: IGraph,
  start: string,
  target: string,
  table: IDijTable = {}
): string[] {
  const queue: IDijColumn[] = [graph[start]];
  while (queue.length > 0) {
    const current = graph[queue.shift() as string];
  }
}

console.log(djikstra(graph, "s", "e"));
