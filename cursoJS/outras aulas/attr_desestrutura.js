//  Atribuição via desestruturação (Arrays)


// const numeros = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];

// //  ...rest operator,  ou  ...spred
// const [um, dois, tres, ...rest]

// const [um, , tres, , cinco, , sete] = numeros;
// console.log(um, tres, cinco, sete); // 0 20 40 60

//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//console.log(numeros[1][2]); // 6
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);

// percorrer arrays
let nomes = ['maria', 'josé', 'joão'];

nomes.forEach((nome) => console.log(nome));

// Resultado: maria, josé, joão