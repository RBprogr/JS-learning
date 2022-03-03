const numero = Number(prompt('Difgite um número:'));
const numeroTitulo = document.getElementById("numero-titulo");
numeroTitulo.innerHTML = numero;

const page = document.getElementById('page')
page.innerHTML = '';
page.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
page.innerHTML += `<p>${numero} é inteiro ${Number.isInteger(numero)}</p>`;
page.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
page.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
page.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
page.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;


