import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Introduction from './components/introduction';
import FooterBar from './components/footerbar';
import AboutMe from './components/aboutme';
import Projects from './components/projects';
import Experience from './components/experience';
import Gallery from './components/gallery';
import Contact from './components/contact';

const App: React.FC = () => {
  return(
    <>
      <Navigation />
      <FooterBar />
      <Routes>
          <Route path = '/' element = {<Introduction />} />
          <Route path = '/aboutme' element = {<AboutMe />} />
          <Route path = '/projects' element = {<Projects />} />
          <Route path = '/experience' element = {<Experience />} />
          <Route path = '/gallery' element = {<Gallery />} />
          <Route path = '/contact' element = {<Contact />} />
      </Routes>
    </>
  );
}

export default App;