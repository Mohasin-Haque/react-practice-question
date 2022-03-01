import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(10);
  const inputHandler = (e) => {
    setCounter(10 - e.target.value.length)
  }

  return (
    <div className="App">
      <h1>Fixed Input</h1>
      <p>
        ex1: character counter (Twitter)# See the Twitter post component. It
        gives you an indicator of the character count. Replicate that behavior.
      </p>
      <input onChange={inputHandler} placeholder="Enter Here" />
      <h2>{counter}</h2>
    </div>
  );
}
