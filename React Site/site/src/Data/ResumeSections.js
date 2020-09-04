// All of my resume data gets loaded from here.
const ResumeSections = [

    // Work experience
    {
        title: "Work",
        darkTheme: true,
        items: [
            {
                employer: "Maxx Potential",
                jobTitle: "Apprentice Web Developer",
                imgSrc: require("../assets/Maxx_isometric-ish_downscaled.png"),
                roundImg: false,
                dateRange: "May 2019 - February 2020", 
                highlights: [
                    "Part of the operations and maintenance team that maintained, developed, and updated the WordPress multisite for MedStar health.",
                    "Developed, and modified plugins, widgets, and themes.",
                    "Used the PHP Storm IDE for developing, debugging, and unit testing.",
                    "Used Jira for agile development with a kanban board.",
                    "Used HTML, PHP, JavaScript, jQuery, SCSS, and Bootstrap.",
                    "Used Git, with a remote repo hosted on BitBucket.",
                    "Deployed to different environments with Capistrano.",
                    "Used Vagrant and VirtualBox to develop locally."
                ]
            }
        ]
    },

    // Projects
    {
        title: "Others",
        darkTheme: false,
        items: [
            {
                employer: "Eurolamy Website",
                jobTitle: "Built Complete Site",
                imgSrc: require("../assets/Eurolamy_logo.png"),
                roundImg: true,
                description: "This is a currently unreleased site that I built for a company in Guatemala.",
                highlights: [
                    "Built with HTML, SCSS, Bootstrap and JavaScript.",
                    "Used GSAP for animations and ScrollMagic for scroll animations and functionality.",
                    "Used Adobe Illustrator to create the top illustration, and exported it to SVG.",
                    "Used Illustrator to create a mobile and desktop mockup."
                ],
                links: [
                    { title: "Visit Site", url: "https://josemiralles.github.io/Eurolamy/src/index.html" }
                ]
            },
            {
                employer: "Gifaroo Android App",
                jobTitle: "Built Complete App",
                imgSrc: require("../assets/gifaroo_icon.png"),
                roundImg: true,
                description: "This is the first mobile app that I built after reading Rob S. Miles’ C# yellow book.",
                highlights: [
                    "Built in C#/.NET with Xamarin.Android.",
                    "Used Java for some activities.",
                    "Used FFMPEG for local video transcoding by interfacing with binaries programmatically.",
                    "Created Java Bindings libraries to call existing Java libraries from C#.",
                    "Implemented Google play in app purchasing.",
                    "Used HTML and CSS for in-app store.",
                    "Created graphics and illustrations using Adobe photoshop and illustrator."
                ],
                links: [
                    { title: "View Source on GitHub", url: "https://github.com/JoseMiralles/GifarooApp" }
                ]
            },
            {
                employer: "Top Alliance Combat Website",
                jobTitle: "Built Complete Site",
                imgSrc: require("../assets/TAC-Logo.png"),
                roundImg: true,
                description: "This was my first major website, it was built in 2014.",
                highlights: [
                    "Used HTML, CSS, JavaScript to build the entire site.",
                    "All graphic design was done using Adobe Photoshop and Illustrator."
                ],
                links: [
                    { title: "Visit Site", url: "OLD/TAC/index.html" }
                ]
            }
        ]
    },

    // Stuff I'm learning
    {
        title: "Others",
        darkTheme: true,
        smallItems: true,
        items: [
            {
                employer: "Unreal Engine",
                jobTitle: "AR / VR experiences",
                imgSrc: require("../assets/unreal_logo.png"),
                roundImg: false
            },
            {
                employer: "Blender",
                jobTitle: "3D Modeling Tool",
                imgSrc: require("../assets/blender_logo.png"),
                roundImg: false
            },
            {
                employer: "C++",
                jobTitle: "Programming Language",
                imgSrc: require("../assets/cpplogo.png"),
                roundImg: false
            },
        ]
    }

];

export default ResumeSections;