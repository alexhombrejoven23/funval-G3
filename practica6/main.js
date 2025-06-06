class CuentaBancaria {
    constructor(saldo = 0) { this.saldo = saldo; }
    ingresar(cantidad) {
        this.saldo += cantidad;
        alert(`Deposito exitoso. saldo: ${this.saldo}`);
    }
    retirar(cantidad) {
        if(cantidad > this.saldo) {
            alert("saldo insuficiente");
        } else {
            this.saldo -= cantidad;
            alert(`Retiro exitoso. saldo: ${this.saldo}`);
        }
    }
    consultarSaldo() { alert(`Saldo actual: ${this.saldo}`); }
}

window.onload = function() {
    let cuenta = new CuentaBancaria();
    let opcion;
    do {
        opcion = prompt("Escoge una opcion:\n1. Ingresar dinero\n2. Retirar dinero\n3. Consultar saldo\n4. Salir");
        switch (opcion) {
            case "1": cuenta.ingresar(parseFloat(prompt("Cantidad a ingresar:"))); break;
            case "2": cuenta.retirar(parseFloat(prompt("Cantidad a retirar:"))); break;
            case "3": cuenta.consultarSaldo(); break;
        }
    } while (opcion !== "4");
};