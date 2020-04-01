//Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');





//Event Listener

function eventListeners() {
    //inicio de la aplicacion y deshabilitar sumit
    document.addEventListener('DOMContentLoaded', inicioApp);

    //Campos del formulario

    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
}



//funciones

function inicioApp() {
    //desabilitar el envio
    btnEnviar.disabled = true;

}

//Validar que el campo tengo algo escrito

function validarCampo() {
    console.log('Dentro del INPUT');
}