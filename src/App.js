import { useState } from 'react';
import './App.css';

import Introduction from './components/introduction';
import About from './components/about';
import Projects from './components/Projects';
import Achievements from './components/Achievements'
import Extracurriculars from './components/Extracurriculars';
import Contact from './components/Contact'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <div className="portfolio-title">Portfolio</div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar1 ${isOpen ? false : true}`}></div>
          <div className={`bar2 ${isOpen ? false : true}`}></div>
          <div className={`bar3 ${isOpen ? false : true}`}></div>
        </div>
        <nav className="nav">
          <ul className={isOpen ? "open" : ""}>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#extracurriculars">Extracurriculars</a></li>
            <li><a href="#contact">Contact me</a></li>
          </ul>
        </nav>
      </header>
      <Introduction />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      <div id="extracurriculars">
        <Extracurriculars />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
