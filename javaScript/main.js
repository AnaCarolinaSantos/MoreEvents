function logar() {

    var email = document.getElementById('floatingInput').value;
    var senha = document.getElementById('floatingPassword').value;

    if (email == "admin@sca" && senha == '123') {
        alert('sucesso');
        location.href = "home.html";
    } else {
        alert('Usuario ou senha incorretos');
    }

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
