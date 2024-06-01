import { Company } from "./company.model"
import { Customer } from "./customer.model"

export interface Resume {
    companies: Company[]
    updatedAt: Date
}

let resume: Resume = {
    updatedAt: new Date('2024-01-13'),
    companies: [
        { 
            name: 'IdeaIT S.r.l.',
            jobTitle: 'Web Developer',
            location: 'Chieti, Abruzzo',
            start: new Date('2019-04-02'),
            end: new Date('2019-07-14'),
            experiences: [
                {
                    customer: Customer.INTERNO,
                    projects: [
                        {
                            name: 'Realizzazione Sito Wordpress ShareLock',
                            start: new Date('2019-04-02'),
                            end: new Date('2019-07-14'),
                            description: 'Realizzazione e implementazione tema custom compatibile con il software Elementor, manutenzione generale sui contenuti e sulla sicurezza'
                        }
                    ]
                }
            ]
        },
        { 
            name: 'Ready2Use S.r.l.',
            jobTitle: 'Analista Programmatore',
            location: 'Pescara, Abruzzo',
            start: new Date('2020-06-03'),
            experiences: [
                {
                    customer: Customer.BIP,
                    finalCustomer: Customer.TIM,
                    projects: [
                        {
                            start: new Date('2020-06-03'),
                            end: new Date('2021-01-21'),
                            name: 'Realizzazione Applicativo Laravel Tableau De Bord',
                            description: "Portale con frontend in Vue.js che offre ai suoi utenti dei grafici sull'andamento delle attività e turni lavorativi"
                        },
                        {
                            start: new Date('2020-08-15'),
                            end: new Date('2021-10-13'),
                            name: 'Realizzazione Applicativo Laravel Bacheca',
                            description: "Portale con frontend in Vue.js che offre ai suoi utenti un'interfaccia per consultare le novità e un classico CRUD amministrativo per la gestione dei contenuti"
                        }
                    ]
                },
                {
                    customer: Customer.SOGEITSOLUTIONS,
                    finalCustomer: Customer.TIM,
                    projects: [
                        {
                            start: new Date('2020-09-10'),
                            end: new Date('2021-03-04'),
                            name: 'Revisione Applicativo Drupal 7 Netbook',
                            description: "Implementazione funzionalità di generazione ed esportazione di carte topografiche, manutenzione generale"
                        },
                        {
                            start: new Date('2020-10-01'),
                            end: new Date('2020-12-12'),
                            name: 'Revisione Applicativo Drupal 7 NewsletterPro',
                            description: "Potenziamento e ottimizzazione delle funzionalità di scheduling email"
                        },
                        {
                            start: new Date('2020-08-13'),
                            end: new Date('2021-06-04'),
                            name: 'Revisione Applicativo Drupal 7 SmallApp',
                            description: "Creazione scheduling invio SMS in diverse lingue, implementazione funzionalità per l'automatizzazione del flusso, manutenzione generale sulla sicurezza"
                        },
                        {
                            start: new Date('2020-09-10'),
                            end: new Date('2021-02-04'),
                            name: 'Revisione Applicativo Drupal 7 ASM',
                            description: "Aggiunta di funzionalità e bugfix vari"
                        },
                        {
                            start: new Date('2021-03-01'),
                            end: new Date('2021-10-04'),
                            name: 'Revisione Sito Drupal 8 Operazione Risorgimento Digitale',
                            description: "Manutenzione generale, aggiunta di contenuti, creazione di un modulo custom"
                        },
                        {
                            start: new Date('2021-03-01'),
                            end: new Date('2021-04-04'),
                            name: 'Realizzazione Sito Drupal 8 TIM Ventures',
                            description: "Creazione di un sito multilingua con tema custom, modulo custom e blocchi custom editabili da pannello di amministrazione"
                        },
                        {
                            start: new Date('2021-10-01'),
                            end: new Date('2022-03-04'),
                            name: 'Realizzazione Sito Drupal 8 Operazione Risorgimento Digitale',
                            description: "Creazione e manutenzione di un sito con tipi di contenuto filtrabili, editabili e gestibili dall'utente amministratore tramite blocchi di paragrafi e viste custom, logica di sottoscrizione a corsi, creazione di moduli custom"
                        }
                    ]
                },
                {
                    customer: Customer.GSE,
                    projects: [
                        {
                            start: new Date('2021-06-01'),
                            end: new Date('2021-12-04'),
                            name: 'SuiteCRM',
                            description: "Ricostruzione dell'intero ambiente da zero con moduli custom, implementazione di funzionalità di WorkFlow, configurazione per il corretto utilizzo delle cartelle di posta essoteriche Exchange e riadattamenti vari per consentire la corretta comunicazione con il Database SQL Server"
                        } 
                    ]
                },
                {
                    customer: Customer.DEEP_CONSULTING,
                    projects: [
                        {
                            start: new Date('2020-12-01'),
                            end: new Date('2022-03-04'),
                            name: 'Intranet',
                            description: "Progettazione e sviluppo, nel contesto del Sistema informativo Aziendale interno, di una piattaforma software per la gestione del recruiting, delle richieste di lavoro, CV e degli skill matrix aziendali, con sistema di notifiche basato su Websockets, integrazione con le API di Google per lo scheduling dei colloqui da remoto e con Google Drive per il salvataggio di documenti importanti sul Cloud.Il backend è stato scritto in ambiente Linux / Apache e consta di un set di API RESTful sviluppate con l'ausilio di Laravel; la versione attuale del frontend in Angular 12 sviluppata con l'ausilio di Bulma e la libreria di componenti DevExtreme, la prima versione in Vue.js/Bootstrap 4. <br>La Web App è stata realizzata con l'ausilio di Capacitor per il rilascio delle versioni Desktop Electron, Android e iOS."
                        },
                        {
                            start: new Date('2021-10-01'),
                            end: new Date('2022-02-04'),
                            name: 'Console Regia',
                            description: "Ricostruzione in Angular 11 di un applicativo Flash finalizzato alla gestione smart dei disservizi e implementazione di nuove funzionalità custom volte al filtraggio avanzato, alla visualizzazione di grafici statistici e all'esportazione dei dati intabellati in formato XLS. Prima bozza dell'applicativo costruita mediante l'utilizzo della libreria NGBootstrap, versione corrente mediante PrimeNG"
                        }
                    ]
                },
                {
                    customer: Customer.FOODLOVERY,
                    projects: [
                        {
                            name: "Food Delivery",
                            start: new Date('2022-02-01'),
                            end: new Date('2022-04-04'),
                            description: "Implementazione sistema di notifiche E-Mail e OneSignal, con pannello gestionale lato web-app in base al tipo notifica e ruolo d'appartenenza, e piattaforma di messaggistica tramite ChatBot full-stack (Ionic per le tre app mobile, Angular per la web-app e NestJS per il Backend) per la risoluzione degli ordini non completati. <br>Risoluzione di criticità varie presenti sulle quattro app frontend e riadattamento del sistema di geolocalizzazione tramite le API di Google Maps"
                        }
                    ]
                },
                {
                    customer: Customer.ENGINEERING,
                    finalCustomer: Customer.LIVEBOX,
                    projects: [
                        {
                            name: "VDesk - Taranto",
                            start: new Date('2022-03-01'),
                            end: new Date('2022-04-04'),
                            description: "Realizzazione di un plugin full-stack “scadenziario” per l'app Angular 9 VDesk (Material - Syncfusion), con Backend Nextcloud 17 (PHP 7.3) e Bridge Laravel 6.2"
                        },
                        {
                            name: "VDesk - Bologna",
                            start: new Date('2022-04-01'),
                            end: new Date('2022-09-04'),
                            description: "Realizzazione di un plugin full-stack per l'interfacciamento con un secondo DB esterno, con CRUD di tabelle/campi/relazioni e un'interfaccia frontend simil-phpMyAdmin. <br>Realizzazione di un sistema di auto-provisioning degli utenti SAML importati dal cliente su tabelle di appoggio presenti un secondo DB esterno. <br>Realizzazione di un plugin per la visualizzazione tramite menù a tendina condizionali delle informazioni presenti sull'area di staging all'interno del WorkFlow Builder, al fine di garantirne la fruibilità lato utente tramite campi compilabili dinamici. <br>Implementazione di logica sottesa all'area di staging, finalizzata alla categorizzazione dinamica dei dati recuperati dai menù a tendina a seconda del gruppo di appartenenza dell'utente, fornendo all'editor del template la possibilità di specificare da backoffice una condizione di recupero dati per ogni gruppo esistente. <br>Revisione della struttura logica del WorkFlow Builder volta all'implementazione e alla gestione di condizionalità di flusso, fornendo all'utente richiedente la possibilità di scegliere i gruppi destinatari della sua pratica su ogni RuoloFase specificato in backoffice tra una lista autopopolata di gruppi dipendenti dal proprio responsabile approvativo SAML. <br>Implementazione di una casistica “flusso semplificato” per la gestione di richieste indipendenti dall'andamento del WorkFlow, che vengono convertite in PDF e inviate a uno o più indirizzi di posta elettronica come indicato in backoffice. <br>Risoluzione di alcune criticità sulla parte di autenticazione SAML, display feed RSS, validazione elementi richiesta, personalizzazione email/messaggi notifiche e implementazione di funzionalità di ordinamento dati importati tramite CSV sui menù a tendina"
                        }
                    ]
                },
                {
                    customer: Customer.DEEP_CONSULTING,
                    finalCustomer: Customer.TEAMSYSTEM,
                    projects: [
                        {
                            name: "Presenze/Polyedro/AllInOne",
                            start: new Date('2022-09-01'),
                            end: new Date('2024-01-11'),
                            description: "Manutenzione generale, porting e nuove implementazioni su un macroapplicativo consolidato per il censimento dei dati anagrafici e verifiche sullo stato di attività della popolazione multiaziendale, gestione trasferte e registrazione contabile note spesa, elaborazione timbrature di presenza e produzione valorizzate da cartellino, pianificazione orari di lavoro, turni e allocazioni su reparti con ribaltamento diretto dei dati approvati su timesheet.Sviluppo di un applicativo in C per il recupero delle informazioni riguardanti sistema operativo, macchina e installazione sugli impianti on-premise.Ripensamento della logica di funzionamento e riscrittura del vecchio workflow autorizzativo delle giustificazioni via mail da C in C++, per consentire l'autorizzazione massiva automatica di un numero elevato di giustificativi in tempo reale.Sviluppo di servizi C++ per l'esposizione di dati su visibilità gerarchica del proprio team di lavoro verso App Mobile, sistemi SAP e dashboard esterne gestite dai clienti. <br>Previsione di uno script per l'esportazione e il seeding di un preset di dati per agevolare l'installazione dei nuovi tenant cloud. <br>Supporto all'analisi di un sistema di import parametrico preesistente in C++ per la messa in piedi della sua controparte di export in Python.<br>Parte legacy sviluppata in C/Javascript, moderna con backend C++, Bridge Java 8 e frontend Angular 14."
                        }
                    ]
                }
            ]
        }
    ]
}

resume.companies
    .reverse()
    .map(company => {
        company.experiences
            .reverse()
            .map(experience => {
                experience.projects.sort((a, b) => {
                    const startComparison = a.start!.getTime() - b.start!.getTime()
                    
                    if (startComparison !== 0)
                        return startComparison

                    if(!a.end || !b.end)
                        return startComparison

                    return a.end.getTime() - b.end.getTime()
                })

                return experience
            })
        return company
    })

export const RESUME = resume
