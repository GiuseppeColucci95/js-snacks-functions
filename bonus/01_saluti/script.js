/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
/**
 * Function to do a greeting
 * @param {string} name 
 * @returns {string} a greeting with the given name
 */
//FUNCTION EXPRESSION
/* const sayHi = function (name) {
  return "ciao " + name;
}



//ARROW FUNCTION
const sayHi = (name) => {
  return "ciao " + name;
} */



//SHORT ARROW FUNCTION
const sayHi = name => "ciao " + name;


// Invoca la funzione qui e stampa il risultato in console
const greeting = sayHi(userName);
console.log(greeting);

//Risultato atteso se si passa 'Mario': // ciao Mario
