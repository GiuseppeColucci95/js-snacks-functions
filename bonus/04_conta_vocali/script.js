/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/**
 * Function that return the number of vocals in the given word
 * @param {string} sentence 
 * @returns {number} counter
 */
//FUNCTION EXPRESSION
/* const countVocals = function (sentence) {
  let counter = 0;

  for (let i = 0; i < sentence.length; i++) {
    thisLetter = sentence[i];
    if (thisLetter === "a" || thisLetter === "e" || thisLetter === "i" || thisLetter === "o" || thisLetter === "u") {
      counter++;
    }
  }

  return counter;
} */



//ARROW FUNCTION
/* const countVocals = (sentence) => {
  let counter = 0;

  for (let i = 0; i < sentence.length; i++) {
    thisLetter = sentence[i];
    if (thisLetter === "a" || thisLetter === "e" || thisLetter === "i" || thisLetter === "o" || thisLetter === "u") {
      counter++;
    }
  }

  return counter;
} */



//SHORT ARROW FUNCTION
const countVocals = sentence => {
  let counter = 0;

  for (let i = 0; i < sentence.length; i++) {
    thisLetter = sentence[i];
    if (thisLetter === "a" || thisLetter === "e" || thisLetter === "i" || thisLetter === "o" || thisLetter === "u") {
      counter++;
    }
  }

  return counter;
}


// Invoca la funzione qui e stampa il risultato in console
const vocalsNumber = countVocals(word);
console.log(vocalsNumber);




//Risultato atteso se si passa 'javascript': 3 (a, a, i)