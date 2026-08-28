# 🌿💍 L'avventura di Paola — Addio al Nubilato

Un gioco da tavolo digitale, ambientato in un bosco fatato, pensato per un addio al nubilato. Si avanza casella per casella lungo un percorso a serpentina di 54 caselle: **ogni casella ha la propria prova specifica e fissa**, non pescata a caso.

## 🎮 Come si gioca

1. Clicca sulla casella dove si trova la sposa per aprire la prova.
2. A seconda del tipo di casella:
   - ❓ **Domanda alla sposa** → una domnada da rispondere o da fare
   - ⭐ **Sfida divertente** → una prova da fare
   - 💚 **Scelta da fare** → si sceglie tra due bottoni, ogni casella ha la propria scelta.
   - 👗 **Vestiti** → In corrispondenza di queste caselle ci saranno dei vestiti o accessori da indossare.
3. Premi **PROVA COMPLETATA ✓**.
4. Premi **AVANTI ➜** per muovere la sposa alla casella successiva.
5. Si arriva alla casella 54 e si festeggia! 🥂

Il progresso viene **salvato automaticamente** nel browser (posizione, prove completate e anche le checklist personalizzate create al volo): se chiudi la pagina o il telefono va in standby, alla riapertura ritrovi tutto com'era. Il pulsante **↻ RICOMINCIA** cancella il salvataggio e riparte da zero.

Solo la casella dove si trova la pedina è cliccabile: non si possono vedere le prove successive.

## 📂 Struttura dei file

```
├── index.html    → struttura della pagina
├── style.css     → stile grafico (tema bosco/legno/pergamena)
├── script.js     → logica di gioco, mazzi di prove, salvataggio
├── forest.svg    → illustrazione di sfondo del bosco
└── bosco.png     → mockup originale di riferimento (non usato nel gioco)
```

Tutti i file devono restare **nella stessa cartella**: sono collegati tra loro con percorsi relativi.

## ✏️ Personalizzare

- **Contenuto delle prove**: modifica l'array `cells` in `script.js` — ogni casella (indice 0-53) è un oggetto con `icon`, `type` e il proprio contenuto specifico:
  - `{icon,type,title,text}` per domanda/sfida/normale/arrivo
  - `{icon,type,obbligo:{title,text},verita:{title,text}}` per le caselle "Scelta"
  - `{icon,type,title,text}` per le caselle "Challenge" (`text` è lo spunto iniziale della checklist)
- **Nomi delle caselle**: modifica l'oggetto `genericLabel` in `script.js` (es. per rinominare di nuovo "Scelta" o "Challenge").
- **Numero di caselle**: aggiungi o togli elementi dall'array `cells` (l'ultimo deve restare di tipo `"arrivo"`).
- **Colori e stile**: modifica le variabili CSS in cima a `style.css` (`--green`, `--pink`, `--purple`, `--gold`, `--wood`, ecc.).

## ⚠️ Note

- Il salvataggio dei progressi è legato al singolo browser/dispositivo: se un'amica apre il gioco da un altro telefono, parte con il proprio salvataggio indipendente.
- In navigazione privata (es. Safari modalità privata) il salvataggio non persiste alla chiusura della pagina.
