
const data = document.querySelector('h1');
const today = new Date();
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function montaData(today){

    let semanal = today.getDay();
    let diasDaSemana = ['Domingo-feira', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado']
    const diaSemanal = diasDaSemana[semanal];
    const dia = today.getDate();
    const mes = today.getMonth();
    const mesString = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    const mesAtual = mesString[mes]
    const ano = today.getFullYear()
    const hora = today.getHours()
    const min = zeroAEsquerda(today.getMinutes())

    return `${diaSemanal}, ${dia} de ${mesAtual} de ${ano} ${hora}:${min}`;
}

const dataPronta = montaData(today);
data.innerHTML = dataPronta;