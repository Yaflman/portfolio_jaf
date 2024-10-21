import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Element name="about" className="section">
        <About />
      </Element>
      <Element name="projects" className="section">
        <Projects />
      </Element>
      <Element name="experience" className="section">
        <Experience />
      </Element>
    </div>
  );
}

export default App;
