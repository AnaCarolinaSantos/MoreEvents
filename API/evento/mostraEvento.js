import { conectaApi } from "../conectaApi.js";

const lista = document.querySelector("[data-eventos]");

export default function constroiCard(data_evento, titulo_evento, cidade, estado){
    

    const monName = new Array ("Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez");
    let dataCompleta = new Date(data_evento);
    let dia = dataCompleta.getDay();
    let mes = monName[dataCompleta.getMonth()];
    let ano = dataCompleta.getFullYear();
    let data = `${dia}/${("0" + (dataCompleta.getMonth() + 1)).slice(-2)}/${ano}`;

    const evento = document.createElement("li")
    evento.className = "container__card__evento";
    evento.innerHTML = `<a href="evento-informacoes.html"><img src="../img/Eventos - Baladas/Fluxo1.jpeg" class="card-img" alt="">
    <div class="descricao__evento">
        <div class="data__evento">
            <span>
                <p>${dia}</p>
                <p>${mes}</p>
            </span>
        </div>
        <div class="informacao__evento">
            <span>
                <h4>${titulo_evento}</h4>
                <h5>${data}</h5>
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
            constroiCard(element.data_evento, element.titulo_evento, element.cidade, element.estado))
        );
    }catch (error){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de Eventos</h2> ${error}`;
    }
}

listaEvento();
