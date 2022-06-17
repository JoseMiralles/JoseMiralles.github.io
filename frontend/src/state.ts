import { atom } from "recoil";
import { technologyTypes } from "./ProjectsComponents/ProjectsData";

export const modalState = atom({
    key: "modalState",
    default: ""
});

export const techFiltersState = atom<technologyTypes[]>({
    key: "techFiltersState",
    default: []
});
