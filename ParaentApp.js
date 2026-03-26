import React, { useState } from 'react';

// Child Component: Renders the dropdown and sends selection back to Parent
const ChildComponent = ({ onSelect }) => {
  const operations = ['Add', 'Subtraction', 'Division', 'Multiplication'];

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">--Select Operation--</option>
      {operations.map((op) => (
        <option key={op} value={op}>{op}</option>
      ))}
    </select>
  );
};

// Parent Component: Holds logic and displays the result
const ParentComponent = ({ num1, num2 }) => {
  const [result, setResult] = useState(null);

  const calculate = (operation) => {
    switch (operation) {
      case 'Add': setResult(num1 + num2); break;
      case 'Subtraction': setResult(num1 - num2); break;
      case 'Division': setResult(num2 !== 0 ? num1 / num2 : 'Cannot divide by zero'); break;
      case 'Multiplication': setResult(num1 * num2); break;
      default: setResult(null);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Numbers: {num1} and {num2}</h3>
      <ChildComponent onSelect={calculate} />
      {result !== null && <h4>Result: {result}</h4>}
    </div>
  );
};

// Main App
export default function App() {
  return (
    <div className="App">
      <ParentComponent num1={20} num2={10} />
    </div>
  );
}


