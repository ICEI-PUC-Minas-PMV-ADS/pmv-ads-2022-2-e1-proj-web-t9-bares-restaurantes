// Dados JSON
var textoJSON = {
    "cadastros": [
        {
            "usuario": "jubileu",
            "nome": "Jubileu dos Anjos",
            "email": "jubileu@abc.com.br",
            "senha": "12345"
        },
        {
            "usuario": "creonilde",
            "nome": "Creonilde das Flores",
            "email": "creonilde@abc.com.br",
            "senha": "12345"
        },
        {
            "usuario": "huliete",
            "nome": "Huliete dos Campos",
            "email": "huliete@abc.com.br",
            "senha": "12345"
        },
        {
            "usuario": "geriscreidon",
            "nome": "Geriscreidon Silva",
            "email": "geriscreidon@abc.com.br",
            "senha": "12345"
        }
    ]
};
//Traformando JSON em objt
var obj = JSON.parse(textoJSON);

// entrando com os dados
function logar() {
    var useName = document.getElementById("usuario");
    var senha = document.getElementById("senha");


    // Autenticação de Usuário/Senha
    if (useName.value == obj.usuario && senha.value == obj.senha) {
        localStorage.setItem("acesso", true);
        alert("Usuario autenticado!")

        window.location.href = "../index.html";

    } else {
        alert("Usuario ou senha invalidos!");
    }
};
