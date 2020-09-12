import React from "react";

import HeroSection from "./Components/HeroSection.js";
import MainResumeSection from "./Components/MainResumeSection.js";
import BuiltWithReact from "./Components/BuiltWithReact.js";

function App() {



  return (
    <div className="App m-xl-4 light_bg">
      <HeroSection />
      <MainResumeSection />
      <BuiltWithReact />
    </div>
  );
}

export default App;
