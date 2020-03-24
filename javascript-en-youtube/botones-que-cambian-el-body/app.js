
//variables globales
const BtnBotones = document.querySelector('#BtnBotones');
const Botones = document.querySelector('#Botones');
const fondo= document.querySelector('#fondo');

(()=>{

    BtnBotones.addEventListener('click', agregarBotones);
    Botones.addEventListener('click', delegacion);
    

})();

function delegacion(e){
    e.preventDefault();
    //console.log(e.target.classList[1]);
    const colorBoton = e.target.classList[1];

    switch(colorBoton){


        case('btn-primary'):
        fondo.className ='bg-primary';
        break;

        case('btn-danger'):
        fondo.className ='bg-danger';
        break;

        case('btn-secondary'):
        fondo.className ='bg-secondary';
        break;

        case('btn-success'):
        fondo.className ='bg-success';
        break;

        case('btn-warning'):
        fondo.className ='bg-warning';
        break;
    }

}

function agregarBotones(e){
    e.preventDefault();
    Botones.innerHTML = `
    <button class="btn btn-primary">primary</button>
    <button class="btn btn-secondary">secondary</button>
    <button class="btn btn-danger">danger</button>
    <button class="btn btn-success">success</button>
    <button class="btn btn-warning">warning</button>`;
}