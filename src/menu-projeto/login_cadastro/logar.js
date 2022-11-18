// entrando com os dados
function logar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    
    // Verificação de  email/senha
    if(email.value == "admin@admin" && senha.value == "admin"){
        localStorage.setItem("acesso", true);    
        alert("Usuario autenticado!")

        window.location.href = "../index.html";
    
    }else{
        alert("Usuario ou senha invalidos!");
    }
}

