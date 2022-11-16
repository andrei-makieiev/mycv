import React from 'react';
import Header from '../Header/Header';
import Hero from '../HeroSection/Hero';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Slide from '../Slider/Slider';
import Education from '../Education/Education';

import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Hero/>
        <Projects/>
        <Experience/>
        <Slide/>
        <Education/>
      </div>
    );
  }
}

export default App; 