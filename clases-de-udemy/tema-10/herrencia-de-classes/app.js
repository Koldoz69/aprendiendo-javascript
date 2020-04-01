class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    imprimirSaldo() { 
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}
const cliente = new Cliente('Pedro', 1000);

console.log(cliente.imprimirSaldo() );


class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {
        //Va hacia el constructor padre
        super(nombre, saldo);
        //no existe en el constructor padre
        this.telefono = telefono;
        this.tipo = tipo;
    }
    
}

const empresa = new Empresa('Empresa1', 10000, 645646416, 'Construccion');

console.log(empresa.imprimirSaldo() );