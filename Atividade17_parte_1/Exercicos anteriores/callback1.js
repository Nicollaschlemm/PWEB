const prompt = require('prompt-sync')();

/*Não esquecer de instalar 
npm install prompt-sync*/ 

function saudacao(nome){
    console.log('oi ' + nome);
}

function entradaNome(callback){
    var nome = prompt('Digite um nome: ');
    callback(nome);
}

entradaNome(saudacao);