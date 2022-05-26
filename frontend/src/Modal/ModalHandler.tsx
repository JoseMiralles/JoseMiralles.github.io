
import React from "react";

import "./ModalHandler.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../state";
import { IProject, projectDictionary, projectLists } from "../ProjectsComponents/ProjectsData";
import { Console } from "console";

const ModalHandler = () => {

    const [modal, setModal] = useRecoilState(modalState);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        const attribute = (e.target as any).getAttribute("click-action");
        if (attribute === "close-modal") setModal("");
    };

    const project: IProject | undefined = projectDictionary[modal];

    return (
        <div className="modal-wrapper">
            { (project !== undefined) ?

                <div
                    className="modal-background"
                    onClick={handleClick}
                    click-action="close-modal"
                    >
                    <div className="modal">

                        <div
                            className="close-modal-button"
                            click-action="close-modal"
                            >X</div>

                        {
                            (project.image) ?
                            <img
                                className="project-image"
                                src={project.image}
                                alt={`${project.name} image`}
                            /> :
                            <div id="modal-title">
                                <h1>{project.name}</h1>
                            </div>
                        }

                        <p>{project.description}</p>

                    </div>
                </div>

            : ""}
        </div>
    );
};

export default ModalHandler;
