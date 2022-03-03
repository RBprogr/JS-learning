let nome = 'Rubens';
var nome1 = 'Rubens';

if (true){
    let nome = 'Rodrigues' // subscreve a let no ambiete local
    var nome1 = 'Rodrigues' // subscreve a variavel no ambiete global
    console.log(nome, nome1); // retorno: Rodrigues Rodrigues
}

console.log(nome, nome1); // retorno: Rubens Rodrigues

// OBS: não usar var.
