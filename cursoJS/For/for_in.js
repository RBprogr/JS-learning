
const pessoa = {
    nome: 'Rubens',
    sobrenome: 'Rodrigues',
    idade: 42,
};
// console.log(pessoa.nome);
// console.log(pessoa['nome']);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// const frutas = ['Pera', 'Macã', 'Uva'];
// for (let i in frutas){ // for in -> lê os indices ou chaves do objeto
//     console.log(frutas[i]);
// }

// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }
