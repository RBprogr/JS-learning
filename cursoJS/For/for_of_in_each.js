// const nome = ['Rubens', 'Rodrigues', 'Thais', 'Julio']

// nome.forEach((name, index, array) => console.log(name, index, array));  

// //  ===========================

// for (let valor of nome){
//     console.log(valor);
// }
// //============================

// for (let ij in nome){
//     console.log(nome[ij]);
// }
// //================================

// for (let i = 0; i < nome.length; i++){
//     console.log(nome[i]);
// }

// for in em objeto
const pessoa = {
    nome: 'Rubens',
    sobrenome: 'Rodrigues',
}

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}
