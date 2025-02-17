/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/**
 * Function that returns an array with names initiating with the given letter
 * @param {Array} names 
 * @param {string} letter 
 * @returns {Array} filteredWord 
 */
//FUNCTION EXPRESSION
/* const justFilteredWords = function (names, letter) {
  const filteredWords = [];

  for (let i = 0; i < names.length; i++) {
    thisName = names[i];
    if (thisName[0] === letter) {
      filteredWords.push(thisName);
    }
  }

  return filteredWords;
} */



//ARROW FUNCTION (SHORT ALSO)
const justFilteredWords = (names, letter) => {
  const filteredWords = [];

  for (let i = 0; i < names.length; i++) {
    thisName = names[i];
    if (thisName[0] === letter) {
      filteredWords.push(thisName);
    }
  }

  return filteredWords;
}


// Invoca la funzione qui e stampa il risultato in console
const filteredWords = justFilteredWords(names, "A");
console.log(filteredWords);



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]