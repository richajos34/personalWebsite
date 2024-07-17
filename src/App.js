import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Coursework from './components/Coursework';
import ContactForm from './components/ContactForm';
import Extracurriculars from './components/Extracurriculars';
import Skills from './components/Skills';
import ContractProjectsGrid from './components/ContractProjectsGrid';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <ContractProjectsGrid />
      <Education />
      <Extracurriculars />
      <Coursework />
      <ContactForm />
    </>
  );
}

export default App;
