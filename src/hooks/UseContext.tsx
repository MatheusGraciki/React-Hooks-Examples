import React, { createContext, useState, useContext } from "react";

// Define the type for the context value
type GlobalStateType = {
    isToggle: boolean;
    setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create the context with proper typing
// useContext allows us to share state across multiple components without passing props manually through each level
const GlobalStateContext = createContext<GlobalStateType | undefined>(undefined);

export const UseContextExample = () => {
    const [isToggle, setIsToggle] = useState(false);

    return (
    // Provider wraps components that need access to the shared state
    // "value" prop provides the state and function to update it
    <GlobalStateContext.Provider value={{ isToggle, setIsToggle }}>
        <div>
            <h2>UseContext Example</h2>
            <ChildToggle />
            <ChildDisplay />
        </div>
    </GlobalStateContext.Provider>
    );
};

// Child component to toggle the state
const ChildToggle = () => {
    // useContext hook allows this component to access the shared context directly
    // This avoids "prop drilling", where you'd have to pass props through intermediate components
    const context = useContext(GlobalStateContext);
    if (!context) throw new Error("ChildToggle must be used within GlobalStateContext.Provider");

    const { setIsToggle } = context;

    return (
    <button onClick={() => setIsToggle((prev) => !prev)}>
        Toggle State
    </button>
    );
};

// Child component to display the current state
const ChildDisplay = () => {
    // Again, using useContext to consume shared state
    const context = useContext(GlobalStateContext);
    if (!context) throw new Error("ChildDisplay must be used within GlobalStateContext.Provider");

    const { isToggle } = context;

    return <p>Current State: {isToggle ? "ON" : "OFF"}</p>;
};

/*
Explanation:

1. What is useContext?
    - useContext is a React hook that allows components to access a shared value (context) without passing props manually through each component level.

2. How to use it?
    - First, create a context with createContext().
    - Wrap the components that need access with <Context.Provider value={...}>.
    - Inside any child, use useContext(MyContext) to access the value.

3. Why use it?
    - To avoid "prop drilling" when multiple components need the same state or function.
    - It centralizes state management for related components.

4. When to use it?
    - When you have state or functions that are needed by many components across your component tree.
    - Example: themes, auth state, language preferences, or in this case, a toggle state shared by multiple children.
*/
