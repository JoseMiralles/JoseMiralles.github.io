import React from "react";

import "./ProjectList.scss";
import { IProject, IProjectList } from "./ProjectsData";

const ProjectList = (pl: IProjectList) => {

    return (
        <div className="fill-screen project-section">

            <div className="top-section">
                <div className="title">{pl.title}</div>
                <div className="description">{pl.description}</div>
            </div>

            <div className="project-list">
                {pl.projects.map(p => (
                    <div className="project-item">

                        <div className="project-name">{p.name}</div>
                        <div className="project-description">{p.description}</div>
                        
                        <div className="links-list">
                            {p.links.map(l => (
                                <a
                                    className="project-link"
                                    href={l.url}
                                >{l.title}</a>
                            ))}
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProjectList;
