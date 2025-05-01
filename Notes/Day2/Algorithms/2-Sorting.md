Here’s an explanation of **Sorting Algorithms**:

---

## **Sorting Algorithms**

Sorting algorithms are used to arrange the elements of an array or list in a specific order (ascending or descending). Sorting is an essential concept for many problems and can have a significant impact on performance.

### **Types of Sorting Algorithms**

1. **Bubble Sort**
2. **Selection Sort**
3. **Insertion Sort**
4. **Merge Sort**
5. **Quick Sort**
6. **Count Sort** (Non-Comparison)

---

### 1️⃣ **Bubble Sort**

**Bubble Sort** is one of the simplest sorting algorithms. It works by repeatedly stepping through the list, comparing adjacent elements, and swapping them if they are in the wrong order. This process is repeated until the list is sorted.

#### **Time Complexity**:
- **Worst-case**: O(n²)
- **Best-case**: O(n) (if the list is already sorted)
- **Space Complexity**: O(1)

#### **Steps**:
1. Start at the beginning of the array.
2. Compare adjacent elements.
3. If the first element is greater than the second, swap them.
4. Continue the process until the end of the array.
5. Repeat the process for the rest of the array, reducing the range by one each time.

#### **Example** (in JavaScript):

```js
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap if the element is greater than the next
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Example usage
let arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr)); // Output: [2, 3, 4, 5, 8]
```

---

### 2️⃣ **Selection Sort**

**Selection Sort** works by repeatedly selecting the smallest (or largest) element from the unsorted part of the array and moving it to the sorted part.

#### **Time Complexity**:
- **Worst-case**: O(n²)
- **Best-case**: O(n²)
- **Space Complexity**: O(1)

#### **Steps**:
1. Start from the beginning of the array.
2. Find the smallest element in the unsorted part of the array.
3. Swap the smallest element with the first element of the unsorted part.
4. Move the boundary of the unsorted part by one element.
5. Repeat the process until the array is sorted.

#### **Example** (in JavaScript):

```js
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    // Swap the found minimum element with the first element
    let temp = arr[minIdx];
    arr[minIdx] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

// Example usage
let arr = [5, 3, 8, 4, 2];
console.log(selectionSort(arr)); // Output: [2, 3, 4, 5, 8]
```

---

### 3️⃣ **Insertion Sort**

**Insertion Sort** builds the sorted array one element at a time. It takes each element from the unsorted part and places it in its correct position within the sorted part.

#### **Time Complexity**:
- **Worst-case**: O(n²)
- **Best-case**: O(n) (if the list is already sorted)
- **Space Complexity**: O(1)

#### **Steps**:
1. Start with the second element.
2. Compare it with the elements in the sorted part of the array (on the left).
3. Insert it in the correct position by shifting elements to the right.
4. Repeat the process for the rest of the array.

#### **Example** (in JavaScript):

```js
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    
    // Move elements of arr[0..i-1] that are greater than key to one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Example usage
let arr = [5, 3, 8, 4, 2];
console.log(insertionSort(arr)); // Output: [2, 3, 4, 5, 8]
```

---

### 4️⃣ **Merge Sort (O(n log n))**

**Merge Sort** is a **divide-and-conquer** algorithm. It divides the array into halves, recursively sorts them, and then merges the sorted halves.

#### **Time Complexity**:
- **Worst-case**: O(n log n)
- **Best-case**: O(n log n)
- **Space Complexity**: O(n)

#### **Steps**:
1. Divide the array into two halves.
2. Recursively sort the two halves.
3. Merge the two sorted halves into a single sorted array.

#### **Example** (in JavaScript):

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i), right.slice(j));
}

// Example usage
let arr = [5, 3, 8, 4, 2];
console.log(mergeSort(arr)); // Output: [2, 3, 4, 5, 8]
```

---

### 5️⃣ **Quick Sort**

**Quick Sort** is another **divide-and-conquer** algorithm. It selects a **pivot** element and partitions the array into two sub-arrays, one with elements smaller than the pivot and the other with elements greater than the pivot. It recursively sorts the sub-arrays.

#### **Time Complexity**:
- **Worst-case**: O(n²) (if the pivot is poorly chosen)
- **Best-case**: O(n log n)
- **Space Complexity**: O(log n) (for the recursion stack)

#### **Steps**:
1. Select a pivot element.
2. Partition the array into two sub-arrays: one with elements smaller than the pivot and one with elements greater.
3. Recursively apply the quick sort to the sub-arrays.

#### **Example** (in JavaScript):

```js
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[arr.length - 1];
  const left = [], right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
let arr = [5, 3, 8, 4, 2];
console.log(quickSort(arr)); // Output: [2, 3, 4, 5, 8]
```

---

### 6️⃣ **Count Sort (Non-Comparison)**

**Count Sort** is a **non-comparison-based** sorting algorithm. It works by counting the number of occurrences of each element and using this count to determine the position of each element in the sorted array.

#### **Time Complexity**:
- **Worst-case**: O(n + k), where **n** is the number of elements in the array and **k** is the range of the input.
- **Best-case**: O(n + k)
- **Space Complexity**: O(n + k)

#### **Steps**:
1. Find the maximum element in the array to determine the range.
2. Create a count array where each index corresponds to an element value.
3. Update the count array with the frequency of each element.
4. Rebuild the sorted array using the count array.

#### **Example** (in JavaScript):

```js
function countSort(arr) {
  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);
  const output = new Array(arr.length);

  for (let num of arr) {
    count[num]++;
  }

  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    output[count[num] - 1] = num;
    count[num]--;
  }

  return output;
}

// Example usage
let arr = [5, 3, 8, 4, 2];
console.log(countSort(arr)); // Output: [2, 3, 4, 5, 8]
```

---

### **Summary of Sorting Algorithms**

| **Algorithm**      | **Time Complexity (Worst)** | **Time Complexity (Best)** | **Space Complexity** |
|--------------------|----------------------------|----------------------------|----------------------|
| **Bubble Sort**     | O(n²)                      | O(n)                       | O(1)                 |
| **Selection Sort**  | O(n²)                      | O(n²)                      | O(1)                 |
| **Insertion Sort**  | O(n²)                      | O(n)                       | O(1)                 |
| **Merge Sort**      | O(n log n)                 | O(n log n)                 | O(n)                 |
| **Quick Sort**      | O(n²)                      | O(n log n)                 | O(log n)             |
| **Count Sort**      | O(n + k)                   | O(n + k)                   | O(n + k)             |

---

These algorithms are fundamental to understanding how sorting works and are commonly used in various problem-solving scenarios. Would you like more advanced examples or any clarifications on a particular sorting algorithm?