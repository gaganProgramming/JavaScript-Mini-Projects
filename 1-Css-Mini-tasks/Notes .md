Here’s a list of **commonly given tasks in interviews** for **CSS**, **JavaScript**, and **React**. These can be asked in live coding rounds, take-home assignments, or even during pair programming rounds.

---

### 🟦 **CSS Tasks**

These check layout skills, responsiveness, and visual creativity.

1. **Clone a UI** from Dribbble/Figma/any design (e.g., a login page or profile card).
2. **Responsive Navbar** with hamburger menu for mobile.
3. **Center a div** vertically and horizontally (with flexbox, grid, etc.).
4. **Build a responsive grid layout** (e.g., image gallery or cards layout).
5. **CSS Animations** – hover effects, loaders/spinners, transitions.
6. **Dark/Light Mode Toggle** using pure CSS or combined with JS.
7. **Sticky Header / Footer** implementation.
8. **Create a Tooltip or Modal** using only HTML & CSS.

---

### 🟨 **JavaScript Tasks**

These test DOM manipulation, event handling, logic, and data structures.

1. **Form validation** – name, email, password strength, etc.
2. **To-do list** with add, delete, edit, and localStorage.
3. **Image Slider / Carousel** – using setInterval or user controls.
4. **Counter App** with increment, decrement, reset.
5. **Stopwatch or Timer** using setInterval and clearInterval.
6. **Accordion / FAQ Component** – toggle visibility of answers.
7. **Weather App** using fetch API (usually using OpenWeatherMap).
8. **Custom dropdown / Autocomplete** (without `<select>`).
9. **Drag and Drop** elements using JS.
10. **Search and filter** through a list (array of objects).

---

### ⚛️ **React Tasks**

These are used to assess understanding of components, props, state, hooks, and routing.

1. **To-do list / CRUD app** with React state and optionally context or Redux.
2. **React Form with Validation** – using `useState`, and sometimes `react-hook-form` or `Formik`.
3. **Fetch API data** and display using `useEffect`.
4. **Pagination** – manually or with API integration.
5. **Counter App** using functional components and hooks.
6. **Create a reusable component** (e.g., Button, Card, Modal).
7. **Dark mode toggle** using context API.
8. **React Router mini project** – like a multi-page website.
9. **Authentication flow** – Login/Logout with localStorage and conditional routing.
10. **Infinite Scroll or Lazy Loading** content.

---

If you want, I can also give you:

- Sample GitHub repo links for inspiration
- Take-home assignment formats
- Tasks for system design rounds in frontend

Would you like that?

---

Perfect! Here's a complete set of useful resources and ideas categorized by your request:

---

## 🌟 **1. Sample GitHub Repos for Inspiration**

These repos showcase clean code, good UI/UX, and real-world features for **CSS**, **JavaScript**, and **React**.

### 🔷 Beginner-Friendly Projects

- **JavaScript Projects**

  - [vanilla-web-projects](https://github.com/bradtraversy/vanillawebprojects) – Projects like form validation, weather app, exchange rate app.
  - [js-mini-projects](https://github.com/gitdagray/js-mini-projects) – DOM projects using vanilla JS.

- **CSS Layouts & Components**
  - [30 Days of CSS](https://github.com/AsmrPro/30-Days-of-CSS) – Beautiful UI components.
  - [css-pro-layout](https://github.com/safak/youtube/tree/css-pro-layout) – Responsive layouts (Flexbox & Grid).

### 🔷 React Projects

- [react-projects](https://github.com/bradtraversy/react-projects) – Projects like GitHub Finder, Feedback App, etc.
- [awesome-react-components](https://github.com/brillout/awesome-react-components) – Collection of reusable React components.
- [react-todo-app](https://github.com/taniarascia/todo) – Simple React ToDo App with localStorage.
- [devfolio](https://github.com/soumyajit4419/Devfolio) – Fully responsive personal portfolio in React.

---

## 📝 **2. Take-Home Assignment Formats**

These simulate real-world frontend tasks and evaluate multiple skills.

### 💡 **Simple Take-Home Assignments (2–4 hours)**

1. **Build a To-Do App**

   - Features: Add/Edit/Delete, mark as complete, store in localStorage.
   - Bonus: Filter completed/pending, add animations.

2. **Create a Weather App**

   - Input city → fetch weather using OpenWeather API.
   - Display weather with icons and styling.

3. **Responsive Blog Layout**
   - Static data.
   - Create a home page, blog card component, and single post page using React Router.

### 🔍 **Medium Difficulty (5–8 hours)**

1. **E-commerce Product Page**

   - Fetch products from a public API (like [Fake Store API](https://fakestoreapi.com/)).
   - Add to cart, view cart, simple checkout flow.
   - Bonus: Sort/filter, responsive design.

2. **GitHub User Finder**

   - Input GitHub username → show profile, repos using GitHub API.
   - Pagination or infinite scroll of repos.

3. **Notes App**
   - Add/edit/delete notes.
   - Store notes in localStorage or Firebase.
   - Bonus: Markdown support, search bar.

---

## 🧠 **3. System Design Tasks in Frontend Interviews**

These evaluate how you plan UI architecture, structure components, and think at scale.

### ⚙️ **Common System Design Tasks**

1. **Design a Dashboard UI**

   - Multiple widgets/cards (e.g., sales, traffic, user activity).
   - Consider grid layout, responsiveness, and state management.
   - Bonus: Lazy loading, real-time updates (WebSockets or polling).

2. **Build a Chat Application (frontend only)**

   - Message list, input, online users sidebar.
   - Bonus: Scroll to bottom, load older messages on scroll-up.

3. **Design a Notification System**

   - Bell icon → show dropdown of notifications.
   - Mark as read, delete.
   - Badge count, animations.

4. **Image Gallery with Upload**

   - Upload images, preview, drag-and-drop reorder.
   - Use modals/lightbox to view larger images.

5. **Form Builder**
   - Drag & drop form elements (text input, checkbox, etc.).
   - Save form structure to JSON.

---

Would you like templates for README files, project structure guides, or a portfolio layout that showcases these kinds of projects professionally?

Awesome! Here's a complete set of **solutions** (with code) for the listed **CSS tasks** used in frontend interviews:

---

## ✅ **1. Clone a UI – Login Page Example**

A simple login UI cloned from a Dribbble-inspired design.

**🔗 Live:** [CodePen Login UI](https://codepen.io/gaganprogramming/pen/eYJxrOb)  
**📄 Code:**

```html
<div class="login-container">
  <h2>Login</h2>
  <input type="email" placeholder="Email" />
  <input type="password" placeholder="Password" />
  <button>Login</button>
</div>
```

```css
.login-container {
  width: 300px;
  margin: 10% auto;
  padding: 20px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 10px;
}
.login-container input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
}
```

---

## ✅ **2. Responsive Navbar with Hamburger Menu**

```html
<nav class="navbar">
  <div class="logo">MySite</div>
  <ul class="nav-links">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
  <div class="hamburger">&#9776;</div>
</nav>
```

```css
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #333;
  color: white;
}
.nav-links {
  display: flex;
  gap: 1rem;
  list-style: none;
}
.hamburger {
  display: none;
  cursor: pointer;
}
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
  }
  .hamburger {
    display: block;
  }
}
```

---

## ✅ **3. Center a Div Vertically and Horizontally**

### 💡 Flexbox Method

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.child {
  width: 200px;
  height: 100px;
  background: coral;
}
```

### 💡 Grid Method

```css
.parent {
  display: grid;
  place-items: center;
  height: 100vh;
}
```

---

## ✅ **4. Responsive Grid Layout**

```html
<div class="gallery">
  <div class="card">1</div>
  <div class="card">2</div>
  <div class="card">3</div>
  ...
</div>
```

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  padding: 1rem;
}
.card {
  background: #ddd;
  padding: 2rem;
  text-align: center;
}
```

---

## ✅ **5. CSS Animations – Hover, Spinner, Transitions**

### 🎯 Button Hover

```css
button {
  transition: transform 0.3s ease;
}
button:hover {
  transform: scale(1.05);
}
```

### ⏳ Spinner

```html
<div class="loader"></div>
```

```css
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid blue;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

---

## ✅ **6. Dark/Light Mode Toggle (with JS)**

```html
<button onclick="document.body.classList.toggle('dark')">Toggle</button>
```

```css
body {
  background: white;
  color: black;
  transition: 0.3s;
}
body.dark {
  background: #121212;
  color: white;
}
```

---

## ✅ **7. Sticky Header/Footer**

```css
header {
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1000;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
```

```html
<footer>
  <div style="position: sticky; bottom: 0;">Sticky Footer</div>
</footer>
```

---

## ✅ **8. Tooltip or Modal using only HTML & CSS**

### 💬 Tooltip

```html
<div class="tooltip">
  Hover me
  <span class="tooltiptext">Tooltip text</span>
</div>
```

```css
.tooltip {
  position: relative;
  cursor: pointer;
}
.tooltiptext {
  visibility: hidden;
  background-color: #333;
  color: #fff;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 5px;
  border-radius: 5px;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}
```

---

Want me to zip all of this into a GitHub repo for you with folders like `01-navbar`, `02-center-div`, etc.? I can set it up!

### ✅ **3. Center a Div Vertically and Horizontally**

#### 💡 **Using Flexbox**

**🧱 HTML:**

```html
<div class="parent">
  <div class="child">I'm centered!</div>
</div>
```

**🎨 CSS:**

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height of the viewport */
  background: #f0f0f0;
}

.child {
  padding: 2rem;
  background: #4caf50;
  color: white;
  border-radius: 10px;
}
```

---

#### 💡 **Using Grid**

**🧱 HTML:**

```html
<div class="parent-grid">
  <div class="child">Centered with Grid</div>
</div>
```

**🎨 CSS:**

```css
.parent-grid {
  display: grid;
  place-items: center;
  height: 100vh;
  background: #fafafa;
}

.child {
  padding: 2rem;
  background: #2196f3;
  color: white;
  border-radius: 10px;
}
```

---

Let me know if you want CodePen/JSFiddle links or a GitHub repo with all these tasks!
