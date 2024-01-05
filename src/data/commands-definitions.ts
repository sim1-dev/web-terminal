import { Command } from "../models/command.model";
import { Project } from "../models/project.model";
import { projects } from "./projects-definitions";

export let commands: Command[] = [
    {
        name: "startup",
        description: "Startup",
        visible: false,
        result: "",
        callback: function() {printNeofetch(); printStartup() }
    },
    {
        name: "whoami",
        description: "Informazioni su di me",
        visible: true,
        result: "<p>Mi chiamo Simone, ho 25 anni e sono un Web Developer. Quello dello sviluppatore è un viaggio dinamico e appassionante che richiede impegno costante e flessibilità. In quanto disciplina non esatta, il professionista deve affrontare con responsabilità e creatività le sfide impreviste che emergono durante il processo di creazione. Ho investito gli ultimi anni della mia vita nell'approfondimento continuo della rapida evoluzione del settore, studiando attentamente le nuove tecnologie e le tendenze emergenti. Questo impegno mi ha permesso di acquisire una conoscenza approfondita, consentendomi di lavorare su progetti innovativi e all'avanguardia. La mia dedizione allo studio quotidiano si traduce in soluzioni web personalizzate e adatte alle esigenze specifiche dei clienti, contribuendo a creare un impatto significativo nel panorama digitale.</p>"
    },
    {
        name: "neofetch",
        description: "Info generali sul sistema",
        visible: true,
        result: "",
        callback: printNeofetch
    },
    {
        name: "technologies",
        description: "Info sulle tecnologie da me utilizzate negli ultimi anni",
        visible: true,
        result: "<p><span>Linguaggi</span>: Typescript, PHP, Javascript, C, C++, Python<br><span>Frameworks</span>: Laravel, Angular, Ionic, Nest.js, Vue, Drupal, Wordpress, SuiteCRM<br><span>Devops</span>: Docker, Git, SVN, Jira<br><span>Librerie UI</span>: PrimeNG, DevExtreme, Material, Syncfusion, Skeleton UI<br><span>Database</span>: MySQL, Postgres, SQL Server, SQLite<br><span>Altre tecnologie</span>: Redis, Cordova/Capacitor, Three.js, Leaflet.js, Socket.io</p>"
    },
    {
        name: "projects",
        description: "Progetti a cui ho lavorato nel corso della mia carriera",
        visible: true,
        result: "",
        callback: printProjects
    },
    {
        name: "ui",
        description: "Redireziona sul portfolio con interfaccia utente",
        visible: true,
        result: "",
        callback: redirectToOriginalPortfolio
    },
    {
        name: "clear",
        description: "Svuota il terminale",
        visible: true,
        result: "",
        callback: clearLogLine
    }
]

// callback functions
export function clearLogLine() {
    let $logLine: HTMLElement | null = document.getElementById('log-line')

    if(!$logLine)
        return;

    $logLine.innerHTML = ""
}


export function redirectToOriginalPortfolio() {
    window.open("https://simofolio.vercel.app", "_blank")
}


export function printStartup() {
    let $logLine: HTMLElement | null = document.getElementById('log-line')
    let $startupSkeleton: HTMLElement | null = document.getElementById('startup-skeleton');

    if(!$logLine || !$startupSkeleton)
        return

    $logLine.innerHTML += $startupSkeleton.innerHTML
}
export function printNeofetch() {
    let $logLine: HTMLElement | null = document.getElementById('log-line')
    let $neofetchSkeleton: HTMLElement | null = document.getElementById('neofetch-skeleton');

    if(!$logLine || !$neofetchSkeleton)
        return

    $logLine.innerHTML += $neofetchSkeleton.innerHTML
}
function printProjects() {
    let $logLine: HTMLElement = document.getElementById('log-line') as HTMLElement
    $logLine.innerHTML += "<span>Progetti a cui ho lavorato negli ultimi anni</span>"
    $logLine.innerHTML += "<br>"
    $logLine.innerHTML += "<br>"
    projects.map((project: Project) => {
        $logLine.innerHTML += "<span>"+ project.name +"</span>"
        $logLine.innerHTML += "<br>"
        $logLine.innerHTML += "<p>"+ project.description +"</p>"
        // if(project.link) {
        //     $logLine.innerHTML += '<a href="'+ project.link +'" target="_blank">Visita il sito</a>'
        //     $logLine.innerHTML += "<br>"
        // }
        $logLine.innerHTML += "- - - - - - - - - - - -"
        $logLine.innerHTML += "<br>"
        $logLine.innerHTML += "<br>"
    })
}
