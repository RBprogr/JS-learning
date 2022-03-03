const nome = 'Rubens';
const sobrenome = 'Rodrigues';
const idade = 43;
const peso = 78;
const altura = 1.72;
let imc = peso / (altura * altura);
let anoNascimento =  2022 - idade;

//console.log(nome, sobrenome,'tem', idade, 'anos, pesa', peso, 'kg, tem', altura, 'de altura e seu IMC é de', imc, nome, sobrenome, 'nasceu em', anoNascimento);

//Template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${altura} de altura`)
console.log(`e seu IMC é de ${imc}, ${nome} ${sobrenome} nasceu em ${anoNascimento}`);

//NaN - Not a umber, parseInt(inteiro), parseFloat(decimais) e Numnber(converte string para o tipo que é)
const num1 = 10;
const num2 = Number('15.8')
console.log(num1 + num2);
console.log('tipo', typeof num2, num2);
