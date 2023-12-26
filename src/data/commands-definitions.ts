import { Command } from "../models/command.model";

export let commands: Command[] = [
    {
        name: "whoami",
        description: "Informazioni su di me",
        visible: true,
        result: "<b>Simone Tenisci</b>"   //TODO
    },
    {
        name: "tecnologie",
        description: "Info sulle tecnologie da me utilizzate negli ultimi anni",
        visible: true,
        result: "Wordpress, Drupal, Angular, boh" //TODO
    },
    {
        name: "clear",
        description: "Svuota il terminale",
        visible: true,
        result: "",
        callback: clearLogLine
    },
    {
        name: "neofetch",
        description: "Info sul sistema",
        visible: true,
        result: "",
        callback: printNeofetch
    }
]

// callback functions
export function clearLogLine() {
    let $logLine: HTMLElement | null = document.getElementById('log-line')

    if(!$logLine)
        return;

    $logLine.innerHTML = ""
}

export function printNeofetch() {
    let $logLine: HTMLElement | null = document.getElementById('log-line')
    let $neofetchSkeleton: HTMLElement | null = document.getElementById('neofetch-skeleton');

    if(!$logLine || !$neofetchSkeleton)
        return

    $logLine.innerHTML += $neofetchSkeleton.innerHTML

}