//1 y 2 clase
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funciones Arrow</title>
</head>
<body>

    <h1 id ="saludo"></h1>
    <h1 id="suma">Resultado de la suma es: </h1>


    <script>
        var saludoId = document.getElementById("saludo");

         // function saludar(nombre){
         //    retunr "Hola " + nombre ; 
         //}

         var saludar = nombre => "Hola " + nombre;

         saludoId.innerHTML = saludar("Cristian");

         var sumaId = document.getElementById("suma");

         var sumar = (num1,num2)=> num1+num2;
         
         sumaId.innerHTML += sumar(10,20);


    </script>
    
</body>
</html>

// Objetos en JS
var arreglo = ["Html", 17, true];

console.log(arreglo[0]);

var objecto = {
    nombre: "Html",
    duracion: "17",
    estado: true,
    capitulos:{
        nombre: "Introduccion",
        videos: 20
    }

}

console.log(objecto.capitulos.nombre);


// Juegos de cambiar usuarios
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>React App</title>
  </head>
  <body>
    <div class="container my-5 text-center"> 
      <button class="btn btn-danger w-100" onclick="traer()">Obtener</button>
      <div class="mt-5" id="contenido"> 

      </div>
    </div>
    <script>
        var contenido = document.querySelector("#contenido");
        function traer() {
              fetch("https://randomuser.me/api/")
              .then(res => res.json())
              .then(data => {
                  console.log(data.results["0"]);
                  contenido.innerHTML =`
                  <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle">
                  <p>Nombre: ${data.results['0'].name.last} </p>
                  `
                })
        }
    </script>
  </body>
</html>


//tabla con fetch
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>React App</title>
  </head>
  <body>
    <div class="container my-5 text-center"> 
      <button class="btn btn-danger w-100" onclick="traer()">Obtener</button>
      <div class="mt-5"> 
        <table class="table">

          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Estado</th>
            </tr>

          </thead>
          
          <tbody id="contenido"> 
          </tbody>
        </table>
      </div>
    </div>
    <script>
        var contenido = document.querySelector('#contenido')
        
        function traer(){
           fetch('tabla.json')
           .then( res => res.json() )
           .then( datos => {
            // console.log(datos)
                 tabla(datos)
           })
        }

        function tabla(datos){
          //console.log(datos)
          contenido.innerHTML = ''
          for(let valor of datos){
            //console.log(valor)
            contenido.innerHTML += `
               
            <tr>
              <th scope="row">${ valor.id }</th>
              <td>${ valor.nombre }</td>
              <td>${ valor.email }</td>
              <td>${ valor.estado ? "Activo" :" Eliminado" }</td>
            
        
            </tr>

 
            `
          }
        }

    </script>
  </body>
</html>

// en json con la ese html LLLL
[
  {
      "id": 1,
      "nombre": "Harry",
      "email": "harry@bluuweb.cl",
      "estado": false
  },
  {
      "id": 2,
      "nombre": "Debra",
      "email": "deb@bluuweb.cl",
      "estado": false
  },
  {
      "id": 3,
      "nombre": "Dexter",
      "email": "dex@bluuweb.cl",
      "estado": true
  },
  {
      "id": 4,
      "nombre": "Rita",
      "email": "rita@bluuweb.cl",
      "estado": true
  }
]


//