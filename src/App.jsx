import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleChange(e){
    setCount(e.target.value);
  }

  return (
    <>
      <h1>React Count is : {count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
        <button onClick={() => setCount((count) => (count = 0))}>Reset</button>

        <button onClick={() => setCount((count) => count * 2)}>
          Double the Count
        </button>
        <h2>Enter Any Custon Value</h2>
        <input type="number" name="value" onChange={handleChange}/>
      </div>
    </>
  );
}

export default App;
