import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered or updated. Current count:", count);
  }, [count]); // runs every time 'count' changes

  return (
    <div>
      <h2>React Timer Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default Timer;