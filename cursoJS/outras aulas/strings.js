//               01234567
let umaString = 'Um texto';

// manipulando string
// console.log(umaString[3]); // = t  
// console.log(umaString.charAt(3)); // = t

//4x concatenação
// console.log(umaString.concat(' em um lindo dia')); 
// console.log(umaString + ' em um lindo dia');
// console.log(umaString, 'em um lindo dia');
// console.log(`${umaString} em um lindo dia`);


//procurar e uma string
console.log(umaString.indexOf('texto')); // encontra 'texto' na string
console.log(umaString.indexOf('o', 3));  // procura a partir do indice 3, para o final
//procurar e uma string de tras para frente
console.log(umaString.lastIndexOf('m', 3)); // procura a partir do indice 3, par o inicio

console.log(umaString.match(/[a-z]/g)); //retorna as letras minusculas da string (com expressao regualr)

console.log(umaString.search(/x/)); // retorna o indice da letra x (com expressao regular)

console.log(umaString.replace('Um', 'Outro')); // replace=troca 'um' por 'outro'
console.log(umaString.replace(/Um/, 'Outro')); // (com expressao regular)troca: 'um' por 'outro'
console.log(umaString.replace(/t/g, 'x')); // (com expressao regular)troca: 'um' por 'outro'  ..a letra g, é para continua substituindo  pr toda a string


console.log(umaString.length); // retorna o tamanho de toda a string

console.log(umaString.slice(3, 7)); // seleciona uma parte especifica da string de 2 ao 7
console.log(umaString.slice(-5, -1));  // retorna uma parte especifica da string de -5 ao -1 ..de trás para frente
console.log(umaString.substring(umaString.length - 5, umaString.length - 1)); // retorna tambem uma parte especifica mas com muito mais codigo

console.log(umaString.split(' ', 1)); // separa a string em palavras ou pelo caracter que escolher, posso determinar quantas palavra da strig quero que retorne (' espaço ou caracter', 4) onde 4 e quantidade de plavaras

console.log(umaString.toUpperCase()); // retorna a frase toda maiuscula
console.log(umaString.toLowerCase()); // retorna a frase toda em minusculo

/* 
3
7
1
[ 'm', 't', 'e', 'x', 't', 'o' ]
5
Outro texto
Outro texto
Um xexxo
8
text
text
text
[ 'Um' ]
UM TEXTO
um texto
*/