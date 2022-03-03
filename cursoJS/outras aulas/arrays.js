
//indexado    0123456789012345
const nome = 'Rubens Rodrigues'
//console.log(nome[4]); // para acesar um indice da string


//indexado tbm    0        1        2      3
const alunos = ['Luis', 'Maria', 'João', 'José'];

console.log(typeof alunos); // retorm o tipo da variavel 
console.log(alunos instanceof Array); // retorna se é array=true ou false = senão

// alunos[2]; // para acesar um indice do array
// alunos[0] = 'Eduardo';  // editei o indice [0], do mu array
// alunos[4] = 'Luiza';    // acrescentei mais um indice no meu array
// (alunos.length)  // para saber o tamanho do array
// alunos.push('Luzia') // add ao final do array
// alunos.unshift('Mara')  // add ao inicio do array
// const removidoFinal = alunos.pop()  // remove o ultimo do array podendo ser gurdadado em uma variavel
// const removidoInicio = alunos.shift() // remove o primeiro do array podendo ser gurdadado em uma variavel
// delete alunos[1]; // deleta o item do array e deixa o indice vazio

// alunos.push('Luiza')
// console.log(alunos.slice(0, -1)); // retorn os item do arry aparti de (0, '') 2 ou -1 que acessa o penultimo item , em branco retorna todo o array


/*  Varias maneiras de percorrer ARRAYS:

alunos.forEach(function(aluno) {
    console.log(aluno);  });
------------------------------------

for(var i = 0; i < alunos.length; i++) {
  console.log(alunos[i]);} 
---------------------------------------
  
  let produtos = [ 
  {nome: 'Coca Cola', preco: 5}, 
  {nome: 'Pizza', preco: 15}, 
  {nome: 'Kinder Ovo', preco: 99} 
];

let produtosBaratos = produtos.filter(function(produto) {
  return produto.preco < 20;
});

console.log(produtosBaratos);
// Resultado:
// [ {nome: 'Coca Cola', preco: 5}, {nome: 'Pizza', preco: 15} ]
  
----------------------------------------------------  
  let alunos = [ 
  {nome: 'josé', idade: 18}, 
  {nome: 'joão', idade: 16}, 
  {nome: 'maria', idade: 21} 
];

let aluno = alunos.find(function(aluno) {
  return aluno.nome === 'joão';
});

console.log(aluno);
// Resultado: { nome: 'joão', idade: 16 }

------------------------------------------------
  
 let numeros = [1, 2, 3, 4, 5, 6];

let total = numeros.reduce(function(total, numero) {
  return total + numero;
}, 0);

console.log(total); // Resultado: 21  
  
  */


