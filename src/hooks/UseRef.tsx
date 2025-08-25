import { useRef } from "react";

export const UseRefExample = () => {
    // useRef returns a mutable ref object whose .current property can hold any value
    // In this case, we are using it to directly access the input DOM element
    const inputRef = useRef<HTMLInputElement>(null);

    const onCLick = () => {
        // Accessing the current value of the input field using ref
        // This avoids using state for simple DOM access, which would trigger re-renders
        console.log(inputRef.current?.value);
    };

    return (
        <div>
            <h2>UseRef Example</h2>
            {/* Attach the ref to the input element */}
            <input type="text" ref={inputRef} />
            <button onClick={onCLick}>Console Log</button>
        </div>
    ); 
};

/*
Explanation:

1. What is useRef?
- useRef is a React hook that provides a way to hold a mutable value that persists across renders.
- The most common use is to access DOM elements directly.

2. How to use it?
- Create a ref using const myRef = useRef(initialValue).
- Attach it to a JSX element with the ref prop: <input ref={myRef} />.
- Access the element (or value) via myRef.current.

3. Why use it?
- To access DOM elements directly (like reading an input value or focusing an element).
- To persist mutable values without triggering re-renders.
- For example, storing timers, counters, or previous state values.

4. When to use it?
- When you need to manipulate or read a DOM element directly.
- When you need a value that persists across renders but should not cause re-renders when it changes.
*/
