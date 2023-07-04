import { conectaApi } from "../conectaApi.js";

const evento = document.querySelector("[data-evento-detalhado]");
const ingresso = document.getElementById("ingressos");

export default function constroiEvento(titulo_evento, local_nome, endereco, estado, cidade, bairro, numero, data_evento, local_coberto, faixa_etaria, hora_abertura, estacionamento, descricao){
    
    const monName = new Array ("Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez");
    
    let dataCompleta = new Date(data_evento);
    console.log(dataCompleta)
    let dia = dataCompleta.getDay();
    let mes = monName[dataCompleta.getMonth()];
    let ano = dataCompleta.getFullYear();
    console.log(ano);
    let data = `${dia}/${("0" + (dataCompleta.getMonth() + 1)).slice(-2)}/${ano}`;

    const cabecalhoEvento = document.getElementById("infoEvento");
    cabecalhoEvento.innerHTML = `<div class="categoria__pesquisa" >
    <span>
        <h3 class="obrigatoriedade">${titulo_evento}</h3>
        <h5>${local_nome}</h5>
    </span>

    <a id="input__ingresso" type="button" class="btn btn-primary" id="button__modal" data-bs-toggle="modal"
    data-bs-target="#modal__ingresso">Selecionar Ingressos</a>
    </div>
    
    <li class="categoria__pesquisa">
<div>
    <div>
        <img class="img__detalhamento__evento" src="../img/Eventos - Baladas/Fluxo1.jpeg" alt="">
    
        <div class="evento__detalhamento">
            <span>
                <p>Endereço: ${endereco}, ${numero} - ${bairro}</p>
                <p>Data do evento: ${data}</p>
                <p>Local coberto: ${local_coberto}</p>
                
                <div class="classificacao__evento">
                    <p>${faixa_etaria}</p>
                </div>
            </span>

            <span>
                <p>${cidade} - ${estado}</p>
                <p>Abertura dos portões: ${hora_abertura}</p>
                <p>Estacionamento: ${estacionamento}</p>

                <a class="obrigatoriedade" target="_blank" href="https://www.google.com.br/maps"><img src="../img/icon/ponteiro-de-mapa.png" alt="">Ver no mapa</a>
            </span>

        </div>
    
    </div>

</div>
<div class="informacoes__adicionais">
    <p>${titulo_evento}</p>
    <p>${descricao}</p>
</div>

</li>`

ingresso.innerHTML = `
<h3 class="obrigatoriedade">Ingressos selecionados</h3>
<ul>
    <li>Nenhum ingresso selecionado</li>
</ul>`

return;

}

async function eventoDetalhado(id) {
    try {       
        const eventosDetalhadoApi = await conectaApi.listaEvento();
        let listaFiltrada = eventosDetalhadoApi.filter(v => v._id.includes(`${id}`));

        listaFiltrada.forEach(element => {
            constroiEvento(
                element.titulo_evento, 
                element.local_nome, 
                element.endereco, 
                element.estado, 
                element.cidade, 
                element.bairro, 
                element.numero, 
                element.data_evento, 
                element.local_coberto, 
                element.faixa_etaria, 
                element.hora_abertura, 
                element.estacionamento, 
                element.descricao
            );
        });

    } catch (error) {
        evento.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de Eventos</h2> ${error}`;
    }
}

function carrinho(evento){
    ingresso.innerHTML = `
    <h3 class="obrigatoriedade">Ingressos selecionados</h3>
    <ul>
        <li>${(evento)=>{
            evento.forEach(evento => {

            })}
        }}</li>
    </ul>`

    return;
}

function controiCompraIngresso() {
    


}






if (window.location.href.split("?")) {
    const url = window.location.href.split("?")[0];
    const idEvento = window.location.href.split("?")[1];

    eventoDetalhado(idEvento);
}


