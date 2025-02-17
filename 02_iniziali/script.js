/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/**
 * Function that takes initial from each element
 * @param {array} names 
 * @returns {array} array with initials for each element of the given array
 */
function justInitials(names) {
  const initials = [];

  for (let i = 0; i < names.length; i++) {
    const element = names[i];
    initials.push(element[0]);
  }

  return initials;
}


// Invoca la funzione qui e stampa il risultato in console
const initials = justInitials(names);
console.log(initials);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]