import React from 'react';
import './App.css';
import SimpleForm from './SimpleForm'; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Console Task</h1>
        <p>Text box mein likhein aur console check karein.</p>
        <SimpleForm />
      </header>
    </div>
  );
}
export default App;
