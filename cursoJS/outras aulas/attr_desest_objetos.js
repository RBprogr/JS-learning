// Atribuição via desestruturação (objetos)

 const pessoa = {
     nome: 'Rubens',
     sobrenome: 'Rodrigues',
     idade: 42,
     endereco: {
         rua: 'Av Brasil',
         numero: 320
     }
 };


// Atribuição via desestruturação
// const { endereco: { rua: r = Almeida, numero }, endereco} = pessoa;
// console.log(r, numero);
// console.log(endereco);

const{ nome, ...resto } = pessoa;
console.log(nome, resto);