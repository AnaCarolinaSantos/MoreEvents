// Funcoes sobre listagem e criacao de eventos

async function listaEvento() {
    const conexao = await fetch("http://localhost:3000/evento", () => { mode: 'no-cors'} );
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

async function buscaEvento(id) {
    const conexao = await fetch(`http://localhost:3000/evento/649f7372516eb5ec9def92bd`, ()=>{ mode: 'no-cors'}).then((res) => {res.json()}).catch((er) => {console.log(er)});

    const conexaoConvertida = conexao.then((res) => console.log(res));

    return conexao;
}

//  Funcoes referente ao cadastro de usuario na plataforma 

async function criaCliente(nome, nascimento, cpf, contato, cep, estado, 
    cidade, endereco, bairro, numero, complemento, email, senha) {
    
    const conexao = await fetch("http://localhost:3000/usuario", {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome_usuario:`${nome}`,
            data_nascimento:`${nascimento}`,
            cpf:`${cpf}`,
            telefone:`${contato}`,
            cep:`${cep}`,
            estado:`${estado}`,
            cidade:`${cidade}`,
             endereco:`${endereco}`,
             bairro:`${bairro}`,
            numero: `${numero}`,
            complemento:`${complemento}`,
            email:`${email}`,
            senha:`${senha}`
        })
    });

    if(!conexao.ok){
        throw new Error("Não foi possível realizar cadastro, tente novamnete mais tarde!");
    }

    return true;
}


// Funções referente evento detalhados














































export const conectaApi = {
    listaEvento,
    criaEvento,
    buscaEvento,
    criaCliente
}