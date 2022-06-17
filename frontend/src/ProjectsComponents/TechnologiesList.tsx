
import React from "react";
import { useRecoilState } from "recoil";
import { techFiltersState } from "../state";
import { technologyTypes } from "../data/ProjectsData";
import "./TechnologiesList.scss"

const TechnologiesList = (
    {technologies}: {technologies: technologyTypes[]}
) => {
    
    const [filters, setFilters] = useRecoilState(techFiltersState);

    const onClick = (e: React.MouseEvent) => {
        const tech = (e.target as any).innerHTML;
        if (filters.includes(tech))
            setFilters(filters.filter(t => t !== tech));
        else
            setFilters(filters.concat([tech]));
    };

    const mapped = technologies.map((t, i) => {
        const trail = filters.includes(t) ? "selected" : "";
        return (
            <div className={"tech " + trail} key={i}>
                {t}
            </div>
        );
    });

    return (
        <div id="tech-list" onClick={onClick}>
            <div id="sort-text">Sort:</div>
            {mapped}
        </div>
    );
};

export default TechnologiesList;
