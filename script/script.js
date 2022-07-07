let modeloEscolhido;
let golaEscolhida;
let tecidoEscolhido;

/* prompt("Qual o seu nome?"); */

let exibir = document.querySelector('.exibir')

//Função que exibe o layout da tela inicial
function telaInicial(){
    exibir.innerHTML=`
    <section class="toda-pagina">

        <div class="container-opcoes">

            <div class="container-opcoes-1">

                <h2>Escolha o modelo</h2>

                <div class="opcoes-produtos">

                    <div class="produto-texto">
                        <div class="produto modelo" onclick="selecionarModelo(this)">
                            <div class="fundo modelo">
                                <img src="./images/tshirt.png">
                            </div>
                        </div>
                        <h3>T-shirt</h3>
                    </div>
                    
                    <div class="produto-texto">
                        <div class="produto modelo" onclick="selecionarModelo(this)">
                            <div class="fundo">
                                <img src="./images/Camiseta.png">
                            </div>
                        </div>
                        <h3>Camiseta</h3>
                    </div>

                    <div class="produto-texto">
                        <div class="produto modelo" onclick="selecionarModelo(this)">
                            <div class="fundo">
                                <img src="./images/Mangalonga.png">
                            </div>
                        </div>
                        <h3>Manga longa</h3>
                    </div>

                </div>

            </div>

            <div class="container-opcoes-1">

                <h2>Escolha a gola</h2>

                <div class="opcoes-produtos">

                    <div class="produto-texto">
                        <div class="produto gola" onclick="selecionarGola(this)">
                            <div class="fundo">
                                <img src="./images/GolaV.png">
                            </div>
                        </div>
                        <h3>Gola V</h3>
                    </div>

                    <div class="produto-texto">
                        <div class="produto gola" onclick="selecionarGola(this)">
                            <div class="fundo">
                                <img src="./images/GolaRedonda.png">
                            </div>
                        </div>
                        <h3>Gola Redonda</h3>
                    </div>    

                    <div class="produto-texto">
                        <div class="produto gola" onclick="selecionarGola(this)">
                            <div class="fundo">
                                <img src="./images/GolaPolo.png">
                            </div>
                        </div>
                        <h3>Gola Polo</h3>
                    </div>

                </div>
                
            </div>

            <div class="container-opcoes-1">

                <h2>Escolha o tecido</h2>

                <div class="opcoes-produtos">

                    <div class="produto-texto">
                        <div class="produto tecido" onclick="selecionarTecido(this)">
                            <div class="fundo">
                                <img src="./images/Seda.png">
                            </div>
                        </div>
                        <h3>Seda</h3>
                    </div>

                    <div class="produto-texto">
                        <div class="produto tecido" onclick="selecionarTecido(this)">
                            <div class="fundo">
                                <img src="./images/Algod+úo.png">
                            </div>
                        </div>
                        <h3>Algodão</h3>
                    </div>

                    <div class="produto-texto">
                        <div class="produto tecido" onclick="selecionarTecido(this)">
                            <div class="fundo">
                                <img src="./images/Poliester.png">
                            </div>
                        </div>
                        <h3>Poliéster</h3>
                    </div>

                </div>

            </div>

            <input type="url" placeholder="Insira o link" required>

            <button>Confirmar pedido</button>

        </div>

        <div class="container-modelo">
            <img src="./images/ilustra+º+úo.png">
        </div>
    </section>

    <footer>

        <h2>Últimos Pedidos</h2>

        <div class="container-ultimos-pedidos">

        </div>
    </footer>
    `
    pegarUltimosPedidos()
}

telaInicial();

//Função que exibe na tela os pedidos já existentes
function exibirUltimosPedidos(resposta){
    
    let listaUltimosPedidos = document.querySelector(".container-ultimos-pedidos");
    
    let lista = resposta.data;
    
    listaUltimosPedidos.innerHTML = '';

    for (let i = 0; i < lista.length; i++) {
        listaUltimosPedidos.innerHTML += `
        <div class="opcaoes-alinhar">
            <div class="produto pronto">
                <div class="fundo-pronto">
                    <img src="${lista[i].image}">
                    <h4><strong>Criador: </strong> ${lista[i].owner}</h4>
                </div>
            </div>
        </div>
        `
    }
}

//Função que adicona a classe selecionado ao modelo clicado
function selecionarModelo(elemento){
    const opcaoClicada = document.querySelector('.fundo.modelo .selecionado');

    if (opcaoClicada !== null){
        opcaoClicada.classList.remove('selecionado');
    }
    elemento.classList.add('selecionado');

    modeloEscolhido = opcaoClicada;

    fazerPedido()
}

//Função que adicona a classe selecionado a gola clicado
function selecionarGola(elemento){
    const opcaoClicada = document.querySelector('.fundo.gola .selecionado');

    if (opcaoClicada !== null){
        opcaoClicada.classList.remove('selecionado');
    }
    elemento.classList.add('selecionado');

    golaEscolhida = opcaoClicada;

    fazerPedido()
}

//Função que adicona a classe selecionado ao tecido clicado
function selecionarTecido(elemento){
    const opcaoClicada = document.querySelector('.fundo.tecido .selecionado');

    if (opcaoClicada !== null){
        opcaoClicada.classList.remove('selecionado');
    }
    elemento.classList.add('selecionado');

    tecidoEscolhido = opcaoClicada;

    fazerPedido()
}

//Função que verifica se já tem todas as opções clicadas e só depois altera a cor do botão
function fazerPedido(){
    if (modeloEscolhido !== undefined && golaEscolhida !== undefined && tecidoEscolhido !== undefined){
        console.log("Deu certo");
        const botaoConfirmarPedido = document.querySelector('button');
        
        botaoConfirmarPedido.classList.add('confirmado');
    }
}

//Função que pega no AXIOS os pedido já existentes 
function pegarUltimosPedidos(){
    let promessa = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    promessa.then(exibirUltimosPedidos);
    promessa.catch((resposta)=> {
        console.log(resposta);
    })
}