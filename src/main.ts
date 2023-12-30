import './style.css'
import { getCommand } from './commands'
import { Command } from './models/command.model'
import { getNextExecutedCommand, getPreviousExecutedCommand, storeExecutedCommand } from './store/executed-commands-store'

enum KeyboardEvents {
  ARROW_UP = "ArrowUp",
  ARROW_DOWN = "ArrowDown",
  ARROW_LEFT = "ArrowLeft",
  ARROW_RIGHT = "ArrowRight",
  BACKSPACE = "Backspace",
  DELETE = "Delete",
  ENTER = "Enter"
}

const $logLine: HTMLElement | null = document.getElementById('log-line')

const $commandLine: HTMLElement | null = document.getElementById('command-line')
const $terminalTextarea: HTMLInputElement | null = <HTMLInputElement>document.getElementById('terminal-area')
const $typingArea: HTMLElement | null = document.getElementById('typing-area')

const $cursor: HTMLElement = document.getElementById('cursor') as HTMLElement

if($commandLine)
  $commandLine.addEventListener('keyup', syncTypingAreaWithTextarea)

if ($terminalTextarea) {
  $terminalTextarea.addEventListener('keyup', processKeyboardInput)
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
  $p.innerHTML = text
  $logLine?.append($p)
}

export function processKeyboardInput(event: KeyboardEvent) {
  if(!$terminalTextarea)
    return

  // retrieves executed command from commands store
  if(event.key === KeyboardEvents.ARROW_UP || event.key === KeyboardEvents.ARROW_DOWN) {
    setCommandFromStoredCommands(event.key)
    return
  }

  if(event.key === KeyboardEvents.ARROW_LEFT || event.key === KeyboardEvents.ARROW_RIGHT || event.key === KeyboardEvents.BACKSPACE || event.key === KeyboardEvents.DELETE) {
    moveCursor()
    return
  }

  // process command execution
  let value: string | null = $terminalTextarea.value

  if(!value || event.key !== KeyboardEvents.ENTER)
    return

  let command: Command | undefined = getCommand(value.replace(/(\r\n|\n|\r)/gm, ""))

  let result: string = execCommand(command)

  if(result)
    createLogLine(result)

  clearTypingArea()

  moveCursor()

  if(!command)
    return

  storeExecutedCommand(command)
}
export function execCommand(command: Command | undefined): string {

  if(!command)
      return "Comando non trovato. Digita '<span class=\"neon\">help</span>' per la lista completa di comandi"

  if(command.callback)
    command.callback()

  return command.result
}


// key press process functions
export function setCommandFromStoredCommands(action_key: KeyboardEvents) {
  let autocompletionCommand: Command | undefined

    if(action_key === KeyboardEvents.ARROW_UP)
      autocompletionCommand = getPreviousExecutedCommand()
  
    if(action_key === KeyboardEvents.ARROW_DOWN)
      autocompletionCommand = getNextExecutedCommand()

    if(autocompletionCommand)
      setTypingAreaContent(autocompletionCommand.name)
}

export function moveCursor() {
  const INITIAL_MARGIN_PX: number = -10.5
  const SHIFT_FACTOR_PX: number = Math.abs(INITIAL_MARGIN_PX)
  
  const current_cursor_position: number = $terminalTextarea?.selectionStart as number
  const max_cursor_position: number = $terminalTextarea?.value.length as number

  let next_shift_position_px: number = ((current_cursor_position - max_cursor_position) * SHIFT_FACTOR_PX) + INITIAL_MARGIN_PX

  $cursor.style.left = next_shift_position_px .toString() + "px"

  return
}


// html functions
export function syncTypingAreaWithTextarea() {
  if($terminalTextarea && $typingArea) {
    $typingArea.textContent = $terminalTextarea.value
  }
}

export function setTypingAreaContent(text: string) {
  if(!$terminalTextarea || !$typingArea)
    return

  $typingArea.textContent = text

  $terminalTextarea.value = text
  $terminalTextarea.selectionStart = $terminalTextarea.selectionEnd = $terminalTextarea.value.length
  $terminalTextarea.focus()
}

export function clearTypingArea() {
  if($terminalTextarea)
    $terminalTextarea.value = ""

  if($typingArea)
    $typingArea.textContent = ""
}