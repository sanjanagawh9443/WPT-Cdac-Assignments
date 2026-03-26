*import React, { useState } from 'react';
import './App.css'; // Optional: for styling
function Counter() {
  // Declare a state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);
  // Event handler to increment the count
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Event handler to decrement the count
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // Event handler to reset the count
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-display">Count: {count}</h1>
      <button onClick={handleIncrement} className="counter-button increment">
        Increment
      </button>
      <button onClick={handleDecrement} className="counter-button decrement">
        Decrement
      </button>
      
    </div>
  );
}
export default Counter;
