### 🔗 **Recursion & Backtracking**

**Recursion** and **Backtracking** are powerful techniques used to solve problems that involve exploring all possibilities, often involving multiple steps or decisions. Let’s break these concepts down:

---

### **Recursion**

Recursion occurs when a function calls itself to solve smaller instances of a problem. It's especially useful when the problem can be broken down into similar sub-problems.

#### **Key Features of Recursion:**
1. **Base Case**: The simplest scenario that does not require recursion.
2. **Recursive Case**: A situation where the function calls itself, breaking the problem into smaller parts.

#### **Example of Recursion: Factorial**

```js
function factorial(n) {
  // Base case
  if (n === 0) return 1;
  
  // Recursive case
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

In this example, the factorial of a number `n` is calculated by multiplying `n` with the factorial of `n-1` until it reaches `0` (the base case).

---

### **Backtracking**

Backtracking is a more advanced form of recursion, used for problems that involve making a series of choices or decisions. It explores all possible solutions by building a solution incrementally and discarding it if it is determined not to lead to a valid solution (hence "backtracking").

---

### **Common Problems Solved Using Recursion & Backtracking**

---

### 1️⃣ **Subsets, Permutations, Combinations**

- **Subsets**: All possible subsets of a set. A subset is any combination of elements, including the empty set and the full set.
- **Permutations**: All possible arrangements of a set of elements.
- **Combinations**: All possible selections of elements from a set without regard to the order.

#### **Subset Example**:

For a set `{1, 2, 3}`, the subsets are `{}`, `{1}`, `{2}`, `{3}`, `{1, 2}`, `{1, 3}`, `{2, 3}`, `{1, 2, 3}`.

```js
function subsets(nums) {
  let result = [];
  
  function backtrack(start, currentSubset) {
    result.push([...currentSubset]);
    
    for (let i = start; i < nums.length; i++) {
      currentSubset.push(nums[i]);
      backtrack(i + 1, currentSubset);
      currentSubset.pop(); // Backtrack
    }
  }
  
  backtrack(0, []);
  return result;
}

console.log(subsets([1, 2, 3]));
```

---

### 2️⃣ **N-Queens Problem**

The **N-Queens Problem** is a classic problem where the task is to place `n` queens on an `n x n` chessboard such that no two queens threaten each other. In other words, no two queens can be in the same row, column, or diagonal.

#### **Solution Approach**:
1. **Recursive Function**: Place queens row by row.
2. **Backtracking**: If placing a queen leads to an invalid position, remove the queen and try the next possibility.

```js
function solveNQueens(n) {
  const board = Array(n).fill().map(() => Array(n).fill('.'));
  const result = [];

  function isValid(board, row, col) {
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }
    // Check diagonal
    for (let i = 0; i < row; i++) {
      if (board[i][col - (row - i)] === 'Q' || board[i][col + (row - i)] === 'Q') {
        return false;
      }
    }
    return true;
  }

  function backtrack(row) {
    if (row === n) {
      result.push(board.map(row => row.join('')));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(board, row, col)) {
        board[row][col] = 'Q';
        backtrack(row + 1);
        board[row][col] = '.'; // Backtrack
      }
    }
  }

  backtrack(0);
  return result;
}

console.log(solveNQueens(4));
```

---

### 3️⃣ **Maze/Path Problems**

In **Maze Path Problems**, the goal is to find a path through a maze. Usually, this problem is represented as a grid of `0`'s (free space) and `1`'s (walls). The objective is to find a path from the top-left corner to the bottom-right corner while avoiding walls.

#### **Solution Approach**:
- Use **DFS** (Depth-First Search) or **BFS** (Breadth-First Search) along with **Backtracking** to explore all potential paths.

```js
function findPath(maze, row, col, path = []) {
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const n = maze.length;

  if (row < 0 || row >= n || col < 0 || col >= n || maze[row][col] === 1) return false;
  
  // Mark the current cell as visited
  maze[row][col] = 1;
  path.push([row, col]);

  // If we reach the destination (bottom-right corner)
  if (row === n - 1 && col === n - 1) {
    return true;
  }

  // Explore the next cells
  for (const [dx, dy] of directions) {
    if (findPath(maze, row + dx, col + dy, path)) {
      return true;
    }
  }

  // Backtrack
  path.pop();
  maze[row][col] = 0; // Unmark the cell
  return false;
}

let maze = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0]
];

let path = [];
if (findPath(maze, 0, 0, path)) {
  console.log('Path:', path);
} else {
  console.log('No path found');
}
```

---

### 4️⃣ **Sudoku Solver**

A **Sudoku Solver** uses recursion and backtracking to fill in the missing numbers in a Sudoku grid while ensuring that all constraints (each row, column, and 3x3 sub-grid must contain all digits from 1 to 9) are satisfied.

#### **Solution Approach**:
1. **Recursive Backtracking**: Try to place digits 1 through 9 in empty cells.
2. **Check Validity**: Ensure that each placed number follows Sudoku rules.
3. **Backtrack**: If a valid configuration cannot be found, backtrack and try a different number.

```js
function solveSudoku(board) {
  function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num || board[i][col] === num) return false;
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[startRow + i][startCol + j] === num) return false;
      }
    }
    return true;
  }

  function backtrack(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === '.') {
          for (let num = 1; num <= 9; num++) {
            if (isValid(board, i, j, num.toString())) {
              board[i][j] = num.toString();
              if (backtrack(board)) return true;
              board[i][j] = '.'; // Backtrack
            }
          }
          return false; // No valid number can be placed
        }
      }
    }
    return true; // Sudoku solved
  }

  backtrack(board);
}

// Example Sudoku
let board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '9', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

solveSudoku(board);
console.log(board); // The board will now be solved.
```

---

### **Summary of Recursion & Backtracking Concepts**

| **Concept**                | **Description**                                                                                       |
|----------------------------|-------------------------------------------------------------------------------------------------------|
| **Recursion**               | A function calling itself to solve smaller sub-problems. Useful in problems like factorial, Fibonacci.  |
| **Backtracking**            | A form of recursion to explore multiple potential solutions by building incrementally and undoing invalid choices. |
| **Subsets**                 | Find all possible subsets of a set.                                                                  |
| **Permutations**            | Find all possible arrangements of a set of elements.                                                  |
| **Combinations**            | Find all possible selections from a set without regard to order.                                      |
| **N-Queens Problem**        | Place `n` queens on an `n x n` board such that no two queens threaten each other.                    |
| **Maze Path Problem**       | Find a path through a maze from start to end while avoiding walls.                                    |
| **Sudoku Solver**           | Solve a Sudoku puzzle using backtracking to ensure each row, column, and sub-grid contains digits 1-9. |

---

