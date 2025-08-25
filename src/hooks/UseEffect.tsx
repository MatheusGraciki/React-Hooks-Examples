import { useEffect, useState } from "react";

// Tipagem de um post da API
type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export const UseEffectExample = () => {
    const [data, setData] = useState<Post[]>([]);
    const [postLimit, setPostLimit] = useState<number>(5); // UseEffect dependecy

/*
    useEffect is a React hook that lets you run code at certain moments in a component's life.

    Think of it like this:
        - When the component first appears on the screen.
        - When some data in the component changes.
        - When the component is about to disappear.

    You can use it to:
        - Get data from an API when the page loads.
        - Set up things like timers or event listeners.
        - Change something in the page (DOM) after it shows.
        - Keep your data in sync with something outside the component.

    How it works:
        - useEffect with no dependencies → runs after every time the component shows or updates.
        - useEffect with an empty array [] → runs only once, when the component first shows.
        - useEffect with [someValue] → runs when the component first shows and again whenever "someValue" changes.

    Cleanup:
        - If your effect starts something (like a timer or event listener), 
        you should stop it when you don’t need it anymore.
        - To do this, return a function inside useEffect. React will call it when 
        the component is removed from the screen or before running the effect again.
  */
    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json: Post[]) => setData(json.slice(0, postLimit))); // limita pelo estado

    // We don’t use cleanup here because there’s nothing to “turn off”
  }, [postLimit]); // Dependency: runs whenever postLimit changes

    return (
    <div>
        <h2>UseEffect with Dependency Example</h2>
        <label>
            Show posts:{" "}
            <input
                type="number"
                value={postLimit}
                onChange={(e) => setPostLimit(Number(e.target.value))}
                min={1}
                max={20}
            />
        </label>

        <ul>
            {data.map((item) => (
                <li key={item.id}> 
                {item.id}:
                {item.body}
                </li>
            ))}
        </ul>
    </div>
    );
};
