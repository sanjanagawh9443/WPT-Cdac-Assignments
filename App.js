import React from 'react';
import './App.css';
import SimpleForm from './SimpleForm'; // Apne component ko import kiya

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Console Task</h1>
        <p>Text box mein likhein aur console check karein.</p>
        
        {/* Component ko display kar rahe hain */}
        <SimpleForm />
        
      </header>
    </div>
  );
}

export default App;
