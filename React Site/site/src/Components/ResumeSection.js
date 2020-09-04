import React from "react"

import ResumeItem from "./ResumeItem.js";
import NextSectionArrow from "./NextSectionArrow.js";

class ResumeSection extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {

        // Map resume items if this section contains items.
        let resumeItems = null;
        if (this.props.SectionData.items) {
            resumeItems = this.props.SectionData.items.map((item) => {
                return (
                        <ResumeItem content={item} />
                );
            });
        }

        // Surround by div row if this section is for smaller items.
        if (resumeItems && this.props.SectionData.smallItems){
            resumeItems = (
                <div className="row my-5">
                    {resumeItems}
                </div>
            );
        }

        return (

            <div className={this.props.SectionData.darkTheme ? "page_section dark_section" : "page_section light_section"}>
                <div className="section_title_wrapper">
                    <h1 className="section_title">{this.props.SectionData.title}</h1>
                </div>
                <div className="container">

                    {resumeItems ? resumeItems : ""}

                </div>
                <div className="container"><hr /></div>
                {/*<NextSectionArrow text={this.props.nextTitle}/>*/}
            </div>


        );
    }

}

export default ResumeSection;