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