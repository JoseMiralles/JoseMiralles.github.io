import React from "react";
import gsap from "gsap";

class TopSectionTitle extends React.Component {

    render() {
        return (
            <span>
                <div>
                    <div className="bottom_gradient" />
                    <svg id="poly_3" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <polygon points="0,0 0,100 100,100 100,61.80" />
                    </svg>
                    <svg id="poly_2" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <polygon points="0,0 0,100 100,100 100,61.80" />
                    </svg>
                    <svg id="poly_1" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <polygon points="0,0 0,100 100,100 100,61.80" />
                    </svg>
                    {/* Text 
    <svg id="poly_flat_extrusion" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none">
    <polygon points="0,0 0,100 100,100 100,0" />
    </svg> */}
                    <svg id="poly_flat_extrusion" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <polygon points="0,0 0,100 100,100 100,0" />
                    </svg>
                    <h1 id="Title_text">José Miralles &#11022;</h1>
                    <svg id="poly_flat" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <polygon points="0,0 0,100 100,100 100,0" />
                    </svg>
                </div>

            </span>
        );
    }

    componentDidMount() {
        // GASP - Animations
        let polygons_to_animate = 3;
        let topSection = document.querySelector(".top_section");

        // Intro animations.
        // Hide parent of polygons to get height values as percentages insteand of computed px values.
        topSection.style.display = "none";
        for (let i = 1; i <= polygons_to_animate; i++) {
            let target_element = document.querySelector("#poly_" + i);
            // Store default height (will get percentage since parent is hidden).
            let height_percentage = getComputedStyle(target_element).height;
            gsap.from("#poly_" + i, {
                duration: 2,
                height: "0%",
                ease: "expo.out",
                // Set height back to percentages when the animation stops playing.
                onComplete: function () { target_element.style.height = height_percentage }
            }).delay((i / 10));
        }
        gsap.from(".bottom_gradient", { duration: 3, opacity: 0, ease: "expo.out" }).delay(0);
        topSection.style.display = "block"; // Show parent of polygons again.
    }

}

export default TopSectionTitle;