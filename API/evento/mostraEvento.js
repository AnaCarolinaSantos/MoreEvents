import { conectaApi } from "../conectaApi.js";

const lista = document.querySelector("[data-eventos]");

export default function constroiCard(dia_evento, mes_evento, nome_evento, data_evento, cidade, estado){
    const evento = document.createElement("li")
    evento.className = "container__card__evento";
    evento.innerHTML = `<a href="../index.html"><img src="../img/Eventos - Baladas/Fluxo1.jpeg" class="card-img" alt="">
    <div class="descricao__evento">
        <div class="data__evento">
            <span>
                <p>${dia_evento}</p>
                <p>${mes_evento}</p>
            </span>
        </div>
        <div class="informacao__evento">
            <span>
                <h4>${nome_evento}</h4>
                <h5>${data_evento}</h5>
                <p>${cidade} | ${estado}</p>
            </span>
        </div>
    </div></a>`

    return evento;
}

async function listaEvento(){
    try{
        const lista_eventosApi = await conectaApi.listaEvento();
        lista_eventosApi.forEach(element => lista.appendChild(
            constroiCard(element.dia_evento, element.mes_evento, element.nome_evento, element.data_evento, element.cidade, element.estado))
        );
    }catch{
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de Eventos</h2>`;
    }
}

listaEvento();
