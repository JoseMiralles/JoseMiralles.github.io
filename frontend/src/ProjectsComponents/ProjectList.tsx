import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { modalState, techFiltersState } from "../state";

import { IProject, IProjectList } from "./ProjectsData";
import TechnologiesList from "./TechnologiesList";

interface IParams {
    pl: IProjectList
}

const ProjectList = ({pl}: IParams) => {

    const techSort = useRecoilValue(techFiltersState);

    pl.projects.forEach(p => {
        let score = 0;
        p.technologies.forEach(t => {
            if (techSort.includes(t)) score ++;
        });
        p.techMatchRating = score;
    });

    const projectComparator = (
        a: IProject, b: IProject
    ): number => {
        const scoreA = a.techMatchRating ?? 0;
        const scoreB = b.techMatchRating ?? 0;
        return scoreA >= scoreB ? -1 : 1;
    };

    return (
        <div className="project-section">

            {pl.description && (
                <div className={"p-list-description-wrapper"}>
                    <div className="p-list-description">{pl.description}</div>
                </div>
            )}

            <TechnologiesList/>

            <div
                // onClick={onClick}
                className="project-list">

                {pl.projects.sort(projectComparator).map((p, idx) => (
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
