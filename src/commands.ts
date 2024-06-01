import { Command } from "./models/command.model"
import { commands } from "./data/commands-definitions"
import { NameDescriptionPair } from "./models/name-description-pair.model"


// internal functions
function createHelpCommand(commands: Command[]): Command {
    let help: Command = {
        name: "help",
        description: "Lista dei comandi disponibili",
        visible: true,
        result: ""
    }

    let visibleCommands: Command[] = commands.filter(cmd => cmd.visible)

    let commandPairs: NameDescriptionPair[] = visibleCommands.map(cmd => {
        return {name: cmd.name, description: cmd.description}
    })

    help.result = commandPairs.map(pair => {
        return `
            <div class="flex">
                <span style="flex: 50%">${pair.name}</span>
                <p style="flex: 50%">${pair.description}</p>
            </div>
        `
    }).join("<br>")

    return help
}

// exports
let help: Command = createHelpCommand(commands)
commands.push(help)

export { commands }


export function getCommand(name: string): Command | undefined {
    let command: Command | undefined = commands.find(cmd => cmd.name === name)
    return command
}

