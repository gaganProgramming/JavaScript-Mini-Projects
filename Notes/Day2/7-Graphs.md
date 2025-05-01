Here's a comprehensive explanation of **🗺️ Graph** concepts with JavaScript-friendly examples:

---

## 🗺️ **Graphs in DSA**

A **graph** is a collection of **nodes (vertices)** connected by **edges**. Graphs can be:

- **Directed or Undirected**
- **Weighted or Unweighted**
- **Cyclic or Acyclic**

---

## 1️⃣ **Adjacency List vs Adjacency Matrix**

| Feature | Adjacency List | Adjacency Matrix |
|--------|----------------|------------------|
| Storage | `{A: [B, C]}` | 2D array: `matrix[A][B] = 1` |
| Space | Efficient for sparse graphs | Requires O(V²) space |
| Use Case | Most general problems | Dense graphs or matrix-based problems |

**Example:**

### Adjacency List:

```js
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['D'],
  D: []
};
```

### Adjacency Matrix (Unweighted):

```js
const matrix = [
  // A  B  C  D
  [0, 1, 1, 0], // A
  [0, 0, 0, 1], // B
  [0, 0, 0, 1], // C
  [0, 0, 0, 0]  // D
];
```

---

## 2️⃣ **BFS and DFS (Graph Traversals)**

### 🔍 **BFS (Breadth-First Search)**

- Uses a **queue**
- Explores level by level
- Good for shortest path in unweighted graphs

```js
function bfs(graph, start) {
  let visited = new Set();
  let queue = [start];

  while (queue.length) {
    let node = queue.shift();
    if (visited.has(node)) continue;

    console.log(node);
    visited.add(node);
    for (let neighbor of graph[node]) {
      queue.push(neighbor);
    }
  }
}
```

### 🔍 **DFS (Depth-First Search)**

- Uses a **stack** (or recursion)
- Goes deep before backtracking

```js
function dfs(graph, start, visited = new Set()) {
  if (visited.has(start)) return;

  console.log(start);
  visited.add(start);

  for (let neighbor of graph[start]) {
    dfs(graph, neighbor, visited);
  }
}
```

---

## 3️⃣ **Dijkstra’s Algorithm (Shortest Path - Weighted Graph)**

- Greedy algorithm for **shortest path**
- Works with **positive weights only**
- Uses a **priority queue** (min-heap)

Basic version:

```js
function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  const pq = new MinPriorityQueue(); // Use npm pkg or your own min heap

  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;
  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    const { element: current } = pq.dequeue();
    if (visited.has(current)) continue;
    visited.add(current);

    for (let [neighbor, weight] of graph[current]) {
      let dist = distances[current] + weight;
      if (dist < distances[neighbor]) {
        distances[neighbor] = dist;
        pq.enqueue(neighbor, dist);
      }
    }
  }

  return distances;
}
```

---

## 4️⃣ **Topological Sort**

Used in **DAGs (Directed Acyclic Graphs)** to **order tasks** based on dependencies.

```js
function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);

    for (let neighbor of graph[node]) {
      dfs(neighbor);
    }
    stack.push(node);
  }

  for (let node in graph) {
    dfs(node);
  }

  return stack.reverse();
}
```

---

## 5️⃣ **Cycle Detection**

### 🔁 In Directed Graph (DFS + recursion stack):

```js
function hasCycle(graph) {
  const visited = new Set();
  const recStack = new Set();

  function dfs(node) {
    if (recStack.has(node)) return true;
    if (visited.has(node)) return false;

    visited.add(node);
    recStack.add(node);

    for (let neighbor of graph[node]) {
      if (dfs(neighbor)) return true;
    }

    recStack.delete(node);
    return false;
  }

  for (let node in graph) {
    if (dfs(node)) return true;
  }

  return false;
}
```

---

## 6️⃣ **Union-Find (Disjoint Set Union - DSU)**

Used for **cycle detection** and **connected components** in undirected graphs.

```js
class UnionFind {
  constructor(n) {
    this.parent = Array(n).fill(0).map((_, i) => i);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // path compression
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return false; // cycle
    this.parent[rootY] = rootX;
    return true;
  }
}
```

---

## ✅ Summary Table

| Concept | Use Case | Notes |
|--------|----------|-------|
| Adjacency List/Matrix | Graph storage | List = efficient, Matrix = dense |
| BFS / DFS | Traversal / Search | BFS = shortest path, DFS = topological sort |
| Dijkstra | Shortest path in weighted graph | No negative weights |
| Topological Sort | Task ordering (DAG) | Use DFS and stack |
| Cycle Detection | Detect loops | DFS (directed), DSU (undirected) |
| Union-Find | Disjoint sets, Kruskal's MST | Fast with path compression |

---

Would you like a **visual cheat sheet** or beginner-level graph problems to practice these?