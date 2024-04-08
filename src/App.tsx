import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import SpecialProjectHighlight from './components/SpecialProjectHighlight';
import FloatingSprites from './components/FloatingSprites';
import Slideshow from './components/SlideShow';
import Header from './components/Header';
import Footer from './components/Footer';
import DropdownMenu from './components/DropdownMenu';
import ThreeProject from './components/ThreeProject';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header/>
    <div className="floatingSprite">
        <FloatingSprites />
      </div>
      <div style={{marginTop: '60px'}} id="about">
        <About  />
      </div>
      <div id="recentProjects">
        <ThreeProject /> 
      </div>
      <div className="mainContent">
        <div >
        <SpecialProjectHighlight />
        </div>
        <div id="pastPortfolios"  style={{marginTop: '100px'}}></div>
        <div  style={{display:'flex', flexDirection: 'column', justifyContent:  'space-evenly'}}>
        <DropdownMenu portfolioLink={"https://miraheckmann.netlify.app/"} year={"2020"}/>
      
        <DropdownMenu portfolioLink={"https://miraheckmann.netlify.app/"} year={"2023"}/>
       
        </div>
        <div id="dashboard" className="section">
        <Dashboard />
      </div>
      <div id="slideshow" className="section">
        <Slideshow />
      </div>
      </div>
    <Footer  />
    </div>

  );
}

export default App;
