Great! Let’s dive into **Hash Tables / Maps / Sets** in JavaScript with clear explanations and examples for each concept:

---

## 🗃️ **Hash Tables / Maps / Sets in JavaScript**

JavaScript provides:
- **`Object`** – basic key-value pairs
- **`Map`** – ordered key-value pairs with any data type as keys
- **`Set`** – a collection of unique values

These are often used for **fast lookups, counting, detecting duplicates, or matching patterns.**

---

### 🔢 1. **Frequency Counters**

Use a hash table (object or Map) to count how many times each element appears.

**Example: Count frequency of characters in a string**

```js
function charFrequency(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}

// Output: { a: 2, b: 1, c: 1 }
console.log(charFrequency("abac"));
```

---

### 🔍 2. **Detecting Duplicates**

Use a **Set** to check if a duplicate exists.

**Example:**

```js
function hasDuplicates(arr) {
  const seen = new Set();
  for (let val of arr) {
    if (seen.has(val)) return true;
    seen.add(val);
  }
  return false;
}

// Output: true
console.log(hasDuplicates([1, 2, 3, 2]));
```

---

### 🔄 3. **Anagrams**

Two strings are anagrams if they have the same character frequency.

**Example:**

```js
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const count = {};

  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

// Output: true
console.log(isAnagram("listen", "silent"));
```

---

### 🧠 4. **HashMap-based Problems**

These are problems that require quick lookup, counting, or mapping relationships.

#### ✅ Common examples:

**a. Two Sum (LeetCode #1):**
Find two numbers that add up to a target.

```js
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}
```

**b. Group Anagrams:**
Group strings that are anagrams.

```js
function groupAnagrams(strs) {
  const map = new Map();

  for (let word of strs) {
    const sorted = word.split('').sort().join('');
    if (!map.has(sorted)) map.set(sorted, []);
    map.get(sorted).push(word);
  }

  return Array.from(map.values());
}

// Output: [ [ 'bat' ], [ 'nat', 'tan' ], [ 'ate', 'eat', 'tea' ] ]
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
```

---

### 🔧 Summary

| Concept | Best Tool | Use Case |
|--------|-----------|----------|
| Frequency Counter | Object / Map | Count items |
| Duplicate Detection | Set | Check uniqueness |
| Anagram Check | Object / Map | Compare frequency |
| Two Sum, Group Anagrams | Map | Fast lookup & grouping |

---
