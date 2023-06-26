import { conectaApi } from "../conectaApi.js";

const lista = document.querySelector("[data-eventos]");

export default function constroiCard(titulo, descricao, url, imagem){
    const evento = document.createElement("li")
    evento.className = "container__card__evento";
    evento.innerHTML = `<a href="../index.html"><img src="../img/Eventos - Baladas/Fluxo1.jpeg" class="card-img" alt="">
    <div class="descricao__evento">
        <div class="data__evento">
            <span>
                <p></p>
                <p>Mar</p>
            </span>
        </div>
        <div class="informacao__evento">
            <span>
                <h4>Nome do evento</h4>
                <h5>14/08/22</h5>
                <p>São Paulo | SP</p>
            </span>
        </div>
    </div></a>`

    return evento;
}

async function listaEvento(){
    try{
        const lista_eventosApi = await conectaApi.listaEvento();
        lista_eventosApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))
        );
    }catch{
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de ElistaEvento</h2>`;
    }
}

listaEvento();
