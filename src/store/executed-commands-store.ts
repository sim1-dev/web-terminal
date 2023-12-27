import { Command } from "../models/command.model";

export var executedCommandsStore: Command[] = []
export var executedCommandsIndex: number = 0

export function storeExecutedCommand(command: Command) {
    executedCommandsStore.push(command)
    // reset index for auto tabbing
    executedCommandsIndex = executedCommandsStore.length - 1
}

export function getPreviousExecutedCommand(): Command | undefined {
    let command: Command | undefined = getExecutedCommandAtStoredIndex(0)

    if(command)
        executedCommandsIndex--
    else
        command = getExecutedCommandAtStoredIndex(1)

    return command
}

export function getNextExecutedCommand(): Command | undefined {
    let command: Command | undefined = getExecutedCommandAtStoredIndex(2)
    if(command)
        executedCommandsIndex++
    else
        command = getExecutedCommandAtStoredIndex(1)
    return command
}

export function getExecutedCommandAtStoredIndex(index: number = 0): Command | undefined {
    return executedCommandsStore[executedCommandsIndex + index]
}