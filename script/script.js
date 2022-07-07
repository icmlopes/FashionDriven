let criador;
let modeloEscolhido;
let golaEscolhida;
let tecidoEscolhido;
let imagem;
let solitacao = [{
    model: "",
    neck: "",
    material: "",
    image: "",
    owner: "",
    author:""
}]

function perguntarNome() {
    criador = prompt("Qual o seu nome?");
    console.log(criador);
}

let exibir = document.querySelector('.exibir')

//Função que exibe o layout da tela inicial
function telaInicial() {
    exibir.innerHTML = `
    <section class="toda-pagina">

        <div class="container-opcoes">

            <div class="container-opcoes-1">
                <h2>Escolha o modelo</h2>

                <div class="opcoes-modelo">

                    <div class="produto-texto" onclick="selecionarModelo(this, 't-shirt')">
                        <div class="produto modelo">
                            <div class="fundo modelo">
                                <img src="./images/tshirt.png">
                            </div>
                        </div>
                        <h3>T-shirt</h3>
                    </div>
                    
                    <div class="produto-texto"  onclick="selecionarModelo(this, 'top-tank')">
                        <div class="produto modelo">
                            <div class="fundo">
                                <img src="./images/Camiseta.png">
                            </div>
                        </div>
                        <h3>Camiseta</h3>
                    </div>

                    <div class="produto-texto"  onclick="selecionarModelo(this,'long')">
                        <div class="produto modelo">
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

                <div class="opcoes-gola">

                    <div class="produto-texto" onclick="selecionarGola(this, 'v-neck')">
                        <div class="produto gola">
                            <div class="fundo">
                                <img src="./images/GolaV.png">
                            </div>
                        </div>
                        <h3>Gola V</h3>
                    </div>

                    <div class="produto-texto" onclick="selecionarGola(this,'round')">
                        <div class="produto gola">
                            <div class="fundo">
                                <img src="./images/GolaRedonda.png">
                            </div>
                        </div>
                        <h3>Gola Redonda</h3>
                    </div>    

                    <div class="produto-texto" onclick="selecionarGola(this, 'polo')">
                        <div class="produto gola">
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

                <div class="opcoes-tecido">

                    <div class="produto-texto" onclick="selecionarTecido(this, 'silk')">
                        <div class="produto tecido">
                            <div class="fundo">
                                <img src="./images/Seda.png">
                            </div>
                        </div>
                        <h3>Seda</h3>
                    </div>

                    <div class="produto-texto" onclick="selecionarTecido(this, 'cotton')">
                        <div class="produto tecido">
                            <div class="fundo">
                                <img src="./images/Algod+úo.png">
                            </div>
                        </div>
                        <h3>Algodão</h3>
                    </div>

                    <div class="produto-texto" onclick="selecionarTecido(this, 'polyester')">
                        <div class="produto tecido">
                            <div class="fundo">
                                <img src="./images/Poliester.png">
                            </div>
                        </div>
                        <h3>Poliéster</h3>
                    </div>

                </div>

            </div>

            <input type="url" placeholder="Insira o link">

            <button onclick="enviarPedido();">Confirmar pedido</button>

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
    pegarUltimosPedidos();
    perguntarNome();
}

telaInicial();

//Função que exibe na tela os pedidos já existentes
function exibirUltimosPedidos(resposta) {

    let listaUltimosPedidos = document.querySelector(".container-ultimos-pedidos");

    let lista = resposta.data;

    listaUltimosPedidos.innerHTML = '';

    for (let i = 0; i < lista.length; i++) {
        listaUltimosPedidos.innerHTML += `
        <div class="opcoes-alinhar">
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
function selecionarModelo(elemento, modeloClicado) {
    const opcaoClicada = document.querySelector('.opcoes-modelo .selecionado');

    if (opcaoClicada !== null) {
        opcaoClicada.classList.remove('selecionado');
    }
    elemento.classList.add('selecionado');

    modeloEscolhido = modeloClicado;

    //recuperar valor da manga selecionada - igual fiz no drivenEats

    ativarBotao()
}

//Função que adicona a classe selecionado a gola clicado
function selecionarGola(elemento, golaClicada) {
    const opcaoClicada = document.querySelector('.opcoes-gola .selecionado');

    if (opcaoClicada !== null) {
        opcaoClicada.classList.remove('selecionado');
    }
    elemento.classList.add('selecionado');

    golaEscolhida = golaClicada;

    ativarBotao()
}

//Função que adicona a classe selecionado ao tecido clicado
function selecionarTecido(elemento, tecidoClicado) {

    const opcaoClicada = document.querySelector('.opcoes-tecido .selecionado');

    if (opcaoClicada !== null) {
        opcaoClicada.classList.remove('selecionado');
    }
    elemento.classList.add('selecionado');

    tecidoEscolhido = tecidoClicado;

    ativarBotao()
}

//Função que verifica se já tem todas as opções clicadas e só depois altera a cor do botão
function ativarBotao() {

    console.log(modeloEscolhido);
    console.log(golaEscolhida);
    console.log(tecidoEscolhido);

    if (modeloEscolhido !== undefined && golaEscolhida !== undefined && tecidoEscolhido !== undefined) {
        console.log("Deu certo");

        const botaoConfirmarPedido = document.querySelector('button');

        botaoConfirmarPedido.classList.add('confirmado');
    }
}

//Função que pega no AXIOS os pedido já existentes 
function pegarUltimosPedidos() {
    let promessa = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    promessa.then(exibirUltimosPedidos);
    promessa.catch((resposta) => {
        console.log(resposta);
    })
}

//Função que envia o pedido para o AXIOS
function enviarPedido() {
    
    imagem = document.querySelector('input').value;

    solitacao = {
        model: modeloEscolhido,
        neck: golaEscolhida,
        material: tecidoEscolhido,
        image: imagem,
        owner: criador,
        author: criador
    }

    let promessa = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', solitacao);
    promessa.then(confirmacaoPedido);
    promessa.catch(erroPedido);
}

//Função retorno quando o pedido der certo
function confirmacaoPedido() {
    alert('Obaa! Seu pedido está confirmado!! =D Agradecemos a preferência');
}

//Função retorno quando o pedido não der certo
function erroPedido() {
    alert('Ops, não foi possível processar sua encomenda');
}
