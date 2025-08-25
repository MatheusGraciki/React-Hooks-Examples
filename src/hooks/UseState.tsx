import { useState } from 'react';

export const UseStateExample = () => {

    const [count, setCount] = useState(0); 
    const increaseCounter: React.MouseEventHandler = () => setCount(count + 1);
    return (
        <div>
            <h2>Use State Example</h2>
            <p>Count: {count}</p>
            <button onClick={increaseCounter}> Increase Counter </button>
        </div>
    );
};