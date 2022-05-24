
export const technologiesArr = [
    "HTML", "CSS", "SCSS", "JavaScript", "TypeScript",
    "Node", "Jasmine",
    "React", "Redux", "Custom-Redux-Middleware",
    "JWT", "Refresh Tokens", "Identity Provider",
    "C#", "ASP", "Xamarin", "SignalR",
    "ThreeJS", "Blender", "Webpack"
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
    highlights?: string[];
    image?: string;
    YTVideo?: string;
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
                    "A web VR game built using Three.js and JavaScript. Optimized to run on Quest."
                ),
                image: "/img/chaos_vr.gif",
                highlights: [
                    "Modeled all assets using Blender.",
                    "Created asset pools to recycle actors such as enemies, projectiles, and sounds.",
                    "Simulated physics manually without using a physics engine."
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
                    "Built generator with TypeScript and Node.",
                    "Wrote all Jasmine tests using TypeScript."
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
        description: "Projects that are small, unfinished, or unpublished. And they are created for the purpose of learning.",
        projects: [
            {
                name: "InTalk",
                description: (
                    "A Discord style app that I decided to build after reading 'ASP.NET Core 5 and React'" +
                    " by Carl Rippon. It includes a custom identity provider built with ASP.net."
                    ),
                highlights: [
                    "Identity provider built using ASP.net and C#.",
                    "React app built using TypeScript and Redux",
                    "Handled JWTs and Refresh Tokens in the front end using Axios middleware.",
                    "Implemented realtime chat rooms / servers using SignalR in the back end, and Redux middleware in the front end."
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
                    "Custom-Redux-Middleware", "SignalR",
                    "JWT", "Refresh Tokens", "Identity Provider"
                ]
            }
        ]
    }
];
