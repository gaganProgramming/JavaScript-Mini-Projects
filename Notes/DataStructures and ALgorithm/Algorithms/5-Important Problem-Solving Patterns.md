Here are the **Important Problem-Solving Patterns** that are essential for cracking **LeetCode** or **FAANG** interviews. These patterns are widely used in competitive programming and technical interviews.

---

### 1️⃣ **Sliding Window**

The **Sliding Window** technique is used to solve problems involving subarrays or substrings. It helps to track a range of elements in an array (or string) efficiently without having to check every possible subarray.

**Problem Types**: Longest subarray with at most two distinct characters, minimum window substring, maximum sum of a subarray of size `k`.

**Concept**: 
- You maintain a window that moves through the array.
- The window expands or contracts based on conditions (e.g., finding a valid substring or sum).

**Example:**
- **Problem**: Find the longest substring with at most two distinct characters.
  
```js
function longestSubstringTwoDistinct(s) {
  let left = 0, maxLen = 0;
  const map = new Map();
  
  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);
    
    while (map.size > 2) {
      map.set(s[left], map.get(s[left]) - 1);
      if (map.get(s[left]) === 0) map.delete(s[left]);
      left++;
    }
    
    maxLen = Math.max(maxLen, right - left + 1);
  }
  
  return maxLen;
}
console.log(longestSubstringTwoDistinct("eceba")); // Output: 3
```

---

### 2️⃣ **Two Pointers**

The **Two Pointers** technique uses two pointers to solve problems efficiently, typically involving arrays or linked lists. The pointers can be at the start and end, or at different positions in the array.

**Problem Types**: Sorting-related problems, searching, and problems with partitioning or finding pairs.

**Concept**:
- Use two pointers, one starting at the beginning and one at the end or moving toward each other.
- You can either move both pointers simultaneously or adjust one based on conditions.

**Example:**
- **Problem**: Check if a given array is a palindrome.

```js
function isPalindrome(arr) {
  let left = 0, right = arr.length - 1;
  
  while (left < right) {
    if (arr[left] !== arr[right]) return false;
    left++;
    right--;
  }
  
  return true;
}
console.log(isPalindrome([1, 2, 3, 2, 1])); // Output: true
```

---

### 3️⃣ **Fast & Slow Pointers (Floyd’s Cycle Detection)**

The **Fast and Slow Pointers** technique is often used to detect cycles in a linked list or to find the middle element of a linked list. This method is also known as **Floyd's Cycle Detection Algorithm** or **Tortoise and Hare**.

**Problem Types**: Cycle detection in a linked list, finding the middle element of a linked list.

**Concept**:
- Use two pointers: one moves slowly (one step at a time) and the other moves quickly (two steps at a time).
- If there is a cycle, the fast pointer will eventually meet the slow pointer.

**Example:**
- **Problem**: Detect cycle in a linked list.

```js
function hasCycle(head) {
  let slow = head, fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) return true;
  }
  
  return false;
}
```

---

### 4️⃣ **Merge Intervals**

The **Merge Intervals** pattern is used to merge overlapping intervals, often appearing in problems related to meeting times, ranges, or schedules.

**Problem Types**: Merging intervals, finding the total length covered by intervals, inserting new intervals into existing intervals.

**Concept**:
- Sort the intervals based on their starting points.
- Merge overlapping intervals by checking if the current interval overlaps with the previous one.

**Example:**
- **Problem**: Merge overlapping intervals.

```js
function mergeIntervals(intervals) {
  if (!intervals.length) return [];
  
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    const last = merged[merged.length - 1];
    const current = intervals[i];
    
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      merged.push(current);
    }
  }
  
  return merged;
}
console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])); // Output: [[1, 6], [8, 10], [15, 18]]
```

---

### 5️⃣ **Binary Search on Answer**

The **Binary Search on Answer** technique is useful for problems where you need to find the optimal answer within a range (such as finding the minimum or maximum value that satisfies a condition).

**Problem Types**: Finding the minimum possible time, distance, or any value that meets specific constraints.

**Concept**:
- You perform binary search on the answer rather than the array.
- Narrow the range by checking whether the mid value satisfies the condition.

**Example:**
- **Problem**: Find the minimum number of days to complete a task given a set of workers' rates.

```js
function minDaysToComplete(tasks, workers) {
  let left = 1, right = tasks.length;
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    
    if (canComplete(tasks, workers, mid)) right = mid;
    else left = mid + 1;
  }
  
  return left;
}
```

---

### 6️⃣ **Backtracking**

Backtracking is a technique used to solve problems that involve making a series of choices and trying all possibilities to find a solution. If a choice leads to an invalid solution, the algorithm **backtracks** and tries a different choice.

**Problem Types**: N-Queens problem, Sudoku solver, Subset generation.

**Concept**:
- Use recursion to explore all possible solutions.
- If you hit a dead end, backtrack and undo the previous choice.

**Example:**
- **Problem**: Solve the N-Queens problem.

```js
function solveNQueens(n) {
  const result = [];
  const board = Array(n).fill().map(() => Array(n).fill('.'));
  
  function backtrack(row) {
    if (row === n) {
      result.push(board.map(row => row.join('')));
      return;
    }
    
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = 'Q';
        backtrack(row + 1);
        board[row][col] = '.';
      }
    }
  }
  
  function isValid(row, col) {
    // Check if the column, left diagonal, and right diagonal are safe
    return true;
  }
  
  backtrack(0);
  return result;
}
```

---

### 7️⃣ **Greedy Algorithms**

Greedy algorithms make a series of choices that seem the best at the moment, with the hope of finding the global optimum. It’s used when local optimization leads to a global solution.

**Problem Types**: Interval scheduling, coin change (with specific constraints), fractional knapsack.

**Concept**:
- Always make the locally optimal choice at each step.
- Doesn’t always guarantee the best solution but works for problems where local optimal leads to a global optimum.

**Example:**
- **Problem**: Activity selection problem.

```js
function activitySelection(start, finish) {
  const n = start.length;
  let count = 1; // Always select the first activity
  let lastFinish = finish[0];
  
  for (let i = 1; i < n; i++) {
    if (start[i] >= lastFinish) {
      count++;
      lastFinish = finish[i];
    }
  }
  
  return count;
}
```

---

### 8️⃣ **Topological Sort**

Topological sorting is a linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge `u -> v`, `u` comes before `v` in the ordering.

**Problem Types**: Task scheduling, course prerequisite problems.

**Concept**:
- Use either DFS or Kahn’s algorithm to find the topological order.

**Example:**
- **Problem**: Find the course order from prerequisites.

```js
function findOrder(numCourses, prerequisites) {
  const adj = Array(numCourses).fill().map(() => []);
  const inDegree = Array(numCourses).fill(0);
  
  // Build the graph
  for (const [course, pre] of prerequisites) {
    adj[pre].push(course);
    inDegree[course]++;
  }
  
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  
  const order = [];
  while (queue.length) {
    const course = queue.shift();
    order.push(course);
    
    for (const neighbor of adj[course]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }
  
  return order.length === numCourses ? order : [];
}
```

---

### 9️⃣ **Trie (Prefix Trees)**

A **Trie** is a tree-like data structure that stores strings in a way that allows for efficient retrieval. It’s particularly useful for autocomplete, prefix matching, and dictionary-based problems.

**Problem Types**: Auto-completion, word search in a 2D grid.

**Concept**:
- Each node in the Trie represents a character of a string.
- Efficient for searching and prefix-based operations.

**Example:**
- **Problem**: Implement a trie to store and search words.

```js
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) node.children[char] = new TrieNode();
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEndOfWord;
  }
}
```

---

These patterns form the backbone of many **LeetCode** problems and **FAANG** interviews. Mastering them will improve your problem-solving skills and help you handle a wide variety of coding challenges efficiently.