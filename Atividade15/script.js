function Validar() {
    var nome = document.getElementById('Nome').value.trim();
    var email = document.getElementById('Email').value.trim();
    var comentarios = document.getElementById('Comentarios').value.trim();
    var primeiraVezSim = document.getElementById('rdSim').checked;
    var primeiraVezNao = document.getElementById('rdNao').checked;
    if (nome === "" || email === "" || comentarios === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false; 
    }

    if (!primeiraVezSim && !primeiraVezNao) {
        alert("Por favor, responda se é sua primeira vez nesta página.");
        return false; 
    }

    if (!primeiraVezSim && !primeiraVezNao) {
        alert("Por favor, responda se é sua primeira vez nesta página.");
        return false; 
    }

    Enviar();
    return true;

}

function Limpar() {
    document.getElementById('Nome').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Comentarios').value = '';
    document.getElementById('rdSim').checked = false;
    document.getElementById('rdNao').checked = false;
}

function Enviar() {
    alert("Formulário válido! Aqui você enviaria os dados para o servidor.");
}