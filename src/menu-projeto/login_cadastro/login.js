var logado = false;

if (localStorage.getItem("acesso") == "true"){
    logado = true
    console.log("entrou");
}

if(logado != true){
    alert("Você não esta autenticado!");
    window.location.href = "logar.html";
}