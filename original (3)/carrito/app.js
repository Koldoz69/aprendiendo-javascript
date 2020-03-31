//variables

const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');


//listeners
cargaEventListeners();

function cargaEventListeners()

      //dispara cuando se presiona "Agregar Carrito"
      cursos.addEventListener('click', comprarCursos);

}



//Funciones

function comprarCursos(e) {
    e.preventDefault();

    console.log(e.target.classList);
}