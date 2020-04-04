//variables
const presupuestoUsuario = prompt('Cual es tu presupuesto Semanal?');
const formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;


//clases

//clase de presupuesto
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }
    //Metodo para ir restando del presupuesto actual
    presupuestoRestante(cantidad = 0)  {
        return this.restante -= Number (cantidad);
    }
}

//clase de interfaz maneja todo lo relacionado a el html

class Interfaz {
    insertarPresupuesto(cantidad) {
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');


        //insertar al html
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }

    imprimirMensaje(mensaje, tipo) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        }else {
            divMensaje.classList.add('alert-success');
        }
        divMensaje.appendChild(document.createTextNode(mensaje));
        //insertar en el DOM
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        //quitar el alert dentro de 3segundos
        setTimeout(function() {
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        }, 3000);

    }
    //inserta los gastos a la lista
    agregarGastoListado(nombre, cantidad) {
        const gastosListado = document.querySelector('#gastos ul');

        //crear li
        const li =document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        //insertar el gasto
        li.innerHTML = `
           ${nombre}
           <span class="badge badge-primary badge-pill"> $ ${cantidad}</span>
           `;
           //insertar HTML
           gastosListado.appendChild(li);
        
    }
} 



// event listeners

document.addEventListener('DOMContentLoaded', function() {
    if(presupuestoUsuario === null || presupuestoUsuario === '') {
        window.location.reload();
    }else {
        //Instanciar un presupuesto
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        //instanciar la clase de interfaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);


    }
});

formulario.addEventListener ('submit', function(e) {
    e.preventDefault();
    
    //leer el formulario de gastos
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;

    //instanciar la interfaz
    const ui = new Interfaz();
    //comprobar que los campos no esten vacios
    if(nombreGasto === '' || cantidadGasto === '') {
        //2 parametros mensaje y tipo
        ui.imprimirMensaje('Hubo un error', 'error');
    } else {
        //insertar en el HTML
        ui.imprimirMensaje('Correcto', 'correcto');
        ui.agregarGastoListado(nombreGasto, cantidadGasto);
    }


});