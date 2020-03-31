constListeners();

function eventListeners() {
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);
}

//Funciones

//Añadir teweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    //Leer el valor del textarea
    const teweet = document.getElementById('tweet').value;
    //crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet'
    botonBorrar.innerText = 'X';

    // crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li,innerText = tweet;
    li.appendChild(botonBorrar);
    listaTweets.appendChild(li);



    console.log(tweet);
}