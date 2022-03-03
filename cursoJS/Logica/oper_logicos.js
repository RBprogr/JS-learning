/* 
Operadores Lógicos
&& -> AND -> e
|| -> OR  -> ou
!  -> NOT -> não
*/

//true && true && true = true //todas tem ser true
//true && false && true = false

// console.log('Rubens' && 0 && "Maria") // retorna 0
// console.log('Rubens' && true && NaN) // retorna NaN
// console.log('Rubens' && true && "Maria") // retorna Maria (ultimo verdadeiro)
/* 
valores que retornam false em JavaScript
FALSY
false
0
'', "", ``
null / indefined
NaN
*/


// true || false || false = true
// false|| false || false = false //todas tem ser false
const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);

const a = 0;
const b = null;
const c = false;
const d = NaN;
console.log(a || b ||'Joãozinho' || c || d);

const usuario = 'Rubens';
const senha = '123456';

const vaiLogar = usuario === 'Rubens' && senha === '123456';
console.log(vaiLogar);

console.log(!false); //true
console.log(!!false); //false
