// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia piÃ¹ grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
   }
function giveMeRandom(length){
   const myArr = [];
   for(let i = 0; i < length ; i++ ){
    myArr.push(randomInt(0, 10))
   }
   return myArr;
   }

   const random = giveMeRandom(10)

   console.log(random)

   function checkArray(arrayToCheck){
    if(num > 5){
        console.log(true)
        Sum += num ;
    }
    else{
        console.log(false)
    }
   }

/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantitÃ  da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function giveMeRandom(length) {
    const randomArr = [];
    for(let i = 0; i < length; i++) {
      randomArr.push(randomInt(0, 10))
    }
    return randomArr;
  }
  
  //price, id, name, quantity
  const generateRandomId = () => new Date().getTime().toString();
  const generateProduct = () => {
    const productDb = [
      'Panino col salame',
      'Kebab',
      'Nduja di Spilinga',
      'Pastiera',
      'Ravioli del plin',
      'Pizza',
      'Pasta con le sarde',
      'Caprese',
      'Nu Bell Babà',
      'Pane e acqua'
    ];
    const randomIndex = randomInt(0, productDb.length - 1);
    return productDb[randomIndex];
  }
  
  const generateRandomCart = () => {
    const cartLength = randomInt(5, 10);
    const cart = [];
    for(let i = 0; i < cartLength; i++) {
      const price = randomInt(10, 200);
      const id = generateRandomId();
      const name = generateProduct();
      const quantity = randomInt(1, 10);
      cart.push({
        price, id, name, quantity
      })
    }
    return cart;
  }
  
  const totalCartPrice = cart => {
    let total = 0;
    for(const cartItem of cart) {
      total += cartItem.price * cartItem.quantity;
    }
    return total;
  }

  
  const randomCart = generateRandomCart();
  const total = totalCartPrice(randomCart);
  
  console.log(
    randomCart,
    total,
  )
  

/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantitÃ  da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

const addToShoppingCart = (cart, newCartItem) => {
    cart.push(newCartItem);
    let totalQuantity = 0;
    for(const item of cart) {
      totalQuantity += item.quantity;
    }
    return totalQuantity;
  }
  
  const randomCartItem = generateRandomCart();
  const totalQty = addToShoppingCart(randomCart, randomCartItem);
 


/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantitÃ  da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto piÃ¹ costoso in esso contenuto.
*/


const maxShoppingCart = (cart) => {
    let maxCartItem = null;
    for(const item of cart) {
      if(maxCartItem === null || item.price > cart.prince) {
        maxCartItem = item;
      }
    }
    return maxCartItem;
  }


 const maxItem = maxShoppingCart(randomCart);
  console.log(
    randomCart, maxItem
  )
  

/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantitÃ  da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

const latestShoppingCart = cart => cart[cart.length - 1]

const randomCart1 = generateRandomCart();

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchÃ¨ il numero estratto Ã¨ maggiore di x per 3 volte di fila.
*/

// const checkEndLoop = (num, randomNumbers) => {
//     if(randomNumbers.length < 3) {
//       return false;
//     }
    
//     return randomNumbers[randomNumbers.length - 1] > num &&
//       randomNumbers[randomNumbers.length - 2] > num &&
//       randomNumbers[randomNumbers.length - 3] > num;
//   }
//   const loopUntil = num => {
//     const randomNumbers = [];
//     while(!checkEndLoop(num, randomNumbers)) {
//     const random = randomInt(1, 10);
//     console.log(random);
//     randomNumbers.push(random); 
//    }
//   }
  
//   const randomNum = randomInt(1, 9);
//   loopUntil(randomNum)

/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

const crazyAverage = (arr) => {
  let total = 0, totalElements = 0;
  for(const element of arr) {
    if(typeof element !== 'number') {
      continue;
    }
    total += element;
    totalElements++;
  }
  return total / totalElements;
}

console.log(
  crazyAverage([3, 3,'vincenzo', false, 3, 6, 'paolo'])
)

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa piÃ¹ lunga all'interno del parametro ricevuto (un array di stringhe).
*/

const longest = (stringArr) => {
  let max = null;
  for(let i=0; i < stringArr.length; i++){
    const element = stringArr[i];
    if(max === 0 || max.length < element.length){
      max=element;
    }
  }
  return max;
}

/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

const mailFilter = emailContent =>
!emailContent.toUpperCase().includes('SCAM')&&
!emailContent.toLowerCase().includes('SPAM');

console.log(
  mailFilter('SPAM')
)

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

const daysToToday = date => {
  const now = new Date();
  now.setHours(0);
  now.setMinutes(0);
  date.setHours(0);
  date.setMinutes(0);
  const diffMs = Math.abs(now.getTime() - date.getTime());
  return Math.round(diffMs / 1000 / 60 / 60 / 24);
}

console.log(
  daysToToday(new Date('2021-11-11'))
)

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

const buildMatrix = (x, y) => {
  const matrix = [];
  for(let i = 0; i < y; i++) {
    const row = [];
    for(let j = 0; j < x; j ++) {
      row.push(j.toString() + i.toString())
    }
    matrix.push(row);
  }
  return matrix;
}

console.log(buildMatrix(5, 7))