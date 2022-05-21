import React, { useState } from "react";

import "./Projects.scss";
import { projectLists } from "./ProjectsData";

const ProjectSection = () => {

    const [selectedTab, setSelectedTab] = useState(projectLists[0].title);

    const onClick = (name: string) => {
        return () => {
            setSelectedTab(name);
        };
    };

    return(
        <div id="projects-section" className="center">

            <div className="tabs">
                {projectLists.map((p, i) => (
                    <div
                        key={i}
                        onClick={onClick(p.title)}
                        className={`tab ${(selectedTab === p.title) ? "selected" : ""}`}>
                        {p.title}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProjectSection;
