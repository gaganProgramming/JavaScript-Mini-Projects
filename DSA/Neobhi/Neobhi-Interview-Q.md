 
# It seems the interviewer asked a conceptual question about implementing a **queue using stacks** — basically how to achieve **First-In-First-Out (FIFO)** behavior (like a queue) using the **Last-In-First-Out (LIFO)** behavior of stacks.

---

### ✅ Likely Interview Question:

**"How would you implement a queue using stacks?"**

---

### ✅ Key Concepts:

* **Stack**: Last In, First Out (LIFO)
* **Queue**: First In, First Out (FIFO)

---

### ✅ Correct Answer (with explanation):

You can implement a **queue using two stacks** (`stack1` and `stack2`):

---

### 🔁 **Approach: Using Two Stacks**

1. **Enqueue (Push)**: Push the element onto `stack1`.

2. **Dequeue (Pop)**:

   * If `stack2` is empty:

     * While `stack1` is not empty:

       * Pop from `stack1` and push to `stack2`
   * Pop from `stack2`

---

### ✅ Code Example (in JavaScript):

```javascript
class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(x) {
    this.stack1.push(x);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }

  peek() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}
```

---

### 🧠 Interview Tip:

This is a classic **data structures** interview question. They are testing:

* Your understanding of stack vs queue
* Your problem-solving approach
* How you simulate one behavior using another

---

Would you like a Python version of this as well?



# Scenario based question

Got it! Here's how you can **implement a "View" button in a React table** where clicking the button **shows the business details** — exactly as was asked in your interview.

---

### ✅ Interview Question (as it was likely asked):

**"You have a table that lists business IDs and names, with a 'View' button in each row. When you click the 'View' button, it should display that business's full details. How would you implement this in React?"**

---

### ✅ Ideal Answer:

> “I would store the selected business object in a state variable using `useState`. When the 'View' button is clicked, I update the state to the selected business. Then, I conditionally render the business details component below the table or inside a modal. If the data is coming from an API, I could fetch it on demand and show a loading state.”

---

### ✅ Full Code Example in React (Details Shown Below Table):

```jsx
import React, { useState } from "react";

const businessData = [
  { id: 1, name: "BatterMami", type: "Food", location: "Bengaluru", revenue: "₹10L" },
  { id: 2, name: "TechNova", type: "IT", location: "Hyderabad", revenue: "₹50L" },
  { id: 3, name: "Healthify", type: "Healthcare", location: "Chennai", revenue: "₹30L" },
];

function BusinessTable() {
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const handleViewClick = (business) => {
    setSelectedBusiness(business);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Business List</h2>

      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Business</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {businessData.map((biz) => (
            <tr key={biz.id}>
              <td className="border px-4 py-2">{biz.id}</td>
              <td className="border px-4 py-2">{biz.name}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                  onClick={() => handleViewClick(biz)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedBusiness && (
        <div className="mt-6 border border-gray-300 p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Business Details</h3>
          <p><strong>ID:</strong> {selectedBusiness.id}</p>
          <p><strong>Name:</strong> {selectedBusiness.name}</p>
          <p><strong>Type:</strong> {selectedBusiness.type}</p>
          <p><strong>Location:</strong> {selectedBusiness.location}</p>
          <p><strong>Revenue:</strong> {selectedBusiness.revenue}</p>
          <button
            className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => setSelectedBusiness(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default BusinessTable;
```

---

### ✅ Optional Enhancements to Mention in Interview:

* Display details in a **modal** instead of below the table
* Fetch details from a **backend API on button click**
* Navigate to a **`/business/:id`** route using React Router for deep linking

---

Would you like this version using a **modal popup** or **React Router navigation** instead?

What They’re Looking For:

* Your component structuring skills
* Use of props, state, map()
* Understanding of dynamic rendering, possibly forms, and maybe CRUD operations

# Binary search program

Great! The **binary search** question is another classic — it tests your understanding of **efficient searching algorithms**.

---

### ✅ Likely Interview Question:

**"How does binary search work?"**
(or)
**"Explain the logic of binary search and its time complexity."**

---

### ✅ Key Concept:

Binary Search is an efficient algorithm to find an element in a **sorted array** by repeatedly dividing the search interval in half.

---

### 🔁 **How Binary Search Works (Step-by-Step):**

1. Start with the entire sorted array.
2. Find the middle element:
   `mid = Math.floor((low + high) / 2)`
3. Compare the middle element with the target:

   * If it's equal, you've found the element.
   * If target < middle, repeat the search in the **left half**.
   * If target > middle, repeat the search in the **right half**.
4. Repeat until the element is found or the interval is empty.

---

### ✅ Code Example (JavaScript):

```javascript
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    
    if (arr[mid] === target) {
      return mid; // found
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // not found
}
```

---

### 🕒 Time Complexity:

* **Best case**: `O(1)` (target is at the middle)
* **Average and Worst case**: `O(log n)`

Why? Because you're halving the search space every time.

---

### ❗ Interview Follow-up Questions Could Be:

* Can you write a recursive version of binary search?
* Can you apply binary search on rotated sorted arrays?
* What if the array is not sorted?

---

Would you like a visual diagram or a dry-run of an example?
