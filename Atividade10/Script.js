MaiorNumero();
OrdemCrescente();
var i= Palindromo();
if(i == true){
    alert("E polindromo");
}
else{
    alert("Nao e polindromo");
}

TipoTriangulo()

function  MaiorNumero(){
N1 = parseFloat(prompt("Digite o Primeiro Numero"));
N2 = parseFloat(prompt("Digite o Segundo Numero"));
N3 = parseFloat(prompt("Digite o Terceiro Numero"));
var Maior = Math.max(N1,N2,N3);
return alert("O maior numero e: " + Maior);
}

function OrdemCrescente(){

N1 = parseFloat(prompt("\nOrdem Crescente \n\n Digite o Primeiro Numero")); 
N2 = parseFloat(prompt("\nOrdem Crescente \n\n Digite o Segundo Numero")); 
N3 = parseFloat(prompt("\nOrdem Crescente \n\n Digite o Terceiro Numero")); 

const arr1 = [N1, N2, N3];

return alert(arr1.sort((a,b) => a-b));
}

function Palindromo(){
    var str = prompt("Digite um polindromo, ou não");
    for(var i = 0; i < str.length / 2; i++) if (str[i] != str[str.length - i - 1]) return false;
    return true
}

function TipoTriangulo(){
 a= parseFloat(prompt("Digite o Lado A do Triangulo"));
 b = parseFloat(prompt("Digite o LAdo B do Triangulo"));
 c = parseFloat(prompt("Digite o Lado C do Triangulo"));

    if(a==b && b==c){
        return alert("Triangulo Equilatero");
    }
    else if(a==b || a==c || c==b){
        return alert("Triangulo isóceles");
    }
    else if(a != b || a != b || b != c){
        return alert("Triangulo Escaleno")
    }


}