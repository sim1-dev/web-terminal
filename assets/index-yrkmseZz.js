(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();let E=[{name:"TIM ORD",description:"Operazione Risorgimento Digitale - Progetto Reale (Drupal 8)",link:"http://operazionerisorgimentodigitale.it/"},{name:"TIM Ventures",description:"Ventures - Progetto Reale (Drupal 8)",link:"http://timventures.it/"},{name:"CSS Coverage Parser",description:"Tool per la rimozione del CSS inutilizzato (Angular)",link:"http://parser.simonetenisci.it/"},{name:"ShareLock - Sicurezza Intelligente",description:"Middleware per la sicurezza fisica (Wordpress)",link:"https://sharelock.it/"},{name:"Lido Venus",description:"Pannello Gestionale Lido - Brief Didattico (Vue & LaravelLTE)",link:"http://simovenus.herokuapp.com/index"},{name:"Sabrina Gioielli",description:"Sabrina Gioielli E-Shop - Brief Didattico (Wordpress & Woocommerce)",link:"https://simonetenisci.altervista.org/gioielli"},{name:"Sawasdee",description:"Sawasdee Massaggi Olistici Thailandesi - Brief Didattico (Wordpress)",link:"https://simonetenisci.altervista.org/sawasdee"},{name:"Agriservice S.r.l.",description:"Gestionale Ristorazione e Catering - Brief Didattico (PHP & Bootstrap)",link:"https://simonetenisci.altervista.org/agriservice"},{name:"Infobasic",description:"Gestionale Corsi e Lezioni - Brief Didattico (Wordpress)",link:"https://andreainfo.altervista.org/"},{name:"Big Stone Jamboree Park",description:"Sito Vetrina - Brief Didattico (HTML & CSS)",link:"https://simonetenisci.altervista.org/bigstone"},{name:"DarkSTEP - COD4 Modder, Mapper, Scripter",description:"Sito Vetrina - Prototipo (Wordpress)",link:"https://simonetenisci.altervista.org/darkstep"}],p=[{name:"startup",description:"Startup",visible:!1,result:"",callback:function(){L(),T()}},{name:"whoami",description:"Informazioni su di me",visible:!0,result:"Mi chiamo Simone, ho 25 anni e sono un Web Developer. Quello dello sviluppatore è un viaggio dinamico e appassionante che richiede impegno costante e flessibilità. In quanto disciplina non esatta, il professionista deve affrontare con responsabilità e creatività le sfide impreviste che emergono durante il processo di creazione. Ho investito gli ultimi anni della mia vita nell'approfondimento continuo della rapida evoluzione del settore, studiando attentamente le nuove tecnologie e le tendenze emergenti. Questo impegno mi ha permesso di acquisire una conoscenza approfondita, consentendomi di lavorare su progetti innovativi e all'avanguardia. La mia dedizione allo studio quotidiano si traduce in soluzioni web personalizzate e adatte alle esigenze specifiche dei clienti, contribuendo a creare un impatto significativo nel panorama digitale."},{name:"neofetch",description:"Info generali sul sistema",visible:!0,result:"",callback:L},{name:"technologies",description:"Info sulle tecnologie da me utilizzate negli ultimi anni",visible:!0,result:"<span>Linguaggi</span>: Typescript, PHP, Javascript, C, C++, Python<br><span>Frameworks</span>: Laravel, Angular, Ionic, Nest.js, Vue, Drupal, Wordpress, SuiteCRM<br><span>Devops</span>: Docker, Git, SVN, Jira<br><span>Librerie UI</span>: PrimeNG, DevExtreme, Material, Syncfusion, Skeleton UI<br><span>Database</span>: MySQL, Postgres, SQL Server, SQLite<br><span>Altre tecnologie</span>: Redis, Cordova/Capacitor, Three.js, Leaflet.js, Socket.io"},{name:"projects",description:"Progetti a cui ho lavorato nel corso della mia carriera",visible:!0,result:"",callback:I},{name:"clear",description:"Svuota il terminale",visible:!0,result:"",callback:M}];function M(){let e=document.getElementById("log-line");e&&(e.innerHTML="")}function T(){let e=document.getElementById("log-line"),i=document.getElementById("startup-skeleton");!e||!i||(e.innerHTML+=i.innerHTML)}function L(){let e=document.getElementById("log-line"),i=document.getElementById("neofetch-skeleton");!e||!i||(e.innerHTML+=i.innerHTML)}function I(){let e=document.getElementById("log-line");e.innerHTML+="<span>Progetti a cui ho lavorato negli ultimi anni</span>",e.innerHTML+="<br>",e.innerHTML+="<br>",E.map(i=>{e.innerHTML+="<span>"+i.name+"</span>",e.innerHTML+="<br>",e.innerHTML+="<p>"+i.description+"</p>",i.link&&(e.innerHTML+='<a href="'+i.link+'" target="_blank">Visita il sito</a>',e.innerHTML+="<br>"),e.innerHTML+="- - - - - - - - - - - -",e.innerHTML+="<br>",e.innerHTML+="<br>"})}function P(e){let i={name:"help",description:"Lista dei comandi disponibili",visible:!0,result:""},a=e.filter(n=>n.visible).map(n=>({name:n.name,description:n.description}));const t=Math.max(...a.map(n=>n.name.length));return i.result=a.map(n=>{function l(k,f){let g=f>30?f:30;g-=k.length;let v="";for(let h=0;h<g;h++)v+=" ";return v}return`<span>${n.name}</span>${l(n.name,t)}${n.description}`}).join("<br>"),i}let z=P(p);p.push(z);function S(e){return p.find(o=>o.name===e)}var m=[],d=0;function H(e){m.push(e),d=m.length-1}function D(){let e=c(0);return e?d--:e=c(1),e}function B(){let e=c(2);return e?d++:e=c(1),e}function c(e=0){return m[d+e]}const u=document.getElementById("log-line"),b=document.getElementById("command-line"),r=document.getElementById("terminal-area"),s=document.getElementById("typing-area"),y=document.getElementById("cursor");b&&b.addEventListener("keyup",N);r&&(r.addEventListener("keyup",$),r.addEventListener("focus",A),r.addEventListener("blur",x));function A(){y.style.visibility="visible"}function x(){y.style.visibility="hidden"}C(S("startup"));function w(e){let i=document.createElement("p");i.innerHTML=e,u==null||u.append(i)}function $(e){if(!r)return;if(e.key==="ArrowUp"||e.key==="ArrowDown"){let t;e.key==="ArrowUp"&&(t=D()),e.key==="ArrowDown"&&(t=B()),t&&O(t.name);return}let i=r.value;if(!i||e.key!=="Enter")return;let o=S(i.replace(/(\r\n|\n|\r)/gm,"")),a=C(o);a&&w(a),R(),o&&H(o)}function C(e){return e?(e.callback&&e.callback(),e.result):`Comando non trovato. Digita '<span class="neon">help</span>' per la lista completa di comandi`}function N(){r&&s&&(s.textContent=r.value)}function O(e){!r||!s||(s.textContent=e,r.value=e,r.selectionStart=r.selectionEnd=r.value.length,r.focus())}function R(){r&&(r.value=""),s&&(s.textContent="")}
