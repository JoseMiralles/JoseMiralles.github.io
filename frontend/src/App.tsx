import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HeroSection from './HeroSection';
import ModalHandler from './Modal/ModalHandler';
import ProjectSection from './ProjectsComponents/ProjectSection';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="project/:projectName" element={<ModalHandler />} />
      </Routes>

      <HeroSection />
      <ProjectSection />

    </div>
  );
}

export default App;
