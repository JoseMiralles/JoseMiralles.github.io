
import React from "react";

import "./ModalHandler.scss";
import { useRecoilValue } from "recoil";
import { modalState } from "../state";

const ModalHandler = () => {

    const modal = useRecoilValue(modalState);

    return (
        <div className="modal-wrapper">
            { modal.length ?

                <div className="modal-background">
                    <div className="modal">
                        <h1>{modal}</h1>
                    </div>
                </div>

            : ""}
        </div>
    );
};

export default ModalHandler;
