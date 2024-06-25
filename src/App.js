import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Coursework from './components/Coursework';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Coursework />
    </>
  );
}

export default App;
