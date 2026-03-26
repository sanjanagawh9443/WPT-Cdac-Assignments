*import React from 'react';

function App() {
  const data = ['C', 'C++', 'Java', 'AdvJava', 'WPT'];

  return (
    <div style={{ padding: '20px' }}>
      <label htmlFor="courses">Choose a course: </label>
      <select id="courses">
        {data.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;