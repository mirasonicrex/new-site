import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import SpecialProjectHighlight from './components/SpecialProjectHighlight';
import FloatingSprite from './components/FloatingSprite';
import Slideshow from './components/SlideShow';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
    <div className="floatingSprite">
        <FloatingSprite />
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
