import { conectaApi } from "../conectaApi.js";

let Email = document.getElementById('floatingInput').value;
let Senha = document.getElementById('floatingPassword').value;
let usuarioAutenticado = false;

async function logar(email, senha) {

    if (email == "admin@admin.com" && senha == 'Admin.321') {
        usuarioAutenticado = true;
        location.href = "../../src/cadastro-evento.html";
    } else if (email == Email && senha == Senha) {
        usuarioAutenticado = true;
        location.href = "../../index.html";
    } else {
        alert('Usuário ou senha incorretos!');
    }

    return usuarioAutenticado;
}

async function listaUsuarios(){
    try{

        const listaUsuarioApi = await conectaApi.listarUsuarios();
        let listaFiltrada = listaUsuarioApi.filter(v => v.email.includes(`${email}`));

        listaFiltrada.forEach(element => {
            logar(element.email, element.senha)
        });

    }catch (error){
        alert(`Não foi possível carregar a lista de usuários</h2> ${error}`);
    }
}