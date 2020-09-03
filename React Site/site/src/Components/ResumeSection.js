import React from "react"

import ResumeItem from "./ResumeItem.js";

class ResumeSection extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
    }

    render() {

        const workItem = this.props.content;

        return (

            <div className="page_section dark_section">
                <div className="section_title_wrapper">
                    <h1 className="section_title">{this.props.content.title}</h1>
                </div>
                <div className="container">

                    <ResumeItem content={workItem.items[0]} />

                </div>
                <div className="container"><hr /></div>
            </div>


        );
    }

}

export default ResumeSection;