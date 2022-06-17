
import React from "react";
import "./HeroSection.scss";
import Links from "./Links";

const HeroSection = () => {

    return (
        <div id="hero-section" className="center column">

            <h1 id="hero-title">Jose Miralles</h1>

            <Links/>

            <div id="hero-jobtitle">Systems Engineer</div>
            
            <div id="hero-company">Bank of America</div>

        </div>
    );
};

export default HeroSection;