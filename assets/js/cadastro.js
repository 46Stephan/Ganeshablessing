// CADASTRO

let listaUsuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
let logado = sessionStorage.getItem('logado');
let formularioCadastro = document.getElementById('form');


document.addEventListener('DOMContentLoaded', () => {
    checarLogado();
    function checarLogado() {
        if (logado) {
            window.location.href = "home.html";
            return;
        }
    }
})

formularioCadastro.addEventListener('submit', (evento) => {
    evento.preventDefault();

    let usuario = document.getElementById('valorUsuario').value;
    let email = document.getElementById('valorEmail').value;
    let senha = document.getElementById('valorSenha').value;
    let senha2 = document.getElementById('valorSenha2').value;

    if (senha != senha2) {
        alert('SENHA INVÁLIDA');
        return;
    }
    const user = {
        username: usuario,
        email: email,
        password: senha,
        recados: []
    }

    let existe = listaUsuarios.some((valor) => valor.email === email)


    if (existe) {
        alert('ESTE E-MAIL JÁ ESTÁ CADASTRADO!');
        return
    }


    listaUsuarios.push(user);
    salvarDadosStorage(listaUsuarios);
    window.location.href = "index.html";
});



function salvarDadosStorage(listaUsuarios) {
    localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));
};