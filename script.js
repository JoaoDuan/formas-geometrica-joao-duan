
function verificar() {
    var resposta = document.getElementById("resposta").value;
    var resultado = document.getElementById("resultado");

    if (resposta == "quadrado") {
        resultado.innerHTML = "Resposta correta!";
    } else {
        resultado.innerHTML = "Resposta errada!";
    }
}

function mostrar() {
    var nome = document.getElementById("nome").value;
    var figura = document.getElementById("figura");
    var mensagem = document.getElementById("mensagem");

    figura.className = "";
    figura.innerHTML = "";

    if (nome == "circulo") {
        figura.className = "circulo";
        mensagem.innerHTML = "Círculo encontrado!";
    } else if (nome == "quadrado") {
        figura.className = "forma-quadrado";
        mensagem.innerHTML = "Quadrado encontrado!";
    } else if (nome == "triangulo") {
        figura.className = "triangulo";
        mensagem.innerHTML = "Triângulo encontrado!";
    } else {
        figura.innerHTML = "?";
        mensagem.innerHTML = "Forma não encontrada!";
    }
}
