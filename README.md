Bro Code JavaScript
-------------------------

1. Variable = A container that stores a value. Behaves as if it were the value it contains.
           declaration let x;
	   assignment x = 100;
2. Arithemtic operator = operands (values, variables, etc.)
                      operator(+ - * /)
		      ex. 11= x +5;

3. How to accept user input 
	Easy way  = window.prompt
	professional way = html textbox
document.getElementById("mySubmit").onclick = function(){
   username = document.getElementById("myText").value;
   document.getElementById("myH1").textContent = `Hello ${username}`
}

4. Type conversion = change the datatype of a value to another (Strings, numbers, booleans)

5. Constant  = const = a variable that can't be changed

7. Math = built-in object that provides a collection of properties and methods
     math. round, floor, ceil, trunc, pow(x, y), sqrt, log, sin, cos, tan, abs, sign, max, min

8. Random number = Math.random

9. If statements = if a condition is true, execute some code if not, do something else

10. .checked = property that determines the checked state of an html checkbox or radio button element

11. ternary operator = a shortcut to if{} and else{} statements helps to assign a variable based on
                       a condition? codeIfTrue : codeIfFalse;

12. Switch = can be an efficient replacement to many else if statements
  syntax:

13. String methods = allow you to manipulate and work with text(Strings)
    charAt(0), indeOf(), lastIndexOf, length, trim(), toUpperCase, toLowerCase, repeat(3), 
    startsWith(" "), endsWith, includes, replaceAll("-",""), padStart(), padEnds(), 

14. String slicing = creating a substring from a portion of another string 
		        string.slice(start, end)

15. Method Chaining = Calling one method after another in one continuous line of code.
          let username = window.promt("Enter your username: ");
   ex username = username.trim().charAT(0).toUpperCase()+ username.trim().slice(1).toLowerCase();

16. Logical operators  = used to combine or manipulate Boolean values (true or false)
                              AND = &&, OR = ||, NOT = !


17.   assignment operator = 
      comparison operator ==
      strict equality operator ===
      inequality operator      !=
      strict inequality operator !==

18. While loop = repeat some WHILE some condition is true

19. for loop = repeat some code a limited amount of times
     for (let i = 0; i<= 2; i++){ console.log(i)}

20. Function = A section of reusable code. 
	         Declare code once, use it whenever you want.
		 call the function to execute that code.

      function happBirthday(){
        console.log('Happy Birthday')
      }
      happBirthday(); //call the function
    
Function with parameter
-------------------------
   function happBirthday(username){
        console.log(`Happy birthday ${username}!`)
      }
      happBirthday(); //call the function
      happBirthday("BroCode")

Function with return keyword

function add(x, y){
   let result  = x + y;
   return result;
}
  console.log(add(2, 3));

ex- 2
function isValidEmail(email){
   if(email.includes("@")){
      return true;
   }
   else{
       return false;
   }
}
console.log(isValidEmail("Bro@fake.com"));


21. Variable scope = where a variable is recognized and accessible(local vs global)

22. Array = a variable like structure that can hold more than 1 value
    let fruits = ["apple", "orange", "bannana"];

       fruits.push("Coconut") //adds at last
       fruits.pop(); //deletes the last item
       fruits.unshift("mango")//adds items to first
       fruits.shift() // deletes the first items
       fruits.length; // gives the length of array
       fruits.indexOf("apple") // gives the index of array
       fruits.sort().reverse() // sorts alphabetically and gives reverse array
        for(let i = 0; i < fruits.length-1; i++){  // display the element in array
          console.log(fruits[i])
        }
         
        for(let fruit of fruits){ // enchanced for loop
	   console.log(fruit);
        }
      console.log(fruits[0]); //accessing the element

23. Spread Operator = ... allows an iterable such as an array or string to be expanded into separate 
                           elements (unpacks the elements)
 
     let numbers = [1, 2, 3, 4, 5];
     let maximum = Math.max(..numbers);// if ... is not mentioned it gives NaN error due to max()
     console.log(maximum)

ex -2
     let username = "Bro Code";
     let letters = [...username].join("-")
     console.log(letters)
ex-3 To combine different arrays and add some more element to shallow copy
   let fruits = ["apple", "orange", "banana"];
   let vegetables = ["carrots", "celery", "potatoes"];
   let foods = [...fruits, ...vegetables, "eggs", "milk"];
   console.log(foods);

24. Rest parameter = (...rest) allow a function work with a variable number of arguments by bundling
				them into an array
 combines the element and bundles into an array

                       spread = expands an array into separate elements 
                       rest = bundles separate elements into an array
function openFridge(...foods){
 console.log(foods); // display all values in single array
 console.log(...foods); // seperates the elements
}

const food1 = "pizza";
const food2 = "hamburger"'
const food3 = "hotdog";
const food4 = "sushi";
cost food5 = "ramen";

openFridge(food1, food2, food3, food4, food5); 

25. Callback = a function that is passed as an argument to another function
           used to handle asynchronous operations:
	   1. Reading a file
	   2. Network requests
	   3. Interacting with databases
	"Hey, when you are done, call this function"
ex-1

  sum(displayPage, 1, 2);
 function sum(callback, x, y){
   let result = x + y;
   callback(result)
 }
 function displayConsole(result){
   cosole.log(result);
 }

 function displayPage(result){
   document.getElementById("myH1").textContent = result;
 }

Take a two function hello() and goodye() function what if hello function takes too much time?
when calling don't add '()' to parameter function

ex-2

 hello(goodbye); // prints hello first and goodbye next
function hello(callback){
   console.log("Hello!");
   callback();
}

function goodbye(){
  console.log("Goodbye!");
}


26. ForEach() = method used to iterate over the elements of an array and apply a specified function(callback) to each element
                 array.forEach(callback)

let numbers = [1, 2, 3, 4, 5];
  numbers. forEach(display)
function display(element){
   console.log(element)
}


ex- 2
let numbers = [1, 2, 3, 4, 5];

 numbers.forEach(double);
 numbers.forEach(display);

function double(element, index, array){
  array[index] = element *2;
}

function triple(element, index, array){
  array[index] = element *3;
}

function display(element){
   console.log(element)
}

27. map() = accepts a callback and applies that function to each element of an array,
              then return a new array

let numbers = [1, 2, 3, 4 ,5];
let squares = numbers.map(square)
console.log(squares);
function square(element){
   return Math.pow(element, 2);
}

28. filter() = creates a new array by filtering out elements

let numbers = [1,2,3, 4, 5];
let evens = numbers.filter(isEven)
console.log(evens)

function isEven(element){
    return element % 2 ===0;
} 

op- [ 2, 4 ]

29. .reduce() = reduce the elements of an array to a single value

const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`)
function sum(prev, next){
    return prev + next
}

30. function declaration = define a reusable block of code that performs a specific task
    function expression = a way to define functions as values or variables
1. Callbacks in asynchronous operations
2. Higher-Order Functions
3. Closures
4. Event Listeners

const hello = function(){
  console.log("Hello");
}

setTimeout(function(){
  console.log("Goodbye");
}, 5000);

31. arrow functions = a concise way to write function expressions good for simple functions that you
                  use only once(parameters) => some code

const hello = (name, age)=> console.log(`Hello ${name}`)
	                    console.log(`You are ${age} years old`)};
hello("Bro", 25);

setTimeout(callback, 3000);




const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element)=> Math.pow(element, 3));
const evenNums = numbers.filter((element)=>element % 2 === 0);
const evenNums = numbers.filter((element)=>element % 2 === 0);

console.log(evenNums);
872876
    

function hello(){
  console.log("Hello");
}
hello();



arrow functions = a concise way to write function expressions good for simple functions that you use only once 
		   (parameters) => some code

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element)=> Math.pow(element, 2));
const cubes = numbers.map((element)=>Math.pow(element, 3));
const even = numbers.map((element)=>element%2 ===0);
const odd = numbers.map((element)=> element%2 !==0);
const total = numbers.reduce((accumulator, element)=> accumulator + element)
console.log(total)

32. JavaScript Objects
 Object = A collection of related properties and or methods can represent real world objects 
          (people, products, place) 
           object = {key: value, 
                     function()}
const person1 = {
  firstName: "Spongebob";
  sayHello: function(){console.log("Hi! I am spongebob!")}
}

op
{ firstName: 'Spongebob', sayhello: [Function: sayhello] }
hi I am spongebob


33. What is This
    this  = reference to the object where THIS is used
            (the object depends on the immediate context)
             person.name = this.name    

ex-
const person1 = {
    name:"Spongebob",
    favfood: "Chitranna",
    eat: function(){console.log(`${this.name} likes to eat ${this.favfood}`)}
};
person1.eat();

op
Spongebob likes to eat Chitranna

34. Constructors
constructor = special method for defining the properties and methods of objects


35. Classes = (ES6 feature) provides a more structured and cleaner way to work with objects compared
 to traditional constructor function ex. static keyword, encapsulation, inheritance
  *** should not use function keyword use only method name and constructor
    

36. Static keyword = keyword that defines properties or methods that belong to a class
                     itself rather than the objects created from that class (class owns anything static, 
		     not the objects)
    class MuthUtil{
       static PI = 3.14;
       static getDiameter(radius){
           return radius * 2;
       }

    }

      console.log(MathUtil.getDiameter(10)) //20

37. Inheritance = allows a new class to inherit properties and methods from an existing class
                  (parent -> child) helps with code reusability


    extends keyword is used between child and parent component
class Animal{

}
class Rabbit extends Animal{
  name = "rabbit":
  run(){
      console.log(`This ${this.name}is running`)
  }
}
class Fish extends Animal{

}
class Hawk extends Animal{

}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();   

console.log(hawk.alive);
hawk.eat();
hawk.sleep();

38. super = keyword is used in classes to call the constructor or access the properties and 
            methods of a parent (superclass)
            this = this object
            super = the parent


39. Getters and Setters
     getter = special method that makes a property readable
     setter = special method that makes a property writeable

     validate and modify a value when reading/ writing a property

class Rectangle{
   constructor(width, height){
    this.width = width;
    this.height = height;

   }

   set width(newWidth){
      if (newWidth >0){
   	 this._width = newWidth;
      }
      else{
          console.error("width must be a positive number");
      }
   }

   set height(){
   

   }
   
   get width(){
     return `${this._width.toFixed(1)} cm`;
   }

   get height(){
       return `${this._height.toFixed(1)} cm`;

   }

   const rectangle = new Rectangle(3,4);

   console.log(rectangle.width);
}


40. Destructuring = extract values from arrays and objects, then assign them to variables in a
                    convenient way 
                    [] = to perform array destructuring
                    {} = to perform object destructuring

swap the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1

const colors = ["red", "green", "blue", "black", "white"];
[colors[0], color[4]] = [colors[4], colors[0]];
console.log(colors); //[ 'white', 'green', 'blue', 'black', 'red' ]
 


41. Nested objects = objects inside of other objects.
                     Allows you to represent more complex data structures child object is encolosed by  a parent object

                     person{Address{}, ContactInfo{}}
                     ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

const person ={
  fullName: "SpongeBob Squarepants",
  age: 30,
  isStudent: true,
  hobbies:["karate", "jellyfishing", "cooking"],
  address:{
    street: "124 Conch St.",
    city: "Bikini Bottom",
    country: "Int. Water"
  }

}

  for(const property in person.address){
     console.log(person.addres(property))
  }

42. Array of objects 
 const fruits =[{name:"apple", color: "red", calories: 95 },
                {name:"orange", color: "orange", calories: 45 },
	 	{name:"banana", color: "yellow", calories: 105 },
		{name:"coconut", color: "white", calories: 159 },
		{name:"pineapple", color: "yellow", calories: 37 }];
// --------map()-------------

 const fruitNames = fruits.map(fruit => fruit.name); // [ 'apple', 'orange', 'banana', 'coconut', 'pineapple' ]

 // filter()--
 const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
 console.log(yellowFruits);
// [
  { name: 'banana', color: 'yellow', calories: 105 },
  { name: 'pineapple', color: 'yellow', calories: 37 }
]

-----reduce() ---
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories? fruit: max);
console.log(maxFruit);

// op ->{ name: 'coconut', color: 'white', calories: 159 }


42. Sorting = method used to sort elements of an array in place.
	      Sorts elements as string in lexicographic order, not alphabetical 
              lexicographic = (alphabet + numbers  + symbols) as strings



43. Shuffle an array
44. Dates objects = objects that contain values that represent dates and times These date objects 
                    can be changed and formatted

Date(year, month, day, hour, minute, second, ms)
const date  = new Date(2024, 0, 1, 2, 3, 4);
console.log(date);



getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds()
	
const date = new Date();
const year = date.getFullYear();
console.log(year); // 2025


45. Closures = A function defined inside of another function,
		the inner function has access to the variables
		and the scope of the other function.
		Allow for private variables and state maintenance
		Used frequently in Js frameworks: React, Vue, Angular



function outer(){
  let message = ""

}





46. SetTimeout = function in JavaScript that allows you to schedule the execution of a function after
                 an amount of time(milliseconds)
                 Times are approximate (varies based on the work load of the javascript runtime env.)
		 setTimeout((callback, delay));

47. ES6 Modules = An external file that contains reusable code 
                  that can be imported into other JavaScript files.
		  write reusable code for many different apps.
                  can contain variables, classes, functions... and more 
                  Introduced as part of ECMA Script 2015 update
48. Asynchronous code = executes line by line consecutively in a sequential manner
                        code that waits for an operation to complete.
                 asynchronous = Allows multiple operation to be performed concurrently without waiting
                 Doesn't block the execution flow and allows the program to continue
                 (I/O operations, network requests, fetching data)
                  Handling with: Callbacks, Promises, Async/Await

49. Error handling = An object that is created to represent a problem that occurs 
		     Occur often with user input or establishing a connection
   try{ } = Encloses code that might potentially cause an error
   catch { } = catch and handle any thrown Errors from try{ }
   finally{ } = (optional) Always executes. Used mostly for clean up 
                 ex. close files, close connections, release resources
try{
  Network errors
  Promise rejection
  Security errors
}
catch(error){
 console.error(error);
}
finally{
  close files
  close connections
  release resources
  console.log("This always executes")
}
console.log("You have reached the end!")




50. What is the dom?
Document Object Model 
Object { } that represents the page you see in the web browser and provides you with an Api to interact with it.
Web browser constructs the DoM when it loads an Html document, and structures all the elements in a tree-like
representation.
JavaScript can access the dom to dynamically change the content, structure, and style of a web page.


document > html > head > title > Mytitle
                       > body > h1> A heading
                              > a > href
                                  > "link text"

51. Element selectors = Methods used to target and manipulate HTML elements 
			They allow you to select one or multiple HTML elements
			from the DOM(Document Object Model)
document.getElementById() // Element or null
document.getElementsClassName() // Html collection
document.getElementsByTagName() // HTML collection
document.querySelector()        // ELement or null
document.querySelectorAll()     // NodeList


52. DOM navigation = The process of navigating through the structure of an HTML document using JavaScript.

.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children

const element = document.getElementById("fruits");

const element = document.getElementById("pie");
const nextSibling = document.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

for previous sibling -> previousElementSibling
    parent element -> parentElement
    children       -> children


53. Add & change HTML
	1. Create the Element ->const newListItem = document.createElement("li");
	2. Add attributes/ properties -> newListItem.texContent  = "coconut";
                                         newListItem.id = "coconut";
					 newListItem.style.fontWeight = "bold";
					 newListItem.style.backgroundColor = "lightgreen";
	3. Append element to dom -> const orange = document.getElementById("orange");
				    document.getElementById("fruits").insertBefore(newListItem, orange);

	4. Remove html element -> document.body.removeChild(newLink);

54. Mouse events
    eventListner  = Listen for specific events to create interactive web pages 
		    events: click, mouseover, mouseout
		    .addEventListener(event, callback);

ex-1
const myBox = document.getElementById("myBox");
function changeColor(event){
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "Ouch!";
}
myBox.addEventListener("click", changeColor);


<div id = "mybox"> click Me😁 </div>
<button>Click me</button>

#myBox{
 background-color: lightgreen;
 width: 300px;
 height: 300px;
 font-size: 4.1rem;
 font-weight: bold;
 display: flex;
 align-items: center;
 text-align: center;
}


55. Key events
	events: keydown, keyup
        document.addEventListner(event,callback);

document.addEventListener("keydown", event =>{
   console.log(`Key down = ${event.key}`);
})

document.addEventListener("keyup", event =>{
   console.log(`key up = ${event.key}`);
})


56. Hide/show Html
  const myButton = document.getElementById("myButton");
  const myImg = document.getElementById("myImg");

  myButton.addEventListener("click", event =>{
     if(myImg.style.display === "none"){
        myImg.style.display = "block";
        myButton.textContent = "Hide";
     }
     else{
         myImg.style.display = "none";
	 myButton.textContent = "Show";
     }

  })

for preserving space use visibility property instead of display and attributes respectively






57. NodeLists = Static collection of HTML elements by(id, class, element)
                Can be created by using querySelectorAll()
		Similar to an array, but no (map, filter, reduce)
		NodeList won't update to automatically reflect changes

 
58. ClassList =Element property in JavaScript used to interact with an element's list of
		classes(CSS classes) 
		Allows you to make reusable classes for many elements across your webpage.
add()
remove()
toggle(remove if present, Add if not)
replace(oldClass, newClass)
contain()

59. Callback Hell? = Situation in JavaScript where callbacks are nested within other callbacks to the degree where\
                     the code is  difficult to read. 
                     old pattern to handle asynchronous functions. Use Promise + async/await to avoid callback hell
60. Promises =  An object that manages asynchronous operations.
                Wrap a Promeise Object around{asynchronous code}
		"I promise to return a value"
                PENDING -> RESOLVED or REJECTED
                new Promise((resolve, reject)=>{asynchronous code})

Do these chores in order
1. Walk the dog
2. Clean the kitchen
3. Take out the Trash


function walkDog(callback){

   return new Promise((resolve, reject)=>{
      setTimeout(()=>{
	console.log("You walk the dog🐕");
	callback();
   }, 1500);
}

function cleanKitchen(){
  setTimeout(()=>{
    console.log("You walk the dog🐕")
  }, 2500);  

}

function takeOutTrash(){
  setTimeout(()=>{
     console.log("You clean the kitchen🎸")
  }, 2500);
}




61. Async/ Await = Async = makes a function return a promise
		   Await = makes an async function wait for a promise

                   Allows you write asynchronous code in a synchronous manner
		   Async doesn't have resolve or reject parameters
		   Everything after Await is placed in an event queue

function walkDog




62. JSON files = (JavaScript Object Notation) data-interchange format
	  	  Used for exchanging data between a server and a web application
		  JSON files {key: value} OR [value1, value2, value3]

		  JSON.stringify() = converts a JS object to a JSON string.
		  JSON.parse() = converts a JSON string to a JS object

ex- const names = ["Spongebob","Patrick", "Squidward", "Sandy"];
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "cooking"]
};
const people = [.....];


enclose with ``
const jsonNames = `[]`;
const jsonPerson = `[]`;
const people = `[]`;

const parseData = JSON.parse(jsonPerson);



const jsonString = JSON.strinngify(names);
console.log(person);






 
 file name -> person.json

{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "cooking"]

}



[{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
    
},
{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true,


},

{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false,
    
}


]


63. Fetch data from an API
  fetch = Function used for making HTTP requests to fetch resources.
	(JSON style data, images, files)
	Simplifies asynchronous data fetching in JavaScript and used 
	for interacting with API's to retrieve and send data asynchronously 
	over the web
	fetch(url, {options})

fetchData();

async function fetchData(){
  try{
    const pokemonName = document.getElementById("pokemonName").value
  }

}

fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
     .then(response => {
        if(!response.ok){
           throw new Error("Could not fetch resource");
        }
	 return response.json();
       })
     .then(data => console.log(data.id))
     .catch(error => console.error(error));

ex-2
-----

fetchData();

async function fetchData(){
    try{
      const response = await fetch("https://pokeapi.co/api/v2/pokemon")
	
	if(!response.ok){
          throw new Error("Could not fetch resource")
        }

        const data = await response.json();
	console.log(data);
    }
    catch(error){
        console.error(error);
    }


}
 







fetch("person.json")
     .then(response => response.json())
     .then(values => values.forEach(value => console.log(value.isEmployed)))
     .catch(error => console.error(error));

