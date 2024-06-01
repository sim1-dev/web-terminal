import { NameDescriptionPair } from "./name-description-pair.model";

export interface Project extends NameDescriptionPair {
    start?: Date,
    end?: Date,
    link?: string
}