document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

//Llamar AJAX e imprimir resultado

function cargarNombres(e){
    e.preventDefault();

//Leer las variables

    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;

    console.log(cantidad);

    let url = '';
    url += 'https://randomuser.me/api/?';

    //Si hay origen agregarlo a la URL

    if(origenSeleccionado !==''){
        url+= `region=${origenSeleccionado}&`;
    }

    //Si hay un genero agregarlo a la URL

    if(generoSeleccionado !==''){
        url+= `gender=${generoSeleccionado}&`;
    }

        //Si hay un genero agregarlo a la URL

        if(cantidad !==''){
            url+= `amount=${cantidad}&`;
        }

        console.log(url);
    }
