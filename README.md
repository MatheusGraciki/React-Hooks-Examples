# React Hooks Example Project

This is a small React project created to practice and demonstrate some of the most essential React hooks: **useState**, **useEffect**, **useContext**, and **useRef**.  

It includes example components that show how to manage state, share data between components, handle effects, and access DOM elements directly.  

---

## Features

- **useState**: Manage component state easily.
- **useEffect**: Handle side effects and lifecycle events.
- **useContext**: Share state across multiple components without prop drilling.
- **useRef**: Access DOM elements and persist mutable values across renders.

---

## Project Structure

src/
├── UseStateExample.tsx # Example of useState hook
├── UseEffectExample.tsx # Example of useEffect hook
├── UseContextExample.tsx # Example of useContext hook
└── UseRefExample.tsx # Example of useRef hook


---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/MatheusGraciki/react-hooks-example.git
```
```bash
cd react-hooks-example
```
 Install dependencies:
```bash
npm install
```

 Start the development server:

```bash
 npm start
```
Open http://localhost:3000

in your browser to see the project running.

## Usage:

- UseStateExample: Toggle a boolean state and see it reflected in the component.

- UseEffectExample: Observe side effects when state changes or the component mounts/unmounts.

- UseContextExample: Share a toggle state between child components using Context.

- UseRefExample: Access an input field value directly without using state.

## Learnings

This project helped me understand:

  - How useState allows state management in functional components.

  - How useEffect works for side effects and lifecycle-like behavior.

  - How useContext avoids prop drilling and centralizes shared state.

  - How useRef can access DOM elements and keep values persistent across renders without triggering re-renders.
