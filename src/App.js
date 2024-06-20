import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
    </>
  );
}

export default App;
