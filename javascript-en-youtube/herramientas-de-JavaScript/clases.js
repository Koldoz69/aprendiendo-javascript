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