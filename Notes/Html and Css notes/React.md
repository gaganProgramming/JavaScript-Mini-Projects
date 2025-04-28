# Components, props, state
# Hooks (useState, useEffect, useRef)
# Controlled vs uncontrolled components
# Conditional rendering 

## components
Building Blocks of any react app
Two types
 Functional comoponent
 Class Components

 ````````````````````js
 function Greeting(){
    return <h1>Hello</h1>
 }
 ``````````````````````````

 ### Props
 Inputs to a component.
 Read-only data passed from parent to child

 ```````````````````````````js
 function Greeting(props){
  return  <h1>Hello, {props.name}</h1>;
 }
 <Greeting name = "Gagan" />
 ``````````````````````````````
 Think of props like arguments to a function.

 ### State
 Internal data managed inside a component.
 Unlike props, state is mutable (can change).
 ````````````````````````````````js
 import {useState} from 'react';

 function Counter(){
    const [count, setCount] = useState(0);

    return(
        <button onClick = {()=> setCount(count + 1)}>
        Clicked {count} times
        </button>
    )
 }
 `````````````````````````````````
 ## Hooks:
 ### useState
 Add state to a functional component.

 syntax: 
 ````````````````````````js
 const [state, setState] = useState(initalValue);
 ``````````````````````````````````````
 ### useEffect
 Runs side effects(like API calls, timers) after render.

 Basic Example:

```````````````````````````js
import {useEffect} from 'react';
useEffect(()=> {
  console.log('Component mounted!');
}, []); // Empty array = run only once
````````````````````````````

Runs every time dependencies change: 

useEffect(()=>{
    console.log('count changed');
}, [count]);

### useRef
1. Keeps a mutable reference that doesn't cause re-render.
2. Offen used to access DOM elements directly or store previous values.
````````````````````````````````````````````js
import {useRef} from 'react';

function TextInput(){
    const inputRef = useRef();

    function focusInput(){
        inputRef.current.focus();
    }
    return(
        <>
        <input ref ={inputRef}/>
        <button onClick = {focusInput}>Focus Input</button>
        </>
    )

}

``````````````````````````````````````````````

# 3. Controlled Components
React controls the input value via state.

```````````````````````````````````js
function ControlledInput(){
 const [value, setValue] = useState('');

 return(
  <input
    value = {value}
    onChange = {(e) => setValue(e.target.value)}
   />
 )
}
```````````````````````````````````````
React always knows the value

## Uncontrolled Components
Dom handles the input value directly(using refs).
`````````````````````````````````````js
function UncontrolledInput(){
 const inputRef = useRef();

  function handleSubmit(){
    alert(inputRef.current.value);
   }

   return(
     <>
        <input ref={inputRef} />
        <button onClick = {handleSubmit}>Submit</button>
     </input>
   )
}
````````````````````````````````````````````````

React reads value only when needed.

## Conditional Rendering
Definition
Rendering components or UI based on a condition.

Simple Example: 
``````````````````````````````````````jsx
function Greeting({isLoggedIn}){
    return(
        <>
          {isLoggedIn? <h1>Welcome back!</h1>:<h1>Please sign up.</h1>}
    )
}
````````````````````````````````````````

you can use: 
`if`
`?:`
`&&`(short-circuit)
Switch cases(for multiple conditions)