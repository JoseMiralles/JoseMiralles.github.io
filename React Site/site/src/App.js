import React from "react";

import TopSection from "./Components/TopSection.js";
import ResumeSection from "./Components/ResumeSection.js"

function App() {

  //Place holder data.
  const WorkSectionContents = {
    title: "Work",
    darkTheme: true,
    items: [
      {
        jobTitle: "Apprentice Web Developer",
        imgSrc: ".././assets/Maxx_isometric-ish_downscaled.png",
        employer: "Maxx Potential",
        dateRange: "May 2019 - February 2020",
        description: "Description test",
        highlights:[
          "Part of the operations and maintenance team that maintained, developed, and updated the WordPress multisite for MedStar health.",
          "Developed, and modified plugins, widgets, and themes.",
          "Used the PHP Storm IDE for developing, debugging, and unit testing.",
          "Used Jira for agile development with a kanban board.",
          "Used HTML, PHP, JavaScript, jQuery, SCSS, and Bootstrap.",
          "Used Git, with a remote repo hosted on BitBucket.",
          "Deployed to different environments with Capistrano.",
          "Used Vagrant and VirtualBox to develop locally."
        ],
        links:[
          {title: "Visit Site", url:"www.google.com"},
          {title: "View source", url:"www.google.com"}
        ]
      }
    ]
  }

  return (
    <div className="App">
      <TopSection />
      <ResumeSection content={WorkSectionContents} />
    </div>
  );
}

export default App;
