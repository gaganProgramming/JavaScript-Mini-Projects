### 🧠 **Dynamic Programming (DP)**

**Dynamic Programming (DP)** is a technique used to solve problems by breaking them down into simpler subproblems and solving each subproblem only once, storing the results to avoid redundant work. DP is particularly useful in optimization problems where we need to make decisions that will lead to the optimal solution.

---

### **Key Concepts in Dynamic Programming**

1. **Memoization vs Tabulation**:
   - **Memoization**: A top-down approach where we solve the problem recursively and store the results of subproblems in a data structure (usually an array or object) to avoid redundant computations.
   - **Tabulation**: A bottom-up approach where we solve all subproblems iteratively and store the results in a table (array or matrix), usually starting from the simplest subproblems.

#### **Memoization** (Top-Down):
- The recursive approach, but stores results in a cache (dictionary or array) for reuse.
  
```js
// Memoization example: Fibonacci series
function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
console.log(fib(6)); // Output: 8
```

#### **Tabulation** (Bottom-Up):
- Solve problems iteratively, starting from the simplest subproblem (often a base case) and building up to the solution.

```js
// Tabulation example: Fibonacci series
function fib(n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
console.log(fib(6)); // Output: 8
```

---

### **Common Dynamic Programming Problems**

---

### 1️⃣ **Fibonacci Sequence**

A classic example of DP is the **Fibonacci Sequence**, where each number is the sum of the two preceding ones.

**Problem**: Find the `n`th Fibonacci number.

- **Recursive Formula**: `fib(n) = fib(n-1) + fib(n-2)`
- **Base Case**: `fib(0) = 0`, `fib(1) = 1`

---

### 2️⃣ **Climbing Stairs**

You are given `n` stairs, and you can take either 1 or 2 steps at a time. The task is to find the number of distinct ways to reach the top.

**Problem**: Find the number of ways to reach the `n`th step.

- **Recursive Formula**: `ways(n) = ways(n - 1) + ways(n - 2)`
- **Base Case**: `ways(0) = 1`, `ways(1) = 1`

```js
function climbStairs(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(climbStairs(5)); // Output: 8
```

---

### 3️⃣ **Knapsack Problem**

The **Knapsack Problem** is about selecting items with given weights and values to maximize the total value, subject to a weight constraint.

**Problem**: Given `n` items, each with a value and weight, and a knapsack with a weight capacity `W`, determine the maximum value that can be obtained.

- **Recursive Formula**: 
  - `knapsack(i, W) = max(knapsack(i - 1, W), knapsack(i - 1, W - wt[i]) + val[i])`
- **Base Case**: `knapsack(0, W) = 0`

```js
function knapsack(weights, values, W) {
  const n = weights.length;
  const dp = Array(n + 1).fill().map(() => Array(W + 1).fill(0));
  
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  
  return dp[n][W];
}

console.log(knapsack([1, 2, 3], [60, 100, 120], 5)); // Output: 220
```

---

### 4️⃣ **Coin Change Problem**

The **Coin Change Problem** asks how many ways you can make change for a given amount using a set of coin denominations.

**Problem**: Given an amount `S` and coin denominations, find the minimum number of coins needed to make that amount.

- **Recursive Formula**: 
  - `dp[i] = min(dp[i], dp[i - coin] + 1)` for each coin denomination
- **Base Case**: `dp[0] = 0`

```js
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  
  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 5], 11)); // Output: 3
```

---

### 5️⃣ **Longest Common Subsequence (LCS)**

The **Longest Common Subsequence** (LCS) is a problem that finds the longest subsequence (not necessarily contiguous) that two sequences have in common.

**Problem**: Find the longest subsequence that two strings share.

- **Recursive Formula**:
  - `LCS(i, j) = 1 + LCS(i - 1, j - 1)` if `str1[i] == str2[j]`
  - `LCS(i, j) = max(LCS(i - 1, j), LCS(i, j - 1))` if `str1[i] != str2[j]`
  
```js
function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(longestCommonSubsequence("abcde", "ace")); // Output: 3
```

---

### 6️⃣ **DP on Strings, Grids, and Trees**

- **DP on Strings**:
  - String manipulation problems, such as **Edit Distance**, **Palindrome Partitioning**, or **Longest Palindromic Subsequence**, can often be solved using DP.
  
- **DP on Grids**:
  - Problems like **Unique Paths** or **Minimum Path Sum** are solved using DP by traversing the grid either from top to bottom or left to right, calculating the best path to each cell.
  
- **DP on Trees**:
  - DP can be used in tree problems like **Diameter of Binary Tree**, **Max Path Sum in Binary Tree**, or **Binary Tree Maximum Path Sum** by calculating values from the leaf nodes up to the root.

---

### **Summary of Dynamic Programming Concepts**

| **Concept**                   | **Description**                                                                                             |
|-------------------------------|-------------------------------------------------------------------------------------------------------------|
| **Memoization**                | Top-down approach, store intermediate results to avoid redundant calculations.                               |
| **Tabulation**                 | Bottom-up approach, solve subproblems iteratively starting from the base case.                              |
| **Fibonacci**                  | The sum of the two preceding numbers in the sequence.                                                        |
| **Climbing Stairs**            | Find the number of distinct ways to reach the top of `n` stairs.                                              |
| **Knapsack Problem**           | Maximize value under a weight constraint.                                                                    |
| **Coin Change Problem**        | Find the minimum number of coins needed to make a given amount.                                              |
| **Longest Common Subsequence** | Find the longest subsequence that two strings share.                                                        |
| **DP on Strings**              | Problems involving string matching, transformations, or partitioning.                                        |
| **DP on Grids**                | Problems involving navigating grids with constraints like unique paths or minimal sums.                     |
| **DP on Trees**                | Problems involving tree traversal or maximizing path sums in a tree.                                        |

---

Let me know if you need further clarification or more examples on any specific problem!