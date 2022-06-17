import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { modalState, techFiltersState } from "../state";

import { IProject, IProjectList, technologyTypes } from "./ProjectsData";
import TechnologiesList from "./TechnologiesList";

interface IParams {
    pl: IProjectList
}

const ProjectList = ({pl}: IParams) => {

    const techSort = useRecoilValue(techFiltersState);

    const techHash = new Set<technologyTypes>();

    pl.projects.forEach(p => {
        let score = 0;
        p.technologies.forEach(t => {
            techHash.add(t)
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

    const techComparator = (
        a: technologyTypes, b: technologyTypes
    ) => {
        const aIsSelected = techSort.includes(a) ? 1 : -1;
        const bIsSelected = techSort.includes(b) ? 1 : -1;
        return bIsSelected - aIsSelected;
    };

    return (
        <div className="project-section">

            {pl.description && (
                <div className={"p-list-description-wrapper"}>
                    <div className="p-list-description">{pl.description}</div>
                </div>
            )}

            <TechnologiesList technologies={Array.from(techHash).sort(techComparator)}/>

            <div
                // onClick={onClick}
                className="project-list">

                {pl.projects.sort(projectComparator).map((p, idx) => (
                    <Link
                        to={`project/${p.name}`}
                        key={idx}
                        data-index={p.name}
                        className="project-item-card">

                        { // Project match rating
                            (p.techMatchRating !== undefined && p.techMatchRating > 0)
                                && <span className="rating">
                                    {"matches: " + p.techMatchRating}
                                </span>
                        }
                        
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
