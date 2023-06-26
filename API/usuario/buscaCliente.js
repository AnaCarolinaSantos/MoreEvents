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