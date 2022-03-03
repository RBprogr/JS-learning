
const elementos = [
    {tag: 'p', texto: 'Bom dia pessoal!'},
    {tag: 'div', texto: 'Voces estão só de boa'},
    {tag: 'section', texto: 'Onde sera que aparecerá esta frase'},
    {tag: 'footer', texto: 'Aki com certeza e o rodapé'},
];
/* 
const container = document.querySelector('.container')// aki selecionamos um lugar no html com a classe .container
const div = document.createElement('div');  //aki criamos uma tag para depois ser inserida no html

for (let i = 0; i < elementos.length; i++){
    let{ tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);// aki criamos as tags com o resultado do objeto
    tagCriada.innerHTML = texto; // aki colocamos os texto que saiu do for, que venho do ojeto "elementos" nas tags criada na linha acima
    div.appendChild(tagCriada); // aki inseriomos tagCriada, na tag div ja criada no HTML anteriormente , com "createElement"
}

container.appendChild(div); //aki inserimos no html, pelo sector querySelector(.container)
 */


const container = document.querySelector('.container')
const div = document.createElement('div'); 

for (let i = 0; i < elementos.length; i++){
    let{ tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto; // foi mudado de innerHTML, para innerText
    let textoCriado = document.createTextNode(texto);// aki foi crriado um nó de texto
    tagCriada.appendChild(textoCriado)//aki foi insrida na tag criada
    div.appendChild(tagCriada); 

container.appendChild(div); 
}
