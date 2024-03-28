var nome = prompt("Nome do aluno");
var nota1 = prompt("digite a nota 1");
var nota2 = prompt("digite a nota 2");
var nota3 = prompt("digite a nota 3");
var media= 0;

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);

media = (nota1 + nota2 + nota3) / 3;

alert("a Media do aluno " + nome + " é: " + media.toFixed(2));



