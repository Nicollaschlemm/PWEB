var altura = parseFloat(prompt("Digite sua altura"));
var peso = parseFloat(prompt("Digite seu peso"));

calculoimc(altura,peso);

function calculoimc(altura, peso){
    var imc = parseFloat(peso/Math.pow(altura,2));

    alert("Seu IMC é: " + imc.toFixed(2));

    if (imc < 18.5) {
        alert("Magreza");
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert("Normal");
    } else if (imc >= 25.0 && imc <= 29.9) {
        alert("Sobrepeso");
    } else if (imc >= 30.0 && imc <= 34.9) {
        alert("Obesidade Grau I");
    } else if (imc >= 35.0 && imc <= 39.9) {
        alert("Obesidade Grau II");
    } else {
        alert("Obesidade Grau III");
    }
}


