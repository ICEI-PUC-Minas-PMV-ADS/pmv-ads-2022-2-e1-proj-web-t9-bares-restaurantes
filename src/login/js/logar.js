// Dados JSON
var Cadastros = [{

    "usuario": "jubileu",
    "nome": "Jubileu dos Anjos",
    "email": "jubileu@abc.com.br",
    "senha": "12345",
    "cargo": "gerente"
},
{
    "usuario": "creonilde",
    "nome": "Creonilde das Flores",
    "email": "creonilde@abc.com.br",
    "senha": "12345",
    "cargo": "cliente"
},
{
    "usuario": "huliete",
    "nome": "Huliete dos Campos",
    "email": "huliete@abc.com.br",
    "senha": "12345",
    "cargo": "cozinheiro(a)"
},
{
    "usuario": "geriscreidon",
    "nome": "Geriscreidon Silva",
    "email": "geriscreidon@abc.com.br",
    "senha": "12345",
    "cargo": "garcom"
}
];

// entrando com os dados
function logar() {
    var useName = document.getElementById("usuario");
    var senha = document.getElementById("senha");

    for (let i = 0; i < Cadastros.length; i++) {
        // Autenticação de Usuário/Senha
        var cargo = Cadastros[i].cargo;

        if (useName.value == Cadastros[i].usuario && senha.value == Cadastros[i].senha) {

            switch (cargo) {
                case 'cliente':
                    window.location.href = "../cliente/index.html";
                    break;
                case 'garcom':
                    window.location.href = "../garçom/garçom.html";
                    break;
                case 'cozinheiro(a)':
                    window.location.href = "../cozinha/Fluxocozinheiro.html";
                    break;
                case 'gerente':
                    window.location.href = "..//index.html";
                    break;
            }

        }
    }
}






