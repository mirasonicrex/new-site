import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import SpecialProjectHighlight from './components/SpecialProjectHighlight';
import FloatingSprite from './components/FloatingSprite';

function App() {
  return (
    <div className="App">
    <div className="floatingSprite">
        <FloatingSprite />
      </div>
      <div className="mainContent">
        <SpecialProjectHighlight />
        <Dashboard />
      </div>
    
    </div>
  );
}

export default App;
