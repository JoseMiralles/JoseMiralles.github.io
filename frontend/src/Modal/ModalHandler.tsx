
import React from "react";

import "./ModalHandler.scss";
import { IProject, projectDictionary } from "../data/ProjectsData";
import SlideShow from "../slideshow/SlideShow";
import { useNavigate, useParams } from "react-router-dom";

const ModalHandler = () => {

    const navigate = useNavigate();

    const projectName = useParams<{projectName: string}>().projectName;
    if (!projectName) return (<span></span>);
    const project: IProject | undefined = projectDictionary[projectName];
    if (!project) return (<span></span>);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const attribute = (e.target as any).getAttribute("click-action");
        if (attribute === "close-modal") navigate("/");
    };

    return (
        <div className="modal-wrapper">
            { (project !== undefined) ?

                <div
                    onClick={handleClick}
                    className="modal-background"
                    click-action="close-modal"
                    >
                    <div className="modal">

                        {/* X button */}
                        <div
                            className="close-modal-button"
                            click-action="close-modal"
                            >X</div>

                        {/* Title */}
                        <div id="modal-title">
                            <h1>{project.name}</h1>
                        </div>

                        {/* // Slideshow */}
                        <SlideShow YTVideos={project.YTVideos} images={project.images}/>

                        {/* Tech tags */}
                        <div className="tech-list">
                            {project.technologies.map((t, i) => (
                                <div
                                    className="tech-item"
                                    key={i}
                                >{t}</div>
                            ))}
                        </div>

                        {/* Description */}
                        <p className="project-description">{project.description}</p>

                        {/* Links */}
                        <div className="project-links">
                            {project.links.map((l, i) => (
                                <a key={i} href={l.url} target="_blank">{l.title}</a>
                            ))}
                        </div>

                        {/* Highlights / bulletpoints */}
                        {
                            (project.highlights) &&
                            <ul className="highlights">
                                {project.highlights.map((h, i) => (
                                    <li key={i}>{
                                        (h.url) ?
                                        <a target="_blank" href={h.url}>{h.text}</a> :
                                        h.text
                                    }</li>
                                ))}
                            </ul>
                        }

                    </div>
                </div>

            : ""}
        </div>
    );
};

export default ModalHandler;
