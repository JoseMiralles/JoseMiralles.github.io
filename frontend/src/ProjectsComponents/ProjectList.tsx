import React from "react";
import { useSetRecoilState } from "recoil";
import { modalState } from "../state";

import { IProject, IProjectList } from "./ProjectsData";

interface IParams {
    pl: IProjectList
}

const ProjectList = ({pl}: IParams) => {

    const setModal = useSetRecoilState(modalState);

    const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const modalName: string = (e.target as any).getAttribute("data-index");
        if (modalName.length) setModal(modalName);
    };

    return (
        <div className="project-section">

            {pl.description && (
                <div className={"p-list-description-wrapper"}>
                    <div className="p-list-description">{pl.description}</div>
                </div>
            )}

            <div
                onClick={onClick}
                className="project-list">

                {pl.projects.map(p => (
                    <div
                        data-index={p.name}
                        className="project-item-card">
                        
                        {p.image && ( <img className="project-card-image" src={p.image}/> )}

                        <div className="project-card-info">
                            <div className="project-top-bar">
                                <span className="project-name">{p.name}</span>
                                {p.technologies.map((t, i) => (
                                    <span className="tech-pill">{t}</span>
                                    ))}
                            </div>
                            <div className="project-description">{p.description}</div>
                        </div>

                        <div
                            data-index={p.name}
                            className="foreground-gradient"
                        ></div>
                        
                    </div>
                ))}

            </div>

        </div>
    );
};

export default ProjectList;
