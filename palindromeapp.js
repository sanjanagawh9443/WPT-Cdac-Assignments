import React, { useState } from 'react';
import './App.css';
import isPalindrome from './IsPalindrome'; 
function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");
  const checkPalindrome = () => {
    if (isPalindrome(num)) {
      setResult(`${num} is a Palindrome! `);
      console.log("Result: Yes, it is a palindrome.");
    } else {
      setResult(`${num} is NOT a Palindrome. `);
      console.log("Result: No, it is not a palindrome.");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Palindrome Checker</h1>
    
        <div style={{ marginTop: '20px' }}>
          <input 
            type="text" 
            placeholder="Enter a number or string" 
            value={num}
            onChange={(e) => setNum(e.target.value)}
            style={{ padding: '10px', fontSize: '16px' }}
          />
          <button 
            onClick={checkPalindrome}
            style={{ marginLeft: '10px', padding: '10px 20px', cursor: 'pointer' }}
          >
            Check
          </button>
        </div>
        <h2 style={{ marginTop: '20px', color: 'yellow' }}>{result}</h2>
      </header>
    </div>
  );
}
export default App;