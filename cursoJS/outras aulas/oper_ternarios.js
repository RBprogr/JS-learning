const pontuacaoUsuario = 1001;

/* 
if (pontuacaoUsuario >= 1000){
    console.log('Usuario Vip');
} else {
    console.log('Usuario normal');
} */
const corUsuario = 'pink';
const corPadrao = corUsuario || 'Preta'

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario Vip' : 'Usuario normal';
console.log(nivelUsuario, corPadrao);

