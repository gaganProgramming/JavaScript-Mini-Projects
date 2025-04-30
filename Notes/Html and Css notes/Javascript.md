# Closures
# Promises, async/await
# Important array methods (map, filter, reduce)
# Event bubbling, capturing, delegation


## 1. Closures
A closure is when a function remembers variables from its lexical scope(the scope which it was created), even after the outer function has finished execution.

**Understanding**
1. Inner function locks the environment of the outer function.
2. It can still access outer variables  even when outer is gone.

```````````````````````````js
function outerFunction(){
    let counter = 0;
    function innerFunction(){
        counter++;
        console.log(counter);
    }

    return innerFunction;
}
const myCounter = outerFunction();
myCounter();//1
myCounter();//2
myCounter();//3

`````````````````````````````

Real-world Usage of Closures

* Data hiding(private variables)
* Currying functions
* Event Handlers that access some "past" variables
* Factory function (functions returning other functions)

2. Promises, async/await
Promises
**Definition:** 
A promise represents the results of an asynchronous operation - either fullfilled or rejected in the future


````````````````````````````js
const promise = new Promise((resolve, reject)=>{
    if(success) resolve(result);
    else reject(error);
})
``````````````````````````````
## Example
````````````````````````````````js
const getData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Data loaded");
    }, 2000)
});

getData.then((data)=> console.log(data))
.catch((err)=> console.log(err))

``````````````````````````````````

## async/await
**Definition:**
async turns a function into one that returns  a Promise.
await pauses the function until the Promise resolves.

````````````````````````````js
async function fetchDeta(){
 try{
    const result = await getData;
    console.log(result);
 } catch(error){
    console.log(error);
 }
}
fetchData();
`````````````````````````````
Benifits: 
Cleaner code `.then()/.catch()`
Looks synchronous but handles asynchronous

## Important Array methods

map()
Propose 
Transforms every element in an array
returns new array

`````````````````js
const newArray = arr.map(callback);
````````````````````````

Example
`````````````````````js
const numbers = [1, 2, 3];
const doubled = numbers.map(nums => num *2);
console.log(doubled); //[2, 4, 6]
``````````````````````````

filter()
Purpose
Filter elements based on condition
Returns new array with only matched elements.

```````````````````js
const filteredArray = arr.filter(callback);

``````````````````````
Example
`````````````````````````````js
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num=> num% 2===0);
console.log(evens); // [2, 4]
````````````````````````````````````````
reduce()

````````````````````````````````js
const result = arr.reduce((accumulator, currentValue)=> {...}, initialValue);
`````````````````````````````````

Example(sum of all numbers):
```````````````````````````````````````````js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr)=> acc + curr, 0);
console.log(sum); // 10
```````````````````````````````````````````````

## 4. Event Bubbling, Capturing, Delagation
Event Bubbling
When an event happens on an element, it bubbles up(moves) from child -> parent -> grandparent etc.

``````````````````````````````html
<div id="parent">
  <button id="child">Click me</button>
</div>

````````````````````````````````````

```````````````````````````js
document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked!');
});

document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked!');
});

`````````````````````````````

````````````````````````````````
Child clicked!
Parent clicked!
```````````````````````````````````

Event Capturing(Rarely used )
Opposite of bubbling: event captured top -> bottom

````````````````````````js
element.addEventListener('click', callback, true);
`````````````````````````````````````````
Setting true as third argument activates capturing mode.

Event Delegation
**definition**
Instead of adding event listeners to every chid, you add ONE listener to the parent and use event.target to detect the clicked child.

Example
````````````````````````````````js
document.getElementById('parent').addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    console.log('Button inside parent clicked');
  }
});

``````````````````````````````````

Uses 
Better performance(fewer listeners)
Handles dynamically added elements automatically