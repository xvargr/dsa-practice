interface IGraph {
  [key: string]: string[];
}

// const graph: IGraph = {
//   a: ["b", "c"],
//   b: ["d", "f"],
//   c: ["e"],
//   d: ["g"],
//   e: ["b"],
//   f: [],
//   g: ["h", "i"],
//   h: [],
//   i: [],
// };
const graph: IGraph = {
  "1": ["2", "3", "4"],
  "2": ["5", "6", "3"],
  "3": ["10"],
  "4": ["7", "8"],
  "5": ["9", "10"],
  "7": ["11", "12"],
  "11": ["13"],
};

// export function bfs(
//   graph: IGraph,
//   target: string,
//   queue: string[],
//   visited: { [key: string]: boolean } = {}
// ): string[] {
//   const current = queue.shift();
//   console.log(current, queue);
//   if (current === undefined) return [];
//   if (visited[current]) return bfs(graph, target, queue, visited);
//   visited[current] = true;
//   if (current === target) return [current];
//   const children = graph[current] ?? [];
//   queue.push(...children);
//   const forward = bfs(graph, target, queue, visited);
//   return children.includes(forward[0]) ? [current, ...forward] : forward;
// }

export function bfs(graph: IGraph, target: string, start: string): boolean {
  const queue = [start];
  const visited = {};
  while (queue.length > 0) {
    const current = queue.shift()!;
    console.log(current);
    if (current === target) return true;
    if (visited[current]) continue;
    visited[current] = true;
    queue.push(...(graph[current] ?? []));
  }
  return false;
}

console.log("should be true", bfs(graph, "9", "1"));
console.log("should be false", bfs(graph, "0", "1"));
console.log("should be true", bfs(graph, "13", "1"));
console.log("should be false", bfs(graph, "14", "1"));
console.log("should be true", bfs(graph, "10", "1"));
