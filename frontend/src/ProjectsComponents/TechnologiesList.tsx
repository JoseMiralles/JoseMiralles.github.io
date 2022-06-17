
import React from "react";
import { useRecoilState } from "recoil";
import { techFiltersState } from "../state";
import { technologiesArr } from "./ProjectsData";
import "./TechnologiesList.scss"

const TechnologiesList = () => {
    
    const [filters, setFilters] = useRecoilState(techFiltersState);

    const onClick = (e: React.MouseEvent) => {
        const tech = (e.target as any).innerHTML;
        if (filters.includes(tech))
            setFilters(filters.filter(t => t !== tech));
        else
            setFilters(filters.concat([tech]));
    };

    const mapped = technologiesArr.map((t, i) => {
        const trail = filters.includes(t) ? "selected" : "";
        return (
            <div className={"tech " + trail} key={i}>
                {t}
            </div>
        );
    });

    return (
        <div id="tech-list" onClick={onClick}>
            {mapped}
        </div>
    );
};

export default TechnologiesList;
