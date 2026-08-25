/* ===== Pattern of the 54 cells: icon + type only (layout stays like the board) ===== */
const cellTypes=[
["❓","question"],["","normal"],["❓","question"],["","normal"],["👗","dress"],["","normal"],
["","normal"],["💜","truth"],["","normal"],["❓","question"],["","normal"],["","normal"],
["⭐","challenge"],["","normal"],["","normal"],["👗","dress"],["","normal"],["","normal"],
["","normal"],["💜","truth"],["👗","dress"],["❓","question"],["","normal"],["","normal"],
["❓","question"],["⭐","challenge"],["","normal"],["","normal"],["","normal"],["👗","dress"],
["","normal"],["💜","truth"],["","normal"],["","normal"],["❓","question"],["","normal"],
["","normal"],["⭐","challenge"],["","normal"],["","normal"],["💜","truth"],["❓","question"],
["","normal"],["","normal"],["👗","dress"],["","normal"],["⭐","challenge"],["","normal"],
["","normal"],["","normal"],["💜","truth"],["❓","question"],["","normal"],["🏆","arrivo"]
];

const genericLabel={question:"Domanda sulla sposa",challenge:"Sfida divertente",truth:"Obbligo o verità",dress:"Vesti la sposa",normal:"Sentiero nel bosco",arrivo:"Arrivo"};

/* ===== Card pools — pescate a caso come gli "Imprevisti" del Monopoli ===== */
const pools={
  question:[
    ["Domanda sulla sposa","Qual è la cosa più imbarazzante che la sposa ha fatto per amore?"],
    ["Quiz sulla coppia","Chi ha fatto il primo passo? Rispondi senza pensarci troppo."],
    ["Memoria di ferro","Dove è avvenuto il primo appuntamento della coppia?"],
    ["Chi è chi?","Qual è la qualità del futuro marito che la sposa ama di più?"],
    ["La prova delle date","Qual è la data dell'anniversario della coppia?"],
    ["Il dettaglio","Qual è la prima cosa che la sposa ha notato del futuro marito?"],
    ["La migliore amica","Quale amica conosce meglio la sposa? Spiega perché."],
    ["Ultima domanda","Qual è il viaggio dei sogni che la sposa vorrebbe fare col futuro marito?"],
    ["Il soprannome","Come si chiamano a vicenda quando sono soli?"],
    ["La proposta","Racconta in due parole come è avvenuta la proposta di matrimonio."],
    ["Il difetto","Qual è il difetto del futuro marito che la sposa sopporta di più?"],
    ["Film o serie?","Qual è il film o la serie preferita della coppia?"],
    ["Il piatto","Qual è il piatto che la sposa cucina (o ordina) più spesso per il futuro marito?"],
    ["La canzone","Qual è la canzone simbolo della coppia?"],
    ["Il futuro","Dove si vede la sposa tra 10 anni con il futuro marito?"]
  ],
  challenge:[
    ["Ballo proibitivo","30 secondi di ballo esagerato. Le amiche scelgono la canzone."],
    ["Pubblicità vivente","Vendi alle amiche un oggetto qualsiasi come fosse il prodotto del secolo."],
    ["Imitazione","Imita per 20 secondi il futuro marito. Le amiche devono indovinare."],
    ["Pose da matrimonio","Fate una foto di gruppo imitando una posa da matrimonio super seria."],
    ["Canta un ritornello","Canta a squarciagola il ritornello di una canzone d'amore a scelta."],
    ["Sfilata","Fai una passerella improvvisata come se fossi su una copertina di moda."],
    ["Selfie assurdo","Scatta il selfie più strano possibile con tre amiche diverse."],
    ["Voce buffa","Racconta un ricordo della sposa parlando con una voce buffa a scelta."],
    ["Statua","Resta immobile in una posa a scelta finché qualcuno non ride."],
    ["Mimo","Mima una scena di un film romantico, le altre devono indovinare quale."],
    ["Karaoke lampo","Canta le prime due righe di una canzone scelta dalle amiche."],
    ["Discorso improvvisato","Fai un discorso di nozze improvvisato di 20 secondi."]
  ],
  truth:[
    ["Obbligo","Fai un brindisi improvvisato dedicato alla futura vita matrimoniale."],
    ["Verità","Qual è la cosa più folle che faresti per il tuo futuro marito?"],
    ["Obbligo","Fai un complimento esageratamente romantico alla persona alla tua destra."],
    ["Verità","Qual è il consiglio matrimoniale più assurdo che hai mai ricevuto?"],
    ["Obbligo","Fai una dedica di 10 secondi alla futura sposa."],
    ["Verità","Qual è stata la tua prima reazione quando hai saputo del fidanzamento?"],
    ["Obbligo","Racconta il segreto di coppia più innocuo che conosci sulla sposa."],
    ["Verità","Cosa cambieresti (per scherzo) del futuro marito?"],
    ["Obbligo","Scrivi un messaggio d'amore finto e leggilo ad alta voce."],
    ["Verità","Qual è l'episodio più romantico a cui hai assistito tra i due?"],
    ["Obbligo","Fai un brindisi rivolto solo alla sposa, guardandola negli occhi."]
  ],
  dress:[
    ["Primo accessorio","Crea un piccolo accessorio per la sposa con quello che avete a disposizione."],
    ["Look da bosco","Aggiungi alla sposa un dettaglio buffo: velo, fiocco, occhiali o altro."],
    ["Total white","Inventate un look da sposa usando carta, tovaglioli o materiali innocui."],
    ["Accessoriata!","La sposa sceglie un accessorio creato dalle amiche e lo indossa."],
    ["Corona di fiori","Create una corona improvvisata con quello che trovate intorno."],
    ["Velo improvvisato","Realizzate un velo con un tovagliolo o un foulard e fatelo indossare."],
    ["Il bouquet","Create un piccolo bouquet improvvisato per la sposa."],
    ["Final touch","Scegliete l'accessorio più bello creato durante il gioco e fatelo indossare."]
  ],
  normal:[
    ["Sentiero tranquillo","Respira, sorridi e continua il percorso nel bosco."],
    ["Ponte del bosco","Attraversate il ponte immaginario e avanti!"],
    ["Foglie e fiori","Una pausa verde prima della prossima prova."],
    ["Radura","Una pausa nella radura prima della prossima sfida."],
    ["Funghi magici","Fate una posa fotografica da favola nel bosco."],
    ["Cascata","Scattate una foto di gruppo con una posa da matrimonio."],
    ["Pietra portafortuna","Tutte fanno un brindisi alla sposa."],
    ["La tana","Inventate un nome buffo per il futuro marito."],
    ["Il grande albero","Tutte insieme: una foto da copertina."],
    ["Sentiero delle risate","Racconta una figuraccia innocente della tua vita."],
    ["Il vecchio pozzo","Esprimi un desiderio per la coppia."],
    ["Radura fiorita","Scegliete la canzone del prossimo brindisi."],
    ["Passaggio segreto","Avanti, il traguardo si avvicina!"],
    ["Ultima radura","Manca pochissimo: preparate il brindisi finale."],
    ["La porta nel bosco","Il traguardo è vicinissimo!"]
  ]
};

const arrivalCard=["Missione compiuta","Brindisi finale, foto di gruppo e abbraccio alla sposa! Avete completato tutte le prove. 🥂"];

function drawCard(type){
  if(type==="arrivo")return arrivalCard;
  const arr=pools[type];
  return arr[Math.floor(Math.random()*arr.length)];
}

const board=document.getElementById("board"),rollBtn=document.getElementById("rollBtn"),dice=document.getElementById("dice"),status=document.getElementById("status"),modal=document.getElementById("modal"),win=document.getElementById("win"),completeBtn=document.getElementById("completeBtn"),progressBar=document.getElementById("progressBar"),progressText=document.getElementById("progressText"),positionText=document.getElementById("positionText");
const SAVE_KEY="addio-nubilato-paola-save";
let position=0,completed=new Set(),pending=null;

function saveProgress(){
  try{
    localStorage.setItem(SAVE_KEY,JSON.stringify({position,completed:[...completed]}));
  }catch(e){/* storage unavailable, game still works, just won't persist */}
}
function loadProgress(){
  try{
    const raw=localStorage.getItem(SAVE_KEY);
    if(!raw)return;
    const data=JSON.parse(raw);
    if(typeof data.position==="number")position=Math.max(0,Math.min(53,data.position));
    if(Array.isArray(data.completed))completed=new Set(data.completed);
  }catch(e){/* ignore corrupted save */}
}

function render(){
  board.innerHTML="";
  cellTypes.forEach((c,i)=>{
    const [icon,type]=c;
    const cell=document.createElement("div");
    let cls="cell "+(type==="question"?"special-question ":type==="challenge"?"special-challenge ":type==="truth"?"special-truth ":type==="dress"?"special-dress ":type==="arrivo"?"special-arrivo ":"");
    cell.className=cls+(completed.has(i)?" completed ":"")+(position===i?" current":"");
    const pawnHtml=position===i?'<div class="pawn">👰🏻‍♀️</div>':'';
    cell.innerHTML=type==="normal"
      ?`<div class="num-plain">${i+1}</div>${pawnHtml}`
      :`<div class="num-badge">${i+1}</div><div class="icon-badge">${icon}</div><div class="cell-name">${genericLabel[type]}</div>${pawnHtml}`;
    cell.onclick=()=>openChallenge(i);
    board.appendChild(cell);
  });
  // CSS grid placement creates a serpentine path: every other row is reversed.
  [...board.children].forEach((cell,i)=>{
    const row=Math.floor(i/6),col=i%6;
    cell.style.gridRow=(9-row);
    cell.style.gridColumn=(row%2===0?col+1:6-col);
  });
  progressBar.style.width=`${completed.size/cellTypes.length*100}%`;
  progressText.textContent=`${completed.size} / ${cellTypes.length}`;
  positionText.textContent=position+1;
}

function openChallenge(i){
  pending=i;
  const [icon,type]=cellTypes[i];
  const card=drawCard(type);
  document.getElementById("modalIcon").textContent=icon||"🌿";
  document.getElementById("modalType").textContent=genericLabel[type].toUpperCase();
  document.getElementById("modalTitle").textContent=card[0];
  document.getElementById("modalText").textContent=card[1];
  completeBtn.disabled=completed.has(i);
  completeBtn.textContent=completed.has(i)?"PROVA GIÀ COMPLETATA ✓":"PROVA COMPLETATA ✓";
  modal.classList.remove("hidden");
}
function close(){modal.classList.add("hidden");pending=null}
rollBtn.onclick=()=>{
  if(position>=53)return;
  rollBtn.disabled=true;dice.classList.remove("roll");void dice.offsetWidth;dice.classList.add("roll");
  const value=Math.floor(Math.random()*6)+1;
  dice.textContent=["⚀","⚁","⚂","⚃","⚄","⚅"][value-1];
  setTimeout(()=>{
    position=Math.min(53,position+value);
    status.textContent=`Hai fatto ${value}! Sei sulla casella ${position+1}.`;
    saveProgress();
    render();openChallenge(position);rollBtn.disabled=false;
  },560);
};
completeBtn.onclick=()=>{
  if(pending===null)return;
  completed.add(pending);close();render();
  saveProgress();
  status.textContent="Prova completata! Avanti lungo il sentiero 🌲";
  if(completed.size===cellTypes.length)setTimeout(()=>win.classList.remove("hidden"),350);
};
document.getElementById("closeModal").onclick=close;
modal.onclick=e=>{if(e.target===modal)close()};
function restartGame(){position=0;completed=new Set();dice.textContent="🎲";status.textContent="Pronta? Inizia il percorso!";win.classList.add("hidden");saveProgress();render()}
document.getElementById("restartBtn").onclick=restartGame;
document.getElementById("restartBtn2").onclick=restartGame;
const helpModal=document.getElementById("helpModal");
document.getElementById("helpBtn").onclick=()=>helpModal.classList.remove("hidden");
document.getElementById("closeHelp").onclick=()=>helpModal.classList.add("hidden");
helpModal.onclick=e=>{if(e.target===helpModal)helpModal.classList.add("hidden")};
loadProgress();
if(completed.size>0||position>0)status.textContent="Bentornata! Ecco dove eri rimasta 🌿";
render();
