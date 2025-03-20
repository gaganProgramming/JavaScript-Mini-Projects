Here are some **frontend-focused DSA questions** categorized based on key topics:  



# **📌 Arrays & Strings (Most Common)**
1. **Two Sum** → Given an array of numbers and a target sum, return the indices of the two numbers that add up to the target.  
2. **Longest Substring Without Repeating Characters** → Find the length of the longest substring without repeating characters in a given string.  
3. **Reverse Words in a String** → Given `"Hello World"`, return `"World Hello"`.  
4. **Find First Non-Repeating Character** → In `"aabbccdeff"`, return `'d'`.  
5. **Rotate Array** → Rotate `[1,2,3,4,5]` by `k = 2` places to get `[4,5,1,2,3]`.  
6. **Find Missing Number** → Given `[3,0,1]`, find the missing number from `0` to `n`.  
7. **Find Duplicate in an Array** → Given `[1,3,4,2,2]`, return `2`.  
8. **Group Anagrams** → Given `["eat", "tea", "tan", "ate", "nat", "bat"]`, return `[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]`.  
9. **Check If a String is a Palindrome** → `"racecar"` should return `true`.  
10. **Implement String Compression** → `"aabcccccaaa"` → `"a2b1c5a3"`.  

---

### **📌 Stacks & Queues (Event Handling, Undo/Redo, Browser History)**
1. **Valid Parentheses** → Check if `"({[]})"` is balanced.  
2. **Implement a Stack using Queues** (and vice versa).  
3. **Min Stack** → Implement a stack that supports push, pop, and retrieving the minimum element in constant time.  
4. **Next Greater Element** → Given `[4,5,2,25]`, return `[5,25,25,-1]`.  
5. **LRU Cache Implementation** → Design a **Least Recently Used (LRU) cache** using a queue and hash map.  
6. **Implement Browser Forward/Backward Navigation** → Using two stacks, implement a browser’s back and forward buttons.  
7. **Decode String** → `"3[a2[c]]"` should return `"accaccacc"`.  
8. **Basic Calculator** → Implement a simple arithmetic expression evaluator (`"3 + 5 * 2"`).  
9. **Simplify File Path** → Convert `"/a/./b/../../c/"` to `"/c"`.  
10. **Sliding Window Maximum** → Find the max value in a moving window of size `k`.  

---

### **📌 Sorting & Searching (Pagination, Filtering, Auto-suggestions)**
1. **Binary Search** → Find the index of `target` in a sorted array.  
2. **Kth Largest Element** → Find the 3rd largest element in `[3,2,3,1,2,4,5,5,6]`.  
3. **Sort Colors (Dutch National Flag Algorithm)** → Given `[2,0,2,1,1,0]`, sort it in-place as `[0,0,1,1,2,2]`.  
4. **Merge Intervals** → Merge overlapping intervals like `[[1,3], [2,6], [8,10]]`.  
5. **Search in Rotated Sorted Array** → Given `[4,5,6,7,0,1,2]`, find `target = 0`.  
6. **Autocomplete Suggestion System** → Implement an efficient search to return top `k` suggestions.  
7. **Top K Frequent Elements** → Given `[1,1,1,2,2,3]` and `k = 2`, return `[1,2]`.  
8. **Find Peak Element** → In `[1,2,3,1]`, `3` is a peak element.  
9. **Meeting Rooms** → Given meeting intervals `[[0,30],[5,10],[15,20]]`, find the minimum meeting rooms required.  
10. **Find Median of a Data Stream** → Design a class that supports finding the median efficiently as new numbers arrive.  

---

### **📌 Trees (DOM Structure, React’s Reconciliation Algorithm)**
1. **Invert a Binary Tree** → Swap the left and right child nodes of every node.  
2. **Lowest Common Ancestor (LCA) in a Binary Tree**.  
3. **Serialize and Deserialize a Binary Tree** → Convert a tree to a string and reconstruct it.  
4. **Binary Tree Level Order Traversal** → Print nodes level by level.  
5. **Check if a Binary Tree is Balanced**.  
6. **Count the Number of Nodes in a Complete Binary Tree**.  
7. **Maximum Depth of a Binary Tree**.  
8. **React Fiber Tree Simulation** → Implement a function that models a React Fiber reconciliation tree.  
9. **Convert a Sorted Array to a Binary Search Tree (BST)**.  
10. **Find All Paths in a Tree from Root to Leaf**.  

---

### **📌 Recursion (Nested Components, JSON Parsing)**
1. **Flatten a Nested JSON Object** → Convert  
   ```json
   { "a": { "b": { "c": 1 } } }
   ```
   to  
   ```json
   { "a.b.c": 1 }
   ```
2. **Deep Clone an Object (Without JSON.stringify)**.  
3. **Generate All Subsets of a Given Set**.  
4. **Generate All Permutations of a Given Array**.  
5. **Find the Nth Fibonacci Number (Recursive & Memoized)**.  
6. **Power Function (`x^n`) Using Recursion**.  
7. **Print All Valid Parentheses Combinations** → Given `n = 3`, return `["((()))", "(()())", "(())()", "()(())", "()()()"]`.  
8. **Recursive String Reversal**.  
9. **Tower of Hanoi** → Move `n` disks from `A` to `C` using `B` as an auxiliary.  
10. **Find the Maximum Depth of a Nested List** → Given `[[1,2],[3,[4,5]],6]`, return `3`.  

---

💡 **Which category do you want to focus on first?** I can provide solutions or hints based on your preference! 😊



<br>

# Solution of Arrays and String
Here’s the **structured implementation** of all the **Arrays & Strings** problems from above, following a **step-by-step approach** to help you master them effectively.  

---

## **🔥 1. Two Sum**  
👉 **Concept:** Use a **Hash Map** for quick lookups (**O(n) time**).  

```javascript
function twoSum(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]; // Return indices
        }
        map.set(nums[i], i);
    }
    return [];
}

// ✅ Test
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0,1]
```

---

## **🔥 2. Longest Substring Without Repeating Characters**  
👉 **Concept:** Use a **Sliding Window + HashSet** (**O(n) time**).  

```javascript
function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

// ✅ Test
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
```

---

## **🔥 3. Reverse Words in a String**  
👉 **Concept:** **Trim**, **split**, and **reverse** (**O(n) time**).  

```javascript
function reverseWords(s) {
    return s.trim().split(/\s+/).reverse().join(" ");
}

// ✅ Test
console.log(reverseWords("  Hello World  ")); // Output: "World Hello"
```

---

## **🔥 4. First Non-Repeating Character**  
👉 **Concept:** Use a **Hash Map** to track occurrences (**O(n) time**).  

```javascript
function firstUniqChar(s) {
    let count = new Map();
    
    for (let char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }
    
    for (let i = 0; i < s.length; i++) {
        if (count.get(s[i]) === 1) return i;
    }
    return -1;
}

// ✅ Test
console.log(firstUniqChar("leetcode")); // Output: 0
console.log(firstUniqChar("aabb")); // Output: -1
```

---

## **🔥 5. Rotate Array by k places**  
👉 **Concept:** **Reverse method** (**O(n) time, O(1) space**).  

```javascript
function rotate(nums, k) {
    k = k % nums.length;
    nums.reverse();
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

// ✅ Test
let arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 3);
console.log(arr); // Output: [5, 6, 7, 1, 2, 3, 4]
```

---

## **🔥 6. Find Missing Number**  
👉 **Concept:** Use **sum formula** (**O(n) time, O(1) space**).  

```javascript
function missingNumber(nums) {
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = nums.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}

// ✅ Test
console.log(missingNumber([3, 0, 1])); // Output: 2
```

---

## **🔥 7. Find Duplicate Number**  
👉 **Concept:** **Floyd’s Cycle Detection** (**O(n) time, O(1) space**).  

```javascript
function findDuplicate(nums) {
    let slow = nums[0], fast = nums[0];
    
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
}

// ✅ Test
console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
```

---

## **🔥 8. Group Anagrams**  
👉 **Concept:** **Sorting strings as keys** in a **Hash Map** (**O(n log n) time**).  

```javascript
function groupAnagrams(strs) {
    let map = new Map();

    for (let word of strs) {
        let sortedWord = word.split("").sort().join("");
        if (!map.has(sortedWord)) map.set(sortedWord, []);
        map.get(sortedWord).push(word);
    }

    return Array.from(map.values());
}

// ✅ Test
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
```

---

## **🔥 9. Check if a String is a Palindrome**  
👉 **Concept:** **Two pointers** (**O(n) time**).  

```javascript
function isPalindrome(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

// ✅ Test
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
```

---

## **🔥 10. String Compression**  
👉 **Concept:** **Counting consecutive characters** (**O(n) time**).  

```javascript
function compressString(s) {
    let compressed = "", count = 1;

    for (let i = 1; i <= s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            compressed += s[i - 1] + count;
            count = 1;
        }
    }
    return compressed.length < s.length ? compressed : s;
}

// ✅ Test
console.log(compressString("aabcccccaaa")); // Output: "a2b1c5a3"
console.log(compressString("abc")); // Output: "abc"
```

---

## **🚀 Next Steps**
✅ **Practice Each Problem** by writing the code yourself.  
✅ **Understand the Patterns** behind each solution.  
✅ **Try LeetCode, CodeSignal, or AlgoExpert** for more variations.  
✅ **Mock Interviews** to test under time constraints.  

This **covers 90% of the Array & String problems** you'll encounter in frontend interviews! Let me know if you need solutions for **Stacks, Queues, Trees, or Recursion** next! 🚀🔥

# Algorithm to arrays and String

### **Step-by-Step Algorithms for Arrays & Strings Problems**  

I’ll break down the logic for each problem into **step-by-step explanations** before implementing the code.  

---

## **🔥 1. Two Sum**  
👉 **Find two numbers in an array that sum to a target value.**  
💡 **Efficient Approach:** Use a **Hash Map** for quick lookups (**O(n) time**).  

### **Algorithm:**  
1. Initialize a **hash map** to store numbers and their indices.  
2. Iterate through the array:  
   - Compute `complement = target - nums[i]`.  
   - If `complement` exists in the map, return `[index of complement, current index]`.  
   - Otherwise, store `nums[i]` in the map.  
3. Return an empty array if no pair is found.  

---

## **🔥 2. Longest Substring Without Repeating Characters**  
👉 **Find the longest substring without repeating characters.**  
💡 **Use Sliding Window & Hash Set** (**O(n) time**).  

### **Algorithm:**  
1. Initialize `left` pointer and `set` to store characters.  
2. Iterate `right` pointer through the string:  
   - If `s[right]` is already in `set`, **remove** `s[left]` and move `left`.  
   - Add `s[right]` to the `set`.  
   - Update `maxLength`.  
3. Return `maxLength` after the loop.  

---

## **🔥 3. Reverse Words in a String**  
👉 **Reverse the order of words in a string, removing extra spaces.**  

### **Algorithm:**  
1. **Trim** extra spaces from the string.  
2. **Split** the string into words using spaces as a delimiter.  
3. **Reverse** the list of words.  
4. **Join** the words back into a string.  

---

## **🔥 4. First Unique Character**  
👉 **Find the first character that appears only once.**  

### **Algorithm:**  
1. Create a **hash map** to count occurrences.  
2. Loop through the string and store character frequencies.  
3. Iterate through the string again, and return the index of the first character with frequency `1`.  
4. If no unique character exists, return `-1`.  

---

## **🔥 5. Rotate Array by k places**  
👉 **Shift all elements of the array to the right by k places.**  

### **Algorithm (Using Reverse Method for O(n) time, O(1) space):**  
1. Compute `k = k % nums.length` (Handle cases where `k > length`).  
2. **Reverse** the entire array.  
3. **Reverse** the first `k` elements.  
4. **Reverse** the remaining `n-k` elements.  

Example:  
```
Input: [1,2,3,4,5,6,7], k=3  
Step 1: Reverse entire → [7,6,5,4,3,2,1]  
Step 2: Reverse first k → [5,6,7,4,3,2,1]  
Step 3: Reverse rest → [5,6,7,1,2,3,4]  
```

---

## **🔥 6. Find Missing Number**  
👉 **Find the missing number in a sequence from 0 to n.**  
💡 **Use Sum Formula** (O(1) space).  

### **Algorithm:**  
1. Compute expected sum using formula: `n(n+1)/2`.  
2. Compute actual sum from the given array.  
3. Return the difference `expectedSum - actualSum`.  

---

## **🔥 7. Find Duplicate Number**  
👉 **Find the repeating number in an array using Floyd’s Cycle Detection.**  
💡 **(Like detecting a loop in LinkedList).**  

### **Algorithm:**  
1. Initialize **slow** and **fast** pointers.  
2. Move **slow = nums[slow]**, **fast = nums[nums[fast]]** until they meet.  
3. Reset **slow** to the start and move both one step until they meet again.  
4. The meeting point is the duplicate.  

---

## **🔥 8. Group Anagrams**  
👉 **Group words that have the same letters.**  
💡 **Sorting Technique (O(n log n)).**  

### **Algorithm:**  
1. Create a **hash map** where the key is the **sorted version of the word**.  
2. Loop through the array:  
   - Sort the word.  
   - Store it as a key and add the original word to the corresponding list.  
3. Return all grouped words.  

Example:  
```
["eat", "tea", "tan", "ate", "nat", "bat"]
After sorting:
["aet", "aet", "ant", "aet", "ant", "abt"]
Groups: [["eat","tea","ate"],["tan","nat"],["bat"]]
```

---

## **🔥 9. Check if a String is a Palindrome**  
👉 **Check if a given string reads the same forward and backward.**  

### **Algorithm:**  
1. **Remove non-alphanumeric characters** and convert to lowercase.  
2. Use **two pointers** (`left`, `right`).  
3. While `left < right`:  
   - If `s[left] !== s[right]`, return false.  
   - Move both pointers inward.  
4. If the loop completes, return `true`.  

---

## **🔥 10. String Compression**  
👉 **Compress a string by counting consecutive characters.**  

### **Algorithm:**  
1. Initialize an empty `compressed` string and a `count = 1`.  
2. Iterate through the string:  
   - If the next character is the same, increase `count`.  
   - Otherwise, append `char + count` and reset `count`.  
3. Return the shorter of the original or compressed string.  

Example:  
```
"aabcccccaaa" → "a2b1c5a3"
"abc" → "abc" (since compression is longer)
```

---

## **📌 Summary Table**
| **Problem** | **Key Concept** | **Time Complexity** |
|------------|---------------|-----------------|
| **Two Sum** | Hash Map | O(n) |
| **Longest Substring Without Repeat** | Sliding Window | O(n) |
| **Reverse Words** | Split & Reverse | O(n) |
| **First Unique Character** | Hash Map | O(n) |
| **Rotate Array** | Reverse | O(n) |
| **Find Missing Number** | Sum Formula | O(n) |
| **Find Duplicate** | Floyd’s Cycle | O(n) |
| **Group Anagrams** | Sorting + HashMap | O(n log n) |
| **Palindrome Check** | Two Pointers | O(n) |
| **String Compression** | Counting | O(n) |

---

## **🚀 How to Memorize These Efficiently?**
1. **Pattern Recognition** → Understand the core pattern in each problem.  
2. **Write Code by Hand** → Rewriting the solution from memory helps retention.  
3. **Practice Similar Problems** → LeetCode / CodeSignal variations.  
4. **Time Yourself** → Aim to solve in **under 10 minutes**.  
5. **Mock Interviews** → Practice under pressure.  

---

This **covers 90% of frontend DSA** questions! 🚀🔥 Let me know if you want solutions for **Stacks, Queues, Trees, or Recursion** next! 😊