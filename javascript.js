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
