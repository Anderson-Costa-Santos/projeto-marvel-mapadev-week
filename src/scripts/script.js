

/*const homemDeFerro = document.getElementById('homem-de-ferro');

homemDeFerro.addEventListener ('mouseenter', () => {

    homemDeFerro.classList.add('selecionado');

   })*/

const listaDePersonagens = document.querySelectorAll(".personagem");

listaDePersonagens.forEach((personagem) => {

    personagem.addEventListener("mouseenter", () => {
        const personagemSelecionado = document.querySelector(".selecionado")
        personagemSelecionado.classList.remove("selecionado")
        personagem.classList.add("selecionado")



        const idSelecionado = personagem.attributes.id.value;

        



        const imagemJogador1 = document.getElementById("personagem-jogador-1");

        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById("nome-jogador-1");
         
        const nomeSelecionado = personagem.getAttribute("data-name");

        nomeJogador1.innerHTML = nomeSelecionado;


    })


})
















/*
function mudarThor() {

    document.getElementById("personagem-jogador-1").src = "./src/imagens/thor.png";

    document.getElementById("apelido").textContent = "Thor";

}

function mudarFenix() {

    document.getElementById("personagem-jogador-1").src = "./src/imagens/fenix.png";

    document.getElementById("apelido").textContent = "Fenix";

}

function mudarFerro() {

    document.getElementById("personagem-jogador-1").src = "./src/imagens/homem-de-ferro.png";

    document.getElementById("apelido").textContent = "Homem de Ferro";

}
function mudarViuva() {

    document.getElementById("personagem-jogador-1").src = "./src/imagens/viuva-negra.png";

    document.getElementById("apelido").textContent = "Viuva Negra";

}

function mudarHulk() {

    document.getElementById("personagem-jogador-1").src = "./src/imagens/hulk.png";

    document.getElementById("apelido").textContent = "Hulk";

}

function mudarCapitao() {

    document.getElementById("personagem-jogador-1").src = "./src/imagens/capitao-america.png";

    document.getElementById("apelido").textContent = "Capitão America";

}
function mudarNova() {

    document.getElementById("personagem-jogador-1").src = "./src/imagens/nova.png";

    document.getElementById("apelido").textContent = "Nova";

}
function mudarDoom() {

    document.getElementById("personagem-jogador-1").src = "./src/imagens/doutor-doom.png";

    document.getElementById("apelido").textContent = "Doutor Doom";

}
function mudarUltron() {

    document.getElementById("personagem-jogador-1").src = "./src/imagens/ultron.png";

    document.getElementById("apelido").textContent = "Ultron";

}*/