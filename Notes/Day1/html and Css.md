## 1. Semantic HTML, Forms, Accessiblity

**Semantic HTML**

 **Definition**:
 Semantic HTML means using Html tags that describe their meaning clearly- for humans and machines

#### Example
`<header>, <nav>, <main>, <section>, <articles> , <aside>,<footer>.`

**Why**
* Semantic Html
* Better SEO 
* Better Accessibility(screen reader)
* Easier for developers to read/maintain


````````````````````````html
 <article>
    <h2>Interview Preparation</h2>
    <p>Deep notes</p>
 </article>
 `````````````````````````

## Forms
`<form>, <input> <textarea> <button> <label> <select>, <option>`

**Important Attributes:**
* `action` -> Where to send form data
* `method` -> Get or POST
* `required` -> Must be filled.
* `type`-> Defines input type(text, email, number, password).

**Accessibility Tip:**

Always connect `<label>` with `<input> `using `for` and `id`.

## Flexbox

* `diplay: flex`  ->  Start flex behavior
* `flex-direction` -> Row(default)/ column
* `justify-content` -> Space along main axis(start, end, center, space-between)
* `align-items` -> Align on cross axis(start, center, stretch)
* `gap` -> Adds space between items


```````````````````css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


```````````````````````````

### center a div example

`````````````````````````css
parent {
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
``````````````````````````

## Css Grid
Grid = 2D layout system -> Arrange items in rows and columns

Important Properties

* `display: grid` -> Start grid behavior
* `grid-template-columns` -> Define column layout
* `grid-template-rows`-> Define row layout
* `gap` -> Add space between rows/columns
* `grid-column` -> span item across columns
* `grid-row`-> span item across rows

``````````````````````````css
.container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
``````````````````````````````````
This creates 3 equal columns with 20px gaps

Grid is powerfull for full page layouts, dashboards, image galleries.

### Media Queries, Responsiveness
Definition
Css feature that appilies styles based on screen/device size

syntax

````````````````````````````css
 @media(max-width: 768px){
    .container{
        flex-direction: column;
    }
 }
``````````````````````````````

Meaning- If screen width is 768px or less, change flex layout to column.

Common Breakpoints
Mobile - 600px, Tablet- 768px, Laptop-1024px, Desktop, 1200px+

Always mobile-first- design for small screens first, then larger ones.


``````````````````````````````css
.container{
    flex-direction: column;
}

 <!-- Mobile default -->
 @media(min-width: 768px){
    .container{
        flex-direction: row;
    }
 }
`````````````````````````````````

* Semantic HTML → SEO, Accessibility, Structure
* Forms → Correct inputs, labels, accessibility
* Flexbox → 1D Layout (Row OR Column)
* Grid → 2D Layout (Row AND Column)
Media Queries → Screen-based styling
Responsiveness → Mobile-first, flexible units