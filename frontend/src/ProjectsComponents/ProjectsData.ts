
export const technologiesArr = [
    "HTML", "CSS", "SCSS", "JavaScript", "TypeScript",
    "Node", "Jasmine", "API", "REST", "Asynchronous", "CRUD",
    "React", "React-Native", "Redux", "Custom-Redux-Middleware", "Recoil",
    "JWT", "Refresh Tokens", "Identity Provider",
    "C#", "ASP", "Xamarin", "SignalR", "Enitity-Framework", "DotNet",
    "ThreeJS", "Blender", "Webpack",
    "SQL", "Mongo", "Mongoose", "Postgress",
    "Ruby", "Rails",
    "Mobile-Development",
    "PHP", "Laravel",
    "iOS", "Android", "VR", "Unit-Tests"
] as const;

/**
 * Convert the technologiesArr above into a Union type.
 * EX: "HTML" | "CSS" | "SCSS" ...
 */
export type technologyTypes = typeof technologiesArr[number];

export interface IProject {
    name: string;
    description: string;
    links: { title: string; url:string; } [];
    highlights?: { text: string; url?: string;} [];
    YTVideos?: string[];
    images?: string[];
    /**
     * Used when technologies are passed in trough the url.
     * It is used to sort projects by relevance of technologies.
     */
    techMatchRating?: number;
    technologies: technologyTypes[];
}

export interface IProjectList {
    title: string;
    description: string;
    projects: IProject[];
}

export const projectLists: IProjectList[] = [
    {
        title: "Completed Projects",
        description: "Some of my finished projects.",
        projects: [
            {
                name: "CHAOS VR",
                description: (
                    "A web VR game built using Three.js and JavaScript. Optimized to run on Quest. VR headset required."
                ),
                images: ["/img/chaos_vr.gif"],
                YTVideos: [
                    "https://www.youtube.com/embed/sgtoEU0PioA",
                    "https://www.youtube.com/embed/KXy4ktaRr2o"
                ],
                highlights: [
                    {
                        text: "Created asset pools to recycle actors such as enemies, projectiles, and sounds.",
                        url: "https://github.com/JoseMiralles/Chaos-VR/blob/9cda4fc5c56e392c9530317b46c4c70ed2c36442/src/scripts/enemy_spawner.js#L87"
                    },
                    {
                        text: "Simulated physics manually inside tick() functions without a physics engine.",
                        url: "https://github.com/JoseMiralles/Chaos-VR/blob/main/src/scripts/enemy_robot.js#L171"
                    },
                    {
                        text: "Modeled all assets using Blender.",
                        url: "https://github.com/JoseMiralles/Chaos-VR#using-a-single-gltf-file-for-all-3d-assets"
                    },
                ],
                links: [
                    {
                        title: "Game",
                        url: "https://josem.dev/Chaos-VR/",
                    },
                    {
                        title: "Gameplay Videos",
                        url: "https://www.youtube.com/playlist?list=PLghWRYpL5zyWu1HgNfVpOLBVNuiOC8svX"
                    },
                    {
                        title: "GitHub",
                        url: "https://github.com/JoseMiralles/Chaos-VR"
                    }
                ],
                technologies: [
                    "JavaScript", "ThreeJS", "Blender", "Webpack", "VR"
                ]
            },
            {
                name: "TS Test Generator",
                description: (
                    "A CLI test generator wich creates a set of typescript problems and Jasmine.js tests from a popular curated list of 75 leetcode problems to facilitate learning algorithms and data structures."
                ),
                images: ["/img/ts_test_gen.jpg"],
                highlights: [
                    {
                        text: "Built generator with TypeScript and Node.",
                        url: "https://github.com/JoseMiralles/CuratedListTestGenerator/blob/main/generator.ts#L25"
                    },
                    {
                        text: "Wrote all Jasmine tests using TypeScript.",
                        url: "https://github.com/JoseMiralles/CuratedListTestGenerator/blob/main/data/spec/linkedList.spec.ts"
                    }
                ],
                links: [
                    {
                        title: "GitHub",
                        url: "https://github.com/JoseMiralles/CuratedListTestGenerator#curatedlisttestgenerator",
                    },
                ],
                technologies: [
                    "TypeScript", "Node", "Jasmine", "Unit-Tests"
                ]
            },
            {
                name: "Run Chart",
                description: (
                    "A React app that allows users to plan, share, and search for running routes."
                ),
                images: [
                    "/img/runchart.png",
                    "/img/runchart1.png",
                    "/img/runchart2.png",
                    "/img/runchart3.png",
                ],
                highlights: [
                    {
                        text: "Built CRUD API using Rails and PostgreSQL including an index route to filter routes by keywords and map view bounds.",
                        url: "https://github.com/JoseMiralles/RunChart/blob/main/app/controllers/api/routes_controller.rb"
                    },
                    {
                        text: "Used the Google Maps API to implement a React component which allows users to create or edit running routes, as well as components to view routes and to find routes using an interactive map.",
                        url: "https://github.com/JoseMiralles/RunChart/blob/main/frontend/components/route_builder/route_builder.jsx"
                    },
                    {
                        text: "Utilized the Google Maps Geometry library to encode and decode running routes to and from strings to facilitate storage in a SQL database.",
                        url: "https://github.com/JoseMiralles/RunChart/blob/main/frontend/components/route_builder/route_builder.jsx"
                    }
                ],
                links: [
                    {
                        title: "Live Site",
                        url: "https://run-chart.herokuapp.com/#/",
                    },
                    {
                        title: "GitHub",
                        url: "https://github.com/JoseMiralles/RunChart/",
                    },
                ],
                technologies: [
                    "React", "Redux", "JavaScript", "SQL", "API", "REST", "Ruby", "Rails", "SCSS", "Asynchronous", "CSS", "CRUD"
                ]
            },
            {
                name: "Minesweeper App",
                description: "A Minesweeper mobile app made with React Native and Typescript.",
                links: [
                    {
                        title: "Try with Expo",
                        url: "https://expo.dev/@josemiralles/minesweeper"
                    },
                    {
                        title: "GitHub",
                        url: "https://github.com/JoseMiralles/Minesweeper-React-Native"
                    }
                ],
                technologies: ["React-Native", "TypeScript", "Recoil", "React", "iOS", "Android", "Mobile-Development", "JavaScript"],
                images: [
                    "/img/mine1.png",
                    "/img/mine2.png"
                ]
            },
            {
                name: "Eurolamy Website",
                description: "Created site using React and three.js",
                images: [
                    "/img/eurolamy/logo.png",
                    "/img/eurolamy/screenshot.png",
                    "/img/eurolamy/blender.png"
                ],
                highlights: [
                    {
                        text: "Used three.js to render and animate background 3d wireframe scene.",
                        url: "https://github.com/JoseMiralles/Eurolamy/blob/master/src/components/Top3DScene.tsx"
                    },
                    {
                        text: "Used mouse and device orientation events to control the position of the 3d scene camera.",
                        url: "https://github.com/JoseMiralles/Eurolamy/blob/master/src/components/Top3DScene.tsx#L82"
                    },
                    {
                        text: "Use Blender to model 3d assets."
                    }
                ],
                links: [
                    {
                        title: "Live Site",
                        url: "https://eurolamy.com/"
                    },
                    {
                        title: "GitHub",
                        url: "https://github.com/JoseMiralles/Eurolamy"
                    }
                ],
                technologies: [
                    "TypeScript", "ThreeJS", "React", "SCSS", "Blender", "CSS", "JavaScript"
                ]
            },
            {
                name: "Location Score",
                description: "A Node.js app that merges different datasets into a single one, and also assings a score to each datapoint. The goal is to make it easier to find an optimal location to open a new office based on a few metrics.",
                technologies: ["TypeScript", "Node", "JavaScript"],
                highlights: [
                    {
                        text: "Implemented 4 methods to parse each file, to then return a dictionary like object were each key is a county code, and each value an object with a metric, and a coefficient score.",
                        url: "https://github.com/JoseMiralles/LocationScore/blob/master/src/DataLoaders.ts#L18"
                    },
                    {
                        text: "Implemented a method that merges all of the dictionaries into a single array which contains relevant metrics, as well as a newly generated aggregate scores for each location.",
                        url: "https://github.com/JoseMiralles/LocationScore/blob/master/src/DataLoaders.ts#L216"
                    }
                ],
                links: [],
                images: [
                    "/img/locationscore/graph.png",
                    "/img/locationscore/output.png",
                ]
            },
            {
                name: "Gifaroo",
                description: (
                    "A mobile app that allowed users to fetch, edit, and export gifs from any website."
                ),
                images: [
                    "/img/gifaroo1.jpg",
                    "/img/gifaroo.png",
                    "/img/gifaroo2.jpg",
                    "/img/gifaroo3.jpg",
                    "/img/gifaroo4.jpg",
                    "/img/gifaroo5.jpg",
                ],
                highlights: [
                    {
                        text: "Built with C#/.NET and Xamarin.Android.",
                    },
                    {
                        text: "Created Java Bindings libraries to call existing Java libraries from C#.",
                    },
                    {
                        text: "Implemented Google play in-app purchasing.",
                        url: "https://github.com/JoseMiralles/GifarooApp/blob/master/Gifaroo.Android/Classes/PremiumInterface.cs"
                    },
                    {
                        text: "Used FFMPEG to process gifs",
                        url: "https://github.com/JoseMiralles/GifarooApp/blob/master/Gifaroo.Android/SaveActivity.cs"
                    }
                ],
                links: [
                    {
                        title: "GitHub",
                        url: "https://github.com/JoseMiralles/GifarooApp/",
                    },
                ],
                technologies: [
                    "Xamarin", "C#", "DotNet", "Mobile-Development", "Android"
                ]
            },
        ]
    },
    {
        title: "Other Projects",
        description: "Projects that are small, unfinished, or unpublished. And were created for the purpose of learning.",
        projects: [
            {
                name: "InTalk",
                description: (
                    "A Discord style app that I decided to build after reading 'ASP.NET Core 5 and React'" +
                    " by Carl Rippon. It includes a custom identity provider built with ASP.net."
                    ),
                highlights: [
                    {text: "Frontend built using React, TypeScript, and Redux."},
                    {text: "Backend built using ASP.NET, PostgreSQL, SignalR, and Entity Framework."},
                    {
                        text: "Custom identity provider built using ASP.net and C#.",
                        url: "https://github.com/JoseMiralles/InTalk/blob/main/backend/Controllers/AuthManagmentController.cs"
                    },
                    {
                        text: "Handled JWTs and Refresh Tokens in the front end by using Axios middleware.",
                        url: "https://github.com/JoseMiralles/InTalk/blob/main/frontend/src/Util/SessionUtil.ts"
                    },
                    {
                        text: "Implemented realtime chat rooms / servers using SignalR Hub in the back end.",
                        url: "https://github.com/JoseMiralles/InTalk/blob/main/backend/Hub/InTalkHub.cs"
                    },
                    {
                        text: "Handled front-end real time connectivity using custom Redux middleware.",
                        url: "https://github.com/JoseMiralles/InTalk/blob/main/frontend/src/Middleware/SignalRMiddleware.ts"
                    },
                    {
                        text: "Created API unit tests.",
                        url: "https://github.com/JoseMiralles/InTalk/blob/main/api-tests/ServerApiTests.cs"
                    },
                    {
                        text: "Used dependency injection to separate data access from controllers by using repositories.",
                        url: "https://github.com/JoseMiralles/InTalk/blob/main/backend/Data/ServerRepository.cs"
                    }
                ],
                links: [
                    {
                        title: "Github repo",
                        url: "https://github.com/JoseMiralles/InTalk"
                    }
                ],
                technologies: [
                    "React", "Redux", "TypeScript", "ASP", "C#",
                    "SQL", "Postgress", "Custom-Redux-Middleware", "SignalR",
                    "JWT", "Refresh Tokens", "Identity Provider", "HTML", "CSS",
                    "SCSS", "Asynchronous", "JavaScript", "Unit-Tests"
                ]
            },
            {
                name: "Splunk React Dashboard App",
                description: "A React app that can run in a Splunk dashboard. Built using Typescript and Redux.",
                highlights: [
                    {text: "Modified Webpack to output a single bundle.js file as required by Splunk."},
                    {
                        text: "Created asynchronous method wich requests an SPL search from Splunk",
                        url: "https://github.com/JoseMiralles/Splunk-React-TypeScript-Demo/blob/main/appserver/static/client/src/util/searchUtil.ts#L24"
                    }
                ],
                YTVideos: ["https://www.youtube.com/embed/gPja51_O0Z4"],
                links: [
                    {
                        title: "Video Demo",
                        url: "https://www.youtube.com/watch?v=gPja51_O0Z4&t=12s"
                    }
                ],
                technologies: ["React", "TypeScript", "Redux", "Webpack", "SCSS", "Asynchronous"]
            },
            {
                name: "Instavel",
                description: "Instagram clone built using Laravel, PHP, and SQL.",
                links: [
                    {
                        title: "GitHub",
                        url: "https://github.com/JoseMiralles/Instavel"
                    }
                ],
                images: ["/img/instavel/logo.png"],
                technologies: ["PHP", "Laravel", "API", "REST", "CSS", "JavaScript"],
                highlights: [
                    {text: "Followed the MVC design pattern."},
                    {text: "Followed RESTful routing to perform CRUD operations on an SQL database."},
                    {text: "Used Bootstrap and flexbox for styling"}
                ]
            }
        ]
    }
];

export const projectDictionary: {[indexer: string]: IProject} = {};

projectLists.forEach(pl => {
    pl.projects.forEach(p => {
        projectDictionary[p.name] = p;
    });
});
