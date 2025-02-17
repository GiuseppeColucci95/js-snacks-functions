/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
/**
 * Function that return a timed greeting from a given name
 * @param {string} name 
 * @returns {string} greeting
 */
function sayTimedHi(name) {
  let greeting;
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 0 && hour < 13) {
    greeting = "Buongiorno ";
  } else if (hour >= 13 && hour < 17) {
    greeting = "Buon pomeriggio ";
  } else {
    greeting = "Buonasera ";
  }

  greeting += name;

  return greeting;
}


// Invoca la funzione qui e stampa il risultato in console
const greeting = sayTimedHi(name);
console.log(greeting);



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.