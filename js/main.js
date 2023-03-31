/****** DECLARACION DE VARIABLES ********/
let nameError = document.querySelector('#name-error');
let emailError = document.querySelector('#email-error');
let messageError = document.querySelector('#message-error');
let submitError = document.querySelector('#submit-error');

/********* FUNCIONES *********/
function validateName(){
    let name = document.querySelector('#contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = "El nombre es requerido";
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "nombre incompleto";
        return false;
    }

    nameError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;
}

function validateEmail(){
    let email = document.querySelector('#contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = "Email es requerido";
        return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){
        emailError.innerHTML = 'Email no válido';
        return false;
    }

  
    emailError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;
}

function validateMessage(){
    let message = document.querySelector('#contact-message').value;
    let characters = 20;
    let rest = characters - message.length;

    if(rest > 0){
        messageError.innerHTML = rest + ' caracteres requeridos';
        return false;
    }

    messageError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Rellene los campos necesarios';
        setTimeout(function(){submitError.style.display = 'none';}, 2000); //el mensaje de error desaparece despues de 2000 ms
        return false;
    }  
}
/**************************************************/
