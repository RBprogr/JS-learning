/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null, (bigint, symbol) -cópia do valor de referencia

Referência (mutavel) - array, object, function - aponta para a referencia
*/

const a = {
    nome: 'Rubens',
    sobrenome: 'Rodrigues'
};
const b = {...a}; // Fazendo realmente uma copia do object

a.nome = 'João';
console.log(a.nome);
console.log(b.nome);


/* COM ARRAYS
let a = [1, 2, 3];
// let b = a; aki so referencia
let b = [...a]; // aki é feita realmente uma cópia do "a", podendo ser editada sem mexer no valor de "a";
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Rubens')
console.log(a, b, c); */