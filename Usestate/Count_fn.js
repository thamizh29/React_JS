
import { useState } from "react";
export default function Count() {
  const [count, setCount] = useState("");
  return (
    <div className="App">
      <h2>Count{count}</h2>
    <h3>Hacktoberfest2024</h3>
      <button onClick={() => { setCount(Number(count) + 10) }}>Press</button>
    </div>
  );
}

