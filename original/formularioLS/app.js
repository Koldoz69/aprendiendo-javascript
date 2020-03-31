//Variables
const listaTweets = document.getElementById('lista-tweets');

//Event Listeners
eventListeners();


function eventListeners() {
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);

//Borrar Tweet
listaTweets.addEventListener('click', borrarTweet);

//Contenido cargado

document.addEventListener('DOMContentLoaded', localStorageListo);

}

//Funciones

//Añadir teweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    //Leer el valor del textarea
    const tweet = document.getElementById('tweet').value;
    //crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    // crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    //Añade el boton de borrar al tweet
    li.appendChild(botonBorrar);

    //Añade el tweet a la lista
    listaTweets.appendChild(li);

    //Añade a Local Storage
    agregarTweetLocalStorage(tweet);

}
//Elimnar el tweet del DOM

function borrarTweet(e) {
    e.preventDefault();
    if(e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove(); 
        borrarTweetLocalStorage(e.target.parentElement.innerText);
      
        
    }
}

//mostrar  datos de localStorage en la lista 
function localStorageListo() {
    let tweets;

    
    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet){
           //crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    // crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    //Añade el boton de borrar al tweet
    li.appendChild(botonBorrar);

    //Añade el tweet a la lista
    listaTweets.appendChild(li);

    });

}


//Agrega Tweet en local Storage
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    //Añadir el nuevo tweet
    tweets.push(tweet);

    //Convertir de string a arreglo para local Storage
    localStorage.setItem('tweets', JSON.stringify(tweets) );
}


//comprobar que haya elementos en localstorage,retorna un arreglo
function obtenerTweetsLocalStorage(){
    let tweets;
    // Revisamos los valores de local Storage
    if(localStorage.getItem('tweets')=== null) {
        tweets = [];
    }else {
        tweets = JSON.parse(localStorage.getItem('tweets') );
    }
    return tweets;
}

//eliminar twwet de local storage

function borrarTweetLocalStorage(tweet) {

    let tweets, tweetBorrar;
//elimina la Cdel tweet
    tweetBorrar = tweet.substring(0, tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index){
        if(tweetBorrar === tweet) {
            tweets.splice(index,1);
        } 
    });

    localStorage.setItem('tweets', JSON.stringify(tweets) );
}