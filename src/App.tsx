import React from 'react';
import './App.css';
import Dashboard from './components/Projects/Dashboard';
import RectentProjects from './components/Projects/RecentProjects';
import FloatingSprites from './components/Background/FloatingSprites';
import Slideshow from './components/Projects/3DModeling/SlideShow';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DropdownMenu from './components/Projects/DropdownMenu';
import ThreeProject from './components/Projects/ThreeProject';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Header/>
    <div className="floatingSprite">
        <FloatingSprites />
      </div>

      <div className="mainContent">
      <div style={{marginTop: '60px'}} id="about">
        <About  />
      </div>
      <div id="recentProjects">
        <ThreeProject /> 
      </div>
        <div >
        <RectentProjects />
        </div>
        <div id="pastPortfolios"  style={{marginTop: '100px'}}></div>
        <div  style={{display:'flex', flexDirection: 'column', justifyContent:  'space-evenly'}}>
        <DropdownMenu portfolioLink={"https://miraheckmann.netlify.app/"} year={"2020"}/>
      
        <DropdownMenu portfolioLink={"https://mira-portfolio-v2.netlify.app/"} year={"2023"}/>
       
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
