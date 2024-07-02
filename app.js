let listaNmr = [];
let nmrlimite = 10;
let nmrSecreto = gerarNumero();
let tentativa = 1;


function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function msgInicial(){
    exibirTextoTela("h1", "Jogo do número secreto");
    exibirTextoTela("p", "Escolha um número entre 1 e 10");
}

msgInicial();


function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == nmrSecreto) {
        exibirTextoTela("h1", "Acertou");
        let plvrTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        let msg = `Você acertou o número ${nmrSecreto} com ${tentativa} ${plvrTentativa} `
        exibirTextoTela("p", msg);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else {
        if (chute > nmrSecreto) {
            exibirTextoTela("p", "O número secreto é menor");
        }
        else {
            exibirTextoTela("p", "O número secreto é maior");
        }
        tentativa++;
        limparCampo();
    }
}

function gerarNumero() {
    let nmrEscolhido = parseInt(Math.random() * nmrlimite + 1);
    let qtdNmrLista = listaNmr.length;

    if(qtdNmrLista == nmrlimite){
        listaNmr = [];
    }
    if (listaNmr.includes(nmrEscolhido)){
        return gerarNumero();
    }
    else{
        listaNmr.push(nmrEscolhido);
        return nmrEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    nmrSecreto = gerarNumero();
    limparCampo();
    tentativa = 1;
    msgInicial();
    document.getElementById("reinciar").setAttribute("disabled", true);
}