// All of my resume data gets loaded from here.


   export const mainSections = [
        // Work experience
        {
            title: "Work",
            icon: "&#128296",
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
            title: "Projects",
            icon: `&#128296;`,
            darkTheme: false,
            items: [
                {
                    employer: "RunChart",
                    jobTitle: "Built Complete Web App",
                    imgSrc: require("../assets/runchart_logo.png"),
                    roundImg: true,
                    description: "A site that allows runners to find and create new running routes.",
                    highlights: [
                        "< React / Redux / Rails / SQL >",
                        "Built CRUD API using Rails and PostgreSQL including an index route to filter routes by keywords and map bounds.",
                        "Used the Google Maps API to implement a React component which allows users to create or edit running routes, as well as components to view routes and to find routes using an interactive map.",
                        "Utilized the Google Maps Geometry library encode, and decode running routes to and from strings to facilitate storage."
                    ],
                    links: [
                        { title: "Try it out", url: "https://run-chart.herokuapp.com/" },
                        { title: "View source / readme", url: "https://github.com/JoseMiralles/RunChart#runchart" }
                    ]
                },
                {
                    employer: "Chaos VR",
                    jobTitle: "Built Complete Game",
                    imgSrc: require("../assets/chaos_vr_game_gif.gif"),
                    roundImg: true,
                    description: "A WebXR / WebVR game built using JavaScript with Three.js",
                    highlights: [
                        "< Javascript / Three.js >",
                        "Implemented ticking system to animate objects,to simulate physics, and to detect collisions on every frame.",
                        "Modeled and textured 3D meshes using Blender, and optimized them to use the least amount of vertices to achieve good performance on mobile VR headsets such as the Quest.",
                        "Implemented a recycling system, where all assets such as projectiles, enemies, and sounds are reused to avoid expensive operations."
                    ],
                    links: [
                        { title: "Try it out (VR Required)", url: "/Chaos-VR/" },
                        { title: "View source / readme", url: "https://github.com/JoseMiralles/VR-Shooter#vr-shooter" },
                        { title: "View Gameplay Videos", url: "https://www.youtube.com/playlist?list=PLghWRYpL5zyWu1HgNfVpOLBVNuiOC8svX" }
                    ]
                },
                {
                    employer: "Backpackr",
                    jobTitle: "A four person group project",
                    imgSrc: require("../assets/backpackr.jpg"),
                    roundImg: true,
                    description: `( Group Project ) A place for friends to plan trips together.`,
                    highlights: [
                        "< React / Redux / Node / Express / MongoDB >",
                        "Built back end API routes with Node, Express, and Mongoose to handle operations for trips, atendees, itinerary items, and comments.",
                        "fixed front end bugs."
                    ],
                    links: [
                        { title: "Visit site", url: "https://backpackr-aa.herokuapp.com/" },
                        { title: "View source", url: "https://github.com/JoseMiralles/craterd/" }
                    ]
                },
                {
                    employer: "Gifaroo Android App",
                    jobTitle: "Built Complete App",
                    imgSrc: require("../assets/gifaroo_icon.png"),
                    roundImg: true,
                    description: "An Android app that allowed users to get any gif from the web, to edit it, and to then export it as a video to be shared in platforms that do not support gifs, such as Instagram.",
                    highlights: [
                        "Built in C#/.NET with Xamarin.Android.",
                        "Used Java for some activities.",
                        "Created Java Bindings libraries to call existing Java libraries from C#.",
                        "Implemented Google play in-app purchasing.",
                        "Used HTML and CSS for in-app store.",
                        "Created graphics and illustrations using Adobe photoshop and illustrator."
                    ],
                    links: [
                        { title: "View Source and screenshots on GitHub", url: "https://github.com/JoseMiralles/GifarooApp" }
                    ]
                },
                {
                    employer: "Craterd",
                    jobTitle: "Built Complete Web App",
                    imgSrc: require("../assets/crated_logo.png"),
                    roundImg: true,
                    description: "This is a site for a fictional asteroid mining company.",
                    highlights: [
                        "< React / Express / Node / Firebase >",
                        "Used React, with hooks for the front end.",
                        "Used Firebase for user authentication, and to store user data (orders, payments)",
                        "Used Node and Express to build a payment API with the Stripe SDK.",
                        "Product data and images are loaded from a remote database",
                        "Orders get stored in, and loaded from a noSQL database.",
                        "Product images were modeled with Blender, and textured with Quixel Mixer."
                    ],
                    links: [
                        { title: "Visit site", url: "https://craterd-cd6c8.web.app/" },
                        { title: "View source", url: "https://github.com/JoseMiralles/craterd/" }
                    ]
                },
                {
                    employer: "Instavel",
                    jobTitle: "Built Complete Web App",
                    imgSrc: require("../assets/instavel_logo.png"),
                    roundImg: true,
                    description: "This is an Instagram clone I built with Laravel and PHP.",
                    highlights: [
                        "< Laravel, SQL >",
                        "Followed the MVC design pattern.",
                        "Followed RESTful routing to perform CRUD operations on an SQL database.",
                        "Used Bootstrap and flexbox for styling",
                    ],
                    links: [
                        { title: "View source", url: "https://github.com/JoseMiralles/Instavel" }
                    ]
                },
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
                    employer: "Top Alliance Combat Website",
                    jobTitle: "Built Complete Site",
                    imgSrc: require("../assets/TAC-Logo.png"),
                    roundImg: true,
                    description: "This is a company that I co-founded, back in 2014 (Please keep that in mind when you visit the site).",
                    highlights: [
                        "Used HTML, CSS, JavaScript to build the entire site.",
                        "Built icons, posters, tickets, and other graphics with photoshop and illustrator.",
                        "Created online ad campaigns trough Facebook Ads and Google Adwords (now Google Ads).",
                        "Event was attended by over 800 people."
                    ],
                    links: [
                        { title: "Visit Site", url: "TAC/" }
                    ]
                }
            ]
        },
    ];

    export const linksSection = {
        title: "Links",
        darkTheme: true,
        linksSection: true,
        items: [
            { title: "GitHub", url: "https://github.com/JoseMiralles" },
            { title: "StackOverflow", url: "https://stackoverflow.com/users/2895137/jose-miralles" },
            { title: "CodePen", url: "https://codepen.io/JoseGMiralles/pens/showcase" }
        ]
    };

    // Stuff I'm learning
    export const learningSection = {
        title: "Learning",
        darkTheme: false,
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
    };