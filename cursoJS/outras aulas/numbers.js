let num1 = 0.7; //number
let num2 = 0.1; //number

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0


console.log(Number.isInteger(num1));
console.log(num1);

/* 
num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0
** Forma correta **
num1 = Number(num1.toFixed(2)) // toFixed(2) conserta a saida do numero mas converte o em string
console.log(typeof(num1)); */    


// console.log(num1.toString() + num2); 
// num1 = num1.toString(); // dessa forma e salva a converção da variavel para string
//console.log(num1.toString(2)); // toString(2) retorna a representação binaria do numero
//console.log(num1.toFixed(2)); // retorna o numero com (2) quantidade descrita de casas decimais
//console.log(Number.isInteger(num1)); // retorna true se for numero e false se não for numero

// let temp = num1 * '5';
// console.log(Number.isNaN(temp)); // retorna true se for (numero invalido) e false se não for (numero valido)



