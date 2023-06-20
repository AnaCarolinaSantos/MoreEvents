import { conectaApi } from "./conectaApi.js";

async function cadastrarCliente() {
    preventDefault();
    let nome = document.querySelector("[data-nome]").value;
    let nascimento = document.querySelector("[data-nascimento]").value;
    let cpf = document.querySelector("[data-cpf]").value;
    let contato = document.querySelector("[data-contato]").value;
    let cep = document.querySelector("[data-cep]").value;
    let estado = document.querySelector("[data-estado]").value;
    let cidade = document.querySelector("[data-cidade]").value;
    let endereco = document.querySelector("[data-endereco]").value;
    let bairro = document.querySelector("[data-bairro]").value;
    let numero = document.querySelector("[data-numero]").value;
    let complemento = document.querySelector("[data-complemento]").value;
    let email = document.querySelector("[data-email]").value;
    let senha = document.querySelector("[data-senha]").value;
    
    try{    
        await conectaApi.criaCliente(nome, nascimento, cpf, contato, cep, estado, 
            cidade, endereco, bairro, numero, complemento, email, senha);
        
            window.location.href = "../modalCadastroSucesso.html";
    }catch(e){
        alert(e);       
    }



}