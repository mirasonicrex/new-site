import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import SpecialProjectHighlight from './components/SpecialProjectHighlight';
import FloatingSprites from './components/FloatingSprites';
import Slideshow from './components/SlideShow';
import Header from './components/Header';
import Footer from './components/Footer';
import DropdownMenu from './components/DropdownMenu';

function App() {
  return (
    <div className="App">
      <Header/>
    <div className="floatingSprite">
        <FloatingSprites />
      </div>
      <div className="mainContent">
        <SpecialProjectHighlight />
        <div style={{display:'flex', flexDirection: 'column', justifyContent:  'space-evenly'}}>
        <DropdownMenu portfolioLink={"https://miraheckmann.netlify.app/"} year={"2020"}/>
        <DropdownMenu portfolioLink={"https://miraheckmann.netlify.app/"} year={"2023"}/>
        </div>
  
        <Dashboard />
        <Slideshow />
      </div>
    <Footer  />
    </div>

  );
}

export default App;
