Here’s an explanation of **📊 Heaps & Priority Queues** along with JavaScript-friendly examples:

---

## 📊 **Heaps & Priority Queues**

A **heap** is a **binary tree** used for efficient priority-based operations. It is a **complete binary tree**, meaning all levels are fully filled except possibly for the last, which is filled from left to right. There are two main types of heaps:

- **Min-Heap**: The root node is the smallest element. Parent nodes are smaller than child nodes.
- **Max-Heap**: The root node is the largest element. Parent nodes are larger than child nodes.

A **Priority Queue** is an abstract data type that supports insertion and removal of the **highest or lowest priority element**. Heaps are typically used to implement priority queues because they allow efficient insertion and extraction of the highest or lowest element.

---

## 1️⃣ **Min-Heap**

In a **min-heap**, the smallest element is at the root, and every parent node is smaller than its children.

### **Operations**:
- **Insert**: Add an element to the heap and then "heapify up" to maintain the heap property.
- **Extract-Min**: Remove the smallest element (root) and then "heapify down" to re-adjust the heap.

**Example of a Min-Heap:**

```js
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (parent <= element) break;

      this.heap[index] = parent;
      index = parentIndex;
    }

    this.heap[index] = element;
  }

  extractMin() {
    if (this.heap.length === 0) return null;

    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown();
    }

    return min;
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}
```

### **Example Operations**:

```js
let minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(1);

console.log(minHeap.extractMin()); // 1 (smallest)
console.log(minHeap.extractMin()); // 3
```

---

## 2️⃣ **Max-Heap**

In a **max-heap**, the largest element is at the root, and every parent node is larger than its children.

**Example of a Max-Heap:**

```js
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (parent >= element) break;

      this.heap[index] = parent;
      index = parentIndex;
    }

    this.heap[index] = element;
  }

  extractMax() {
    if (this.heap.length === 0) return null;

    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown();
    }

    return max;
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}
```

### **Example Operations**:

```js
let maxHeap = new MaxHeap();
maxHeap.insert(5);
maxHeap.insert(3);
maxHeap.insert(8);
maxHeap.insert(10);

console.log(maxHeap.extractMax()); // 10 (largest)
console.log(maxHeap.extractMax()); // 8
```

---

## 3️⃣ **Use in Problems like K-Largest/Smallest Elements**

**Example**: Find the **K largest elements** in an array.

### **Using a Min-Heap** (for K largest):

```js
function kLargest(nums, k) {
  let minHeap = new MinHeap();

  for (let num of nums) {
    minHeap.insert(num);
    if (minHeap.heap.length > k) {
      minHeap.extractMin();
    }
  }

  return minHeap.heap;
}
```

### **Example Usage**:

```js
let nums = [3, 2, 1, 5, 6, 4];
let k = 2;
console.log(kLargest(nums, k)); // [5, 6]
```

In this example, we are maintaining a min-heap of size `k` and, whenever the heap grows beyond `k`, we remove the minimum element, ensuring that we always have the largest `k` elements in the heap.

---

## ✅ **Summary of Heap Operations**

| Operation            | Min-Heap Time Complexity | Max-Heap Time Complexity |
|----------------------|--------------------------|--------------------------|
| Insert              | O(log n)                 | O(log n)                 |
| Extract Min/Max     | O(log n)                 | O(log n)                 |
| Peek (Root)         | O(1)                     | O(1)                     |
| Build Heap          | O(n)                     | O(n)                     |

---

## 💡 **Applications of Heaps**:
1. **Priority Queues**: Heaps are used to implement priority queues, useful in algorithms like Dijkstra’s and Huffman Coding.
2. **Kth Largest/Smallest Element**: As shown above, heaps are useful for finding the kth largest or smallest element in an array.
3. **Heap Sort**: A comparison-based sorting algorithm that uses a max-heap (or min-heap).
4. **Median Maintenance**: Heaps are used to maintain the median of a dynamically changing dataset.

---

