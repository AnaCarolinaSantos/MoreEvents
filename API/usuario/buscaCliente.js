// Importss

const buttonPesquisar = document.querySelector("[data-buttonPesquisa]")


async function buscaCliente(evento){
    evento.preventDefault;

    const termoBusca = document.querySelector("[data-busca]").value;
    const busca = await conectaApi.buscaEvento(termoBusca);

    const lista = document.querySelector("[data-lista]");
    
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(element => lista.appendChild(
        constroiCard(element.titulo, element.descricao, element.url, element.imagem))
    );
    
    if(busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem EventobuscaEvento com esse termo!</h2>`;
    }

}

buttonPesquisar.addEventListener("click", evento => buscaEvento(evento))



async function listaUsuarios(){
    try{       
        const lista_eventosApi = await conectaApi.listaEvento();
        lista_eventosApi.forEach(element => lista.appendChild(
            constroiCard(element.data_evento, element.titulo_evento, element.local_nome, element.cidade, element.estado))
        );
    }catch (error){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de Eventos</h2> ${error}`;
    }
}
