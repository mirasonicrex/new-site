import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import SpecialProjectHighlight from './components/SpecialProjectHighlight';
import FloatingSprites from './components/FloatingSprites';
import Slideshow from './components/SlideShow';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
    <div className="floatingSprite">
        <FloatingSprites />
      </div>
      <div className="mainContent">
        <SpecialProjectHighlight />
        <Dashboard />
        <Slideshow />
      </div>
    <Footer  />
    </div>

  );
}

export default App;
