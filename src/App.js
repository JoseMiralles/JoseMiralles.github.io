import React from "react";

import TopSection from "./Components/TopSection.js";
import ResumeSection from "./Components/ResumeSection.js"

import ResumeSections from "./Data/ResumeSections.js"

function App() {

  const mappedResumeSections = ResumeSections.map((section, index, array) => {
    let nextItemTitle = "";
    if (index < array.length - 2){
      nextItemTitle = array[index + 1].title;
    } else  { nextItemTitle = ""; }
    return(
      <ResumeSection SectionData={section} nextTitle={nextItemTitle} />
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
