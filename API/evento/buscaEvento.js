import { conectaApi } from "../conectaApi.js";
import constroiCard from "./mostraEvento.js";  

const Pesquisar = document.querySelector("[data-pesquisa]");
const termoBusca = "Mega";
const lista = document.querySelector("[data-eventos]");

async function buscaEvento(){
    try{       
        const lista_eventosApi = await conectaApi.listaEvento();
        var listaBusca = lista_eventosApi.filter(element => String(element).includes(`Mega`));
        
        listaBusca.forEach((element) => {
            lista.appendChild(
            constroiCard(element.dia_evento, element.mes_evento, element.nome_evento, element.data_evento, element.cidade, element.estado)) 
        });

        while(lista.firstChild){
            lista.removeChild(lista.firstChild);
        }

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

Pesquisar.addEventListener("click", evento => buscaEvento());
