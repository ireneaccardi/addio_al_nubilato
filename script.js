/* =====================================================================
   Ogni casella ha la propria prova specifica e fissa (non più pescata a
   caso da un mazzo comune). Struttura per tipo:
   - question / challenge / normal / arrivo → { icon, type, title, text }
   - scelta ("Scelta")  → { icon, type, obbligo:{title,text}, verita:{title,text} }
   - dress ("Challenge") → { icon, type, title, text } (spunto iniziale della checklist)
   ===================================================================== */
const genericLabel={question:"Domanda alla sposa",challenge:"Sfida divertente",scelta:"Scelta",dress:"Vestiti",normal:"Sentiero nel bosco",arrivo:"Arrivo",partenza:"Partenza"};

/*
Esempi
{icon:"💚",type:"scelta",obbligo:{title:"Scelta A",text:"Racconta il segreto di coppia più innocuo che conosci sulla sposa."},verita:{title:"Scelta B",text:"Qual è la cosa più folle che faresti per il tuo futuro marito?"}},
{icon:"👗",type:"dress",title:"Total white",text:"Inventate un look da sposa usando carta, tovaglioli o materiali innocui."},
{icon:"❓",type:"question",title:"Chi è chi?",text:"Qual è la qualità del futuro marito che la sposa ama di più?"},
{icon:"",type:"normal",title:"Pietra portafortuna",text:"Tutte fanno un brindisi alla sposa."},
{icon:"⭐",type:"challenge",title:"Ballo proibitivo",text:"30 secondi di ballo esagerato. Le amiche scelgono la canzone."},
*/

/*
--👩‍🌾 Donna forte e laboriosa: lavora nei campi e in casa.
🏠 Padrona della casa: organizza le faccende domestiche e la vita familiare.
--🍞 Abile nelle attività quotidiane: cucina, prepara il pane e conserva gli alimenti.
👨‍👩‍👧‍👦 Responsabile della famiglia: si occupa dei figli e spesso coordina il lavoro degli altri membri della famiglia.
💪 Autoritaria e determinata: ha un ruolo importante nelle decisioni della famiglia.
--🌾 Legata alla tradizione contadina: conosce usanze, lavori e ritmi della vita rurale marchigiana.
*/

const cells=[
/*0*/  {icon:"🚗",type:"partenza",title:"Inizia il tuo percorso",text:"Sei pronta per questo addio al nubilato?!"},
/*1*/  {icon:"👗",type:"dress",title:"Indossa la bandana",text:"Bendati e fidati delle tue amiche"},
/*2*/  {icon:"💚",type:"scelta",obbligo:{title:"Scelta A",text:"Andare a fare colazione fuori da 'Fior di grano'"},verita:{title:"Scelta B",text:"Andare a fare colazione fuori da 'Fior di grano'"}},
/*3*/  {icon:"",type:"normal",title:"Tema dei prossimi due giorni",text:"Sei pronta a diventare la vergara perfetta?"},
/*4*/  {icon:"",type:"normal",title:"In viaggio verso l'ignoto",text:"Sali in macchina verso la prossima avventura"},
/*5*/  {icon:"❓",type:"question",title:"Prima domanda facile",text:"Qual è la qualità del futuro marito che la sposa ama di più?"},
/*6*/  {icon:"",type:"normal",title:"Indipendenza della vergara",text:"Per essere una brava vergara bisogna essere forti e indipendenti, vediamo la prova da svolgere"},
/*7*/  {icon:"💚",type:"scelta",obbligo:{title:"Prova A",text:"Parco avventura"},verita:{title:"Prova B",text:"Parco avventura"}},
/*8*/  {icon:"",type:"normal",title:"Parco avventura",text:"Affrontiamo le sfide del parco avventura"},
/*9*/  {icon:"👗",type:"dress",title:"Indossa il velo",text:"Una sposa deve avere il velo"},
/*10*/ {icon:"⭐",type:"challenge",title:"Sai farti un pranzo?!",text:"Le vergare sono abili nelle attività quotidiane, sei in grado di farti un panino decente?"},
/*11*/ {icon:"",type:"normal",title:"Pranziamo",text:"Puoi riposare mentre mangiamo, in attesa della prossima sfida"},
/*12*/ {icon:"❓",type:"question",title:"All'alba dei tempi",text:"Come hai conosciuto Domenic?"},
/*13*/ {icon:"⭐",type:"challenge",title:"Crea il tuo Domenichino",text:"Trova i pezzi per creare il tuo Domenic personale (oltre a quello vero)"},
/*14*/ {icon:"👗",type:"dress",title:"Congratulazioni",text:"Aggiungete alla sposa la coccarda"},
/*15*/ {icon:"",type:"normal",title:"Relax post pranzo",text:"Rilassati e gioca ai giochi da tavolo"},
/*16*/ {icon:"",type:"normal",title:"Verso la prossima avventura",text:"In qualità di vergara bisogna essere legati alle proprie origini contadine"},
/*17*/ {icon:"💚",type:"scelta",obbligo:{title:"Prova A",text:"Fattoria didattica"},verita:{title:"Prova B",text:"Fattoria didattica"}},
/*18*/ {icon:"",type:"normal",title:"Buon divertimento alla fattoria",text:"Tratta bene tutti gli animali"},
/*19*/ {icon:"👗",type:"dress",title:"Indossa il cerchietto",text:"LA sposa è sempre più bella"},
/*20*/ {icon:"",type:"normal",title:"Saluti alla seconda macchina",text:"Scattate una foto di gruppo"},
/*21*/ {icon:"",type:"normal",title:"Verso la serata",text:"Chissà cosa ci riserverà"},
/*22*/ {icon:"💚",type:"scelta",obbligo:{title:"Scelta A",text:"Campeggio"},verita:{title:"Scelta B",text:"Campeggio"}},
/*23*/ {icon:"",type:"normal",title:"Montiamo le tende",text:"Tutte aiutano nel montaggio delle tende"},
/*24*/ {icon:"",type:"normal",title:"Buona cena",text:"Si mangia!"},
/*25*/ {icon:"❓",type:"question",title:"La prova delle date",text:"Qual è la data del vostro anniversario?"},
/*26*/ {icon:"",type:"normal",title:"Buonanotte",text:"Con un messaggio speciale dal futuro marito"},
/*27*/ {icon:"",type:"normal",title:"Buongiorno",text:"Verso la colazione"},
/*28*/ {icon:"",type:"normal",title:"La vergara...",text:"...devota"},
/*29*/ {icon:"",type:"normal",title:"Verso la messa",text:"Troviamo una messa a Macerata"},
/*30*/ {icon:"👗",type:"dress",title:"L'accessorio perfetto",text:"Indossa l'accessorio perfetto per una vera vergara"},
/*31*/ {icon:"❓",type:"question",title:"La vergara perfetta",text:"Cosa serve per diventare la vergara perfetta?"},
/*32*/ {icon:"💚",type:"scelta",obbligo:{title:"Prova A",text:"Prepara gli gnocchi"},verita:{title:"Prova B",text:"Prepara gli gnocchi"}},
/*33*/ {icon:"⭐",type:"challenge",title:"Sai preparare gli gnocchi",text:"Prepara la tua porzione di gnocchi per far vedere che sei la vergara perfetta"},
/*34*/ {icon:"",type:"normal",title:"Pranzo",text:"Buon appetito!"},
/*35*/ {icon:"👗",type:"dress",title:"Indossa il vestito bianco",text:"Sei una sposa ora e le spose si vestono di bianco"},
/*36*/ {icon:"",type:"normal",title:"In giro per San Giuliano",text:"Una passseggiata alla ricerca di relax o sfide..."},
/*37*/ {icon:"💚",type:"scelta",obbligo:{title:"Scelta A",text:"Andare in giro a fare sfide"},verita:{title:"Scelta B",text:"Andare in giro a fare sfide"}},
/*38*/ {icon:"⭐",type:"challenge",title:"Cerca la bancarella",text:"Cerca la bancarella degli animali"},
/*39*/ {icon:"⭐",type:"challenge",title:"Cerca la bancarella",text:"Cerca la bancarella del mocio o similare"},
/*40*/ {icon:"⭐",type:"challenge",title:"Cerca la bancarella",text:"Cerca una bancarella dei vestiti"},
/*41*/ {icon:"❓",type:"question",title:"Domanda a un passante",text:"Quali sono gli ingredienti dei vincisgrassi?"},
/*42*/ {icon:"❓",type:"question",title:"Domanda a un passante",text:"Quante uova per un etto di farina per fare la pasta?"},
/*43*/ {icon:"❓",type:"question",title:"Domanda a un passante",text:"A che ora ti alzi la mattina per mettere su il sugo?"},
/*44*/ {icon:"❓",type:"question",title:"Domanda a un passante",text:"Cosa si offre agli ospiti a fine pasto?"},
/*45*/ {icon:"❓",type:"question",title:"Domanda a un passante",text:"Come si fanno le olive all'ascolana?"},
/*46*/ {icon:"",type:"normal",title:"La vergara perfetta...",text:"...maceratese"},
/*47*/ {icon:"⭐",type:"challenge",title:"Cerca la...",text:"..vera vergara"},
/*48*/ {icon:"",type:"normal",title:"Fai un brindisi",text:"con la vera vergara"},
/*49*/ {icon:"",type:"normal",title:"Aperitivo",text:"Brindiamo insieme alla futura sposa"},
/*50*/ {icon:"❓",type:"question",title:"Domanda alla sposa",text:"Elenca più vini possibili della regione"},
/*51*/ {icon:"💚",type:"scelta",obbligo:{title:"Scelta A",text:"Ti consegnamo a Domenic"},verita:{title:"Scelta B",text:"Ti consegnamo a Domenic"}},
/*52*/ {icon:"",type:"normal",title:"Consegna speciale",text:"Sei consegnata al futuro marito"},
/*53*/ {icon:"🏆",type:"arrivo",title:"Missione compiuta",text:"Brindisi finale, foto di gruppo e abbraccio alla sposa! Avete completato tutte le prove. 🥂"}
];

const board=document.getElementById("board"),nextBtn=document.getElementById("nextBtn"),status=document.getElementById("status"),modal=document.getElementById("modal"),win=document.getElementById("win"),completeBtn=document.getElementById("completeBtn"),modalExtra=document.getElementById("modalExtra"),modalIcon=document.getElementById("modalIcon"),modalType=document.getElementById("modalType"),modalTitle=document.getElementById("modalTitle"),modalText=document.getElementById("modalText"),progressBar=document.getElementById("progressBar"),progressText=document.getElementById("progressText"),positionText=document.getElementById("positionText");
const SAVE_KEY="addio-nubilato-paola-save";
let position=0,completed=new Set(),pending=null;
const customChecklists={}; // { cellIndex: [{text, done}] }

function saveProgress(){
  try{
    localStorage.setItem(SAVE_KEY,JSON.stringify({position,completed:[...completed],customChecklists}));
  }catch(e){/* storage unavailable, game still works, just won't persist */}
}
function loadProgress(){
  try{
    const raw=localStorage.getItem(SAVE_KEY);
    if(!raw)return;
    const data=JSON.parse(raw);
    if(typeof data.position==="number")position=Math.max(0,Math.min(cells.length-1,data.position));
    if(Array.isArray(data.completed))completed=new Set(data.completed);
    if(data.customChecklists&&typeof data.customChecklists==="object"){
      Object.keys(data.customChecklists).forEach(k=>{customChecklists[k]=data.customChecklists[k]});
    }
  }catch(e){/* ignore corrupted save */}
}

function render(){
  board.innerHTML="";
  cells.forEach((c,i)=>{
    const {icon,type}=c;
    const cell=document.createElement("div");
    let cls="cell "+(type==="question"?"special-question ":type==="challenge"?"special-challenge ":type==="scelta"?"special-choice ":type==="dress"?"special-dress ":type==="arrivo"?"special-arrivo ":type==="partenza"?"special-partenza":"");
    cell.className=cls+(completed.has(i)?" completed ":"")+(position===i?" current":"")+(position===i?"":" locked");
    const pawnHtml=position===i?'<div class="pawn">👰🏻‍♀️</div>':'';
    cell.innerHTML=type==="normal"
      ?`<div class="num-plain">${i+1}</div>${pawnHtml}`
      :`<div class="num-badge">${i+1}</div><div class="icon-badge">${icon}</div><div class="cell-name">${genericLabel[type]}</div>${pawnHtml}`;
    if(position===i)cell.onclick=()=>openChallenge(i);
    board.appendChild(cell);
  });
  // CSS grid placement creates a serpentine path: every other row is reversed.
  [...board.children].forEach((cell,i)=>{
    const row=Math.floor(i/6),col=i%6;
    cell.style.gridRow=(9-row);
    cell.style.gridColumn=(row%2===0?col+1:6-col);
  });
  progressBar.style.width=`${completed.size/cells.length*100}%`;
  progressText.textContent=`${completed.size} / ${cells.length}`;
  positionText.textContent=position+1;
  nextBtn.disabled=position>=cells.length-1;
}

function resetModalChrome(i){
  modalExtra.innerHTML="";
  completeBtn.classList.remove("hidden");
  completeBtn.disabled=completed.has(i);
  completeBtn.textContent=completed.has(i)?"PROVA GIÀ COMPLETATA ✓":"PROVA COMPLETATA ✓";
}

function openChallenge(i){
  pending=i;
  const cellData=cells[i];
  const {icon,type}=cellData;
  modalIcon.textContent=icon||"🌿";
  modalType.textContent=genericLabel[type].toUpperCase();
  resetModalChrome(i);

  if(type==="scelta"){
    modalTitle.textContent="Scegli tu";
    modalText.textContent="Ci troviamo ad un bivio? Scegli una delle due.";
    completeBtn.classList.add("hidden");
    const row=document.createElement("div");
    row.className="choice-row";
    const b1=document.createElement("button");
    b1.className="choice-btn choice-obbligo";
    b1.textContent="Scelta A";
    b1.onclick=()=>revealChoice("obbligo",i);
    const b2=document.createElement("button");
    b2.className="choice-btn choice-verita";
    b2.textContent="Scelta B";
    b2.onclick=()=>revealChoice("verita",i);
    row.append(b1,b2);
    modalExtra.appendChild(row);
  } else if(type==="challenge"){
    modalTitle.textContent=cellData.title;
    modalText.textContent="Idea: "+cellData.text+" — aggiungete o togliete voci a piacere, poi spuntatele tutte.";
    if(!customChecklists[i])customChecklists[i]=[{text:cellData.text,done:completed.has(i)}];
    renderEditableChecklist(i);
  } else {
    modalTitle.textContent=cellData.title;
    modalText.textContent=cellData.text;
  }
  modal.classList.remove("hidden");
}

function revealChoice(kind,i){
  const card=cells[i][kind]; // kind = "obbligo" | "verita", specific to this cell
  modalTitle.textContent=card.title;
  modalText.textContent=card.text;
  modalExtra.innerHTML="";
  completeBtn.classList.remove("hidden");
  completeBtn.disabled=completed.has(i);
}

function refreshCompleteBtnFromChecklist(i){
  const items=customChecklists[i]||[];
  completeBtn.disabled=items.length===0||!items.every(it=>it.done);
}

function renderEditableChecklist(i){
  modalExtra.innerHTML="";
  const list=document.createElement("div");
  list.className="todo-list";
  (customChecklists[i]||[]).forEach((item,idx)=>{
    const label=document.createElement("label");
    label.className="todo-item";
    const cb=document.createElement("input");
    cb.type="checkbox";
    cb.checked=item.done;
    cb.onchange=()=>{item.done=cb.checked;saveProgress();refreshCompleteBtnFromChecklist(i)};
    const span=document.createElement("span");
    span.textContent=item.text;
    const remove=document.createElement("button");
    remove.type="button";
    remove.className="todo-remove";
    remove.textContent="✕";
    remove.onclick=()=>{customChecklists[i].splice(idx,1);saveProgress();renderEditableChecklist(i)};
    label.append(cb,span,remove);
    list.appendChild(label);
  });
  modalExtra.appendChild(list);

  const addRow=document.createElement("div");
  addRow.className="todo-add-row";
  const input=document.createElement("input");
  input.type="text";
  input.className="todo-input";
  input.placeholder="Aggiungi una voce…";
  const addBtn=document.createElement("button");
  addBtn.type="button";
  addBtn.className="todo-add-btn";
  addBtn.textContent="＋";
  const addItem=()=>{
    const val=input.value.trim();
    if(!val)return;
    customChecklists[i].push({text:val,done:false});
    input.value="";
    saveProgress();
    renderEditableChecklist(i);
  };
  addBtn.onclick=addItem;
  input.onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();addItem()}};
  addRow.append(input,addBtn);
  modalExtra.appendChild(addRow);

  refreshCompleteBtnFromChecklist(i);
}

function close(){modal.classList.add("hidden");pending=null;modalExtra.innerHTML="";completeBtn.classList.remove("hidden")}

nextBtn.onclick=()=>{
  if(position>=cells.length-1)return;
  position=position+1;
  status.textContent=`Siete arrivate alla casella ${position+1}.`;
  saveProgress();
  render();openChallenge(position);
};

completeBtn.onclick=()=>{
  if(pending===null)return;
  completed.add(pending);close();render();
  saveProgress();
  status.textContent="Prova completata! Premi AVANTI per continuare 🌲";
  if(completed.size===cells.length)setTimeout(()=>win.classList.remove("hidden"),350);
};
document.getElementById("closeModal").onclick=close;
modal.onclick=e=>{if(e.target===modal)close()};
function restartGame(){
  position=0;
  completed=new Set();
  Object.keys(customChecklists).forEach(k=>delete customChecklists[k]);
  status.textContent="Pronta? Clicca sulla prima casella o premi AVANTI per iniziare!";
  win.classList.add("hidden");
  saveProgress();
  render();
}
document.getElementById("restartBtn").onclick=restartGame;
document.getElementById("restartBtn2").onclick=restartGame;
const helpModal=document.getElementById("helpModal");
document.getElementById("helpBtn").onclick=()=>helpModal.classList.remove("hidden");
document.getElementById("closeHelp").onclick=()=>helpModal.classList.add("hidden");
helpModal.onclick=e=>{if(e.target===helpModal)helpModal.classList.add("hidden")};
loadProgress();
if(completed.size>0||position>0)status.textContent="Bentornata! Ecco dove eri rimasta 🌿";
else status.textContent="Pronta? Clicca sulla prima casella o premi AVANTI per iniziare!";
render();
