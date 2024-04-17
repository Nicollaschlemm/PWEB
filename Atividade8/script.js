class Pessoa {
    constructor(idade, sexo, opiniao) {
        this.idade = idade;
        this.sexo = sexo;
        this.opiniao = opiniao;
    }
}

let pesquisas = [];
let mediaIdade = 0;
let contadorOpiniao1 = 0;
let totalOtimoBom = 0;
let totalEntrevistados = 0;

for (let i = 0; i < 45; i++) {
    const idade = parseInt(prompt(`Idade do entrevistado nº ${i + 1}:`));
    const sexo = prompt(`Sexo do entrevistado nº ${i + 1}:`);
    const opiniao = parseInt(prompt(`Opinião (entre 1 e 4) do entrevistado nº ${i + 1}:`));

    const pessoa = new Pessoa(idade, sexo, opiniao);
    pesquisas.push(pessoa);

    mediaIdade += idade;

    if (opiniao === 1) {
        contadorOpiniao1++;
    } else if (opiniao === 3 || opiniao === 4) {
        totalOtimoBom++;
    }

    if (sexo.toUpperCase() === "M" || sexo.toUpperCase() === "F") {
        totalEntrevistados++;
    }
}

mediaIdade /= pesquisas.length;
const porcentagemOtimoBom = (totalOtimoBom / pesquisas.length) * 100;

let maiorIdade = 0;
let menorIdade = pesquisas[0].idade;

for (let i = 0; i < pesquisas.length; i++) {
    if (pesquisas[i].idade > maiorIdade) {
        maiorIdade = pesquisas[i].idade;
    }

    if (pesquisas[i].idade < menorIdade) {
        menorIdade = pesquisas[i].idade;
    }
}

alert(`Média de idade dos entrevistados: ${mediaIdade}\n` + 
`Idade da pessoa mais velha entrevistada: ${maiorIdade}\n` +
`Idade da pessoa mais nova entrevistada: ${menorIdade}\n` +
`Número de respostas "Péssimo": ${contadorOpiniao1}\n` +
`Porcentagem de respostas "Ótimo" ou "Bom": ${porcentagemOtimoBom.toFixed(2)}%\n` +
`Número total de mulheres e homens entrevistados: ${totalEntrevistados}\n`
);
