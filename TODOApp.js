import React, { useState } from 'react';

function App() {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to store the current text in the input field
  const [inputValue, setInputValue] = useState('');

  // Function to handle adding a task
  const addTask = () => {
    if (inputValue.trim() !== '') {
      // Add the new task to the array and clear the input
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  // Function to handle the "Enter" key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1>To-Do List</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Enter a task..."
          style={{ padding: '8px', marginRight: '10px', width: '250px' }}
        />
        <button onClick={addTask} style={{ padding: '8px 15px', cursor: 'pointer' }}>
          Add Task
        </button>
      </div>

      {/* Ordered List to display tasks */}
      <ol style={{ lineHeight: '2.0' }}>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>

      {tasks.length === 0 && <p style={{ color: 'gray' }}>No tasks added yet!</p>}
    </div>
  );
}

export default App;
