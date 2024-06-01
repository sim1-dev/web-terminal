import { Experience } from "./experience.model"

export interface Company {
    name: string
    jobTitle: string
    location: string
    start: Date
    end?: Date
    experiences: Experience[]
}