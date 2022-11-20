// API FormData para obter o elemento formulario.
const form = document.getElementById('row g-3');//row g-3 necessario ser id 
form.addEventListener('submit', callbackFunction);

//Função que trata o evento submit - FormData  objeto registra conteúdo no console; 
function callbackFunction(event){
    event.preventDefault();
    const myFormData = new FormData(event.target);    

    //criar objeto vazio e em seguida iterar sobre o FormData obj criado na seção anterior.
    const FormDataObj = {};
    myFormData.forEach((value, key) => (FormDataObj[key] = value));
    console.log(FormDataObj);

    window.location.href="login.html";
};
