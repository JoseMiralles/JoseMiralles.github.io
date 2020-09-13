import React from "react";

import HeroSection from "./Components/HeroSection.js";
import MainResumeSection from "./Components/MainResumeSection.js";
import BuiltWithReact from "./Components/BuiltWithReact.js";
import Links from "./Components/Links.js"

import { mainSections } from "./Data/ResumeSections.js";

function App() {



  return (
    <div className="App m-xl-4 light_bg">
      <HeroSection />
      <MainResumeSection section={[mainSections[0]]} />
      <Links />
      <MainResumeSection section={[mainSections[1]]} />
      <BuiltWithReact />
    </div>
  );
}

export default App;
