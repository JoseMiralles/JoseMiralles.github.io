
document.addEventListener("DOMContentLoaded", function () {
    
    // Check if user is on mobile.
    if (AFRAME.utils.device.isMobile()) {
        // Remove expensive elements from scene if in mobile.
        document.querySelectorAll('.Remove_from_mobile_VR').forEach(element => {
            element.parentNode.removeChild(element);
        });
    }

    /* A-Frame */
    // Listen for when a user enters VR, and remove expensive items if needed.
    //document.querySelector('a-scene').addEventListener('enter-vr', function () {
    //});



    // GASP - Animations
    let polygons_to_animate = 3;
    let topSection = document.querySelector(".top_section");
    
    // Intro animations.
    // Hide parent of polygons to get height values as percentages insteand of computed px values.
    topSection.style.display = "none";
    for (let i = 1; i <= polygons_to_animate; i++)
    {
        let target_element = document.querySelector("#poly_" + i);
        // Store default height (will get percentage since parent is hidden).
        let height_percentage = getComputedStyle(target_element).height;
        gsap.from("#poly_" + i, {
            duration: 2,
            height: "0%",
            ease: "expo.out",
            // Set height back to percentages when the animation stops playing.
            onComplete: function() {target_element.style.height = height_percentage}
        }).delay((i/10));
    }
    gsap.from(".bottom_gradient", {duration: 3, opacity: 0, ease: "expo.out"}).delay(0);
    topSection.style.display = "block"; // Show parent of polygons again.
});