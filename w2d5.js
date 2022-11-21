/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltÃ  puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non Ã¨ stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1 , l2){
    return l1 + l2;
}

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore Ã¨ lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crezySum(a , b){
    const sum = a+ b;
    return a === b ? sum * 3 : sum;
}

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato Ã¨ piÃ¹ grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(a){
    const crazyDiff = Math.abs(a-19);
    if(crazyResult > 19){
        return crazyResult * 3
    }

    return crazyResult;
}

console.log(
    crazyDiff(5)
)

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro Ã¨ incluso tra 20 e 100 (incluso) o se Ã¨ esattamente uguale a 400.
*/

function boundary(b){
    return a>= 20 && a<= 100 || a === 400;
}

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

 function codify(theString){
    const codeString = 'code'
    const beginning = theString.substr(0, codeString.length)
    if(theString.includes(codeString)){
    return 'code' + theString}
 }

 console.log(
    codify('mario'),
    codify('giorgiocodegiorgio'),
    codify('codecarlo'),

 )

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

 function check3and7(num){
    return num % 3 === 0 || num % 7 === 0;
 }

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(theString){
  let reversed= ' ';
  for(let i = theString.length - 1 ; i >= 0; i--){
    reversed += theString[i];
  }
  return reversed
}

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(theString){
     const arrey = theString.split(' ');
     for(const arrey of words){
        arrey[0].toUpperCase();
     }
}

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */