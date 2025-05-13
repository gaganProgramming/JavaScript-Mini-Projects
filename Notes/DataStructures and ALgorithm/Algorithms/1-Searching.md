Here’s an explanation of **🔍 Searching** algorithms:

---

## **🔍 Searching Algorithms**

Searching algorithms are used to find a specific element within a collection of data, such as an array or list. The most common searching algorithms are **Linear Search** and **Binary Search**. Additionally, there are variations like searching in **Rotated Arrays**.

---

### 1️⃣ **Linear Search**

**Linear Search** is the simplest searching algorithm. It checks every element in the list one by one until it finds the target element or exhausts the entire list.

#### **Time Complexity**:
- **Worst-case**: O(n)
- **Best-case**: O(1) (if the target is the first element)

#### **Steps**:
1. Start from the first element in the array.
2. Compare each element with the target.
3. If the target is found, return the index.
4. If the target is not found, return `-1` (not found).

#### **Example** (in JavaScript):

```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Target found, return index
    }
  }
  return -1; // Target not found
}

// Example usage
let arr = [5, 3, 8, 4, 9];
let target = 8;
console.log(linearSearch(arr, target)); // Output: 2 (index of 8)
```

---

### 2️⃣ **Binary Search**

**Binary Search** is an efficient searching algorithm that works on **sorted arrays** or lists. It divides the search space into two halves, progressively narrowing the search range.

#### **Time Complexity**:
- **Worst-case**: O(log n)
- **Best-case**: O(1) (if the middle element is the target)

#### **Steps**:
1. Start by setting the search range to include the whole array (`left = 0`, `right = arr.length - 1`).
2. Find the middle element (`mid = Math.floor((left + right) / 2)`).
3. If the middle element is the target, return the index.
4. If the middle element is greater than the target, search in the left half (`right = mid - 1`).
5. If the middle element is less than the target, search in the right half (`left = mid + 1`).
6. If the target is not found, return `-1`.

#### **Example** (in JavaScript):

```js
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found, return index
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return -1; // Target not found
}

// Example usage
let arr = [1, 3, 5, 7, 9, 11];
let target = 7;
console.log(binarySearch(arr, target)); // Output: 3 (index of 7)
```

---

### 3️⃣ **Search in Rotated Array**

In a **rotated sorted array**, the elements are sorted, but the array has been rotated at some pivot index. For example, the array `[4, 5, 6, 7, 0, 1, 2]` is a rotated version of `[0, 1, 2, 4, 5, 6, 7]`.

To efficiently search in a rotated sorted array, we can modify the binary search algorithm.

#### **Time Complexity**:
- **Worst-case**: O(log n)
- **Best-case**: O(1) (if the middle element is the target)

#### **Steps**:
1. Set the search range to include the whole array (`left = 0`, `right = arr.length - 1`).
2. Find the middle element (`mid = Math.floor((left + right) / 2)`).
3. Determine which part of the array is sorted:
   - If the left half is sorted (`arr[left] <= arr[mid]`), check if the target lies within that half.
   - Otherwise, the right half is sorted, so check if the target lies in that half.
4. Narrow the search range based on which part of the array is sorted and whether the target lies within that range.
5. If the target is not found, return `-1`.

#### **Example** (in JavaScript):

```js
function searchInRotatedArray(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    }

    // Check if the left half is sorted
    if (arr[left] <= arr[mid]) {
      if (arr[left] <= target && target < arr[mid]) {
        right = mid - 1; // Search in left half
      } else {
        left = mid + 1; // Search in right half
      }
    } else {
      // Right half is sorted
      if (arr[mid] < target && target <= arr[right]) {
        left = mid + 1; // Search in right half
      } else {
        right = mid - 1; // Search in left half
      }
    }
  }

  return -1; // Target not found
}

// Example usage
let arr = [4, 5, 6, 7, 0, 1, 2];
let target = 1;
console.log(searchInRotatedArray(arr, target)); // Output: 5 (index of 1)
```

---

### **Summary of Searching Algorithms**

| **Algorithm**      | **Time Complexity (Best)** | **Time Complexity (Worst)** | **Space Complexity** |
|--------------------|----------------------------|-----------------------------|----------------------|
| **Linear Search**   | O(1)                       | O(n)                        | O(1)                 |
| **Binary Search**   | O(1)                       | O(log n)                    | O(1)                 |
| **Search in Rotated Array** | O(1)                  | O(log n)                    | O(1)                 |

---

### **Key Differences**:
- **Linear Search** is slow and inefficient for large datasets as it checks each element one by one.
- **Binary Search** is faster, but it requires the array to be sorted.
- **Search in Rotated Array** is an extension of binary search, optimized for arrays that have been rotated while maintaining sorted order.

---

