import { NameDescriptionPair } from "./name-description-pair.model";
export interface Command extends NameDescriptionPair {
    visible: boolean,
    result: string,
    callback?: (...params: any[]) => any
}