// // Selecting  Elements
// // To manipulate the dom you first need to select
// // 1. Selecting elements - getElementById, query selector
// // const heading = document.getElementById("main-title");
// // console.log(heading);

// // const items = document.getElementsByClassName("items");
// // console.log(items);

// // const paragraphs = document.getElementsByTagName("p");
// // console.log(paragraphs);

// // const firstItem = document.querySelector(".list-item")
// // console.log(firstItem);

// // const allItems = document.querySelectorAll(".list-item")
// // console.log(allItems);

// // // 2. Modifying elements - .textContent, .innerHTML
// // const headingg = document.getElementById("main-title");
// // heading.textContent = "JavaScript DOM Mastery!";

// // const content = document.querySelector("#content");
// // content.innerHTML = "<h1>New Content Added! <h1>";

// // const link = document.querySelector("a");
// // link.setAttribute("href", "https://google.com");
// // link.setAttribute("target", "_blank");

// // const box = document.querySelector(".box");
// // box.style.backgroundColor = "blue";
// // box.style.fontSize = "20px";

// // Create a new <li> element
// const newItem = document.createElement("li");
// newItem.textContent = "New List Item";

// // Select the reference item (first item with class "list-item")
// const referenceItem = document.querySelector(".list-item");

// // Select the <ul> element
// const list = document.querySelector("ul");

// // Insert the new item before the reference item
// list.insertBefore(newItem, referenceItem);

// // 3. Adding and removing Elements - createElement, .appendChild(), .remove(), .removeChild()
// newItem.remove();
// list.removeChild(newItem);
// // 4. Event Handling - .addEventListener(), .removeEventListner()



// // 5. Traversing the dom
// // 6. Class List - add, remove, Toggle classes
// // 7.
