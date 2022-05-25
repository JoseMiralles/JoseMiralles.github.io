import React from 'react';
import HeroSection from './HeroSection';
import ModalHandler from './Modal/ModalHandler';
import ProjectSection from './ProjectsComponents/ProjectSection';

function App() {
  return (
    <div className="App">

      <ModalHandler/>
      <HeroSection/>
      <ProjectSection/>
    
    </div>
  );
}

export default App;
