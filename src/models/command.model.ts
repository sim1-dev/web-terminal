export interface NameDescriptionPair {
    name: string,
    description: string,
}

export interface Command extends NameDescriptionPair {
    visible: boolean,
    result: string,
    callback?: (...params: any[]) => any
}