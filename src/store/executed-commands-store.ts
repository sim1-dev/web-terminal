import { Command } from "../models/command.model";

export var executedCommandsStore: Command[] = []
export var executedCommandsIndex: number = 0

const DEFAULT_COMMAND_INDEX = 1

export function storeExecutedCommand(command: Command) {
    executedCommandsStore.push(command)
    // reset index for auto tabbing
    executedCommandsIndex = executedCommandsStore.length - DEFAULT_COMMAND_INDEX
}

export function getPreviousExecutedCommand(): Command | undefined {
    const PREVIOUS_COMMAND_INDEX = 0
    let command: Command | undefined = getExecutedCommandAtStoredIndex(PREVIOUS_COMMAND_INDEX)
    if(command)
        executedCommandsIndex--
    else
        command = getExecutedCommandAtStoredIndex(DEFAULT_COMMAND_INDEX)
    return command
}

export function getNextExecutedCommand(): Command | undefined {
    const NEXT_COMMAND_INDEX = 2
    let command: Command | undefined = getExecutedCommandAtStoredIndex(NEXT_COMMAND_INDEX)
    if(command)
        executedCommandsIndex++
    else
        command = getExecutedCommandAtStoredIndex(DEFAULT_COMMAND_INDEX)
    return command
}

export function getExecutedCommandAtStoredIndex(index: number = 0): Command | undefined {
    return executedCommandsStore[executedCommandsIndex + index]
}