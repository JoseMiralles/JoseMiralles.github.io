import React from "react";

import { IProject, IProjectList } from "./ProjectsData";

interface IParams {
    pl: IProjectList
}

const ProjectList = ({pl}: IParams) => {

    return (
        <div className="project-section">

            {pl.description && (
                <div className={"p-list-description-wrapper"}>
                    <div className="p-list-description">{pl.description}</div>
                </div>
            )}

            <div className="project-list">
                {pl.projects.map(p => (
                    <div className="project-item-card">

                        <div className="project-top-bar">
                            <span className="project-name">{p.name}</span>
                            {p.technologies.map((t, i) => (
                                <span className="tech-pill">{t}</span>
                            ))}
                        </div>
                        <div className="project-description">{p.description}</div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProjectList;
