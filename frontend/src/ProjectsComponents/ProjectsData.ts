
export const technologiesArr = [
    "HTML", "CSS", "SCSS", "JavaScript", "TypeScript",
    "C#", "ASP", "Xamarin",
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
    points?: string[];
    /**
     * Used when technologies are passed in trough the url.
     * It is used to sort projects by relevance of technologies.
     */
    techMatchRating?: number;
    technologies: technologyTypes[];
}

export interface IProjectList {
    title: string;
    description?: string;
    projects: IProject[];
}

export const projectLists: IProjectList[] = [
    {
        title: "Completed Projects",
        projects: []
    },
    {
        title: "Unfinished Projects",
        description: "Projects created for the purpose of learning new concepts.",
        projects: []
    }
];
