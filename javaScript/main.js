let usuarioAutenticado = false;

function logar() {

    var email = document.getElementById('floatingInput').value;
    var senha = document.getElementById('floatingPassword').value;

    if (email == "admin@sca" && senha == '123') {
        usuarioAutenticado = true;
        location.href = "home.html";
    } else {
        alert('Usuario ou senha incorretos');
    }
    return usuarioAutenticado;
}

// Função controle quantidade de ingresso--------------------------------------------------------

const controle = document.querySelectorAll("[data-controle]");

controle.forEach((element) => {
    element.addEventListener("click", (evento) => {
        evento.preventDefault();
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
});

function manipulaDados(operacao, controle) {
    const tipoIngresso = controle.querySelector("[data-contador]");

    if (operacao === "-" && tipoIngresso.value != 0) {
        tipoIngresso.value = parseInt(tipoIngresso.value) - 1;
    } else if(operacao === "+"){
        tipoIngresso.value = parseInt(tipoIngresso.value) + 1;
    }
}


// Alerta senha salva com sucesso---------------------

function senhaSalva() {
    alert("Senha alterada com sucesso");
}

function sucessoCadastro() {
    const ok = alert("Cadastro realizado com sucesso");    
}


// Função para construir o inicio pagina de eventos 

let tipoEvento;

function constroiHeader(evento) {
    console.log(evento);
    window.location = `src/eventos.html?${evento}`
    console.log(evento);

    // let headerEvento = () =>{
    //     document.getElementById("tituloEvento").innerHTML = `${evento}`
    // }
    // headerEvento;
}


function headerEvento(tipoEvento) {
    document.getElementById("tituloEvento").innerHTML = `${tipoEvento}`;
}

if (window.location.href.split("?")) {
    const valor = window.location.href.split("?")[1]

    headerEvento(valor);
}