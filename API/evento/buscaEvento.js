import { conectaApi } from "../conectaApi.js";
import constroiCard from "./mostraEvento.js";  

const Pesquisar = document.querySelector("[data-Pesquisa]")


async function buscaEvento(evento){
    evento.preventDefault;

    const termoBusca = document.querySelector("[data-Pesquisa]").value;
    const busca = await conectaApi.buscaEvento(termoBusca);

    const lista = document.querySelector("[data-eventos]");
    
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(element => lista.appendChild(
        constroiCard(element.dia_evento, element.mes_evento, element.nome_evento, element.data_evento, element.cidade, element.estado))
    );
    
    if(busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem EventobuscaEvento com esse termo!</h2>`;
    }

}

Pesquisar.addEventListener("click", evento => buscaEvento(evento))
