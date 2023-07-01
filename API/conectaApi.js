// Funcoes sobre listagem e criacao de eventos

async function listaEvento() {
    const conexao = await fetch("http://localhost:3000/evento", ()=>{ mode: 'no-cors'});
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaEvento(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/evento", {
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
    const conexao = await fetch(`http://localhost:3000/evento?q=${termoBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

//  Funcoes referente ao cadastro de usuario na plataforma 

async function criaCliente(nome, nascimento, cpf, contato, cep, estado, 
    cidade, endereco, bairro, numero, complemento, email, senha) {
    
    const conexao = await fetch("http://localhost:3000/usuario", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "nome_usuario":"Matheus Vsasarela","data_nascimento":"Nova Esperança","cpf":"12345678999","telefone":"47996242549","cep":"89051615","estado":"SC","cidade":"Blumenau","bairro":"Nova Esperança","numero":{"$numberInt":"265"},"complemento":"casa","email":"matheus@gmail.com","senha":"15155"
        })
    });

    if(!conexao.ok){
        throw new Error("Não foi possível realizar cadastro, tente novamnete mais tarde!");
    }

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaEvento,
    criaEvento,
    buscaEvento,
    criaCliente
}