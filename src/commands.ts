import { NameDescriptionPair, Command } from "./models/command.model"
import { commands } from "./data/commands-definitions"


// internal functions
function createHelpCommand(commands: Command[]): Command {
    let helpCommand: Command = {
        name: "help",
        description: "Lista dei comandi disponibili",
        visible: true,
        result: ""
    }

    let visibleCommands: Command[] = commands.filter(cmd => cmd.visible);

    let commandPairs: NameDescriptionPair[] = visibleCommands.map(cmd => {
        return {name: cmd.name, description: cmd.description}
    });

    const maxNameLength = Math.max(...commandPairs.map(pair => pair.name.length));

    helpCommand.result = commandPairs.map(pair => {
        function getSpace(name: string, maxNameLength: number): string {

            const MIN_EXTRA_SPACE = 30;

            let space: number = maxNameLength > MIN_EXTRA_SPACE 
                ? maxNameLength 
                : MIN_EXTRA_SPACE

            space -= name.length

            let spaces: string = "";
            for(let i = 0; i < space; i++) {
                spaces += "\u00A0";
            }
            return spaces;
        }

        return `<span>${pair.name}</span>${getSpace(pair.name, maxNameLength)}${pair.description}`
    }).join("<br>")

    return helpCommand;
}

// exports
let helpCommand: Command = createHelpCommand(commands);
commands.push(helpCommand);

export { commands };


export function getCommand(name: string): Command | undefined {
    let command: Command | undefined = commands.find(cmd => cmd.name === name)
    return command;
}

