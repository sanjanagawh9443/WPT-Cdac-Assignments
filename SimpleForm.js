import React, { useState } from 'react';
function SimpleForm() {
  const [inputValue, setInputValue] = useState("");
  const handleButtonClick = () => {
    console.log("Console Message: ", inputValue);
    alert("Message console mein print ho gaya hai: " + inputValue);
  };
  return (
    <div style={{ marginTop: '20px' }}>
      <input 
        type="text" 
        placeholder="write here.." 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <button 
        onClick={handleButtonClick} 
        style={{ marginLeft: '10px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Click Me
      </button>
    </div>
  );
}
export default SimpleForm;