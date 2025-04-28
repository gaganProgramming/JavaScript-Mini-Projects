## Arrays and Strings (sliding window, two pointers)

## Stack and Queue basics

## HashMap (object or Map in JS) problems

## Recursion basics (like factorial, Fibonacci)

# Suggested Questions Today:

## Reverse a string

## Find missing number in array

## Valid parentheses (stack problem)

## Two sum (easy HashMap problem)

## 1. Arrays and Strings(Sliding Window, Two Pointers)

### Two Pointers

Use two pointers(start and end) to **scan or shrink** a problem.

- Used for: **searching, reversing, moving windows**.

```js
function reverseArray(arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
```

# Sliding Window

- Used when dealing with subarrays(or substrings).
- Fixed size or dynamic size window moves across array/string.

**Example(max sum of window size k):**

```js
function maxSum(arr, k) {
  let maxSum = 0,
    windwowSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];

  maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
```

# 2. Stack and Queue Basics

Stack

- Last In first Out(LIFO).
- Push to add, pop to remove.

### use cases:

- Valid parentheses
- Undo functionality

## **Example**

```javascript
let stack = [];
stack.push(1);
stack.push(2);
stack.pop(); // removes 2
```

### Queue

- First In First Out(FIFO).
- Enqueue to add, dequeue to remove.

Ex

```js
let queue = [];
queue.push(1);
queue.push(2);
queue.shift(); //removes 1
```

3. HashMap(object or Map in JS)

Basics

- Store key-value pairs.
- Very fast for search, insert, delete.

**Example**

```js
let map = ();
map["apple"] = 2;
console.log(map["apple"]) //2
```

**Example**

```js
let map = new Map();
map.set("apple", 2);
console.log(map.get("apple")); //2
```

**Important:** Maps keep the **insertion order**, Objects don't guarantee.

**4. Recursion Basics**

- Function that calls itself.
- Every recursion must have a base case(to stop).

**Factorial Example**

```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
```

Recursion = Break problem into smaller problems until simplest version.

**1. Reverse a String**
(Using two Pointer)

```js
function reverseString(s) {
  let left = 0,
    right = s.length - 1;
  s = s.split("");
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s.join("");
}
```

## 2. Find Missing Number in Array(0 to n)

(Using Math Formula: n(n+1)/2)

```js
function missingNumber(nums) {
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = nums.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}
```

## 3. Valid Parentheses(stack)

```js
function isValid(s) {
  let stack = [];
  let map = { ")": "(", "}": "{", "]": "[" };

  for (let char of s) {
    if (!map[char]) {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) return false;
    }
  }
  return stack.length === 0;
}
```

## 4. Two Sum (Easy HashMap Problem)

```js
function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}
```
