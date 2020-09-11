import React from "react";

import { mainSections } from "../Data/ResumeSections.js";

class MainResumeSection extends React.Component {
    render() {

        const mappedMainSections = mainSections.map((item, index) => {

            const mappedWorkItems = item.items.map(wItem => {
                return (
                    <ResumeItem data={wItem} />
                );
            });

            return (
                <div className="col-12" key={index}>

                    <div className="row">
                    <br/> <br/> <br/>
                        {/* Section Title */}
                        <div className=" col-md-7 offset-md-5 p-5 dark_bg text-center">
                            <div className="">
                                <h1 className="">{item.title}</h1>
                            </div>
                        </div>
                    </div>

                    {mappedWorkItems}

                </div>
            );
        });

        return (
            <div className="section">
                {mappedMainSections}
            </div>
        );
    }
}


class ResumeItem extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render(props) {

        const data = this.props.data;

        const highlights = data.highlights.map(hl => {
            return (
                <li>{hl}</li>
            );
        })

        return (

            <div className="row m-sm-6 light_bg">

                {/*Image and title*/}
                <div className="col-md-5 py-5 align-self-center">
                    <div className="col-md-8 offset-md-2 p-3 align-self-center text-center">
                        <img className={"w-75 mb-4 " + (data.roundImg ? "rounded-img" : "")}
                            src={data.imgSrc} />
                        <div><strong>{data.employer}</strong></div>
                        <div className="text-muted">{data.jobTitle}</div>
                    </div>
                </div>

                {/* Bullet points and description. */}
                <div className="col-md-7 d-flex py-3 dark_bg">
                    <div className="col-md-10 p-4 align-self-center offset-md-1">

                        {data.description ? <p>{data.description}</p> : ""}

                        <hr />
                        {/* Bullet points */}
                        <ul>{highlights}</ul>
                        <hr />

                    </div>
                </div>

            </div>

        );
    }
}


export default MainResumeSection;