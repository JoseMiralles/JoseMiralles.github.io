import React from "react";
import gsap from "gsap";

class HeroSection extends React.Component {
    render() {
        return (
            <div className="container-fluid light-font hero-section d-flex flex-column">

                <span class="top-svg-group">
                    <svg class="top-svg" id="poly_1" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon points="0,0 0,68 100,100 100,0" >
                        </polygon>
                    </svg>
                    <svg class="top-svg _2" id="poly_2" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon points="0,0 0,68 100,100 100,0" >
                        </polygon>
                    </svg>
                    <svg class="top-svg _3" id="poly_3"  viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon points="0,0 0,68 100,100 100,0" >
                        </polygon>
                    </svg>
                </span>

                <div className="top-section-arrow">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polyline class="st0" points="0,0 49.5,100 100,0 " />
                    </svg>
                </div>

                <div class="row flex-row-reverse flex-fill">

                    <div id="hero-title" className="col my-auto align-middle">
                        <div className="display-1 text-center hero-title">José Miralles</div>
                        <p className="lead text-center hero-sub-title">- DEVELOPER -</p>
                    </div>

                </div>

            </div>
        );
    }

    componentDidMount() {
        // GASP - Animations
        let polygons_to_animate = 3;
        let topSection = document.querySelector(".top-svg-group");

        // Intro animations.
        // Hide parent of polygons to get height values as percentages insteand of computed px values.
        topSection.style.display = "none";
        for (let i = 1; i <= polygons_to_animate; i++) {
            let target_element = document.querySelector("#poly_" + i);
            // Store default height (will get percentage since parent is hidden).
            let height_percentage = getComputedStyle(target_element).height;
            gsap.from("#poly_" + i, {
                duration: 10,
                height: "0%",
                ease: "expo.out",
                // Set height back to percentages when the animation stops playing.
                onComplete: function () { target_element.style.height = height_percentage }
            }).delay((i / 10));
        }
        gsap.from("#hero-title", { duration: 3, opacity: 0, ease: "expo.out" }).delay(3);
        gsap.from(".top-section-arrow", { duration: 3, opacity: 0, ease: "expo.out" }).delay(5);
        topSection.style.display = "block"; // Show parent of polygons again.
    }
}

export default HeroSection;