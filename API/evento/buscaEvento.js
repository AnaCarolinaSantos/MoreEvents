import { conectaApi } from "../conectaApi.js";
import constroiCard from "./mostraEvento.js";  

const Pesquisar = document.querySelector("[data-pesquisa]");
const lista = document.querySelector("[data-eventos]");

async function buscaEvento(termoBusca){
    try{       
        const lista_eventosApi = await conectaApi.listaEvento();
        let listaFiltrada = lista_eventosApi.filter(v => v.titulo_evento.toLowerCase().includes(termoBusca));
        
        while(lista.firstChild){
            lista.removeChild(lista.firstChild);
        }

        listaFiltrada.forEach((element) => {
            lista.appendChild(constroiCard(
                element.data_evento, 
                element.titulo_evento, 
                element.local_nome, 
                element.cidade, 
                element.estado
            )); 
        });

    }catch (error){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de Eventos</h2> ${error}`;
    }
}

// Abaixo modelo para comparar e verificar metodos -----------------

// async function buscaEvento(evento){
//     evento.preventDefault;

//     const termoBusca = document.querySelector("[data-termo]").value;
//     const busca = await conectaApi.listaEvento();

//     const lista = document.querySelector("[data-eventos]");
    
//     while(lista.firstChild){
//         lista.removeChild(lista.firstChild);
//     }

//     busca.forEach(element => {
//         if(element.titulo_evento == termoBusca){
//            lista.appendChild(
//         constroiCard(element.dia_evento, element.mes_evento, element.nome_evento, element.data_evento, element.cidade, element.estado)) 
//         }
//     });
    
//     if(busca.length == 0) {
//         lista.innerHTML = `<h2 class="mensagem__titulo">Não existem EventobuscaEvento com esse termo!</h2>`;
//     }

// }

Pesquisar.addEventListener("click", evento => buscaEvento(document.getElementById('termoBusca').value.toLowerCase()));
