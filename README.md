# 🌿💍 L'avventura di XXX — Addio al Nubilato

Un gioco da tavolo digitale, ambientato in un bosco fatato, pensato per un addio al nubilato. Si lancia il dado, si avanza lungo un percorso a serpentina di 54 caselle e, ogni volta che ci si ferma su una casella speciale, si pesca a sorte una prova da superare — proprio come gli "Imprevisti" del Monopoli.

## 🎮 Come si gioca

1. Premi **LANCIA IL DADO**.
2. La sposa avanza lungo il sentiero nel bosco.
3. Se la casella è speciale, viene pescata a caso una prova tra:
   - ❓ **Domanda sulla sposa**
   - ⭐ **Sfida divertente**
   - 💜 **Obbligo o verità**
   - 👗 **Vesti la sposa**
4. Si preme **PROVA COMPLETATA ✓** e si continua.
5. Si arriva alla casella 54 e si festeggia! 🥂

Il progresso (posizione e prove completate) viene **salvato automaticamente** nel browser: se chiudi la pagina o il telefono va in standby, alla riapertura ritrovi tutto com'era. Il pulsante **↻ RICOMINCIA** cancella il salvataggio e riparte da zero.

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

- **Mazzi di prove**: modifica gli array `pools` in `script.js` (uno per tipo: `question`, `challenge`, `truth`, `dress`, `normal`) per cambiare o aggiungere domande e sfide.
- **Numero di caselle**: la lunghezza dell'array `cellTypes` in `script.js` determina quante caselle ha il percorso.
- **Colori e stile**: modifica le variabili CSS in cima a `style.css` (`--green`, `--pink`, `--purple`, `--gold`, `--wood`, ecc.).

## ⚠️ Nota

Il salvataggio dei progressi è legato al singolo browser/dispositivo: se un'amica apre il gioco da un altro telefono, parte con il proprio salvataggio indipendente.
