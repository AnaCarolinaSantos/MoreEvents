import { conectaApi } from "../conectaApi.js";

let Senha = document.getElementById('floatingPassword').value;

function logar(email, senha) {

    let usuarioAutenticado = false;
    
    if (Email == "admin@admin.com" && Senha == 'Admin.321') {
        usuarioAutenticado = true;
        preventDefault();
        alert("Seja bem-vindo ADM!");

        location.href = "../../src/cadastro-evento.html";
    } else if (Email == "user@user.com" && Senha == "123456") {
        usuarioAutenticado = true;
        alert("Seja bem-vindo!")
        
        location.href = "../../index.html";
    } else {
        alert('Usuário ou senha incorretos!');
        preventDefault();
    }
}

async function listarUsuarios(){
    try{
        let Email = document.getElementById('floatingInput').value; 

        const listaUsuarioApi = await conectaApi.listarUsuarios();
        let listaFiltrada = listaUsuarioApi.filter(v => v.email.includes(`${Email}`));

        listaFiltrada.forEach(element => ()=>{
            logar(element.email, element.senha)
        });

    }catch (error){
        alert(`Não foi possível carregar a lista de usuários</h2> ${error}`);
    }
}



const login = document.getElementById("button__login");
// login.addEventListener("click", evento => listarUsuarios());