import React from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { modalState } from "../state";

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

            <div
                // onClick={onClick}
                className="project-list">

                {pl.projects.map((p, idx) => (
                    <Link
                        to={`project/${p.name}`}
                        key={idx}
                        data-index={p.name}
                        className="project-item-card">
                        
                        {/* Project Image */}
                        {(p.images && p.images[0]) && (
                            <img className="project-card-image" src={p.images[0]}/>
                        )}

                        <div className="project-card-info">
                            <div className="project-top-bar">
                                <span className="project-name">{p.name}</span>
                                {p.technologies.map((t, i) => (
                                    <span key={i} className="tech-pill">{t}</span>
                                    ))}
                            </div>
                            <div className="project-description">{p.description}</div>
                        </div>

                        <div
                            data-index={p.name}
                            className="foreground-gradient"
                        ></div>
                        
                    </Link>
                ))}

            </div>

        </div>
    );
};

export default ProjectList;
