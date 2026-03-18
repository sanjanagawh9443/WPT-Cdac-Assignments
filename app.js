import React, { useState } from "react";

function isPalindrome(n) {
  let s = "" + n;  // string
  let len = s.length;

  for (let i = 0; i < len / 2; i++) {
    if (s[i] !== s[len - i - 1])
      return false;
  }
  return true;
}

function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState(null);

  const checkPalindrome = () => {
    if (num === "") return;
    setResult(isPalindrome(num));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Palindrome Checker</h1>

      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter a number"
      />

      <br /><br />

      <button onClick={checkPalindrome}>
        Check
      </button>

      <p>
        {result !== null &&
          (result ? "Palindrome " : "Not Palindrome ")}
      </p>
    </div>
  );
}

export default App;