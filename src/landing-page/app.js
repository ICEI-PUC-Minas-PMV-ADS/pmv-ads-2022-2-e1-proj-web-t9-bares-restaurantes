function enviar() {
   
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let tel = document.getElementById('tel')
    let msg = document.querySelector('#msg')

    if (nome.value != 0 && email.value != 0 && tel.value != 0 && msg.value != 0) {
        alert(`Obrigado Sr(a) ${nome.value}, seus dados foram encaminhados corretamente.`)
    } else {
        alert('Por favor: Verifique seus dados!')
    }
    msg.value = ''
    msg.focus()
    email.value = ''
    email.focus()
    tel.value = ''
    tel.focus()
    nome.value = ''
    nome.focus()
}
function mascaraTel() {
    let campoTel = document.getElementById('tel')
    let tel = campoTel.value
    if (tel.length == 1) {
        tel = "(" + tel
        campoTel.value = tel
        return true
    }
    if (tel.length == 3) {
        tel = tel + ")"
        campoTel.value = tel
        return true

    }
    if (tel.length == 9) {
        tel = tel + " - "
        campoTel.value = tel
        return true
    }
}