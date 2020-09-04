import React from "react";

import TopSection from "./Components/TopSection.js";
import ResumeSection from "./Components/ResumeSection.js"

import ResumeSections from "./Data/ResumeSections.js"

function App() {

  const mappedResumeSections = ResumeSections.map((section) => {
    return(
      <ResumeSection SectionData={section} />
    );
  });

  return (
    <div className="App">
      <TopSection />
      {mappedResumeSections}
    </div>
  );
}

export default App;
