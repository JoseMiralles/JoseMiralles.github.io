
export const technologiesArr = [
    "HTML", "CSS", "SCSS", "JavaScript", "TypeScript",
    "Node", "Jasmine",
    "React", "Redux", "Custom-Redux-Middleware",
    "JWT", "Refresh Tokens", "Identity Provider",
    "C#", "ASP", "Xamarin", "SignalR", "Enitity-Framework",
    "ThreeJS", "Blender", "Webpack",
    "SQL", "Mongo", "Mongoose", "Postgress"
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
    image?: string;
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
                image: "/img/chaos_vr.gif",
                highlights: [
                    {
                        text: "Created asset pools to recycle actors such as enemies, projectiles, and sounds.",
                        url: "https://github.com/JoseMiralles/Chaos-VR/blob/9cda4fc5c56e392c9530317b46c4c70ed2c36442/src/scripts/enemy_spawner.js#L87"
                    },
                    {
                        text: "Simulated physics manually inside tick() functions, without using a physics engine.",
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
                    "JavaScript", "ThreeJS", "Blender", "Webpack"
                ]
            },
            {
                name: "TS Test Generator",
                description: (
                    "A test generator wich creates a set of typescript problems and Jasmine.js tests from a popular curated list of 75 problems."
                ),
                image: "img/ts_test_gen.jpg",
                highlights: [
                    {text: "Built generator with TypeScript and Node."},
                    {text: "Wrote all Jasmine tests using TypeScript."}
                ],
                links: [
                    {
                        title: "GitHub",
                        url: "https://github.com/JoseMiralles/CuratedListTestGenerator#curatedlisttestgenerator",
                    },
                ],
                technologies: [
                    "TypeScript", "Node", "Jasmine"
                ]
            }
        ]
    },
    {
        title: "Other Projects",
        description: "Projects that are small, unfinished, or unpublished. And are created for the purpose of learning.",
        projects: [
            {
                name: "InTalk",
                description: (
                    "A Discord style app that I decided to build after reading 'ASP.NET Core 5 and React'" +
                    " by Carl Rippon. It includes a custom identity provider built with ASP.net."
                    ),
                highlights: [
                    {text: "React app built using TypeScript and Redux"},
                    {
                        text: "Identity provider built using ASP.net and C#.",
                        url: "https://github.com/JoseMiralles/InTalk/blob/main/backend/Controllers/AuthManagmentController.cs"
                    },
                    {
                        text: "Handled JWTs and Refresh Tokens in the front end using Axios middleware.",
                        url: "https://github.com/JoseMiralles/InTalk/blob/main/frontend/src/Util/SessionUtil.ts"
                    },
                    {text: "Implemented realtime chat rooms / servers using SignalR in the back end, and Redux middleware in the front end."}
                ],
                links: [
                    {
                        title: "Github repo",
                        url: "https://github.com/JoseMiralles/InTalk"
                    },
                    {
                        title: "Video demo",
                        url: "https://github.com/JoseMiralles/InTalk"
                    }
                ],
                technologies: [
                    "React", "Redux", "TypeScript", "ASP", "C#", "HTML",
                    "SQL", "Postgress", "Custom-Redux-Middleware", "SignalR",
                    "JWT", "Refresh Tokens", "Identity Provider"
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
