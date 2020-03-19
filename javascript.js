//Calificaciones:
let calificacion =17; 

if(calificacion ==20){
  console.log("Excelente");
} 
else if(calificacion > 18){
   console-log("Muy bien");
}
else if(calificacion >16){
   console.log("Vas por buen camino");
}
else if(calificacion >14){
   console.log("Puedes mejorar");
}
else if(calificacion >11){
     console.log("Por poco")
}
else if(calificacion >9){
   console.log("Reprobaste")
}
else{
  console.log("No estudiaste, Reprobaste");
}

//Quitar los multiplos 
for(let i =1;i<= 10;i++){
   if(i % 2 == 0) continue;
   
   console.log(i);
}

for (let i=1; i<=10;i++){ 
   if(i>=10) continue;
    console.log(i);
  }

//Si un numero es par o impar
var num =50;
if ( num%2==0){
  console.log(num+" es par");
}
else{
  console.log(num+" no es par")
}

//Una operacion + si es par o impar
var num1 = 5;
var num2 = 9;
var num3 = 2;
var num4 = 3;

var operacion = num1*num2+num3/num4;
console.log(operacion)

var num = operacion;

if (num%2 ==0){
  console.log("Es par "+num);
}
else{
  console.log("Es impar "+num);

//Juego de numero magico
var num_magico= 5;
var num_adivinado=10;

if(num_magico>num_adivinado){
  console.log("El numero magico es mayor que "+num_adivinado);
}
else{
  console.log("El numero magico es menor que "+num_adivinado);
}
  
//Modelo de saludo
function saluda() {
   console.log("Hola Cristian");
}

saluda();

//cuadrado de un numero:
function cuadrado (numero){
   return numero*numero;
}
let cuadrado_de_un_num =cuadrado(4);
console.log(cuadrado_de_un_num);

//Crear un nombre y una funcion con otro nombre:
var nombre= "Cristian";

function switch_nombres(){
var nombre = "Franco";
console.log(nombre);
}

switch_nombres();
console.log(nombre);

// Saludo
function hola(){
   nombre="Cristian";
}
hola();
console.log(nombre);

//Diferencia entre (let, var y cons)
function mayor_de_edad(edad){
   let resultado;
   if(edad>= 18){
     resultado="Eres mayor de edad";
}
   else{
     resultado="Eres menor de edad";
}
   console.log(resultado);
}
 
 mayor_de_edad();
 
 //El executor

 function executor(funcion){
   funcion();
}

function decirHola(){
   console.log("hola");  
}
executor(function(){
  console.log("Hola");
})

   //Con functions((((()))))

function suma(a,b){
   return a + b;
 }
 
 console.log(suma(4,5));

   //Con Arrow functions
suma = (a,b)=> a + b
console.log(suma(4,5))

//utilizar Arrow functions con "This y setTimeout" 
let tutor = {
   nombre:  "Cristian",
   apellido:  "Luna",
   nombreCompleto: function(){
      setTimeout(()=> {
       console.log(this.nombre + " " + this.apellido)
      }, 2000);
   }
}

tutor.nombreCompleto();

//Call Apply y Bind

//Call
function executor(funcion){
   funcion.call(tutor);
}
let tutor ={
   nombre:  "Cristian",
   apellido:  "Luna",
   nombreCompleto: function(){
      console.log(this.nombre + " " + this.apellido);
   }
}

executor(tutor.nombreCompleto);

function saluda(nombre){console.log("Hola "+ nombre); }
saluda.call(window, "Critian");

//Apply
function executor(funcion){
   funcion.apply(tutor);
}
let tutor ={
   nombre:  "Cristian",
   apellido:  "Luna",
   nombreCompleto: function(){
      console.log(this.nombre + " " + this.apellido);
   }
}

executor(tutor.nombreCompleto);

function saluda(nombre){console.log("Hola "+ nombre); }
saluda.apply(window, ["Critian"]);
//Bind
function executor(funcion){
   funcion();
}
let tutor ={
   nombre:  "Cristian",
   apellido:  "Luna",
   nombreCompleto: function(){
      console.log(this.nombre + " " + this.apellido);
   }
}

executor(tutor.nombreCompleto.bind(tutor));

//Recorrer un arreglo
let arreglo = [2,5,3,45,20,65,10]; 
for(let i=0; i < arreglo.length; i++){
   console.log(arreglo[i]);
}

//Metodos de solucion con arreglo
let arreglo=["Cristian","Franco","Edwin","Francy"];

arreglo.forEach(function(elemento){
   console.log(arreglo);
});

//===== Quitando un nombre=====
let arreglo= ["Cristian","Franco","Edwin","Francy"];

arreglo = arreglo.filter(function(elemento){
   return elemento !="Edwin";
});
arreglo.forEach(function(elemento){
console.log(elemento);
});

//==== Con flecha====
let arreglo= ["Cristian","Edwin","Franco","Francy"];

arreglo= arreglo.filter((elemento)=> elemento != "Edwin");

arreglo.forEach(function(elemento){
   console.log(elemento);
});

// Herramienta que nos ayuda a encontrar 
let arreglo= ["Cristian","Edwin","Franco","Francy"];

let el=arreglo.find(el=> el == "Cristian");

console.log(el);

//Cuadrados de numeros
let numeros = [4,2,25,5];

let cuadrados= numeros.map(numero=> numero * numero);
console.log(cuadrados);

// Funciones constructoras
function Curso(titulo){
  this.titulo= titulo;

  this.inscribir =function(usuario){
     this.console.log(usuario+ "se ha inscrito");
   
  }
}

let cursoJavaScript = new Curso("Curso de javaScript");
let cursoRuby = new Curso("Curso de Ruby");

console.log(cursoRuby.titulo);
console.log(cursoJavaScript.titulo);

//El Class
class Curso {
  
   constructor (titulo){
      this.titulo = titulo;
   }

   inscribir (usuario){
      console.log(usuario + "se ha inscrito");
   }
}

let javaScriptCurso = new Curso("Curso profecional de javaScript");
   console.log(javaScriptCurso.titulo);

javaScriptCurso.inscribir("Cristian");

//Herencia
class User {
   constructor (nombre){
      this.nombre = nombre;
   }
   
   saludar(){
      console.log("Hola "+ this.nombre);
   }
}

class Admin extends User {
  constructor (nombre){
  super(nombre);
}

saludar(){
   super.saludar();
   console.log("Aqui esta el panel de administrador");
  } 
}

let admin = new Admin("Cristian");
admin.saludar();

//Metodos Accesores
class Usuario{
   constructo(nombre){this._name =nombre; }
   
   get name(){
      return this._name.charAt(0).toUpperCase() + this._name.slice(1);
   }
   
   set name(nombre){
     this._name= nombre;
  }
 }
 
 let user=new Usuario("Cristian");
 user.name ="Franco";
 console.log(user.name);

 //Propiedad del prototype
 function User (){}

User.prototype.saludar = function(){
  console.log("Hola");
}

function Admin (){}

Admin.prototype = new User();

let uriel = new Admin ();

uriel.saludar();

//SUMA (Spread Operator)
let numeros =[2,4,8];

function sumar(n1,n2,n3){
  return n1 + n2 + n3;
}


let resultado = sumar(...numeros);
console.log(resultado);

//Suma de numeros con arreglos (convinar objeto mas numero)
let numeros =[2,4,8];

let otro_arreglo = ["hola","mundo"];
console.log([...numeros,...otro_arreglo])

//======Convinando 2 funciones
let objeto = {
   clave:3
 }
 
 let objetoDos ={
   otroCavle:5
 }
 
 console.log(objeto);
 
 console.log(objetoDos);
 
 let newObject= {
   ...objeto,
   ...objetoDos
 }
 
 console.log(newObject);
 
// Facilidad de escribir mas nobres juntos
function saludaATodos (){
   for(nombre of arguments){
     console.log("Hola " + nombre);
   }
 }
 
 saludaATodos("Cristian","Franco","Alumnos")

 //For in
 let usuario= {
   nombre: "Cristian",
   edad: 19
 }
 
 for(propiedad in usuario){
   console.log(propiedad);
 }
 
 //await y async
 async function showGitHubInfo(){
   let response = await fetch("https://api.github.com/users/urielhdz/repos");
   let repos = await response.json();
   console.log(repos);
 }
  showGitHubInfo();

  // Poner un ERROR
  (async function(){
   try{
     let promesa = await Promise.reject("Error");
     let promesa2 = await Promise.reject("Error");
   }catch(err){
     console.log(err);
   }
   
 })()

 //
