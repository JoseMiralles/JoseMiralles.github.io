import React from "react";

class HeroSection extends React.Component {
    render() {
        return (
            <div className="container-fluid light-font hero-section d-flex flex-column">

                <svg class="top-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon points="0,0 0,70 100,100 100,20 75,0">
                        <animate dur="1s" attributeName="points"
                            from="0,0 0,60 100,100 100,20 65,0"
                            to="0,0 0,70 100,100 100,20 75,0" />
                    </polygon>
                </svg>

                <div className="top-section-arrow">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polyline class="st0" points="0,0 49.5,100 100,0 "/>
                    </svg>
                </div>

                <div class="row flex-row-reverse flex-fill">

                    <div className="col my-auto align-middle">
                        <div className="display-1 text-center hero-title">José Miralles</div>
                        <p className="lead text-center hero-sub-title">- DEVELOPER -</p>
                    </div>

                </div>

            </div>
        );
    }
}

export default HeroSection;