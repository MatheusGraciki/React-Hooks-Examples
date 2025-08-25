import React, { createContext, useState, useContext } from "react";

// Define the type for the context value
type GlobalStateType = {
    isToggle: boolean;
    setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create the context with proper typing
const GlobalStateContext = createContext<GlobalStateType | undefined>(undefined);

export const UseContextExample = () => {
    const [isToggle, setIsToggle] = useState(false);

    return (
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
    const context = useContext(GlobalStateContext);
    if (!context) throw new Error("ChildDisplay must be used within GlobalStateContext.Provider");

    const { isToggle } = context;

    return <p>Current State: {isToggle ? "ON" : "OFF"}</p>;
};
