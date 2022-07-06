
/* prompt("Qual o seu nome?"); */

let exibir = document.querySelector('.exibir')
function telaInicial(){
    exibir.innerHTML=`
    <section class="toda-pagina">
        <div class="container-opcoes">
            <div class="container-opcoes-1">
                <h2>Escolha o modelo</h2>
                <div class="opcoes-produtos">
                    <div class="produto modelo">
                        <div class="fundo">
                            <img src="./images/tshirt.png">
                        </div>
                        <h3>T-shirt</h3>
                    </div>
                    <div class="produto modelo">
                        <div class="fundo">
                            <img src="./images/Camiseta.png">
                        </div>
                        <h3>Camiseta</h3>
                    </div>
                    <div class="produto modelo">
                        <div class="fundo">
                            <img src="./images/Mangalonga.png">
                        </div>
                        <h3>Manga longa</h3>
                    </div>
                </div>
            </div>

            <div class="container-opcoes-1">
                <h2>Escolha a gola</h2>
                <div class="opcoes-produtos">
                    <div class="produto gola">
                        <div class="fundo">
                            <img src="./images/GolaV.png">
                        </div>
                        <h3>Gola V</h3>
                    </div>
                    <div class="produto gola">
                        <div class="fundo">
                            <img src="./images/GolaRedonda.png">
                        </div>
                        <h3>Gola Redonda</h3>
                    </div>
                    <div class="produto gola">
                        <div class="fundo">
                            <img src="./images/GolaPolo.png">
                        </div>
                        <h3>Gola Polo</h3>
                    </div>
                </div>
            </div>

            <div class="container-opcoes-1">
                <h2>Escolha o tecido</h2>
                <div class="opcoes-produtos">
                    <div class="produto tecido">
                        <div class="fundo">
                            <img src="./images/Seda.png">
                        </div>
                        <h3>Seda</h3>
                    </div>
                    <div class="produto tecido">
                        <div class="fundo">
                            <img src="./images/Algod+úo.png">
                        </div>
                        <h3>Algodão</h3>
                    </div>
                    <div class="produto tecido">
                        <div class="fundo">
                            <img src="./images/Poliester.png">
                        </div>
                        <h3>Poliéster</h3>
                    </div>
                </div>
            </div>

            <input type="url" placeholder="Insira o link">

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

function exibirUltimosPedidos(resposta){
    
    let listaUltimosPedidos = document.querySelector(".container-ultimos-pedidos");
    
    let lista = resposta.data;
    
    listaUltimosPedidos.innerHTML = '';

    for (let i = 5; i < lista.length; i++) {
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

function pegarUltimosPedidos(){
    let promessa = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    promessa.then(exibirUltimosPedidos);
    promessa.catch((resposta)=> {
        console.log(resposta);
    })
}