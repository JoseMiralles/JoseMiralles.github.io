import React from "react";

import AFrameScene from "./AFrameScene.js";
import TopSectionTitle from "./TopSectionTitle.js";
import NextSectionArrow from "./NextSectionArrow.js";

class TopSection extends React.Component{

    render (){
        return (
            <div className="page_section top_section">
                <AFrameScene />
                <TopSectionTitle/>
            </div>
            );
    }
}

export default TopSection;