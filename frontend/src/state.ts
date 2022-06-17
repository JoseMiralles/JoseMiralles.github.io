import { atom } from "recoil";
import { technologyTypes } from "./data/ProjectsData";

export const modalState = atom({
    key: "modalState",
    default: ""
});

export const techFiltersState = atom<technologyTypes[]>({
    key: "techFiltersState",
    default: []
});
