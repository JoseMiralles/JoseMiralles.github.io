import React from "react";

class HeroSection extends React.Component {
    render() {
        return (
            <div className="container-fluid light-font hero-section d-flex flex-column">

                <span class="top-svg-group">
                    <svg class="top-svg _1" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="0,0 0,55 100,100 100,20 60,0">
                            <animate dur="1s" attributeName="points"
                                from="0,0 0,50 100,100 100,20 80,0"
                                to="0,0 0,55 100,100 100,20 60,0" />
                        </polygon>
                    </svg>
                    <svg class="top-svg _2" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="0,0 0,60 100,100 100,20 50,0">
                            <animate dur="1s" attributeName="points"
                                from="0,0 0,55 100,100 100,20 70,0"
                                to="0,0 0,60 100,100 100,20 50,0" />
                        </polygon>
                    </svg>
                    <svg class="top-svg _3" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="0,0 0,70 100,100 100,20 40,0">
                            <animate dur="1s" attributeName="points"
                                from="0,0 0,60 100,100 100,20 60,0"
                                to="0,0 0,70 100,100 100,20 40,0" />
                        </polygon>
                    </svg>
                </span>

                <div className="top-section-arrow">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polyline class="st0" points="0,0 49.5,100 100,0 " />
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