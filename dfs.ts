interface IGraph {
  [key: string]: string[];
}

const graph: IGraph = {
  "1": ["2", "3", "4"],
  "2": ["5", "6", "3"],
  "3": ["10"],
  "4": ["7", "8"],
  "5": ["9", "10"],
  "7": ["11", "12"],
  "11": ["13"],
};

export function dfs(
  graph: IGraph,
  target: string,
  stack: string[],
  visited: { [key: string]: boolean } = {}
): string[] {
  const current = stack.pop();
  console.log(current);
  if (!current) return [];
  if (visited[current]) return dfs(graph, target, stack, visited);
  visited[current] = true;
  if (current === target) return [current];
  const children = graph[current] ?? [];
  stack.push(...children);
  const forward = dfs(graph, target, stack, visited);
  return children.includes(forward[0]) ? [current, ...forward] : forward;
}

console.log(dfs(graph, "13", ["1"]));
console.log(dfs(graph, "9", ["1"]));
console.log(dfs(graph, "0", ["1"]));
