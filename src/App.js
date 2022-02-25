import "./styles.css";

export default function App() {
  
  return (
    <div className="App">
      <h1>Fixed Input</h1>
      <input onChange={inputHandler} placeholder="Enter Here" />
      <h2>{remainingWords}</h2>
    </div>
  );
}
