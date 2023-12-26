import './style.css'
import { getCommand } from './commands'
import { Command } from './models/command.model'

const $logLine: HTMLElement | null = document.getElementById('log-line')

const $commandLine: HTMLElement | null = document.getElementById('command-line')
const $terminalTextarea: HTMLInputElement | null = <HTMLInputElement>document.getElementById('terminal-area')
const $typingArea: HTMLElement | null = document.getElementById('typing-area')

if($commandLine)
  $commandLine.addEventListener('keyup', fillTyperWithterminalTextareaContent)

if ($terminalTextarea)
  $terminalTextarea.addEventListener('keyup', processCommand)

execCommand(getCommand("neofetch"))

// create html element for next line result
export function createLogLine(text: string) {
  // TODO? leggi un carattere alla volta con timeout (il problema sta nel far processare l'html)
  let $p: HTMLElement = document.createElement("p")
  $p.innerHTML = text;
  $logLine?.append($p);
}

export function processCommand(event: KeyboardEvent) {

  if(!$terminalTextarea)
    return;

  let value: string | null = $terminalTextarea.value;

  if(!value || event.code !== "Enter")
    return

  let command: Command | undefined = getCommand(value.replace(/(\r\n|\n|\r)/gm, ""))

  let result: string = execCommand(command)

  if(result)
    createLogLine(result)

  resetCommandAreasContent()
}

export function execCommand(command: Command | undefined): string {

  if(!command)
      return "Comando non trovato. Digita '<span class=\"neon\">help</span>' per la lista completa di comandi";

  if(command.callback)
    command.callback()

  return command.result;
}

// html functions
export function fillTyperWithterminalTextareaContent() {
  if($terminalTextarea && $typingArea) {
    $typingArea.textContent = $terminalTextarea.value
  }
}

export function resetCommandAreasContent() {
  if($terminalTextarea)
    $terminalTextarea.value = ""

  if($typingArea)
    $typingArea.textContent = ""
}