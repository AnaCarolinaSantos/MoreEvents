async function listaEvento() {
    const conexao = await fetch("http://localhost:3000/eventos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaEvento(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/eventos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            // titulo: titulo,
            // descricao: `${descricao} mil visualizações`,
            // url: url,
            // imagem: imagem
        })
    });

    if(!conexao.ok){
        throw new Error("Não foi possível criar o evento, tente mais tarde!");
    }

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function buscaEvento(termoBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideos
}