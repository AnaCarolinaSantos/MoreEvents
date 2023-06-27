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