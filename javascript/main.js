import {esconde, estender } from "./context.js";

let subti = document.getElementById("subtitulo")
let sobre = document.getElementById("sobre")
let contactar = document.getElementById('contato')
let mais = document.getElementById('simb')

var conteudo= 
{secao: document.getElementById("imagens-menu"),
amais: document.getElementById("extra"),
texto: document.getElementById("apresentacao"),
links: document.querySelector('li')
};

for(let part in conteudo){
    conteudo[part].style.display ='none';
};

esconde(contactar,conteudo.links);
esconde(sobre, conteudo.texto);
esconde(subti,conteudo.secao);
estender(mais,conteudo.amais);


// a funcao esconde é chamada por importacao, e o for in serve para executar a funcao em odo o objeto.

/*

var contactar = document.getElementById('contato');
;
let links = document.querySelector('li');
let subti =document.getElementById("subtitulo");

esconde(imagens_extras);
esconde(imagens_nativos);
esconde(texto);
*/