function Cliente (nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo; 
 }
 
 //prototipo que imprime saldo y nombre
 
 Cliente.prototype.nombreClienteSaldo = function() {
     return `Nombre: ${this.nombre},Tu saldo es de ${this.saldo}`;

 }

 const cliente1 = new Cliente ('Pedro', 100);

 console.log(cliente1);



 //banca para empresas

 function Empresa(nombre, saldo,telefono, tipo) {
     Cliente.call(this,nombre, saldo);
     this.telefono = telefono;
     this.tipo = tipo;

 }
 Empresa.prototype = Object.create(Cliente.prototype);
 
const empresa = new Empresa('Udemy', 100000000, 23625232635, 'Educacion');


console.log(empresa.nombreClienteSaldo());