import './style.css'
import { getCommand } from './commands'
import { Command } from './models/command.model'
import { getNextExecutedCommand, getPreviousExecutedCommand, storeExecutedCommand } from './store/executed-commands-store'

enum KeyboardEvents {
  ARROW_UP = "ArrowUp",
  ARROW_DOWN = "ArrowDown",
  ENTER = "Enter"
}

const $logLine: HTMLElement | null = document.getElementById('log-line')

const $commandLine: HTMLElement | null = document.getElementById('command-line')
const $terminalTextarea: HTMLInputElement | null = <HTMLInputElement>document.getElementById('terminal-area')
const $typingArea: HTMLElement | null = document.getElementById('typing-area')

const $cursor: HTMLElement = document.getElementById('cursor') as HTMLElement

if($commandLine)
  $commandLine.addEventListener('keyup', fillTyperWithterminalTextareaContent)

if ($terminalTextarea) {
  $terminalTextarea.addEventListener('keyup', processInputCommand)
  $terminalTextarea.addEventListener('focus', processFocus)
  $terminalTextarea.addEventListener('blur', processBlur)
}

export function processFocus() {
  $cursor.style.visibility = "visible"
}
export function processBlur() {
  $cursor.style.visibility = "hidden"
}

execCommand(getCommand("startup"))

// create html element for next line result
export function createLogLine(text: string) {
  // ? TODO leggi un carattere alla volta con timeout
  let $p: HTMLElement = document.createElement("p")
  $p.innerHTML = text;
  $logLine?.append($p);
}

export function processInputCommand(event: KeyboardEvent) {
  if(!$terminalTextarea)
    return

  // process executed commands store
  if(event.key === KeyboardEvents.ARROW_UP || event.key === KeyboardEvents.ARROW_DOWN) {
    let autocompletionCommand: Command | undefined

    if(event.key === KeyboardEvents.ARROW_UP)
      autocompletionCommand = getPreviousExecutedCommand()
  
    if(event.key === KeyboardEvents.ARROW_DOWN)
      autocompletionCommand = getNextExecutedCommand()

    if(autocompletionCommand)
      setCommandAreasContent(autocompletionCommand.name)

    return
  }

  // process command execution
  let value: string | null = $terminalTextarea.value;

  if(!value || event.key !== KeyboardEvents.ENTER)
    return

  let command: Command | undefined = getCommand(value.replace(/(\r\n|\n|\r)/gm, ""))

  let result: string = execCommand(command)


  if(result)
    createLogLine(result)

  clearCommandAreasContent()

  if(!command)
    return

  storeExecutedCommand(command)
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

export function setCommandAreasContent(text: string) {
  if(!$terminalTextarea || !$typingArea)
    return

  $typingArea.textContent = text

  $terminalTextarea.value = text
  $terminalTextarea.selectionStart = $terminalTextarea.selectionEnd = $terminalTextarea.value.length
  $terminalTextarea.focus()
}

export function clearCommandAreasContent() {
  if($terminalTextarea)
    $terminalTextarea.value = ""

  if($typingArea)
    $typingArea.textContent = ""
}