
import { useState } from "react";
export default function Count() {
  const [count, setCount] = useState("");
  return (
    <div className="App">
      <h1>Count{count}</h1>
      <button onClick={() => { setCount(Number(count) + 1) }}>Press</button>
    </div>
  );
}

