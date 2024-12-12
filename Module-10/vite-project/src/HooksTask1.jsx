import React, { useState } from 'react';

const HooksTask1 = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={decrement} style={{ marginRight: '10px', padding: '10px 20px' }}>
          Decrement
        </button>
        <button onClick={increment} style={{ padding: '10px 20px' }}>
          Increment
        </button>
    </div>
  )
}

export default HooksTask1
